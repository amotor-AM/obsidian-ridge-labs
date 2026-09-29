# Kith, Mise, Trove, and Wove: source-backed product audit

Research date: 2026-09-26. Scope: the current local source trees at `/Volumes/Lextar/Developer/Kith`, `/Volumes/Lextar/Developer/Mise`, `/Volumes/Lextar/Developer/Trove`, and `/Volumes/Lextar/Developer/Wove`, compared with the website's product data, detail-page editorial copy, and product FAQs. No application source or website implementation was changed. No app was launched, built, or tested during this audit; no unknown binary was run.

## How to read this report

**Implemented in current source** means the feature has executable implementation and a user-facing route, not merely a README promise. It does not establish that the feature works correctly on hardware, has passed its tests, or has shipped. **Configured** means a build target, entitlement, or StoreKit test configuration exists. **Verified shipping** is a separate status: none of these four apps was verified as publicly available in this audit. Keep the website's development status until a release artifact and live listing are independently confirmed.

I read the Brand Doctrine before auditing. Its useful constraint here is exact conditions and estimates on product pages, alongside the promise that privacy makes useful personal context possible. [Doctrine: personal context][doctrine-personal]; [doctrine: product-page evidence standard][doctrine-evidence]. I searched the app roots and source trees, including hidden-file enumeration, for `AGENTS.md`, and checked the common ancestor directories. No applicable app `AGENTS.md` was found.

The implementation is considerably richer than the site's current summaries. The strongest differentiation comes from concrete workflows: Kith helps complete a reach-out; Mise carries a saved recipe through dinner; Trove creates a portable evidence record; Wove responds to the clothes and combinations someone actually wears. These are supportable directions for a proposed rewrite, not approved copy changes.

## Material corrections to make in the approval plan

| Priority | Current website claim | Source finding | Recommended treatment |
| --- | --- | --- | --- |
| High | Mise minimum OS is iOS 18. [Website][site-mise] | Both current Xcode configurations target iOS 26.0; Watch targets watchOS 26.0. The root view blocks normal access when Apple Intelligence is unavailable. [Build][m-build]; [gate][m-gate] | Change the planned compatibility description to iOS/iPadOS 26 and Apple Intelligence; list watchOS 26 for the companion, subject to release verification. |
| High | Wove packing lists come from closet pieces/capsules. [Website workflow and caption][site-wove-workflow] | The packing API accepts a `garments` argument but does not use it. Generation produces generic clothing types and essentials. [Implementation][w-packing] | Describe a trip packing checklist. Do not promise capsule-derived or garment-specific packing. |
| High | Wove's deterministic rules validate and repair **every** AI suggestion for color, formality, and weather. [Website FAQ][site-wove-faq] | Those factors influence candidate ranking and heuristic composition. The generative path resolves item IDs and checks body coverage; it does not run a universal color/weather/formality validator or repair pass over each AI output. [Ranking][w-ranking]; [AI result handling][w-ai]; [resolver][w-resolve] | Say the model chooses from a ranked shortlist of owned garments, with a built-in fallback and structural checks. Remove the universal validation guarantee. |
| High | Mise's only import network request is the chosen page. [Website FAQ][site-mise-faq] | The fetcher also downloads the recipe image from the page's image URL, which may be a separate host or CDN. [Fetcher][m-fetch] | Disclose a direct request to the recipe page and, when present, its image host. |
| Medium | Trove's private iCloud sync is merely planned. [Website detail][site-trove-detail] | A Plus toggle, private CloudKit container, live container rebuild, and fallback status are implemented. Image bytes remain local files; models contain filenames. [Sync][t-sync]; [store][t-store]; [photos][t-photos]; [photo model][t-photo-model] | Describe record sync as implemented in the development build, while stating that complete photo/receipt-image sync has not been established. Do not claim the whole vault appears on another device. |
| Medium | Wove learns from wear logs without a tier qualification. [Website workflow][site-wove-workflow]; [FAQ][site-wove-learning] | Rejection feedback is available free; wear-derived co-wear/reach-for/formality learning is Plus-only. [App-level gate][w-taste-gate] | Separate free rejection feedback from Plus personalization. |
| Medium | Mise can auto-fill “the week,” and its cooking feature is “Hands-Free at the Stove.” [Website][site-mise-workflow] | Autofill fills empty future dinner slots from existing recipes, using deterministic ranking. Cook mode has step controls and timer buttons; no in-app voice-step control was found. [Planner][m-planner]; [ranking][m-dinners]; [cook actions][m-cook-actions] | Say “suggest dinners for empty slots.” Describe large-type steps, an awake screen, and timers; do not imply a voice-operated cooking mode. |
| Medium | Kith's Today planner considers upcoming dates. [Website FAQ][site-kith-faq] | Reach-out order uses elapsed cadence, snoozes, archive status, and pins. Upcoming dates appear in a separate section; dates can inform AI openers. [Planner][k-planner]; [Coming Up UI][k-coming-up] | Keep the reach-out ranking and birthday/date list distinct. |
| Medium | Kith has “no cloud copy.” [Website detail][site-kith-detail] | No app-managed CloudKit sync is configured in the present entitlement file. This does not establish the behavior of operating-system device backups or user-chosen exports. [Persistence][k-persistence]; [entitlements][k-entitlements]; [export][k-export] | Say “the current build has no app-managed cloud sync.” Avoid making an unverified promise about every possible backup copy. |
| Medium | Trove capture keeps “the original evidence” with each room/item record. [Website workflow][site-trove-workflow] | Room-scan commits save individual object crops, not the original full room photograph. [Room commit][t-room-commit] | Say “keep photos and receipt evidence with the record.” Do not promise preservation of the original room image. |

## Kith

### What is actually implemented

