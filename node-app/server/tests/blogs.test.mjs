import {test} from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp,rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import path from 'node:path';
import {createBackend} from '../app.mjs';
import {createBlogService} from '../blog-service.mjs';

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
  const seed=(await call('/api/admin/blogs')).data.posts.find(p=>p.slug==='restaurant-website-redesign-checklist');
  const seedUrl='/api/admin/blogs/'+seed.id;
  assert.equal((await call(seedUrl,'DELETE',{version:seed.version},false)).status,401);
  assert.equal((await call(seedUrl,'DELETE',{version:seed.version},true,'wrong')).status,403);
  assert.equal((await call(seedUrl,'DELETE',{version:0})).status,409);
  assert.equal((await call(seedUrl,'DELETE',{version:seed.version})).status,200);
  let list=(await call('/api/admin/blogs')).data;
  assert.ok(!list.posts.some(p=>p.id===seed.id));assert.equal(list.deletedPosts.length,1);
  assert.equal((await call(seedUrl)).status,404);
  assert.equal((await call('/admin/blogs/preview/'+seed.id)).status,404);
  assert.equal((await call(seedUrl+'/publish','POST',{version:seed.version+1})).status,404);
  r=await call(seed.path);assert.equal(r.status,410);assert.equal(r.response.headers.get('x-robots-tag'),'noindex');
  assert.ok(!(await call('/sitemap.xml')).data.includes(seed.path));
  assert.ok(!(await call('/blogs')).data.includes('href="'+seed.path+'"'));
  createBlogService(backend.db,()=>{}); // A restart must not resurrect a seeded article.
  assert.equal((await call(seed.path)).status,410);
  const deleted=list.deletedPosts[0];
  assert.equal((await call(seedUrl+'/restore','POST',{version:0})).status,409);
  r=await call(seedUrl+'/restore','POST',{version:deleted.version});assert.equal(r.status,200);assert.equal(r.data.post.status,'draft');
  assert.equal((await call(seed.path)).status,404);assert.ok(!(await call('/sitemap.xml')).data.includes(seed.path));
  assert.equal((await call(seedUrl+'/publish','POST',{version:r.data.post.version})).status,200);
  assert.equal((await call(seed.path)).status,200);
  const draft=(await call('/api/admin/blogs/'+post.id)).data.post;
  assert.equal((await call('/api/admin/blogs/'+post.id,'DELETE',{version:draft.version})).status,200);
  backend.db.prepare("UPDATE users SET role='sales'").run();assert.equal((await call('/api/admin/blogs')).status,403);
  assert.equal((await call(seedUrl,'DELETE',{version:0})).status,403);
  assert.equal((await call(seedUrl+'/restore','POST',{version:0})).status,403);
 }finally{await new Promise(r=>backend.server.close(r));backend.db.close();await rm(directory,{recursive:true,force:true});}
});
