# Source audit: Memora, Molehill, Cove

**Date:** 2026-09-26. **Purpose:** evidence for a product-specific website plan, before any site implementation. **Scope:** current local source, target metadata, entitlement call sites, and the website's `data/products.tsx` / `components/ProductDetail.tsx`. No app or site implementation was changed. No secret files or user data were inspected.

## Reading the evidence

The Brand Doctrine was read in full first. Its requirements for exact product claims, category-specific product pages, and accurate release status govern this report. A product page should show why that particular app is useful, then explain its boundary; repeating the homepage's cloud argument is not a substitute for demonstrating the product. [D1] [D2]

“Implemented” below means a reachable source path exists, not that it passed a new device test, is in a submitted binary, or is publicly available. No fresh builds, test runs, App Store Connect checks, or production network captures were performed. Local StoreKit configuration establishes intended test catalog prices, **not verified live storefront prices**. Comments saying “shipping,” “never,” or “fully private” were not accepted as proof where executable code said something narrower.

Snapshot provenance: Memora HEAD `9644091`, clean working tree; Molehill HEAD `bcb31cd`, two existing changed/untracked paths; Cove HEAD `ffa1955`, five existing changed/untracked paths. Findings follow the working tree as read, not only committed HEAD. No `AGENTS.md` was found in these three repositories or their checked parent directories. The deep-research skill was read; its referenced prompt template was not present, so this report uses source tracing and a separate claim-versus-evidence pass rather than relying on that missing template.

All three website records currently say `pre-release` / “In Development.” Preserve that status until actual release evidence is supplied. Source completeness, project version numbers, StoreKit products, and screenshot fixtures do not verify a launch. [W1] [W2] [W3]

## Corrections that matter before new copy is approved

| Product | Current website claim | Source finding | Required correction |
|---|---|---|---|
| Memora | “Nothing enters a deck without your edit”; edit drafts before saving; keep source beside draft. [W3] [W6] | The input screen is replaced by the review screen. Draft rows display front/back and toggle inclusion; they have no text editor. All drafts start selected. One “Add N cards” action saves the selected batch. Saved cards can subsequently be edited in `CardEditorView`. [M4] [M5] [M6] | Say **review the proposed cards, choose which to add, and edit saved cards**. Do not promise per-card approval, mandatory edits, draft editing, or a side-by-side source view. |
| Memora | All generation is source-grounded and does not use open-domain knowledge. [W3] | Source-to-card generation is prompted to use supplied text. The separate Similar mode explicitly asks the model to infer a topic and add facts absent from the examples. Prompt constraints are not a factuality guarantee. [M7] [M8] | Scope the claim to the notes/PDF/photo workflow. Explain Similar separately if promoted. Never claim the model cannot invent an error. |
| Memora | “Generation … require[s] Apple Intelligence.” [W6] | Unsupported hardware is blocked, but capable devices with AI off/downloading can continue after an advisory. Source-to-card generation has a deterministic fallback; Similar and the tutor require the model. [M2] [M7] | Preserve the supported-hardware requirement but distinguish the AI features from study/manual/import/fallback behavior. |
| Memora | Anki import and a whole-library “backup.” [W3] [W6] | Anki import accepts legacy `.anki2` / `.anki21` collections, rejects newer `.anki21b`, and imports text, not media. The library file wraps content-only decks; it omits FSRS schedules and review history, and imports as new cards. [M13] [M14] | Say **compatible Anki text decks** and **export all deck content and images**. Do not imply full Anki fidelity or full study-state restoration. |
| Molehill | “No Streaks, No Shame”; “There is no streak to repair”; SEO keyword “task app with no streaks.” [W1] [W4] | Today displays a streak pill. You includes a flame, current streak, and copy such as “Today keeps it alive”; Pro adds longest-streak insight. [L2] | Remove the no-streak assertions from copy, metadata, FAQs, and articles. A “gentle” tone is a positioning judgment; no streaks is a false factual claim. |
| Cove | “Optional private iCloud sync.” [W2] [W5] | Production container creation passes `cloudKit: true`, attempts `.automatic`, then falls back to local. Settings displays its mode but has no iCloud opt-in switch. [C2] [C3] | Say **uses a private iCloud database when available, with a local fallback**, unless the app is changed separately. Do not invent user-controlled opt-in. |
| Cove | Entries “stay on the device” beside an iCloud promise. [W2] | Entries, insights, attachments, and weekly reflections are in the CloudKit-backed schema. On-device inference is supported; literal device confinement of journal records is not. [C2] [C4] | Separate **where inference happens** from **where records may sync**. The actual boundary cannot be “nothing ever leaves.” |
| Cove | iPhone, iPad, Watch presented as one complete platform set. [W2] | iPhone/iPad target exists. A watchOS 26 capture app and receiver exist, but the project explicitly leaves Watch embedding out of the iOS target pending provisioning. [C1] [C13] | Present iPhone/iPad as current source targets. Treat Watch capture as implemented source with distribution/integration still requiring verification. Do not promise full Watch journaling or AI. |
| All | Exact public prices without qualification. [W1] [W2] [W3] | Website prices match local StoreKit catalogs. Production managers fetch products/prices from StoreKit. [M17] [L12] [C15] | Keep prices labeled planned / subject to release confirmation; verify localized live prices before any launch claim. |

## Memora

### What the product actually does

**Strongest product argument:** turn existing study material into a useful daily review routine without first building every card by hand. Local generation is a supporting reason to trust it with class notes; FSRS, practice modes, image cards, and the import path are the reasons to use it repeatedly. A page led solely by “without the upload” undersells the app.

| Area | Implemented source evidence | Benefit and precise boundary |
|---|---|---|
| Input | Notes, PDF, Photo, and Similar are actual Generate input modes. PDFKit reads embedded text. Vision recognizes photo/scanned-page text. Document scanning uses a camera; accepted OCR requires aggregate confidence ≥0.80. [M3] [M4] | Start with material already owned. **A text-layer PDF is supported; image-only/scanned PDFs do not pass through document OCR.** A photographed or camera-scanned page uses a different path. OCR can reject uncertain captures; no handwriting-accuracy promise. |
| Draft generation | Foundation Models is tried first; the model path caps source to 4,000 characters and up to 12 cards per generation. If it fails or is unavailable, deterministic generation is used. Similar mode is model-only. [M7] [M8] | Avoid starting from a blank card editor. Do not advertise whole-book ingestion or comprehensive coverage of arbitrary long PDFs: extraction can read all pages, but the AI source path consumes a bounded excerpt. |
| Review before adding | The review view renders a list with selected count and an Add action; draft rows toggle selection; saved-card editing has front/back/note fields. [M4] [M5] [M6] | Users can reject unsuitable cards before adding the batch, then edit cards in the deck. This is meaningful control, but the current website's stronger editing/approval workflow is not implemented. |
| Review scheduling | `Scheduler.review` translates a recall rating into the FSRS next state, updates the stored card, creates a review log, and counts study toward a streak. Default target retention is 0.90; daily new-card limits and a pace guard influence the queue. [M9] [M11] | Gives the learner a next review rather than another undifferentiated pile of cards. These are scheduling calculations, not a measured guarantee of retained knowledge. |
| Practice choices | The deck exposes Match, Listen, Test, Tutor, Image Card, and Share. Match needs at least two eligible text cards; Listen excludes image-occlusion-only decks. Test and Tutor are Plus-gated. [M10] | One set of material can be practiced in several ways. Lead with the ways the learner might actually study; do not imply every mode updates FSRS in the same way without checking its grading path. |
| Diagrams | Image occlusion authoring is reachable from the deck. Manual masks can be created; the auto-detect action requires Plus. [M10] [M12] | A useful alternative to text cards for labelled images. Do not call manual image masking generative AI or imply all image features require Plus. |
| Tutor | The on-device tutor is prompted with the deck's Q/A material and streams replies; it reads at most the first 60 cards. It has no model-free chat fallback. [M15] | Ask about a deck while studying. Say it is **prompted from deck material**; “answers can only be true” or “knows the entire library” would exceed the implementation. |
| Portability | `.memora` sharing includes text, image bytes, and occlusion masks; full-library `.memorabackup` wraps those same content-only documents. CSV export excludes image-occlusion cards. Anki compatible exports, delimited CSV/TSV/Quizlet text, and own-format imports are reachable without a Plus check. [M10] [M13] [M14] [M16] | Share or keep a copy of the content without an account. Explain import format limitations and the loss of schedule/history during re-import. |

