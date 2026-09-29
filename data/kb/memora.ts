import { KnowledgeBase } from "../../types";

export const memoraKb: KnowledgeBase = {
  appId: "memora",
  appName: "Memora",
  accent: "#6fa8ff",
  status: "ready",
  intro:
    "Learn to make flashcards from notes, PDFs, and photos, review them with FSRS, and import an existing deck.",
  categories: [
    {
      id: "getting-started",
      title: "Getting started",
      description: "Create your first deck, find the main screens, and check the free limits.",
      icon: "book",
    },
    {
      id: "generating",
      title: "Making cards",
      description: "Make cards from notes, PDFs, or photos, choose drafts to save, and use different card types.",
      icon: "sparkles",
    },
    {
      id: "studying",
      title: "Studying",
      description: "Sessions, the four grades, undo, hints, practice ahead, and the other study modes.",
      icon: "brain",
    },
    {
      id: "scheduling",
      title: "FSRS and scheduling",
      description: "How spaced repetition schedules cards and how to adjust your review queue.",
      icon: "calendar-clock",
    },
    {
      id: "importing",
      title: "Importing and sharing",
      description: "Import existing cards, share a deck, and export library content and images.",
      icon: "share",
    },
    {
      id: "devices",
      title: "Widgets and shortcuts",
      description: "Widgets, Live Activities, Siri, Spotlight, Control Center, and reminders.",
      icon: "smartphone",
    },
    {
      id: "privacy",
      title: "Privacy and your data",
      description: "Learn where decks are stored and what is included when you share or export them.",
      icon: "lock",
    },
    {
      id: "billing",
      title: "Plans and billing",
      description: "Check free limits, compare Plus features, and restore a purchase.",
      icon: "star",
    },
  ],
  articles: [
    /* ── Getting started ──────────────────────────────────────────────── */
    {
      id: "welcome-to-memora",
      title: "Welcome to Memora",
      description: "An introduction to making cards, reviewing them, and finding your way around Memora.",
      category: "getting-started",
      keywords: ["welcome", "about", "flashcards", "study", "intro", "screens", "private"],
      updated: "2026-09-28",
      blocks: [
        {
          type: "paragraph",
          content:
            "Memora turns material you already have into flashcards, then schedules them so each card comes back at roughly the moment you would otherwise forget it.",
        },
        {
          type: "paragraph",
          content:
            "Two things are deliberately not negotiable. Generation happens on your iPhone, so your notes are not uploaded to a study platform. And FSRS, the scheduling algorithm that makes the whole thing work, is free for everyone. Charging for the algorithm would be charging for the point.",
        },
        {
          type: "heading",
          level: 2,
          content: "The four screens",
        },
        {
          type: "list",
          items: [
            "Study: what is due today, and your decks.",
            "Progress: streak, due counts, mature cards, and review history.",
            "Settings: study limits, reminders, import and export, your plan, and privacy.",
            "Generate, reached from a deck or the home screen, is where new cards come from.",
          ],
        },
        {
          type: "callout",
          variant: "privacy",
          title: "No account",
          content:
            "There is nothing to sign up for and no analytics SDK. Decks, generation, OCR, and your review history all live on the device.",
        },
      ],
      related: ["your-first-deck", "generate-from-notes", "where-decks-live"],
    },
    {
      id: "your-first-deck",
      title: "Your first deck",
      description: "Generate card drafts from your notes, review them, save a deck, and begin studying.",
      category: "getting-started",
      keywords: ["first", "deck", "start", "onboarding", "create", "tutorial"],
      updated: "2026-09-28",
      blocks: [
        {
          type: "paragraph",
          content:
            "During setup, paste a short passage from your notes and tap Make my flashcards. Review the proposed cards against your notes, then save them as your first deck. You can edit cards after they have been saved.",
        },
        {
          type: "steps",
          items: [
            { title: "Paste your notes", description: "Use a short paragraph or definition list. Keep the original notes available so you can check the cards." },
            { title: "Generate", description: "Read the proposed questions and answers, and check that they match the material you pasted." },
            { title: "Save as My First Deck", description: "Choose to save the generated cards as My First Deck. Open the saved deck if you need to edit a card." },
            { title: "Study it", description: "Reveal each answer and choose Again, Hard, Good, or Easy based on your recall. The interval preview shows when each choice would bring the card back." },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Coming from another app?",
          content:
            "You can also open the importer during setup. Import is free; check the import guide for supported Anki, Quizlet, and CSV formats and their limits.",
        },
      ],
      related: ["generate-from-notes", "import-from-anki", "study-session"],
    },

    /* ── Generating ───────────────────────────────────────────────────── */
    {
      id: "generate-from-notes",
      title: "Making cards from notes, PDFs and photos",
      description: "Prepare notes, a PDF, or a photo for generation and check the supported formats.",
      category: "generating",
      keywords: ["generate", "notes", "pdf", "photo", "ocr", "scan", "text", "import"],
      updated: "2026-09-28",
      blocks: [
        {
          type: "paragraph",
          content:
            "The Notes, PDF, and Photo modes create draft cards from material you provide. Generation uses a bounded excerpt of up to 4,000 characters and can propose up to 12 cards at a time. Similar mode is different: it asks for new cards on a topic inferred from examples. Check any generated card before studying it.",
        },
        {
          type: "heading",
          level: 2,
          content: "The three inputs",
        },
        {
          type: "list",
          items: [
            "Typed or pasted notes. The most reliable input, because you control what goes in.",
            "PDFs with an embedded text layer, read with PDFKit.",
            "Photos and camera-scanned pages use on-device Vision OCR. Check the recognized text; unclear text or handwriting may not be read correctly.",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "A scanned PDF is not the same as a text PDF",
          content:
            "If a PDF is really a stack of images with no text layer, Memora cannot read it as a document. Photograph or screenshot the pages instead and use the photo path, which does run OCR.",
        },
        {
          type: "paragraph",
          content:
            "Drafts start selected. Review them, deselect the ones you do not want, then add the selected batch. You can edit the saved cards in the deck.",
        },
      ],
      related: ["the-review-gate", "apple-intelligence-requirement", "card-types"],
    },
    {
      id: "the-review-gate",
      title: "Choosing which generated cards to keep",
      description: "Review the proposed cards, choose which to add, then edit saved cards.",
      category: "generating",
      keywords: ["review", "draft", "approve", "edit", "discard", "gate", "quality"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Generated cards arrive as selected drafts. Read the front and back, deselect unwanted cards, then add the selected batch. The review screen does not edit draft text; open a saved card in the deck to change it.",
        },
        {
          type: "paragraph",
          content:
            "This is not a safety formality. Deciding what deserves to be a card is a meaningful part of learning the material, and skipping it produces decks full of cards you never understood in the first place.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Discard freely",
          content:
            "Keep the cards that match what you need to learn. Leave weak or irrelevant drafts unselected, and check important facts against your original material.",
        },
      ],
      related: ["generate-from-notes", "card-types", "study-session"],
    },
    {
      id: "card-types",
      title: "Card types, cloze and image occlusion",
      description: "Basic cards, fill-in-the-blank, and hiding labels on a diagram.",
      category: "generating",
      keywords: ["cloze", "basic", "image occlusion", "diagram", "labels", "card types", "edit"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Memora supports basic question-and-answer cards, cloze cards where part of a sentence is hidden, and image occlusion for diagrams.",
        },
        {
          type: "heading",
          level: 2,
          content: "Image occlusion",
        },
        {
          type: "paragraph",
          content:
            "Drop in a diagram and hide the labels. Masks can be dragged to move and grabbed at the corners to resize. The base image is only re-encoded when you actually replace it, so repeated edits do not slowly degrade it.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Plus can find the labels for you",
          content:
            "Automatic label detection is a Plus feature, and running it again on the same image will not create duplicate masks. Placing masks by hand is free.",
        },
        {
          type: "paragraph",
          content:
            "Every card, however it was created, can be edited, paused, or deleted later. Decks also have an accent colour and an SF Symbol so they are recognisable at a glance.",
        },
      ],
      related: ["the-review-gate", "organise-decks", "study-session"],
    },
    {
      id: "apple-intelligence-requirement",
      title: "Why Memora requires Apple Intelligence",
      description: "Check device requirements and what to do when Apple Intelligence is unavailable.",
      category: "generating",
      keywords: ["apple intelligence", "requirement", "gate", "unsupported", "compatibility", "older iphone", "settings"],
      updated: "2026-09-28",
      blocks: [
        {
          type: "paragraph",
          content:
            "Memora requires an Apple Intelligence-capable iPhone with iOS 26. Unsupported hardware is blocked. On eligible hardware, the app can continue after an advisory while Apple Intelligence is off or its model is unavailable.",
        },
        {
          type: "heading",
          level: 2,
          content: "What you need",
        },
        {
          type: "paragraph",
          content:
            "An Apple Intelligence-compatible iPhone running the required iOS version, with Apple Intelligence enabled and its model ready. See the product page for the operating-system requirement.",
        },
        {
          type: "heading",
          level: 2,
          content: "What you might see",
        },
        {
          type: "list",
          items: [
            "Hardware that cannot run Apple Intelligence: a full-screen explanation instead of the app. This one is an honest dead end.",
            "Apple Intelligence off on eligible hardware: an advisory with a path to Settings and an option to continue.",
            "The model downloading on eligible hardware: continue with manual cards, imports, and study while setup finishes.",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Why the check happens at launch",
          content:
            "Memora checks hardware and model readiness separately. Manual study and imported cards do not require a live model. Source-to-card generation has a deterministic fallback; Similar mode and Tutor need the model.",
        },
        {
          type: "heading",
          level: 2,
          content: "Why not a lesser version instead",
        },
        {
          type: "paragraph",
          content:
            "Manual cards and FSRS study are free. On eligible hardware, source-to-card generation has a deterministic fallback when the local model is unavailable. Similar mode and Tutor require the model.",
        },
      ],
      related: ["generate-from-notes", "study-hints", "compare-free-and-plus"],
    },

    /* ── Studying ─────────────────────────────────────────────────────── */
    {
      id: "study-session",
      title: "A study session, start to finish",
      description: "Reveal and rate cards, edit a saved card, undo a rating, and review your session summary.",
      category: "studying",
      keywords: ["study", "session", "review", "grade", "again", "hard", "good", "easy", "undo"],
      updated: "2026-09-28",
      blocks: [
        {
          type: "paragraph",
          content:
            "Tap a deck, study, and see the front of a card. Try to recall the answer before revealing it. The effort of failing to remember is most of the value.",
        },
        {
          type: "steps",
          items: [
            { title: "Reveal", description: "Tap, or flick. The answer appears along with the next interval each grade would produce." },
            { title: "Rate honestly", description: "Choose Again, Hard, Good, or Easy to match how well you recalled the answer. Your rating affects when the card returns." },
            { title: "Fix things in place", description: "Spotted a typo? Edit the card without leaving the session. You can also pause a card you are not ready for." },
            { title: "Finish", description: "A completion summary shows cards reviewed, recall percentage, and time spent." },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "One-tap undo",
          content:
            "Mis-tapped a grade? Undo it immediately. A wrong rating quietly distorts a card's schedule for weeks, so fixing it straight away is worth the second.",
        },
        {
          type: "paragraph",
          content:
            "Cards you rate Again come back within the same session, which is what relearning means. If you have to leave, a mid-session snapshot survives a force-quit and Memora offers to finish the session for up to half a day.",
        },
      ],
      related: ["study-hints", "practice-ahead", "how-fsrs-works"],
    },
    {
      id: "study-hints",
      title: "Hints and Why? explanations",
      description: "A nudge that does not give it away, and an explanation grounded in the card.",
      category: "studying",
      keywords: ["hint", "why", "explanation", "help", "stuck", "reveal"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Stuck on a card before revealing it? The Hint button writes a nudge that points you at the answer without handing it over. If the model cannot complete the request, it falls back to a first-letters hint, which is genuinely useful more often than it sounds.",
        },
        {
          type: "paragraph",
          content:
            "After you reveal, Why? explains the answer, grounded strictly in the card itself rather than wandering off into general knowledge.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Both are free",
          content:
            "Hints and explanations are free and entirely on-device. They are the study aids most likely to keep someone from abandoning a hard deck, so they are not behind the paywall.",
        },
      ],
      related: ["study-session", "apple-intelligence-requirement", "other-study-modes"],
    },
    {
      id: "practice-ahead",
      title: "When the queue is empty",
      description: "Use Practice Ahead for an extra session when no cards are due for review.",
      category: "studying",
      keywords: ["practice ahead", "empty", "queue", "early", "no cards due", "reschedule"],
      updated: "2026-09-28",
      blocks: [
        {
          type: "paragraph",
          content:
            "An empty queue is technically the correct answer and a terrible experience the night before an exam. So Memora lets you practice ahead: it pulls upcoming cards, soonest first, capped at a sensible number.",
        },
        {
          type: "callout",
          variant: "info",
          title: "FSRS reschedules from now",
          content:
            "Cards you study early are rescheduled from the moment you reviewed them, so practising ahead does not corrupt the algorithm's model of your memory.",
        },
      ],
      related: ["study-session", "how-fsrs-works", "daily-limits"],
    },
    {
      id: "other-study-modes",
      title: "Match, Listen, tests and the tutor",
      description: "Match, Listen, practice tests, and the deck tutor: other ways to retrieve the same material.",
      category: "studying",
      keywords: ["match", "listen", "test", "quiz", "tutor", "practice test", "modes"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Spaced repetition is the backbone, but variety helps, particularly when you are bored of your own deck.",
        },
        {
          type: "list",
          items: [
            "Match: pair prompts and answers against the clock.",
            "Listen: hear the card rather than read it.",
            "Practice tests: a set of questions in one sitting with a result at the end.",
            "The deck tutor: ask questions about the deck, grounded strictly in its cards.",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "What needs what",
          content:
            "Practice tests and the tutor are Plus features, and the tutor also requires Apple Intelligence. The paywall never advertises model-powered perks on a device that cannot run them.",
        },
      ],
      related: ["study-session", "compare-free-and-plus", "apple-intelligence-requirement"],
    },

    /* ── Scheduling ───────────────────────────────────────────────────── */
    {
      id: "how-fsrs-works",
      title: "What FSRS actually does",
      description: "How your recall ratings affect the date of the next review.",
      category: "scheduling",
      keywords: ["fsrs", "spaced repetition", "algorithm", "interval", "stability", "difficulty", "memory"],
      updated: "2026-09-28",
      blocks: [
        {
          type: "paragraph",
          content:
            "FSRS models two things about each card: how hard it is for you, and how long the memory currently lasts. Every time you rate a card, both are updated, and the next review is scheduled for roughly the point where you would be about to forget it.",
        },
        {
          type: "paragraph",
          content:
            "That is why intervals grow so fast. A card you keep getting right does not need daily attention, and reviewing it daily is wasted effort that crowds out cards you are actually failing.",
        },
        {
          type: "heading",
          level: 2,
          content: "What the four grades mean",
        },
        {
          type: "list",
          items: [
            "Again: you did not recall it. The card comes back in this session.",
            "Hard: you got there, but it was a struggle. Shorter interval than Good.",
            "Good: recalled with normal effort. This is the honest default.",
            "Easy: instant and effortless. Use it sparingly, or intervals overshoot.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Memora shows the interval before you choose",
          content:
            "Each grade displays the next interval it would produce. Watching that number react is the fastest way to develop an intuition for honest rating.",
        },
        {
          type: "paragraph",
          content:
            "FSRS is free on every card. Custom FSRS tuning is a Plus feature for people who want to adjust the parameters.",
        },
      ],
      related: ["study-session", "daily-limits", "practice-ahead"],
    },
    {
      id: "daily-limits",
      title: "New-card limits and taming a backlog",
      description: "Set a daily new-card limit and work through cards waiting for review.",
      category: "scheduling",
      keywords: ["limit", "new cards", "backlog", "daily", "queue", "overwhelm", "settings"],
      updated: "2026-09-28",
      blocks: [
        {
          type: "paragraph",
          content:
            "Settings has a per-day new-card limit, and it shapes the queue across all your decks rather than per deck. It is the single most useful control in the app.",
        },
        {
          type: "paragraph",
          content:
            "Every new card you introduce today becomes reviews for weeks. Introducing two hundred in one evening is how people end up with an eight-hundred-card day and quit.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "If you are already buried",
          content:
            "Set new cards to zero for a week and just clear reviews. The backlog shrinks quickly once you stop adding to it.",
        },
        {
          type: "paragraph",
          content:
            "You can also pause individual cards, and sort or filter a deck by due, new, or paused to see exactly what is coming.",
        },
      ],
      related: ["how-fsrs-works", "organise-decks", "study-session"],
    },
    {
      id: "organise-decks",
      title: "Organising decks and folders",
      description: "Search, sort, filter, and folders that appear only when you need them.",
      category: "scheduling",
      keywords: ["deck", "folder", "organise", "sort", "filter", "search", "pause"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Decks carry an accent colour and an SF Symbol so you can pick one out at a glance. Inside a deck you can search cards, sort by added, due, or alphabetical, and filter by due, new, or paused.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Folders stay out of the way",
          content:
            "Folders only appear once you use them. A small library stays flat, because organising six decks into a hierarchy is procrastination with extra steps.",
        },
      ],
      related: ["daily-limits", "card-types", "import-from-anki"],
    },

    /* ── Importing ────────────────────────────────────────────────────── */
    {
      id: "import-from-anki",
      title: "Importing from Anki, Quizlet, or a spreadsheet",
      description: "Three formats, all free, with cloze converted for you.",
      category: "importing",
      keywords: ["anki", "apkg", "quizlet", "csv", "tsv", "import", "migrate", "switch"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Imports are always free. Charging someone to bring in the decks they already made would be a strange way to earn trust.",
        },
        {
          type: "list",
          items: [
            "Compatible Anki .apkg text decks using legacy .anki2 or .anki21 collections. Media is not imported; newer .anki21b collections are not supported.",
            "Quizlet and Anki text exports.",
            "Any CSV or TSV from a spreadsheet.",
          ],
        },
        {
          type: "steps",
          items: [
            { title: "Get the file onto your iPhone", description: "AirDrop, Files, or Mail all work. Memora registers the document types, so tapping the file opens the importer directly." },
            { title: "Review what was found", description: "Memora shows what it parsed before writing anything." },
            { title: "Import", description: "Cards land in a deck you choose, and cloze cards keep their blanks." },
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "One Anki export format needs a checkbox",
          content:
            "If Memora rejects a newer Anki package, export it using Anki’s compatibility option. The importer accepts legacy .anki2 and .anki21 collections inside .apkg files, not .anki21b. Images and audio are not carried over.",
        },
        {
          type: "paragraph",
          content:
            "Memora is compatible with Anki files. It is not affiliated with Anki or Quizlet in any way.",
        },
      ],
      related: ["share-a-deck", "backup-library", "organise-decks"],
    },
    {
      id: "share-a-deck",
      title: "Sharing a deck",
      description: "Check which card content is shared and which study records remain private.",
      category: "importing",
      keywords: ["share", "deck", "send", "classmate", "export", "qr", "memora file"],
      updated: "2026-09-28",
      blocks: [
        {
          type: "paragraph",
          content:
            "You can share a deck as a .memora file. Small text-only decks can also travel as a QR code, which is faster than any file transfer when you are sitting next to someone.",
        },
        {
          type: "callout",
          variant: "privacy",
          title: "A share carries cards, not your learning record",
          content:
            "Review history, schedule, and streak data are excluded from the share format. The recipient gets the study content, not evidence of how badly you did on it.",
        },
      ],
      related: ["import-from-anki", "backup-library", "where-decks-live"],
    },
    {
      id: "backup-library",
      title: "Backing up your whole library",
      description: "Export deck content and images; review schedules and history are excluded.",
      category: "importing",
      keywords: ["backup", "export", "library", "restore", "memorabackup", "new phone", "files"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Settings has Export All Decks, which writes a .memorabackup file containing deck content and images. It does not include review history or FSRS scheduling. Re-imported cards start with a new study schedule.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "This is your backup",
          content:
            "Memora is local-first and does not currently offer iCloud deck sync, so there is no server copy to fall back on. If your study library matters, export it somewhere safe before you change phones.",
        },
        {
          type: "paragraph",
          content:
            "CSV export also round-trips cloze markers, so a spreadsheet stays a viable long-term archive.",
        },
      ],
      related: ["where-decks-live", "import-from-anki", "share-a-deck"],
    },

    /* ── Devices ──────────────────────────────────────────────────────── */
    {
      id: "widgets-and-siri",
      title: "Widgets, Siri, Spotlight and reminders",
      description: "Reaching a study session in one tap or one sentence.",
      category: "devices",
      keywords: ["widget", "lock screen", "standby", "siri", "shortcuts", "spotlight", "live activity", "reminder"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "list",
          items: [
            "Home Screen widgets in small and medium, Lock Screen widgets in circular, rectangular, and inline, and StandBy: due count, streak, and your top decks. Tap to jump straight into studying.",
            "A Live Activity showing study progress in the Dynamic Island.",
            "Siri and Shortcuts: quiz me on a deck, start studying, add a flashcard.",
            "Spotlight: decks are indexed, and a result deep-links into a session.",
            "A Control Center control for one-tap Study.",
            "A gentle daily review reminder, scheduled entirely on the device.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "The due-count widget is free",
          content:
            "Put it on your Lock Screen. Seeing the number is what makes the habit stick, and it does not require a subscription.",
        },
      ],
      related: ["compare-free-and-plus", "study-session", "daily-limits"],
    },

    /* ── Privacy ──────────────────────────────────────────────────────── */
    {
      id: "where-decks-live",
      title: "Does my study material leave my iPhone?",
      description: "Learn how Memora stores and processes study material, and what sharing or export includes.",
      category: "privacy",
      keywords: ["privacy", "upload", "server", "account", "analytics", "icloud", "data"],
      updated: "2026-09-28",
      blocks: [
        {
          type: "paragraph",
          content:
            "Decks, card generation, PDF text extraction, photo OCR, and your entire review history are local. There is no Memora account, no developer server, no analytics SDK, and no third-party data sharing.",
        },
        {
          type: "heading",
          level: 2,
          content: "The only ways material leaves",
        },
        {
          type: "list",
          items: [
            "You share a deck file or a QR deck, deliberately.",
            "You export a backup or a CSV to Files.",
            "App Store purchase verification, which is Apple, not us.",
            "A web link you choose to tap.",
          ],
        },
        {
          type: "callout",
          variant: "privacy",
          title: "There is no iCloud deck sync today",
          content:
            "That is a real limitation rather than a privacy feature to boast about: it also means no automatic backup. Use Export All Decks before switching phones.",
        },
      ],
      related: ["backup-library", "share-a-deck", "welcome-to-memora"],
    },

    /* ── Billing ──────────────────────────────────────────────────────── */
    {
      id: "compare-free-and-plus",
      title: "What is free and what Memora Plus adds",
      description: "Compare free allowances with Plus generation limits and study features.",
      category: "billing",
      keywords: ["free", "plus", "price", "subscription", "limit", "lifetime", "trial", "compare"],
      updated: "2026-09-28",
      blocks: [
        {
          type: "heading",
          level: 2,
          content: "Free",
        },
        {
          type: "list",
          items: [
            "Unlimited manual cards, and full FSRS on every card. The algorithm is never paywalled.",
            "Up to three decks.",
            "Around fifty AI-generated cards a month. Only real on-device model generations count against it.",
            "Around ten page scans a month.",
            "In-session hints and Why? explanations.",
            "All imports, CSV export, library backup, the due-count widget, and daily reminders.",
          ],
        },
        {
          type: "heading",
          level: 2,
          content: "Memora Plus",
        },
        {
          type: "list",
          items: [
            "Unlimited AI generation and unlimited decks.",
            "Practice tests and the deck tutor.",
            "Automatic label detection for image occlusion.",
            "Custom FSRS tuning and advanced stats, including review-history and rating charts.",
            "The full ecosystem surface of widgets and shortcuts.",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Pricing",
          content:
            "Memora Plus is seven days free, then $3.99 per month, $24.99 per year, or $49.99 once for lifetime access. Prices in the app always come from the App Store rather than being hard-coded. Memora is still in development, so final pricing is confirmed at release.",
        },
      ],
      related: ["restore-purchase", "apple-intelligence-requirement", "other-study-modes"],
    },
    {
      id: "restore-purchase",
      title: "Restoring a purchase",
      description: "Restore access to a purchase after reinstalling or moving to a new phone.",
      category: "billing",
      keywords: ["restore", "purchase", "reinstall", "new phone", "missing", "receipt"],
      updated: "2026-09-28",
      blocks: [
        {
          type: "paragraph",
          content:
            "There is no Memora account, so purchases live with your Apple Account.",
        },
        {
          type: "steps",
          items: [
            { title: "Check the Apple Account", description: "The device must be signed in with the account used for the purchase." },
            { title: "Open Settings in Memora", description: "Tap Restore Purchases." },
            { title: "Wait a moment", description: "The App Store checks your purchase and restores Plus access." },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Decks are separate from purchases",
          content:
            "Restoring a purchase does not restore decks, because decks were never on a server. Bring those back with your .memorabackup file.",
        },
      ],
      related: ["compare-free-and-plus", "backup-library"],
    },
  ],
};
