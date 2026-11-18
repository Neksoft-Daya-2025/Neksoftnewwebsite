import { createBackend } from './app.mjs';
import { existsSync } from 'node:fs';
if(existsSync('.env'))process.loadEnvFile('.env');
const backend = await createBackend({ serveFrontend: process.env.SERVE_FRONTEND === '1' });
const host = process.env.API_HOST || '127.0.0.1', port = Number(process.env.API_PORT || 4174);
backend.server.listen(process.env.API_SOCKET || port, ...(process.env.API_SOCKET ? [] : [host]), () => console.log(`NekSoft backend ready at http://${host}:${port}`));
for (const event of ['SIGINT', 'SIGTERM']) process.on(event, async () => { await backend.close(); process.exit(0); });