| Capability | Current implementation and claim boundary | Evidence |
| --- | --- | --- |
| Relationship records | People, discrete facts, interactions, and important dates are SwiftData models. The system contact picker imports only selected people, with duplicate handling, a first phone number, birthday, and available avatar. This is not automatic ongoing contact enrichment or an inbox reader. | [Store schema][k-persistence]; [contact import][k-contacts] |
| Reach-out rhythm | Editable cadence drives a cooling ring and the due list. Pins affect order; snoozes suppress nudges. A suggested natural cadence is the median gap after at least four gaps in logged contact history. It is timing math, not inference about the health of a friendship. | [Cadence math and suggestion][k-cadence]; [planner][k-planner] |
| Today and important dates | Due people, a daily opener, and a separate Coming Up strip. The first successful Spark of a day is free; subsequent refreshes use the normal AI allowance. | [Spark gate][k-spark]; [date strip][k-coming-up] |
| Local AI memory and message help | Foundation Models implements structured brain-dump extraction, gift ideas, talking points, a relationship recap, streamed drafts, and refinements. Drafts can be handed to Messages. These are proposed text and facts, not verified truths or autonomous messages. | [AI implementation][k-ai]; [draft handoff][k-draft] |
| Close the reach-out loop | Calls/messages are opened through system actions. A return-to-app flow distinguishes immediate bounce-backs and stale returns before offering a log prompt. | [Reach-out capture][k-capture]; [root follow-up lifecycle][k-root] |
| Dictation and app lock | Dictation is shown only where local recognition is supported and explicitly sets `requiresOnDeviceRecognition`. Optional app-wide lock uses biometrics with device-passcode fallback; it is off by default. | [Speech][k-speech]; [lock][k-lock] |
| Local system integration | Widgets, notification actions, App Intents, Spotlight, and a private year recap have code paths. The root refresh reconciles widgets, Spotlight, and local notifications; these are optional system surfaces that can expose selected data outside the app's locked screen. | [Root reconciliation][k-root]; [settings and recap entry][k-settings] |
| Portable records | Settings exports readable JSON containing people, facts, interactions, and dates. Photos are deliberately excluded. No corresponding library restore/import UI was found; importing Contacts is a separate capability. | [Exporter][k-export]; [export UI][k-export-ui] |

### Platform, dependencies, storage, and monetization

- **Platform:** current app target is iPhone only (`TARGETED_DEVICE_FAMILY = 1`), iOS 26.0, Swift 6; configured version 1.0/build 1. The gate requires a usable Apple Intelligence model. The README's older claim that unsupported devices retain the full manual app contradicts the actual root gate. Do not use that README paragraph to relax requirements. [iPhone build settings][k-build]; [OS/version settings][k-build-os]; [gate][k-gate]; [stale README][k-readme].
- **Dependencies:** inspected implementation uses Apple frameworks: SwiftUI, SwiftData, Foundation Models, StoreKit, Vision-independent speech recognition, Contacts/ContactsUI, LocalAuthentication, UserNotifications, WidgetKit, App Intents, and Core Spotlight. No third-party package reference or remote AI/analytics SDK appeared in the inspected app target/source. The project has empty package dependency lists. [Project target][k-project]; [AI][k-ai]; [speech][k-speech]; [contacts][k-contacts]; [events][k-events].
- **Storage/defaults:** a local SwiftData store in the App Group, with Application Support fallback. Current entitlements contain only the App Group, not iCloud. Its production `ModelConfiguration` leaves CloudKit on the framework's automatic default, so adding an entitlement in a future build would change the effective behavior; re-audit the signed release configuration. [Persistence][k-persistence]; [entitlements][k-entitlements].
- **Connections:** no application `URLSession`/remote AI service path was found. StoreKit purchase/restore, model availability/setup, user-initiated communication handoff, explicit export destinations, and system integrations remain relevant boundaries. Local event logging exists via OSLog with counts/enums/outcomes, so “no external analytics SDK” is more precise than “no local activity logging.” [Events][k-events]; [draft handoff][k-draft].
- **Free/Plus:** free holds 10 people and 3 normal AI assists per ISO week, plus the first Spark each day. Plus removes the people/AI quota. Current local StoreKit configuration matches the website's $3.99/month, $24.99/year, $49.99 lifetime; it configures a seven-day annual trial and Family Sharing, but neither current storefront price nor offer eligibility was verified. [Limits][k-limits]; [Spark][k-spark]; [local prices][k-prices].
- **Stubs:** hard-coded paywall rows are guarded for UI testing; they are not proof of a live App Store offer. No broad unimplemented feature stub was found in the principal workflow examined. [Paywall test seam][k-paywall].

### Five supportable sales benefits

1. **Pick up a conversation with the detail you meant to remember.** Facts, prior interactions, and local talking-point/draft generation make this more specific than “manage relationships.” [AI][k-ai]; [records/export shape][k-export].
2. **Make the next hello easier to start and easier to remember afterward.** Spark → draft → Messages/call → return-to-app log is a real loop. [Spark][k-spark]; [handoff][k-draft]; [capture][k-capture].
3. **Choose a rhythm that fits each person.** Cadence overrides, snoozes, and an optional history-based suggestion support this; do not imply the app knows when someone needs support. [Cadence][k-cadence]; [planner][k-planner].
4. **Say a note while it is fresh, then decide what to keep.** Locally constrained dictation and structured extraction reduce retyping without automatic acceptance of facts. [Speech][k-speech]; [AI][k-ai].
5. **Keep personal context close and take a readable copy with you.** Local records, an optional app lock, and text JSON export are implemented. Qualify photo exclusion and lack of verified restore. [Storage][k-persistence]; [lock][k-lock]; [export][k-export].

### Claim limits and remaining verification

The website's “no relationship scoring” should mean **no displayed friendship grade or judgment**: the code does calculate warmth and priority scores internally. “Face ID can protect sensitive pages” undersells/misdescribes an app-wide biometric-or-passcode lock. [Website][site-kith-detail]; [math][k-cadence]; [lock][k-lock]. Do not promise encrypted app-level storage, complete backups, automatic access to message history, or learning a user's writing voice; these were not established. Physical-device inference, selected-Contacts behavior, supported dictation locales, reminders through long periods without launch, widgets with app lock enabled, and export completeness still need runtime verification.

## Mise

### What is actually implemented