### Requirements, storage, money, and remaining verification

- **Platform:** iPhone application, iOS 26.0; project declares device family 1 and an Apple-Intelligence-class hardware capability. Runtime eligibility is authoritative. Unsupported hardware is blocked; on capable hardware, off/downloading/unavailable AI produces a once-only advisory with a continue path. Do not use the overly broad “iPhone 15 Pro and later” phrase from a source string as a verified device list. [M1] [M2]
- **Storage:** SwiftData in an app-group or application-support store. The entitlement file has app-group access and no iCloud entitlement. No app cloud-sync path was found. App-group data serves widgets/intents; it is not cross-device sync. Source uses Apple's system log for event counts/outcomes; the privacy manifest declares no tracking and no collected data types. These declarations support the claim, but are not a substitute for a network audit. [M18] [M19]
- **Free:** create up to three decks; 50 accepted AI cards per calendar month; 10 OCR pages per calendar month; AI quota is debited when selected model-generated cards are saved, not for heuristic output. Imported decks bypass new-deck creation limits. Study/FSRS, manual card creation, compatible imports, Match, Listen, and manual image cards have no Plus gate in the inspected entry paths. [M16] [M20]
- **Plus:** unlimited decks/AI allowance/OCR allowance; Test and Tutor; auto-detect image labels; adjustable retention and deeper statistics. “Unlimited” describes entitlements, not limitless input length or a speed guarantee. [M10] [M11] [M12] [M20]
- **Intended catalog:** $3.99 monthly, $24.99 yearly, $49.99 lifetime. Source verifies production StoreKit entitlements; the catalog is local test configuration. [M17]
- **Connections:** model setup and StoreKit may require a connection; opening help/legal links or sharing/exporting to a chosen destination can also leave the app. No direct content-upload/remote-AI client was found in the inspected production Swift source. Avoid saying the device never connects, or that a file saved to a user's chosen cloud destination remains device-confined.
- **Fixtures, not release proof:** `MEMORA_UITEST` selects an in-memory store; seed variables populate sample history/decks; `MEMORA_FORCE_PLUS` bypasses paid gating; paywall stub prices are conditional on a UI-test flag. Do not treat fixture screenshots as a verified model or purchase run. [M21]
- **Important reliability limitation:** on persistent-store failure, `Persistence` deletes the existing store files and attempts a fresh store before an in-memory fallback. Do not promise an indestructible archive or automatic data recovery. Flag this behavior to the app owner separately; this audit does not change the app. [M18]

### Product page plan for approval

1. Lead with converting the user's own material into cards and an ongoing review routine, with a real notes → proposed cards → due review demonstration.
2. Show the exact control: deselect drafts, add the chosen batch, edit cards in the deck. Do not design a fictitious side-by-side editor.
3. Explain FSRS with one concrete card's four recall choices and next review interval, avoiding learning-outcome statistics.
4. Present Match, Listen, diagram masking, Test, and Tutor as distinct practice options, with Plus badges where they belong.
5. Make switching credible: compatible Anki text/Quizlet/CSV imports, content-and-image export, and explicit history/media limitations.
6. End with one concise processing/storage/connection block, requirements, free allowance, planned Plus options, and in-development status.

**Avoid:** “encrypted context archive”; universal PDF understanding; mandatory edits; independent per-card approval; full-fidelity Anki migration; “full backup” without the schedule/history caveat; guaranteed factual generation. The central argument should be studying sooner and continuing to review, not another general manifesto.

## Molehill

### What the product actually does

**Strongest product argument:** when a task is still not getting started, Molehill has a concrete next move: shrink that particular step. It does not stop at turning a title into a checklist. It retains the parent task context and time estimate, replaces the stuck step, and can offer this after repeated snoozing. That is the most specific and defensible selling point in the current implementation.

| Area | Implemented source evidence | Benefit and precise boundary |
|---|---|---|
| Task breakdown | Foundation Models supports three granularities: Big Picture 3–5 steps, Balanced 5–8, Tiny 8–14; it streams partial plans. A deterministic fallback is selected on model failure. [L3] | The person chooses how much detail is useful. Do not repeat a blanket “3–7 steps” if that wording exists elsewhere; current constraints differ by granularity. |
| Shrink a stuck step | `StepSplit` bounds proposals to 2–4 replacements, skips already tiny/empty steps, and offers a nudge after two deferrals. Splitting uses task title, step title, and parent estimate. Proposed children are normalized against the parent's time budget. [L4] [L5] | Help is specific to where the person is stuck. The nudge is conditional; it does not appear after two snoozes for every kind of step. Estimates are estimates, not guaranteed task duration. |
| Help after free quota runs out | The split sheet routes to a deterministic splitter when the AI budget is exhausted and still presents a result. [L5] | The core escape hatch remains available when someone is stuck. This is stronger and more concrete than a vague “no shame” promise. The fallback is not AI output and should not be described as such. |
| Brain dump | Typed or locally transcribed input can be compiled into tasks with categories and urgency. The review list lets the user edit titles, recategorize, change urgency, or drop items. A deliberate “sort without AI” parser remains available. [L6] | Capture a mess before deciding what each item is; correct the proposed structure before accepting it. This is actually an editable draft stage, unlike Memora's current generation review. |
| Focus | Focus presents the current step, completion, save-for-later, snooze, and an optional timer with an in-session end date and Live Activity. It can open the split flow for the current step. [L7] | The full plan becomes one action to do now, with an easy route to make it smaller. A current timer can stay meaningful during backgrounding; do not promise indefinite relaunch persistence without a separate trace. |
| Recurring work and capture | Task detail exposes recurrence; completion spawns a successor. The share extension accepts editable text and/or a URL into an app-group inbox; it does not fetch or summarize the linked page. [L8] | Routine tasks can return, and something found in another app can be captured before it is forgotten. A URL share is not webpage extraction. |
| System access | Widgets show next-step snapshots. Spotlight indexes active task titles and notes. Pro export creates reminders or sequential calendar time blocks after permission. [L9] [L10] | Surface the next step outside the app; send a plan to the tools already used. Reminders export requests full access because it creates a list; Calendar export requests write-only access. Export is not bidirectional sync. |
| Progress | Today and You display streaks; You also displays weekly completion and totals. Pro reveals additional statistics including longest streak and estimated minutes completed. [L2] | Progress exists and may be useful. It directly disqualifies the website's current no-streak claim. |

