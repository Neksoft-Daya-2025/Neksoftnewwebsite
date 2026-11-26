import {test} from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp,rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import path from 'node:path';
import {createBackend} from '../app.mjs';

test('blog lifecycle: permissions, private drafts, preview, publish isolation, sitemap, collisions and unpublish',async()=>{
 const directory=await mkdtemp(path.join(tmpdir(),'neksoft-blogs-'));
 const origin='http://127.0.0.1:43871';
 const backend=await createBackend({dataDirectory:directory,origin,serveFrontend:true});
 await new Promise(r=>backend.server.listen(43871,'127.0.0.1',r));
 let cookie='',csrf='';
 const call=async(url,method='GET',body,auth=true,csrfValue=csrf)=>{
  const response=await fetch(origin+url,{method,headers:{Origin:origin,'Content-Type':'application/json',...(auth?{Cookie:cookie,'X-CSRF-Token':csrfValue}:{})},body:body===undefined?undefined:JSON.stringify(body),redirect:'manual'});
  const raw=await response.text();let data;try{data=JSON.parse(raw);}catch{data=raw;}return {status:response.status,data,response};
 };
 try{
  let r=await call('/api/admin/blogs');assert.equal(r.status,401);
  r=await call('/api/auth/setup','POST',{name:'Test owner',email:'test@example.com',password:'test-password-only'});assert.equal(r.status,201);cookie=r.response.headers.get('set-cookie').split(';')[0];csrf=r.data.csrf;
  r=await call('/api/admin/blogs');assert.equal(r.data.posts.length,2);
  const body={title:'Test <script>alert(1)</script>',slug:'test-private-blog',description:'A private draft description.',seoTitle:'Test SEO title',category:'Test',image:'',imageAlt:'',sections:[['Test heading','First paragraph.\n\nSecond paragraph.']]};
  assert.equal((await call('/api/admin/blogs','POST',body,true,'wrong')).status,403);
  r=await call('/api/admin/blogs','POST',body);assert.equal(r.status,201);let post=r.data.post;
  assert.equal((await call('/blogs/test-private-blog')).status,404);
  assert.ok(!(await call('/sitemap.xml')).data.includes('/blogs/test-private-blog'));
  assert.equal((await call('/api/admin/blogs','POST',body)).status,409);
  assert.equal((await call('/api/admin/blogs/'+post.id,'PATCH',{...post,image:'javascript:alert(1)'})).status,400);
  assert.equal((await call('/api/admin/blogs/'+post.id,'PATCH',{...post,version:0})).status,409);
  assert.equal((await call('/admin/blogs/preview/'+post.id,'GET',undefined,false)).status,401);
  r=await call('/admin/blogs/preview/'+post.id);assert.equal(r.status,200);assert.match(r.response.headers.get('x-robots-tag'),/noindex/);assert.ok(r.data.includes('&lt;script&gt;'));assert.ok(!r.data.includes('<script>alert(1)</script>'));
  r=await call('/api/admin/blogs/'+post.id+'/publish','POST',{version:post.version});assert.equal(r.status,200);post=r.data.post;
  r=await call('/blogs/test-private-blog');assert.equal(r.status,200);assert.ok(r.data.includes('Test SEO title'));assert.ok((await call('/sitemap.xml')).data.includes('/blogs/test-private-blog'));
  r=await call('/api/admin/blogs/'+post.id,'PATCH',{...post,title:'Unpublished replacement'});assert.equal(r.status,200);post=r.data.post;
  assert.ok(!(await call('/blogs/test-private-blog')).data.includes('Unpublished replacement'));
  assert.equal((await call('/api/admin/blogs/'+post.id,'PATCH',{...post,slug:'changed-slug'})).status,400);
  r=await call('/api/admin/blogs/'+post.id+'/unpublish','POST',{version:post.version});assert.equal(r.status,200);
  assert.equal((await call('/blogs/test-private-blog')).status,404);assert.ok(!(await call('/sitemap.xml')).data.includes('/blogs/test-private-blog'));
  backend.db.prepare("UPDATE users SET role='sales'").run();assert.equal((await call('/api/admin/blogs')).status,403);
 }finally{await new Promise(r=>backend.server.close(r));backend.db.close();await rm(directory,{recursive:true,force:true});}
});
