process.env.SERVE_FRONTEND='1';
process.env.API_PORT ||= '4173';
await import('./index.mjs');
