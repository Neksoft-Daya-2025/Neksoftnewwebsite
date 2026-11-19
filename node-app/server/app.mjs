import {lighthouseService} from './lighthouse-service.mjs';
import {emailService,notifyEnquiry} from './email-service.mjs';
import {healthService} from './website-health.mjs';
import {seoAssistant} from './seo-assistant.mjs';
import { createServer } from 'node:http';
import {isIP} from 'node:net';
import { randomUUID } from 'node:crypto';
import { readFile, writeFile, mkdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { openDatabase } from './database.mjs';
import { HttpError, token, hash, safeEqual, passwordHash, passwordMatches, rateLimit, readBody, jsonBody, text, email, choice, publicUser } from './security.mjs';
import {assetReferences} from './media-usage.mjs';
import {websiteService} from './website-service.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const stages = ['new', 'qualified', 'proposal', 'won', 'lost'];
const crmRoles = ['owner', 'sales'], contentRoles = ['owner', 'editor'];
const now = () => new Date().toISOString();
const escape = value => String(value).replace(/[&<>"']/g, value => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[value]));
const scriptJson = value => JSON.stringify(value).replace(/</g, '\\u003c').replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
const mimeTypes = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.xml': 'application/xml', '.txt': 'text/plain' };

export async function createBackend(options = {}) {
  const directory = path.resolve(options.dataDirectory || process.env.NEKSOFT_DATA_DIR || path.join(root, '.runtime'));
  const origin = options.origin || process.env.PUBLIC_ORIGIN || 'http://127.0.0.1:4173';
  const production = options.production ?? process.env.NODE_ENV === 'production';
  if (production && !origin.startsWith('https://')) throw Error('Set PUBLIC_ORIGIN to the HTTPS production origin.');
  const db = openDatabase(directory);
  const seedFile = options.seed || JSON.parse(await readFile(path.join(root, 'server/generated/site-seed.json'), 'utf8'));
  const { content: seed, manifest } = seedFile;
  db.prepare('INSERT OR IGNORE INTO site_content(id,draft,published) VALUES(1,?,?)').run(JSON.stringify(seed), JSON.stringify(seed));
  await mkdir(path.join(directory, 'uploads'), { recursive: true, mode: 0o700 });
  let renderer;
  const getContent = () => db.prepare('SELECT * FROM site_content WHERE id=1').get();
  const audit = (user, action, entity, detail = '') => db.prepare('INSERT INTO audit VALUES(?,?,?,?,?,?)').run(randomUUID(), user?.id || null, action, entity, detail.slice(0, 400), now());
  const requireRole = (user, roles) => { if (!user) throw new HttpError(401, 'Sign in to continue.'); if (!roles.includes(user.role)) throw new HttpError(403, 'Your role does not have access to this action.'); };
  const countUsers = () => db.prepare('SELECT count(*) AS count FROM users').get().count;
  const sessionFor = req => {
    const cookie = (req.headers.cookie || '').split(';').map(value => value.trim()).find(value => value.startsWith('neksoft_session='))?.slice(16);
    if (!cookie) return null;
    return db.prepare('SELECT s.*,u.id,u.name,u.email,u.role,u.active FROM sessions s JOIN users u ON u.id=s.user_id WHERE s.token_hash=? AND s.expires_at>? AND u.active=1').get(hash(cookie), Date.now()) || null;
  };
  const cookie = (value, maxAge) => `neksoft_session=${value}; Path=/; HttpOnly; SameSite=Strict; Max-Age=${maxAge}${production || origin.startsWith('https:') ? '; Secure' : ''}`;
  function startSession(res, user) { const value = token(), csrf = token(); db.prepare('DELETE FROM sessions WHERE expires_at<?').run(Date.now()); db.prepare('INSERT INTO sessions VALUES(?,?,?,?)').run(hash(value), user.id, csrf, Date.now() + 8 * 3600000); res.setHeader('Set-Cookie', cookie(value, 28800)); return { user: publicUser(user), csrf, setupRequired: false }; }
  function checkOrigin(req) { if (req.headers.origin !== origin || req.headers['sec-fetch-site'] === 'cross-site') throw new HttpError(403, 'This request must come from the website.'); }
  const ownerId = value => { if (!value) return null; const user = db.prepare('SELECT id,role,active FROM users WHERE id=?').get(value); if (!user || !user.active || !crmRoles.includes(user.role)) throw new HttpError(400, 'Choose an active CRM team member.'); return user.id; };
  const leadValues = (body, old = {}) => ({ name: text(body.name ?? old.name, 'full name', 120, true), email: email(body.email ?? old.email), company: text(body.company ?? old.company ?? '', 'company', 200), message: text(body.message ?? old.message ?? '', 'project description', 12000), service: text(body.service ?? old.service ?? '', 'service', 500), stage: choice(body.stage ?? old.stage ?? 'new', stages, 'pipeline stage'), priority: choice(body.priority ?? old.priority ?? 'normal', ['low', 'normal', 'high'], 'priority'), value: Number.isInteger(body.value ?? old.value ?? 0) && (body.value ?? old.value ?? 0) >= 0 && (body.value ?? old.value ?? 0) <= 100000000000 ? (body.value ?? old.value ?? 0) : (() => { throw new HttpError(400, 'Enter a valid deal value.'); })(), currency: choice(body.currency ?? old.currency ?? 'EUR', ['EUR', 'INR', 'USD', 'GBP'], 'currency'), owner_id: ownerId(body.owner_id === undefined ? old.owner_id : body.owner_id), archived: body.archived === undefined ? (old.archived || 0) : Number(Boolean(body.archived)) });
  function addLead(body, source, user = null, dedupKey = null) { const values = leadValues(body), id = randomUUID(), time = now(); db.prepare('INSERT INTO leads(id,name,email,company,message,service,source,stage,priority,value,currency,owner_id,archived,dedup_key,created_at,updated_at) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)').run(id, values.name, values.email, values.company, values.message, values.service, source, values.stage, values.priority, values.value, values.currency, values.owner_id, values.archived, dedupKey, time, time); audit(user, 'lead.created', id, source); return db.prepare('SELECT * FROM leads WHERE id=?').get(id); }
  function leadById(id) { const lead = db.prepare('SELECT * FROM leads WHERE id=?').get(id); if (!lead) throw new HttpError(404, 'This enquiry could not be found.'); return lead; }
  const json = (res, status, value) => { res.statusCode = status; res.setHeader('Content-Type', 'application/json; charset=utf-8'); res.end(JSON.stringify(value)); };

  const server = createServer(async (req, res) => {
    const requestId = randomUUID();
    res.setHeader('X-Content-Type-Options', 'nosniff'); res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');res.setHeader('Content-Security-Policy',"base-uri 'self'; object-src 'none'; frame-ancestors 'self'");
    res.setHeader('X-Request-Id', requestId); res.setHeader('Cache-Control', 'no-store');
    const pathname = new URL(req.url, origin).pathname, method = req.method || 'GET';
    const directIP=req.socket.remoteAddress||'unknown',forwarded=String(req.headers['x-forwarded-for']||'').split(',')[0].trim();
    const ip=process.env.TRUST_PROXY==='1'&&['127.0.0.1','::1','::ffff:127.0.0.1'].includes(directIP)&&isIP(forwarded)?forwarded:directIP;
    try {
      if (pathname.startsWith('/api/')) {
        if (!['GET', 'HEAD'].includes(method)) checkOrigin(req);
        const session = sessionFor(req), user = session ? publicUser(session) : null;
        if (pathname.startsWith('/api/admin/') || pathname === '/api/auth/logout' || pathname === '/api/auth/password') {
          if (!user) throw new HttpError(401, 'Sign in to continue.');
          if (!['GET', 'HEAD'].includes(method) && !safeEqual(req.headers['x-csrf-token'], session.csrf)) throw new HttpError(403, 'Your session changed. Refresh the page and try again.');
        }
        if (pathname === '/api/health' && method === 'GET') return json(res, 200, { status: 'ok', database: 'connected', setupRequired: !countUsers() });
        if (pathname === '/api/auth/session' && method === 'GET') return json(res, 200, { user, csrf: session?.csrf || null, setupRequired: !countUsers(), setupAvailable: !production || Boolean(process.env.ADMIN_SETUP_TOKEN),setupTokenRequired:production });
        if (pathname === '/api/auth/setup' && method === 'POST') {
          rateLimit(db, `setup:${ip}`, 8, 3600000);
          if (countUsers()) throw new HttpError(409, 'The administrator account is already configured.');
          const body = await jsonBody(req);
          if (production && (!process.env.ADMIN_SETUP_TOKEN || !safeEqual(body.setupToken, process.env.ADMIN_SETUP_TOKEN))) throw new HttpError(403, 'Enter the setup token configured by the server administrator.');
          if (!production && !['127.0.0.1', '::1', '::ffff:127.0.0.1'].includes(directIP)) throw new HttpError(403, 'Initial setup is available only on this computer.');
          const admin = { id: randomUUID(), name: text(body.name, 'name', 120, true), email: email(body.email), role: 'owner', active: 1 }, password = await passwordHash(body.password);
          db.exec('BEGIN IMMEDIATE'); try { if (countUsers()) throw new HttpError(409, 'Setup has already been completed.'); db.prepare('INSERT INTO users VALUES(?,?,?,?,?,1,?)').run(admin.id, admin.email, admin.name, admin.role, password, now()); audit(admin, 'owner.created', admin.id); db.exec('COMMIT'); } catch (error) { db.exec('ROLLBACK'); throw error; }
          return json(res, 201, startSession(res, admin));
        }
        if (pathname === '/api/auth/login' && method === 'POST') {
          rateLimit(db, `login:${ip}`, 15, 15 * 60000);
          const body = await jsonBody(req), accountEmail = email(body.email);
          rateLimit(db, `account-login:${accountEmail}`, 8, 15 * 60000);
          const account = db.prepare('SELECT * FROM users WHERE email=?').get(accountEmail);
          const matches = await passwordMatches(body.password, account?.password_hash);
          if (!account?.active || !matches) throw new HttpError(401, 'Email or password is incorrect.');
          audit(account, 'user.signed_in', account.id); return json(res, 200, startSession(res, account));
        }
        if (pathname === '/api/auth/logout' && method === 'POST') { db.prepare('DELETE FROM sessions WHERE token_hash=?').run(session.token_hash); res.setHeader('Set-Cookie', cookie('', 0)); return json(res, 200, { ok: true }); }
        if (pathname === '/api/auth/password' && method === 'POST') {
          rateLimit(db, `password:${user.id}`, 5, 15 * 60000);
          const body = await jsonBody(req), account = db.prepare('SELECT * FROM users WHERE id=?').get(user.id);
          if (!await passwordMatches(body.currentPassword, account.password_hash)) throw new HttpError(400, 'Your current password is incorrect.');
          const password = await passwordHash(body.newPassword); db.prepare('UPDATE users SET password_hash=? WHERE id=?').run(password, user.id); db.prepare('DELETE FROM sessions WHERE user_id=?').run(user.id); audit(user, 'user.password_changed', user.id); return json(res, 200, startSession(res, account));
        }
        if (pathname === '/api/public/site' && method === 'GET') { const content = getContent(); return json(res, 200, { content: JSON.parse(content.published), revision: content.published_version }); }
        if (pathname === '/api/contact' && method === 'POST') {
          rateLimit(db, `contact:${ip}`, 6, 10 * 60000);
          const body = await jsonBody(req); if (body.website) throw new HttpError(400, 'This submission could not be accepted.');
          if (text(body.message, 'project description', 12000, true).length < 10) throw new HttpError(400, 'Please describe your project in at least 10 characters.');
          const accountEmail = email(body.email), dedupKey = hash(accountEmail + '\n' + body.message);
          const existing = db.prepare('SELECT id FROM leads WHERE dedup_key=? AND created_at>?').get(dedupKey, new Date(Date.now() - 300000).toISOString());
          if (existing) return json(res, 200, { id: existing.id, message: 'Your enquiry is already saved. Our team will review it.' });
          const settings = JSON.parse(getContent().published).settings;
          const lead = addLead({ name: body.name, email: accountEmail, company: body.company || '', message: body.message, service: body.service || '', currency: settings.currency }, 'website',null,dedupKey);
          void notifyEnquiry({db,directory,lead}).catch(()=>{});
          return json(res, 201, { id: lead.id, message: 'Your enquiry has been received. Our team will review your project.' });
        }
        if (pathname === '/api/admin/dashboard' && method === 'GET') {
          const pipeline = db.prepare('SELECT stage,count(*) AS count FROM leads WHERE archived=0 GROUP BY stage').all();
          const today = new Intl.DateTimeFormat('en-CA', { timeZone: process.env.TEAM_TIMEZONE || 'Asia/Kolkata', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());
          const content = getContent(), draft = JSON.parse(content.draft);
          return json(res, 200, { pipeline, total: pipeline.reduce((sum, item) => sum + item.count, 0), overdue: db.prepare("SELECT count(*) AS count FROM tasks WHERE status='open' AND due_date<?").get(today).count, recent: crmRoles.includes(user.role) ? db.prepare('SELECT * FROM leads WHERE archived=0 ORDER BY created_at DESC LIMIT 6').all() : [], tasks: crmRoles.includes(user.role) ? db.prepare("SELECT t.*,l.name AS lead_name FROM tasks t LEFT JOIN leads l ON l.id=t.lead_id WHERE t.status='open' ORDER BY due_date LIMIT 6").all() : [], projectCount: draft.projects.length, teamCount: draft.team.length, pageCount: Object.keys(draft.pages).length, publishedAt: content.published_at, draftVersion: content.version, publishedVersion: content.published_version });
        }
        if (pathname === '/api/admin/directory' && method === 'GET') return json(res, 200, { users: db.prepare("SELECT id,name,role FROM users WHERE active=1 AND role IN ('owner','sales')").all() });
        if (pathname.startsWith('/api/admin/leads')) {
          requireRole(user, crmRoles);
          if (pathname === '/api/admin/leads' && method === 'GET') {
            const query = new URL(req.url, origin).searchParams, term = `%${(query.get('q') || '').slice(0, 200)}%`, stage = query.get('stage') || 'all', archived = query.get('archived') === '1' ? 1 : 0;
            const page = Math.max(1, Math.min(100000, Number(query.get('page')) || 1)), where = 'archived=? AND (name LIKE ? OR email LIKE ? OR company LIKE ?) AND (?=\'all\' OR stage=?)', args = [archived, term, term, term, stage, stage];
            return json(res, 200, { rows: db.prepare(`SELECT * FROM leads WHERE ${where} ORDER BY created_at DESC LIMIT 40 OFFSET ?`).all(...args, (page - 1) * 40), total: db.prepare(`SELECT count(*) AS count FROM leads WHERE ${where}`).get(...args).count, page });
          }
          if (pathname === '/api/admin/leads/export' && method === 'GET') {
            const cell = value => '"' + String(value ?? '').replace(/^[=+@\-\t\r]/, match => "'" + match).replaceAll('"', '""') + '"';
            const rows = db.prepare('SELECT name,email,company,service,stage,priority,value,currency,archived,created_at FROM leads ORDER BY created_at DESC').all();
            const columns = ['name', 'email', 'company', 'service', 'stage', 'priority', 'value', 'currency', 'archived', 'created_at'];
            audit(user, 'leads.exported', 'leads', `${rows.length} records`); res.setHeader('Content-Type', 'text/csv; charset=utf-8'); res.setHeader('Content-Disposition', 'attachment; filename="neksoft-enquiries.csv"'); res.end('\ufeff' + [columns.join(','), ...rows.map(row => columns.map(column => cell(column === 'value' ? row.value / 100 : row[column])).join(','))].join('\r\n')); return;
          }
          if (pathname === '/api/admin/leads' && method === 'POST') return json(res, 201, { lead: addLead(await jsonBody(req), 'manual', user) });
          const match = pathname.match(/^\/api\/admin\/leads\/([\w-]+)(\/notes)?$/);
          if (match) {
            const lead = leadById(match[1]);
            if (method === 'GET' && !match[2]) return json(res, 200, { lead, notes: db.prepare('SELECT n.*,u.name AS author FROM notes n LEFT JOIN users u ON u.id=n.user_id WHERE n.lead_id=? ORDER BY n.created_at DESC').all(lead.id), tasks: db.prepare('SELECT * FROM tasks WHERE lead_id=? ORDER BY due_date').all(lead.id) });
            if (method === 'POST' && match[2]) { const body = await jsonBody(req); db.prepare('INSERT INTO notes VALUES(?,?,?,?,?,?)').run(randomUUID(), lead.id, user.id, text(body.body, 'note', 10000, true), 'note', now()); audit(user, 'lead.note_added', lead.id); return json(res, 201, { ok: true }); }
            if (method === 'PATCH' && !match[2]) {
              const body = await jsonBody(req); if (body.version !== lead.version) throw new HttpError(409, 'This enquiry was changed by someone else. Reload it before saving.');
              const values = leadValues(body, lead), fields = Object.keys(values);
              db.exec('BEGIN IMMEDIATE'); try { const result = db.prepare(`UPDATE leads SET ${fields.map(field => field + '=?').join(',')},updated_at=?,version=version+1 WHERE id=? AND version=?`).run(...Object.values(values), now(), lead.id, body.version); if (!result.changes) throw new HttpError(409, 'This enquiry changed. Reload before saving.'); if (values.stage !== lead.stage) db.prepare('INSERT INTO notes VALUES(?,?,?,?,?,?)').run(randomUUID(), lead.id, user.id, `Stage changed from ${lead.stage} to ${values.stage}.`, 'stage', now()); audit(user, 'lead.updated', lead.id); db.exec('COMMIT'); } catch (error) { db.exec('ROLLBACK'); throw error; }
              return json(res, 200, { lead: leadById(lead.id) });
            }
          }
        }
        if (pathname.startsWith('/api/admin/tasks')) {
          requireRole(user, crmRoles);
          if (pathname === '/api/admin/tasks' && method === 'GET') return json(res, 200, { tasks: db.prepare('SELECT t.*,l.name AS lead_name,u.name AS owner_name FROM tasks t LEFT JOIN leads l ON l.id=t.lead_id LEFT JOIN users u ON u.id=t.owner_id ORDER BY t.status,t.due_date,t.created_at DESC LIMIT 1000').all() });
          if (method === 'POST' || method === 'PATCH') {
            const id = pathname.split('/')[4], old = id ? db.prepare('SELECT * FROM tasks WHERE id=?').get(id) : null;
            if (method === 'PATCH' && !old) throw new HttpError(404, 'Task not found.');
            const body = await jsonBody(req); if (old && body.version !== old.version) throw new HttpError(409, 'This task changed. Reload it before saving.');
            const title = text(body.title ?? old?.title, 'task title', 240, true), due = body.due_date ?? old?.due_date, status = choice(body.status ?? old?.status ?? 'open', ['open', 'done'], 'task status');
            if (typeof due !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(due) || Number.isNaN(Date.parse(due + 'T12:00:00Z')) || new Date(due+'T12:00:00Z').toISOString().slice(0,10)!==due) throw new HttpError(400, 'Choose a valid due date.');
            const leadId = body.lead_id === undefined ? old?.lead_id || null : body.lead_id || null; if (leadId) leadById(leadId);
            const assignee = ownerId(body.owner_id === undefined ? old?.owner_id || null : body.owner_id);
            if (old) {const result=db.prepare('UPDATE tasks SET title=?,due_date=?,status=?,lead_id=?,owner_id=?,version=version+1,updated_at=? WHERE id=? AND version=?').run(title, due, status, leadId, assignee, now(), id,body.version);if(!result.changes)throw new HttpError(409,'This task changed. Reload before saving.');}
            else db.prepare('INSERT INTO tasks VALUES(?,?,?,?,?,?,1,?,?)').run(randomUUID(), leadId, title, due, status, assignee, now(), now());
            audit(user, old ? 'task.updated' : 'task.created', old?.id || title); return json(res, old ? 200 : 201, { ok: true });
          }
        }
        if(pathname==='/api/admin/lighthouse'||pathname.startsWith('/api/admin/lighthouse/'))return await lighthouseService({req,res,user,db,directory,json,seed,origin,method,pathname,audit});
        if(/^\/api\/admin\/email(?:\/(?:verify|test))?$/.test(pathname))return await emailService({req,res,user,db,directory,json,audit,pathname,method});
        if(/^\/api\/admin\/health\/(scan|fix|explain)$/.test(pathname)&&method==='POST')return await healthService({req,res,user,db,json,getContent,manifest,seed,root,directory,audit,pathname});
        if(pathname==='/api/admin/seo/analyse'&&method==='POST')return await seoAssistant({req,res,user,db,json,audit});
        if (pathname.startsWith('/api/admin/content')) return await websiteService({pathname,method,req,res,user,requireRole,contentRoles,json,getContent,manifest,seed,db,audit,now});
        if (pathname === '/api/admin/media') {
          requireRole(user, contentRoles);
          if (method === 'GET') {const row=getContent();return json(res, 200, { media: db.prepare('SELECT id,path,name,mime,size,width,height,created_at FROM media ORDER BY created_at DESC').all().map(image=>({...image,usage:assetReferences(image.path,row,manifest)})) });}
          if (method === 'POST') {
            rateLimit(db, `upload:${user.id}`, 40, 3600000); const bytes = await readBody(req, 8 * 1024 * 1024);
            const png = bytes.subarray(0, 8).equals(Buffer.from([137,80,78,71,13,10,26,10])), jpg = bytes[0] === 255 && bytes[1] === 216 && bytes[2] === 255, webp = bytes.toString('ascii', 0, 4) === 'RIFF' && bytes.toString('ascii', 8, 12) === 'WEBP';
            if (!png && !jpg && !webp) throw new HttpError(400, 'Upload a PNG, JPEG or WebP image up to 8 MB.');
            const extension = png ? 'png' : jpg ? 'jpg' : 'webp', id = randomUUID(), filename = `${id}.${extension}`, imagePath = `/uploads/${filename}`;
            let name;try{name=decodeURIComponent(req.headers['x-file-name'] || 'Image').replace(/[\r\n\0]/g, '').slice(0, 200);}catch{throw new HttpError(400,'Invalid image file name.');}
            const width = Math.min(20000, Math.max(1, Number(req.headers['x-image-width']) || 600)), height = Math.min(20000, Math.max(1, Number(req.headers['x-image-height']) || 600));
            await writeFile(path.join(directory, 'uploads', filename), bytes, { flag: 'wx', mode: 0o600 });
            db.prepare('INSERT INTO media VALUES(?,?,?,?,?,?,?,?,?)').run(id, imagePath, name, `image/${extension === 'jpg' ? 'jpeg' : extension}`, bytes.length, width, height, user.id, now()); audit(user, 'media.uploaded', id, name); return json(res, 201, { media: { id, path: imagePath, name, width, height, mime: `image/${extension}`, size: bytes.length } });
          }
        }
        if (pathname.startsWith('/api/admin/media/') && method==='DELETE') {
          requireRole(user,contentRoles);const id=pathname.split('/')[4];const image=db.prepare('SELECT * FROM media WHERE id=?').get(id);if(!image)throw new HttpError(404,'Image not found.');
          const usage=assetReferences(image.path,getContent(),manifest);if(usage.length)throw new HttpError(409,'This image is used in draft or published content. Replace its references and publish before deleting.');
          db.prepare('DELETE FROM media WHERE id=?').run(id);audit(user,'media.deleted',id,image.name);return json(res,200,{ok:true});
        }
        if (pathname.startsWith('/api/admin/users')) {
          requireRole(user, ['owner']);
          if (pathname === '/api/admin/users' && method === 'GET') return json(res, 200, { users: db.prepare('SELECT id,name,email,role,active,created_at FROM users ORDER BY created_at').all() });
          if (pathname === '/api/admin/users' && method === 'POST') { const body = await jsonBody(req), password = await passwordHash(body.password), id = randomUUID(); const address = email(body.email); if (db.prepare('SELECT id FROM users WHERE email=?').get(address)) throw new HttpError(409, 'A team account with this email already exists.'); db.prepare('INSERT INTO users VALUES(?,?,?,?,?,1,?)').run(id, address, text(body.name, 'name', 120, true), choice(body.role, ['owner', 'editor', 'sales'], 'role'), password, now()); audit(user, 'user.created', id); return json(res, 201, { ok: true }); }
          const id = pathname.split('/')[4];
          if (id && method === 'PATCH') { const body = await jsonBody(req), account = db.prepare('SELECT * FROM users WHERE id=?').get(id); if (!account) throw new HttpError(404, 'Account not found.'); const role = choice(body.role ?? account.role, ['owner', 'editor', 'sales'], 'role'), active = body.active === undefined ? account.active : Number(Boolean(body.active)); if (id === user.id && (role !== 'owner' || !active)) throw new HttpError(400, 'You cannot remove your own owner access.');if(id===user.id&&body.password)throw new HttpError(400,'Use My account to change your own password.');const address=email(body.email??account.email);if(db.prepare('SELECT id FROM users WHERE email=? AND id<>?').get(address,id))throw new HttpError(409,'A team account with this email already exists.');const password=body.password?await passwordHash(body.password):account.password_hash; db.prepare('UPDATE users SET name=?,email=?,password_hash=?,role=?,active=? WHERE id=?').run(text(body.name ?? account.name, 'name', 120, true),address,password, role, active, id); db.prepare('DELETE FROM sessions WHERE user_id=?').run(id); audit(user, 'user.access_updated', id); return json(res, 200, { ok: true }); }
        }
        if (pathname === '/api/admin/audit' && method === 'GET') { requireRole(user, ['owner']); return json(res, 200, { events: db.prepare('SELECT a.*,u.name AS author FROM audit a LEFT JOIN users u ON u.id=a.user_id ORDER BY a.created_at DESC LIMIT 300').all() }); }
        if (pathname === '/api/admin/export' && method === 'GET') { requireRole(user, ['owner']); audit(user, 'workspace.exported', 'workspace'); res.setHeader('Content-Disposition', 'attachment; filename="neksoft-workspace-export.json"'); return json(res, 200, { schemaVersion: 1, exportedAt: now(), content: getContent(), leads: db.prepare('SELECT * FROM leads').all(), notes: db.prepare('SELECT * FROM notes').all(), tasks: db.prepare('SELECT * FROM tasks').all(), media: db.prepare('SELECT id,path,name,mime,size,width,height,created_at FROM media').all(), users: db.prepare('SELECT id,name,email,role,active FROM users').all() }); }
        throw new HttpError(404, 'API endpoint not found.');
      }
      if (!['GET', 'HEAD'].includes(method)) throw new HttpError(405, 'Method not allowed.');
      if (pathname.startsWith('/uploads/')) {
        if (!/^\/uploads\/[a-f0-9-]+\.(png|jpg|webp)$/.test(pathname)) throw new HttpError(404, 'Image not found.');
        const media = db.prepare('SELECT path,mime FROM media WHERE path=?').get(pathname); if (!media) throw new HttpError(404, 'Image not found.');
        const bytes = await readFile(path.join(directory, 'uploads', path.basename(pathname))); res.setHeader('Content-Type', media.mime); res.setHeader('Cache-Control', 'public,max-age=31536000,immutable'); res.end(method === 'HEAD' ? undefined : bytes); return;
      }
      if (!options.serveFrontend) throw new HttpError(404, 'Not found.');
      if(pathname==='/sitemap.xml'){const pages=JSON.parse(getContent().published).pages;res.setHeader('Content-Type','application/xml; charset=utf-8');res.end(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${Object.keys(pages).map(route=>`<url><loc>${escape(origin+route)}</loc></url>`).join('')}</urlset>`);return;}
      if(pathname==='/robots.txt'){res.setHeader('Content-Type','text/plain; charset=utf-8');res.end(`User-agent: *\nAllow: /\nDisallow: /admin\nDisallow: /api/\nSitemap: ${origin}/sitemap.xml\n`);return;}
      if (pathname === '/services' || pathname === '/services/') {
        res.writeHead(301, { Location: '/solutions' });
        res.end();
        return;
      }
      const dist = path.join(root, 'dist'), requested = path.resolve(dist, '.' + decodeURIComponent(pathname));
      if (requested !== dist && !requested.startsWith(dist + path.sep)) throw new HttpError(404, 'Not found.');
      if (path.extname(pathname)) { const info = await stat(requested).catch(() => null); if (!info?.isFile()) throw new HttpError(404, 'File not found.'); res.setHeader('Content-Type', mimeTypes[path.extname(requested)] || 'application/octet-stream'); if (pathname.startsWith('/assets/')) res.setHeader('Cache-Control', 'public,max-age=31536000,immutable'); res.end(method === 'HEAD' ? undefined : await readFile(requested)); return; }
      const admin = pathname === '/admin' || pathname.startsWith('/admin/'), route = pathname.replace(/\/+$/, '') || '/';
      // Separate empty shells retain the correct CSS without stripping nested SSR markup.
      const shell = JSON.parse(await readFile(path.join(root, 'server/generated/html-shell.json'), 'utf8'));
      let html = typeof shell==='string'?shell:admin?shell.admin:shell.public;
      if (admin) { html = html.replace(/<title>.*?<\/title>/, '<title>NEKSOFT Workspace</title>').replace('</head>', '<meta name="robots" content="noindex,nofollow"/></head>'); }
      else {
        renderer ||= await import('../server-dist/entry-server.js'); const contentRow = getContent();
        const preview = new URL(req.url, origin).searchParams.get('cms-preview') === '1' && sessionFor(req) && contentRoles.includes(sessionFor(req).role);
        const content = JSON.parse(preview ? contentRow.draft : contentRow.published), page = content.pages[route];
        if (!page) res.statusCode = 404;
        const markup = renderer.render(route, content);
        html = html.replace('<div id="root"></div>', `<div id="root">${markup}</div><script type="application/json" id="neksoft-content">${scriptJson(content)}</script>`);
        if (page) html = html.replace(/<title>.*?<\/title>/, `<title>${escape(page.title)} | NEKSOFT</title>`).replace(/<meta name="description"[^>]*\/>/, `<meta name="description" content="${escape(page.description)}"/>`).replace('</head>', `<link rel="canonical" href="${escape(origin + route)}"/><meta property="og:type" content="website"/><meta property="og:title" content="${escape(page.title)} | NEKSOFT"/><meta property="og:description" content="${escape(page.description)}"/><meta property="og:url" content="${escape(origin + route)}"/><meta property="og:image" content="${escape(origin+'/social.png')}"/><meta name="twitter:card" content="summary_large_image"/><script type="application/ld+json">${scriptJson({'@context':'https://schema.org','@type':'Organization',name:content.settings.companyName,url:origin,email:content.settings.contactEmail,telephone:content.settings.phone})}</script>${preview ? '<meta name="robots" content="noindex,nofollow"/>' : ''}</head>`);
      }
      res.setHeader('Content-Type', 'text/html; charset=utf-8'); res.setHeader('X-Frame-Options', 'SAMEORIGIN'); res.end(method === 'HEAD' ? undefined : html);
    } catch (error) {
      if (res.headersSent) { res.end(); return; }
      const status = error instanceof HttpError ? error.status : 500;
      if (status === 500) console.error(`[backend ${requestId}]`, error.name, error.message);
      json(res, status, { error: status === 500 ? 'The request could not be completed. Please try again.' : error.message, requestId });
    }
  });
  server.requestTimeout = 30000; server.headersTimeout = 15000;
  return { server, db, directory, close: () => new Promise(resolve => server.close(() => { db.close(); resolve(); })) };
}

