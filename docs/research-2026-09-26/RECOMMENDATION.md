# Obsidian Ridge Labs — copy and design proposal

Research date: September 26, 2026. **Approved by the founder.** The Brand Doctrine was updated before website implementation began. The proposal below is retained as the approved decision record; its future-tense approval language describes the research stage.

## Mandatory naming rule

Always use **Echo Chamber** and **Obsidian Ridge Labs** in full on every mention, including wordmarks, navigation, captions, accessibility text, metadata, documentation, and discussion. Adjust the layout to fit the names; never abbreviate them.

## The recommendation

Make the site a place where someone can see these apps earning a place in their life.

The homepage should establish the studio's conviction, introduce the collection, and make the available product easy to find. Each product page should then answer a different question: why would I use this particular app tomorrow? The answer should be visible in a real product demonstration before it asks someone to read another argument about private AI.

Keep the dark palette, the cut, Signal Green, and the doctrine's home headline. Give the three featured apps equally deliberate art direction. Build their pages around their actual workflows. Remove “Move the intelligence. Not the private life.” from rendered pages, including the shared footer. Preserve the Philosophy hero and following threat-model section the founder likes.

The strongest proposition discovered in the source audit is Mettle's: the app can expose the training evidence and progression rule behind a prescribed set. That deserves to be a main demonstration. Memora can turn study material into cards and a review routine. Echo Chamber can turn a conversation into material someone can find and use afterward. These are three different reasons to care, with local processing making each more useful for personal material.

## What the research supports

Public websites reveal their presentation, not their private conversion rates. The five references are useful design observations. The studies below provide a separate evidence base; none establishes a guaranteed conversion lift for this site.

