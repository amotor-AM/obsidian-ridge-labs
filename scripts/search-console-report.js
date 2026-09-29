// Read-only Search Console report for obsidianridgelabs.com.
//
//   npm run gsc:report               last 28 days, ending 3 days ago (Search Console lags about two days)
//   npm run gsc:report -- --days=90
//
// Uses the service account through scripts/gsc.js with the read-only scope, so it cannot change anything.
// It prints the totals, the pages Google is showing, and the queries averaging position 8 to 30: pages
// relevant enough to be tested, where a sharper title or a fuller answer moves them. Act on those first.
import { loadGscCredentials, getGscAccessToken, resolveGscProperty, READ_SCOPE } from './gsc.js';

const daysArg = process.argv.find((a) => a.startsWith('--days='));
const days = daysArg ? Number(daysArg.slice(7)) : 28;
const isoDay = (offset) => new Date(Date.now() - offset * 86400000).toISOString().slice(0, 10);
const strip = (url) => url.replace(/^https?:\/\/[^/]+/, '') || '/';

async function main() {
  const credentials = loadGscCredentials();
  if (!credentials) {
    console.error('No Search Console credentials: set GSC_KEY_FILE, or put the key in ~/.config/gsc/. See docs/SEARCH-CONSOLE.md.');
    process.exit(2);
  }
  const token = await getGscAccessToken(credentials, READ_SCOPE);
  const property = await resolveGscProperty(token);
  if (!property) {
    console.error(`${credentials.clientEmail} has no access to obsidianridgelabs.com. Add it under Settings > Users and permissions.`);
    process.exit(1);
  }

  const endDate = isoDay(3);
  const startDate = isoDay(3 + days - 1);
  const url = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(property.siteUrl)}/searchAnalytics/query`;
  const query = async (body) => {
    const res = await fetch(url, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ startDate, endDate, ...body }),
    });
    const json = await res.json();
    if (!res.ok) throw new Error(`${res.status} ${json.error?.message ?? ''}`);
    return json.rows ?? [];
  };

  const [totals, pages, queries] = await Promise.all([
    query({ dimensions: [] }),
    query({ dimensions: ['page'], rowLimit: 50 }),
    query({ dimensions: ['query', 'page'], rowLimit: 250 }),
  ]);
  const t = totals[0] ?? { clicks: 0, impressions: 0, position: 0 };
  console.log(`\n${property.siteUrl} (${property.permission}), ${startDate} to ${endDate}`);
  console.log(`${t.clicks} clicks, ${t.impressions} impressions${t.impressions ? `, average position ${t.position.toFixed(1)}` : ''}\n`);

  if (pages.length) {
    console.log('Pages Google is showing:');
    for (const r of pages.sort((a, b) => b.impressions - a.impressions).slice(0, 10)) {
      console.log(`  ${String(r.impressions).padStart(5)} impr  ${String(r.clicks).padStart(3)} clk  pos ${r.position.toFixed(1).padStart(5)}  ${strip(r.keys[0])}`);
    }
  }
  const act = queries.filter((r) => r.position >= 8 && r.position <= 30 && r.impressions >= 2).sort((a, b) => b.impressions - a.impressions).slice(0, 15);
  if (act.length) {
    console.log('\nAct on these (position 8 to 30, being tested):');
    for (const r of act) console.log(`  ${String(r.impressions).padStart(5)} impr  pos ${r.position.toFixed(1).padStart(5)}  "${r.keys[0]}"  -> ${strip(r.keys[1])}`);
  }
  if (!pages.length && !queries.length) console.log('No search data in this window yet.');
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
