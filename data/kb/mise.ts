import { KnowledgeBase } from "../../types";

export const miseKb: KnowledgeBase = {
  appId: "mise",
  appName: "Mise",
  accent: "#e0784f",
  status: "ready",
  intro:
    "Guides for saving recipes from anywhere, asking the on-device sous chef real questions, planning a week, and cooking hands-free with live timers.",
  categories: [
    {
      id: "getting-started",
      title: "Getting started",
      description: "Your first recipes, the four tabs, and the Apple Intelligence requirement.",
      icon: "book",
    },
    {
      id: "importing",
      title: "Saving recipes",
      description: "Share sheet, paste, photo OCR, manual entry, and what happens to the photo.",
      icon: "scan",
    },
    {
      id: "sous-chef",
      title: "The sous chef",
      description: "Ask Mise, cooking with what you have, substitutions, and the dietary profile.",
      icon: "message-circle",
    },
    {
      id: "planning",
      title: "Planning and groceries",
      description: "The weekly grid, suggested dinners, and a grocery list sorted by aisle.",
      icon: "calendar",
    },
    {
      id: "cooking",
      title: "Cooking",
      description: "Cook mode, concurrent timers, serving scaling, and unit conversion.",
      icon: "timer",
    },
    {
      id: "devices",
      title: "Watch, widgets and Siri",
      description: "Apple Watch, Home Screen widgets, Siri, Shortcuts, Spotlight, and share cards.",
      icon: "watch",
    },
    {
      id: "privacy",
      title: "Privacy and your data",
      description: "Where recipes live, the only network requests Mise makes, sync, and export.",
      icon: "lock",
    },
    {
      id: "billing",
      title: "Plans and billing",
      description: "The free limits, what Mise Plus adds, and restoring a purchase.",
      icon: "star",
    },
  ],
  articles: [
    /* ── Getting started ──────────────────────────────────────────────── */
    {
      id: "welcome-to-mise",
      title: "Welcome to Mise",
      description: "A recipe box that cooks with you, and keeps your collection on your device.",
      category: "getting-started",
      keywords: ["welcome", "about", "recipes", "intro", "tabs", "sous chef", "private"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Most recipe apps stop at storage. They are a filing cabinet with a nice font. Mise is built around the moments cooking actually goes wrong: the sauce splitting, the missing ingredient, the three things that need timing at once.",
        },
        {
          type: "heading",
          level: 2,
          content: "The four tabs",
        },
        {
          type: "list",
          items: [
            "Recipes: everything you have saved, with the sous chef at the top.",
            "Plan: a weekly grid with four slots a day.",
            "Groceries: the list, consolidated and sorted by aisle.",
            "Settings: your dietary profile, sync, reminders, plan, and export.",
          ],
        },
        {
          type: "callout",
          variant: "privacy",
          title: "No account, no recipe server",
          content:
            "Your recipes live on your device. There is no Mise account, no analytics, and no server of ours holding your collection. The only time Mise touches the network is to fetch a page you asked it to import, and to verify a purchase with Apple.",
        },
      ],
      related: ["apple-intelligence-requirement", "save-a-recipe", "where-recipes-live"],
    },
    {
      id: "apple-intelligence-requirement",
      title: "Why Mise requires Apple Intelligence",
      description: "The gate you may see at launch, and what each state means.",
      category: "getting-started",
      keywords: ["apple intelligence", "requirement", "gate", "unsupported", "download", "settings", "compatibility"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Mise checks for Apple Intelligence when it launches. On-device AI is the product here rather than a garnish, so a half-working Mise would be worse than an honest explanation.",
        },
        {
          type: "heading",
          level: 2,
          content: "What you might see",
        },
        {
          type: "list",
          items: [
            "Hardware that cannot run Apple Intelligence: a full-screen explanation instead of the app.",
            "Apple Intelligence turned off: a screen with a direct path into iOS Settings to turn it on.",
            "The model still downloading: this resolves itself the next time you open Mise.",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Why the check is at runtime",
          content:
            "There is no App Store setting that prevents installation on devices without Apple Intelligence, so the check has to happen when the app runs. That is why Mise can be downloaded and then tell you it cannot help.",
        },
        {
          type: "paragraph",
          content:
            "Within a supported session, anything transiently unavailable falls back to a deterministic engine so the app does not simply stop working mid-recipe.",
        },
      ],
      related: ["welcome-to-mise", "ask-mise", "save-a-recipe"],
    },

    /* ── Importing ────────────────────────────────────────────────────── */
    {
      id: "save-a-recipe",
      title: "Saving a recipe from anywhere",
      description: "Share sheet, paste, photo, or by hand: four ways in, and which one to reach for when.",
      category: "importing",
      keywords: ["save", "import", "share sheet", "paste", "photo", "manual", "safari", "url"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Getting recipes in should take seconds, because a recipe box you have to type into never fills up.",
        },
        {
          type: "list",
          items: [
            "Share sheet: from Safari, Instagram, or any app. Tap share, choose Mise, done.",
            "Paste a link or a messy block of text on the import screen.",
            "Photograph a cookbook page, a handwritten card, or a screenshot.",
            "Write it yourself, for family recipes that never existed on a website.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "The share sheet is the one to learn",
          content:
            "It is the fastest path and it keeps the photo. Add Mise to your share sheet favourites and you will actually use it while browsing.",
        },
        {
          type: "paragraph",
          content:
            "Recipes without a photo get generated cover art, so your recipe box does not look like a list of grey rectangles.",
        },
      ],
      related: ["how-import-works", "photo-import", "organise-recipes"],
    },
    {
      id: "how-import-works",
      title: "How import actually works",
      description: "Published recipe data first, the on-device model second.",
      category: "importing",
      keywords: ["parse", "json-ld", "schema", "structured", "ai", "extract", "website"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Most recipe websites publish machine-readable recipe data alongside the page you read. When it is there, Mise reads it directly. No AI is involved and the result is exact.",
        },
        {
          type: "paragraph",
          content:
            "When it is missing or malformed, which happens with blogs, social posts, and pasted text, Apple's on-device model parses it into ingredients, steps, times, and servings.",
        },
        {
          type: "callout",
          variant: "privacy",
          title: "The one network request",
          content:
            "Mise fetches the page you asked for, directly from that site, exactly as your browser would. The page contents are not routed through an Obsidian Ridge Labs server, and there is no backend to route them through.",
        },
        {
          type: "paragraph",
          content:
            "Photos come along automatically when the page provides one, downscaled on import so a recipe box does not quietly consume a gigabyte.",
        },
      ],
      related: ["save-a-recipe", "photo-import", "where-recipes-live"],
    },
    {
      id: "photo-import",
      title: "Importing from a photo",
      description: "Cookbook pages, index cards, and your grandmother's handwriting.",
      category: "importing",
      keywords: ["photo", "ocr", "scan", "cookbook", "handwriting", "card", "screenshot", "vision"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Photograph a page and Vision reads the text on the device, then the on-device model turns it into a structured recipe.",
        },
        {
          type: "steps",
          items: [
            { title: "Flatten the page", description: "Press the book open. Curved text near the spine is the most common reason a scan comes back wrong." },
            { title: "Get even light", description: "Avoid a hard shadow across the middle of the page." },
            { title: "Fill the frame", description: "One page at a time, edge to edge." },
            { title: "Check the result", description: "Read the ingredients before you save. A misread quantity is the failure mode that matters most in a kitchen." },
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Always check quantities",
          content:
            "Handwriting and fractions are exactly where OCR struggles. Every field is editable, and the two seconds it takes to check a measurement is worth more than any other check you will do in this app.",
        },
      ],
      related: ["how-import-works", "save-a-recipe", "scaling-and-units"],
    },
    {
      id: "organise-recipes",
      title: "Organising your recipe box",
      description: "Tags, categories, favourites, and full-text search.",
      category: "importing",
      keywords: ["tag", "category", "favourite", "search", "organise", "find", "filter"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Recipes carry tags, a category, and a favourite flag, and full-text search covers titles, ingredients, and steps.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Tag by occasion, not cuisine",
          content:
            "Weeknight, guests, freezer, kids will eat this. Those are the questions you actually ask at 6pm. Cuisine is already searchable through the ingredients.",
        },
        {
          type: "paragraph",
          content:
            "Recipes are also indexed into Spotlight, so you can find one from the Home Screen and jump straight to it.",
        },
      ],
      related: ["save-a-recipe", "plan-your-week", "widgets-and-siri"],
    },

    /* ── Sous chef ────────────────────────────────────────────────────── */
    {
      id: "ask-mise",
      title: "Asking Mise",
      description: "A cooking conversation grounded in your recipes, your pantry, and how you eat.",
      category: "sous-chef",
      keywords: ["ask", "sous chef", "question", "help", "substitution", "technique", "chat"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Ask Mise sits at the top of the Recipes tab, and it knows your kitchen. It can see your recipe box, your pantry, and your dietary profile, and when you are viewing a recipe it can see that too.",
        },
        {
          type: "list",
          items: [
            "My sauce broke, can I fix it?",
            "What can I use instead of buttermilk?",
            "Can I make this the night before?",
            "How do I know when this is done?",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "It runs offline",
          content:
            "The conversation happens on your iPhone, which is why it answers in a kitchen with bad signal and why nothing you ask is sent anywhere.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Not a food-safety or allergy authority",
          content:
            "Mise is a cooking assistant. For allergens, storage times, and safe internal temperatures, trust the packaging and published food-safety guidance rather than a language model.",
        },
      ],
      related: ["cook-with-what-i-have", "dietary-profile", "apple-intelligence-requirement"],
    },
    {
      id: "cook-with-what-i-have",
      title: "Cook with what I have",
      description: "Tell Mise your pantry once, and get a recipe written for it.",
      category: "sous-chef",
      keywords: ["pantry", "ingredients", "leftovers", "what i have", "generate", "improvise"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "List what is actually in the fridge and the cupboard, and the on-device model writes a recipe for it. Your pantry is remembered between sessions, so you are not retyping staples every time.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Include the boring things",
          content:
            "Eggs, rice, tinned tomatoes, whatever oil you own. The staples are what turn three leftovers into an actual dinner.",
        },
        {
          type: "paragraph",
          content:
            "The result respects your dietary profile, and you can save it into your recipe box like anything else.",
        },
      ],
      related: ["ask-mise", "dietary-profile", "grocery-list"],
    },
    {
      id: "dietary-profile",
      title: "Your dietary profile",
      description: "How you eat, set once, respected everywhere. Never paywalled.",
      category: "sous-chef",
      keywords: ["diet", "allergy", "vegan", "gluten", "profile", "preferences", "restrictions"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Set your way of eating, any allergies, and your goals during onboarding or later in Settings. The sous chef, pantry generation, substitutions, and suggested dinners all respect it.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Free, deliberately",
          content:
            "The dietary profile is never paywalled and syncs with everything else. Charging someone to tell an app about their coeliac disease would be an ugly business model.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "It is a preference, not a safety system",
          content:
            "Mise filters and suggests based on what you told it. It does not verify ingredients or detect hidden allergens. If an allergy is serious, read the label. Every time.",
        },
      ],
      related: ["ask-mise", "cook-with-what-i-have", "plan-your-week"],
    },

    /* ── Planning ─────────────────────────────────────────────────────── */
    {
      id: "plan-your-week",
      title: "Planning the week",
      description: "A weekly grid, four slots a day, and a button that fills it for you.",
      category: "planning",
      keywords: ["plan", "week", "meal plan", "dinner", "suggest", "grid", "assign"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "The Plan tab is a weekly grid with breakfast, lunch, dinner, and a snack slot each day. Tap a slot to assign a recipe.",
        },
        {
          type: "paragraph",
          content:
            "Or tap Suggest dinners and Mise fills the week for you. It favours your favourites, rotates so you are not eating the same thing twice in five days, and varies the categories.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Plan dinners only",
          content:
            "Most people who successfully meal-plan only plan dinner. Four empty slots a day is a good way to feel like you have failed by Tuesday.",
        },
      ],
      related: ["grocery-list", "dietary-profile", "organise-recipes"],
    },
    {
      id: "grocery-list",
      title: "The grocery list",
      description: "Generated from your week, consolidated, and sorted the way a supermarket is.",
      category: "planning",
      keywords: ["grocery", "shopping", "list", "aisle", "consolidate", "check off", "share"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Generate the list from your planned week or from any single recipe. Duplicate ingredients are consolidated with their quantities added together, and the list is sorted by supermarket aisle so you walk the shop once.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Regenerating never doubles anything",
          content:
            "Generating the same week again is safe. Quantities do not stack up, so you can add a recipe on Wednesday and regenerate without ending up with four kilograms of onions.",
        },
        {
          type: "list",
          items: [
            "Check items off with haptic feedback, in the app or from the interactive Home Screen widget.",
            "Edit names and quantities in place.",
            "Undo a deletion.",
            "Add anything by hand.",
            "Share the whole list as plain text to whoever is going to the shop.",
          ],
        },
      ],
      related: ["plan-your-week", "widgets-and-siri", "cook-with-what-i-have"],
    },

    /* ── Cooking ──────────────────────────────────────────────────────── */
    {
      id: "cook-mode",
      title: "Cook mode",
      description: "Dark, large type, one step at a time, and the screen stays awake.",
      category: "cooking",
      keywords: ["cook mode", "steps", "hands free", "screen", "awake", "dark", "swipe"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Every recipe has one prominent Start Cooking button. Cook mode is dark, uses big type, and shows one step at a time. Swipe between steps, and the screen stays awake for the whole session.",
        },
        {
          type: "paragraph",
          content:
            "Scaled servings carry over from the recipe page, so the quantities in front of you are the ones you actually decided to cook.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "It is designed for greasy hands",
          content:
            "Large type readable at arm's length, big swipe targets, and no small controls. You will be looking at this screen for forty minutes at a slight distance.",
        },
      ],
      related: ["timers", "scaling-and-units", "ask-mise"],
    },
    {
      id: "timers",
      title: "Running several timers at once",
      description: "Concurrent timers on the Lock Screen and in the Dynamic Island.",
      category: "cooking",
      keywords: ["timer", "multiple", "live activity", "dynamic island", "notification", "lock screen"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Real cooking needs more than one timer. Mise runs several at once, each labelled with its step, and they fire local notifications when they finish.",
        },
        {
          type: "paragraph",
          content:
            "While they run they live in a Live Activity, so you can see them on the Lock Screen and in the Dynamic Island without unlocking anything or leaving the app you are in.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Allow notifications",
          content:
            "Timers alert through local notifications. If you declined the permission, they will still count down but will not shout at you when they finish. You can enable it in iOS Settings under Mise.",
        },
      ],
      related: ["cook-mode", "widgets-and-siri", "scaling-and-units"],
    },
    {
      id: "scaling-and-units",
      title: "Scaling servings and converting units",
      description: "Fraction-aware quantities and a one-tap metric switch.",
      category: "cooking",
      keywords: ["servings", "scale", "double", "halve", "fraction", "metric", "imperial", "convert"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Change the servings with the stepper and every quantity updates. Mise handles fractions properly, so you get three-quarters of a cup rather than 0.75 cups.",
        },
        {
          type: "paragraph",
          content:
            "One tap converts between metric and US units, which is what makes a recipe from another country usable rather than an arithmetic exercise.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Baking is the exception",
          content:
            "Scaling works cleanly for most cooking. Baking is chemistry, and doubling a cake is not always the same as making two. Scale bakes with a little caution.",
        },
      ],
      related: ["cook-mode", "grocery-list", "photo-import"],
    },

    /* ── Devices ──────────────────────────────────────────────────────── */
    {
      id: "widgets-and-siri",
      title: "Apple Watch, widgets, Siri and share cards",
      description: "Tonight's dinner on your wrist, and groceries you can tick from the Home Screen.",
      category: "devices",
      keywords: ["watch", "widget", "siri", "shortcuts", "spotlight", "share card", "reminder"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "list",
          items: [
            "Apple Watch: tonight's dinner, live cook timers, and grocery check-off from the wrist.",
            "Home Screen and Lock Screen widgets: tonight's dinner and your grocery count, with check-off built into the widget.",
            "Siri and App Intents: ask what is for dinner, or add milk to your grocery list.",
            "Spotlight: recipes are searchable system-wide and deep-link into the app.",
            "Local dinner reminders that stay accurate to your actual plan.",
          ],
        },
        {
          type: "heading",
          level: 2,
          content: "Share cards",
        },
        {
          type: "paragraph",
          content:
            "Any recipe can be exported as an image card with its photo, title, meta, and ingredients, straight from the recipe page. It is the easiest way to send a recipe to someone who does not use Mise.",
        },
      ],
      related: ["grocery-list", "plan-your-week", "export-your-recipes"],
    },

    /* ── Privacy ──────────────────────────────────────────────────────── */
    {
      id: "where-recipes-live",
      title: "Where your recipes live",
      description: "On your device, with optional private iCloud sync, and no backend at all.",
      category: "privacy",
      keywords: ["privacy", "server", "account", "icloud", "sync", "analytics", "network"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Recipes, your pantry, your plan, and your grocery list are stored on your device. Import parsing and the sous chef run on the device. There is no Mise account, no analytics, and no third-party SDKs.",
        },
        {
          type: "heading",
          level: 2,
          content: "The only network requests",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Fetching a page you pasted or shared, made directly to that website.",
            "App Store purchase verification.",
          ],
        },
        {
          type: "callout",
          variant: "privacy",
          title: "There is no backend to leak",
          content:
            "Mise has no server infrastructure. That is not a policy we could quietly change; it is the architecture. Optional iCloud sync, when you enable it, uses your own private database under your Apple account.",
        },
      ],
      related: ["icloud-sync", "export-your-recipes", "how-import-works"],
    },
    {
      id: "icloud-sync",
      title: "iCloud sync",
      description: "Your own private database, switched on by you, with a local fallback.",
      category: "privacy",
      keywords: ["icloud", "sync", "devices", "ipad", "backup", "cloudkit", "plus"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Mise Plus can sync your recipes through your own private iCloud database, so they appear on your other devices. Private means your Apple account. We cannot read it.",
        },
        {
          type: "paragraph",
          content:
            "If iCloud is unavailable, Mise falls back to the same local store rather than refusing to open, so nothing is lost.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Sync is not the same as a backup you control",
          content:
            "Deleting a recipe deletes it everywhere. Use the JSON export in Settings if you want an archive that survives a mistake.",
        },
      ],
      related: ["where-recipes-live", "export-your-recipes", "compare-free-and-plus"],
    },
    {
      id: "export-your-recipes",
      title: "Exporting your recipes",
      description: "Every recipe out as JSON whenever you want it, plus share cards for sending one to a person.",
      category: "privacy",
      keywords: ["export", "json", "backup", "leave", "archive", "files", "data"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Settings can export every recipe as JSON. It is a structured, readable format, so your collection is portable rather than trapped.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Export before you switch phones",
          content:
            "Especially if you are on the free tier without iCloud sync. A recipe box you built over a year is worth thirty seconds of insurance.",
        },
        {
          type: "paragraph",
          content:
            "Individual recipes can also leave as image share cards, which is the friendliest format for sending one to a person rather than to a machine.",
        },
      ],
      related: ["icloud-sync", "where-recipes-live", "widgets-and-siri"],
    },

    /* ── Billing ──────────────────────────────────────────────────────── */
    {
      id: "compare-free-and-plus",
      title: "What is free and what Mise Plus adds",
      description: "The real limits, and what is deliberately not behind them.",
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
            "Up to 25 recipes.",
            "Three AI assists a day.",
            "Everything else unlimited: the planner, the grocery list, cook mode, timers, serving scaling, unit conversion, widgets, the Watch app, Siri, Spotlight, share cards, and JSON export.",
            "The dietary profile, which is never paywalled.",
          ],
        },
        {
          type: "heading",
          level: 2,
          content: "Mise Plus",
        },
        {
          type: "list",
          items: [
            "Unlimited recipes.",
            "Unlimited AI assists.",
            "Ingredient substitutions.",
            "Private iCloud sync.",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Pricing",
          content:
            "Mise Plus is $2.99 per month, $19.99 per year with a seven-day trial, or $39.99 once for lifetime access. Mise is still in development, so final pricing is confirmed at release.",
        },
      ],
      related: ["restore-purchase", "icloud-sync", "ask-mise"],
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
            "There is no Mise account, so purchases live with your Apple Account.",
        },
        {
          type: "steps",
          items: [
            { title: "Check the Apple Account", description: "The device must be signed in with the account used for the purchase." },
            { title: "Open Settings in Mise", description: "Tap Restore Purchases." },
            { title: "Wait a moment", description: "The App Store confirms the entitlement and Plus unlocks." },
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
      related: ["compare-free-and-plus", "where-recipes-live"],
    },
  ],
};
