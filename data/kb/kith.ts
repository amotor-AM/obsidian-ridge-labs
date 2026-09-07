import { KnowledgeBase } from "../../types";

export const kithKb: KnowledgeBase = {
  appId: "kith",
  appName: "Kith",
  accent: "#f07f78",
  status: "ready",
  intro:
    "Guides for circles and cadences, reading the Warmth Ring, using the on-device helpers to actually send the message, and keeping private notes private.",
  categories: [
    {
      id: "getting-started",
      title: "Getting started",
      description: "Adding your first people, choosing circles, and what the tabs do.",
      icon: "compass",
    },
    {
      id: "cadence",
      title: "Circles, warmth and cadence",
      description: "How Kith decides who to suggest, and how to make it match your real life.",
      icon: "heart",
    },
    {
      id: "remembering",
      title: "Notes, facts and dates",
      description: "Keeping what matters about a person, and never missing a birthday again.",
      icon: "pen",
    },
    {
      id: "reaching-out",
      title: "Reaching out",
      description: "Drafting a message, talking points, gift ideas, and finishing in one tap.",
      icon: "message-circle",
    },
    {
      id: "ai",
      title: "The on-device AI",
      description: "What the helpers do, what they never see, and how Kith works without them.",
      icon: "cpu",
    },
    {
      id: "devices",
      title: "Widgets, Siri and notifications",
      description: "Logging without opening the app, and nudges that stay gentle.",
      icon: "smartphone",
    },
    {
      id: "privacy",
      title: "Privacy and your data",
      description: "Where relationship notes live, the app lock, and contact importing.",
      icon: "lock",
    },
    {
      id: "billing",
      title: "Plans and billing",
      description: "The free tier, what Kith+ unlocks, and restoring a purchase.",
      icon: "star",
    },
  ],
  articles: [
    /* ── Getting started ──────────────────────────────────────────────── */
    {
      id: "welcome-to-kith",
      title: "Welcome to Kith",
      description: "What Kith is, and why it deliberately is not a CRM.",
      category: "getting-started",
      keywords: ["welcome", "about", "personal crm", "friends", "family", "intro", "tabs"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Kith helps you stay close to the people who matter, and gently tells you before someone drifts.",
        },
        {
          type: "paragraph",
          content:
            "It is not a personal CRM in the sales sense. There are no deal stages, no engagement scores, and no leaderboard of your friendships. The relationship is the thing being tended, not a funnel being optimised.",
        },
        {
          type: "heading",
          level: 2,
          content: "The tabs",
        },
        {
          type: "list",
          items: [
            "Today: who might appreciate hearing from you, plus Coming Up for birthdays and dates.",
            "People: everyone you have added, as a list or as the Orbit.",
            "Settings: the app lock, notifications, your plan, and privacy.",
          ],
        },
        {
          type: "callout",
          variant: "privacy",
          title: "This is the most sensitive data you own",
          content:
            "Private notes about your friends and family, their health, their struggles, and what to buy them. Kith keeps all of it, and all of its intelligence, on your iPhone. There is no account and no server.",
        },
      ],
      related: ["add-your-first-people", "circles-and-cadence", "where-notes-live"],
    },
    {
      id: "add-your-first-people",
      title: "Adding your first people",
      description: "Start with ten people rather than two hundred, and why the Contacts picker only sees who you pick.",
      category: "getting-started",
      keywords: ["add", "people", "contacts", "import", "first", "start", "picker"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Resist the urge to import your entire address book. Kith works best with the people you would genuinely be sad to lose touch with, which for most of us is somewhere between ten and forty.",
        },
        {
          type: "steps",
          items: [
            { title: "Pick from Contacts", description: "The system multi-select picker brings people over with their birthdays and phone numbers. Kith never asks for broad access to your whole address book." },
            { title: "Or add someone manually", description: "A name is enough to start. Everything else can come later." },
            { title: "Choose a circle", description: "Inner, Close, or Wider. This sets a sensible default reach-out rhythm you can override." },
            { title: "Log one past interaction", description: "It gives the Warmth Ring somewhere to start from, so Today is useful on day one rather than in a month." },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Add more from People any time",
          content:
            "The Contacts picker is available from the People tab, not only during onboarding, and it skips anyone already in your Kith.",
        },
      ],
      related: ["circles-and-cadence", "the-warmth-ring", "log-a-connection"],
    },

    /* ── Cadence ──────────────────────────────────────────────────────── */
    {
      id: "circles-and-cadence",
      title: "Circles and reach-out cadence",
      description: "Three circles, a sensible default rhythm, and how to override it per person.",
      category: "cadence",
      keywords: ["circle", "inner", "close", "wider", "cadence", "rhythm", "frequency", "natural"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Every person sits in a circle, and each circle carries a default cadence: how often it feels right to be in touch.",
        },
        {
          type: "list",
          items: [
            "Inner: the handful of people you would call at 2am.",
            "Close: good friends and close family you want to hear from regularly.",
            "Wider: people you like and would happily see, but not every month.",
          ],
        },
        {
          type: "paragraph",
          content:
            "You can override the cadence for any individual, because a sibling you text daily and a sibling you speak to at Christmas can both be Inner.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Or let Kith learn the real rhythm",
          content:
            "Kith can suggest the cadence you two actually keep, inferred from your logged history. It is usually more honest than the one you would pick aspirationally.",
        },
      ],
      related: ["the-warmth-ring", "the-orbit", "add-your-first-people"],
    },
    {
      id: "the-warmth-ring",
      title: "The Warmth Ring",
      description: "A ring that cools gently instead of a red badge that tells you that you failed someone.",
      category: "cadence",
      keywords: ["warmth", "ring", "cool", "drift", "overdue", "guilt", "design"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Each person has a ring around their avatar. It is full and warm just after you have been in touch, and it cools gradually as time passes relative to their cadence.",
        },
        {
          type: "paragraph",
          content:
            "That is the whole mechanic, and the choices in it are deliberate. There is no red overdue state, no number of days you are late, and no completion percentage for a friendship.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Cooling is an invitation",
          content:
            "A cool ring says this person has been quiet for a while. It does not say you failed. Relationships that ebb and return are normal, and an app that treats a quiet month as a violation just makes people delete the app.",
        },
      ],
      related: ["circles-and-cadence", "the-orbit", "today-and-spark"],
    },
    {
      id: "the-orbit",
      title: "The Orbit",
      description: "Your whole circle as a living map: closeness, warmth, and who is drifting, in one glance.",
      category: "cadence",
      keywords: ["orbit", "map", "visual", "closeness", "drift", "view", "people"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Flip the People list into the Orbit and you sit at the centre with your people arranged around you by closeness. They glow when you are freshly in touch and drift visibly outward as they cool.",
        },
        {
          type: "paragraph",
          content:
            "It is the entire idea of the app in one image, and it is much faster to read than a list. You see who has drifted before you have finished looking at it.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Tap anyone to act",
          content:
            "Tap a person in the Orbit to open them, log a connection, or start a draft. It is a map you can work from, not a decoration.",
        },
      ],
      related: ["the-warmth-ring", "today-and-spark", "circles-and-cadence"],
    },
    {
      id: "today-and-spark",
      title: "Today and Today's Spark",
      description: "Who might appreciate hearing from you, and a free daily opener for whoever is most due.",
      category: "cadence",
      keywords: ["today", "spark", "opener", "suggestion", "snooze", "pin", "coming up"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Today is a short list rather than an inbox. It considers cadence, warmth, anyone you have pinned, and anything you have snoozed, then suggests a few people who might appreciate a hello.",
        },
        {
          type: "paragraph",
          content:
            "Birthdays and important dates live separately in Coming Up, so a birthday never gets lost among reach-out suggestions.",
        },
        {
          type: "heading",
          level: 2,
          content: "Today's Spark",
        },
        {
          type: "paragraph",
          content:
            "Once a day, free, Kith writes a personal opener for whoever is most due. It is occasion-aware, written on the device, and one tap from a full draft. The hardest part of reaching out is the first sentence, so Kith writes that one for you.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Snoozing is not failing",
          content:
            "Snooze anyone and they step quietly aside. Nothing accumulates, and nothing turns red.",
        },
      ],
      related: ["draft-a-message", "the-warmth-ring", "log-a-connection"],
    },

    /* ── Remembering ──────────────────────────────────────────────────── */
    {
      id: "notes-and-facts",
      title: "Notes, facts and brain dumps",
      description: "Keeping the details that make you a good friend, without keeping a diary.",
      category: "remembering",
      keywords: ["notes", "facts", "memory", "brain dump", "dictate", "details", "structure"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Kith attaches what you know to the person rather than burying it in a general notes app: their partner's name, the job they are anxious about, the whisky they liked, the surgery coming up.",
        },
        {
          type: "heading",
          level: 2,
          content: "The brain dump",
        },
        {
          type: "paragraph",
          content:
            "Paste or dictate a messy note after a catch-up. On supported iPhones, Kith turns it into discrete structured facts you can keep, edit, or discard, so you do not have to write neat notes while remembering a conversation.",
        },
        {
          type: "callout",
          variant: "privacy",
          title: "Dictation is on-device",
          content:
            "The microphone only appears when speech recognition can run locally. What you say about your friends is not sent to a transcription service.",
        },
        {
          type: "paragraph",
          content:
            "Siri can also remember things for you: ask it to remember something about a person and the note lands in the right place.",
        },
      ],
      related: ["important-dates", "log-a-connection", "on-device-helpers"],
    },
    {
      id: "important-dates",
      title: "Birthdays and important dates",
      description: "Warm, skippable reminders that arrive with something to do.",
      category: "remembering",
      keywords: ["birthday", "anniversary", "date", "reminder", "notification", "coming up", "recurring"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Birthdays imported from Contacts come across automatically, and you can add anniversaries, memorials, or anything else that matters. Recurring dates roll forward on their own.",
        },
        {
          type: "paragraph",
          content:
            "A birthday reminder arrives with a Draft a message action, so the notification opens a draft already aimed at the occasion rather than dumping you on a blank screen at 8am.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Coming Up is deliberately separate",
          content:
            "Dates are not reach-out suggestions. Mixing them would mean a birthday competes with a generic nudge, and birthdays should always win.",
        },
      ],
      related: ["notes-and-facts", "notifications", "draft-a-message"],
    },
    {
      id: "log-a-connection",
      title: "Logging a connection",
      description: "Six ways to record that you were actually in touch.",
      category: "remembering",
      keywords: ["log", "interaction", "called", "texted", "record", "quick log", "widget", "siri"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Logging is what keeps the Warmth Ring honest, so Kith makes it almost frictionless.",
        },
        {
          type: "list",
          items: [
            "Quick log inside the app, with the interaction type and an optional note.",
            "A one-tap tick on the Reach Out widget, without opening the app.",
            "Straight from a notification banner.",
            "Siri and Shortcuts, such as logging that you called someone.",
            "A Control Center tile.",
            "Automatically prompted: come back from actually messaging or calling and Kith gently asks how it went.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "It knows when not to ask",
          content:
            "Bounce-backs and stale returns are ignored, so Kith does not ask how it went when you clearly did not send anything.",
        },
      ],
      related: ["notifications", "the-warmth-ring", "notes-and-facts"],
    },

    /* ── Reaching out ─────────────────────────────────────────────────── */
    {
      id: "draft-a-message",
      title: "Drafting a message",
      description: "A warm message in your voice, tweakable in one tap, sent straight into Messages.",
      category: "reaching-out",
      keywords: ["draft", "message", "write", "text", "tone", "shorter", "warmer", "messages"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Open someone and ask for a draft. Kith writes a personal message using what you have saved about them, streamed live so you can watch it take shape.",
        },
        {
          type: "paragraph",
          content:
            "Then adjust it. Shorter, warmer, more casual, or add a detail, each in one tap. Or just edit it by hand, which is what most people end up doing and is completely fine.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "It opens straight into Messages",
          content:
            "The draft goes into Messages with the text prefilled. The loop does not dead-end at a clipboard, which is the single most common way apps like this waste your time.",
        },
        {
          type: "paragraph",
          content:
            "Your draft is kept per person, so if you get interrupted the words are still there next time, and they accumulate rather than resetting.",
        },
      ],
      related: ["talking-points", "gift-ideas", "on-device-helpers"],
    },
    {
      id: "talking-points",
      title: "What to ask about",
      description: "Specific, caring questions instead of how are you.",
      category: "reaching-out",
      keywords: ["talking points", "questions", "ask", "conversation", "starter", "catch up"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Kith can suggest specific things to ask based on what you have saved: how the interview went, whether the dog recovered, how the move is going.",
        },
        {
          type: "paragraph",
          content:
            "Save the good ones to the person as To ask about, and they are waiting on their page when you next speak.",
        },
        {
          type: "callout",
          variant: "info",
          title: "There is also Where things stand",
          content:
            "A brief recap of your recent history with someone, which is genuinely useful before a call with a person you have not spoken to in five months.",
        },
      ],
      related: ["draft-a-message", "notes-and-facts", "gift-ideas"],
    },
    {
      id: "gift-ideas",
      title: "Gift ideas",
      description: "Directions tied to what someone actually loves, savable to their page.",
      category: "reaching-out",
      keywords: ["gift", "present", "birthday", "ideas", "suggestions", "save"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Ask for gift ideas and Kith proposes directions grounded in the facts you have saved about someone, rather than generic best-seller lists.",
        },
        {
          type: "paragraph",
          content:
            "Save the ones worth keeping to their page, so next December you are not starting from nothing.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Directions, not products",
          content:
            "Kith is offline and has no shopping catalogue. It suggests what kind of thing might land, and the buying is up to you.",
        },
      ],
      related: ["talking-points", "notes-and-facts", "important-dates"],
    },

    /* ── AI ───────────────────────────────────────────────────────────── */
    {
      id: "on-device-helpers",
      title: "What the AI helpers do, and never see",
      description: "Six on-device helpers, what each one does, and what none of them ever send anywhere.",
      category: "ai",
      keywords: ["ai", "apple intelligence", "on-device", "helpers", "privacy", "foundation models"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Every AI feature in Kith runs on Apple's on-device model. Your relationship notes are never sent to Obsidian Ridge Labs or to any AI provider, because they never leave the phone.",
        },
        {
          type: "list",
          items: [
            "Today's Spark: a daily opener for whoever is most due.",
            "Brain dump to memory: turn a messy note into structured facts.",
            "Draft a message: a warm message in your voice, adjustable in one tap.",
            "Gift ideas: directions tied to what you know about someone.",
            "What to ask: specific, caring conversation starters.",
            "Where things stand: a brief recap of a relationship.",
          ],
        },
        {
          type: "callout",
          variant: "privacy",
          title: "The reason this matters",
          content:
            "Every cloud personal CRM either uploads your contacts to enrich them or requires a hosted account. Notes about a friend's health or a family conflict are exactly the wrong thing to put on someone else's server.",
        },
      ],
      related: ["apple-intelligence-requirement", "draft-a-message", "where-notes-live"],
    },
    {
      id: "apple-intelligence-requirement",
      title: "Why Kith requires Apple Intelligence",
      description: "The screen you may see at launch, what each state means, and why the answer is a gate rather than a lesser version.",
      category: "ai",
      keywords: ["apple intelligence", "requirement", "gate", "unsupported", "compatibility", "older iphone", "settings"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Kith checks for Apple Intelligence when it launches. On-device AI is the product here rather than a garnish, so a half-working Kith would be worse than an honest explanation.",
        },
        {
          type: "heading",
          level: 2,
          content: "What you need",
        },
        {
          type: "paragraph",
          content:
            "iPhone 15 Pro or later, running iOS 26 or later, with Apple Intelligence turned on in Settings and the on-device model finished downloading.",
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
            "Apple Intelligence turned off: a screen with a direct path into iOS Settings, which clears itself when you come back.",
            "The model still downloading: an explanation that resolves on its own the next time you open Kith.",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Why the check happens at launch",
          content:
            "There is no App Store setting that prevents installation on a device without Apple Intelligence, so the check has to run when the app does. That is why Kith can be downloaded and then tell you it cannot help.",
        },
        {
          type: "heading",
          level: 2,
          content: "Why not a lesser version instead",
        },
        {
          type: "paragraph",
          content:
            "Circles, cadences, the Warmth Ring, the Orbit, logging, notes, important dates, reminders, widgets, and Spotlight are not AI features. The helpers that make Kith worth opening every day are, so the app gates rather than quietly hiding half of itself.",
        },
      ],
      related: ["on-device-helpers", "welcome-to-kith", "where-notes-live"],
    },

    /* ── Devices ──────────────────────────────────────────────────────── */
    {
      id: "notifications",
      title: "Notifications that do the work",
      description: "Log or draft straight from the banner, and turn any of it off.",
      category: "devices",
      keywords: ["notification", "nudge", "drift", "banner", "actionable", "snooze", "daily"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "When someone's cadence elapses, Kith sends one warm pre-scheduled notification. One, not a series. It is never repeated and never framed as overdue.",
        },
        {
          type: "paragraph",
          content:
            "The banner carries actions. Connect logs the interaction without opening the app. In a week snoozes them. A birthday reminder offers Draft a message, which opens a draft already aimed at the occasion.",
        },
        {
          type: "list",
          items: [
            "Drift nudges: on by default, one per person, never repeated.",
            "Birthday and important-date reminders: warm and skippable.",
            "A daily nudge: opt-in, off unless you want it.",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "All local",
          content:
            "Every notification is scheduled on your device from your own data. There is no push server, so nobody else knows who you are drifting from.",
        },
      ],
      related: ["widgets-and-siri", "log-a-connection", "today-and-spark"],
    },
    {
      id: "widgets-and-siri",
      title: "Widgets, Siri and Spotlight",
      description: "Logging and looking someone up without opening Kith.",
      category: "devices",
      keywords: ["widget", "lock screen", "standby", "siri", "shortcuts", "spotlight", "control center"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "list",
          items: [
            "Reach Out and Coming Up widgets on the Home Screen, Lock Screen, and StandBy.",
            "A one-tap tick on the Reach Out widget rows that logs a connection in place.",
            "Siri and Shortcuts: log that you called someone, ask who you should reach out to, draft a message, or remember something about a person.",
            "A Control Center control for logging a connection.",
            "Spotlight: people and their interests are searchable system-wide.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "The Reach Out widget is the whole app for some people",
          content:
            "Put it on your Lock Screen. Seeing two names and tapping a tick when you have messaged them is most of the value with none of the effort.",
        },
      ],
      related: ["notifications", "log-a-connection", "compare-free-and-plus"],
    },

    /* ── Privacy ──────────────────────────────────────────────────────── */
    {
      id: "where-notes-live",
      title: "Where your relationship notes live",
      description: "On your phone, in a local store, with no account and no server.",
      category: "privacy",
      keywords: ["privacy", "server", "account", "upload", "contacts", "analytics", "icloud"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "People, interactions, facts, and important dates are stored in a local database on your iPhone. The AI helpers run on the device. There is no Kith account, no Obsidian Ridge Labs server, no analytics SDK, and no advertising network.",
        },
        {
          type: "heading",
          level: 2,
          content: "Contacts",
        },
        {
          type: "paragraph",
          content:
            "People are seeded through Apple's system multi-select picker. Kith receives only the contacts you explicitly pick, and never requests broad access to your address book. It does not upload your contacts anywhere to enrich them.",
        },
        {
          type: "callout",
          variant: "info",
          title: "About iCloud",
          content:
            "The data model is built to be CloudKit-compatible, but the current build stores your Kith locally rather than syncing it. Kith is still in development, and any sync behaviour will be documented precisely before release rather than assumed.",
        },
      ],
      related: ["app-lock", "on-device-helpers", "welcome-to-kith"],
    },
    {
      id: "app-lock",
      title: "Locking Kith with Face ID",
      description: "An optional lock for the most sensitive notes in your life.",
      category: "privacy",
      keywords: ["face id", "touch id", "lock", "passcode", "biometric", "privacy"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Turn on the app lock in Settings and Kith requires Face ID, Touch ID, or your device passcode to open.",
        },
        {
          type: "paragraph",
          content:
            "It is worth doing here more than in most apps. Notes about a friend's illness or a family situation are not things you want visible to someone who picks up your unlocked phone.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Passcode fallback",
          content:
            "If Face ID fails, you can fall back to your device passcode, exactly as elsewhere on iOS.",
        },
      ],
      related: ["where-notes-live", "notes-and-facts", "year-in-touch"],
    },
    {
      id: "year-in-touch",
      title: "Your year in touch",
      description: "A private yearly recap, rendered entirely on your phone.",
      category: "privacy",
      keywords: ["year", "recap", "share", "card", "annual", "connections", "reconnection"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Once a year, Kith puts together a recap of your connections: how many times you were in touch, the reconnections that almost slipped away, and your steadiest thread.",
        },
        {
          type: "callout",
          variant: "privacy",
          title: "Rendered locally, shared only if you choose",
          content:
            "The share card is drawn on your phone. Nothing is uploaded to produce it, and it exists only if you decide to share it.",
        },
      ],
      related: ["app-lock", "the-warmth-ring", "compare-free-and-plus"],
    },

    /* ── Billing ──────────────────────────────────────────────────────── */
    {
      id: "compare-free-and-plus",
      title: "What is free and what Kith+ adds",
      description: "The real limits, and why the daily Spark is on the free side of the line.",
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
            "Up to 10 people.",
            "Three AI assists a week, plus a free daily Spark that does not count against them.",
            "All the core features: circles, cadences, the Warmth Ring, the Orbit, Today, logging, notes, important dates, and reminders.",
            "Widgets, Siri, Shortcuts, Control Center, Spotlight, and the app lock.",
          ],
        },
        {
          type: "heading",
          level: 2,
          content: "Kith+",
        },
        {
          type: "list",
          items: [
            "Unlimited people.",
            "Unlimited AI helpers.",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Pricing",
          content:
            "Kith+ is $3.99 per month, $24.99 per year with a seven-day trial, or $49.99 once for lifetime access. Kith is still in development, so final pricing is confirmed at release.",
        },
      ],
      related: ["restore-purchase", "today-and-spark", "on-device-helpers"],
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
            "There is no Kith account, so purchases live with your Apple Account.",
        },
        {
          type: "steps",
          items: [
            { title: "Check the Apple Account", description: "The device must be signed in with the account used for the purchase." },
            { title: "Open Settings in Kith", description: "Tap Restore Purchases." },
            { title: "Wait a moment", description: "The App Store confirms the entitlement and Kith+ unlocks." },
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
      related: ["compare-free-and-plus", "where-notes-live"],
    },
  ],
};
