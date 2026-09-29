// Google Search Console access for Obsidian Ridge Labs, shared by seo-nightly.js and the report script.
//
// THE ACCOUNT. A service account, gsc-reader@money-sites-seo.iam.gserviceaccount.com, is a user on the
// sc-domain:obsidianridgelabs.com property. It is the same account the Money Websites repo uses for its ten
// sites; one key serves both.
//
// WHERE THE KEY COMES FROM, in order:
//   1. GSC_CLIENT_EMAIL + GSC_PRIVATE_KEY in the environment. This is how GitHub Actions supplies it
//      (repository secrets, see .github/workflows/seo-nightly.yml).
//   2. GSC_KEY_FILE, a path to the service account JSON.
//   3. ~/.config/gsc/*.json on this machine, the single local copy (mode 600, outside every repo).
// The key never lives inside this repository.
//
// No dependency: the JWT is signed with node:crypto.
import fs from 'fs';
import os from 'os';
import path from 'path';
import crypto from 'crypto';

export const SITE_DOMAIN = 'obsidianridgelabs.com';
export const READ_SCOPE = 'https://www.googleapis.com/auth/webmasters.readonly';
export const WRITE_SCOPE = 'https://www.googleapis.com/auth/webmasters';

const base64url = (value) => Buffer.from(value).toString('base64').replace(/=+$/, '').replace(/\+/g, '-').replace(/\//g, '_');

/** Credentials from the environment or the local key file, or null when none are available. */
export function loadGscCredentials() {
  if (process.env.GSC_CLIENT_EMAIL && process.env.GSC_PRIVATE_KEY) {
    return { clientEmail: process.env.GSC_CLIENT_EMAIL, privateKey: process.env.GSC_PRIVATE_KEY.replace(/\\n/g, '\n') };
  }
  const dir = path.join(os.homedir(), '.config', 'gsc');
  const files = [
    ...(process.env.GSC_KEY_FILE ? [process.env.GSC_KEY_FILE] : []),
    ...(fs.existsSync(dir) ? fs.readdirSync(dir).filter((f) => f.endsWith('.json')).map((f) => path.join(dir, f)) : []),
  ];
  for (const file of files) {
    try {
      const key = JSON.parse(fs.readFileSync(file, 'utf8'));
      if (key.type === 'service_account') return { clientEmail: key.client_email, privateKey: key.private_key };
    } catch {
      /* not a key file */
    }
  }
  return null;
}

export async function getGscAccessToken({ clientEmail, privateKey }, scope = READ_SCOPE) {
  const now = Math.floor(Date.now() / 1000);
  const header = base64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
  const claims = base64url(JSON.stringify({ iss: clientEmail, scope, aud: 'https://oauth2.googleapis.com/token', iat: now, exp: now + 3600 }));
  const signature = base64url(crypto.createSign('RSA-SHA256').update(`${header}.${claims}`).sign(privateKey));
  const response = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion: `${header}.${claims}.${signature}` }),
  });
  const body = await response.json();
  if (!body.access_token) throw new Error(`Google OAuth failure: ${JSON.stringify(body)}`);
  return body.access_token;
}

/**
 * The property Search Console knows the site by, and the account's permission on it. The site is a
 * domain property (sc-domain:), not a URL-prefix one, so the property is looked up rather than assumed.
 */
export async function resolveGscProperty(token, domain = SITE_DOMAIN) {
  const response = await fetch('https://www.googleapis.com/webmasters/v3/sites', { headers: { Authorization: `Bearer ${token}` } });
  const { siteEntry = [] } = await response.json();
  const wanted = [`sc-domain:${domain}`, `https://${domain}/`, `https://www.${domain}/`];
  const entry = wanted.map((url) => siteEntry.find((e) => e.siteUrl === url)).find(Boolean);
  return entry ? { siteUrl: entry.siteUrl, permission: entry.permissionLevel } : null;
}

/** Submitting a sitemap needs Full or Owner permission; a Restricted user can only read. */
export const canWrite = (permission) => permission === 'siteFullUser' || permission === 'siteOwner';