### Requirements, storage, money, and remaining verification

- **Platform:** iPhone only in current project/build settings; iOS 26.0. Apple Intelligence must be ready to pass the root gate; off/downloading/unsupported states block the shell. A fallback engine exists behind that gate, so its presence does **not** mean the current app supports non-AI hardware. The gate's explanatory string mentions iPads, but the actual target is device family 1; do not market iPad support from that string. [L1] [L11]
- **Storage:** local SwiftData in the shared app-group container; only app-group entitlement, no CloudKit entitlement. Model comments say “CloudKit-compatible” in preparation for possible future support; that is not sync implementation. Task titles/notes are also mirrored to local Spotlight and next-step snapshots to widgets. [L9] [L11]
- **Speech:** `SpeechAnalyzer` / `SpeechTranscriber` processes microphone buffers locally; unlike Cove's voice-memo feature, this controller does not save a recording. Microphone/speech permission, supported locale, and installed speech assets are required. Asset installation can require a connection before offline capture. Typing remains available if voice is unavailable. [L13]
- **Free:** three AI actions per local calendar day, shared by app and intents; basic manual task/focus paths remain available. Successful AI breakdowns, brain-dump sorting, and splits draw from the pool; fallbacks are not charged. Budget-exhausted splitting remains available through the heuristic; parser-based brain-dump sorting remains available too. [L5] [L6] [L14]
- **Pro:** unlimited AI action allowance, Reminders/Calendar export, deeper progress insights, and additional themes. Do not imply export is free. Intended catalog: $2.99 monthly, $19.99 yearly, $39.99 lifetime, pending live-store confirmation. [L2] [L10] [L12] [L15]
- **Import/export limits:** the inspected source includes text/URL share capture and outgoing Reminders/Calendar writes. No general CSV/JSON library import, file backup/export, or cloud task-sync path was found. These are bounded negative findings, not a promise that every uninspected future branch lacks them. [L8] [L10]
- **Connections/telemetry:** inspected production code has no direct remote-AI/content-upload client. StoreKit and speech/model setup may connect; chosen Apple destinations may sync through the user's accounts. Events use the unified local system log, with counts/enums/outcomes rather than task content. The privacy manifest declares no tracking/collected data types. [L16]
- **Fixtures:** `--uitest` / previews select a `MockEngine`; `--uitest-pro` grants a test entitlement; plain UI testing uses a stub storefront unless real-store testing is explicitly selected. These cannot establish shipping behavior or AI quality. [L17]

### Product page plan for approval

1. Start with one recognizably stuck task and show it becoming a first action, using real app UI.
2. Make “Still too big?” the principal demonstration: one step → a small number of editable replacements, in the same task context.
3. Show a spoken/typed brain dump becoming a proposed list that the user can correct.
4. Show the continuation: Today → Focus → widget/Live Activity; introduce repeat tasks and optional export as useful extensions.
5. Explain the three-action free allowance and the deterministic fallback where it makes the practical difference.
6. Give the local storage/Spotlight/Apple export boundary and requirements in a compact factual block.

**Avoid:** no-streak claims; ADHD-treatment or clinical efficacy claims; guaranteed estimates; full calendar integration; cloud sync; web-link summarization. Lead with reducing a task to something startable, not moralizing about productivity or privacy.

## Cove

### What the product actually does

**Strongest product argument:** make a growing journal useful to return to. The differentiating sequence is an entry or question → relevant past entries → a short reflection with links back to the originals. A private text box alone is not the full product; semantic retrieval, entry-scoped conversations, weekly reflections, and portable archives give the page its substance.

| Area | Implemented source evidence | Benefit and precise boundary |
|---|---|---|
| Capture | Entry editor supports text, mood, photos, and recorded voice memos. Dictation uses local speech models; the actual controller also writes temporary audio and exposes a recorded memo for attachment, despite an outdated comment saying audio is never written. [C5] | A person can preserve a moment in the form that fits it. Distinguish a stored voice memo from transient speech transcription, and never copy the stale “audio is never recorded” comment. |
| Per-entry response | Entry analysis uses Foundation Models with NaturalLanguage heuristic fallback. It generates valence/emotions/themes and a short summary, and can suggest a follow-up question. Automatic analysis and follow-ups each have settings. Model input is capped at 4,000 characters. [C6] | Offers a way back into an entry. These are generated interpretations, not verified diagnoses or a complete reading of arbitrarily long entries. The original writing stays the source of truth. |
| Meaning-based search | NaturalLanguage sentence embeddings are computed/cached locally. Retrieval ranks entry vectors; the indexed text basis is the first 500 characters of entry text (or its summary if empty). Language selection prefers a supported locale, otherwise English. [C7] | Find a relevant entry without remembering its exact wording. Do not promise exhaustive semantic understanding of an entire long journal or language support beyond installed embedding availability. |
| Ask your journal | A conversation can start from the whole journal or one focused entry. Each turn retrieves relevant entries, shows those sources as “Drawn from” links, and sends bounded excerpts plus recent conversation context to the local model. When semantic search finds nothing, recent entries are used instead. [C8] | Return to the passages behind a question and inspect the originals. Describe this as source links/retrieved context, not independently verified per-sentence citations or guaranteed factual answers. |
| Weekly reflection | Automatic generation covers the last completed calendar week, requires at least two entries and Plus, and runs on app open/foreground with a once-per-day attempt guard. Manual generation is also reachable. One qualifying closed-week preview is available for free. [C9] [C10] | A reason to revisit the week without writing a summary oneself. Do not promise it runs unattended at an exact time or always arrives while the app stays closed. |
| Mood and recap | Free mood trends cover 14 days; Plus unlocks all-time trends, fuller emotions/themes, prompt packs/programs, and a Year in Review screen. Year in Review is computed from local aggregates and offers a shareable image, not a separate demonstrated generative annual analysis. [C10] [C11] | Offer a longer view while retaining the original entries. State which depth is paid. Do not infer medical correlation or diagnosis from trend charts. |
| Portable archive | Markdown, lightweight JSON, and ZIP containing JSON/Markdown/photos/audio are implemented. Own-format restore and Day One JSON/ZIP import exist. Matching IDs are skipped during repeat imports. [C12] | Bring an existing journal and take a readable copy away. For media restoration use ZIP; JSON alone does not contain the photo/audio bytes. Day One import is a supported subset, not a lossless clone. |
| Lock and system surfaces | Device-owner authentication supports Face ID/Touch ID/passcode. Spotlight indexes dates, short summaries, and themes, not raw full entries; it is enabled by default and can be switched off. Health export is optional. [C3] [C14] | An app lock and controls over system discoverability. Do not present the lock as independent encryption of every file or promise zero traces outside the open app. |
| Watch | Watch UI captures text and/or mood and queues it with WatchConnectivity. Phone receiver stores/analyzes it. Watch packaging remains a release integration issue. [C1] [C13] | Capture-only convenience is a future page detail after distribution verification; not a standalone AI journal. |

