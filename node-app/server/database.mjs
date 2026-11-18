import { DatabaseSync } from 'node:sqlite';
import { mkdirSync } from 'node:fs';
import path from 'node:path';

export function openDatabase(directory) {
  mkdirSync(directory, { recursive: true, mode: 0o700 });
  const db = new DatabaseSync(path.join(directory, 'neksoft.sqlite'));
  db.exec(`PRAGMA journal_mode=WAL; PRAGMA foreign_keys=ON; PRAGMA busy_timeout=5000;
    CREATE TABLE IF NOT EXISTS users(id TEXT PRIMARY KEY,email TEXT NOT NULL UNIQUE,name TEXT NOT NULL,role TEXT NOT NULL CHECK(role IN ('owner','editor','sales')),password_hash TEXT NOT NULL,active INTEGER NOT NULL DEFAULT 1,created_at TEXT NOT NULL);
    CREATE TABLE IF NOT EXISTS sessions(token_hash TEXT PRIMARY KEY,user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,csrf TEXT NOT NULL,expires_at INTEGER NOT NULL);
    CREATE TABLE IF NOT EXISTS leads(id TEXT PRIMARY KEY,name TEXT NOT NULL,email TEXT NOT NULL,company TEXT NOT NULL DEFAULT '',message TEXT NOT NULL DEFAULT '',service TEXT NOT NULL DEFAULT '',source TEXT NOT NULL DEFAULT 'website',stage TEXT NOT NULL DEFAULT 'new',priority TEXT NOT NULL DEFAULT 'normal',value INTEGER NOT NULL DEFAULT 0,currency TEXT NOT NULL DEFAULT 'EUR',owner_id TEXT REFERENCES users(id),archived INTEGER NOT NULL DEFAULT 0,version INTEGER NOT NULL DEFAULT 1,dedup_key TEXT,created_at TEXT NOT NULL,updated_at TEXT NOT NULL);
    CREATE INDEX IF NOT EXISTS leads_created ON leads(created_at DESC);
    CREATE INDEX IF NOT EXISTS leads_stage ON leads(stage,archived);
    CREATE TABLE IF NOT EXISTS notes(id TEXT PRIMARY KEY,lead_id TEXT NOT NULL REFERENCES leads(id) ON DELETE CASCADE,user_id TEXT REFERENCES users(id),body TEXT NOT NULL,kind TEXT NOT NULL DEFAULT 'note',created_at TEXT NOT NULL);
    CREATE TABLE IF NOT EXISTS tasks(id TEXT PRIMARY KEY,lead_id TEXT REFERENCES leads(id) ON DELETE SET NULL,title TEXT NOT NULL,due_date TEXT NOT NULL,status TEXT NOT NULL DEFAULT 'open',owner_id TEXT REFERENCES users(id),version INTEGER NOT NULL DEFAULT 1,created_at TEXT NOT NULL,updated_at TEXT NOT NULL);
    CREATE TABLE IF NOT EXISTS site_content(id INTEGER PRIMARY KEY CHECK(id=1),draft TEXT NOT NULL,published TEXT NOT NULL,version INTEGER NOT NULL DEFAULT 1,published_version INTEGER NOT NULL DEFAULT 0,published_at TEXT);
    CREATE TABLE IF NOT EXISTS revisions(id TEXT PRIMARY KEY,payload TEXT NOT NULL,user_id TEXT REFERENCES users(id),created_at TEXT NOT NULL);
    CREATE TABLE IF NOT EXISTS media(id TEXT PRIMARY KEY,path TEXT NOT NULL UNIQUE,name TEXT NOT NULL,mime TEXT NOT NULL,size INTEGER NOT NULL,width INTEGER,height INTEGER,user_id TEXT REFERENCES users(id),created_at TEXT NOT NULL);
    CREATE TABLE IF NOT EXISTS audit(id TEXT PRIMARY KEY,user_id TEXT REFERENCES users(id),action TEXT NOT NULL,entity TEXT NOT NULL,detail TEXT NOT NULL DEFAULT '',created_at TEXT NOT NULL);
    CREATE TABLE IF NOT EXISTS rate_limits(key TEXT PRIMARY KEY,count INTEGER NOT NULL,expires_at INTEGER NOT NULL);
    PRAGMA user_version=1;`);
  return db;
}
