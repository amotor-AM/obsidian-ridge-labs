# Obsidian Ridge Labs

## AI that knows you. Not one that watches you.

Obsidian Ridge Labs is an independent Las Vegas software studio building private AI apps for Apple devices. We build focused tools for the parts of a life that should never have become raw material: conversations, money, focus, memory, health, learning, belongings, and the people you love.

**Apps that mind their own business.**

[Visit the site](https://obsidianridgelabs.com/) · [Read the standard](https://obsidianridgelabs.com/philosophy) · [See the collection](https://obsidianridgelabs.com/download)

## What we refuse

The Trade is the quiet deal behind almost every "free" AI app: your conversations, finances, journals, habits, and relationships become the fuel, and the company rents the intelligence back to you by the month. The industry made it standard. We never signed it.

## The Obsidian standard

Four refusals govern every app in the collection.

1. **Data has gravity.** Every hop adds a network, a processor, a log, a policy, and a company. Core intelligence stays where the data was created whenever supported Apple hardware can do the work.
2. **The cloud must earn its place.** A connection exists only when it does something the device genuinely cannot, and it is named before it happens.
3. **Offline is the test.** After required setup, the work continues without the network.
4. **Memory belongs to you.** Storage, export, retention, and deletion answer to the person who made the thing.

There is no Obsidian Ridge Labs account, no advertising identity, and no ad business for any of it to feed.

### The Boundary Check

Ask any AI app three questions. An app that cannot answer all three in one breath is not private, it is packaged.

1. Where does the processing happen?
2. Where does the storage live?
3. What connects to the network, and when?

### The airplane-mode test

Turn on airplane mode. Whatever still works is yours. Whatever dies was a rental.

## The collection

| Product | Status | What it does |
| --- | --- | --- |
| [Echo Chamber](https://obsidianridgelabs.com/apps/echochamber) | On the App Store | Every word of the meeting, no second audience. Private on-device transcription for live recordings and imported audio or video, with search, summaries, and export. |
| [Vault](https://obsidianridgelabs.com/apps/vault) | In development | Money advice that is not also a lead. Receipts read on-device, forecasts computed locally, bank sync kept optional. |
| [Molehill](https://obsidianridgelabs.com/apps/molehill) | In development | For the task too big to start. One small next step, split again when it is still too big, with no streaks and no shame. |
| [Cove](https://obsidianridgelabs.com/apps/cove) | In development | A journal that reflects with you, not about you. Entries and reflection both stay on the device. |
| [Wove](https://obsidianridgelabs.com/apps/wove) | In development | A stylist who has seen your whole closet and tells nobody. Outfits, capsules, and packing built on your phone. |
| [Mettle](https://obsidianridgelabs.com/apps/mettle) | In development | A strength coach that shows its work. A deterministic engine owns every set, rep, and load. |
| [Memora](https://obsidianridgelabs.com/apps/memora) | In development | The notes you already took, turned into what you actually remember. On-device drafts, FSRS scheduling. |
| [Trove](https://obsidianridgelabs.com/apps/trove) | In development | Proof of what you own, ready before you need it. Serials, warranties, values, and claim-ready records. |
| [Kith](https://obsidianridgelabs.com/apps/kith) | In development | Stay close to people without a pipeline between you. |
| [Mise](https://obsidianridgelabs.com/apps/mise) | In development | Every recipe you ever saved, finally cooking with you. No account, no recipe server. |

## Echo Chamber

Echo Chamber is the first app out. It records live or imports audio and video, then builds a searchable transcript, notes, summaries, answers, and exports on supported Apple hardware.

It is built for Apple Intelligence and ships a local Bonsai 1.7B fallback for supported devices without it. NVIDIA Parakeet TDT 0.6B v3 handles speech recognition, and the complete enhanced Echo Chamber pipeline has observed approximately 4.5% word error rate on an internal test set under tested conditions. Pro is $2.99 monthly, $29.99 yearly, or $79.99 once for Lifetime.

[Meet Echo Chamber](https://obsidianridgelabs.com/apps/echochamber) · [Read the privacy model](https://obsidianridgelabs.com/privacy)

## This website

This repository contains the Obsidian Ridge Labs website, product pages, help center, journal, sitemap, and AI-readable discovery files. Copy is governed by [BRAND-DOCTRINE.md](./BRAND-DOCTRINE.md); internal linking by [INTERNAL-LINKING-DOCTRINE.md](./INTERNAL-LINKING-DOCTRINE.md).

### Local development

```bash
npm install
npm run dev
```

### Production checks

```bash
npm run build
npm run validate
```

### Browser preview

After building, run `npm run preview:local` and keep that terminal running. Open
`http://127.0.0.1:4174/` in the Codex browser. The fixed port prevents the preview
from silently moving to a different address. Rebuild and refresh the tab to see
source changes; the preview serves the production build.

If the browser reports “connection refused,” check that this server is running.
An “admin-enforced policy could not be verified” error is a separate Codex policy
check failure; repeatedly granting tab access does not repair it. Restart the
updated Codex app, and use `/feedback` if that policy error persists.

## Deployment

The site deploys to GitHub Pages from `main`. Every push builds, validates, and publishes to [obsidianridgelabs.com](https://obsidianridgelabs.com/).

## Search Console

`npm run gsc:report` prints clicks, impressions and the queries worth acting on, through the
`gsc-reader` service account. The key lives outside the repo in `~/.config/gsc/`; setup, permissions
and CI secrets are in [docs/SEARCH-CONSOLE.md](docs/SEARCH-CONSOLE.md).

## Contact

Questions, partnerships, or press: [support@obsidianridgelabs.com](mailto:support@obsidianridgelabs.com)

---

**Move the intelligence. Not the private life.**
