import lighthouse from 'lighthouse';
import {launch} from 'chrome-launcher';
import desktopConfig from 'lighthouse/core/config/desktop-config.js';
import {writeFile,mkdir} from 'node:fs/promises';
const label=process.argv[2]||'before',folder=(process.env.SEO_OUTPUT_DIR||'../../seo-20261127').replace(/[\\/]$/,'')+'/';
await mkdir(folder,{recursive:true});
for(const device of process.argv[3]?[process.argv[3]]:['mobile','desktop']){
 const chrome=await launch({chromeFlags:['--headless=new','--disable-gpu','--no-first-run']});
 try{
  const result=await lighthouse('https://www.neksoftconsultancy.com/',{port:chrome.port,output:'json',onlyCategories:['performance'],logLevel:'error'},device==='desktop'?desktopConfig:undefined);
  await writeFile(folder+`lighthouse-${label}-${device}.json`,JSON.stringify(result.lhr));
  console.log(JSON.stringify({label,device,score:result.lhr.categories.performance.score,lcp:result.lhr.audits['largest-contentful-paint'].numericValue,fcp:result.lhr.audits['first-contentful-paint'].numericValue,cls:result.lhr.audits['cumulative-layout-shift'].numericValue,element:result.lhr.audits['largest-contentful-paint-element']?.details,diagnostics:result.lhr.audits['lcp-discovery-insight']?.details}));
 }finally{await chrome.kill();}
}
