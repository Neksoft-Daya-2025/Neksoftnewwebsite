import { randomBytes, scrypt as scryptCallback, timingSafeEqual, createHash } from 'node:crypto';
import { promisify } from 'node:util';
const scrypt = promisify(scryptCallback);
export const token = () => randomBytes(32).toString('base64url');
export const hash = value => createHash('sha256').update(value).digest('hex');
export class HttpError extends Error { constructor(status, message) { super(message); this.status = status; } }
export function safeEqual(a, b) { const x = Buffer.from(a || ''), y = Buffer.from(b || ''); return x.length === y.length && timingSafeEqual(x, y); }
export async function passwordHash(password) {
  if (typeof password !== 'string' || password.length < 6 || password.length > 200) throw new HttpError(400, 'Use a password of 6–200 characters.');
  const salt = randomBytes(16).toString('hex');
  const key = await scrypt(password, salt, 64, { N: 32768, r: 8, p: 3, maxmem: 64 * 1024 * 1024 });
  return `scrypt$32768$3$${salt}$${key.toString('hex')}`;
}
export async function passwordMatches(password, stored) {
  const parts = (stored || 'scrypt$32768$3$invalidsalt$' + '0'.repeat(128)).split('$');
  const cost=parts[1],parallel=parts.length===5?Number(parts[2]):1,salt=parts.length===5?parts[3]:parts[2],digest=parts.length===5?parts[4]:parts[3];
  if (typeof password !== 'string' || password.length > 200) return false;
  const key = await scrypt(password, salt, 64, { N: Number(cost), r: 8, p: parallel, maxmem: 64 * 1024 * 1024 });
  return safeEqual(key.toString('hex'), digest);
}
export function rateLimit(db, key, limit, milliseconds) {
  const now = Date.now();
  db.prepare('DELETE FROM rate_limits WHERE expires_at<?').run(now);
  db.prepare('INSERT INTO rate_limits(key,count,expires_at) VALUES(?,1,?) ON CONFLICT(key) DO UPDATE SET count=count+1').run(hash(key), now + milliseconds);
  if (db.prepare('SELECT count FROM rate_limits WHERE key=?').get(hash(key)).count > limit) throw new HttpError(429, 'Too many attempts. Please try again later.');
}
export async function readBody(req, limit = 2 * 1024 * 1024) {
  if (Number(req.headers['content-length'] || 0) > limit) throw new HttpError(413, 'This request is too large.');
  let size = 0; const chunks = [];
  for await (const chunk of req) { size += chunk.length; if (size > limit) throw new HttpError(413, 'This request is too large.'); chunks.push(chunk); }
  return Buffer.concat(chunks);
}
export async function jsonBody(req) {
  if (!(req.headers['content-type'] || '').startsWith('application/json')) throw new HttpError(415, 'Use a JSON request.');
  try { const value = JSON.parse((await readBody(req)).toString('utf8')); if (!value || typeof value !== 'object' || Array.isArray(value)) throw Error(); return value; }
  catch (error) { if (error instanceof HttpError) throw error; throw new HttpError(400, 'Invalid JSON request.'); }
}
export function text(value, label, max = 500, required = false) { if (typeof value !== 'string' || value.length > max || (required && !value.trim())) throw new HttpError(400, `Enter a valid ${label}.`); return value.trim(); }
export function email(value) { const result = text(value, 'email address', 254, true).toLowerCase(); if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(result)) throw new HttpError(400, 'Enter a valid email address.'); return result; }
export function choice(value, choices, label) { if (!choices.includes(value)) throw new HttpError(400, `Choose a valid ${label}.`); return value; }
export function url(value, label = 'URL', images = false) {
  if (typeof value !== 'string' || value.length > 2000) throw new HttpError(400, `Enter a valid ${label}.`);
  if (images && /^\/(images|uploads)\/[a-zA-Z0-9_./-]+$/.test(value) && !value.includes('..')) return value;
  try { const result = new URL(value); if (result.protocol !== 'https:' || result.username || result.password) throw Error(); return result.href; } catch { throw new HttpError(400, `Use an HTTPS ${label}.`); }
}
export const publicUser = user => ({ id: user.id, name: user.name, email: user.email, role: user.role, active: Boolean(user.active) });

