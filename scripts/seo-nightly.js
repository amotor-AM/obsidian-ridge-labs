import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE_ORIGIN = 'https://obsidianridgelabs.com';
const SITEMAP_URL = `${SITE_ORIGIN}/sitemap.xml`;
const LOCAL_SITEMAP_PATH = path.resolve(__dirname, '../dist/sitemap.xml');

// 1. Helper function for base64url encoding
function base64url(str) {
  return Buffer.from(str)
    .toString('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}

// 2. Helper to fetch Google Search Console Access Token
async function getGscAccessToken(clientEmail, privateKey) {
  const normalizedKey = privateKey.replace(/\\n/g, '\n');
  const header = base64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
  const now = Math.floor(Date.now() / 1000);
  
  const payload = base64url(JSON.stringify({
    iss: clientEmail,
    scope: 'https://www.googleapis.com/auth/webmasters',
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600,
    iat: now
  }));
  
  const sign = crypto.createSign('RSA-SHA256');
  sign.update(`${header}.${payload}`);
  const signature = base64url(sign.sign(normalizedKey));
  
  const jwt = `${header}.${payload}.${signature}`;
  
  const response = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`
  });
  
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Google OAuth failure: ${response.statusText} - ${errorText}`);
  }
  
  const data = await response.json();
  return data.access_token;
}

async function loadSitemap() {
  try {
    const response = await fetch(SITEMAP_URL, {
      headers: { 'User-Agent': 'Obsidian-Ridge-SEO-Monitor/1.0' },
    });
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }
    const xml = await response.text();
    console.log(`Loaded production sitemap: ${SITEMAP_URL}`);
    return xml;
  } catch (error) {
    console.warn(`Could not load the production sitemap (${error.message}); using the latest generated build artifact.`);
    if (!fs.existsSync(LOCAL_SITEMAP_PATH)) {
      throw new Error(`Sitemap unavailable remotely and no fallback exists at ${LOCAL_SITEMAP_PATH}`);
    }
    return fs.readFileSync(LOCAL_SITEMAP_PATH, 'utf8');
  }
}

function extractSitemapUrls(xml) {
  return [...xml.matchAll(/<loc>(https:\/\/obsidianridgelabs\.com\/.*?)<\/loc>/g)].map((match) => match[1]);
}

function getIndexNowUrls(sitemapUrls) {
  // IndexNow should announce URLs that actually changed, not every URL every
  // night. A publishing workflow may provide a comma- or whitespace-delimited
  // INDEXNOW_URLS value when it has a real change to submit.
  const requested = (process.env.INDEXNOW_URLS || '')
    .split(/[\s,]+/)
    .map((url) => url.trim())
    .filter(Boolean);

  const sitemapSet = new Set(sitemapUrls);
  return [...new Set(requested)].filter((url) => sitemapSet.has(url));
}

async function submitIndexNow(urls) {
  if (!urls.length) {
    console.log('No changed URLs supplied via INDEXNOW_URLS; skipping IndexNow submission.');
    return;
  }

  const response = await fetch('https://api.indexnow.org/IndexNow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: 'obsidianridgelabs.com',
      key: '7c62d08a385f4035a77080f4cecaee5a',
      keyLocation: `${SITE_ORIGIN}/7c62d08a385f4035a77080f4cecaee5a.txt`,
      urlList: urls,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`IndexNow failed: ${response.status} ${response.statusText} - ${errorText}`);
  }

  console.log(`IndexNow accepted ${urls.length} changed URL${urls.length === 1 ? '' : 's'}.`);
}

// Main execution function
async function runSeoNightly() {
  console.log('--- Starting Nightly SEO Monitor ---');
  console.log('Editorial dates are immutable here; this job never rewrites content or sitemap timestamps.');

  const sitemapXml = await loadSitemap();
  const sitemapUrls = extractSitemapUrls(sitemapXml);
  if (!sitemapUrls.length) {
    throw new Error('The sitemap contains no valid Obsidian Ridge Labs URLs.');
  }
  console.log(`Validated ${sitemapUrls.length} sitemap URLs.`);

  try {
    await submitIndexNow(getIndexNowUrls(sitemapUrls));
  } catch (error) {
    console.error(error.message);
  }

  // Google Search Console (GSC) Sitemap Submission
  const gscEmail = process.env.GSC_CLIENT_EMAIL;
  const gscKey = process.env.GSC_PRIVATE_KEY;
  
  if (gscEmail && gscKey) {
    try {
      console.log('Authenticating with Google Search Console...');
      const token = await getGscAccessToken(gscEmail, gscKey);
      
      const siteUrlEncoded = encodeURIComponent(`${SITE_ORIGIN}/`);
      const feedPathEncoded = encodeURIComponent(SITEMAP_URL);
      const gscApiUrl = `https://www.googleapis.com/webmasters/v3/sites/${siteUrlEncoded}/sitemaps/${feedPathEncoded}`;
      
      console.log(`Submitting sitemap to Google Search Console API...`);
      const res = await fetch(gscApiUrl, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Length': '0'
        }
      });
      
      if (res.ok) {
        console.log('Google Search Console Sitemap submission successful.');
      } else {
        const errText = await res.text();
        console.error(`Google Search Console API failed: ${res.status} ${res.statusText} - ${errText}`);
      }
    } catch (err) {
      console.error('Failed to submit to Google Search Console:', err.message);
    }
  } else {
    console.log('Google Search Console credentials not found in env (GSC_CLIENT_EMAIL, GSC_PRIVATE_KEY). Skipping GSC submission.');
  }

  console.log('--- Nightly SEO Monitor Completed (no files changed) ---');
}

runSeoNightly().catch(err => {
  console.error('Fatal error in Nightly SEO Service:', err);
  process.exit(1);
});
