import {randomUUID} from 'node:crypto';
import {HttpError,jsonBody,text,choice} from './security.mjs';
import {initialArticles} from './editorial.mjs';

export function createBlogService(db,audit){
 db.exec(`CREATE TABLE IF NOT EXISTS blog_posts(id TEXT PRIMARY KEY,slug TEXT UNIQUE NOT NULL,draft TEXT NOT NULL,published TEXT,version INTEGER NOT NULL DEFAULT 1,created_at TEXT NOT NULL,updated_at TEXT NOT NULL,published_at TEXT);`);
 if(!db.prepare('PRAGMA table_info(blog_posts)').all().some(column=>column.name==='deleted_at'))db.exec('ALTER TABLE blog_posts ADD COLUMN deleted_at TEXT');
 const stamp=()=>new Date().toISOString();
 for(const a of initialArticles){
  const slug=a.path.split('/').pop(),data=JSON.stringify({...a,slug,seoTitle:a.title,category:a.path.includes('restaurant')?'Website redesign':'Inquiry strategy',image:'',imageAlt:'',publishedAt:'2026-11-19T00:00:00.000Z',modifiedAt:'2026-11-26T00:00:00.000Z'});
  db.prepare('INSERT OR IGNORE INTO blog_posts(id,slug,draft,published,created_at,updated_at,published_at) VALUES(?,?,?,?,?,?,?)').run('seed-'+slug,slug,data,data,stamp(),stamp(),'2026-11-19T00:00:00.000Z');
 }
 const find=(id,includeDeleted=false)=>{const row=db.prepare('SELECT * FROM blog_posts WHERE id=?').get(id);if(!row||row.deleted_at&&!includeDeleted)throw new HttpError(404,'Blog not found.');return row;};
 const view=row=>({...JSON.parse(row.draft),id:row.id,version:row.version,status:row.deleted_at?'deleted':row.published?'published':'draft',hasUnpublishedChanges:!!row.published&&row.draft!==row.published,updatedAt:row.updated_at,publishedAt:row.published_at});
 function validate(body,old){
  const slug=text(body.slug,'URL slug',100,true);
  if(!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug))throw new HttpError(400,'Use lowercase letters, numbers and hyphens for the URL slug.');
  if(old&&slug!==old.slug)throw new HttpError(400,'The URL slug stays fixed to preserve existing links.');
  const image=text(body.image||'','featured image',500);
  if(image&&(!/^\/(uploads|images)\/[a-zA-Z0-9_./-]+\.(webp|png|jpe?g)$/i.test(image)||image.includes('..')))throw new HttpError(400,'Choose an uploaded image or an existing website image.');
  if(image&&image.startsWith('/uploads/')&&!db.prepare('SELECT id FROM media WHERE path=?').get(image))throw new HttpError(400,'The selected image no longer exists.');
  if(!Array.isArray(body.sections)||!body.sections.length||body.sections.length>40)throw new HttpError(400,'Add between 1 and 40 article sections.');
  return {slug,path:'/blogs/'+slug,title:text(body.title,'blog title',180,true),description:text(body.description,'description',320,true),seoTitle:text(body.seoTitle||body.title,'SEO title',180,true),category:text(body.category||'Practical guide','category',60,true),image,imageAlt:text(body.imageAlt||'','image description',240,!!image),sections:body.sections.map(s=>{if(!Array.isArray(s)||s.length!==2)throw new HttpError(400,'Each section needs a heading and paragraph.');return [text(s[0],'section heading',180,true),text(s[1],'section text',12000,true)];})};
 }
 return {
  published:()=>db.prepare('SELECT published FROM blog_posts WHERE published IS NOT NULL AND deleted_at IS NULL ORDER BY published_at DESC,slug').all().map(r=>JSON.parse(r.published)),
  isDeletedPath:route=>!!db.prepare('SELECT id FROM blog_posts WHERE slug=? AND deleted_at IS NOT NULL').get(route.startsWith('/blogs/')?route.slice(7):''),
  preview:id=>({...JSON.parse(find(id).draft),publishedAt:find(id).published_at||stamp(),modifiedAt:stamp()}),
  imageUsage:image=>db.prepare('SELECT id,title FROM (SELECT id,json_extract(draft,\'$.title\') AS title,draft,published FROM blog_posts) WHERE json_extract(draft,\'$.image\')=? OR json_extract(published,\'$.image\')=?').all(image,image).map(x=>({type:'blog',label:x.title})),
  async handle({req,res,user,requireRole,json,pathname,method}){
   requireRole(user,['owner','editor']);
   if(pathname==='/api/admin/blogs'&&method==='GET'){const rows=db.prepare('SELECT * FROM blog_posts ORDER BY updated_at DESC').all();return json(res,200,{posts:rows.filter(row=>!row.deleted_at).map(view),deletedPosts:rows.filter(row=>row.deleted_at).map(view)});}
   if(pathname==='/api/admin/blogs'&&method==='POST'){
    const data=validate(await jsonBody(req)),id=randomUUID(),time=stamp();
    if(db.prepare('SELECT id FROM blog_posts WHERE slug=?').get(data.slug))throw new HttpError(409,'This URL slug is already used.');
    db.prepare('INSERT INTO blog_posts(id,slug,draft,created_at,updated_at) VALUES(?,?,?,?,?)').run(id,data.slug,JSON.stringify(data),time,time);audit(user,'blog.created',id,data.title);return json(res,201,{post:view(find(id))});
   }
   const match=pathname.match(/^\/api\/admin\/blogs\/([\w-]+)(?:\/(publish|unpublish|restore))?$/);
   if(!match)throw new HttpError(404,'Blog endpoint not found.');
   const row=find(match[1],match[2]==='restore');
   if(method==='DELETE'&&!match[2]||method==='POST'&&match[2]==='restore'){
    const body=await jsonBody(req);if(body.version!==row.version)throw new HttpError(409,'This blog changed. Reload before continuing.');
    const restoring=match[2]==='restore';if(restoring&&!row.deleted_at)throw new HttpError(409,'This blog is not in Deleted blogs.');
    const time=stamp(),result=db.prepare('UPDATE blog_posts SET deleted_at=?,published=NULL,updated_at=?,version=version+1 WHERE id=? AND version=?').run(restoring?null:time,time,row.id,body.version);
    if(!result.changes)throw new HttpError(409,'This blog changed. Reload before continuing.');
    audit(user,restoring?'blog.restored':'blog.deleted',row.id);return json(res,200,{ok:true,...restoring?{post:view(find(row.id))}:{}});
   }
   if(method==='GET'&&!match[2])return json(res,200,{post:view(row)});
   if((method==='PATCH'&&!match[2])||(method==='POST'&&match[2])){
    const body=await jsonBody(req);if(body.version!==row.version)throw new HttpError(409,'This blog changed in another window. Reload it before saving.');
    let result;
    if(!match[2]){const data=validate(body,row);result=db.prepare('UPDATE blog_posts SET draft=?,version=version+1,updated_at=? WHERE id=? AND version=?').run(JSON.stringify(data),stamp(),row.id,body.version);}
    else if(match[2]==='publish'){
     const data=validate(JSON.parse(row.draft),row),time=stamp(),publishedAt=row.published_at||time,payload=JSON.stringify({...data,publishedAt,modifiedAt:time});
     result=db.prepare('UPDATE blog_posts SET published=?,draft=?,published_at=?,version=version+1,updated_at=? WHERE id=? AND version=?').run(payload,payload,publishedAt,time,row.id,body.version);
    }else result=db.prepare('UPDATE blog_posts SET published=NULL,version=version+1,updated_at=? WHERE id=? AND version=?').run(stamp(),row.id,body.version);
    if(!result.changes)throw new HttpError(409,'This blog changed. Reload before saving.');
    audit(user,'blog.'+(match[2]||'saved'),row.id);return json(res,200,{post:view(find(row.id))});
   }
   throw new HttpError(405,'Method not allowed.');
  }
 };
}
