# September 28, 2026 editorial and layout refinement

Implemented locally in response to the founder’s review. This is a refinement of the approved luminous direction, not a new visual identity. No public deployment was performed.

## Editorial changes

- Reworked the homepage, all ten product stories, and all 22 journal entries around the task the reader wants to accomplish. Product categories, actual screens, concrete workflows, plan distinctions, requirements, and specific processing/storage disclosures carry the argument.
- Mettle now explains the next reps, weight, targets, and training plan. Removed medical prescription terminology from public Mettle copy, journal entries, help material, and discovery text. Its software schema category is SportsApplication.
- Replaced the homepage’s vague FAQ heading with “Questions about private AI apps.”
- Philosophy uses “Obsidian Ridge Labs is building the escape hatch” and “Your data belongs to you.” The Glass House opening and Silence the Cloud remain.
- Journal openings and conclusions now emphasize useful differences and choice criteria. Removed stale Echo Chamber prices/model offers, shortened article titles, corrected comparison-table headers, and retained cited sources and original publication dates. Editorial modification dates are September 28, 2026. This edit does not imply fresh hands-on testing of competitors.
- Cleaned obvious filler, implementation jargon, and unsupported speed claims from help copy. The Memora first-deck guide now gives instructions rather than explaining the marketing intent of onboarding.

## A collection that can grow

`data/collection.ts` supplies a shared complete directory, release-first ordering, and availability counts. All ten apps appear with equal entries on the homepage and at the beginning of the collection page. Navigation, footer, help availability, and the general availability FAQ use product release data. Echo Chamber, Mettle, and Memora remain the current editorial spotlights; that is a configurable choice rather than the collection’s identity.

The generic product template now distinguishes development previews from released products. A released product with a verified listing can show an App Store action. Development price tables are suppressed in released mode, which points to the current offer instead. A real launch still requires reviewing features, requirements, screenshots, FAQs, and offer facts; changing a flag is not evidence that those facts are current.

## Layout and interaction changes

- Philosophy’s long headings sit above reading columns. At 1440px, the Glass House headline occupies two lines; Privacy, On your side of the glass, and Run the Boundary Check occupy one line. The supporting Privacy sentence occupies one line and the Boundary Check introduction two.
- Removed forced Philosophy, journal, legal, and 404 heading breaks. Natural wrapping and balanced short product headings prevent isolated final words at intermediate widths.
- Memora’s paired benefit headings start at the same vertical coordinate. Plan labels appear in the paragraph rather than adding a row above one heading. Product benefits stack below 820px.
- Article typography is smaller than campaign typography, uses the available width, and reaches the body sooner. Comparison tables have matching headers and cells and stay within their horizontal scrolling region on phones.
- Help’s Hide contents control expands the article rather than placing it in the former 280px sidebar column. The phone contents drawer appears above navigation. Legal headings share a consistent scale; the 404 page has a single top inset.
- All routes now include their page-specific CSS in prerendered HTML, using the Vite manifest. Direct visits no longer depend on hydration to acquire the correct page styling.
- FAQ panels stay in initial HTML when collapsed, with stable aria-controls relationships and hidden/inert closed panels. Keyboard navigation and reduced-motion behavior remain supported.
- Removed nested main landmarks from journal pages.

## Structured data

Every prerendered page has one JSON-LD graph containing Organization, WebSite, and its page node. Product pages include SoftwareApplication/MobileApplication; journal articles include BlogPosting; help articles include TechArticle and applicable HowTo; relevant pages include breadcrumbs, lists, and FAQs. Development products have no fabricated purchase offer, review score, or release claim.

The validator now removes scripts and metadata before checking schema against page content. FAQ questions and accepted answers must exist in the body, including the collapsed answer panels. It also requires a single main landmark and H1 on each route.

FAQ schema is not a promise of a Google result enhancement. Google’s current documentation records that FAQ rich results stopped appearing on May 7, 2026 and the related documentation was removed on June 15, 2026. Descriptive headings and useful answers remain worthwhile for readers and semantic clarity. Sources: [Google Search documentation updates](https://developers.google.com/search/updates), [SoftwareApplication structured data](https://developers.google.com/search/docs/appearance/structured-data/software-app), [structured-data policies](https://developers.google.com/search/docs/appearance/structured-data/sd-policies).

## Verification

- Production build and TypeScript check pass.
- SEO validation passes for 266 prerendered routes and 265 indexable sitemap URLs, without warnings. The 404 route remains noindex.
- Worker validation passes all 22 routing/header cases. Git whitespace checks pass.
- Browser DOM/layout checks covered every route at 1440×1000 and 390×844: each rendered an H1, no page-level horizontal overflow, no clipped visible heading/paragraph text, and no mismatched journal table columns. The intentional screen-reader-only Privacy heading is excluded from visual clipping checks.
- All 40 primary/marketing/journal routes were also checked at 320px, 768px, and 1024px widths.
- Visual inspection covered all ten product heroes, the homepage and collection, desktop and phone Philosophy, journal hierarchy, Memora workflow/benefits/offer sections, and the mobile help drawer. This combines visual judgment with route-wide geometry checks; it does not claim a pixel-by-pixel manual inspection of every help paragraph.
- Interaction checks covered Explore all apps navigation, product screenshot selection and caption updates, FAQ selection and panel relationships, mobile menu Escape/focus restoration, help sidebar collapse, and mobile contents drawer layering.
- Release-mode SSR checks covered development, a released product with a listing, and released status without a listing. The latter keeps a safe Explore fallback. Temporary test status and URL values were in memory only.

The 21st CLI is not installed in this environment; its deterministic review command was unavailable. Review followed the UI Review skill using source inspection, the local build, and the live in-app browser instead. Reduced-motion behavior was checked in source; no operating-system preference was changed. This work is not a measured conversion experiment or a guarantee of search ranking or an award.
