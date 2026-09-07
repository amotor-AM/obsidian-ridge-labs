import { KnowledgeBase } from "../../types";

export const coveKb: KnowledgeBase = {
  appId: "cove",
  appName: "Cove",
  accent: "#8b9cf6",
  status: "ready",
  intro:
    "Guides for writing in Cove, understanding what the on-device reflection does and does not claim, and keeping your journal yours.",
  categories: [
    {
      id: "getting-started",
      title: "Getting started",
      description: "Your first entry, the four screens, and what happens the moment you write something.",
      icon: "book",
    },
    {
      id: "writing",
      title: "Writing an entry",
      description: "Typing, dictating, photos, voice memos, moods, tags, and prompts.",
      icon: "pen",
    },
    {
      id: "reflection",
      title: "Reflection and insight",
      description: "What Cove notices in an entry, what the weekly reflection is, and where the line sits.",
      icon: "sparkles",
    },
    {
      id: "finding",
      title: "Finding what you wrote",
      description: "Search by meaning, revisit On This Day, pin entries, and ask your own journal.",
      icon: "search",
    },
    {
      id: "patterns",
      title: "Moods and patterns",
      description: "Mood logging, trends, theme correlations, and the Year in Review.",
      icon: "activity",
    },
    {
      id: "devices",
      title: "Devices and sync",
      description: "iPad, Apple Watch, widgets, Siri, Spotlight, and how iCloud is used.",
      icon: "watch",
    },
    {
      id: "privacy",
      title: "Privacy, lock and export",
      description: "Where entries live, the app lock, export formats, importing from Day One, and erasing everything.",
      icon: "lock",
    },
    {
      id: "billing",
      title: "Plans and billing",
      description: "What is free forever, what Cove Plus adds, and how to restore a purchase.",
      icon: "star",
    },
  ],
  articles: [
    /* ── Getting started ──────────────────────────────────────────────── */
    {
      id: "welcome-to-cove",
      title: "Welcome to Cove",
      description: "What Cove is, what it refuses to be, and the idea underneath it.",
      category: "getting-started",
      keywords: ["welcome", "about", "journal", "diary", "private", "intro", "screens"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Cove is a journal with an unusual constraint: the AI that reads your words runs on your iPhone. Not on a fast server somewhere with a good privacy policy. On the phone in your hand.",
        },
        {
          type: "paragraph",
          content:
            "That constraint is the whole product. It is what makes it reasonable to write the thing you would not paste into a chatbot, and it is the one promise a cloud journal cannot structurally match.",
        },
        {
          type: "heading",
          level: 2,
          content: "The four screens",
        },
        {
          type: "list",
          items: [
            "Home: today's prompt, a quick mood check-in, and the fastest way into writing.",
            "Journal: everything you have written, searchable by words and by meaning.",
            "Insights: mood trends, recurring themes, and your weekly reflections.",
            "Settings: the app lock, reminders, export and import, your plan, and the privacy panel.",
          ],
        },
        {
          type: "callout",
          variant: "privacy",
          title: "Writing is never paywalled",
          content:
            "Unlimited entries, photos, voice journaling, tags, and search are free forever. A journal you can only afford to keep while you are subscribed is not really your journal.",
        },
        {
          type: "paragraph",
          content:
            "There is no Cove account and nothing to sign in to. You can write your first entry about thirty seconds after opening the app.",
        },
      ],
      related: ["your-first-entry", "what-cove-notices", "where-entries-live"],
    },
    {
      id: "your-first-entry",
      title: "Writing your first entry",
      description: "From a blank page to your first reflection in a couple of minutes.",
      category: "getting-started",
      keywords: ["first entry", "start", "write", "prompt", "blank page", "tutorial"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "The blank page is the hardest part of journaling, so Cove tries not to hand you one.",
        },
        {
          type: "steps",
          items: [
            { title: "Open Home", description: "There is a prompt waiting for you. If it does not fit today, tap for another, or ignore it entirely and start writing." },
            { title: "Say how you feel", description: "Tap one of the mood orbs. It takes a second and it is what makes the trends later worth looking at. You can skip it." },
            { title: "Write, or talk", description: "Type, or tap the microphone and speak. Dictation runs on the device, and you can keep the recording alongside the text if you want it." },
            { title: "Save", description: "Cove reads the entry on the device and offers a short reflection: the tone it noticed, a theme, and one warm line back to you." },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Two sentences counts",
          content:
            "There is no minimum length and nothing scolds you for a short entry. A journal you actually keep beats a journal you keep perfectly for nine days.",
        },
        {
          type: "paragraph",
          content:
            "While you write, Cove may offer one gentle follow-up question. It is dismissible, it is generated on the device, and it is a nudge rather than a requirement.",
        },
      ],
      related: ["welcome-to-cove", "voice-journaling", "what-cove-notices"],
    },
    {
      id: "daily-reminder",
      title: "Setting a daily reminder",
      description: "One quiet nudge at a time you choose, or none at all.",
      category: "getting-started",
      keywords: ["reminder", "notification", "daily", "habit", "time", "nudge"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Cove can send one local notification a day at a time you pick. It is scheduled on your device from your own settings, so no server knows when you journal.",
        },
        {
          type: "steps",
          items: [
            { title: "Open Settings", description: "Find the reminders section." },
            { title: "Choose a time", description: "Pick a moment you are usually still and unhurried. Evening works for most people; some prefer the first coffee." },
            { title: "Allow notifications", description: "iOS asks once. If you decline, you can change it later in the iOS Settings app under Cove." },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "It will not escalate",
          content:
            "Cove sends one reminder. It does not send a second one because you ignored the first, and it does not warn you about a streak you are about to lose.",
        },
      ],
      related: ["your-first-entry", "widgets-and-siri", "welcome-to-cove"],
    },

    /* ── Writing ──────────────────────────────────────────────────────── */
    {
      id: "voice-journaling",
      title: "Voice journaling and dictation",
      description: "Speak an entry, keep the recording, and know exactly where the audio lives.",
      category: "writing",
      keywords: ["voice", "dictation", "speak", "audio", "recording", "voice memo", "microphone"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Some days it is easier to talk than to type. Tap the microphone in the editor and speak; Cove transcribes on the device and drops the text straight into the entry, where you can edit it like anything else you wrote.",
        },
        {
          type: "paragraph",
          content:
            "You can also keep the take. If you do, the audio is saved as part of the entry rather than being discarded after transcription.",
        },
        {
          type: "callout",
          variant: "privacy",
          title: "Kept audio is real data",
          content:
            "A saved voice memo is stored with the entry and is included in a full ZIP export. Treat it as something you are keeping, not as transient dictation that quietly disappears.",
        },
        {
          type: "faq",
          items: [
            {
              q: "Does the audio go to a transcription service?",
              a: "No. Transcription happens on the device, which is also why it works in airplane mode.",
            },
            {
              q: "Can I delete just the recording?",
              a: "Yes. Remove the voice memo from the entry and the written text stays behind.",
            },
          ],
        },
      ],
      related: ["your-first-entry", "photos-and-tags", "export-your-journal"],
    },
    {
      id: "photos-and-tags",
      title: "Photos, tags, and Markdown",
      description: "Attach what makes the moment legible, and label entries in your own words.",
      category: "writing",
      keywords: ["photo", "image", "tag", "label", "markdown", "bold", "italic", "attach"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "An entry can carry photos you pick from your library. They open in a calm full-screen viewer with pinch to zoom, and they travel with the entry when you export.",
        },
        {
          type: "paragraph",
          content:
            "Tags are yours to invent. Add a few words that mean something to you (work, sleep, mum, that project) and they become searchable alongside the text, the themes, and the meaning-based search.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Light Markdown when you reread",
          content:
            "Cove renders basic Markdown such as bold and italics when you read an entry back. What is stored stays plain text, so nothing is trapped in a proprietary format.",
        },
      ],
      related: ["voice-journaling", "search-your-journal", "export-your-journal"],
    },
    {
      id: "prompts-and-programs",
      title: "Prompts and guided programs",
      description: "A daily prompt when you need a way in, and seven-day arcs when you want direction.",
      category: "writing",
      keywords: ["prompt", "guided", "program", "gratitude", "growth", "calm", "packs"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "A daily reflective prompt appears on Home and in the widget. Tap it and you are already writing, which is usually the entire battle.",
        },
        {
          type: "paragraph",
          content:
            "Cove Plus adds guided programs: seven-day arcs such as Gratitude, Steadier Days, and Growth, with progress shown on Home. Each day gives you a prompt with a direction rather than a blank page.",
        },
        {
          type: "callout",
          variant: "info",
          title: "A program is not a course",
          content:
            "Guided programs are writing prompts arranged in a sensible order. They are not therapy, treatment, or a clinical protocol, and skipping a day breaks nothing.",
        },
      ],
      related: ["your-first-entry", "compare-free-and-plus", "weekly-reflection"],
    },

    /* ── Reflection ───────────────────────────────────────────────────── */
    {
      id: "what-cove-notices",
      title: "What Cove notices in an entry",
      description: "Tone, a theme, and one warm line back, produced on your device.",
      category: "reflection",
      keywords: ["insight", "reflection", "tone", "theme", "sentiment", "emotion", "ai"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "When you save an entry, Cove reads it on the device and offers a small, deliberately restrained response: the tone it picked up, a theme it saw, and one sentence reflecting the entry back to you.",
        },
        {
          type: "paragraph",
          content:
            "It is meant to feel like being heard, not analysed. Cove Plus shows the full set of emotions and themes it noticed rather than the headline one.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "This is reflection, not diagnosis",
          content:
            "Cove is a journal. It does not diagnose, detect crises, provide medical advice, or replace a professional. If something you wrote worries you, please talk to someone qualified rather than a phone.",
        },
        {
          type: "heading",
          level: 2,
          content: "Which engine produced it",
        },
        {
          type: "paragraph",
          content:
            "Cove labels its insights honestly. On Apple Intelligence hardware, Apple's on-device model writes the reflection. Where that is unavailable, a local NaturalLanguage engine produces sentiment and lexical themes instead. It is plainer, and it is still entirely local.",
        },
      ],
      related: ["without-apple-intelligence", "weekly-reflection", "ask-your-journal"],
    },
    {
      id: "weekly-reflection",
      title: "The weekly reflection",
      description: "A short private synthesis when a week closes, written from digests rather than raw entries.",
      category: "reflection",
      keywords: ["weekly", "reflection", "summary", "week", "digest", "plus", "archive"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "When a week closes, Cove can compose a short reflection on it and let you know it is ready. Past reflections are kept as an archive you can reread, which turns out to be the part people value most after a few months.",
        },
        {
          type: "heading",
          level: 2,
          content: "How it is built",
        },
        {
          type: "paragraph",
          content:
            "Cove does not feed a week of raw journal entries into a model. Each entry's insight is aggregated in plain Swift into a compact digest, and the model writes over that digest. It keeps generation inside the model's limits and keeps the raw text out of the summarisation step.",
        },
        {
          type: "callout",
          variant: "info",
          title: "One free preview",
          content:
            "You get one free weekly reflection preview after your first written week, so you can decide whether the feature is worth anything to you before paying for it. Automatic weekly reflections are part of Cove Plus.",
        },
      ],
      related: ["what-cove-notices", "compare-free-and-plus", "mood-trends"],
    },
    {
      id: "ask-your-journal",
      title: "Asking your own journal",
      description: "A conversation grounded in your entries, with the sources it drew from.",
      category: "reflection",
      keywords: ["ask", "question", "chat", "conversation", "sources", "grounded", "search"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Ask your journal a real question. When did I last feel like this? What do I keep saying about work? What was going on the month before the move?",
        },
        {
          type: "paragraph",
          content:
            "Cove retrieves the relevant entries first, answers from them, and shows you which entries the answer came from. Follow-up questions remember the exchange, and the whole conversation runs on the device.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Check the sources",
          content:
            "The cited entries are the point. If an answer surprises you, open the entries behind it. Your own words are the authority here, not the summary of them.",
        },
        {
          type: "paragraph",
          content:
            "The free plan includes one conversation a week, opener plus follow-ups. Cove Plus removes the limit. You can also scope a question to a single entry from that entry's page.",
        },
      ],
      related: ["search-your-journal", "what-cove-notices", "compare-free-and-plus"],
    },
    {
      id: "without-apple-intelligence",
      title: "Using Cove without Apple Intelligence",
      description: "What still works, what gets plainer, and what needs supported hardware.",
      category: "reflection",
      keywords: ["apple intelligence", "fallback", "older iphone", "naturallanguage", "offline", "requirements"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Cove degrades rather than breaks. Writing, photos, voice, tags, moods, search, export, and the app lock never depend on Apple Intelligence at all.",
        },
        {
          type: "list",
          items: [
            "With Apple Intelligence: generated reflections, richer weekly reflections, and journal-grounded conversations.",
            "Without it: a local NaturalLanguage engine still gives you sentiment, themes, and a templated reflection for every entry.",
            "Either way: nothing is uploaded, and everything works in airplane mode.",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "The insight tells you which engine wrote it",
          content:
            "Cove labels insights by the engine that produced them, so you are never guessing whether you are reading generated prose or a lexical summary.",
        },
      ],
      related: ["what-cove-notices", "where-entries-live", "ask-your-journal"],
    },

    /* ── Finding ──────────────────────────────────────────────────────── */
    {
      id: "search-your-journal",
      title: "Search that understands meaning",
      description: "Find the entry you half-remember, even when you cannot recall the words.",
      category: "finding",
      keywords: ["search", "semantic", "meaning", "keyword", "find", "multilingual", "vectors"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Cove searches two ways at once. Keyword search finds exact words and tags. Semantic search finds entries that mean something similar, which is what you actually need when you remember the feeling but not the phrasing.",
        },
        {
          type: "paragraph",
          content:
            "Search for \"felt out of my depth at work\" and you will surface the entry where you wrote about the presentation, even though it never used those words.",
        },
        {
          type: "callout",
          variant: "privacy",
          title: "The index is yours too",
          content:
            "Semantic search uses multilingual embeddings computed on the device, cached to disk. No entry text is sent anywhere to build or query that index.",
        },
      ],
      related: ["ask-your-journal", "on-this-day", "photos-and-tags"],
    },
    {
      id: "on-this-day",
      title: "On This Day, pinning, and rereading",
      description: "Let the journal hand back the entry you did not know you needed.",
      category: "finding",
      keywords: ["on this day", "memories", "anniversary", "pin", "reread", "history"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "On This Day surfaces what you wrote on this date in previous years. It is the quietest feature in Cove and often the most affecting one, particularly after the first year.",
        },
        {
          type: "paragraph",
          content:
            "You can pin entries you want near the top, and swipe an entry in the Journal list to pin or delete it. Pinned entries get their own section.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Give it a year",
          content:
            "Most of Cove's value compounds. Search, patterns, and On This Day all get better the more you have written, which is a good reason to keep entries short and frequent rather than long and rare.",
        },
      ],
      related: ["search-your-journal", "mood-trends", "year-in-review"],
    },

    /* ── Patterns ─────────────────────────────────────────────────────── */
    {
      id: "mood-trends",
      title: "Mood logging and trends",
      description: "A one-tap check-in, a 14-day trend, and the themes that travel with each mood.",
      category: "patterns",
      keywords: ["mood", "trend", "chart", "emotion", "pattern", "correlation", "state of mind"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Logging a mood takes one tap, on Home or from the widget. Cove charts a 14-day trend for free, and Cove Plus opens up all-time trends and the correlations between moods and themes.",
        },
        {
          type: "paragraph",
          content:
            "The correlations are the interesting part. Seeing that your lowest days cluster around one theme is the kind of thing that is obvious in hindsight and invisible in the moment.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "A pattern is not a cause",
          content:
            "Cove shows what co-occurs in what you wrote. It does not establish why, and it is not a clinical measurement of your mental health.",
        },
        {
          type: "paragraph",
          content:
            "If you like, moods can also sync to Apple Health as State of Mind. That is optional, permission-based, and off until you turn it on.",
        },
      ],
      related: ["year-in-review", "what-cove-notices", "health-sync"],
    },
    {
      id: "year-in-review",
      title: "Year in Review",
      description: "A private look back at the year, shareable as aggregates only.",
      category: "patterns",
      keywords: ["year in review", "wrapped", "recap", "share", "annual", "summary"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Year in Review is a private look back at your writing year: how much you wrote, how the moods moved, and the themes that kept returning.",
        },
        {
          type: "callout",
          variant: "privacy",
          title: "Shareable without sharing your words",
          content:
            "If you export it as an image, that image contains aggregates only. Your entries themselves are not included, because a Wrapped card is not worth leaking a diary over.",
        },
        {
          type: "paragraph",
          content: "Year in Review is part of Cove Plus.",
        },
      ],
      related: ["mood-trends", "compare-free-and-plus", "on-this-day"],
    },
    {
      id: "health-sync",
      title: "Optional Apple Health mood sync",
      description: "Write moods to Health as State of Mind, only if you ask for it.",
      category: "patterns",
      keywords: ["health", "healthkit", "state of mind", "permission", "sync", "apple health"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Cove can write the moods you log into Apple Health as State of Mind entries, so they sit alongside sleep, activity, and anything else you track there.",
        },
        {
          type: "steps",
          items: [
            { title: "Open Settings", description: "Find the Health section." },
            { title: "Turn on mood sync", description: "iOS shows its own permission sheet. Cove only gets the specific access you grant." },
            { title: "Change your mind anytime", description: "Revoke it in the Health app under Sharing, or turn the toggle back off in Cove." },
          ],
        },
        {
          type: "callout",
          variant: "privacy",
          title: "Health is Apple's, not ours",
          content:
            "Data written to Health lives in your Health database under Apple's protections. Obsidian Ridge Labs does not receive it, and this feature is off until you enable it.",
        },
      ],
      related: ["mood-trends", "where-entries-live", "welcome-to-cove"],
    },

    /* ── Devices ──────────────────────────────────────────────────────── */
    {
      id: "widgets-and-siri",
      title: "Widgets, Siri, Spotlight and Control Center",
      description: "Reach the journal without opening the app first, from the Lock Screen, Siri, or Spotlight.",
      category: "devices",
      keywords: ["widget", "lock screen", "standby", "siri", "shortcuts", "spotlight", "control center"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "The friction between thinking something and writing it down is where most journals die. Cove tries to remove it.",
        },
        {
          type: "list",
          items: [
            "Home Screen, Lock Screen, and StandBy widgets showing today's prompt, your streak, or a mood orb.",
            "An interactive mood widget: log how you feel without opening Cove.",
            "A Control Center control for quick entry.",
            "Siri and Shortcuts, including \"Ask Cove about my journal\".",
            "Spotlight search, scoped for privacy, so entries are findable from the Home Screen.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Put the prompt on the Lock Screen",
          content:
            "The Lock Screen prompt widget is the single highest-leverage setup change. Seeing a question at a glance is what turns journaling from an intention into a habit.",
        },
      ],
      related: ["apple-watch", "daily-reminder", "your-first-entry"],
    },
    {
      id: "apple-watch",
      title: "Cove on Apple Watch and iPad",
      description: "Capture a thought or a mood from your wrist, and reread the journal as a spread on iPad.",
      category: "devices",
      keywords: ["watch", "apple watch", "ipad", "capture", "dictate", "wrist", "spread"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "The Apple Watch app is deliberately capture-only. Dictate a thought or log a mood from your wrist, and it queues to your iPhone. The understanding happens on the phone when the two devices sync.",
        },
        {
          type: "paragraph",
          content:
            "On iPad, the Journal opens as a two-page spread, which is a much better way to reread a stretch of writing than a phone-sized column.",
        },
        {
          type: "callout",
          variant: "info",
          title: "The watch is not a reader",
          content:
            "There is no browsing your journal on the wrist, by design. A small screen you glance at in public is the wrong place for a diary.",
        },
      ],
      related: ["widgets-and-siri", "icloud-sync", "app-lock"],
    },
    {
      id: "icloud-sync",
      title: "How Cove uses iCloud",
      description: "Your own private database, with a local-only fallback, and Settings tells you which one opened.",
      category: "devices",
      keywords: ["icloud", "sync", "cloudkit", "backup", "devices", "private database"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Cove stores your journal in a local database and can sync it through your own private iCloud database. Private means your Apple account, not an Obsidian Ridge Labs server, and we cannot read it.",
        },
        {
          type: "heading",
          level: 2,
          content: "The fallback chain",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Private iCloud sync when the container is available.",
            "Local-only at the same location when it is not, so the app still opens and nothing is lost.",
            "In-memory with a plain-language alert only if the on-disk store is genuinely corrupt.",
          ],
        },
        {
          type: "callout",
          variant: "privacy",
          title: "Settings shows the mode you are actually in",
          content:
            "The privacy panel in Settings names which of those three opened. You should not have to guess whether your journal is syncing.",
        },
        {
          type: "paragraph",
          content:
            "Cove is still in development, so exact multi-device behaviour will be confirmed and documented before release. Export remains the backup you fully control either way.",
        },
      ],
      related: ["where-entries-live", "export-your-journal", "apple-watch"],
    },

    /* ── Privacy ──────────────────────────────────────────────────────── */
    {
      id: "where-entries-live",
      title: "Does my journal ever leave my iPhone?",
      description: "The honest data path, including the parts that are not absolute.",
      category: "privacy",
      keywords: ["privacy", "data", "upload", "server", "account", "tracking", "analytics"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "The short version: there is no Cove account, no Obsidian Ridge Labs server that receives your entries, no advertising profile, and no analytics SDK. Reflection runs on your device.",
        },
        {
          type: "heading",
          level: 2,
          content: "The parts worth stating precisely",
        },
        {
          type: "list",
          items: [
            "If you turn on iCloud sync, your entries travel through your own private iCloud database under Apple's protections. That is a real network path, and it is yours.",
            "If you turn on Health sync, the moods you log are written into your Health database.",
            "App Store purchases are verified by Apple, which is how any paid app works.",
            "Anything you export leaves Cove's protection and inherits the privacy of wherever you put it.",
          ],
        },
        {
          type: "callout",
          variant: "privacy",
          title: "Why we list the exceptions",
          content:
            "An app that claims nothing ever leaves your phone while quietly syncing to iCloud is lying by omission. Every path above is optional, visible in Settings, and yours to switch off.",
        },
      ],
      related: ["icloud-sync", "app-lock", "export-your-journal"],
    },
    {
      id: "app-lock",
      title: "Locking Cove with Face ID",
      description: "Biometric or passcode lock, plus a cover in the app switcher.",
      category: "privacy",
      keywords: ["face id", "touch id", "lock", "passcode", "biometric", "privacy screen"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "A journal is the one app most worth locking. Turn on the app lock in Settings and Cove requires Face ID, Touch ID, or your device passcode to open.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "The app switcher is covered too",
          content:
            "When you swipe away from Cove, it shows a privacy cover instead of your open entry. Someone flicking through your apps does not get to read a paragraph over your shoulder.",
        },
        {
          type: "faq",
          items: [
            {
              q: "What if Face ID fails?",
              a: "You can fall back to the device passcode, exactly as you would elsewhere on iOS.",
            },
            {
              q: "Does the lock encrypt my entries?",
              a: "The lock controls access to the app. Your entries also sit inside iOS data protection on a device with a passcode, which is the layer that matters most.",
            },
          ],
        },
      ],
      related: ["where-entries-live", "export-your-journal", "icloud-sync"],
    },
    {
      id: "export-your-journal",
      title: "Export, import, and erase",
      description: "Markdown, JSON, a full ZIP archive, a Day One importer, and a real delete.",
      category: "privacy",
      keywords: ["export", "backup", "markdown", "json", "zip", "day one", "import", "delete", "erase"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Your journal should be portable, including away from us. Cove exports in three shapes.",
        },
        {
          type: "list",
          items: [
            "Markdown: readable anywhere, good for archiving or moving into another writing app.",
            "JSON: structured, good if you want to process entries yourself.",
            "ZIP archive: the complete set, with photos and audio included.",
          ],
        },
        {
          type: "heading",
          level: 2,
          content: "Coming from Day One",
        },
        {
          type: "paragraph",
          content:
            "Cove includes a Day One importer, so years of existing entries can come with you rather than being stranded in an app you have decided to leave.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Erase means erase",
          content:
            "Settings includes a full in-app erase. It removes your entries from the device. If you have iCloud sync on, it removes them from your synced copy too, and there is no Obsidian Ridge Labs backup to restore from. Export first if you might want the archive.",
        },
      ],
      related: ["where-entries-live", "icloud-sync", "app-lock"],
    },

    /* ── Billing ──────────────────────────────────────────────────────── */
    {
      id: "compare-free-and-plus",
      title: "What is free and what Cove Plus adds",
      description: "The line between the two, stated plainly, including the parts that stay free forever.",
      category: "billing",
      keywords: ["free", "plus", "price", "subscription", "lifetime", "trial", "compare"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "heading",
          level: 2,
          content: "Free, forever",
        },
        {
          type: "list",
          items: [
            "Unlimited entries, photos, voice journaling, and tags. Writing is never paywalled.",
            "A per-entry on-device insight: tone, a theme, and a warm reflection.",
            "A daily prompt, a follow-up question while you write, and mood logging with a 14-day trend.",
            "Keyword and semantic search, On This Day, pinning, widgets, Siri, Spotlight, and the app lock.",
            "Export, the Day One importer, and full erase.",
            "One Ask your journal conversation each week, and one Weekly Reflection preview after your first written week.",
          ],
        },
        {
          type: "heading",
          level: 2,
          content: "Cove Plus",
        },
        {
          type: "list",
          items: [
            "Automatic weekly reflections, kept as a rereadable archive.",
            "Unlimited Ask your journal conversations.",
            "Guided seven-day programs.",
            "Every emotion and theme Cove notices, not just the headline one.",
            "All-time mood trends, mood and theme patterns, and Year in Review.",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Pricing",
          content:
            "Cove Plus is $5.99 per month, $34.99 per year with a two-week free trial on annual, or $89.99 once for lifetime access. Cove is still in development, so final pricing is confirmed at release.",
        },
      ],
      related: ["restore-purchase", "weekly-reflection", "ask-your-journal"],
    },
    {
      id: "restore-purchase",
      title: "Restoring a purchase",
      description: "New phone, reinstall, or a purchase that did not appear.",
      category: "billing",
      keywords: ["restore", "purchase", "reinstall", "new phone", "receipt", "missing"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Purchases belong to your Apple Account, not to a Cove account, because there is no Cove account. Restoring is quick.",
        },
        {
          type: "steps",
          items: [
            { title: "Check the Apple Account", description: "Make sure the device is signed in with the same Apple Account you purchased on. Family members each need their own purchase unless it is shared through Family Sharing." },
            { title: "Open Settings in Cove", description: "Tap Restore Purchases." },
            { title: "Give it a moment", description: "The App Store confirms the entitlement and Plus features unlock. If nothing happens, check your network and try once more." },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Still stuck?",
          content:
            "Email support@obsidianridgelabs.com with the Apple Account email used for the purchase and roughly when you bought it, and a real person will sort it out. Refunds themselves are handled by Apple.",
        },
      ],
      related: ["compare-free-and-plus", "where-entries-live"],
    },
  ],
};
