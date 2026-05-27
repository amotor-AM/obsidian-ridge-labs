import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

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

// Main execution function
async function runSeoNightly() {
  console.log('--- Starting Nightly SEO Service ---');
  
  // Format current dates
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  
  const todayTs = `${year}.${month}.${day}`;     // e.g., 2026.05.27
  const todayXml = `${year}-${month}-${day}`;    // e.g., 2026-05-27
  
  console.log(`Setting dates to: TS format="${todayTs}", XML format="${todayXml}"`);

  // Paths
  const blogTsPath = path.resolve(__dirname, '../data/blog.ts');
  const sitemapPath = path.resolve(__dirname, '../public/sitemap.xml');

  // Update data/blog.ts
  if (fs.existsSync(blogTsPath)) {
    console.log('Updating blog.ts...');
    let blogContent = fs.readFileSync(blogTsPath, 'utf8');
    const blogRegex = /date:\s*"[0-9]{4}\.[0-9]{2}\.[0-9]{2}"/g;
    blogContent = blogContent.replace(blogRegex, `date: "${todayTs}"`);
    fs.writeFileSync(blogTsPath, blogContent, 'utf8');
    console.log('Successfully updated blog.ts timestamps.');
  } else {
    console.warn(`Warning: blog.ts not found at ${blogTsPath}`);
  }

  // Update public/sitemap.xml
  let urls = [];
  if (fs.existsSync(sitemapPath)) {
    console.log('Updating sitemap.xml...');
    let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
    const sitemapRegex = /<lastmod>[0-9]{4}-[0-9]{2}-[0-9]{2}<\/lastmod>/g;
    sitemapContent = sitemapContent.replace(sitemapRegex, `<lastmod>${todayXml}</lastmod>`);
    fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
    console.log('Successfully updated sitemap.xml timestamps.');

    // Extract URLs for IndexNow
    const matches = sitemapContent.matchAll(/<loc>(https:\/\/obsidianridgelabs\.com\/.*?)<\/loc>/g);
    for (const match of matches) {
      urls.push(match[1]);
    }
    console.log(`Extracted ${urls.length} URLs from sitemap.`);
  } else {
    console.warn(`Warning: sitemap.xml not found at ${sitemapPath}`);
  }

  // Ping Bing Standard Sitemap submission
  try {
    const bingPingUrl = `https://www.bing.com/ping?sitemap=https://obsidianridgelabs.com/sitemap.xml`;
    console.log(`Pinging Bing Sitemap submission: ${bingPingUrl}`);
    const bingRes = await fetch(bingPingUrl);
    console.log(`Bing Ping Status: ${bingRes.status} (${bingRes.statusText})`);
  } catch (err) {
    console.error('Failed to ping Bing Sitemap:', err.message);
  }

  // IndexNow API Submission
  if (urls.length > 0) {
    try {
      const indexNowUrl = 'https://api.indexnow.org/IndexNow';
      console.log(`Submitting URLs to IndexNow API...`);
      const payload = {
        host: 'obsidianridgelabs.com',
        key: '7c62d08a385f4035a77080f4cecaee5a',
        keyLocation: 'https://obsidianridgelabs.com/7c62d08a385f4035a77080f4cecaee5a.txt',
        urlList: urls
      };
      
      const res = await fetch(indexNowUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify(payload)
      });
      
      console.log(`IndexNow Submission Status: ${res.status} (${res.statusText})`);
    } catch (err) {
      console.error('Failed to submit to IndexNow API:', err.message);
    }
  }

  // Google Search Console (GSC) Sitemap Submission
  const gscEmail = process.env.GSC_CLIENT_EMAIL;
  const gscKey = process.env.GSC_PRIVATE_KEY;
  
  if (gscEmail && gscKey) {
    try {
      console.log('Authenticating with Google Search Console...');
      const token = await getGscAccessToken(gscEmail, gscKey);
      
      const siteUrlEncoded = encodeURIComponent('https://obsidianridgelabs.com/');
      const feedPathEncoded = encodeURIComponent('https://obsidianridgelabs.com/sitemap.xml');
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

  console.log('--- Nightly SEO Service Completed ---');
}

runSeoNightly().catch(err => {
  console.error('Fatal error in Nightly SEO Service:', err);
  process.exit(1);
});