| Capability | Current implementation and claim boundary | Evidence |
| --- | --- | --- |
| Web, text, and photo recipe import | Direct URL fetch reads recipe JSON-LD first; unstructured text can use local Foundation Models. Vision OCR accepts multiple images in order, then structured parsing. The source supports a share extension, an editable import flow, and manual recipe entry. A photograph is not a guarantee of accurate handwriting recognition. | [Web fetch][m-fetch]; [local parsing][m-ai]; [multi-image OCR][m-ocr]; [shared target][m-project] |
| A recipe box that reaches the weekly plan | Recipes occupy dated meal slots. Drag/drop moves slots; suggested dinners rank existing saved recipes by dietary tag matches, favorites, cooking history, recency, and category variety. It does not invent a nutritionally complete meal plan. | [Plan operations][m-ops]; [dinner ranking][m-dinners]; [autofill action][m-planner] |
| Consolidated grocery lists | Ingredients are scaled, duplicate unchecked items consolidated, and aisle values assigned. Planning mutations refresh widgets and the Watch snapshot. Repeat-generation handling avoids adding the same planned meals twice. | [Grocery operations][m-groceries]; [planner feedback][m-planner]; [companion refresh][m-ops] |
| Cook mode | Dark, large-type step mode holds the screen awake. Multiple timers are stored concurrently, with local notifications, Live Activity updates, and Watch context. Leaving cook mode cancels its timers and ends the activity. No in-app hands-free step navigation was found. | [Mode lifecycle][m-cook]; [timer actions][m-cook-actions] |
| Personal cooking assistance | Local recipe parsing, pantry-based recipe generation, substitutions, and conversational answers exist. Global chat receives up to 60 recipe titles, pantry item names, and dietary context. An open-recipe chat gets ingredient names and up to 12 steps, capped to 4,000 characters. It is not retrieval over every full recipe. | [AI implementation][m-ai]; [context assembly][m-context]; [AI gates][m-assistant] |
| Apple Watch companion | Shows tonight's meal, upcoming meals, cook timers, and grocery check-off. Grocery actions require the phone to be reachable; this is not an independent recipe editor or standalone AI cook. | [Watch UI][m-watch]; [phone bridge][m-watch-bridge] |
| Data portability | Recipe JSON export includes recipe text, ingredients, steps, tags, source URL, and available photo data. Restore accepts an array or one recipe, skips known UUIDs, and respects the free recipe cap. Single recipes also have an image share-card flow. It is not a full export of pantry, grocery state, plans, and dietary profile. | [Export/restore][m-ops]; [export shape][m-recipe-shape]; [settings controls][m-data-ui] |

### Platform, dependencies, storage, and monetization

- **Platform:** iPhone and iPad targets, iOS 26.0, Swift 6, Watch companion at watchOS 26.0. Configured app version 1.0.0/build 2. Root access requires Apple Intelligence, even though a heuristic engine remains in source as a fallback/testing seam. [Build][m-build]; [root gate][m-gate]; [engine factory][m-engine].
- **Dependencies:** Apple-native SwiftUI/SwiftData, Foundation Models, Vision, StoreKit 2, WidgetKit, App Intents, ActivityKit, WatchConnectivity, Core Spotlight, and local notifications. No external package dependency or AI/analytics SDK appeared in the inspected app target/source. [Project targets][m-project]; [engine][m-engine]; [OCR][m-ocr]; [bridge][m-watch-bridge]; [events][m-events].
- **Storage:** shared App Group SwiftData stores recipes/photos, ingredients/steps, plans, groceries, pantry, and dietary profile. Sync defaults off. Plus can enable the private CloudKit database; changing the setting requires restart, with a local fallback on CloudKit initialization failure. The source alone does not establish provisioned production CloudKit or successful multi-device synchronization. [Schema/configuration][m-store]; [launch default][m-launch]; [sync setting][m-sync].
- **Network:** direct recipe-page fetch and best-effort recipe-image fetch via an ephemeral URLSession; the image may live on a different host. Optional iCloud, StoreKit, Apple model setup, and the paired Watch are other disclosed dependencies. No app-hosted recipe/AI server was found. [Fetcher][m-fetch]; [store][m-store]; [bridge][m-watch-bridge].
- **Free/Plus:** 25 recipes and 3 AI assists per day; parsing, generation, and chat share the quota. The dedicated substitutions operation and iCloud toggle require Plus. Aisle categorization is heuristic and does not consume AI quota. Plus is unlimited by these source gates. StoreKit configuration matches $2.99/month, $19.99/year, $39.99 lifetime; these are configured prices, not verified live offers. [Limits][m-limits]; [operations][m-assistant]; [sync][m-sync]; [prices][m-prices].
- **Stubs:** paywall preview prices are explicitly UI-test-only. Heuristic implementations do not imply the app is usable on unsupported hardware because the root launch gate runs first. [Paywall][m-paywall]; [gate][m-gate].

### Five supportable sales benefits

1. **Use the recipes you have already saved.** Link, pasted text, and multi-photo OCR inputs converge on an editable recipe record. [Fetcher][m-fetch]; [OCR][m-ocr]; [parsing][m-ai].
2. **Turn a dinner plan into one shopping list.** The planner and consolidated ingredient pipeline support a useful before/after story without “AI meal planning” inflation. [Planner][m-planner]; [groceries][m-groceries].
3. **Keep the next step and the timers visible while you cook.** Screen-awake cook mode, parallel timers, a Live Activity, and the companion display are concrete. [Mode][m-cook]; [timers][m-cook-actions]; [Watch][m-watch].
4. **Ask a cooking question in the context of the recipe in front of you.** This is stronger and more accurate than suggesting omniscience over the whole kitchen. [Context][m-context]; [AI][m-ai].
5. **Keep a recipe box you can move.** Readable JSON export and recipe restore are implemented; the output includes available recipe photos. [Export/restore][m-ops]; [shape][m-recipe-shape].

### Claim limits and remaining verification

The website is right to avoid allergy/food-safety guarantees. The “dietary match” score is positive tag matching, not an ingredient-level allergen validator; model instructions are not proof of dietary safety. [Ranking][m-dinners]; [AI prompts][m-ai]. “Grounded in your recipe box” should be qualified to the context actually supplied, and “no analytics” is too absolute given local OSLog event recording; no remote analytics service was found. [Website FAQ][site-mise-faq]; [context][m-context]; [events][m-events]. Import quality across actual sites/handwriting, quantity conversion edge cases, dinner ranking, Watch reachability behavior, timer lifecycle, full recipe/photo JSON round-trip, and two-device sync remain untested here.

## Trove

### What is actually implemented

