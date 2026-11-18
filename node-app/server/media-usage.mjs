export function mediaUsage(assetPath,content,manifest,slot){
 const found=[];const add=(label,editUrl,pageUrl)=>found.push({slot,label,editUrl,pageUrl});
 for(const [original,value]of Object.entries(content.images||{}))if(value===assetPath){const routes=manifest.images.find(f=>f.original===original)?.routes||[];for(const route of routes)add(`Page image · ${route}`,'/admin/content',route);if(!routes.length)add('Website image','/admin/content','');}
 for(const project of content.projects||[])for(const field of ['desktopImage','mobileImage'])if(project[field]===assetPath)add(`${project.name} · ${field==='desktopImage'?'Desktop preview':'Mobile preview'}${project.visible===false?' (hidden)':''}`,'/admin/projects',project.visible===false?'':'/projects');
 for(const member of content.team||[])if(member.image===assetPath)add(`${member.name} · Team portrait${member.visible===false?' (hidden)':''}`,'/admin/team',member.visible===false?'':'/about#our-people');
 for(const [key,value]of Object.entries(content.links||{}))if(value===assetPath)add(`Image link · ${key}`,'/admin/content','');
 for(const [key,value]of Object.entries(content.text||{}))if(typeof value==='string'&&value.includes(assetPath))add('Content field reference','/admin/content','');
 return found;
}
export function assetReferences(path,row,manifest){return [...mediaUsage(path,JSON.parse(row.draft),manifest,'draft'),...mediaUsage(path,JSON.parse(row.published),manifest,'published')];}