### Requirements, storage, money, and remaining verification

- **Platform:** iPhone and iPad target, iOS/iPadOS 26.0. Root UI requires Apple Intelligence to be ready before onboarding/journal access. The presence of a NaturalLanguage fallback does not mean supported access without Apple Intelligence. Watch target declares watchOS 26.0, with the packaging limitation above. [C1] [C16]
- **Storage:** production SwiftData requests an automatic private CloudKit database first. Entries, insights, binary attachments, and weekly reflections belong to that schema. If CloudKit container creation fails, the code uses the same URL with `.none`; a persistent-store failure falls back to memory and surfaces an alert. No application sync toggle was found. Source establishes configuration, not successful multi-device/attachment transfer in a provisioned release. [C2] [C4]
- **Boundary:** inference and semantic search are local; journal records can sync through Apple's private iCloud database. Distinguish those statements. Do not claim cloud records are end-to-end encrypted merely because an app comment/UI footer says so: this audit does not establish actual Apple account protection settings or encryption key custody. Do not invent a Cove-operated server or an app account either.
- **Health:** Settings offers a “Save moods to Health” toggle, off by default. Service requests both read and write permission to State of Mind, but the inspected implementation writes/backfills moods; it does not contain a Health query for importing State of Mind or correlating outside health history. Do not advertise health-data insight that is not there. [C14]
- **Free:** writing/basic capture and basic entry response have no paywall in the inspected save/analysis paths; basic trends are limited to 14 days. Ask grants one **conversation credit per week**, which the actual view extends to up to three nonempty reply turns within that conversation. Entitlement comments saying “one question” are narrower than current UI behavior. One closed-week reflection preview requires at least two entries. [C5] [C6] [C8] [C10]
- **Plus:** weekly reflection, deeper insight display, unlimited Ask conversations, all-time trends, premium prompt packs/programs, and Year in Review. Intended local catalog: $5.99 monthly, $34.99 yearly, $89.99 lifetime. Production prices come from StoreKit and must be checked before release. [C10] [C11] [C15]
- **Portability limits:** Day One conversion preserves its supported text, dates, star, and matched photos, but builds empty tags/audio and does not map all Day One metadata. Exporter is entry-based; do not claim a complete app-state/weekly-reflection/settings migration from the words “full archive.” [C12]
- **Connections:** optional Health writes and chosen file destinations, private CloudKit records, StoreKit, and speech/model installation are the meaningful boundaries found. No direct remote-AI/content-upload client was found in the inspected Swift production source. The app's privacy manifest declares no tracking/data collection, but that does not mean the app makes no network connections. [C2] [C5] [C15] [C17]
- **Fixtures:** `-uiTesting` uses sample in-memory data, and `-forceHeuristic` selects deterministic responses. These explain how screenshots/tests may differ from a real-model device session and do not verify a release. [C18]

### Product page plan for approval

1. Begin with the use of a journal over time: finding and reconsidering something already written. Show a real entry, a question, and the source-entry links that accompany the response.
2. Show capture modes as choices, including the saved voice memo distinction.
3. Demonstrate “Ask about this entry” alongside journal-wide retrieval, with honest scope and a clear return to the original text.
4. Explain what a completed week's reflection provides and when it is generated; separate free preview from recurring Plus use.
5. Show portable ownership through the actual import/export controls and supported-format limits.
6. State local inference and CloudKit storage as separate facts; include lock, Spotlight, Health choice, requirements, planned pricing, and development status.

**Avoid:** “everything stays on this device,” user-controlled iCloud opt-in, verified end-to-end encryption, therapeutic/diagnostic efficacy, unlimited free AI conversations, full Day One fidelity, a full-featured Watch app, or a generated annual analysis unsupported by the recap implementation.

## Approval decisions and validation before publication

These are decisions for the proposed website plan, not authorization to implement it:

1. **Approve the product arguments:** Memora = material → practice → scheduled recall; Molehill = shrink the particular step that prevents starting; Cove = retrieve and revisit the writing behind a question.
2. **Approve corrected boundaries:** narrower Memora review/migration language; removal of Molehill no-streak claims; Cove CloudKit configuration stated without fictional opt-in.
3. **Resolve release facts:** actual availability, public App Store links, localized prices, device/language compatibility, provisioned Cove iCloud/Watch behavior. Until verified, retain “in development.”
4. **Use actual reachable UI for visuals:** no mock interface that promises an unimplemented draft editor, richer retrieval, sync control, or Watch capability.
5. **Before launch, validate the claims on supported hardware:** fresh install/model setup → airplane-mode core workflow; free/paid/expired entitlement behavior; exported-file restoration and stated exclusions; Apple service permission choices; provisioned sync across two devices; no sensitive content transmitted by app networking. These are recommended future verification tasks, not tests performed here.

No site redesign should proceed from the evidence alone without the approval requested by the user. The factual correction ledger and page arguments above are the reviewable input to that approval.

## Source index

Each link points to the exact local file and starting line for the relevant source span. Source is primary; README/roadmap claims were not used to promote untraced features.

