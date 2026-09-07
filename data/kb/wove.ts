import { KnowledgeBase } from "../../types";

export const woveKb: KnowledgeBase = {
  appId: "wove",
  appName: "Wove",
  accent: "#f0a97a",
  status: "ready",
  intro:
    "Guides for photographing your closet without a weekend of work, getting outfits you would actually wear, and knowing where your garment photos live.",
  categories: [
    {
      id: "getting-started",
      title: "Getting started",
      description: "Your first garments, the four tabs, and how long cataloguing really takes.",
      icon: "sparkles",
    },
    {
      id: "cataloging",
      title: "Building the closet",
      description: "Cut-outs, several garments from one photo, batch imports, tags, and edits.",
      icon: "scan",
    },
    {
      id: "outfits",
      title: "Outfits and styling",
      description: "Today's look, not this, saved looks, the calendar, and the conversational stylist.",
      icon: "layers",
    },
    {
      id: "planning",
      title: "Capsules, packing and shopping",
      description: "Capsule wardrobes, trip packing lists, and the in-store shopping advisor.",
      icon: "compass",
    },
    {
      id: "insights",
      title: "Wear tracking and insights",
      description: "Logging what you wore, cost per wear, closet gaps, and the year recap.",
      icon: "bar-chart",
    },
    {
      id: "devices",
      title: "Watch, widgets and weather",
      description: "Apple Watch, the one-tap wear widget, Siri, and how the forecast is fetched.",
      icon: "watch",
    },
    {
      id: "privacy",
      title: "Privacy and your data",
      description: "Where garment photos live, what iCloud sync covers, and how to export everything.",
      icon: "lock",
    },
    {
      id: "billing",
      title: "Plans and billing",
      description: "What the free tier includes, what Wove+ adds, and restoring a purchase.",
      icon: "star",
    },
  ],
  articles: [
    /* ── Getting started ──────────────────────────────────────────────── */
    {
      id: "welcome-to-wove",
      title: "Welcome to Wove",
      description: "What Wove does, why cataloguing is the hard part, and how it is made easier.",
      category: "getting-started",
      keywords: ["welcome", "about", "closet", "wardrobe", "stylist", "intro", "tabs"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Wove turns the clothes you already own into something useful: a daily outfit, a capsule, a packing list, and honest evidence about what you actually wear.",
        },
        {
          type: "paragraph",
          content:
            "Every digital closet dies at the same place, which is cataloguing. So the fastest thing in Wove is getting clothes in. Photograph a pile, and each garment becomes its own catalogued piece with its own cut-out.",
        },
        {
          type: "heading",
          level: 2,
          content: "The four tabs",
        },
        {
          type: "list",
          items: [
            "Today: the day's look, weather-aware, with wear this and not this.",
            "Closet: everything you own, searchable and filterable.",
            "Style: outfit ideas, capsules, packing, saved looks, and the stylist chat.",
            "Insights: what you wear, what you do not, and what is missing.",
          ],
        },
        {
          type: "callout",
          variant: "privacy",
          title: "No account, no caps",
          content:
            "There is no Wove account to make and no limit on how many garments you can add. Photos of your clothes stay on your device as files.",
        },
      ],
      related: ["add-your-first-garments", "several-garments-one-photo", "where-photos-live"],
    },
    {
      id: "add-your-first-garments",
      title: "Adding your first garments",
      description: "The fastest path from a wardrobe full of clothes to a closet you can style from.",
      category: "getting-started",
      keywords: ["first", "add", "photo", "capture", "cut out", "start", "catalog"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "You do not need to catalogue everything before Wove is useful. Twenty pieces is enough for real outfits. Start with what you actually reach for.",
        },
        {
          type: "steps",
          items: [
            { title: "Find a plain surface", description: "A bed, a floor, a table. Wove lifts the garment off its background, so contrast helps and a busy duvet does not." },
            { title: "Shoot a pile, not one item", description: "Lay several pieces out with a little space between them and take one photo. Wove segments each garment into its own entry." },
            { title: "Confirm the tags", description: "Colour, type, and season are proposed on the device. Fix anything wrong now; it takes seconds and improves every later suggestion." },
            { title: "Repeat until bored", description: "Genuinely. Add a batch, use the app, add more when you notice something missing." },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Batch import from your library",
          content:
            "Already have photos of clothes? Pick up to twenty at once and confirm the whole lot in a single review pass.",
        },
      ],
      related: ["several-garments-one-photo", "edit-a-garment", "todays-look"],
    },

    /* ── Cataloging ───────────────────────────────────────────────────── */
    {
      id: "several-garments-one-photo",
      title: "Several garments from one photo",
      description: "How the multi-item capture works, and what makes it work better.",
      category: "cataloging",
      keywords: ["multiple", "pile", "segment", "cut out", "vision", "batch", "subject lift"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Apple Vision can find every distinct subject in a photograph. Wove reads each one separately, crops it to its own bounds, and creates a garment with its own cut-out and its own crop of the original photo.",
        },
        {
          type: "heading",
          level: 2,
          content: "What helps",
        },
        {
          type: "list",
          items: [
            "Space between pieces. Overlapping garments read as one shape.",
            "A plain, contrasting surface.",
            "Even light. Hard shadows can be mistaken for edges.",
            "Flat, not folded into a lump. A folded jumper is a rectangle to a computer.",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "It runs on your phone",
          content:
            "Segmentation, colour analysis, and category tagging all happen on the device. Nothing about this step needs a network, which is also why it works with your phone in airplane mode.",
        },
      ],
      related: ["add-your-first-garments", "edit-a-garment", "where-photos-live"],
    },
    {
      id: "edit-a-garment",
      title: "Editing, archiving and organising garments",
      description: "Fix a tag, retire something for the season, or take a piece out of rotation.",
      category: "cataloging",
      keywords: ["edit", "tag", "category", "formality", "season", "archive", "delete", "colour"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Every proposed tag is editable, because a model looking at a photo of a navy jumper in warm light will sometimes call it black.",
        },
        {
          type: "list",
          items: [
            "Category, colour, formality, and seasons.",
            "Favourites, so the pieces you love get weighted properly.",
            "Archive, for anything out of rotation without deleting its wear history.",
            "Delete, when a piece genuinely leaves your life.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Formality is the tag worth fixing",
          content:
            "Colour errors produce slightly odd pairings. Formality errors produce trainers with a suit. If you correct one field, correct that one.",
        },
      ],
      related: ["several-garments-one-photo", "todays-look", "wear-tracking"],
    },

    /* ── Outfits ──────────────────────────────────────────────────────── */
    {
      id: "todays-look",
      title: "Today's look",
      description: "A weather-aware outfit each morning, with the reason it works.",
      category: "outfits",
      keywords: ["today", "outfit", "daily", "weather", "wear this", "styling tip", "morning"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Today shows one outfit built from your closet, aware of the forecast, with a short styling tip explaining the specific move that makes it land rather than just restating what is in it.",
        },
        {
          type: "list",
          items: [
            "Wear this: one tap logs it, which is what teaches Wove what you really reach for.",
            "Not this: one tap restyles you from a different corner of the closet, and is remembered.",
            "More looks: cycle through alternatives when neither of those is quite it.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Not this is the important button",
          content:
            "Every other closet app learns only from what you wore. Rejections carry at least as much information. Wove keeps them, uses them in both the ranking and the model's prompt, and lets them fade after about forty-five days so old moods do not haunt you forever.",
        },
        {
          type: "paragraph",
          content:
            "You can count and erase your rejections in Settings if you want to start that signal over.",
        },
      ],
      related: ["ask-the-stylist", "saved-looks-calendar", "wear-tracking"],
    },
    {
      id: "saved-looks-calendar",
      title: "Saved looks and the outfit calendar",
      description: "Keep the combinations that work and plan them onto real days.",
      category: "outfits",
      keywords: ["saved", "looks", "calendar", "plan", "outfit", "retro log", "month"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "When a combination works, save it. Saved looks can be worn with one tap later, or planned onto a future date.",
        },
        {
          type: "paragraph",
          content:
            "The calendar shows a month of what you actually wore. You can log a past day retroactively when you forget, and a look planned onto a future day takes over Today and the widget when that day arrives.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Plan the day you dread",
          content:
            "The highest-value use of the calendar is the morning you know will be rushed. Decide the night before; wake up with it already on the Lock Screen.",
        },
      ],
      related: ["todays-look", "packing-lists", "wear-tracking"],
    },
    {
      id: "ask-the-stylist",
      title: "Asking the stylist",
      description: "A real conversation about your own clothes, grounded in what you own.",
      category: "outfits",
      keywords: ["chat", "stylist", "ask", "question", "advice", "conversation", "pairing"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Ask about your closet in plain language. What goes with these grey trousers? And for something dressier? What should I wear to a wedding in October?",
        },
        {
          type: "paragraph",
          content:
            "The conversation is multi-turn and grounded in your actual garments, so the answers reference pieces you own rather than describing an aspirational wardrobe you would have to go buy.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Every garment has an ask button",
          content:
            "Open any piece and use Ask about this piece to start a conversation scoped to it. It is the quickest way to get value out of something you never know how to wear.",
        },
        {
          type: "paragraph",
          content: "The conversational stylist is part of Wove+.",
        },
      ],
      related: ["todays-look", "without-apple-intelligence", "compare-free-and-plus"],
    },
    {
      id: "without-apple-intelligence",
      title: "Using Wove without Apple Intelligence",
      description: "The deterministic stylist, and what it does and does not cover.",
      category: "outfits",
      keywords: ["apple intelligence", "fallback", "heuristic", "older iphone", "offline", "requirements"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Wove has two stylists. Apple's on-device model proposes combinations, and a deterministic engine built on colour theory, formality rules, and weather logic validates and repairs every one of them.",
        },
        {
          type: "paragraph",
          content:
            "When Apple Intelligence is unavailable, that second engine simply takes over. You still get real outfits, capsules, and packing lists. What you lose is the written styling tip and the conversational stylist.",
        },
        {
          type: "callout",
          variant: "info",
          title: "The guardrails always run",
          content:
            "Even on Apple Intelligence hardware, the deterministic rules check every suggestion. That is why Wove does not put a linen shirt in a January outfit.",
        },
      ],
      related: ["todays-look", "ask-the-stylist", "weather-and-location"],
    },

    /* ── Planning ─────────────────────────────────────────────────────── */
    {
      id: "capsule-wardrobes",
      title: "Building a capsule",
      description: "A small set of pieces that layer into many looks, drawn from what you own.",
      category: "planning",
      keywords: ["capsule", "minimal", "wardrobe", "curate", "core", "seasonal"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "A capsule is a deliberately small group of garments chosen because they combine well. Wove builds one from your closet, for a season or a mood, and shows the looks it produces.",
        },
        {
          type: "paragraph",
          content:
            "It is the most useful answer to the ninety percent of a wardrobe that never gets worn: not buy less, but see clearly which pieces are doing the work.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Start with an everyday capsule",
          content:
            "Neutral, easy to combine, weather-appropriate. Once you trust it, try one for a specific occasion or trip.",
        },
      ],
      related: ["packing-lists", "closet-gaps", "todays-look"],
    },
    {
      id: "packing-lists",
      title: "Packing for a trip",
      description: "A checklist built from your closet, with pack progress on the Lock Screen.",
      category: "planning",
      keywords: ["packing", "trip", "travel", "suitcase", "list", "live activity", "checklist"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Tell Wove the dates and the kind of trip, and it proposes a packing list from garments you actually own, chosen to combine rather than to sit in a suitcase unworn.",
        },
        {
          type: "steps",
          items: [
            { title: "Create a trip", description: "Give it dates and a focus, such as everyday, work, or formal." },
            { title: "Review the list", description: "Add and remove pieces. You know that one jacket is non-negotiable." },
            { title: "Pack against it", description: "Tick items off. A Live Activity keeps pack progress on the Lock Screen and in the Dynamic Island while you are actually packing." },
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Season, not destination forecast",
          content:
            "Trip suggestions use the calendar season and your current local weather context. They are not a destination weather forecast, so check the actual forecast where you are going.",
        },
      ],
      related: ["capsule-wardrobes", "weather-and-location", "saved-looks-calendar"],
    },
    {
      id: "shopping-advisor",
      title: "The shopping advisor",
      description: "Photograph something in a shop and find out whether you should actually buy it.",
      category: "planning",
      keywords: ["shopping", "buy", "store", "duplicate", "cost per wear", "advisor", "skip"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Snap a piece you are considering. Wove shows which of your own clothes pair with it, using real images, warns you if you already own something very similar, and gives a buy or skip verdict.",
        },
        {
          type: "paragraph",
          content:
            "It also projects a cost per wear from the price and how often you genuinely wear comparable pieces. That number is usually the argument.",
        },
        {
          type: "callout",
          variant: "info",
          title: "It is advice, not authority",
          content:
            "The verdict is based on your closet and your own wear history. It has no opinion about fit, quality, or whether the thing makes you happy, which are the parts only you can judge.",
        },
        {
          type: "paragraph",
          content: "The shopping advisor is part of Wove+.",
        },
      ],
      related: ["closet-gaps", "wear-tracking", "compare-free-and-plus"],
    },

    /* ── Insights ─────────────────────────────────────────────────────── */
    {
      id: "wear-tracking",
      title: "Logging what you wore",
      description: "The quiet input that makes everything else in Wove better.",
      category: "insights",
      keywords: ["wear", "log", "history", "track", "cost per wear", "worn", "undo"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Logging a wear takes one tap on Today, on the widget, on your watch, or from a garment. There is also a quick multi-select for the days you got dressed without consulting an app.",
        },
        {
          type: "paragraph",
          content:
            "Each wear is stamped with the weather, so over time Wove learns not just what you wear but what you wear when it is five degrees and raining.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Any wear can be undone",
          content:
            "Logged the wrong thing? Undo it. The history is meant to be accurate, not permanent.",
        },
      ],
      related: ["todays-look", "closet-gaps", "year-recap"],
    },
    {
      id: "closet-gaps",
      title: "Closet gaps and wardrobe insights",
      description: "What you actually wear, what you never touch, and what is missing.",
      category: "insights",
      keywords: ["insights", "gaps", "forgotten", "value", "composition", "signature", "cost per wear"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Insights is where the wear log pays off. Wove shows the composition of your wardrobe, your most and least worn pieces, and your best value by cost per wear.",
        },
        {
          type: "list",
          items: [
            "Signature pairings: the combinations you keep returning to.",
            "Cold-weather go-tos: what you actually reach for when it turns.",
            "Forgotten pieces: things you own and never wear.",
            "Closet gaps: what would round out what you already have.",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "What is free",
          content:
            "The top closet gap is free. The full gaps breakdown, signature pairings, cold-weather go-tos, and best-value analysis are part of Wove+.",
        },
      ],
      related: ["wear-tracking", "shopping-advisor", "compare-free-and-plus"],
    },
    {
      id: "year-recap",
      title: "Closet Recap and share cards",
      description: "Turn a year of wear logs into something worth looking at.",
      category: "insights",
      keywords: ["recap", "year", "share", "card", "story", "export image", "wrapped"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Closet Recap turns your year of wear logs into a swipeable, shareable story: what you wore most, what you rediscovered, how your closet actually behaved.",
        },
        {
          type: "paragraph",
          content:
            "Any individual look can also be exported as a branded share card, which is the easiest way to ask a friend what they think without sending them into your app.",
        },
      ],
      related: ["closet-gaps", "wear-tracking", "saved-looks-calendar"],
    },

    /* ── Devices ──────────────────────────────────────────────────────── */
    {
      id: "watch-and-widgets",
      title: "Apple Watch, widgets and Siri",
      description: "Wear this from your wrist or your Lock Screen, without opening the app.",
      category: "devices",
      keywords: ["watch", "widget", "lock screen", "control center", "siri", "standby", "wear this"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "You decide what to wear standing in front of a wardrobe, not sitting down with your phone. So Wove puts today's look where you already are.",
        },
        {
          type: "list",
          items: [
            "Apple Watch: today's look on your wrist, with wear this and not this right there.",
            "Home Screen, Lock Screen, and StandBy widgets, including a one-tap wear button on the widget itself.",
            "A Control Center control for what to wear.",
            "Siri: ask what you should wear.",
            "Optional morning look notifications.",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Extensions never run the model",
          content:
            "The app computes today's look and publishes a small self-contained snapshot. The widget and the watch only render it, which is why they are instant and do not drain your battery.",
        },
      ],
      related: ["todays-look", "weather-and-location", "wear-tracking"],
    },
    {
      id: "weather-and-location",
      title: "How Wove uses weather and location",
      description: "A coarse one-shot location, a forecast, and nothing kept about where you are.",
      category: "devices",
      keywords: ["weather", "location", "weatherkit", "forecast", "permission", "privacy", "gps"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "To make an outfit weather-aware, Wove needs to know roughly where you are. With your permission it requests a coarse one-shot location and asks Apple WeatherKit for the local forecast.",
        },
        {
          type: "callout",
          variant: "privacy",
          title: "Stated precisely",
          content:
            "Wove caches the forecast, not the location. This is a disclosed Apple service request, so it is not accurate to say nothing ever leaves the device when weather is on. You can decline the permission and everything else keeps working.",
        },
        {
          type: "faq",
          items: [
            {
              q: "Does Wove track my location over time?",
              a: "No. It is a one-shot coarse request when a forecast is needed, not continuous location monitoring.",
            },
            {
              q: "Can I turn it off?",
              a: "Yes, in iOS Settings under Wove. Outfits then use season and your tags instead of live weather.",
            },
          ],
        },
      ],
      related: ["todays-look", "where-photos-live", "packing-lists"],
    },

    /* ── Privacy ──────────────────────────────────────────────────────── */
    {
      id: "where-photos-live",
      title: "Where your garment photos live",
      description: "Files on your device, a database of names and tags, and what sync actually covers.",
      category: "privacy",
      keywords: ["privacy", "photos", "storage", "icloud", "sync", "upload", "server", "files"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Garment images are stored as files in Wove's own shared container on your device. The database holds only the file names and the tags extracted from each photo, which is why the app stays fast and the widgets can read images directly.",
        },
        {
          type: "paragraph",
          content:
            "There is no Wove account, no advertising network, no analytics SDK, and no server of ours that receives photographs of your clothes.",
        },
        {
          type: "heading",
          level: 2,
          content: "What iCloud sync covers",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Records sync, image files are a separate question",
          content:
            "Turning on iCloud Sync in Settings mirrors your closet records through your own private iCloud database. The garment image files live outside that database, so do not assume every photo appears on a second device. Cross-device photo behaviour will be documented precisely before release.",
        },
        {
          type: "paragraph",
          content:
            "Wove is still in development, and turning sync on or off applies the next time you launch the app.",
        },
      ],
      related: ["export-your-closet", "weather-and-location", "welcome-to-wove"],
    },
    {
      id: "export-your-closet",
      title: "Exporting your whole closet",
      description: "Take the records and every photo with you, whenever you want.",
      category: "privacy",
      keywords: ["export", "backup", "json", "photos", "files", "leave", "data"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Settings can export the entire closet to Files: the records as JSON and all of your garment photos alongside them.",
        },
        {
          type: "callout",
          variant: "privacy",
          title: "An export is a copy you own",
          content:
            "Once exported, those files inherit the privacy of wherever you put them. Saving to a synced cloud folder puts them under that provider's terms, not ours.",
        },
        {
          type: "paragraph",
          content:
            "You can also undo any logged wear and archive or unarchive pieces freely. Nothing about your wardrobe history is locked in one direction.",
        },
      ],
      related: ["where-photos-live", "edit-a-garment", "wear-tracking"],
    },

    /* ── Billing ──────────────────────────────────────────────────────── */
    {
      id: "compare-free-and-plus",
      title: "What is free and what Wove+ adds",
      description: "The line between the two, with no caps on the part that matters.",
      category: "billing",
      keywords: ["free", "plus", "price", "subscription", "lifetime", "compare", "limits"],
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
            "Unlimited garments, with automatic cut-out and tagging. No item cap.",
            "Several garments from one photo, and batch import of up to twenty photos.",
            "Today's look with a styling tip, wear this, and not this.",
            "Manual and AI outfit building, with a few AI styling generations a day.",
            "Wear logging, wear history, and the outfit calendar.",
            "Share cards, Closet Recap, and the top closet gap.",
            "Widgets, Control Center, Siri, Apple Watch, and full closet export.",
          ],
        },
        {
          type: "heading",
          level: 2,
          content: "Wove+",
        },
        {
          type: "list",
          items: [
            "A stylist that tunes to your taste over time.",
            "The shopping advisor.",
            "The conversational stylist.",
            "Full insights: signature pairings, cold-weather go-tos, best value, and the complete gaps breakdown.",
            "iCloud sync across devices.",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Pricing",
          content:
            "Wove+ is $3.99 per month, $19.99 per year, or $24.99 once for lifetime access, as a single entitlement. Wove is still in development, so final pricing is confirmed at release.",
        },
      ],
      related: ["restore-purchase", "shopping-advisor", "closet-gaps"],
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
            "Purchases belong to your Apple Account. There is no Wove account, so there is nothing to log into.",
        },
        {
          type: "steps",
          items: [
            { title: "Check the Apple Account", description: "The device must be signed in with the account you purchased on." },
            { title: "Open Settings in Wove", description: "Tap Restore Purchases." },
            { title: "Wait a moment", description: "The App Store confirms the entitlement and Wove+ unlocks." },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Still stuck?",
          content:
            "Email support@obsidianridgelabs.com with the Apple Account email and roughly when you purchased. Refunds are handled by Apple.",
        },
      ],
      related: ["compare-free-and-plus", "where-photos-live"],
    },
  ],
};