| Evidence | Finding and limit | Decision for this site |
| --- | --- | --- |
| [Nielsen Norman Group, writing study](https://www.nngroup.com/articles/concise-scannable-and-objective-how-to-write-for-the-web/), 1997 | Concise, scannable, factual writing improved measured usability in the study. Its often-repeated 124% result is a usability score, not a sales-conversion result. The age and task setting limit direct transfer. | Remove inflated language and make the main argument legible in the headings alone. Keep enough detail to answer the purchase decision. |
| [NN/G, heading-scan research](https://www.nngroup.com/articles/layer-cake-pattern-scanning/), 2019 synthesis | Descriptive, visually distinct headings help people locate relevant information. A heading must actually summarize its section. | Replace repeated “How does it work?” and “What is taking shape?” with a specific benefit or useful question. |
| [Unbounce SaaS report](https://unbounce.com/conversion-benchmark-report/saas-conversion-rate/) and [methodology](https://unbounce.com/conversion-benchmark-report/methodology/), 2023–24 data | Easier copy was associated with higher conversion. This is observational vendor data with different conversion types; pages with no conversions were excluded. It cannot supply our target rate or prove readability caused the difference. | Prefer familiar words and direct sentences. Treat conversion improvement as a hypothesis to measure, not a promised percentage. |
| [Tuch et al., visual complexity research](https://research.google/pubs/the-role-of-visual-complexity-and-prototypicality-regarding-first-impression-of-websites-working-towards-understanding-aesthetic-judgments/), 2012 | Lower complexity and familiar website structure produced stronger first-impression aesthetic ratings. These were screenshot judgments, not installation results. | Put distinctive art inside an immediately understandable page. Keep navigation, product identity, and the next action obvious. |
| [Vodafone performance experiment](https://web.dev/case-studies/vodafone), 2021 | An A/B test of visually/functionally identical pages connected a 31% LCP improvement to 8% more sales in that setting. It does not predict our uplift. | Protect the first screen and interaction speed when adding motion. |
| [Apple product page optimization](https://developer.apple.com/app-store/product-page-optimization/) | Apple supports randomized tests of screenshots, previews, and icons, with results in App Analytics. | Website clicks and app installations are different events. Test the product presentation through the complete journey when there is enough traffic. |

The design hypothesis is straightforward: a visitor who understands the app, recognizes a useful task, sees credible evidence, and can find the price and requirements has more reason to take the next step. We should measure that hypothesis on this audience.

## What to learn from the five references

All five were inspected live in the browser as well as through their public page text. They have evolved; Family and Chronicle currently use light presentations, and Nothing's current storefront is more campaign-driven than a single dark technical style.

| Reference | Useful observation | Translation to Obsidian Ridge Labs |
| --- | --- | --- |
| [Raycast](https://www.raycast.com/) | A broad promise is followed by a concrete launcher description and substantial interface demonstrations. The product has visual weight, and download intent remains clear. | Show screens large enough to understand. Connect every polished scene to a named task. Its testimonials and performance claims cannot be borrowed. |
| [Family](https://family.co/) | Its playful opening names the product category. Deeper sections pair a particular action with the screen performing it. Security is part of an approachable product story. | Make private software desirable to use. Use tactile surfaces and friendly clarity without copying its mascots or treating crypto custody as evidence for our architecture. |
| [Chronicle](https://chroniclehq.com/) | The current hero shows the resulting work. The wider story connects source material, editing, and finished presentations. | Show what comes out of Echo Chamber and Memora early. Motion can connect input and result so the visitor understands the transformation. |
| [Linear](https://linear.app/) | Quiet surfaces, readable product detail, disciplined hierarchy, and workflow-specific content carry the engineering impression. | Use a consistent grid and restrained lighting. Let Mettle's actual rationale and history provide the technical detail. |
| [Nothing](https://nothing.tech/products/ear-3a) | Product materials, distinct type accents, and concise specifications give hardware a recognizable identity. | Create a coherent material language around the apps. Reserve technical type for small labels and evidence; keep headlines easy to read. |

These references support a shared principle: atmosphere is strongest when it helps a visitor recognize and want the product. Combining every site's most conspicuous effect would weaken that coherence.

## Why the current version still misses

- **The art does not consistently explain the app.** Memora has a developed glass scene; Mettle has a grid. Echo Chamber has a decorative waveform and an unhelpful default screen. The different levels of finish read as uneven attention.
- **The same argument occupies too many sections.** General privacy claims recur where a visitor needs to learn about reviewing cards, changing a workout, or using a transcript.
- **The product template dictates the story.** The repeated generic headings and closing section make different apps feel interchangeable.
- **Text is being made to fit a preset shape.** Large display type, narrow columns, manual line breaks, and balancing rules interact. At a 390px viewport, Echo Chamber's pricing heading and closing heading occupy four lines; its hero splits the phrase “No second audience” across two lines. At 1024px the pricing heading is still three lines. No horizontal overflow is required for this to look awkward.
- **The accuracy problem extends beyond the landing pages.** Product data feeds FAQs and structured information; help articles and comparisons repeat some outdated claims. A new hero over inconsistent supporting pages would still undermine confidence.

Implementation references: [home copy and artwork](</Volumes/Lextar/Developer/Obsidian Ridge Labs/components/luminous/LuminousHome.tsx>), [home typography](</Volumes/Lextar/Developer/Obsidian Ridge Labs/styles/luminous-home.css>), [shared product layout](</Volumes/Lextar/Developer/Obsidian Ridge Labs/components/ProductDetail.tsx>), [Echo Chamber page](</Volumes/Lextar/Developer/Obsidian Ridge Labs/components/EchoDetail.tsx>), [footer](</Volumes/Lextar/Developer/Obsidian Ridge Labs/components/Footer.tsx>).

## Apply the doctrine with a different division of work

The doctrine's strongest idea is that private context can make software more useful. The product source gives us ways to demonstrate that idea: training history that affects the next load, notes that become a review queue, and details that help someone start a conversation with a friend.

The proposed editorial rules are:

1. **The homepage states the belief.** Keep the locked H1, the studio identity, and one concise explanation of The Trade.
2. **The product page demonstrates the belief through its own job.** Name the app category, show its distinctive value, and state local processing accurately within the opening screen. It should make sense to someone arriving directly from search.
3. **The Philosophy page develops the worldview.** Preserve its hero and following threat-model section. Remove the duplicated closing slogan there too.
4. **The boundary is concrete.** Processing, storage, connections. iCloud defaults and connected services belong here; “nothing ever leaves” cannot stand in for that information.
5. **Each section earns its space with new information.** Category, outcome, mechanism, proof, objection, or action. A second poetic restatement of the same claim is cut.
6. **Headings can state a benefit.** Questions remain useful for real questions and FAQs. They should not be mandatory for every H2.

After approval, update §2's locked language entry and §§7, 9, and 10 so they no longer require the retired slogan on public pages. Adjust the all-H2-as-questions rule in §11. Amend §§3 and 12 so a product page earns the first-screen lens by explaining a specific benefit from personal context and its actual processing boundary, rather than repeating the homepage's worldview formula. Preserve the locked homepage H1. The latest founder instruction governs the slogan removal; these further editorial changes are explicitly part of the approval proposal. The mandatory full-name rule has been recorded in the doctrine; the broader editorial amendments above remain part of this proposal.

One additional change needs explicit inclusion in approval: the locked threshold currently puts reading the boundary before installation. I recommend showing a short, accurate boundary beside the conversion area and linking the full explanation, while allowing a direct App Store action. That preserves informed choice without making a manifesto detour the primary action. It changes the ritual's interface, so it should be recorded deliberately in §2 rather than silently ignored.

## Proposed visual direction

**A dark product studio with real software at its center.** Keep the current direction's obsidian base, fine dividers, white type, measured spacing, and Signal Green. The improvement should be visible in composition, content, and coherence.

Every featured app gets the same level of finish: comparable artwork area, lighting quality, screen legibility, and deliberate crops. Their subjects differ:

- **Echo Chamber:** smoke-grey glass, a restrained recording-red detail, and a front-facing real transcript. A short recording is the source of a transcript, a selected passage, and a useful note. Remove the existing decorative waveform and replace the current hero image/composite. A visitor can choose which real screen to inspect. Any playback demonstration is user-started and silent by default.
- **Mettle:** graphite and brushed-metal forms behind a readable session screen. The central detail is the actual “Why this?” disclosure alongside the logged sets that informed it. Give Mettle a finished background scene comparable to Memora's. Avoid fictional muscle-load HUDs, animated coordinates, and performance numbers.
- **Memora:** paper-like cards and violet-tinted glass behind a real review screen. The sequence is material → selected drafts → a review card. Replace generic archive imagery and move beyond using only the dashboard. A reference to the selected source belongs in the website explanation; the app must not be depicted with an editor it does not have.

Use original art only as a setting for the actual interface. Product screenshots and demonstrations come from the app. Use deliberately prepared example content, labelled as a demonstration, with no customer records or manufactured testimonial. An illustrative animation must not masquerade as measured processing speed.

### Layout and motion

- Replace the cramped paired Mettle/Memora cards with two generous product sections. Each gets a short headline, one explanatory paragraph, a large scene, and a direct product link. The composition may alternate, but text begins at the top in both orientations.
- Bring meaningful product content into the opening composition. Reduce the gap between the hero action and the interface instead of increasing the headline again.
- Use a shared desktop grid with minimum useful copy widths. Move a title above both columns when the sentence cannot fit comfortably beside the image. Stack earlier on narrower screens.
- Aim for one or two lines for desktop section headings and usually two or three on mobile. This is an editorial target, not a clipping rule: rewrite or reflow when necessary. Test 320, 390, 768, 1024, 1280, and 1440px, including enlarged text. Remove forced breaks except where individually validated.
- Motion should reveal a relationship: a recording becomes searchable text; a logged set informs a prescription; a selected card returns for review. Use brief depth changes, purposeful highlights, and restrained surface movement. Keep copy stable while it is being read.
- Keep free vertical navigation. Do not require a long pinned horizontal sequence to discover the apps. Reduced-motion and mobile versions retain the entire story and every action.
- Load the first meaningful image promptly, lazy-load later scenes, stop offscreen animation, and keep essential content available if animation fails. Build against Core Web Vitals targets and verify measured results rather than promising a score in advance.

Two alternatives considered were a mostly photographic editorial site and a continuous technical/WebGL environment. Photography would make the current product benefits less visible; the technical environment would make ten distinct tools feel like one abstract AI concept. The recommended direction better combines the user's references with the source-verified products.

## Homepage: proposed reading order and draft copy

This is approval-stage writing. It establishes the tone and argument; final line breaks follow the final layouts.

**Opening**

> AI that knows you. Not one that watches you.
>
> Transcription, strength coaching, and flashcards for Apple devices. Intelligence that works with your personal context, on your hardware.

Primary action: **Explore Echo Chamber**. Secondary action: **Explore all apps**, linked directly to the complete collection. Display Echo Chamber's availability and Mettle/Memora's development status beside their names.

**Echo Chamber preview**

> Come back to the conversation.
>
> Find the passage you need. Turn the transcript into notes. Echo Chamber keeps the conversation useful after it ends, with processing on your device.

Show the useful result first, then let someone inspect its connection to the recording. Link: **Explore Echo Chamber**.

**Mettle preview**

> Your next set has a reason.
>
> Mettle uses your logged training to prescribe what comes next. Open “Why this?” to see the progression rule and the training evidence behind it.

Show the prescription and its evidence. Link: **Explore Mettle**. Label: **In development**.

**Memora preview**

> Put your notes to work.
>
> Turn notes, photos, and PDFs with selectable text into draft flashcards. Choose what to add. Memora schedules the reviews from there.

Show one piece of material becoming usable study cards. Link: **Explore Memora**. Label: **In development**. Format and input-length limits belong in the detailed product explanation.

**One studio argument, with inspectable facts**

> Your life gives software its context.
>
> The details are what make it useful: the set you struggled with, the passage you need to learn, the words you want to return to. We build the intelligence to work on your device. Each app tells you what it stores and what it connects to.

Follow with a compact Boundary Check and a link to the Standard, where The Trade gets its fuller argument. The homepage need not repeat both a hardware sermon and an equivalent closing sermon.

**Collection and close**

Use a crawlable collection with one concrete job and an honest availability label per app. Close by helping the visitor choose a tool; use a quiet studio footer with useful links. No repeated oversized slogan. Keep the Airplane-Mode Test as a concise, app-qualified proof invitation where the chosen build supports it.

## Three flagship pages that sell three different apps

### Echo Chamber

Category: private transcription. Audience situation: someone needs to participate in a conversation and use its details afterward.

Draft hero:

> Leave with more than a recording.
>
> Record the conversation. Find the part you need. Turn the transcript into notes you can use, with speech and AI processing on your device.

Opening actions: **Get Echo Chamber** and **See the workflow**. Requirements and free/paid offer must match the advertised release. Give Mac its own verified platform treatment rather than implying every iPhone capability and Mac capability is identical.

Page sequence:

1. **Find the part you came back for.** Search, bookmarks, and playback connected to the transcript.
2. **Make something useful from what was said.** A real transcript becomes a readable note or answer. Show the source beside the website explanation, without inventing app UI.
3. **Take the words into your next piece of work.** Explain verified import/export formats with a useful example.
4. **Your device does the processing.** A compact model/setup/processing/storage/connection explanation. Keep transcription accuracy and editing expectations concrete; remove unsupported benchmark figures.
5. **Choose your plan.** A readable feature/limit comparison, compatibility, focused FAQ, and a direct download action. The close returns to the recording someone wants to make, without another studio manifesto.

Release issue: the [public App Store listing](https://apps.apple.com/us/app/echo-chamber-ai-transcription/id6761675060) shows v1.3, while the audited iOS source is configured as v1.4 and has different quotas and model choices. Neither an old website paragraph nor the newest checkout alone settles the current commercial offer. Reconcile that mapping before publishing exact allowance/model claims. The main benefit above does not depend on choosing one quota policy.

### Mettle

Category: strength training. Audience situation: someone has training history and wants the next session to make sense.

Draft hero:

> Your last workout should shape your next.
>
> Log your sets. Mettle uses your training history to prescribe what comes next and explain why. Ask the coach to shorten a session, swap an exercise, or change your training days.

Add a concise opening fact: **Coaching runs on your iPhone.** Label the current build as in development. Primary action: **See a workout**; secondary: **Check requirements**. A preview should not imply a download is available.

Page sequence:

1. **See why that weight is next.** Make the implemented rationale the first demonstration. The calculation stores its own rule and training evidence; this is more specific than a generic AI explanation.
2. **Change the plan when the day changes.** Show a shorter session or exercise substitution proposed in the coach, with the actual review/apply interaction. Do not imply every internal memory write requires approval.
3. **Keep your attention on the session.** Demonstrate the supported phone/Watch controls and spoken cues. Qualify rep detection by supported movements and tested behavior.
4. **Bring the training you've already done.** Show the CSV review/import and export path, without claiming universal compatibility with another app's format.
5. **What you can use free.** Explain the actual free program/coaching scope and Pro additions. Finish with requirements, private-iCloud default, the remaining connections, and development status.

The rule/evidence path is directly traceable through [WorkoutFactory](</Volumes/Lextar/Developer/Mettle/Mettle/Features/Workout/WorkoutFactory.swift:79>), [ProgressionEngine](</Volumes/Lextar/Developer/Mettle/Mettle/Engine/ProgressionEngine.swift:297>), and [the disclosure view](</Volumes/Lextar/Developer/Mettle/Mettle/Features/Workout/LiveWorkoutView.swift:1076>).

### Memora

Category: flashcards and spaced review. Audience situation: someone has useful material but still has to turn it into something they can practise.

Draft hero:

> You gathered the material. Now learn it.
>
> Turn notes, photos, and PDFs with selectable text into draft flashcards on your iPhone. Choose the cards to add, then study with a schedule that responds to your recall.

Label: **In development**. Primary action: **See a study session**; secondary: **Check requirements**.

Page sequence:

1. **Start with the material you have.** Demonstrate the actual notes/photo/text-PDF input paths and the bounded generation scope. Avoid suggesting whole-book comprehension.
2. **Choose the cards worth keeping.** Show selection before batch addition. Explain that saved cards can be edited afterward. Do not show a fictitious draft editor or source-pane UI.
3. **Know what to review next.** Explain FSRS through a real card, recall rating, and next interval. No retention guarantee or invented exam improvement.
4. **Give the material another kind of practice.** Show the actual Match, Listen, diagram, Test, and Tutor options; mark paid features in place.
5. **Bring a deck. Keep a copy.** State supported import/export formats and their limitations plainly. Finish with the free allowance, Plus options, device requirements, local storage, and development status.

Memora should look like a study tool. Its name is not evidence that it is an encrypted life archive; that earlier direction should be retired.

## Every other app gets its own argument

The shared components should supply typography, navigation, accessible interaction, specification blocks, and consistent spacing. Their section order and demonstrations should be composed for the individual product.

| App | Draft lead | Page's distinctive sales argument and visual sequence |
| --- | --- | --- |
| Vault | **See what a purchase changes.** | A contemplated purchase against existing obligations; reviewed receipt/statement entry; cash-flow assumptions; local and connected-bank choices; portable records. Clearly separate Plaid/enrichment/relay/diagnostics from local calculations. No financial outcome guarantee. |
| Molehill | **Still too big? Make it smaller.** | A stuck step becomes smaller actions; brain dump becomes an editable list; one-step focus; recurrence and Pro Reminders/Calendar export. A deterministic splitter keeps the escape hatch available when the AI allowance is exhausted. Remove the false no-streak claim. |
| Cove | **There is more in your journal than you remember.** | A question leads back to relevant entries; their original words remain accessible; capture modes, weekly reflection, and portable archive follow. Explain actual CloudKit behavior. No therapy or perfect-memory claim. |
| Kith | **Make the next hello easier.** | A remembered detail becomes a talking point, then a draft or call, then a log when the person returns. Show the human purpose before cadence controls. The person sends the message; the app does not autonomously maintain a friendship. |
| Mise | **Make dinner from the recipes you saved.** | Bring in a recipe; put dinners on the plan; consolidate ingredients into a shop; follow readable steps and timers. Distinguish deterministic dinner suggestions from AI assistance and avoid invented voice controls. |
| Trove | **Have the record when you need it.** | Capture an item and receipt; find its details later; create the appropriate report; take a photo-inclusive archive away. Separate free backup/restore from paid reports. No promise of claim acceptance or complete photo sync. |
| Wove | **Find your next outfit in your own closet.** | Build a closet, state what today calls for, see owned-garment combinations, reject what does not fit, and examine a possible purchase against existing clothes. Qualify Plus personalization. Do not present generic packing as a selection of owned garments. |

These draft leads require a category label and a specific supporting sentence. They are not intended to carry the whole sale alone. All seven retain development status pending release evidence. Preview actions describe what is actually available to inspect. Do not add a fake waitlist or imply a launch date.

## Product truth must change alongside the copy

The audit found both overlooked value and overclaims. The complete ledgers give exact source paths, gates, and qualifications:

- [Echo Chamber, Mettle, Vault](</Volumes/Lextar/Developer/Obsidian Ridge Labs/docs/research-2026-09-26/products-echo-mettle-vault.md>)
- [Memora, Molehill, Cove](</Volumes/Lextar/Developer/Obsidian Ridge Labs/docs/research-2026-09-26/products-memora-molehill-cove.md>)
- [Kith, Mise, Trove, Wove](</Volumes/Lextar/Developer/Obsidian Ridge Labs/docs/research-2026-09-26/products-kith-mise-trove-wove.md>)

The important publication changes include:

- Resolve Echo Chamber's released-versus-development quotas, models, platform-specific features, recording limits, and unsupported accuracy number.
- Correct Memora's review/editing, input, and portability claims. Its content backup does not preserve review scheduling/history.
- Remove Molehill's no-streak assertion wherever repeated.
- Describe Mettle and Cove's actual private-iCloud defaults, rather than inventing an opt-in switch.
- Correct stale OS requirements, including Mise and Vault.
- Remove Wove's garment-specific packing and universal validation promises; distinguish free rejection feedback from paid wear learning.
- Distinguish Trove's record sync from unverified image transfer; distinguish archive export from reports.
- State both automatic and optional connections where they matter, including Vault's connected banking/enrichment path and Mise's recipe-image fetch. Echo Chamber's audited newer build automatically requests trusted time for quotas; map that connection to the advertised release rather than classifying it as optional.

For every public factual claim, maintain a compact internal record: app, supported claim, source path, release/build, platform, entitlement, caveat, and verification status. A source path is evidence of implementation; it does not certify a shipped binary or real-device behavior. Unsupported high-risk specifics are omitted until confirmed, while the supported product story can proceed.

## Implementation after approval

1. **Set the factual baseline and editorial rules.** Record the approved doctrine adjustments. Reconcile Echo Chamber's advertised release; retain honest development labels elsewhere. Consolidate product facts so page copy, pricing, requirements, and schema cannot silently diverge.
2. **Rewrite the complete sales structure.** Home, collection, ten product pages, and their actions receive deliberate copy. Keep Philosophy's protected opening. Update affected footer, navigation labels, metadata, FAQ answers, help content, comparisons, and machine-readable summaries where they repeat corrected claims. Unrelated journal articles do not need an unsolicited aesthetic rewrite.
3. **Build the three real product demonstrations and balanced art system.** Replace Echo Chamber's image/waveform; give Mettle and Memora equivalent visual attention. Prepare truthful demo content and capture reachable UI. Assemble the remaining app pages around their individual tasks.
4. **Apply typography and motion together.** Reflow the wide/narrow columns, top-align copy, review actual line endings at the target sizes, and implement restrained scene transitions with complete reduced-motion and keyboard support.
5. **Verify the whole path.** Check direct URLs, reloads, collection links, App Store links, screenshots, mobile wrapping, zoom, focus order, contrast, motion preferences, browser errors, structured data, and appropriate build/type/SEO checks. Verify claim-critical app behavior against a known build where possible; do not claim a hardware test that has not run.
6. **Review a complete local preview.** Delivery is a cohesive site with an explicit list of unresolved release facts, if any. Deployment, App Store edits, new tracking, and a new mailing-list system are separate actions, not silently included in this proposal.

Measurement recommendation: prioritize qualified Echo Chamber installs while other apps are in development, with collection discovery and meaningful product-demo use as secondary signals. Existing `index.html` includes Google Tag Manager; its remote configuration and event quality have not been audited. Review that setup before adding instrumentation. Never count a click to the store as a completed installation. When traffic is insufficient for a useful controlled test, use structured comprehension/task testing and report the limits rather than declaring a winner from a few visits.

## Approval requested

Approve this product-focused copy and design direction: distinct stories for all ten apps; equal visual care for the featured trio; replacement of Echo Chamber's current artwork and decorative waveform; corrected factual claims; readable responsive typography; purposeful motion; removal of the duplicated slogan throughout rendered pages; and the explicit doctrine adjustments described above, including direct conversion actions beside a concise boundary disclosure.

This approval authorizes implementation in the local website. It does not authorize changing the apps' features, publishing a release, deploying the site, or choosing a new commercial policy where source and storefront disagree.