- **D1:** [Product fact precision](</Volumes/Lextar/Developer/Obsidian Ridge Labs/BRAND-DOCTRINE.md:274>); [Product page lens](</Volumes/Lextar/Developer/Obsidian Ridge Labs/BRAND-DOCTRINE.md:318>).
- **D2:** [Release status](</Volumes/Lextar/Developer/Obsidian Ridge Labs/BRAND-DOCTRINE.md:377>).
- **W1:** [Molehill website record](</Volumes/Lextar/Developer/Obsidian Ridge Labs/data/products.tsx:144>).
- **W2:** [Cove website record](</Volumes/Lextar/Developer/Obsidian Ridge Labs/data/products.tsx:200>).
- **W3:** [Memora website record](</Volumes/Lextar/Developer/Obsidian Ridge Labs/data/products.tsx:353>).
- **W4:** [Molehill detail](</Volumes/Lextar/Developer/Obsidian Ridge Labs/components/ProductDetail.tsx:22>); [Molehill metadata](</Volumes/Lextar/Developer/Obsidian Ridge Labs/components/ProductDetail.tsx:146>).
- **W5:** [Cove detail](</Volumes/Lextar/Developer/Obsidian Ridge Labs/components/ProductDetail.tsx:31>); [Cove metadata](</Volumes/Lextar/Developer/Obsidian Ridge Labs/components/ProductDetail.tsx:151>).
- **W6:** [Memora detail](</Volumes/Lextar/Developer/Obsidian Ridge Labs/components/ProductDetail.tsx:58>); [Memora hero](</Volumes/Lextar/Developer/Obsidian Ridge Labs/components/ProductDetail.tsx:195>).
- **M1:** [iOS deployment](</Volumes/Lextar/Developer/Memora/project.yml:4>); [iPhone target](</Volumes/Lextar/Developer/Memora/project.yml:38>); [Hardware capability](</Volumes/Lextar/Developer/Memora/project.yml:58>); [Generated app target family](</Volumes/Lextar/Developer/Memora/Memora.xcodeproj/project.pbxproj:1254>).
- **M2:** [AI gate decisions](</Volumes/Lextar/Developer/Memora/Memora/Sources/App/AIRequirementView.swift:29>); [Root gate](</Volumes/Lextar/Developer/Memora/Memora/Sources/App/RootView.swift:65>).
- **M3:** [PDF text extraction](</Volumes/Lextar/Developer/Memora/Memora/Sources/Generation/TextExtraction.swift:9>); [OCR threshold](</Volumes/Lextar/Developer/Memora/Memora/Sources/Generation/TextExtraction.swift:35>); [Scanned pages and OCR acceptance](</Volumes/Lextar/Developer/Memora/Memora/Sources/Features/Generate/GenerateView.swift:749>).
- **M4:** [Input/review branch](</Volumes/Lextar/Developer/Memora/Memora/Sources/Features/Generate/GenerateView.swift:80>); [Review screen and batch Add](</Volumes/Lextar/Developer/Memora/Memora/Sources/Features/Generate/GenerateView.swift:516>).
- **M5:** [Selected defaults and read-only draft rows](</Volumes/Lextar/Developer/Memora/Memora/Sources/Features/Generate/GenerateView.swift:825>); [Save selected cards](</Volumes/Lextar/Developer/Memora/Memora/Sources/Features/Generate/GenerateView.swift:689>).
- **M6:** [Saved-card text fields](</Volumes/Lextar/Developer/Memora/Memora/Sources/Features/Decks/CardEditorView.swift:111>); [Card editor destination](</Volumes/Lextar/Developer/Memora/Memora/Sources/Features/Decks/DeckDetailView.swift:169>).
- **M7:** [4,000-character cap, fallback, Similar](</Volumes/Lextar/Developer/Memora/Memora/Sources/Generation/CardGenerationService.swift:15>); [Source-grounding prompt](</Volumes/Lextar/Developer/Memora/Memora/Sources/Generation/FoundationModelCardGenerator.swift:27>).
- **M8:** [Similar mode new-facts prompt](</Volumes/Lextar/Developer/Memora/Memora/Sources/Generation/FoundationModelCardGenerator.swift:68>); [12-card generation cap](</Volumes/Lextar/Developer/Memora/Memora/Sources/Features/Generate/GenerateView.swift:604>).
- **M9:** [Retention preference](</Volumes/Lextar/Developer/Memora/Memora/Sources/SpacedRepetition/Scheduler.swift:9>); [Review scheduling and log](</Volumes/Lextar/Developer/Memora/Memora/Sources/SpacedRepetition/Scheduler.swift:44>); [Queue and pace limits](</Volumes/Lextar/Developer/Memora/Memora/Sources/SpacedRepetition/Scheduler.swift:86>).
- **M10:** [Practice modes and gates](</Volumes/Lextar/Developer/Memora/Memora/Sources/Features/Decks/DeckDetailView.swift:223>); [CSV export exclusions](</Volumes/Lextar/Developer/Memora/Memora/Sources/Features/Decks/DeckDetailView.swift:274>); [Test and Tutor paywall](</Volumes/Lextar/Developer/Memora/Memora/Sources/Features/Decks/DeckDetailView.swift:289>).
- **M11:** [Retention gate and pace controls](</Volumes/Lextar/Developer/Memora/Memora/Sources/Features/Settings/SettingsView.swift:196>); [Paid statistics](</Volumes/Lextar/Developer/Memora/Memora/Sources/Features/Stats/StatsView.swift:77>).
- **M12:** [Plus auto-detect gate](</Volumes/Lextar/Developer/Memora/Memora/Sources/Features/Occlusion/OcclusionEditorView.swift:393>).
- **M13:** [Accepted/rejected Anki formats](</Volumes/Lextar/Developer/Memora/Memora/Sources/Features/Sharing/AnkiImporter.swift:42>); [Imported text fields](</Volumes/Lextar/Developer/Memora/Memora/Sources/Features/Sharing/AnkiImporter.swift:91>); [No-media contract](</Volumes/Lextar/Developer/Memora/Memora/Sources/Features/Sharing/AnkiImporter.swift:6>).
- **M14:** [Content-only fields](</Volumes/Lextar/Developer/Memora/Memora/Sources/Models/Transfer/DeckTransfer.swift:26>); [Fresh scheduling on import](</Volumes/Lextar/Developer/Memora/Memora/Sources/Models/Transfer/DeckTransfer.swift:88>); [Library wrapper](</Volumes/Lextar/Developer/Memora/Memora/Sources/Models/Transfer/DeckDocument.swift:69>).
- **M15:** [Local tutor session](</Volumes/Lextar/Developer/Memora/Memora/Sources/Features/Tutor/TutorView.swift:42>); [60-card grounding cap](</Volumes/Lextar/Developer/Memora/Memora/Sources/Features/Tutor/TutorView.swift:94>).
- **M16:** [New-deck gate](</Volumes/Lextar/Developer/Memora/Memora/Sources/Features/Decks/DecksHomeView.swift:175>); [Ungated imports](</Volumes/Lextar/Developer/Memora/Memora/Sources/Features/Decks/DecksHomeView.swift:516>); [Delimited text parsing](</Volumes/Lextar/Developer/Memora/Memora/Sources/Features/Sharing/TextDeckExchange.swift:30>).
- **M17:** [Local lifetime price](</Volumes/Lextar/Developer/Memora/Memora.storekit:16>); [Local monthly price](</Volumes/Lextar/Developer/Memora/Memora.storekit:45>); [Local yearly price](</Volumes/Lextar/Developer/Memora/Memora.storekit:72>); [Live StoreKit product lookup](</Volumes/Lextar/Developer/Memora/Memora/Sources/Store/StoreManager.swift:43>); [Verified entitlements](</Volumes/Lextar/Developer/Memora/Memora/Sources/Store/StoreManager.swift:134>).
- **M18:** [Local store URL](</Volumes/Lextar/Developer/Memora/Memora/Sources/Models/Persistence.swift:19>); [Failure recovery deletes store](</Volumes/Lextar/Developer/Memora/Memora/Sources/Models/Persistence.swift:31>); [App-group entitlement](</Volumes/Lextar/Developer/Memora/Memora/Memora.entitlements:5>).
- **M19:** [Local logging call](</Volumes/Lextar/Developer/Memora/Memora/Sources/App/MemoraEvents.swift:30>); [Privacy declarations](</Volumes/Lextar/Developer/Memora/Config/MemoraPrivacy.xcprivacy:5>).
- **M20:** [Free limits](</Volumes/Lextar/Developer/Memora/Memora/Sources/Store/Entitlements.swift:6>); [OCR eligibility](</Volumes/Lextar/Developer/Memora/Memora/Sources/Features/Generate/GenerateView.swift:566>); [Charge accepted AI cards only](</Volumes/Lextar/Developer/Memora/Memora/Sources/Features/Generate/GenerateView.swift:700>).
- **M21:** [Test store and seed flags](</Volumes/Lextar/Developer/Memora/Memora/Sources/App/MemoraApp.swift:15>); [Force Plus override](</Volumes/Lextar/Developer/Memora/Memora/Sources/Store/StoreManager.swift:27>); [Test-only price stub](</Volumes/Lextar/Developer/Memora/Memora/Sources/Features/Paywall/PaywallView.swift:303>).
- **L1:** [iOS 26 and iPhone target](</Volumes/Lextar/Developer/Molehill/project.yml:4>); [Generated deployment target](</Volumes/Lextar/Developer/Molehill/Molehill.xcodeproj/project.pbxproj:1426>); [Conflicting iPad copy](</Volumes/Lextar/Developer/Molehill/Molehill/App/AppleIntelligenceGate.swift:85>).
- **L2:** [Today streak](</Volumes/Lextar/Developer/Molehill/Molehill/Features/Today/TodayView.swift:196>); [Streak display](</Volumes/Lextar/Developer/Molehill/Molehill/Features/You/YouView.swift:47>); [Streak copy](</Volumes/Lextar/Developer/Molehill/Molehill/Features/You/YouView.swift:94>); [Pro insights](</Volumes/Lextar/Developer/Molehill/Molehill/Features/You/YouView.swift:142>).
- **L3:** [Granularity step counts](</Volumes/Lextar/Developer/Molehill/Shared/AI/FoundationModelsEngine.swift:15>); [Streaming plans](</Volumes/Lextar/Developer/Molehill/Shared/AI/FoundationModelsEngine.swift:124>); [Real engine and fallback](</Volumes/Lextar/Developer/Molehill/Shared/AI/EngineProvider.swift:37>).
- **L4:** [Bounds and repeated-deferral rule](</Volumes/Lextar/Developer/Molehill/Shared/Domain/StepSplit.swift:24>); [Time normalization](</Volumes/Lextar/Developer/Molehill/Shared/Domain/StepSplit.swift:82>).
- **L5:** [Budget fallback and contextual split](</Volumes/Lextar/Developer/Molehill/Molehill/Features/TaskDetail/StepSplitSheet.swift:251>).
- **L6:** [Editable and removable drafts](</Volumes/Lextar/Developer/Molehill/Molehill/Features/BrainDump/BrainDumpReviewList.swift:13>); [AI budget and result](</Volumes/Lextar/Developer/Molehill/Molehill/Features/BrainDump/BrainDumpSheet.swift:197>); [Free parser](</Volumes/Lextar/Developer/Molehill/Molehill/Features/BrainDump/BrainDumpSheet.swift:241>).
- **L7:** [Focus lifecycle](</Volumes/Lextar/Developer/Molehill/Molehill/Features/Focus/FocusSession.swift:51>); [Current-step split](</Volumes/Lextar/Developer/Molehill/Molehill/Features/Focus/FocusSession.swift:120>); [End-date timer](</Volumes/Lextar/Developer/Molehill/Molehill/Features/Focus/FocusSession.swift:167>).
- **L8:** [Recurrence menu](</Volumes/Lextar/Developer/Molehill/Molehill/Features/TaskDetail/TaskDetailView.swift:475>); [Recurring successors](</Volumes/Lextar/Developer/Molehill/Shared/Data/TaskStore.swift:95>); [Text/URL share capture](</Volumes/Lextar/Developer/Molehill/MolehillShare/ShareViewController.swift:40>).
- **L9:** [Title/note indexing](</Volumes/Lextar/Developer/Molehill/Molehill/Services/SpotlightIndexer.swift:35>); [Widget and Spotlight publisher](</Volumes/Lextar/Developer/Molehill/Molehill/Services/SpotlightIndexer.swift:62>).
- **L10:** [Reminders permission and writing](</Volumes/Lextar/Developer/Molehill/Molehill/Services/ExportService.swift:25>); [Calendar write-only export](</Volumes/Lextar/Developer/Molehill/Molehill/Services/ExportService.swift:62>); [Pro export gate](</Volumes/Lextar/Developer/Molehill/Molehill/Features/TaskDetail/TaskExportFlow.swift:141>).
- **L11:** [Blocking AI gate](</Volumes/Lextar/Developer/Molehill/Molehill/App/RootView.swift:20>); [Actual model availability](</Volumes/Lextar/Developer/Molehill/Molehill/App/AppleIntelligenceGate.swift:38>); [Local persistence](</Volumes/Lextar/Developer/Molehill/Shared/Data/ModelContainerFactory.swift:14>); [App-group-only entitlement](</Volumes/Lextar/Developer/Molehill/Config/Molehill.entitlements:5>).
- **L12:** [Local lifetime price](</Volumes/Lextar/Developer/Molehill/Config/Molehill.storekit:8>); [Local monthly price](</Volumes/Lextar/Developer/Molehill/Config/Molehill.storekit:41>); [Local yearly price](</Volumes/Lextar/Developer/Molehill/Config/Molehill.storekit:66>); [Live StoreKit products](</Volumes/Lextar/Developer/Molehill/Shared/Monetization/EntitlementStore.swift:73>).
- **L13:** [Voice availability and permission](</Volumes/Lextar/Developer/Molehill/Molehill/Services/VoiceCaptureController.swift:53>); [Locale and local transcriber](</Volumes/Lextar/Developer/Molehill/Molehill/Services/VoiceCaptureController.swift:133>); [Speech asset installation](</Volumes/Lextar/Developer/Molehill/Molehill/Services/VoiceCaptureController.swift:164>).
- **L14:** [Three-action daily allowance](</Volumes/Lextar/Developer/Molehill/Shared/Monetization/AIBudget.swift:8>); [Breakdown budget gate](</Volumes/Lextar/Developer/Molehill/Molehill/Features/TaskDetail/BreakdownSheet.swift:399>); [No fallback charge](</Volumes/Lextar/Developer/Molehill/Molehill/Features/TaskDetail/BreakdownSheet.swift:481>).
- **L15:** [Paid theme gate](</Volumes/Lextar/Developer/Molehill/Molehill/Services/ThemeStore.swift:27>).
- **L16:** [Local event logging contract](</Volumes/Lextar/Developer/Molehill/Shared/Telemetry/MolehillEvents.swift:4>); [Privacy declarations](</Volumes/Lextar/Developer/Molehill/Config/MolehillPrivacy.xcprivacy:5>).
- **L17:** [Mock engine for tests](</Volumes/Lextar/Developer/Molehill/Shared/AI/EngineProvider.swift:30>); [UI-test storefront and Pro override](</Volumes/Lextar/Developer/Molehill/Shared/Monetization/EntitlementStore.swift:35>).
- **C1:** [iOS 26](</Volumes/Lextar/Developer/Cove/project.yml:4>); [iPhone/iPad target](</Volumes/Lextar/Developer/Cove/project.yml:88>); [Watch packaging and watchOS 26](</Volumes/Lextar/Developer/Cove/project.yml:131>); [Generated Watch deployment](</Volumes/Lextar/Developer/Cove/Cove.xcodeproj/project.pbxproj:1163>).
- **C2:** [Cloud-backed schema](</Volumes/Lextar/Developer/Cove/Shared/Data/CoveStore.swift:20>); [Production CloudKit request](</Volumes/Lextar/Developer/Cove/Shared/Data/CoveStore.swift:59>); [Local/memory fallback](</Volumes/Lextar/Developer/Cove/Shared/Data/CoveStore.swift:87>).
- **C3:** [Privacy controls and sync readout](</Volumes/Lextar/Developer/Cove/Cove/Features/Settings/SettingsView.swift:182>); [Defaults and no sync toggle](</Volumes/Lextar/Developer/Cove/Cove/Services/AppSettings.swift:48>).
- **C4:** [Cloud-backed attachment model](</Volumes/Lextar/Developer/Cove/Shared/Models/EntryAttachment.swift:9>); [CloudKit entitlement](</Volumes/Lextar/Developer/Cove/Config/Cove.entitlements:9>).
- **C5:** [Save eligibility](</Volumes/Lextar/Developer/Cove/Cove/Features/Entry/EntryEditorView.swift:558>); [Photo/audio attachments](</Volumes/Lextar/Developer/Cove/Cove/Features/Entry/EntryEditorView.swift:622>); [Dictation memo retained](</Volumes/Lextar/Developer/Cove/Cove/Features/Entry/EntryEditorView.swift:670>); [Ungated save and analysis](</Volumes/Lextar/Developer/Cove/Cove/Features/Entry/EntryEditorView.swift:715>); [Speech-model installation](</Volumes/Lextar/Developer/Cove/Cove/Services/DictationController.swift:140>); [Temporary audio recording](</Volumes/Lextar/Developer/Cove/Cove/Services/DictationController.swift:208>).
- **C6:** [Input cap and local generation](</Volumes/Lextar/Developer/Cove/Cove/Engine/FoundationModelsEngine.swift:20>); [Follow-up questions](</Volumes/Lextar/Developer/Cove/Cove/Engine/FoundationModelsEngine.swift:139>); [Automatic analysis toggle](</Volumes/Lextar/Developer/Cove/Cove/Services/ReflectionService.swift:79>); [Heuristic fallback](</Volumes/Lextar/Developer/Cove/Cove/Services/ReflectionService.swift:104>).
- **C7:** [Embedding language choice](</Volumes/Lextar/Developer/Cove/Cove/Services/SemanticSearchService.swift:21>); [Semantic ranking](</Volumes/Lextar/Developer/Cove/Cove/Services/SemanticSearchService.swift:51>); [500-character embedding basis](</Volumes/Lextar/Developer/Cove/Cove/Services/SemanticSearchService.swift:153>).
- **C8:** [Three turns per credit](</Volumes/Lextar/Developer/Cove/Cove/Features/Insights/AskJournalView.swift:55>); [Source-entry links](</Volumes/Lextar/Developer/Cove/Cove/Features/Insights/AskJournalView.swift:279>); [Free conversation gating](</Volumes/Lextar/Developer/Cove/Cove/Features/Insights/AskJournalView.swift:410>); [Credit consumption](</Volumes/Lextar/Developer/Cove/Cove/Features/Insights/AskJournalView.swift:476>); [Retrieval and context limits](</Volumes/Lextar/Developer/Cove/Cove/Features/Insights/AskJournalView.swift:491>).
- **C9:** [Eligibility and attempt frequency](</Volumes/Lextar/Developer/Cove/Cove/Services/WeeklyReflectionCoordinator.swift:27>); [Two-entry threshold and persistence](</Volumes/Lextar/Developer/Cove/Cove/Services/WeeklyReflectionCoordinator.swift:83>); [Foreground lifecycle](</Volumes/Lextar/Developer/Cove/Cove/App/CoveApp.swift:111>).
- **C10:** [Paid feature list](</Volumes/Lextar/Developer/Cove/Cove/Purchases/Entitlements.swift:8>); [14-day free trend window](</Volumes/Lextar/Developer/Cove/Cove/Purchases/Entitlements.swift:54>); [Weekly credit](</Volumes/Lextar/Developer/Cove/Cove/Purchases/Entitlements.swift:74>); [Actual free reflection preview](</Volumes/Lextar/Developer/Cove/Cove/Features/Insights/InsightsView.swift:512>); [Insight display gating](</Volumes/Lextar/Developer/Cove/Cove/Features/Entry/InsightCard.swift:35>).
- **C11:** [Locally computed recap](</Volumes/Lextar/Developer/Cove/Cove/Features/Insights/YearInReviewView.swift:26>); [Aggregate share image](</Volumes/Lextar/Developer/Cove/Cove/Features/Insights/YearInReviewView.swift:101>); [Plus recap gate](</Volumes/Lextar/Developer/Cove/Cove/Features/Insights/InsightsView.swift:156>); [Prompt-pack gate](</Volumes/Lextar/Developer/Cove/Cove/Features/Today/PromptLibraryView.swift:28>).
- **C12:** [Formats and archive bytes](</Volumes/Lextar/Developer/Cove/Cove/Services/JournalExporter.swift:23>); [Entry-based JSON](</Volumes/Lextar/Developer/Cove/Cove/Services/JournalExporter.swift:107>); [Accepted formats](</Volumes/Lextar/Developer/Cove/Cove/Services/JournalImporter.swift:82>); [ID-based import](</Volumes/Lextar/Developer/Cove/Cove/Services/JournalImporter.swift:124>); [Day One subset](</Volumes/Lextar/Developer/Cove/Cove/Services/JournalImporter.swift:279>).
- **C13:** [Watch capture UI](</Volumes/Lextar/Developer/Cove/CoveWatch/CoveWatchApp.swift:34>); [Watch transport and receiver](</Volumes/Lextar/Developer/Cove/Cove/App/WatchCaptureReceiver.swift:35>); [Phone persistence and analysis](</Volumes/Lextar/Developer/Cove/Cove/App/WatchCaptureReceiver.swift:69>).
- **C14:** [Device-owner authentication](</Volumes/Lextar/Developer/Cove/Cove/Services/AppLockService.swift:58>); [Spotlight enabled default](</Volumes/Lextar/Developer/Cove/Cove/Services/JournalIndex.swift:12>); [Indexed summary and themes](</Volumes/Lextar/Developer/Cove/Cove/Services/JournalIndex.swift:40>); [Health permission and writing](</Volumes/Lextar/Developer/Cove/Cove/Services/HealthService.swift:27>); [Mood backfill](</Volumes/Lextar/Developer/Cove/Cove/Services/HealthService.swift:87>).
- **C15:** [Local lifetime price](</Volumes/Lextar/Developer/Cove/Cove/Resources/Cove.storekit:6>); [Local monthly price](</Volumes/Lextar/Developer/Cove/Cove/Resources/Cove.storekit:35>); [Local yearly price](</Volumes/Lextar/Developer/Cove/Cove/Resources/Cove.storekit:60>); [Live StoreKit products](</Volumes/Lextar/Developer/Cove/Cove/Purchases/StoreManager.swift:57>).
- **C16:** [Root AI gate](</Volumes/Lextar/Developer/Cove/Cove/App/CoveApp.swift:193>); [Runtime eligibility](</Volumes/Lextar/Developer/Cove/Cove/Features/AppleIntelligenceGate.swift:39>).
- **C17:** [Privacy declarations](</Volumes/Lextar/Developer/Cove/Config/CovePrivacy.xcprivacy:5>).
- **C18:** [UI-test/heuristic flags](</Volumes/Lextar/Developer/Cove/Cove/Support/CoveLaunch.swift:6>); [Test preview container](</Volumes/Lextar/Developer/Cove/Cove/App/CoveApp.swift:20>).

