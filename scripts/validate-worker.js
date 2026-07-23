import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const workerModule = await import(pathToFileURL(path.join(dist, 'server', 'index.js')).href);
const worker = workerModule.default;

const assets = {
  fetch: async (request) => {
    const url = new URL(request.url);
    const relative = url.pathname === '/' ? 'index.html' : decodeURIComponent(url.pathname).replace(/^\/+/, '');
    const file = path.resolve(dist, relative);
    if (!file.startsWith(`${dist}${path.sep}`) && file !== path.join(dist, 'index.html')) return new Response('Not found', { status: 404 });
    if (!fs.existsSync(file) || !fs.statSync(file).isFile()) return new Response('Not found', { status: 404 });

    const extension = path.extname(file);
    const contentType = extension === '.html'
      ? 'text/html; charset=utf-8'
      : extension === '.xml'
        ? 'application/xml; charset=utf-8'
        : extension === '.txt'
          ? 'text/plain; charset=utf-8'
          : 'application/octet-stream';
    return new Response(request.method === 'HEAD' ? null : fs.readFileSync(file), {
      status: 200,
      headers: { 'Content-Type': contentType },
    });
  },
};

const fetchSite = (pathname, options = {}) => worker.fetch(
  new Request(`https://preview.example${pathname}`, options),
  { ASSETS: assets },
);

const cases = [
  { path: '/philosophy', options: { headers: { Accept: 'text/html' } }, status: 200 },
  { path: '/philosophy', options: { method: 'HEAD' }, status: 200 },
  ...['echochamber', 'vault', 'molehill', 'cove', 'wove', 'mettle', 'memora', 'trove', 'kith']
    .map((appId) => ({ path: `/apps/${appId}`, options: { headers: { Accept: 'text/html' } }, status: 200 })),
  { path: '/apps/echo', status: 301, location: '/apps/echochamber' },
  { path: '/apps/mind', status: 301, location: '/apps/cove' },
  { path: '/apps/nexus', status: 301, location: '/download' },
  { path: '/blog/notion-vs-mindpalace', status: 301, location: '/journal/private-ai-journal-guide' },
  { path: '/blog', status: 301, location: '/journal' },
  { path: '/blog/otter-vs-echo', status: 301, location: '/journal/otter-vs-echo' },
  { path: '/philosophy/', status: 301, location: '/philosophy' },
  { path: '/404', options: { headers: { Accept: 'text/html' } }, status: 404 },
  { path: '/definitely-not-a-route', options: { headers: { Accept: '*/*' } }, status: 404 },
  { path: '/robots.txt', options: { headers: { Accept: 'text/plain' } }, status: 200 },
];

const errors = [];
for (const testCase of cases) {
  const response = await fetchSite(testCase.path, testCase.options);
  if (response.status !== testCase.status) {
    errors.push(`${testCase.path}: expected ${testCase.status}, received ${response.status}`);
  }
  if (testCase.location) {
    const location = response.headers.get('Location');
    if (!location || new URL(location).pathname !== testCase.location) {
      errors.push(`${testCase.path}: expected redirect to ${testCase.location}, received ${location || 'none'}`);
    }
  }
  for (const header of ['Referrer-Policy', 'X-Content-Type-Options', 'Permissions-Policy']) {
    if (!response.headers.has(header)) errors.push(`${testCase.path}: missing ${header}`);
  }
}

if (errors.length) {
  console.error(`Worker validation failed (${errors.length}):`);
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log(`Worker validation passed for ${cases.length} routing and header cases.`);
