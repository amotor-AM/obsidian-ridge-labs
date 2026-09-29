# Search Console access

`obsidianridgelabs.com` is the domain property `sc-domain:obsidianridgelabs.com`. A service account,
`gsc-reader@money-sites-seo.iam.gserviceaccount.com` (Google Cloud project `money-sites-seo`), is a user
on it. The same account serves the Money Websites sites, so there is one key for both.

## Where the key lives

One copy, outside every repository: `~/.config/gsc/gsc-reader.json`, mode 600. Scripts find it in this
order (`scripts/gsc.js`):

1. `GSC_CLIENT_EMAIL` and `GSC_PRIVATE_KEY` environment variables, which is how GitHub Actions supplies it.
2. `GSC_KEY_FILE`, a path to the JSON key.
3. `~/.config/gsc/*.json`.

Never copy the key into this repository. `.env*` is ignored, but a stray `key.json` would not be.

## What uses it

| Script | Scope | What it does |
| --- | --- | --- |
| `npm run gsc:report` | read-only | Clicks, impressions, the pages Google shows, and queries at position 8 to 30 |
| `scripts/seo-nightly.js` | read and write | Submits the sitemap nightly in CI, if the account has Full permission |

## Permission

The account was added as **Restricted**, which can read every report but cannot submit a sitemap. The
nightly job detects this and skips the submission with a message rather than failing; Google still finds
the sitemap through `robots.txt`. To let the job submit it, change the user to **Full** under Settings >
Users and permissions. Full cannot add users or remove the property.

## CI

`.github/workflows/seo-nightly.yml` reads `GSC_CLIENT_EMAIL` and `GSC_PRIVATE_KEY` from repository
secrets. `GSC_CLIENT_EMAIL` is the address above. `GSC_PRIVATE_KEY` is the `private_key` field of the
JSON, pasted as-is.

## Creating a new key

Keys are created with the gcloud CLI, because the browser download stalls in Safari:

```bash
gcloud iam service-accounts keys create ~/.config/gsc/gsc-reader.json \
  --iam-account=gsc-reader@money-sites-seo.iam.gserviceaccount.com --project=money-sites-seo
chmod 600 ~/.config/gsc/gsc-reader.json
```

Then delete the old key: `gcloud iam service-accounts keys list --iam-account=... --managed-by=user`
and `gcloud iam service-accounts keys delete <id> --iam-account=...`.