| Capability | Current implementation and claim boundary | Evidence |
| --- | --- | --- |
| Room capture | On-device Vision saliency plus a tiled classification sweep finds household-object candidates, filters a vocabulary, de-duplicates labels, proposes quantities, and caps the review list at 24 candidates. A text-only language model receives labels, not the photograph. People select/edit candidates before saving. This is a 2D photo workflow, not a complete 3D room measurement or guaranteed detection of every possession. | [Room scanner][t-room]; [review/commit][t-room-commit] |
| Item, barcode, label, and receipt input | Vision reads text/barcodes; the local reasoning layer proposes structured item and receipt fields. Barcode reading is not a verified online product database lookup. Values and warranty lengths can be estimates and require review. | [Vision][t-vision]; [intelligence contract][t-ai-contract]; [generated fields][t-ai] |
| Evidence organized around belongings | Local records connect item metadata, photos, receipts, serials, warranty, room, category, tags, and home. Item photos and receipt images are separate files; receipt OCR text is retained. | [Schema][t-store]; [receipt model][t-receipt]; [photo model][t-photo-model] |
| Warranty reminders | Local notifications normally run 30 days before expiry; late-added still-active warranties use a near-term reminder. Scheduling is permission-based and bounded to the nearest 60 reminders. | [Reminders][t-warranty] |
| Questions and arithmetic | Inventory Q&A uses a local item digest, a keyword lookup tool, and an aggregation tool. Currency-specific totals/rankings are computed in code, not by language-model arithmetic. A heuristic fallback records its source. This does not guarantee every natural-language answer is correct. | [Lookup/statistics tools][t-ai]; [facade and digest][t-ai-service] |
| Reports for a move or claim | Plus can create an inventory PDF/CSV and a selected-item incident claim report with photographs. These are record formats, not insurer approval, appraisal, or coverage determination. | [Report controls][t-report-ui]; [claim generation][t-claim]; [PDF implementation][t-pdf] |
| Backup and restore | Free access to a `.trovearchive` ZIP with JSON graph and referenced local photos, including receipt images. Restore offers merge/replace modes. Export skips image files that are already missing, so “every photo is always recoverable” would be wrong. | [Archive format][t-archive]; [export image loop][t-archive-export]; [restore][t-archive-restore]; [free backup UI][t-backup-ui] |
| Multiple homes and private system surfaces | Plus multi-home inventory, local app lock, Spotlight, capture widgets/intents, documentation Live Activity, and local recap/milestone features exist in source. Those integrations should be described by their limited roles, not as a remote monitoring service. | [App setup/lifecycle][t-sync]; [settings][t-report-ui]; [home switch][t-homes] |

### Platform, dependencies, storage, and monetization

- **Platform:** current iPhone/iPad target is iOS 26.0, version 1.0/build 1. The root gates normal use on Apple Intelligence; the existence of deterministic fallback code does not make this a supported non-AI-device app. [Build][t-build]; [root gate][t-gate].
- **Dependencies:** Apple-native SwiftUI/SwiftData, Vision, Foundation Models, StoreKit, WidgetKit/App Intents, Core Spotlight, local notifications, LocalAuthentication and PDF generation. No external package reference, application HTTP client, analytics SDK, or AI server call appeared in inspected source. [Target][t-project]; [Vision][t-vision]; [AI][t-ai]; [events][t-events].
- **Storage/defaults:** local persistent SwiftData by default. Plus opt-in private CloudKit record sync is implemented; it rebuilds the container when toggled and turns off when the source entitlement state changes to non-Plus. Failure to initialize CloudKit falls back to the same local store and exposes a status. An unopenable local store has a blocking UI rather than pretending an empty scratch store is the inventory. [Store][t-store]; [app lifecycle][t-sync]; [settings status][t-sync-ui]; [root][t-gate].
- **Image boundary:** CloudKit mirrors models containing file names; photo/receipt pixel data is saved under a local App Group `Photos` folder. No CKAsset/image-file replication path was found. A portable archive is the implemented route that actually includes available image bytes. [Photo store][t-photos]; [models][t-photo-model]; [receipt][t-receipt]; [archive][t-archive-export].
- **Connections:** optional private iCloud, StoreKit/model setup, and user-selected share/export destinations. Local events are OSLog counts/enums; no remote analytics path was found. The app's own wording about “end-to-end infrastructure” is not cryptographic evidence and should not become a website encryption guarantee. [Sync][t-store]; [events][t-events]; [source marketing phrase][t-plus].
- **Free/Plus:** free cap is 25 items across homes, 10 AI scans/calendar month, and one home. Plus removes item/scan caps and gates PDF/CSV/Claim Kit, multi-home, sync, themes/icons. Backup export/restore is available outside the report paywall. Ask Trove's inspected UI does not use the scan meter; do not call the limit “10 AI actions” without further evidence. Prices in StoreKit are $2.99/month, $19.99/year, $39.99 lifetime, matching website configuration. [Limits/features][t-plus]; [meter][t-meter]; [report and backup UI][t-report-ui]; [prices][t-prices].
- **Stubs:** the paywall's static offers are UI-test seams, not live product verification. Room recognition, receipts, archive import/export, and report generation have actual implementations. [Paywall][t-paywall].

### Five supportable sales benefits

1. **Start a room inventory without typing every object.** The scan proposes a reviewable set; it does not need to be sold as perfect identification. [Room scanner][t-room]; [commit][t-room-commit].
2. **Find the serial number, receipt, and warranty in one record.** That is more credible than generalized “peace of mind.” [Receipt][t-receipt]; [schema][t-store].
3. **Get a reminder while a recorded warranty is still active.** Qualify permissions and entered/suggested dates. [Warranty scheduler][t-warranty].
4. **Make a claim packet from the belongings you select.** Plus exports the selected evidence; acceptance and valuations remain outside the product's control. [Claim Kit][t-claim]; [PDF][t-pdf].
5. **Keep an independent copy of the inventory and its available photos.** Free portable archive/restore is a particularly strong ownership benefit, and is different from paid formatted reports. [Archive][t-archive]; [free controls][t-backup-ui].

### Claim limits and remaining verification

Keep the site's existing distinction between recorded values and appraisals. The coverage feature only compares a user-entered policy limit with tracked cents. The application's “You're covered/underinsured” strings overstate what this arithmetic establishes; do not copy them into the site or make that the main sales proposition. [Website boundary][site-trove-detail]; [coverage logic and strings][t-coverage]. Test actual scan recall, receipt errors, duplicate handling, a large-image archive round-trip, missing-file reporting, mixed currencies, claim PDF pagination, local notifications, app-lock/Spotlight exposure, and actual CloudKit metadata/photo behavior before declaring those flows release-ready.

## Wove

### What is actually implemented

