import {randomUUID} from 'node:crypto';
import {HttpError,jsonBody} from './security.mjs';
import {validateContent} from './content.mjs';

// Website studio API. Authentication and CSRF are enforced by the parent router.
export async function websiteService({pathname,method,req,res,user,requireRole,contentRoles,json,getContent,manifest,seed,db,audit,now}){
          requireRole(user, contentRoles);
          if (pathname === '/api/admin/content/preview' && method === 'GET') return json(res, 200, { content: JSON.parse(getContent().draft) });
          if (pathname === '/api/admin/content' && method === 'GET') { const row = getContent(); return json(res, 200, { draft: JSON.parse(row.draft), version: row.version, publishedVersion: row.published_version, publishedAt: row.published_at, manifest, defaults: seed, revisions: db.prepare('SELECT r.id,r.created_at,u.name AS author FROM revisions r LEFT JOIN users u ON u.id=r.user_id ORDER BY r.created_at DESC LIMIT 25').all() }); }
          if (method === 'PUT' || method === 'POST') {
            const body = await jsonBody(req), row = getContent(); if (body.version !== row.version) throw new HttpError(409, 'Website content changed in another session. Reload before saving.');
            if (pathname === '/api/admin/content' && method === 'PUT') { const draft = validateContent(body.draft, seed, manifest); const result = db.prepare('UPDATE site_content SET draft=?,version=version+1 WHERE id=1 AND version=?').run(JSON.stringify(draft), body.version); if (!result.changes) throw new HttpError(409, 'Content changed. Reload before saving.'); audit(user, 'content.draft_saved', 'website'); return json(res, 200, { version: body.version + 1 }); }
            if (pathname === '/api/admin/content/publish' && method === 'POST') {
              const draft = validateContent(JSON.parse(row.draft), seed, manifest), value = JSON.stringify(draft), time = now();
              db.exec('BEGIN IMMEDIATE'); try { db.prepare('INSERT INTO revisions VALUES(?,?,?,?)').run(randomUUID(), row.published, user.id, time); const result = db.prepare('UPDATE site_content SET published=?,draft=?,version=version+1,published_version=published_version+1,published_at=? WHERE id=1 AND version=?').run(value, value, time, body.version); if (!result.changes) throw new HttpError(409, 'Content changed. Reload before publishing.'); audit(user, 'content.published', 'website'); db.exec('COMMIT'); } catch (error) { db.exec('ROLLBACK'); throw error; }
              return json(res, 200, { version: body.version + 1, publishedVersion: row.published_version + 1, publishedAt: time });
            }
            if (pathname === '/api/admin/content/discard' && method === 'POST') { db.prepare('UPDATE site_content SET draft=published,version=version+1 WHERE id=1').run(); audit(user, 'content.draft_discarded', 'website'); return json(res, 200, { version: body.version + 1 }); }
            if (pathname === '/api/admin/content/restore' && method === 'POST') { const revision = db.prepare('SELECT payload FROM revisions WHERE id=?').get(body.id); if (!revision) throw new HttpError(404, 'Revision not found.'); const restored = validateContent(JSON.parse(revision.payload), seed, manifest); db.prepare('UPDATE site_content SET draft=?,version=version+1 WHERE id=1').run(JSON.stringify(restored)); audit(user, 'content.revision_restored_to_draft', body.id); return json(res, 200, { version: body.version + 1 }); }
          }

throw new HttpError(404,'Website endpoint not found.');
}
