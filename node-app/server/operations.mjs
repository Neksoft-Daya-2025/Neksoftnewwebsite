import {existsSync} from 'node:fs';
import {mkdir,cp,readFile} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {randomUUID} from 'node:crypto';
import {openDatabase} from './database.mjs';
import {passwordHash,email} from './security.mjs';
if(existsSync('.env'))process.loadEnvFile('.env');
const root=fileURLToPath(new URL('../',import.meta.url));
const directory=path.resolve(process.env.NEKSOFT_DATA_DIR||path.join(root,'.runtime'));
if(!existsSync(path.join(directory,'neksoft.sqlite')))throw Error('No database exists at the configured NEKSOFT_DATA_DIR. Start the backend first.');
const db=openDatabase(directory);
async function hiddenPassword(label){
 if(!process.stdin.isTTY){let value='';for await(const part of process.stdin){value+=part;if(value.length>1000)throw Error('Password input is too long.');}return value.replace(/[\r\n]+$/,'');}
 process.stdout.write(label);process.stdin.setRawMode(true);process.stdin.resume();
 return new Promise((resolve,reject)=>{let value='';const end=()=>{process.stdin.off('data',onData);process.stdin.setRawMode(false);process.stdin.pause();process.stdout.write('\n');};const onData=chunk=>{for(const char of chunk.toString('utf8').replace(/\x1b\[[0-?]*[ -/]*[@-~]/g,'')){if(char==='\u0003'){end();reject(Error('Cancelled.'));return;}if(char==='\r'||char==='\n'){end();resolve(value);return;}if(char==='\u007f'||char==='\b'){if(value){value=value.slice(0,-1);process.stdout.write('\b \b');}}else if(char>=' '&&value.length<200){value+=char;process.stdout.write('*');}}};process.stdin.on('data',onData);});
}
try{
 const command=process.argv[2];
 if(command==='backup'){
  const destination=path.join(directory,'backups',new Date().toISOString().replace(/[:.]/g,'-'));
  await mkdir(destination,{recursive:true,mode:0o700});
  db.prepare('VACUUM INTO ?').run(path.join(destination,'neksoft.sqlite'));
  await cp(path.join(directory,'uploads'),path.join(destination,'uploads'),{recursive:true,errorOnExist:true,force:false});
  if(existsSync(path.join(directory,'mail.key')))await cp(path.join(directory,'mail.key'),path.join(destination,'mail.key'),{force:false,errorOnExist:true});
  console.log('Private database and media backup created:',destination);
 }else if(command==='reset-owner'){
  const account=db.prepare("SELECT id FROM users WHERE email=? AND role='owner'").get(email(process.argv[3]));if(!account)throw Error('An owner account with that email was not found.');
  const password=await hiddenPassword('New owner password: ');if(process.stdin.isTTY){const confirm=await hiddenPassword('Confirm password: ');if(password!==confirm)throw Error('Passwords do not match.');}
  const stored=await passwordHash(password);db.exec('BEGIN IMMEDIATE');try{db.prepare('UPDATE users SET password_hash=?,active=1 WHERE id=?').run(stored,account.id);db.prepare('DELETE FROM sessions WHERE user_id=?').run(account.id);db.prepare('INSERT INTO audit VALUES(?,NULL,?,?,?,?)').run(randomUUID(),'owner.password_recovered',account.id,'Server operator recovery',new Date().toISOString());db.exec('COMMIT');}catch(error){db.exec('ROLLBACK');throw error;}console.log('Owner password updated. Existing owner sessions were revoked.');
 }else throw Error('Use: node server/operations.mjs backup | reset-owner owner@example.com');
}finally{db.close();}
