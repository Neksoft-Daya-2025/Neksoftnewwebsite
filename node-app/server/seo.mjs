const servicePaths=new Set(['/website-solutions','/application-solutions','/design-solutions','/saas-solutions','/mobile-development','/digital-marketing','/recruitment-skills','/iot-solutions','/ai-automation','/custom-software','/zoho-consultation']);
export function pageStructuredData(route,page,content,origin){
 const organization={'@type':'Organization','@id':origin+'/#organization',name:content.settings.companyName,url:origin,email:content.settings.contactEmail,telephone:content.settings.phone};
 const webpage={'@type':route==='/about'?'AboutPage':route==='/contact'?'ContactPage':'WebPage','@id':origin+route+'#webpage',url:origin+route,name:page.title,description:page.description,isPartOf:{'@id':origin+'/#website'},about:{'@id':organization['@id']}};
 const graph=[organization,{'@type':'WebSite','@id':origin+'/#website',url:origin+'/',name:'NekSoft Consultancy',publisher:{'@id':organization['@id']}},webpage];
 if(route!=='/')graph.push({'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:origin+'/'},{'@type':'ListItem',position:2,name:page.title,item:origin+route}]});
 if(servicePaths.has(route))graph.push({'@type':'Service','@id':origin+route+'#service',name:page.title,description:page.description,url:origin+route,provider:{'@id':organization['@id']}});
 return {'@context':'https://schema.org','@graph':graph};
}