| Capability | Current implementation and claim boundary | Evidence |
| --- | --- | --- |
| Faster closet entry | Local Vision subject masks, color extraction, category/default-season suggestions, and editable metadata. Batch mode accepts several photos or a deliberate flat-lay photo. Flat-lay extraction returns up to eight significant pieces, not an arbitrary overlapping pile. Subject removal can fail and fall back to the original. | [Vision pipeline][w-vision]; [flat lay][w-flatlay]; [batch choice][w-batch] |
| Daily and occasion outfits | Today prefers an already-worn look, then a planned look, before generated styling. On-demand generation retrieves/ranks closet garments, asks Foundation Models for item-number combinations, validates membership/body coverage, and fills gaps with a built-in stylist. | [Today priority][w-today]; [generation][w-ai]; [resolver][w-resolve] |
| Specific personal constraints | “Today” and standing notes, such as no shorts or no heels, feed styling filters/context. This is an unusually concrete private-context benefit. Do not promise arbitrary natural-language constraints are always obeyed without testing the parser/model. | [Notes UI][w-notes]; [styling snapshot filter][w-note-filter] |
| Learning from yes and no | Rejected garment combinations are stored locally and decay with a 45-day half-life. For Plus, a wear-derived taste profile adds co-wear, frequently chosen pieces, and formality signals; manually authored outfits receive greater weight than app suggestions. | [Rejection model][w-feedback]; [tier gate][w-taste-gate]; [taste model][w-taste] |
| Buying decision assistance | A shopping photo is compared with owned pieces, pairing candidates, a complete look, similar owned items, and an optional cost-per-wear projection. Wear-rate estimates require minimum history; otherwise a manual estimate is used. This is a clothing compatibility aid, not a fit/size guarantee, live price comparison, or shopping checkout. | [Shopping model/evidence floors][w-shopping]; [app wiring][w-shop-wiring] |
| Capsules and trips | A Plus capsule chooses actual closet garment IDs. The separate trip checklist generates generic item types/essentials; the closet argument is unused, and weather context is the device's current local weather plus a calendar season, not a destination forecast. | [Capsule/generation][w-ai]; [packing][w-packing]; [trip call][w-packing-call] |
| Calendar, wear history, insights | Saved looks can be scheduled and wear events logged/undone. Summary/most-worn views are free; Plus unlocks deeper pairings, composition, cold-weather, forgotten-piece, and cost-per-wear sections. | [Today/planning precedence][w-today]; [insight gates][w-insights] |
| Apple Watch | The phone publishes today's look as text/color/symbol data. Watch shows it and routes “Wear this”/“Not this” actions back to the phone; it is not an independent stylist or photographic closet browser. | [Phone link][w-watch-link]; [Watch UI][w-watch] |
| Export | Free export writes `closet.json` plus referenced image files into a folder for Files. JSON includes garments, wears, looks, capsules, and trips. No wardrobe restore/import path was found; the exporter itself describes future import. Styling-note/feedback/settings state is not in this export document. | [Export shape][w-export]; [folder writer][w-export-writer]; [app export][w-export-call] |

### Platform, dependencies, storage, and monetization

- **Platform:** XcodeGen configuration specifies iPhone/iPad iOS 26.0, watchOS 26.0, Swift 6, version 1.0/build 1. A launch gate requires Apple Intelligence. The current `project.yml` disables signing for headless/simulator configuration, so it is not itself proof of a distribution-ready signed product. [Project][w-project]; [root gate][w-gate].
- **Dependencies:** local WoveKit Swift package with no third-party package dependency in its manifest; Apple SwiftData, Foundation Models, Vision/CoreImage, StoreKit, WeatherKit/CoreLocation, WatchConnectivity, WidgetKit/App Intents, ActivityKit, Charts, and Core Spotlight. The Watch explicitly avoids the Vision/Foundation Models package and receives a snapshot from the phone. [Package][w-package]; [project/Watch boundary][w-project]; [weather][w-weather]; [Watch link][w-watch-link].
- **Storage/defaults:** App Group SwiftData local by default; an optional Plus toggle selects private CloudKit on next launch. Garment image files remain in the App Group image directory. Local fallback is implemented when CloudKit initialization fails; successful production sync was not tested. [Launch][w-launch]; [store][w-store]; [toggle][w-sync]; [images][w-images].
- **Weather/network:** WeatherKit is optional in the sense that denial/failure falls back to cached weather or seasonal styling. It uses a one-shot location request and asks Core Location for kilometre-level desired accuracy; code then passes the returned `CLLocation` directly to WeatherKit. There is no coordinate-rounding enforcement here, and a one-shot request is repeated when weather is refreshed, not permission for only one lifetime lookup. Cache stores weather plus a hemisphere flag, not a location history. Prefer “requests approximate location for the local forecast” over a strict guarantee that Apple receives only a coarse coordinate. [Weather and cache][w-weather]; [location helper][w-location].
- **Other boundaries:** optional iCloud records, StoreKit/model setup, paired Watch payload, and chosen export/share destinations. No remote wardrobe AI or third-party analytics SDK appeared in source; OSLog events and local daily metrics do exist. The source location permission text claiming location “never leaves your device” contradicts its WeatherKit call and should not be copied. [Events][w-events]; [permission text][w-project]; [WeatherKit call][w-weather].
- **Free/Plus:** unlimited closet; 3 on-demand AI outfit batches/day, charged only if at least one generated outfit is actually AI-sourced; same-day cached results do not charge again. Rejection feedback and personal notes are free. Plus unlocks unlimited batches, wear-derived personalization, stylist conversation, shopping advisor, capsules, packing, deeper insights, and iCloud. Gap analysis shows one result free. Export is free. StoreKit configuration matches $3.99/month, $19.99/year, $24.99 lifetime. [Limit][w-limits]; [metered call][w-metered]; [feature gates][w-style-gates]; [insights][w-insights]; [export][w-export-call]; [prices][w-prices].
- **Stubs:** static paywall rows are confined to the UI-test path. Deterministic styling fallbacks are real code, not a basis for saying unsupported devices can use the app; the root gate still blocks entry. [Paywall][w-paywall]; [gate][w-gate].

### Five supportable sales benefits