[D1]: </Volumes/Lextar/Developer/Obsidian Ridge Labs/BRAND-DOCTRINE.md:274>
[D2]: </Volumes/Lextar/Developer/Obsidian Ridge Labs/BRAND-DOCTRINE.md:377>
[W1]: </Volumes/Lextar/Developer/Obsidian Ridge Labs/data/products.tsx:144>
[W2]: </Volumes/Lextar/Developer/Obsidian Ridge Labs/data/products.tsx:200>
[W3]: </Volumes/Lextar/Developer/Obsidian Ridge Labs/data/products.tsx:353>
[W4]: </Volumes/Lextar/Developer/Obsidian Ridge Labs/components/ProductDetail.tsx:22>
[W5]: </Volumes/Lextar/Developer/Obsidian Ridge Labs/components/ProductDetail.tsx:31>
[W6]: </Volumes/Lextar/Developer/Obsidian Ridge Labs/components/ProductDetail.tsx:58>
[M1]: </Volumes/Lextar/Developer/Memora/project.yml:4>
[M2]: </Volumes/Lextar/Developer/Memora/Memora/Sources/App/AIRequirementView.swift:29>
[M3]: </Volumes/Lextar/Developer/Memora/Memora/Sources/Generation/TextExtraction.swift:9>
[M4]: </Volumes/Lextar/Developer/Memora/Memora/Sources/Features/Generate/GenerateView.swift:80>
[M5]: </Volumes/Lextar/Developer/Memora/Memora/Sources/Features/Generate/GenerateView.swift:825>
[M6]: </Volumes/Lextar/Developer/Memora/Memora/Sources/Features/Decks/CardEditorView.swift:111>
[M7]: </Volumes/Lextar/Developer/Memora/Memora/Sources/Generation/CardGenerationService.swift:15>
[M8]: </Volumes/Lextar/Developer/Memora/Memora/Sources/Generation/FoundationModelCardGenerator.swift:68>
[M9]: </Volumes/Lextar/Developer/Memora/Memora/Sources/SpacedRepetition/Scheduler.swift:9>
[M10]: </Volumes/Lextar/Developer/Memora/Memora/Sources/Features/Decks/DeckDetailView.swift:223>
[M11]: </Volumes/Lextar/Developer/Memora/Memora/Sources/Features/Settings/SettingsView.swift:196>
[M12]: </Volumes/Lextar/Developer/Memora/Memora/Sources/Features/Occlusion/OcclusionEditorView.swift:393>
[M13]: </Volumes/Lextar/Developer/Memora/Memora/Sources/Features/Sharing/AnkiImporter.swift:42>
[M14]: </Volumes/Lextar/Developer/Memora/Memora/Sources/Models/Transfer/DeckTransfer.swift:26>
[M15]: </Volumes/Lextar/Developer/Memora/Memora/Sources/Features/Tutor/TutorView.swift:42>
[M16]: </Volumes/Lextar/Developer/Memora/Memora/Sources/Features/Decks/DecksHomeView.swift:175>
[M17]: </Volumes/Lextar/Developer/Memora/Memora.storekit:16>
[M18]: </Volumes/Lextar/Developer/Memora/Memora/Sources/Models/Persistence.swift:19>
[M19]: </Volumes/Lextar/Developer/Memora/Memora/Sources/App/MemoraEvents.swift:30>
[M20]: </Volumes/Lextar/Developer/Memora/Memora/Sources/Store/Entitlements.swift:6>
[M21]: </Volumes/Lextar/Developer/Memora/Memora/Sources/App/MemoraApp.swift:15>
[L1]: </Volumes/Lextar/Developer/Molehill/project.yml:4>
[L2]: </Volumes/Lextar/Developer/Molehill/Molehill/Features/Today/TodayView.swift:196>
[L3]: </Volumes/Lextar/Developer/Molehill/Shared/AI/FoundationModelsEngine.swift:15>
[L4]: </Volumes/Lextar/Developer/Molehill/Shared/Domain/StepSplit.swift:24>
[L5]: </Volumes/Lextar/Developer/Molehill/Molehill/Features/TaskDetail/StepSplitSheet.swift:251>
[L6]: </Volumes/Lextar/Developer/Molehill/Molehill/Features/BrainDump/BrainDumpReviewList.swift:13>
[L7]: </Volumes/Lextar/Developer/Molehill/Molehill/Features/Focus/FocusSession.swift:51>
[L8]: </Volumes/Lextar/Developer/Molehill/Molehill/Features/TaskDetail/TaskDetailView.swift:475>
[L9]: </Volumes/Lextar/Developer/Molehill/Molehill/Services/SpotlightIndexer.swift:35>
[L10]: </Volumes/Lextar/Developer/Molehill/Molehill/Services/ExportService.swift:25>
[L11]: </Volumes/Lextar/Developer/Molehill/Molehill/App/RootView.swift:20>
[L12]: </Volumes/Lextar/Developer/Molehill/Config/Molehill.storekit:8>
[L13]: </Volumes/Lextar/Developer/Molehill/Molehill/Services/VoiceCaptureController.swift:53>
[L14]: </Volumes/Lextar/Developer/Molehill/Shared/Monetization/AIBudget.swift:8>
[L15]: </Volumes/Lextar/Developer/Molehill/Molehill/Services/ThemeStore.swift:27>
[L16]: </Volumes/Lextar/Developer/Molehill/Shared/Telemetry/MolehillEvents.swift:4>
[L17]: </Volumes/Lextar/Developer/Molehill/Shared/AI/EngineProvider.swift:30>
[C1]: </Volumes/Lextar/Developer/Cove/project.yml:4>
[C2]: </Volumes/Lextar/Developer/Cove/Shared/Data/CoveStore.swift:20>
[C3]: </Volumes/Lextar/Developer/Cove/Cove/Features/Settings/SettingsView.swift:182>
[C4]: </Volumes/Lextar/Developer/Cove/Shared/Models/EntryAttachment.swift:9>
[C5]: </Volumes/Lextar/Developer/Cove/Cove/Features/Entry/EntryEditorView.swift:558>
[C6]: </Volumes/Lextar/Developer/Cove/Cove/Engine/FoundationModelsEngine.swift:20>
[C7]: </Volumes/Lextar/Developer/Cove/Cove/Services/SemanticSearchService.swift:21>
[C8]: </Volumes/Lextar/Developer/Cove/Cove/Features/Insights/AskJournalView.swift:55>
[C9]: </Volumes/Lextar/Developer/Cove/Cove/Services/WeeklyReflectionCoordinator.swift:27>
[C10]: </Volumes/Lextar/Developer/Cove/Cove/Purchases/Entitlements.swift:8>
[C11]: </Volumes/Lextar/Developer/Cove/Cove/Features/Insights/YearInReviewView.swift:26>
[C12]: </Volumes/Lextar/Developer/Cove/Cove/Services/JournalExporter.swift:23>
[C13]: </Volumes/Lextar/Developer/Cove/CoveWatch/CoveWatchApp.swift:34>
[C14]: </Volumes/Lextar/Developer/Cove/Cove/Services/AppLockService.swift:58>
[C15]: </Volumes/Lextar/Developer/Cove/Cove/Resources/Cove.storekit:6>
[C16]: </Volumes/Lextar/Developer/Cove/Cove/App/CoveApp.swift:193>
[C17]: </Volumes/Lextar/Developer/Cove/Config/CovePrivacy.xcprivacy:5>
[C18]: </Volumes/Lextar/Developer/Cove/Cove/Support/CoveLaunch.swift:6>
