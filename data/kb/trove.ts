import { KnowledgeBase } from "../../types";

export const troveKb: KnowledgeBase = {
  appId: "trove",
  appName: "Trove",
  accent: "#d9a441",
  status: "ready",
  intro:
    "Guides for cataloguing a home without photographing everything one item at a time, tracking warranties, and preparing an insurance claim privately.",
  categories: [
    {
      id: "getting-started",
      title: "Getting started",
      description: "Your first room, the dashboard, and how much of your home to catalogue first.",
      icon: "compass",
    },
    {
      id: "capture",
      title: "Capturing what you own",
      description: "Room Scan, single-item capture, barcodes, serials, receipts, and duplicates.",
      icon: "scan",
    },
    {
      id: "organising",
      title: "Rooms, values and insights",
      description: "Organising by room and category, recorded value, and the documentation rings.",
      icon: "layers",
    },
    {
      id: "protection",
      title: "Warranties and insurance",
      description: "Expiry reminders, the coverage gap check, and the Claim Kit.",
      icon: "shield-check",
    },
    {
      id: "asking",
      title: "Ask Trove",
      description: "Questions about your own inventory, answered with real arithmetic.",
      icon: "message-circle",
    },
    {
      id: "devices",
      title: "Widgets, Siri and sync",
      description: "Widgets, Spotlight, Live Activities, multiple homes, and private iCloud sync.",
      icon: "smartphone",
    },
    {
      id: "privacy",
      title: "Privacy and backups",
      description: "Where the catalogue lives, why it matters here specifically, and how to back it up.",
      icon: "lock",
    },
    {
      id: "billing",
      title: "Plans and billing",
      description: "The free limits, what Trove Plus adds, and restoring a purchase.",
      icon: "star",
    },
  ],
  articles: [
    /* ── Getting started ──────────────────────────────────────────────── */
    {
      id: "welcome-to-trove",
      title: "Welcome to Trove",
      description: "What Trove is for, and why most home inventories never get finished.",
      category: "getting-started",
      keywords: ["welcome", "about", "home inventory", "insurance", "intro", "dashboard"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "A home inventory is the record you wish you had after a burglary, a flood, a move, or a warranty argument. Almost nobody has one, and it is not because the apps are bad. It is because nobody photographs two hundred objects one at a time.",
        },
        {
          type: "paragraph",
          content:
            "Trove attacks that directly. Photograph a whole room and it proposes every belonging it can recognise, which turns an evening's work into a few minutes.",
        },
        {
          type: "callout",
          variant: "privacy",
          title: "This data is worth protecting",
          content:
            "A photographed catalogue of everything you own, with serial numbers and values, is a burglar's shopping list. That is exactly why Trove keeps it on your device rather than on a server.",
        },
        {
          type: "paragraph",
          content:
            "The Home dashboard shows total recorded value, documentation rings per room, recent additions, and quick actions. Finishing a room closes a ring, which turns out to be a surprisingly effective reason to finish rooms.",
        },
      ],
      related: ["your-first-room", "room-scan", "where-the-catalogue-lives"],
    },
    {
      id: "your-first-room",
      title: "Cataloguing your first room",
      description: "Where to start, and what is actually worth recording.",
      category: "getting-started",
      keywords: ["first", "start", "room", "what to record", "tutorial", "setup"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Start with the room holding the most value, which for most homes is the living room or the home office. If you never catalogue another room, that one covers most of the risk.",
        },
        {
          type: "steps",
          items: [
            { title: "Create the room", description: "Name it the way you actually refer to it. Trove uses rooms for organisation, value breakdowns, and the documentation rings." },
            { title: "Run a Room Scan", description: "One photo of the room. Trove proposes the belongings it recognises, and you deselect what is not yours or not worth recording." },
            { title: "Fill in the expensive things properly", description: "For anything you would actually claim on, add the serial number, a receipt, and a value. Everything else can stay a photo and a name." },
            { title: "Move to the next room", description: "The rings tell you how documented each one is." },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "What insurers tend to want",
          content:
            "A photo, a description, a purchase date, a price or replacement estimate, and a serial number for anything with one. A receipt turns a claim from a negotiation into a formality.",
        },
      ],
      related: ["room-scan", "single-item-capture", "claim-kit"],
    },

    /* ── Capture ──────────────────────────────────────────────────────── */
    {
      id: "room-scan",
      title: "Room Scan",
      description: "One photo of a room, a grid of proposed belongings, and what makes it work well.",
      category: "capture",
      keywords: ["room scan", "scan", "photo", "bulk", "recognise", "review", "quantity"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Point the camera at a room and take one photo. Trove examines the whole frame and a grid of crops across it, classifies each region on the device, filters the results against a household vocabulary, and then names and values the room in a single pass.",
        },
        {
          type: "paragraph",
          content:
            "You get a review grid. Deselect anything that is not yours or not worth recording, edit values inline, and commit. Sets of identical objects, such as four dining chairs, collapse into one entry with a quantity.",
        },
        {
          type: "heading",
          level: 2,
          content: "Getting a better scan",
        },
        {
          type: "list",
          items: [
            "Stand back far enough to get the room in frame. Trove is looking for many things, not one thing.",
            "Good light. It is a camera; the usual rules apply.",
            "Two or three scans from different corners beat one heroic wide shot.",
            "Doors and drawers open if what is inside matters.",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "The vocabulary is deliberate",
          content:
            "Trove filters recognition results against a list of household belongings. A sofa and a television survive; a photo of your fruit bowl does not fill your inventory with produce.",
        },
      ],
      related: ["single-item-capture", "duplicate-warnings", "your-first-room"],
    },
    {
      id: "single-item-capture",
      title: "Capturing one item properly",
      description: "Labels, barcodes, serial numbers, and a confidence meter that means something.",
      category: "capture",
      keywords: ["capture", "item", "barcode", "serial", "label", "brand", "model", "confidence"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "For anything valuable, capture it individually. Photograph the item and then its label or barcode, and Trove reads the text and the code on the device and proposes brand, model, serial, category, and an estimated value.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "The confidence meter is honest",
          content:
            "It is grounded in the strength of the signals actually scanned. A barcode that passes its check digit scores differently from a guess made off a blurry photo, so a low score is a genuine prompt to check the field rather than decoration.",
        },
        {
          type: "paragraph",
          content:
            "Every field stays editable at review. Cameras, packaging, and models are all imperfect, and a serial number is exactly the field where a single wrong character matters.",
        },
        {
          type: "paragraph",
          content:
            "You can attach several photos per item, and add a receipt in one tap straight from the item without going through the editor.",
        },
      ],
      related: ["room-scan", "receipts", "duplicate-warnings"],
    },
    {
      id: "receipts",
      title: "Receipts and proof of purchase",
      description: "Photograph the receipt now, because the thermal paper will not survive.",
      category: "capture",
      keywords: ["receipt", "ocr", "proof", "purchase", "price", "date", "attach"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Photograph a receipt and Trove reads it on the device, using its structure to prefill merchant, date, and price rather than making you type them.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Do it the day the thing arrives",
          content:
            "Thermal receipts fade to blank within a couple of years. The receipt you photograph today is the one that will still exist when you need it.",
        },
        {
          type: "paragraph",
          content:
            "Receipts attach to items, so a claim, a warranty request, or a resale listing has its evidence in the same place as the record.",
        },
      ],
      related: ["single-item-capture", "warranty-reminders", "claim-kit"],
    },
    {
      id: "duplicate-warnings",
      title: "Duplicate warnings",
      description: "Trove asks before it lets you record the same television twice.",
      category: "capture",
      keywords: ["duplicate", "already", "same", "serial", "barcode", "warning"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "If a matching serial number, barcode, or name is already in your Trove, you get an Already in your Trove question with two clear options: Add Anyway, or View Existing.",
        },
        {
          type: "paragraph",
          content:
            "This runs in single capture and in Room Scan alike, which matters because scanning the same room twice from different angles is a completely reasonable thing to do.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Add Anyway is a real answer",
          content:
            "You might own two identical monitors. Trove asks rather than deciding, and identical objects can also be recorded as one entry with a quantity.",
        },
      ],
      related: ["room-scan", "single-item-capture", "value-and-insights"],
    },

    /* ── Organising ───────────────────────────────────────────────────── */
    {
      id: "value-and-insights",
      title: "Recorded value and insights",
      description: "Value by room and category, quantity-aware totals, and what the numbers are not.",
      category: "organising",
      keywords: ["value", "insights", "chart", "category", "room", "total", "quantity", "worth"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Insights shows your total recorded value, a value-by-category breakdown you can filter to all time, the last twelve months, or this year, and value-by-room rows that tap through into a filtered item list.",
        },
        {
          type: "paragraph",
          content:
            "Totals are quantity-aware, so three chairs at $120 each count as $360 rather than $120.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "These are your numbers, not an appraisal",
          content:
            "Trove records values you enter or confirm. It is not an appraiser, and it does not determine what an insurer will pay. Treat every figure as your own estimate.",
        },
      ],
      related: ["coverage-gap", "documentation-rings", "ask-trove"],
    },
    {
      id: "documentation-rings",
      title: "Documentation rings, streaks and the weekly recap",
      description: "Progress rings, streaks, and the weekly recap that make finishing a house feel achievable.",
      category: "organising",
      keywords: ["rings", "progress", "streak", "milestone", "recap", "weekly", "motivation"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Every room shows how documented it is as a ring. The dashboard adds documentation, protection, and insurance rings across the whole home.",
        },
        {
          type: "paragraph",
          content:
            "There is also a documenting streak, full-screen milestone moments, and an optional Sunday recap of what you protected that week.",
        },
        {
          type: "callout",
          variant: "info",
          title: "It is a progress bar, not a guilt trip",
          content:
            "The recap notification is optional. Cataloguing a house is a chore, and the rings exist to make finishing it feel achievable rather than to nag you about it.",
        },
      ],
      related: ["your-first-room", "value-and-insights", "widgets-and-siri"],
    },

    /* ── Protection ───────────────────────────────────────────────────── */
    {
      id: "warranty-reminders",
      title: "Warranty tracking and reminders",
      description: "A local notification thirty days before coverage lapses.",
      category: "protection",
      keywords: ["warranty", "expiry", "reminder", "notification", "coverage", "timeline", "expiring"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Record a warranty against an item and Trove schedules a local notification roughly thirty days before it expires, deep-linking straight to the item. That is enough time to actually book a repair, which is the entire point.",
        },
        {
          type: "paragraph",
          content:
            "The warranty view is an expiration timeline with search and an expiring-soon filter, so you can see what is running out without hunting through rooms.",
        },
        {
          type: "callout",
          variant: "privacy",
          title: "Scheduled on your phone",
          content:
            "Reminders are local notifications built from data already on the device. No push server is involved, so nobody learns what you own from your reminder schedule.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "The paperwork is still the authority",
          content:
            "Trove tracks the dates you enter. What a warranty actually covers is determined by the manufacturer or seller terms, not by this app.",
        },
      ],
      related: ["coverage-gap", "receipts", "claim-kit"],
    },
    {
      id: "coverage-gap",
      title: "The coverage gap check",
      description: "Enter your policy limit and find out whether you are actually covered.",
      category: "protection",
      keywords: ["insurance", "coverage", "policy", "limit", "underinsured", "gap", "personal property"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Enter your policy's personal-property limit and Trove compares it against your recorded value, then tells you whether you are covered or roughly by how much you are short.",
        },
        {
          type: "paragraph",
          content:
            "Underinsurance is the most common unpleasant surprise in a claim, and it is invisible until the claim happens. This is a two-minute check against a number you already have on your policy documents.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Not insurance advice",
          content:
            "This is arithmetic on the numbers you provided. Policy language, sub-limits, depreciation, and exclusions all affect real coverage. Talk to your insurer or broker about the actual policy.",
        },
      ],
      related: ["value-and-insights", "claim-kit", "warranty-reminders"],
    },
    {
      id: "claim-kit",
      title: "The Claim Kit and insurance exports",
      description: "An incident-specific report you can send, plus PDF and CSV of the whole catalogue.",
      category: "protection",
      keywords: ["claim", "kit", "pdf", "report", "csv", "export", "insurer", "incident", "theft"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "After something happens, the Claim Kit builds a report scoped to that incident: what happened, when, and the affected items with their photos, serials, values, and receipts.",
        },
        {
          type: "steps",
          items: [
            { title: "Describe the incident", description: "The type of loss and the date, plus an optional police or claim reference." },
            { title: "Select the affected items", description: "Pick from your catalogue. Values and evidence come along automatically." },
            { title: "Generate the report", description: "Trove produces a photo-illustrated PDF you can send to your insurer." },
          ],
        },
        {
          type: "paragraph",
          content:
            "You can also export the entire catalogue as a photo-illustrated PDF report or a CSV, and Trove can write inventory summaries for you.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "A good report is not an approved claim",
          content:
            "These exports make your case easy to read. They do not guarantee that an insurer accepts a valuation or approves a claim.",
        },
        {
          type: "paragraph",
          content: "The Claim Kit, PDF, and CSV exports are Trove Plus features.",
        },
      ],
      related: ["coverage-gap", "receipts", "compare-free-and-plus"],
    },

    /* ── Asking ───────────────────────────────────────────────────────── */
    {
      id: "ask-trove",
      title: "Asking Trove about your belongings",
      description: "Conversational questions answered with actual arithmetic, not a guess.",
      category: "asking",
      keywords: ["ask", "question", "chat", "search", "value", "room", "aggregation", "streaming"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Ask Trove things like which room is worth the most, what electronics do I own, or what did I buy last year. Answers stream in as they are written, and the conversation persists between visits.",
        },
        {
          type: "heading",
          level: 2,
          content: "Why the numbers are right",
        },
        {
          type: "paragraph",
          content:
            "The model has two tools: item lookup, and deterministic aggregation. When you ask which room is worth the most, the totalling is done by real arithmetic rather than by a language model adding numbers in its head, which is the usual way these answers go quietly wrong.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Answers say which engine produced them",
          content:
            "A badge tells you whether an answer came from the on-device model or from the deterministic assist that runs when Apple Intelligence is unavailable. If something fails, you get a Retry rather than a spinner that never ends.",
        },
        {
          type: "paragraph",
          content:
            "Questions can be scoped to a single room, and the suggestion chips reflect your actual rooms and categories rather than generic examples.",
        },
      ],
      related: ["without-apple-intelligence", "value-and-insights", "where-the-catalogue-lives"],
    },
    {
      id: "without-apple-intelligence",
      title: "Using Trove without Apple Intelligence",
      description: "Vision does the looking either way; the thinking layer swaps out.",
      category: "asking",
      keywords: ["apple intelligence", "fallback", "smart assist", "heuristic", "older iphone", "offline"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Because Apple's on-device language model is text-only, Trove splits the work: Vision does the looking, and a reasoning layer does the thinking. Only the second half depends on Apple Intelligence.",
        },
        {
          type: "list",
          items: [
            "Unchanged: photos, OCR, barcode reading, manual cataloguing, rooms, warranties, reminders, search, insights, and export.",
            "Swapped: a deterministic rules and lookup engine handles naming, categorising, and questions when the model is unavailable.",
            "Labelled: the interface is identical, and a small badge tells you which engine produced a given result.",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Everything is offline either way",
          content:
            "Neither engine needs a network. Trove works in a basement, in a storage unit, and on a plane.",
        },
      ],
      related: ["ask-trove", "room-scan", "where-the-catalogue-lives"],
    },

    /* ── Devices ──────────────────────────────────────────────────────── */
    {
      id: "widgets-and-siri",
      title: "Widgets, Siri, Spotlight and quick capture",
      description: "Adding an item in one tap, and finding one from the Home Screen.",
      category: "devices",
      keywords: ["widget", "siri", "shortcuts", "spotlight", "control center", "live activity", "quick capture"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "list",
          items: [
            "Home Screen, Lock Screen, and StandBy widgets showing inventory value and warranties expiring, plus a configurable per-room widget with a documentation ring.",
            "A one-tap quick-capture button on the Home Screen widget, and a Control Center control that does the same.",
            "Siri and Shortcuts: add an item, ask what your Trove is worth, check expiring warranties, or ask Trove a question.",
            "Spotlight: every item is searchable system-wide, and a result deep-links into the app.",
            "A documentation-session Live Activity that keeps progress on the Lock Screen and in the Dynamic Island while you photograph a whole room.",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "No Apple Watch app, on purpose",
          content:
            "You photograph belongings with a phone, and an inventory has no useful glanceable wrist view. Building one would have added surface without adding value.",
        },
      ],
      related: ["multiple-homes", "room-scan", "documentation-rings"],
    },
    {
      id: "multiple-homes",
      title: "Multiple homes and iCloud sync",
      description: "A separate catalogue per property, and sync through your own iCloud.",
      category: "devices",
      keywords: ["homes", "multiple", "property", "icloud", "sync", "devices", "rental"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Trove Plus supports multiple homes. Each property gets its own scoped inventory, warranties, and insights, which is what you want for a rental, a second home, or a parent's house you are helping document.",
        },
        {
          type: "heading",
          level: 2,
          content: "How sync works",
        },
        {
          type: "paragraph",
          content:
            "Trove is local-first. Turning on sync moves the catalogue into your own private iCloud database, which means your Apple account rather than an Obsidian Ridge Labs server. Both modes point at the same on-disk store, so switching does not lose anything.",
        },
        {
          type: "callout",
          variant: "privacy",
          title: "Private means private",
          content:
            "A private iCloud database is not readable by us. Sync is a Plus feature and is off until you turn it on.",
        },
      ],
      related: ["where-the-catalogue-lives", "backup-and-restore", "compare-free-and-plus"],
    },

    /* ── Privacy ──────────────────────────────────────────────────────── */
    {
      id: "where-the-catalogue-lives",
      title: "Where your catalogue lives",
      description: "On your device, and why that matters more here than in most apps.",
      category: "privacy",
      keywords: ["privacy", "server", "upload", "account", "analytics", "icloud", "security"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Items, photos, receipts, serial numbers, values, rooms, and warranties are stored on your device. Recognition and reasoning run on the device too. There is no Trove account, no developer AI server, no ad network, and no analytics SDK.",
        },
        {
          type: "callout",
          variant: "privacy",
          title: "Consider what this data would be worth to someone else",
          content:
            "A complete list of your valuables, with photographs, serial numbers, and prices, is uniquely attractive to a thief and uniquely useful for identity fraud. Every cloud home inventory asks you to upload exactly that. Trove's answer is not to hold it at all.",
        },
        {
          type: "paragraph",
          content:
            "The exceptions are the ordinary ones: App Store purchase verification, private iCloud sync if you enable it, and anything you deliberately export or send.",
        },
      ],
      related: ["backup-and-restore", "multiple-homes", "claim-kit"],
    },
    {
      id: "backup-and-restore",
      title: "Backup and restore",
      description: "The whole library, photos included, as one file you keep.",
      category: "privacy",
      keywords: ["backup", "restore", "export", "file", "new phone", "photos", "library"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Trove can write your whole library, photos included, to a single portable file. Keep it in Files, in iCloud Drive, or anywhere else you trust, and restore from it on a new device.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Local-first means you own the backup problem",
          content:
            "Without iCloud sync there is no server copy to fall back on. If your inventory is the evidence for a future claim, make a backup and store it somewhere other than the phone it was made on.",
        },
        {
          type: "paragraph",
          content:
            "Backup and restore is free. It is not a premium feature, because losing a catalogue you spent a weekend building should not be a paid problem to avoid.",
        },
      ],
      related: ["where-the-catalogue-lives", "multiple-homes", "claim-kit"],
    },

    /* ── Billing ──────────────────────────────────────────────────────── */
    {
      id: "compare-free-and-plus",
      title: "What is free and what Trove Plus adds",
      description: "The real free limits and what Plus adds, stated as numbers rather than a marketing table.",
      category: "billing",
      keywords: ["free", "plus", "price", "subscription", "limit", "lifetime", "trial", "compare"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "heading",
          level: 2,
          content: "Free",
        },
        {
          type: "list",
          items: [
            "Up to 25 items with photos, brand, model, serial, room, price, and value.",
            "Room Scan, with the whole review-and-commit flow. One room scan counts as one scan.",
            "Ten AI capture scans a month, with barcode validation and duplicate warnings.",
            "Warranty tracking with real expiration reminders and the coverage timeline.",
            "The coverage gap check.",
            "Insights, the home dashboard, documentation rings, streaks, and the weekly recap.",
            "Ask Trove.",
            "Backup and restore, Spotlight, widgets, Siri shortcuts, and Control Center capture.",
          ],
        },
        {
          type: "heading",
          level: 2,
          content: "Trove Plus",
        },
        {
          type: "list",
          items: [
            "Unlimited items and unlimited AI scans.",
            "Insurance-ready exports: the photo-illustrated PDF report, CSV, the Claim Kit, and written inventory summaries.",
            "Multiple homes.",
            "Themes and alternate app icons that restyle the app and its widgets.",
            "Private iCloud sync through your own Apple account.",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Pricing",
          content:
            "Trove Plus is $2.99 per month, $19.99 per year, or $39.99 once for lifetime access, with a seven-day free trial. Trove is still in development, so final pricing is confirmed at release.",
        },
      ],
      related: ["restore-purchase", "claim-kit", "multiple-homes"],
    },
    {
      id: "restore-purchase",
      title: "Restoring a purchase",
      description: "New phone, reinstall, or an entitlement that did not appear.",
      category: "billing",
      keywords: ["restore", "purchase", "reinstall", "new phone", "missing", "receipt"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "There is no Trove account, so purchases live with your Apple Account.",
        },
        {
          type: "steps",
          items: [
            { title: "Check the Apple Account", description: "The device must be signed in with the account used for the purchase." },
            { title: "Open Settings in Trove", description: "Tap Restore Purchases." },
            { title: "Wait a moment", description: "The App Store confirms the entitlement and Plus unlocks." },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Your catalogue is separate",
          content:
            "Restoring a purchase does not restore your items, because they were never on a server. Bring those back from your backup file, or turn on iCloud sync.",
        },
      ],
      related: ["compare-free-and-plus", "backup-and-restore"],
    },
  ],
};