1. **See another outfit in the clothes already there.** Owned-garment selection is implemented for daily/occasion looks and capsules. Do not extend this claim to generic packing. [Outfits/capsules][w-ai].
2. **Tell the stylist what today calls for.** Temporary and standing notes connect the privacy promise with a real circumstance, rather than an abstract “AI that knows you.” [Personal notes][w-notes].
3. **Say “not this” without starting over.** Rejected combinations influence future styling and their weight fades over time. [Feedback][w-feedback]; [tier split][w-taste-gate].
4. **Check a possible purchase against the closet at home.** Owned pairings, similar items, and explicit wear-rate assumptions can make a shopping decision more informed. Avoid promising savings or perfect compatibility. [Shopping evidence][w-shopping]; [wiring][w-shop-wiring].
5. **Spend less time cataloging, and retain a usable copy.** Deliberate flat-lay/batch entry and free JSON-plus-image export support this. Avoid “every garment from a pile” or “complete restorable backup.” [Flat lay][w-flatlay]; [export][w-export-writer].

### Claim limits and remaining verification

The website correctly qualifies cross-device photo sync and development status. Its “shoot a whole pile” phrasing should become laid-out pieces: foreground instances are capped and may merge overlapping garments. [Website workflow][site-wove-workflow]; [flat-lay limits][w-flatlay]. Add Plus qualifications to personal learning and capsules/packing. Do not promise formal output validation, destination-weather packing, garment-specific packing, arbitrary-note obedience, or a wardrobe import/restore feature. Test cutouts on actual clothing, separation of several laid-out pieces, note constraints, model/heuristic attribution, feedback over time, Plus gating, Watch actions while disconnected, image export completeness, and two-device sync before release claims.

## What this audit cannot verify

1. App Store release, TestFlight distribution, approved product identifiers, actual regional prices, trials/Family Sharing availability, or a current downloadable binary for any app. Local `.storekit` files and `1.0` metadata are development configuration, not commercial evidence.
2. Passing builds/tests or measured usability/performance. Tests exist in these repositories but were not executed in this read-only research scope; no success claim is inferred from their presence.
3. Physical-device model quality, language/region coverage, Apple Intelligence/model download availability, long-running reminders, background behavior, and Watch synchronization reliability.
4. Provisioned production CloudKit schemas, signed entitlements, multi-device conflicts, photo propagation, Apple-account failure cases, or operating-system device backup behavior. A `.private` CloudKit declaration is not evidence for an unconditional end-to-end encryption claim.
5. A complete security/privacy audit. Static inspection found the named connections and local processing paths, but it cannot establish absence of all traffic, operating-system telemetry, or data exposure on every system surface.

## Proposed approval scope, before any implementation

Approve the **claims and hierarchy**, not a generic rewrite: Kith should lead with completing a personal reach-out; Mise with putting a saved recipe into use; Trove with creating and retrieving a portable evidence record; Wove with finding outfits and honoring a person's real constraints. Each product should then show one precise workflow, a transparent free/Plus split, its actual device requirements, and a small named-connections/storage boundary.

The first correction set should cover the material rows above, with matching changes to `data/products.tsx`, detail copy, FAQs, any generated software/FAQ schema, and help articles that repeat the same claims. Do not change release status from development, advertise launch dates, or upgrade sync/encryption/quality claims on this research alone. Keep product and website implementation unchanged until the user approves the plan.

After approval, validate one representative real-device path per app plus its claim-critical boundary: Kith draft/handoff/log and text export; Mise import/plan/groceries/cook and recipe/photo restore; Trove room capture/report plus a complete archive round-trip; Wove outfit/notes/rejection and image export. Two-device sync needs its own explicit verification for Mise, Trove, and Wove. These checks are proposed, not performed.

## Source references

