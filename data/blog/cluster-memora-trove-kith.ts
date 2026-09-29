import type { BlogPost } from '../../types';

export const memoraTroveKithPosts: BlogPost[] = [
  {
    id: 'memora-vs-anki-quizlet-remnote-knowt',
    title: "Memora vs Anki, Quizlet, RemNote, and Knowt",
    seoTitle: "Memora vs Anki, Quizlet, RemNote, and Knowt",
    date: '2026.07.11',
    modified: "2026.09.28",
    readTime: "7 MIN READ",
    category: 'FLASHCARD APP COMPARISON',
    tags: ['#AI-FLASHCARDS', '#FSRS', '#PRIVATE-STUDY', '#PDF-TO-FLASHCARDS'],
    excerpt: "Memora turns your own material into a local review routine. Compare card creation, scheduling, shared sets, and connected notes before choosing a study app.",
    seoDescription: "Memora turns your own material into a local review routine. Compare card creation, scheduling, shared sets, and connected notes before choosing a study app.",
    contentType: 'comparison',
    appId: 'memora',
    searchIntent: 'Which is better for turning my notes or PDFs into flashcards: Memora, Anki, Quizlet, RemNote, or Knowt?',
    keyTakeaways: [
      "Memora makes cards locally from your own material, lets you select the drafts to keep, and puts saved cards into an FSRS review schedule.",
      "Choose Anki for deep customization, Quizlet for shared sets, RemNote for linked notes and PDFs, or Knowt for a broader mix of study sources.",
      "Check the input and export limits: Memora needs selectable PDF text, and its deck exports do not preserve the review history or schedule."
    ],
    relatedIds: ['best-ai-flashcard-apps-pdf-notes-privacy', 'apple-ecosystem-privacy', 'offline-ai-revolution'],
    blocks: [
      {
        type: 'answer',
        title: "Choose the route from your material to regular review",
        content: "Memora is being built for a focused iPhone routine: bring in notes, a photo, or a PDF with selectable text; review the proposed cards; add the ones you want; and return when FSRS schedules the next review. Anki offers extensive control, Quizlet shared sets and study activities, RemNote connected notes and cards, and Knowt broader source support. Memora’s appeal is keeping creation and study together on the phone without uploading the source for generation. It is still in development.",
      },
      {
        "type": "callout",
        "title": "Memora is in development",
        "content": "Memora is not available yet. Its description reflects the development build; competitor features and US prices below were checked against the linked documentation in July 2026.",
        "variant": "note"
      },
      {
        type: 'paragraph',
        content: "The useful comparison begins with the material you already have. A page of lecture notes, an annotated PDF, and a classmate’s shared deck ask different things of an app. Then comes the longer job: making the cards clear enough to study and returning to them regularly. Choose a workflow that helps with both, rather than stopping at how quickly it generates the first deck.",
      },
      {
        type: 'comparison',
        caption: 'Feature direction verified from official product documentation on July 11, 2026',
        columns: [
          "App",
          "Primary workflow",
          "Source-to-card workflow",
          "Scheduling and storage"
        ],
        rows: [
          { label: 'Memora · pre-release', cells: ['Privacy-minded iPhone learners willing to review every generated draft.', 'Typed or pasted notes, PDFs with embedded text, and one selected photo with local Vision OCR. Foundation Models generates drafts on the device, and Memora requires Apple Intelligence-capable hardware; some features can continue while the model is unavailable.', 'FSRS with four recall grades and visible intervals, never paywalled. Current records use local SwiftData; no current iCloud-sync claim.'] },
          { label: 'AnkiMobile', cells: ['Desktop-linked scheduling, customization, large decks, and the Anki ecosystem.', 'Manual and import workflows. The official iOS listing describes AnkiMobile as a companion and says some note-type editing and image-occlusion creation require desktop.', 'FSRS and SM-2, optional AnkiWeb sync, offline media, and local import/export. Current US App Store price: $24.99 once.'] },
          { label: 'Quizlet', cells: ['Learners who want shared sets, several study modes, and a familiar classroom ecosystem.', 'Official AI tools accept pasted notes, PDFs, slides, Google Drive files, and mobile photos, then let the learner edit the generated set.', 'Adaptive Learn and practice modes rather than an advertised FSRS workflow. Account-based service with user-controlled set visibility.'] },
          { label: 'RemNote', cells: ['Learners who want connected notes, PDF annotation, flashcards, and a study system in one workspace.', 'Its Learn PDF feature creates summaries, AI flashcards, quizzes, and tutor interactions from PDFs.', 'Supports FSRS as an optional beta scheduler. Synced and local knowledge bases are available, with different backup and collaboration tradeoffs.'] },
          { label: 'Knowt', cells: ['Students who want AI-assisted cards from several web and class-media sources plus free study modes.', 'Official pages advertise cards from PDFs, articles, lecture videos, notes, and imported sets.', 'Offers a spaced-repetition mode alongside Learn, practice tests, and games in an account-based study platform.'] },
        ],
      },
      {
        type: 'h2',
        content: "Make cards you will want to review",
      },
      {
        type: 'paragraph',
        content: "Memora shows the front and back of each generated draft before you add the batch. Deselect cards you do not want, save the rest, and edit saved cards in the deck. That review step lets you discard duplicates or questions that miss the point before they join your routine. It does not include editing draft text in place or a source-document side pane, so keep the original material available when checking facts.",
      },
      {
        type: 'paragraph',
        content: 'Memora’s input boundary is intentionally narrower than the broad upload claims on several established services. It can extract embedded text from a PDF, but it does not currently OCR every page of a scanned PDF. It can run Vision OCR over one photo selected from the library, but it does not currently promise an in-app document camera or batch capture. Those limitations belong in the comparison because a student with a scanned textbook needs a different workflow from someone with lecture notes exported as a text-layer PDF.',
      },
      {
        type: 'h2',
        content: "Use a schedule that responds to your recall",
      },
      {
        type: 'paragraph',
        content: 'AnkiMobile’s official listing supports both SM-2 and FSRS along with large decks, media, search, and a desktop companion. RemNote also supports FSRS, although its current help page labels the feature beta. Memora implements the familiar Again, Hard, Good, and Easy loop with visible next intervals, memory-state updates, intra-session relearning, and one-step undo. That gives Memora a modern scheduling foundation without reproducing Anki’s add-ons, desktop authoring model, shared ecosystem, or years of production use.',
      },
      {
        type: 'paragraph',
        content: "Spacing and retrieval practice have support in the learning-science literature linked below. They are useful reasons to build a review routine, but they do not settle which app you should use. Card quality, honest recall ratings, and whether the workflow fits your day still matter. Memora combines local card creation with FSRS so that making the deck and returning to it are part of the same app.",
      },
      {
        type: 'h2',
        content: "Decide whether you need a shared study system",
      },
      {
        type: 'paragraph',
        content: "Memora keeps OCR, generation, decks, and review history on the iPhone, with no app-managed cloud sync. It requires Apple Intelligence-capable hardware. If the model is off or unavailable on eligible hardware, the current build can continue after an advisory; manual study and imports remain available, and source-to-card generation has a deterministic fallback. Similar mode and the tutor require the model.",
      },
      {
        type: 'paragraph',
        content: "AnkiWeb sync is optional, and RemNote offers local knowledge bases as well as a synced service. Quizlet’s shared sets can be valuable when your class already uses them; Knowt supports a broad range of submitted sources. Each has its own AI and storage disclosures. Memora keeps its current study archive local, which suits personal material but gives up the shared workspace and automatic cross-device continuity of a service.",
      },
      {
        type: 'h2',
        content: "Match the app to your study habits",
      },
      {
        type: 'list',
        content: [
          'MEMORA: Designed for local iPhone generation, draft selection, FSRS, local study history, and useful fallback behavior. It remains pre-release.',
          'ANKIMOBILE TRADEOFF: Deep customization, large collections, optional sync, and desktop-assisted authoring come with a more complex desktop-linked workflow.',
          'QUIZLET TRADEOFF: Shared sets, classroom activities, and multi-device access use an account-based community and cloud processing model.',
          'REMNOTE TRADEOFF: Notes, PDF annotations, AI study tools, and flashcards can share one workspace, with separate synced-data and external AI boundaries.',
          'KNOWT TRADEOFF: Several AI source types and study modes operate inside an account-based platform with sharing and submitted-content terms to review.',
        ],
      },
      {
        type: 'faq',
        content: [
          {
            "question": "Can Memora replace AnkiMobile?",
            "answer": "Memora is being built for a focused iPhone workflow from your source material to selected cards and FSRS review. Anki offers a larger desktop-linked ecosystem and deeper customization. Memora is not yet released, and its current Anki import is limited to compatible legacy text cards without media."
          },
          { question: 'Can Memora turn a scanned PDF into flashcards?', answer: 'Not as an entire scanned document in the current implementation. The PDF importer needs embedded text. A learner can select one image for local Vision OCR, but batch scanned-PDF OCR and an in-app document camera are not current claims.' },
          { question: 'Does RemNote have an offline or local option?', answer: 'Yes. RemNote documents local knowledge bases that stay off RemNote’s servers. The tradeoff is that the user becomes responsible for backups and loses server-backed multi-device access for that knowledge base. AI features have their own third-party processing disclosures.' },
          { question: 'Does using FSRS guarantee that I will remember more?', answer: 'No. FSRS estimates when a card should return based on review history and chosen recall grades. Learning also depends on card quality, honest ratings, prior knowledge, feedback, consistency, and the material itself.' },
        ],
      },
      {
        type: 'sources',
        content: [
          'Apple Foundation Models framework|https://developer.apple.com/documentation/FoundationModels',
          'Anki official website|https://apps.ankiweb.net/',
          'AnkiMobile App Store listing|https://apps.apple.com/us/app/ankimobile-flashcards/id373493387',
          'Quizlet AI Flashcard Generator|https://quizlet.com/features/ai-flashcard-generator',
          'Quizlet pricing|https://quizlet.com/upgrade?source=footer',
          'Quizlet Privacy Policy|https://quizlet.com/privacy',
          'RemNote Learn from Any PDF|https://www.remnote.com/feature/learn-any-pdf',
          'RemNote FSRS documentation|https://help.remnote.com/en/articles/9124137-the-fsrs-spaced-repetition-algorithm',
          'RemNote pricing|https://www.remnote.com/pricing',
          'RemNote note privacy documentation|https://help.remnote.com/en/articles/7974260-privacy-of-your-notes',
          'Knowt Flashcards|https://knowt.com/flashcards',
          'Knowt Privacy Policy|https://knowt.com/privacy',
          'Knowt Terms of Service|https://knowt.com/terms',
          'Nature Reviews Psychology: spacing and retrieval practice|https://doi.org/10.1038/s44159-022-00089-1',
          'Educational Psychology Review: retrieval practice systematic review|https://doi.org/10.1007/s10648-021-09595-9',
        ],
      },
      {
        type: 'cta',
        content: "Explore Memora’s source-to-card workflow and FSRS review. It is being built for the material you need to learn, with generation and study kept on your iPhone.",
        ctaAppId: 'memora',
      },
    ],
  },
  {
    id: 'best-ai-flashcard-apps-pdf-notes-privacy',
    title: "Five Flashcard Apps for Turning Notes into a Study Routine",
    seoTitle: "Five Flashcard Apps for Turning Notes into a Study Routine",
    date: '2026.07.11',
    modified: "2026.09.28",
    readTime: "7 MIN READ",
    category: 'AI FLASHCARD LIST',
    tags: ['#AI-STUDY-APPS', '#FLASHCARD-GENERATOR', '#FSRS', '#OFFLINE-STUDY'],
    excerpt: "Compare Memora, Anki, Quizlet, RemNote, and Knowt by the material you start with, the cards you can edit, and the way you want to review.",
    seoDescription: "Compare Memora, Anki, Quizlet, RemNote, and Knowt by the material you start with, the cards you can edit, and the way you want to review.",
    contentType: 'listicle',
    appId: 'memora',
    searchIntent: 'What is the best AI flashcard app for turning PDFs, notes, or photos into editable cards?',
    keyTakeaways: [
      "Memora connects local card generation with an FSRS review schedule. Drafts are selected before adding; saved cards can then be edited.",
      "Your source format matters. Memora handles selectable-text PDFs and individual photos, rather than whole scanned PDFs or lecture videos.",
      "Test a deck export before committing. Memora exports card content and images, but a re-import starts a new review schedule."
    ],
    relatedIds: ['memora-vs-anki-quizlet-remnote-knowt', 'apple-ecosystem-privacy', 'offline-ai-revolution'],
    listItems: [
      { name: 'Memora · pre-release', description: "Local card generation, draft selection, and FSRS review for your own study material. In development." },
      { name: 'AnkiMobile', description: 'A desktop-linked scheduling ecosystem with FSRS, large decks, and extensive control.' },
      { name: 'Quizlet', description: 'A large shared-set ecosystem with classroom familiarity and varied study activities.' },
      { name: 'RemNote', description: 'A connected workspace for notes, PDFs, linked knowledge, and flashcards.' },
      { name: 'Knowt', description: 'An account-based platform with broad AI source formats and several student study modes.' },
    ],
    blocks: [
      {
        type: 'answer',
        title: "The deck is only the beginning",
        content: "Memora is being built to take your notes, photos, and text-based PDFs into a local flashcard routine on iPhone, with draft selection and FSRS scheduling. Anki gives you more control over a long-lived study system; Quizlet makes shared sets central; RemNote joins notes and cards; Knowt accepts a wider range of class and web material. Choose an app you can keep using after the first batch of cards is made.",
      },
      {
        "type": "callout",
        "title": "About this selection",
        "content": "This guide compares source support, card review, scheduling, and sharing. Memora is our app and remains in development. The linked competitor documentation and US prices were checked in July 2026.",
        "variant": "note"
      },
      {
        type: 'comparison',
        caption: 'Five flashcard products for five different priorities',
        columns: [
          "App",
          "Why it makes the list",
          "Important tradeoff",
          "Availability"
        ],
        rows: [
          { label: 'Memora', cells: ['Local generation from bounded sources, draft selection before adding, FSRS, local history, and no current account or AI server.', 'Text-layer PDFs only, one selected photo at a time, Apple-Intelligence limits, no current iCloud sync, and no production track record.', 'In development for iPhone on iOS 26; pricing and release date are not settled.'] },
          { label: 'AnkiMobile', cells: ['FSRS and SM-2, large decks, rich media, search, optional sync, and a mature desktop companion.', 'Steeper setup; the official iOS listing says some authoring and image-occlusion creation still require desktop.', 'Available on the US App Store for $24.99 once as checked July 11, 2026.'] },
          { label: 'Quizlet', cells: ['AI generation from notes, PDFs, slides, Drive, and mobile photos plus shared sets, Learn, tests, and games.', 'Its account-based community and service model is different from a local-only private archive.', 'Available with free access and paid annual tiers advertised from $35.99/year.'] },
          { label: 'RemNote', cells: ['PDF annotation, linked notes, AI cards and quizzes, and optional FSRS in one knowledge system.', 'More workspace complexity; AI and synced-data paths require reading its detailed privacy documentation.', 'Available; current annual plans advertise Free, $96 Pro, and $216 Pro with AI.'] },
          { label: 'Knowt', cells: ['AI cards from PDFs, articles, videos, and notes with Learn, tests, games, and spaced repetition.', 'Account and sharing behavior may not suit people seeking a device-only study archive.', 'Available on web and mobile; plan details should be verified in the reader’s region.'] },
        ],
      },
      {
        type: 'h2',
        content: "1. Memora: your material, followed by a review routine",
      },
      {
        type: 'paragraph',
        content: "Memora turns a bounded passage of notes, selectable PDF text, or text recognized from a photo into a small batch of card drafts on the iPhone. Review the front and back, deselect what you do not need, and add the rest. You can edit the saved cards afterward. The current generation flow uses up to 4,000 source characters and proposes up to 12 cards at a time, so work through longer material in sections.",
      },
      {
        type: 'paragraph',
        content: "Saved cards use FSRS to schedule the next review from your recall grades. Match, Listen, and manual image cards offer other ways to practice; Plus adds Test, Tutor, and automatic image-label detection. Compatible Anki imports bring in legacy text cards, without media or newer .anki21b collections. Exports include deck content and images but exclude scheduling and review history. Memora remains in development.",
      },
      {
        type: 'h2',
        content: '2. AnkiMobile: scheduling control and established workflows',
      },
      {
        type: 'paragraph',
        content: 'AnkiMobile belongs on this list even though AI generation is not its central pitch. Its official listing supports the same SM-2 and FSRS schedulers as desktop Anki, optional AnkiWeb sync, offline media, advanced search, statistics, MathJax, LaTeX rendering, and decks with more than 100,000 cards. It is the benchmark for a learner who is willing to shape note types, imports, templates, and review settings around a durable personal system rather than asking one generator to do everything.',
      },
      {
        type: 'paragraph',
        content: 'The tradeoff is workflow complexity. AnkiMobile calls itself a companion to the computer version. Its App Store description says modifications such as some note-type changes must be made on desktop, add-ons are not supported on mobile, and image-occlusion cards can be studied but not created in the iOS app. Its defining advantage is control rather than a quick PDF-to-cards path.',
      },
      {
        type: 'h2',
        content: '3. Quizlet: shared sets and varied practice',
      },
      {
        type: 'paragraph',
        content: 'Quizlet’s official AI generator can turn pasted text, PDFs, Google Drive documents, slides, and mobile photos into a first draft. The result can be edited, reordered, and studied through familiar flashcards, Learn, tests, and other activities. Its library and group features make it particularly useful when a class, teacher, or study group already exchanges Quizlet sets. That collaborative breadth is a real advantage that a local-only app does not reproduce.',
      },
      {
        type: 'paragraph',
        content: 'Students handling private, unpublished, regulated, or personally sensitive material should read Quizlet’s current privacy policy and visibility controls before uploading it. Quizlet lets creators choose whether their content is viewable by other users and uses service providers for external processing. That is not inherently disqualifying, but it is a different decision from keeping generation and storage inside one device.',
      },
      {
        type: 'h2',
        content: '4. RemNote: notes, PDF annotation, and flashcards together',
      },
      {
        type: 'paragraph',
        content: 'RemNote approaches study material as a connected knowledge base. Its PDF workflow advertises summaries, prioritized AI flashcards, quizzes, and an interactive tutor, while its core product keeps notes and flashcards linked. It supports both an Anki-style SM-2 scheduler and optional FSRS. The design serves learners who annotate source material and want cards to remain attached to the surrounding explanation.',
      },
      {
        type: 'paragraph',
        content: 'Its privacy model is more nuanced than either “cloud” or “offline.” RemNote says a local knowledge base can remain off its servers, with the user responsible for backup and without server-backed multi-device access. Its synchronized service encrypts data in transit and at rest but is not end-to-end encrypted. Its AI features can send snippets to a documented list of providers, although it says note text is not used to train models. Read those controls in the context of the material you plan to study.',
      },
      {
        type: 'h2',
        content: '5. Knowt: broad AI inputs and student study modes',
      },
      {
        type: 'paragraph',
        content: 'Knowt’s official pages advertise AI flashcards from lecture notes, PDFs, articles, and lecture videos. It also supports imported flashcard sets, Learn mode, practice tests, games, and spaced repetition. That combination can reduce friction for students whose course material moves between a browser, video platform, class document, and mobile study session. It is a broader media-ingestion proposition than Memora’s current bounded input path.',
      },
      {
        type: 'paragraph',
        content: 'The data and sharing terms deserve the same attention as the feature list. Knowt’s March 2026 privacy policy discusses account information, classroom use, and sharing some student-generated cards and notes with other users. Its terms grant broad rights over submitted content, including possible model improvement. Those documents contain qualifications, including separate treatment of Google user data, so comparisons should link the original language rather than reduce it to an alarmist label.',
      },
      {
        type: 'h2',
        content: "Try one source and one week of review",
      },
      {
        type: 'list',
        content: [
          'Start with one representative source: a real lecture PDF, a page of notes, or a photo, not a polished demo document.',
          'Check whether the app accepts that exact format and whether a scanned PDF needs a separate OCR step.',
          'Inspect ten generated cards for source fidelity, ambiguity, answer length, duplicated ideas, and accidental hints.',
          'Confirm that you can edit or reject every generated card before it affects your study queue.',
          'Identify the scheduler and whether its next-review logic is visible enough for your preferences.',
          'Decide whether you need shared sets and sync more than you need a device-local archive.',
          'Export a test deck and learn what content, media, and study history the file includes.',
        ],
      },
      {
        type: 'faq',
        content: [
          {
            "question": "Can Memora use the PDF I already have?",
            "answer": "The current importer needs selectable text inside the PDF. It does not read a whole scanned PDF through OCR. You can select an individual photo for local text recognition, then review the proposed cards before adding them. Memora is still in development."
          },
          { question: 'Which flashcard apps use FSRS?', answer: 'Anki and RemNote officially document FSRS support. Memora also implements FSRS in its current development build. Verify the default status and available settings in the version you actually use.' },
          { question: 'Should I let AI make all of my flashcards?', answer: 'AI can reduce setup, but generated cards should be reviewed against the source. The learner should correct false premises, vague questions, missing exceptions, and answers that are too broad before studying them.' },
          { question: 'Does offline storage automatically make study data safe?', answer: 'No. Local storage reduces one data-transfer path but still depends on device access, operating-system protections, backups, exports, and deletion. It is not a substitute for a security audit or a backup plan.' },
        ],
      },
      {
        type: 'sources',
        content: [
          'Anki official website|https://apps.ankiweb.net/',
          'AnkiMobile App Store listing|https://apps.apple.com/us/app/ankimobile-flashcards/id373493387',
          'Quizlet AI Flashcard Generator|https://quizlet.com/features/ai-flashcard-generator',
          'Quizlet AI Study Tools|https://quizlet.com/features/ai-study-tools',
          'Quizlet pricing|https://quizlet.com/upgrade?source=footer',
          'Quizlet Privacy Policy|https://quizlet.com/privacy',
          'RemNote Learn from Any PDF|https://www.remnote.com/feature/learn-any-pdf',
          'RemNote FSRS documentation|https://help.remnote.com/en/articles/9124137-the-fsrs-spaced-repetition-algorithm',
          'RemNote pricing|https://www.remnote.com/pricing',
          'RemNote note privacy documentation|https://help.remnote.com/en/articles/7974260-privacy-of-your-notes',
          'Knowt Flashcards|https://knowt.com/flashcards',
          'Knowt Chrome and AI source workflows|https://knowt.com/chrome-extension',
          'Knowt Privacy Policy|https://knowt.com/privacy',
          'Knowt Terms of Service|https://knowt.com/terms',
          'Apple Foundation Models framework|https://developer.apple.com/documentation/FoundationModels',
          'Nature Reviews Psychology: spacing and retrieval practice|https://doi.org/10.1038/s44159-022-00089-1',
        ],
      },
      {
        type: 'cta',
        content: "Explore Memora’s card creation and study modes. Follow its development if you want to go from your own notes to regular review without uploading the source to an AI service.",
        ctaAppId: 'memora',
      },
    ],
  },
  {
    id: 'trove-vs-home-inventory-apps',
    title: "Trove vs Home Inventory Apps: Capture, Find, and Keep the Evidence",
    seoTitle: "Trove vs Home Inventory Apps: Capture, Find, and Keep the Evidence",
    date: '2026.07.11',
    modified: "2026.09.28",
    readTime: "7 MIN READ",
    category: 'HOME INVENTORY COMPARISON',
    tags: ['#HOME-INVENTORY', '#RENTERS-INSURANCE', '#WARRANTY-TRACKER', '#PRIVATE-AI'],
    excerpt: "Compare Trove with Under My Roof, HomeZada, Itemtopia, NAIC, and Sortly by how you capture belongings, find receipts, and keep a usable backup.",
    seoDescription: "Compare Trove with Under My Roof, HomeZada, Itemtopia, NAIC, and Sortly by how you capture belongings, find receipts, and keep a usable backup.",
    contentType: 'comparison',
    appId: 'trove',
    searchIntent: 'How does pre-release Trove compare with Under My Roof, HomeZada, Itemtopia, NAIC, and Sortly for private capture, insurance documentation, export, and backup?',
    keyTakeaways: [
      "Trove’s capture workflow proposes item details from photos, receipts, and labels, with a review step before you rely on the record.",
      "Free archive export and restore include available local photos. Plus adds formatted reports, a selected-item claim report, multiple homes, and record sync.",
      "Choose a broader home-management or business system if maintenance projects, teams, or stock quantities are the main job."
    ],
    relatedIds: ['best-home-inventory-apps-insurance-privacy', 'apple-ecosystem-privacy', 'offline-ai-revolution'],
    blocks: [
      {
        type: 'answer',
        title: "Make the record useful when you need it",
        content: "Trove is being built to turn photos, receipts, and labels into household records you review, search, and back up with the photos included. That suits someone who wants less typing and an easier way to find an item’s details later. Under My Roof adds extensive Apple home management; HomeZada covers the wider property; Itemtopia supports flexible catalogs; NAIC offers a free starting point; Sortly brings business inventory tools. Trove remains in development.",
      },
      {
        "type": "callout",
        "title": "An inventory supports the record",
        "content": "Photos, receipts, and serial numbers can help document what you own. An app does not decide coverage, appraise an item, or guarantee a claim payment.",
        "variant": "note"
      },
      {
        type: 'paragraph',
        content: "Think about the last time you needed a serial number, a receipt, or a warranty date. It may have been in a drawer, an email, and a photo you could not find. A home inventory brings those pieces together. The Insurance Information Institute and NAIC recommend keeping records of belongings; the practical question here is which app makes that habit easier to start and maintain.",
      },
      {
        type: 'comparison',
        caption: 'Home inventory approaches verified from first-party pages on July 11, 2026',
        columns: [
          "App",
          "Primary use",
          "Notable scope",
          "Storage, price, or boundary"
        ],
        rows: [
          { label: 'Trove · pre-release', cells: ['Private Apple-device capture with less manual field entry.', 'Items, rooms, photos, receipts, serials, values, warranty context, local search, Ask Trove, and CSV export.', 'Local store with optional Plus iCloud record sync; photos are separate files. Free photo-inclusive archive backup; paid reports. No verified public release.'] },
          { label: 'Under My Roof', cells: ['Apple households wanting a mature, detailed home-management database.', 'Belongings, documents, home details, maintenance, renovations, collections, policies, claims, moving, and reports.', 'Developer says data stays on device or optional personal iCloud. $34.99/year or $4.99/month in the US.'] },
          { label: 'HomeZada', cells: ['Homeowners wanting inventory alongside maintenance, projects, finances, and future asset planning.', 'Room-based inventory, documents, reports, AI photo recognition, replacement forecasts, and broader home management.', 'Essentials advertised free; Premium $99/year or $15.95/month. Account-based multi-user service.'] },
          { label: 'Itemtopia', cells: ['People cataloging homes, collections, properties, services, or business assets across platforms.', 'Custom records for items, receipts, warranties, values, documents, maintenance, and sharing.', 'Available on iOS, Android, and Apple-silicon Mac. Free to try; current regional pricing is shown inside the app.'] },
          { label: 'NAIC Home Inventory', cells: ['A free, regulator-supported insurance-preparedness starting point.', 'Photos, rooms/categories, barcode scanning, export, disaster preparation, and claims guidance.', 'Free consumer tool. Confirm current platform availability and data practices in the store listing used for download.'] },
          { label: 'Sortly', cells: ['People who want business-style visual inventory, labels, quantities, and team workflows.', 'Photos, folders, custom fields, QR/barcode labels, reports, multi-device access, and business integrations.', 'Free plan currently advertises 100 unique items. Paid plans are primarily positioned for businesses and teams.'] },
        ],
      },
      {
        type: 'h2',
        content: "Trove: capture the evidence while it is in front of you",
      },
      {
        type: 'paragraph',
        content: "In Trove’s development build, photograph an item, receipt, barcode, or serial label and review the details proposed by local recognition. Correct the fields while you still have the item and source image in front of you. Later, search the inventory or ask a question using the saved records. Trove requires Apple Intelligence at launch; its generation fallbacks do not make unsupported devices eligible.",
      },
      {
        type: 'paragraph',
        content: "That household workflow differs from an operational inventory system. Sortly’s labels, quantities, and team tools serve stock and equipment tracking. Trove concentrates on the evidence attached to a belonging: where it lives, what it is, the receipt, serial number, photos, and warranty context. Choose the app that matches the record you will actually need.",
      },
      {
        type: 'h2',
        content: 'Under My Roof provides a released Apple home-management comparison',
      },
      {
        type: 'paragraph',
        content: 'Under My Roof’s official site says the developer cannot access an inventory because it remains on the person’s devices and, when enabled, in that person’s iCloud account. It already spans iPhone, iPad, and Mac and supports purchase and warranty records, receipts, document scanning, maintenance, renovations, moving, collections, insurance policies, claims, multiple homes, and family sharing. Those are released capabilities, while Trove’s narrower capture and local-question workflow remains in development.',
      },
      {
        type: 'paragraph',
        content: "Trove’s free archive export and restore include the inventory relationships and available local photos, so the backup is more than a list of item names. Plus adds formatted reports, selected-item claim reports, multiple homes, and optional private iCloud record sync. Photos are separate files; keep a photo-inclusive archive rather than assuming record sync has backed up every image.",
      },
      {
        type: 'h2',
        content: 'HomeZada and Itemtopia cover more of the home or asset lifecycle',
      },
      {
        type: 'paragraph',
        content: 'HomeZada connects inventory with maintenance, remodeling, documents, home finances, reports, multiple properties, and newer AI-powered asset replacement forecasts. Its scope is a whole-home management system rather than a private contents catalog. Its free Essentials plan includes inventory and documents, while paid tiers add more management breadth. Compare the account, sharing, and data policies directly if privacy is a primary requirement.',
      },
      {
        type: 'paragraph',
        content: "Itemtopia supports homes, collections, properties, business assets, services, receipts, and warranties across iOS, Android, and Mac. It is worth considering when you need flexible fields or shared access, particularly in a household using more than Apple devices. Prices are shown in the regional purchase flow; check the linked privacy and export documentation alongside the features you need.",
      },
      {
        type: 'h2',
        content: 'NAIC is the free baseline, not a substitute for reading the policy',
      },
      {
        type: 'paragraph',
        content: 'The NAIC Home Inventory app offers the essential insurance-preparedness workflow: group belongings by room or category, take photos, scan barcodes, export the inventory, and read disaster and claim guidance. It is an especially credible starting point because NAIC supports state insurance regulators rather than selling a home-management subscription. Its narrower feature set may be enough for many households. No paid app should imply that a more elaborate PDF receives automatic preference from an insurer.',
      },
      {
        type: 'h2',
        content: "Build one complete record before cataloging a room",
      },
      {
        type: 'list',
        content: [
          'START WITH THE PURPOSE: insurance preparation, moving, warranties, estate planning, collections, maintenance, or business-style stock control.',
          'RECORD CLAIM-RELEVANT FIELDS: description, room, make, model, serial, purchase date and price, receipt, photo, and a clearly labeled current estimate where appropriate.',
          'TEST CAPTURE ON A HARD ITEM: a reflective serial label, faded receipt, unboxed appliance, or object without a barcode.',
          'CHECK CORRECTION CONTROLS: AI and barcode results must remain editable and should never overwrite the source evidence.',
          'CREATE A SECOND COPY: confirm PDF, CSV, photo, or backup behavior and store a protected copy somewhere that survives loss of the phone and home.',
          'READ THE POLICY: replacement cost, actual cash value, deductibles, exclusions, and special limits are insurance terms, not app settings.',
          'RECHECK THE INVENTORY: add significant purchases and review the catalog and coverage with the appropriate insurance professional periodically.',
        ],
      },
      {
        type: 'faq',
        content: [
          { question: 'What should I include in a home inventory for insurance?', answer: 'Commonly useful details include a photo, description, room, make, model, serial number, purchase location and date, price, receipt, and relevant warranty or supporting documents. Ask the insurer what it expects and keep high-value items and policy limits in view.' },
          { question: 'Can Trove tell me what my belongings are worth?', answer: 'Trove can store user-entered values and propose context for review, but it is not an appraisal service and does not determine replacement cost or policy coverage. Receipts, professional appraisals where appropriate, market evidence, and insurer instructions remain authoritative.' },
          { question: 'Does Trove send warranty-expiration notifications?', answer: "The development build can schedule local warranty reminders, usually 30 days before expiry, subject to notification permission and the saved date. Review any date extracted from a receipt before relying on a reminder." },
          { question: 'Can I submit a Trove PDF directly to an insurer?', answer: "Plus PDF reporting and a selected-item claim report are implemented in the development build. Trove is not yet released, and a report is supporting documentation, not a guarantee of insurer acceptance or payment." },
        ],
      },
      {
        type: 'sources',
        content: [
          'Insurance Information Institute: How to create a home inventory|https://www.iii.org/article/how-create-home-inventory',
          'NAIC Home Inventory consumer page|https://content.naic.org/consumer/home-inventory',
          'NAIC homeowners insurance guidance|https://content.naic.org/consumer/homeowners-insurance.htm',
          'Under My Roof official site|https://undermyroof.app/',
          'Under My Roof App Store listing|https://apps.apple.com/us/app/under-my-roof-home-inventory/id1524335878',
          'HomeZada Home Inventory|https://www.homezada.com/homeowners/home-inventory',
          'HomeZada pricing|https://www.homezada.com/homeowners/pricing/',
          'HomeZada 2026 asset forecasting announcement|https://www.homezada.com/press/homezada-launches-ai-powered-major-asset-forecasting-to-help-homeowners-predict-future-replacement-costs',
          'Itemtopia official site|https://www.itemtopia.com/',
          'Itemtopia pricing|https://www.itemtopia.com/pricing',
          'Sortly Home Inventory Software|https://www.sortly.com/solutions/home-inventory-software/',
          'Sortly pricing|https://www.sortly.com/pricing/',
          'Apple Foundation Models framework|https://developer.apple.com/documentation/FoundationModels',
        ],
      },
      {
        type: 'cta',
        content: "Explore Trove’s capture, search, and photo-inclusive archive. It is being built to keep the details of your belongings within reach when a receipt or serial number suddenly matters.",
        ctaAppId: 'trove',
      },
    ],
  },
  {
    id: 'best-home-inventory-apps-insurance-privacy',
    title: "Six Home Inventory Apps for Receipts, Records, and Backup",
    seoTitle: "Six Home Inventory Apps for Receipts, Records, and Backup",
    date: '2026.07.11',
    modified: "2026.09.28",
    readTime: "8 MIN READ",
    category: 'HOME INVENTORY LIST',
    tags: ['#HOME-INVENTORY-APP', '#INSURANCE-PREP', '#RECEIPTS', '#HOME-PRIVACY'],
    excerpt: "Choose a home inventory by what you need to record and recover. Compare Trove, Under My Roof, NAIC, HomeZada, Itemtopia, and Sortly.",
    seoDescription: "Choose a home inventory by what you need to record and recover. Compare Trove, Under My Roof, NAIC, HomeZada, Itemtopia, and Sortly.",
    contentType: 'listicle',
    appId: 'trove',
    searchIntent: 'What is the best home inventory app for documenting belongings, receipts, warranties, and insurance records?',
    keyTakeaways: [
      "Trove reduces manual entry by proposing fields from item photos, receipts, and labels. You review the details before relying on them.",
      "Its development build includes free photo-inclusive archive export and restore; reports, multiple homes, and record sync are Plus features.",
      "A complete inventory needs a protected second copy. A report can support an insurance conversation, but it does not determine coverage or claim acceptance."
    ],
    relatedIds: ['trove-vs-home-inventory-apps', 'apple-ecosystem-privacy', 'offline-ai-revolution'],
    listItems: [
      { name: 'Trove · pre-release', description: "Reviewed item and receipt capture with search and free photo-inclusive archive backup. In development." },
      { name: 'Under My Roof', description: 'A detailed Apple home-management database across iPhone, iPad, and Mac.' },
      { name: 'NAIC Home Inventory', description: 'A free regulator-supported insurance-preparedness checklist and inventory.' },
      { name: 'HomeZada', description: 'Inventory plus maintenance, projects, finances, and long-term home planning.' },
      { name: 'Itemtopia', description: 'Flexible cross-platform home, collection, property, and asset records.' },
      { name: 'Sortly', description: 'Business-style visual inventory, barcodes, labels, quantities, and teams.' },
    ],
    blocks: [
      {
        type: 'answer',
        title: "Choose the record you will be able to maintain",
        content: "Trove is being built for reviewed photo and receipt capture, local inventory questions, and a backup that includes the available photos. Under My Roof is a broader Apple home-management system, NAIC offers a free inventory starting point, HomeZada manages the property as well as its contents, Itemtopia supports flexible records, and Sortly suits stock and equipment. Start with capture and recovery: can you make a useful record, and get it back when you need it?",
      },
      {
        "type": "callout",
        "title": "About this selection",
        "content": "The apps are grouped by their main job, from household records to operational inventory. Trove is our app and is still in development. Competitor details were checked against the linked sources in July 2026.",
        "variant": "note"
      },
      {
        type: 'paragraph',
        content: "Start with an appliance you bought recently. Can you put its receipt, model, serial number, warranty date, and photo in one place without turning it into a weekend project? Then try exporting that record with its evidence. Those two tasks tell you more about an inventory app than a polished dashboard does. Once the workflow is easy enough to repeat, work through the rest of the room.",
      },
      {
        type: 'comparison',
        caption: 'Six home inventory options by primary job',
        columns: [
          "App",
          "Best for",
          "Key evidence workflow",
          "Important limitation or question"
        ],
        rows: [
          { label: 'Trove', cells: ['Upcoming local Apple capture.', 'Reviewable OCR/barcode/receipt extraction, local records, warranty/value context, Ask Trove, and implemented CSV.', 'Unreleased; Plus reports, multiple homes, and iCloud record sync are implemented. Photo-inclusive archive export is free.'] },
          { label: 'Under My Roof', cells: ['Private Apple home management.', 'Photos, receipts, documents, serials, warranties, maintenance, claims, reports, multiple homes, and optional personal iCloud.', 'Subscription; broader feature set can be more than a simple inventory needs.'] },
          { label: 'NAIC', cells: ['Free insurance preparedness.', 'Photos, rooms/categories, barcode capture, export, disaster tips, and claim guidance.', 'Narrower than full home-management suites; verify current store compatibility and privacy details.'] },
          { label: 'HomeZada', cells: ['Whole homeowner lifecycle.', 'Inventory plus documents, maintenance, remodels, finances, reports, and AI-assisted home planning.', 'Account-based breadth and paid tiers may be unnecessary for a contents-only list.'] },
          { label: 'Itemtopia', cells: ['Flexible cross-platform records.', 'Customizable items, receipts, warranties, services, properties, collections, and shared use cases.', 'Regional pricing is in-app; examine current privacy and export documentation for your workflow.'] },
          { label: 'Sortly', cells: ['Business-style organization.', 'Visual folders, photos, QR/barcode labels, fields, quantities, reports, and team access.', 'Business orientation and paid pricing can exceed a household’s needs.'] },
        ],
      },
      {
        type: 'h2',
        content: "1. Trove: capture the details and keep the photos with them",
      },
      {
        type: 'paragraph',
        content: "Trove’s development build reads item photos, receipts, barcodes, and labels locally, then asks you to review the proposed details. The saved record holds the evidence with the item, and Ask Trove can use inventory context to help find what you need. This is useful for the records that are otherwise scattered across camera rolls and paperwork. Apple Intelligence is required on supported iPhone and iPad hardware.",
      },
      {
        type: 'paragraph',
        content: "The free archive can export and restore the inventory with available local photos. Plus adds PDF and CSV reports, a selected-item claim report, multiple homes, and optional private iCloud record sync. Local warranty reminders use the dates you record and require notification permission. Trove is not yet released, and its reports do not guarantee an insurer will accept or pay a claim.",
      },
      {
        type: 'h2',
        content: '2. Under My Roof: private Apple home management',
      },
      {
        type: 'paragraph',
        content: 'Under My Roof combines a particularly broad current set of privacy and household-management features in this list. The developer says the inventory stays on the person’s devices and, if chosen, in the person’s iCloud account; the developer does not have access. It runs on iPhone, iPad, and Mac and records belongings, home facts, receipts, manuals, warranties, renovation history, maintenance, collections, policy details, claims, moving boxes, and custom fields.',
      },
      {
        type: 'paragraph',
        content: 'The US price shown by the developer is $34.99 per year or $4.99 per month with a trial. A single subscription covers the purchaser’s Apple devices and supports Family Sharing. Its scope supports a long-lived home record rather than only a one-time insurance checklist. Someone who only wants a simple list may find that scope larger than necessary.',
      },
      {
        type: 'h2',
        content: '3. NAIC Home Inventory: free insurance-preparedness baseline',
      },
      {
        type: 'paragraph',
        content: 'NAIC provides the clearest baseline for what a consumer inventory should accomplish: photograph belongings, group them by room or category, scan barcodes, export the record, and understand disaster preparation and claim steps. Because NAIC is the US standard-setting and regulatory support organization governed by state insurance regulators, its guidance is more authoritative for the purpose of an inventory than a software company’s claim-oriented marketing.',
      },
      {
        type: 'paragraph',
        content: 'Free does not automatically mean sufficient for every household. High-value collections, renovation records, household collaboration, scheduled maintenance, or sophisticated report layouts may require another tool. Check the current App Store or Google Play listing for compatibility, data-safety disclosures, and update history before committing years of records.',
      },
      {
        type: 'h2',
        content: '4. HomeZada: whole-home lifecycle management',
      },
      {
        type: 'paragraph',
        content: 'HomeZada goes well beyond possessions. Its current product connects home inventory with documents, maintenance, projects, finances, dashboards, home value context, and replacement planning. In 2026 the company announced AI-powered forecasting for the future replacement year and cost of major assets such as roofs, HVAC systems, and appliances. That makes it relevant to a homeowner budgeting for the property itself, not only documenting personal contents.',
      },
      {
        type: 'paragraph',
        content: 'The advertised Essentials plan is free and includes inventory and documents. Premium is currently $99 per year or $15.95 per month, while Deluxe adds multiple-property features at a higher price. Treat generated forecasts as planning estimates, not bids, appraisals, policy coverage, or financial advice. Review HomeZada’s current account and privacy terms if the records include sensitive financial or property information.',
      },
      {
        type: 'h2',
        content: '5. Itemtopia: flexible records across several asset types',
      },
      {
        type: 'paragraph',
        content: 'Itemtopia is useful when “home inventory” is only one part of the catalog. Its official site positions the app for belongings, collections, properties, business assets, receipts, warranties, maintenance, services, sharing, and even item-sale pages. It is available on iOS, Android, and Macs with Apple silicon, which gives mixed-device households more options than an Apple-only tool.',
      },
      {
        type: 'paragraph',
        content: "Itemtopia shows current subscription details inside the Apple and Google purchase flow. Try a record with the fields, attachments, and sharing you need before moving a larger collection. Check what its export includes and how the people sharing the inventory can access it.",
      },
      {
        type: 'h2',
        content: '6. Sortly: business-style inventory mechanics',
      },
      {
        type: 'paragraph',
        content: 'Sortly can catalog home possessions, but its main orientation is operational inventory. It supports visual folders, high-resolution photos, custom fields, barcode and QR scanning, label creation, quantities, stock counts, reports, users, and business integrations. Those mechanics address home workshops, event inventory, rental equipment, or family businesses where “how many and where?” matters as much as proof of ownership.',
      },
      {
        type: 'paragraph',
        content: 'The current free plan advertises 100 unique items and one user. Paid tiers expand items, labels, users, reports, and business functions, with promotional pricing and renewal details that can change. A household with thousands of possessions may reach limits quickly, while a family that only documents high-value items may never need a paid operational system.',
      },
      {
        type: 'h2',
        content: "What makes an item record useful later",
      },
      {
        type: 'list',
        content: [
          'A clear item description and the room or location where it is normally kept.',
          'Make, model, serial number, and barcode where those identifiers exist.',
          'Purchase date, seller, price paid, receipt, and a photo showing ownership and condition.',
          'Warranty documents, service history, manuals, and relevant accessories for major items.',
          'A clearly labeled current estimate or professional appraisal when appropriate for a high-value item.',
          'Off-site or storage-unit belongings that the applicable policy may cover.',
          'An export or backup stored somewhere that will remain available if the device and home are both inaccessible.',
        ],
      },
      {
        type: 'faq',
        content: [
          { question: 'Is a home inventory app better than a spreadsheet?', answer: 'An app may make photos, barcodes, receipts, rooms, and mobile capture easier. A spreadsheet can be more portable and transparent. The better system is one you will maintain, export, back up, and understand before a loss.' },
          { question: 'Do I need a receipt for every item?', answer: 'Requirements vary by policy, carrier, item, and claim. Photos, serial numbers, bank records, manuals, appraisals, and other evidence may also help. Ask the insurer what documentation it expects rather than relying on a universal rule from an app.' },
          { question: 'Where should I back up my inventory?', answer: 'Keep a protected second copy somewhere that is not exposed to the same loss as the device and home. Options can include a private sync service, encrypted external storage kept elsewhere, or a secure provider chosen by the user. Match the choice to the sensitivity of the records.' },
          { question: 'Can an inventory app tell me whether I have enough coverage?', answer: 'It can total user-entered or estimated values and support a discussion, but the policy language, limits, deductibles, exclusions, valuation method, and insurer or licensed adviser determine coverage, not the app dashboard.' },
        ],
      },
      {
        type: 'sources',
        content: [
          'Insurance Information Institute: How to create a home inventory|https://www.iii.org/article/how-create-home-inventory',
          'Insurance Information Institute: Three reasons to take a home inventory|https://www.iii.org/article/three-reasons-take-home-inventory',
          'NAIC Home Inventory consumer page|https://content.naic.org/consumer/home-inventory',
          'NAIC homeowners insurance guidance|https://content.naic.org/consumer/homeowners-insurance.htm',
          'Under My Roof official site|https://undermyroof.app/',
          'Under My Roof App Store listing|https://apps.apple.com/us/app/under-my-roof-home-inventory/id1524335878',
          'HomeZada Home Inventory|https://www.homezada.com/homeowners/home-inventory',
          'HomeZada pricing|https://www.homezada.com/homeowners/pricing/',
          'HomeZada 2026 asset forecasting announcement|https://www.homezada.com/press/homezada-launches-ai-powered-major-asset-forecasting-to-help-homeowners-predict-future-replacement-costs',
          'Itemtopia official site|https://www.itemtopia.com/',
          'Itemtopia pricing|https://www.itemtopia.com/pricing',
          'Sortly Home Inventory Software|https://www.sortly.com/solutions/home-inventory-software/',
          'Sortly pricing|https://www.sortly.com/pricing/',
          'Apple Foundation Models framework|https://developer.apple.com/documentation/FoundationModels',
        ],
      },
      {
        type: 'cta',
        content: "See how Trove brings photos, receipts, and labels into an item record you can find and back up. The app is in development for iPhone and iPad.",
        ctaAppId: 'trove',
      },
    ],
  },
  {
    id: 'kith-vs-personal-crm-apps',
    title: "Kith vs Hippo, Dex, Monica, and Covve",
    seoTitle: "Kith vs Hippo, Dex, Monica, and Covve",
    date: '2026.07.11',
    modified: "2026.09.28",
    readTime: "7 MIN READ",
    category: 'PERSONAL CRM COMPARISON',
    tags: ['#PERSONAL-CRM', '#RELATIONSHIP-REMINDER', '#FRIENDS-AND-FAMILY', '#PRIVATE-AI'],
    excerpt: "Compare personal relationship apps by reminders, saved context, message preparation, and connected accounts. Kith focuses on the conversation you want to have next.",
    contentType: 'comparison',
    appId: 'kith',
    searchIntent: 'Which personal CRM is best for staying in touch with friends and family without making relationships feel like sales leads?',
    keyTakeaways: [
      "Kith carries saved context into the next interaction: recaps, talking points, and editable message drafts are generated on-device.",
      "You choose the cadence and can snooze reminders. Messages are handed to the system app; Kith does not send outreach for you.",
      "Choose wider Apple coverage, self-hosting, or professional integrations if those matter more than Kith’s focused local workflow."
    ],
    relatedIds: ['best-relationship-reminder-apps-friends-family', 'apple-ecosystem-privacy', 'offline-ai-revolution'],
    blocks: [
      {
        type: 'answer',
        title: "A reminder is more useful with something to remember",
        content: "Kith is being built to put the details you saved about someone beside the next call or message. Review a recap, use a talking point or editable draft, reach out through the system app, and log the interaction when you return. Hippo offers an established Apple relationship notebook, Monica adds open-source control, and Dex and Covve emphasize connected professional networks. Kith is still in development for iPhone.",
      },
      {
        "type": "callout",
        "title": "You set the pace",
        "content": "Kith’s reminders use the cadence you choose. They do not measure the quality of a relationship or decide when another person wants to hear from you.",
        "variant": "note"
      },
      {
        type: 'paragraph',
        content: "“Call Sam” is a useful reminder. Remembering that Sam was waiting on an interview makes it a more useful conversation. Kith is being built to connect those two moments: the detail you wanted to remember and the point when you reach out. The alternatives below offer different ways to collect that context, from deliberate notes to connected professional accounts.",
      },
      {
        type: 'comparison',
        caption: 'Five approaches to personal relationship memory',
        columns: [
          "App",
          "Primary use",
          "How it helps follow-through",
          "Data or product boundary"
        ],
        rows: [
          { label: 'Kith · pre-release', cells: [
            "Saved context and help preparing a call or message on iPhone.",
            "Adjustable cadence, important dates, recaps, talking points, and drafts you choose whether to send.",
            "In development. Requires Apple Intelligence; records are local, with no app-managed cloud sync."
          ] },
          { label: 'Hippo', cells: ['Apple users who prioritize a released no-account, privacy-first personal CRM.', 'Contact notes, events, reminders, linked relationships, calendar context, and native Apple apps.', 'Developer says data stays on device or optional personal iCloud. $14.99/year or $29.99 lifetime after trial.'] },
          { label: 'Dex', cells: ['Professional networkers who want communication context gathered from connected services.', 'Keep-in-touch reminders, interaction history, email/calendar/social integrations, and AI-assisted context.', 'Account-based cross-platform service. Official 2026 comparison advertises $12/month billed annually for its core plan.'] },
          { label: 'Monica', cells: ['People who want an open-source personal CRM and are comfortable with web or self-hosting.', 'Family links, notes, call reminders, dates, gifts, interactions, journal, import/export, and API.', 'Free self-hosted; hosted plan $9/month or $90/year, with a restricted 10-contact free tier.'] },
          { label: 'Covve', cells: ['Professional relationship management and mobile networking.', 'Smart reach-out reminders, notes, interaction history, contact news, analytics, business-card capture, and exports.', 'Professional account and service model. Current Starter page advertises $12/month or $119/year; verify plan scope before purchase.'] },
        ],
      },
      {
        type: 'h2',
        content: "Kith: bring the last conversation into the next one",
      },
      {
        type: 'paragraph',
        content: "Kith keeps people in circles with a reach-out cadence you can change. The Today view respects snoozes and prioritizes pinned people, while important dates remain visible separately. Open a person to review saved context and use a recap, talking point, or editable draft before reaching out. After a message handoff, Kith can prompt you to log the interaction when you return.",
      },
      {
        type: 'paragraph',
        content: "The benefit is a shorter path from remembering someone to doing something with the thought. You still decide whether to reach out, what to say, and when to move a reminder. The Warmth Ring reflects time relative to the cadence you set; it is not a grade for the friendship.",
      },
      {
        type: 'h2',
        content: 'Hippo provides a released privacy-first Apple comparison',
      },
      {
        type: 'paragraph',
        content: 'Hippo’s official site and App Store listing describe a native personal CRM for iPhone, iPad, and Mac that needs no account. It stores notes, events, reminders, and relationship links on the device, with optional sync through the user’s private iCloud rather than a Hippo server. Its released status, wider Apple-platform coverage, linked-person relationships, and annual or lifetime pricing distinguish it from Kith’s unfinished iPhone-only direction.',
      },
      {
        type: 'paragraph',
        content: "Kith’s distinction is the link between a reminder, saved context, and on-device help preparing the next interaction. Hippo already offers a released private notebook across more Apple devices, with optional iCloud. If you need that wider coverage today, it deserves a place on the shortlist.",
      },
      {
        type: 'h2',
        content: 'Dex is built for integration-rich professional follow-through',
      },
      {
        type: 'paragraph',
        content: 'Dex brings together contacts and interaction context from services such as email, calendars, LinkedIn, and other communication platforms. Its current first-party articles describe keep-in-touch reminders, AI summaries, mobile and web access, and deeper professional-network integrations. For a founder, consultant, recruiter, journalist, or executive whose relationships already live across those systems, automatic context can reduce far more manual work than an isolated local record.',
      },
      {
        type: 'paragraph',
        content: 'Those integrations also create a different trust and complexity decision. A person using Kith must enter or import the context they want and retains a narrower local boundary; a Dex customer gains automation by connecting accounts. Neither architecture is universally better. Compare the services you are willing to connect, data access requested, export and deletion options, and whether the product’s professional-network language fits the relationships you plan to track.',
      },
      {
        type: 'h2',
        content: 'Monica offers control through open source and self-hosting',
      },
      {
        type: 'paragraph',
        content: 'Monica is a web-based open-source personal CRM for storing what matters about loved ones. Its official feature page includes partners, children and pets, contact methods, private notes, call logs and future reminders, important dates, gifts, debts, interactions, a journal, import/export, and a REST API. The hosted version is convenient; technically capable users can install the same software on a server they control for free.',
      },
      {
        type: 'paragraph',
        content: 'Self-hosting is not the same as effortless privacy. The operator becomes responsible for updates, authentication, backups, network exposure, and server security. Monica itself says nothing online is ever completely safe and presents self-hosting as an option for people who want additional control. Kith avoids server administration by staying local in its current design, but currently gives up web access and cross-platform reach.',
      },
      {
        type: 'h2',
        content: 'Covve focuses more strongly on professional networking',
      },
      {
        type: 'paragraph',
        content: 'Covve’s personal CRM page emphasizes smart reminders when someone is losing touch, people-centered notes and interactions, curated news about contacts, and relationship analytics. Its broader product also covers card scanning, exports, and CRM integrations. Those features suit business development and professional networking, where timely context and network health are explicit goals.',
      },
      {
        type: 'paragraph',
        content: "For a professional network, analytics and connected context can save useful preparation time. For friends and family, you may prefer a smaller record you maintain deliberately. Kith takes the latter approach, with adjustable cadence and local preparation for a call or message. The choice is about how you want to remember and act, not a claim that one app makes you a better friend.",
      },
      {
        type: 'h2',
        content: "Prepare the message, then make it yours",
      },
      {
        type: 'paragraph',
        content: "Kith’s on-device helpers can organize a brain dump into facts, recap what you saved, suggest talking points or gift ideas, and draft a message. You review and edit the wording before a system handoff; sending remains your action. The useful part is having context at hand when you sit down to reach out. A draft still needs your voice and your judgment about what is appropriate.",
      },
      {
        type: 'h2',
        content: "Choose the kind of relationship record you want",
      },
      {
        type: 'list',
        content: [
          'KITH: Designed for circles, adjustable cadence, a non-punitive Warmth Ring, private on-device helpers, and Apple-system shortcuts. It remains pre-release.',
          'HIPPO TRADEOFF: A released no-account Apple personal CRM with local records and optional iCloud, but without Kith’s circle-and-warmth interaction model.',
          'DEX TRADEOFF: Automatic professional context from connected email, calendar, social, and messaging services requires an account-based platform.',
          'MONICA TRADEOFF: Open source, web access, extensive personal fields, API automation, and self-hosting add operator responsibility.',
          'COVVE TRADEOFF: Professional reminders, contact intelligence, card capture, exports, and network analytics use a professional service model.',
        ],
      },
      {
        type: 'faq',
        content: [
          { question: 'Is Kith a CRM for sales leads?', answer: 'No. Kith is designed as a private relationship manager for friends, family, and other people the user cares about. It has no deal stages, lead value, conversion funnel, bulk outreach, or displayed friendship grade in the current design.' },
          { question: 'Does Kith read my texts, email, or social accounts automatically?', answer: 'No such automatic ingestion is part of the current product description. People and context are added deliberately through the app and system-supported pickers or actions. That is less automated than Dex and some professional personal CRMs.' },
          {
            "question": "Does Kith require Apple Intelligence?",
            "answer": "Yes. Kith’s current build requires an iPhone 15 Pro or later with iOS 26 and Apple Intelligence enabled. Recaps, talking points, drafts, and other local helpers are part of its core workflow."
          },
          { question: 'Can a reminder app improve loneliness or mental health?', answer: 'No product-specific evidence supports that claim here. Social connection is important, but a reminder app is not healthcare or therapy and cannot determine relationship quality. Anyone in distress should seek appropriate human or professional support.' },
        ],
      },
      {
        type: 'sources',
        content: [
          'Hippo official site|https://gethippo.app/',
          'Hippo App Store listing|https://apps.apple.com/us/app/hippo-personal-crm/id1458330948',
          'Dex: Dex vs Clay personal CRM comparison|https://blog2.getdex.com/blog/dex-vs-clay/',
          'Dex: Personal CRM tools with email and calendar integrations|https://blog2.getdex.com/blog/personal-crm-email-calendar-integration/',
          'Monica features|https://www.monicahq.com/features',
          'Monica pricing and self-hosting|https://www.monicahq.com/pricing',
          'Covve Personal CRM|https://covve.com/personal-crm',
          'Covve pricing|https://covve.com/pricing',
          'Apple Foundation Models framework|https://developer.apple.com/documentation/FoundationModels',
          'US Surgeon General: Social Connection|https://www.hhs.gov/surgeongeneral/reports-and-publications/connection/index.html',
          'US Surgeon General: Recommendations for social connection|https://www.hhs.gov/surgeongeneral/reports-and-publications/connection/resources/index.html',
        ],
      },
      {
        type: 'cta',
        content: "Explore Kith’s saved context, reminders, and message preparation. It is being built to make the next call or text easier to begin with something that matters to the person.",
        ctaAppId: 'kith',
      },
    ],
  },
  {
    id: 'best-relationship-reminder-apps-friends-family',
    title: "Five Apps for Remembering Conversations and Keeping in Touch",
    seoTitle: "Five Apps for Remembering Conversations and Keeping in Touch",
    date: '2026.07.11',
    modified: "2026.09.28",
    readTime: "7 MIN READ",
    category: 'RELATIONSHIP APP LIST',
    tags: ['#KEEP-IN-TOUCH', '#RELATIONSHIP-REMINDER', '#PERSONAL-CRM', '#PRIVACY'],
    excerpt: "Compare Kith, Hippo, Monica, Dex, and Covve by the context you want to remember, the reminders you need, and the accounts you are willing to connect.",
    contentType: 'listicle',
    appId: 'kith',
    searchIntent: 'What app can remind me to stay in touch with friends and family and remember important details about them?',
    keyTakeaways: [
      "Kith connects deliberate notes with the next interaction, using local recaps, talking points, and editable drafts. It remains in development.",
      "You control Kith’s cadence and snoozes; the app hands off messages for you to send and can prompt a log when you return.",
      "Decide whether you want a small personal notebook or automated professional context. That choice determines how many services you need to connect."
    ],
    relatedIds: ['kith-vs-personal-crm-apps', 'apple-ecosystem-privacy', 'offline-ai-revolution'],
    listItems: [
      { name: 'Kith · pre-release', description: "Saved context, flexible reminders, and local help preparing the next call or message. In development." },
      { name: 'Hippo', description: 'A no-account relationship memory for iPhone, iPad, and Mac with optional iCloud.' },
      { name: 'Monica', description: 'Open-source personal CRM fields, web access, and optional self-hosting.' },
      { name: 'Dex', description: 'Professional relationships connected across email, calendars, LinkedIn, and messaging services.' },
      { name: 'Covve', description: 'Professional reminders, contact news, card capture, and network analytics.' },
    ],
    blocks: [
      {
        type: 'answer',
        title: "Choose what you want beside the reminder",
        content: "Kith is being built for a reminder with personal context: what you last saved about someone, a recap or talking point, and an editable draft when you need a start. Hippo offers a released Apple notebook, Monica a detailed open-source record, and Dex and Covve more connected professional tools. A calendar reminder may be enough if all you need is the date. Choose a relationship app when the remembered detail would help you follow through.",
      },
      {
        "type": "callout",
        "title": "About this selection",
        "content": "These apps offer different kinds of memory and follow-up support. Kith is our app and is not yet available. Competitor features were checked against the linked sources in July 2026.",
        "variant": "note"
      },
      {
        type: 'paragraph',
        content: "A date is easy to put in a calendar. The details around it are easier to lose: a friend’s new job, a difficult move, the book they wanted to tell you about. A relationship app earns its place when it brings those details back at a useful moment. The five options here differ in how you save that context and what they help you do with it.",
      },
      {
        type: 'comparison',
        caption: 'Five relationship tools with different definitions of helpful',
        columns: [
          "App",
          "Best for",
          "Reminder and context model",
          "Tradeoff"
        ],
        rows: [
          { label: 'Kith', cells: [
            "Saved context and help preparing a call or message on iPhone.",
            "Adjustable cadence, important dates, recaps, talking points, and drafts you choose whether to send.",
            "In development. Requires Apple Intelligence; records are local, with no app-managed cloud sync."
          ] },
          { label: 'Hippo', cells: ['Private Apple relationship memory.', 'Notes, events, to-dos, person-to-person links, calendar context, and reminders.', 'Apple-only; optional iCloud rather than broad email or social ingestion.'] },
          { label: 'Monica', cells: ['Open-source depth and self-hosting.', 'Family links, life details, calls, dates, gifts, journal, reminders, and API.', 'Web/server workflow; self-hosters maintain security and backups themselves.'] },
          { label: 'Dex', cells: ['Professional network automation.', 'Connected interaction history, keep-in-touch reminders, AI summaries, and cross-platform access.', 'Requires trusting and managing connected account data; professional orientation.'] },
          { label: 'Covve', cells: ['Mobile professional networking.', 'Smart reminders, contact notes, curated news, analytics, scanning, and exports.', 'Professional features and pricing may exceed a friends-and-family use case.'] },
        ],
      },
      {
        type: 'h2',
        content: "1. Kith: saved context for the next call or message",
      },
      {
        type: 'paragraph',
        content: "Kith’s current iPhone build organizes people into circles and lets you set the pace of reminders. The Today view respects snoozes, gives pinned people priority, and keeps upcoming dates visible separately. Open a person before reaching out to see the context you saved, then use a recap, talking point, or editable draft if it helps. After a message handoff, a prompt helps you record the interaction.",
      },
      {
        type: 'paragraph',
        content: "Kith performs its helpers on-device and stores records locally, with no app-managed cloud sync in the current build. It requires Apple Intelligence at launch. JSON export includes record data, but excludes photos and does not restore the complete app archive. Kith remains in development.",
      },
      {
        type: 'paragraph',
        content: "You decide when to reach out and what to send. The Warmth Ring reflects time against your chosen cadence, not how well a relationship is doing. Keep reminders flexible enough to fit the people they are meant to help you remember.",
      },
      {
        type: 'h2',
        content: '2. Hippo: private relationship memory on Apple devices',
      },
      {
        type: 'paragraph',
        content: 'Hippo is a focused personal CRM for remembering details about friends, family, and colleagues. Its current app supports notes, events, reminders, calendar imports, and explicit links between people such as partners, siblings, colleagues, and mentors. The developer says no account or broad Contacts access is required and that the personal database stays on the device, with optional sync through the user’s own private iCloud Drive.',
      },
      {
        type: 'paragraph',
        content: 'It runs natively on iPhone, iPad, and Mac. The current official price is $14.99 per year or $29.99 for lifetime access after the trial, while the App Store listing describes a limited free start. Its released, relatively simple private memory model does not ingest professional communication automatically.',
      },
      {
        type: 'h2',
        content: '3. Monica: open source, detailed life context, and self-hosting',
      },
      {
        type: 'paragraph',
        content: 'Monica stores the kind of details that make a personal CRM genuinely personal: significant others, children, pets, contact methods, private notes, calls, future reminders, birthdays, gifts, money owed, interactions, and journal entries. It can be accessed through a hosted web service or installed on a server the user controls. Import, export, and a REST API support people who want to automate or migrate the archive.',
      },
      {
        type: 'paragraph',
        content: 'The hosted version currently costs $9 per month or $90 per year, and a restricted free tier includes ten contacts. Self-hosting the open-source version is free but shifts responsibility for software updates, server security, authentication, backups, and uptime to the operator. That control and field depth come with more operational responsibility than a native mobile-first experience.',
      },
      {
        type: 'h2',
        content: '4. Dex: an integration-heavy professional network',
      },
      {
        type: 'paragraph',
        content: 'Dex focuses on the person whose network already lives in email, calendars, LinkedIn, messaging, and other connected tools. Its first-party 2026 content describes synchronized interaction history, keep-in-touch reminders, AI-generated context, mobile and web access, and plans oriented toward different levels of professional integration. That can prevent a consultant or founder from manually recreating a conversation timeline.',
      },
      {
        type: 'paragraph',
        content: 'The same automation is unnecessary for someone who only wants to call a sibling monthly and remember a friend’s new job. Dex’s current official comparison advertises a $12-per-month plan billed annually, with higher professional capability described separately. Examine every connected service, permission, retention rule, export, and deletion control rather than treating automatic context as free of privacy tradeoffs.',
      },
      {
        type: 'h2',
        content: '5. Covve: professional reminders and contact intelligence',
      },
      {
        type: 'paragraph',
        content: 'Covve combines smart reminders, notes, interaction history, curated contact news, and relationship analytics. Its broader plans include scanning, exports, integrations, and team-oriented features. That makes it relevant when “stay in touch” means arriving at a professional conversation with current context and measuring whether a business network is being maintained.',
      },
      {
        type: 'paragraph',
        content: 'Covve’s current pricing page advertises a Starter plan at $12 per month or $119 per year, but the site spans scanning, personal CRM, and team products; confirm that the plan includes the features you expect. For friends and family, decide whether news and analytics feel helpful or make the relationship feel performative. More intelligence is not automatically more humane.',
      },
      {
        type: 'h2',
        content: "Start with a few people you already mean to contact",
      },
      {
        type: 'list',
        content: [
          'Track only the people and context that genuinely help you show up with care; do not import an entire address book by default.',
          'Use a cadence as a flexible prompt, not an obligation or definition of closeness.',
          'Store sensitive facts about another person sparingly and with the same respect you would expect for your own private information.',
          'Review every generated message and rewrite it in your own voice before sending anything.',
          'Snooze or remove reminders when contact would be intrusive, unsafe, one-sided, or simply unnecessary.',
          'Export or delete test records before committing important personal history to any platform.',
          'Read current privacy terms for integrations, backups, analytics, and AI, not only the marketing headline.',
        ],
      },
      {
        type: 'faq',
        content: [
          {
            "question": "What does Kith add to a calendar reminder?",
            "answer": "Kith is being built to bring saved context to the reminder: a recap, talking point, or editable draft before the call or message. You choose when and what to send. If a date is all you need, a calendar reminder may be sufficient."
          },
          { question: 'What is a personal CRM?', answer: 'It is a private contact-and-context system for remembering interactions, important dates, follow-ups, and details about people. Unlike a business CRM, a personal CRM does not need deals, revenue stages, bulk outreach, or lead scoring.' },
          { question: 'Is it ethical to keep notes about friends?', answer: 'It depends on what is stored and how it is used. Keep only context that supports respectful follow-through, protect the device or service, avoid secrets or sensitive judgments, and delete information that would feel invasive if the person saw it.' },
          { question: 'Can AI write a thoughtful message for me?', answer: 'It can suggest a starting draft from supplied context, but it cannot know the full relationship or guarantee an appropriate tone. Verify every fact, remove presumptions, and rewrite the message so it reflects your actual intent.' },
        ],
      },
      {
        type: 'sources',
        content: [
          'Hippo official site|https://gethippo.app/',
          'Hippo App Store listing|https://apps.apple.com/us/app/hippo-personal-crm/id1458330948',
          'Monica features|https://www.monicahq.com/features',
          'Monica pricing and self-hosting|https://www.monicahq.com/pricing',
          'Dex: Dex vs Clay personal CRM comparison|https://blog2.getdex.com/blog/dex-vs-clay/',
          'Dex: Personal CRM tools with email and calendar integrations|https://blog2.getdex.com/blog/personal-crm-email-calendar-integration/',
          'Covve Personal CRM|https://covve.com/personal-crm',
          'Covve pricing|https://covve.com/pricing',
          'Apple Foundation Models framework|https://developer.apple.com/documentation/FoundationModels',
          'Apple: Meet the Foundation Models framework|https://developer.apple.com/videos/play/wwdc2025/286/',
          'US Surgeon General: Social Connection|https://www.hhs.gov/surgeongeneral/reports-and-publications/connection/index.html',
          'US Surgeon General: Recommendations for social connection|https://www.hhs.gov/surgeongeneral/reports-and-publications/connection/resources/index.html',
        ],
      },
      {
        type: 'cta',
        content: "See how Kith carries remembered details into the next conversation. Follow its development if your reminders have the date but not the context.",
        ctaAppId: 'kith',
      },
    ],
  },
];
