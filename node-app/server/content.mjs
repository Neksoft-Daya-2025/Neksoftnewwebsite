import { HttpError, text, email, url, choice } from './security.mjs';

export function validateContent(input, seed, manifest) {
  if (!input || typeof input !== 'object' || Array.isArray(input)) throw new HttpError(400, 'Invalid website content.');
  const output = { schemaVersion: 1, text: {}, images: {}, links: {}, pages: {}, projects: [], team: [], metrics: [], settings: {} };
  const knownText = new Set(manifest.text.flatMap(field => [field.key,field.legacyKey].filter(Boolean)));
  for (const [key, value] of Object.entries(input.text || {})) { if (!knownText.has(key)) {if(/^t_[a-z0-9]+_[a-z0-9]+$/.test(key))continue;throw new HttpError(400, 'An unknown content field was supplied.');} output.text[key] = text(value, 'content', 12000); }
  for (const [key, value] of Object.entries(input.images || {})) { if (!manifest.images.some(field => field.original === key)) throw new HttpError(400, 'Unknown image slot.'); output.images[key] = url(value, 'image URL', true); }
  for (const [key, value] of Object.entries(input.links || {})) {
    if (!manifest.links.some(field => field.original === key)) throw new HttpError(400, 'Unknown website link.');
    if (typeof value !== 'string' || value.length > 2000 || /[\r\n<>]/.test(value)) throw new HttpError(400, 'Invalid link.');
    if (/^\/(?!\/)/.test(value) || /^#[\w-]+$/.test(value) || /^mailto:[^\s<>]+@[^\s<>]+$/.test(value) || /^tel:\+?[\d -]+$/.test(value)) output.links[key] = value;
    else output.links[key] = url(value, 'link');
  }
  for (const [route, page] of Object.entries(seed.pages)) {
    const source = input.pages?.[route] || page;
    output.pages[route] = { title: text(source.title, 'SEO title', 150, true), description: text(source.description, 'SEO description', 400, true) };
  }
  if (!Array.isArray(input.projects) || input.projects.length > 100) throw new HttpError(400, 'Use up to 100 projects.');
  const ids = new Set(); let featured = 0;
  output.projects = input.projects.map(project => {
    const id = text(project.id, 'project ID', 80, true); if (!/^[a-z0-9-]+$/.test(id) || ids.has(id)) throw new HttpError(400, 'Project IDs must be unique lowercase slugs.'); ids.add(id);
    if (project.featured && ++featured > 4) throw new HttpError(400, 'Select no more than four homepage projects.');
    return { id, name: text(project.name, 'project name', 120, true), url: url(project.url, 'project URL'), category: choice(project.category, ['commerce', 'education', 'travel', 'hospitality', 'business'], 'project category'), label: text(project.label, 'project label', 100, true), description: text(project.description, 'project description', 1000, true), initials: text(project.initials, 'initials', 4, true), tone: /^#[a-fA-F0-9]{6}$/.test(project.tone) ? project.tone : '#edf2f8', featured: Boolean(project.featured), visible: project.visible !== false, desktopImage: url(project.desktopImage, 'desktop image', true), mobileImage: url(project.mobileImage, 'mobile image', true), mobileWidth: Number.isInteger(project.mobileWidth) && project.mobileWidth >= 100 && project.mobileWidth <= 4000 ? project.mobileWidth : 390, mobileHeight: Number.isInteger(project.mobileHeight) && project.mobileHeight >= 100 && project.mobileHeight <= 16000 ? project.mobileHeight : 844, note: text(project.note || '', 'project note', 500) };
  });
  if (!output.projects.some(project=>project.visible)) throw new HttpError(400, 'Keep at least one project visible.');
  if (!Array.isArray(input.team) || input.team.length > 100) throw new HttpError(400, 'Use up to 100 team profiles.');
  ids.clear(); output.team = input.team.map(member => {
    const id = text(member.id, 'profile ID', 80, true); if (!/^[a-z0-9-]+$/.test(id) || ids.has(id)) throw new HttpError(400, 'Profile IDs must be unique lowercase slugs.'); ids.add(id);
    return { id, name: text(member.name, 'name', 120, true), role: text(member.role, 'role', 150, true), group: choice(member.group, ['engineering', 'business'], 'department'), description: text(member.description, 'profile description', 2000, true), image: url(member.image, 'portrait', true), width: Number.isInteger(member.width) && member.width > 0 ? member.width : 600, height: Number.isInteger(member.height) && member.height > 0 ? member.height : 600, visible: member.visible !== false };
  });
  if (!Array.isArray(input.metrics) || input.metrics.length !== 4) throw new HttpError(400, 'Use the four company metrics.');
  output.metrics = input.metrics.map(metric => ({ value: text(metric.value, 'metric value', 8, true), suffix: choice(metric.suffix, ['+', '%', ''], 'metric suffix'), label: text(metric.label, 'metric label', 60, true) }));
  const settings = input.settings || {};
  output.settings = { companyName: text(settings.companyName, 'company name', 150, true), contactEmail: email(settings.contactEmail), phone: text(settings.phone, 'phone', 50, true), currency: choice(settings.currency, ['EUR', 'INR', 'USD', 'GBP'], 'currency') };
  const defaults=[{"label":"Home","href":"/","visible":true},{"label":"IoT Solutions","href":"/iot-solutions","visible":true},{"label":"Zoho Services","href":"/zoho-consultation","visible":true},{"label":"Our Products","href":"/#products","visible":true},{"label":"About Us","href":"/about","visible":true},{"label":"Contact","href":"/contact","visible":true}];
  const menus=input.menus??defaults;
  if(!Array.isArray(menus)||menus.length>8)throw new HttpError(400,'Use up to eight main menu links.');
  output.menus=menus.map(item=>{const href=text(item.href,'menu destination',300,true);if(href!=='/insights'&&!Object.hasOwn(seed.pages,href.split(/[?#]/)[0]))throw new HttpError(400,'Choose an existing page for each menu link.');return {label:text(item.label,'menu label',35,true),href,visible:item.visible!==false};});
  const sectionIds=['hero','trust','fisheries360','metrics','manifesto','solutions','system','industries','projects','approach','people','details','contact'];
  const layout=input.homeLayout??sectionIds.map(id=>({id,visible:true}));
  if(!Array.isArray(layout)||layout.length!==sectionIds.length||new Set(layout.map(s=>s.id)).size!==sectionIds.length||layout.some(s=>!sectionIds.includes(s.id)))throw new HttpError(400,'Invalid homepage layout.');
  if(layout[0].id!=='hero'||layout[0].visible===false)throw new HttpError(400,'Keep the hero visible and first.');
  output.homeLayout=layout.map(item=>({id:item.id,visible:item.visible!==false}));
  if (JSON.stringify(output).length > 1500000) throw new HttpError(413, 'Website content is too large.');
  return output;
}