[doctrine-personal]: </Volumes/Lextar/Developer/Obsidian Ridge Labs/BRAND-DOCTRINE.md:78>
[doctrine-evidence]: </Volumes/Lextar/Developer/Obsidian Ridge Labs/BRAND-DOCTRINE.md:274>
[site-wove-workflow]: </Volumes/Lextar/Developer/Obsidian Ridge Labs/data/products.tsx:273>
[site-wove-faq]: </Volumes/Lextar/Developer/Obsidian Ridge Labs/data/faqs.ts:274>
[site-wove-learning]: </Volumes/Lextar/Developer/Obsidian Ridge Labs/data/faqs.ts:281>
[site-trove-detail]: </Volumes/Lextar/Developer/Obsidian Ridge Labs/components/ProductDetail.tsx:67>
[site-trove-workflow]: </Volumes/Lextar/Developer/Obsidian Ridge Labs/data/products.tsx:431>
[site-kith-detail]: </Volumes/Lextar/Developer/Obsidian Ridge Labs/components/ProductDetail.tsx:76>
[site-kith-faq]: </Volumes/Lextar/Developer/Obsidian Ridge Labs/data/faqs.ts:377>
[site-mise]: </Volumes/Lextar/Developer/Obsidian Ridge Labs/data/products.tsx:506>
[site-mise-workflow]: </Volumes/Lextar/Developer/Obsidian Ridge Labs/data/products.tsx:532>
[site-mise-faq]: </Volumes/Lextar/Developer/Obsidian Ridge Labs/data/faqs.ts:397>
[k-persistence]: </Volumes/Lextar/Developer/Kith/Kith/Sources/Persistence/Persistence.swift:5>
[k-entitlements]: </Volumes/Lextar/Developer/Kith/Kith/Kith.entitlements:4>
[k-contacts]: </Volumes/Lextar/Developer/Kith/Kith/Sources/Integration/ContactsImporter.swift:5>
[k-cadence]: </Volumes/Lextar/Developer/Kith/Kith/Sources/Models/CadenceEngine.swift:9>
[k-planner]: </Volumes/Lextar/Developer/Kith/Kith/Sources/Models/ReachOutPlanner.swift:14>
[k-spark]: </Volumes/Lextar/Developer/Kith/Kith/Sources/Features/Today/TodayView.swift:297>
[k-coming-up]: </Volumes/Lextar/Developer/Kith/Kith/Sources/Features/Today/TodayView.swift:510>
[k-ai]: </Volumes/Lextar/Developer/Kith/Kith/Sources/Intelligence/KithIntelligence.swift:175>
[k-draft]: </Volumes/Lextar/Developer/Kith/Kith/Sources/Features/AIActions/DraftMessageView.swift:329>
[k-capture]: </Volumes/Lextar/Developer/Kith/Kith/Sources/Services/ReachOutCapture.swift:32>
[k-root]: </Volumes/Lextar/Developer/Kith/Kith/Sources/App/RootView.swift:30>
[k-speech]: </Volumes/Lextar/Developer/Kith/Kith/Sources/Intelligence/SpeechTranscriber.swift:28>
[k-lock]: </Volumes/Lextar/Developer/Kith/Kith/Sources/Services/AppLockManager.swift:5>
[k-settings]: </Volumes/Lextar/Developer/Kith/Kith/Sources/Features/Settings/SettingsView.swift:159>
[k-export]: </Volumes/Lextar/Developer/Kith/Kith/Sources/Services/DataExporter.swift:5>
[k-export-ui]: </Volumes/Lextar/Developer/Kith/Kith/Sources/Features/Settings/SettingsView.swift:332>
[k-build]: </Volumes/Lextar/Developer/Kith/Kith.xcodeproj/project.pbxproj:1063>
[k-build-os]: </Volumes/Lextar/Developer/Kith/Kith.xcodeproj/project.pbxproj:990>
[k-project]: </Volumes/Lextar/Developer/Kith/Kith.xcodeproj/project.pbxproj:637>
[k-gate]: </Volumes/Lextar/Developer/Kith/Kith/Sources/App/AppleIntelligenceGate.swift:19>
[k-readme]: </Volumes/Lextar/Developer/Kith/README.md:69>
[k-events]: </Volumes/Lextar/Developer/Kith/Kith/Sources/Services/KithEvents.swift:4>
[k-limits]: </Volumes/Lextar/Developer/Kith/Kith/Sources/Store/Entitlements.swift:5>
[k-prices]: </Volumes/Lextar/Developer/Kith/Kith.storekit:14>
[k-paywall]: </Volumes/Lextar/Developer/Kith/Kith/Sources/Features/Paywall/PaywallView.swift:180>
[m-build]: </Volumes/Lextar/Developer/Mise/Mise.xcodeproj/project.pbxproj:995>
[m-project]: </Volumes/Lextar/Developer/Mise/Mise.xcodeproj/project.pbxproj:552>
[m-gate]: </Volumes/Lextar/Developer/Mise/Mise/Views/RootView.swift:63>
[m-engine]: </Volumes/Lextar/Developer/Mise/Mise/Services/Intelligence/RecipeIntelligence.swift:62>
[m-fetch]: </Volumes/Lextar/Developer/Mise/Shared/RecipeFetcher.swift:26>
[m-ai]: </Volumes/Lextar/Developer/Mise/Mise/Services/Intelligence/FoundationIntelligence.swift:42>
[m-ocr]: </Volumes/Lextar/Developer/Mise/Mise/Services/VisionTextImport.swift:4>
[m-ops]: </Volumes/Lextar/Developer/Mise/Mise/Services/RecipeOps.swift:59>
[m-planner]: </Volumes/Lextar/Developer/Mise/Mise/Views/Planner/PlannerView.swift:330>
[m-dinners]: </Volumes/Lextar/Developer/Mise/Mise/Services/RecipeOps.swift:247>
[m-groceries]: </Volumes/Lextar/Developer/Mise/Mise/Services/RecipeOps.swift:382>
[m-cook]: </Volumes/Lextar/Developer/Mise/Mise/Views/Recipes/CookModeView.swift:62>
[m-cook-actions]: </Volumes/Lextar/Developer/Mise/Mise/Views/Recipes/CookModeView.swift:358>
[m-assistant]: </Volumes/Lextar/Developer/Mise/Mise/Services/AIAssistant.swift:22>
[m-context]: </Volumes/Lextar/Developer/Mise/Mise/Views/SousChef/SousChefView.swift:30>
[m-watch]: </Volumes/Lextar/Developer/Mise/MiseWatch/WatchHomeView.swift:3>
[m-watch-bridge]: </Volumes/Lextar/Developer/Mise/Mise/Services/WatchBridge.swift:33>
[m-recipe-shape]: </Volumes/Lextar/Developer/Mise/Shared/RecipeTypes.swift:86>
[m-data-ui]: </Volumes/Lextar/Developer/Mise/Mise/Views/Settings/SettingsView.swift:251>
[m-store]: </Volumes/Lextar/Developer/Mise/Shared/Persistence.swift:4>
[m-launch]: </Volumes/Lextar/Developer/Mise/Mise/MiseApp.swift:13>
[m-sync]: </Volumes/Lextar/Developer/Mise/Mise/Views/Settings/SettingsView.swift:174>
[m-events]: </Volumes/Lextar/Developer/Mise/Mise/Services/MiseEvents.swift:4>
[m-limits]: </Volumes/Lextar/Developer/Mise/Mise/Services/UsageLimits.swift:7>
[m-prices]: </Volumes/Lextar/Developer/Mise/Config/MiseProducts.storekit:8>
[m-paywall]: </Volumes/Lextar/Developer/Mise/Mise/Views/Paywall/PaywallView.swift:104>
[t-build]: </Volumes/Lextar/Developer/Trove/Trove.xcodeproj/project.pbxproj:1043>
[t-project]: </Volumes/Lextar/Developer/Trove/Trove.xcodeproj/project.pbxproj:658>
[t-gate]: </Volumes/Lextar/Developer/Trove/Trove/Features/RootView.swift:18>
[t-room]: </Volumes/Lextar/Developer/Trove/Trove/Intelligence/RoomScanner.swift:7>
[t-room-commit]: </Volumes/Lextar/Developer/Trove/Trove/Features/Capture/RoomScanView.swift:425>
[t-vision]: </Volumes/Lextar/Developer/Trove/Trove/Intelligence/VisionScanner.swift:6>
[t-ai-contract]: </Volumes/Lextar/Developer/Trove/Trove/Intelligence/IntelligenceProvider.swift:12>
[t-ai]: </Volumes/Lextar/Developer/Trove/Trove/Intelligence/FoundationModelIntelligence.swift:13>
[t-ai-service]: </Volumes/Lextar/Developer/Trove/Trove/Intelligence/IntelligenceService.swift:50>
[t-store]: </Volumes/Lextar/Developer/Trove/Trove/Persistence/TroveStore.swift:61>
[t-photos]: </Volumes/Lextar/Developer/Trove/Trove/Persistence/PhotoStore.swift:5>
[t-photo-model]: </Volumes/Lextar/Developer/Trove/Trove/Models/ItemPhoto.swift:4>
[t-receipt]: </Volumes/Lextar/Developer/Trove/Trove/Models/Receipt.swift:4>
[t-warranty]: </Volumes/Lextar/Developer/Trove/Trove/Integrations/WarrantyReminders.swift:14>
[t-report-ui]: </Volumes/Lextar/Developer/Trove/Trove/Features/Settings/SettingsView.swift:273>
[t-backup-ui]: </Volumes/Lextar/Developer/Trove/Trove/Features/Settings/SettingsView.swift:296>
[t-claim]: </Volumes/Lextar/Developer/Trove/Trove/Features/Insights/ClaimKitView.swift:300>
[t-pdf]: </Volumes/Lextar/Developer/Trove/Trove/Features/Insights/InventoryExport.swift:19>
[t-archive]: </Volumes/Lextar/Developer/Trove/Trove/Persistence/InventoryArchive.swift:4>
[t-archive-export]: </Volumes/Lextar/Developer/Trove/Trove/Persistence/InventoryArchive.swift:163>
[t-archive-restore]: </Volumes/Lextar/Developer/Trove/Trove/Persistence/InventoryArchive.swift:289>
[t-sync]: </Volumes/Lextar/Developer/Trove/Trove/App/TroveApp.swift:16>
[t-sync-ui]: </Volumes/Lextar/Developer/Trove/Trove/Features/Settings/SettingsView.swift:463>
[t-homes]: </Volumes/Lextar/Developer/Trove/Trove/Features/Settings/HomesView.swift:110>
[t-plus]: </Volumes/Lextar/Developer/Trove/Trove/Store/TroveProducts.swift:22>
[t-meter]: </Volumes/Lextar/Developer/Trove/Trove/Store/UsageMeter.swift:64>
[t-prices]: </Volumes/Lextar/Developer/Trove/Config/Trove.storekit:16>
[t-events]: </Volumes/Lextar/Developer/Trove/Trove/Core/TroveEvents.swift:4>
[t-paywall]: </Volumes/Lextar/Developer/Trove/Trove/Features/Paywall/PaywallView.swift:135>
[t-coverage]: </Volumes/Lextar/Developer/Trove/Trove/Features/Insights/CoverageGap.swift:9>
[w-project]: </Volumes/Lextar/Developer/Wove/project.yml:4>
[w-package]: </Volumes/Lextar/Developer/Wove/WoveKit/Package.swift:4>
[w-gate]: </Volumes/Lextar/Developer/Wove/App/RootView.swift:22>
[w-vision]: </Volumes/Lextar/Developer/Wove/WoveKit/Sources/WoveKit/AI/GarmentVision.swift:26>
[w-flatlay]: </Volumes/Lextar/Developer/Wove/WoveKit/Sources/WoveKit/AI/GarmentVision.swift:84>
[w-batch]: </Volumes/Lextar/Developer/Wove/App/Features/Closet/BatchAddView.swift:15>
[w-today]: </Volumes/Lextar/Developer/Wove/App/AppModel.swift:101>
[w-ai]: </Volumes/Lextar/Developer/Wove/WoveKit/Sources/WoveKit/AI/StylistEngine.swift:33>
[w-ranking]: </Volumes/Lextar/Developer/Wove/WoveKit/Sources/WoveKit/AI/HeuristicStylist.swift:14>
[w-resolve]: </Volumes/Lextar/Developer/Wove/WoveKit/Sources/WoveKit/AI/HeuristicStylist.swift:208>
[w-notes]: </Volumes/Lextar/Developer/Wove/App/Features/Style/StylingNotesView.swift:4>
[w-note-filter]: </Volumes/Lextar/Developer/Wove/App/AppModel.swift:472>
[w-feedback]: </Volumes/Lextar/Developer/Wove/WoveKit/Sources/WoveKit/AI/StyleFeedback.swift:37>
[w-taste-gate]: </Volumes/Lextar/Developer/Wove/App/AppModel.swift:395>
[w-taste]: </Volumes/Lextar/Developer/Wove/WoveKit/Sources/WoveKit/AI/TasteProfile.swift:3>
[w-shopping]: </Volumes/Lextar/Developer/Wove/WoveKit/Sources/WoveKit/AI/ShoppingAdvisor.swift:3>
[w-shop-wiring]: </Volumes/Lextar/Developer/Wove/App/AppModel.swift:629>
[w-packing]: </Volumes/Lextar/Developer/Wove/WoveKit/Sources/WoveKit/AI/StylistEngine.swift:181>
[w-packing-call]: </Volumes/Lextar/Developer/Wove/App/AppModel.swift:921>
[w-insights]: </Volumes/Lextar/Developer/Wove/App/Features/Insights/InsightsView.swift:29>
[w-watch-link]: </Volumes/Lextar/Developer/Wove/App/Services/WatchSync.swift:6>
[w-watch]: </Volumes/Lextar/Developer/Wove/WoveWatch/WatchTodayView.swift:33>
[w-export]: </Volumes/Lextar/Developer/Wove/WoveKit/Sources/WoveKit/Services/WardrobeExport.swift:7>
[w-export-writer]: </Volumes/Lextar/Developer/Wove/WoveKit/Sources/WoveKit/Services/WardrobeExport.swift:189>
[w-export-call]: </Volumes/Lextar/Developer/Wove/App/AppModel.swift:802>
[w-launch]: </Volumes/Lextar/Developer/Wove/App/WoveApp.swift:22>
[w-store]: </Volumes/Lextar/Developer/Wove/WoveKit/Sources/WoveKit/Persistence/PersistenceController.swift:21>
[w-sync]: </Volumes/Lextar/Developer/Wove/App/Features/Settings/SettingsView.swift:297>
[w-images]: </Volumes/Lextar/Developer/Wove/WoveKit/Sources/WoveKit/Persistence/ImageStore.swift:15>
[w-weather]: </Volumes/Lextar/Developer/Wove/WoveKit/Sources/WoveKit/Services/WeatherProvider.swift:28>
[w-location]: </Volumes/Lextar/Developer/Wove/WoveKit/Sources/WoveKit/Services/WeatherProvider.swift:166>
[w-events]: </Volumes/Lextar/Developer/Wove/WoveKit/Sources/WoveKit/Services/WoveEvents.swift:4>
[w-limits]: </Volumes/Lextar/Developer/Wove/WoveKit/Sources/WoveKit/Services/Entitlements.swift:22>
[w-metered]: </Volumes/Lextar/Developer/Wove/App/AppModel.swift:860>
[w-style-gates]: </Volumes/Lextar/Developer/Wove/App/Features/Style/StyleView.swift:140>
[w-prices]: </Volumes/Lextar/Developer/Wove/Wove.storekit:6>
[w-paywall]: </Volumes/Lextar/Developer/Wove/App/Features/Paywall/PaywallView.swift:115>
