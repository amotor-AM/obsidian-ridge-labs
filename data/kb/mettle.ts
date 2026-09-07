import { KnowledgeBase } from "../../types";

export const mettleKb: KnowledgeBase = {
  appId: "mettle",
  appName: "Mettle",
  accent: "#ef8354",
  status: "ready",
  intro:
    "Guides for building a program, running a session, reading the reason behind every prescription, and training around an injury.",
  categories: [
    {
      id: "getting-started",
      title: "Getting started",
      description: "Your first program, the baseline check, and what the four tabs do.",
      icon: "compass",
    },
    {
      id: "programming",
      title: "Your program",
      description: "How the plan is built, how it progresses, deloads, and how to edit it by hand.",
      icon: "route",
    },
    {
      id: "workouts",
      title: "Running a session",
      description: "Logging sets, warm-ups, plate math, rest timers, supersets, and swaps.",
      icon: "gauge",
    },
    {
      id: "coach",
      title: "The AI coach",
      description: "What the coach can and cannot decide, what it remembers, and how it explains itself.",
      icon: "message-circle",
    },
    {
      id: "recovery",
      title: "Readiness, injury and rest",
      description: "The readiness check, injury restrictions, prehab, and why rest days are part of the plan.",
      icon: "heart",
    },
    {
      id: "devices",
      title: "Watch, Health and widgets",
      description: "Apple Watch, HealthKit, Live Activities, notifications, Siri, and Spotlight.",
      icon: "watch",
    },
    {
      id: "privacy",
      title: "Privacy and your data",
      description: "Where training data lives, how iCloud is used, and how to export or erase everything.",
      icon: "lock",
    },
    {
      id: "billing",
      title: "Plans and billing",
      description: "Where the free and Pro line is drawn, and restoring a purchase.",
      icon: "star",
    },
  ],
  articles: [
    /* ── Getting started ──────────────────────────────────────────────── */
    {
      id: "welcome-to-mettle",
      title: "Welcome to Mettle",
      description: "What makes Mettle different from every other app that tells you what to lift.",
      category: "getting-started",
      keywords: ["welcome", "about", "intro", "strength", "coach", "why this", "tabs"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Most strength apps tell you what to lift. Mettle tells you why: because you topped the rep range, because you are four weeks from a deload, because your squat needs volume your bench does not.",
        },
        {
          type: "paragraph",
          content:
            "It also meets you where you are. On day one the language is plain and reassuring. A year in, the same program gets described in the terms an experienced lifter actually wants. What changes is the explanation, never the quality of the plan underneath.",
        },
        {
          type: "heading",
          level: 2,
          content: "The four tabs",
        },
        {
          type: "list",
          items: [
            "Today: the session waiting for you, or a recovery card if you have earned one.",
            "Plan: the program, the training week, and the ability to edit any day.",
            "Coach: a conversation grounded in your own program and history.",
            "Progress: volume, duration, heart rate, tempo, records, and set-by-set history.",
          ],
        },
        {
          type: "callout",
          variant: "privacy",
          title: "No account, no body data sent to us",
          content:
            "There is nothing to sign up for. Programs are generated on your iPhone, and your training and body metrics stay on your devices.",
        },
      ],
      related: ["build-your-first-program", "why-this", "where-training-data-lives"],
    },
    {
      id: "build-your-first-program",
      title: "Building your first program",
      description: "Six answers, then a complete plan generated on your phone.",
      category: "getting-started",
      keywords: ["first", "setup", "program", "onboarding", "goal", "equipment", "split"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Mettle needs to know your situation before it can write anything sensible. The setup is short and every answer is changeable later.",
        },
        {
          type: "steps",
          items: [
            { title: "Goal", description: "Build muscle, get stronger, or general fitness. This shapes rep ranges and how volume is distributed." },
            { title: "Experience", description: "Answer honestly. Mettle will re-infer your real level from how you train anyway, and it will tell you when it thinks you have moved up." },
            { title: "Equipment", description: "Full gym, home setup, dumbbells only, bodyweight. The engine only prescribes what you can actually load." },
            { title: "Schedule", description: "Training days per week and roughly how long a session can be. A realistic three days beats an aspirational six." },
            { title: "Units and bodyweight", description: "Pounds or kilograms, and optional bodyweight, which lets Mettle judge strength relative to you rather than in the abstract." },
            { title: "Generate", description: "A split is chosen, exercises are selected from the curated library, and the deterministic engine composes the sets, reps, and rest." },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "The baseline check is worth the five minutes",
          content:
            "Mettle can ask about lifts you already know and run a few gentle movement checks. It is the difference between a first week calibrated to you and a first week of guessing.",
        },
      ],
      related: ["how-progression-works", "edit-your-program", "readiness-check"],
    },

    /* ── Programming ──────────────────────────────────────────────────── */
    {
      id: "why-this",
      title: "Reading Why this?",
      description: "Every prescription can be interrogated, and the answer is generated by the engine, not the model.",
      category: "programming",
      keywords: ["why this", "explain", "reason", "rationale", "black box", "transparency"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Tap Why this? on any prescription and Mettle shows the actual reasoning: you topped the rep range last time, so the load went up five pounds and the reps restarted at six.",
        },
        {
          type: "heading",
          level: 2,
          content: "Why this is trustworthy",
        },
        {
          type: "paragraph",
          content:
            "The explanation is produced by the same deterministic engine that produced the numbers. It is not a language model narrating a decision it did not make, which is how most apps do it and why their explanations can be confidently wrong.",
        },
        {
          type: "callout",
          variant: "info",
          title: "The depth follows your level",
          content:
            "A new lifter sees permission and safety. An experienced lifter sees the increments, the rep-range logic, and where they sit in the deload cycle. Same reasoning, different altitude.",
        },
      ],
      related: ["how-progression-works", "ai-coach-boundaries", "welcome-to-mettle"],
    },
    {
      id: "how-progression-works",
      title: "How progression and deloads work",
      description: "Double progression, real gym increments, and deloads counted from weeks you actually trained.",
      category: "programming",
      keywords: ["progression", "deload", "overload", "double progression", "increment", "plates", "volume"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Mettle uses double progression: work up through the rep range at a given load, and when you top it, the load goes up and the reps restart at the bottom of the range.",
        },
        {
          type: "list",
          items: [
            "Increments are real: a 45 lb bar, 2.5 lb change plates, 5 lb dumbbell jumps. Mettle does not prescribe a weight you cannot build.",
            "Your own feedback counts. Too light, just right, or too heavy after a set feeds directly into the next prescription.",
            "Weekly volume is accumulated per muscle across the whole week against a landmark appropriate to your experience, so a six-day split cannot quietly double your chest volume.",
          ],
        },
        {
          type: "heading",
          level: 2,
          content: "Deloads",
        },
        {
          type: "paragraph",
          content:
            "A deload lands every fifth training week, counted from weeks you actually trained rather than weeks on the calendar. A three-week layoff does not fast-forward you into recovery, and regenerating your program does not reset the cycle.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Take the deload",
          content:
            "It is scheduled because the previous four weeks worked, not because Mettle thinks you are fragile. Skipping it repeatedly is the most common way to stall.",
        },
      ],
      related: ["why-this", "edit-your-program", "level-up"],
    },
    {
      id: "level-up",
      title: "Growing out of your level",
      description: "How Mettle infers your real experience and offers to move you up.",
      category: "programming",
      keywords: ["level", "experience", "beginner", "intermediate", "advanced", "progress", "adapt"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Mettle infers experience from evidence rather than from what you claimed in onboarding: how long you have trained, your strength relative to bodyweight, whether you log RPE, and the language you use in notes.",
        },
        {
          type: "paragraph",
          content:
            "When the evidence says you have outgrown your level, Mettle says so and offers to move you up. Coaching depth, terminology, and program structure follow.",
        },
        {
          type: "callout",
          variant: "info",
          title: "It is an offer, not a demotion system",
          content:
            "Level-up prompts are free, never nagging, and always declinable. You can also set your level yourself if the inference does not match how you feel.",
        },
      ],
      related: ["how-progression-works", "why-this", "build-your-first-program"],
    },
    {
      id: "edit-your-program",
      title: "Editing your program by hand",
      description: "Add, remove, reorder, and retune any training day. The engine still owns the weight.",
      category: "programming",
      keywords: ["edit", "customise", "reorder", "sets", "reps", "rest", "swap", "program"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "A generated program is a starting point, not a contract. Open any training day and add, remove, reorder, or retune the sets, reps, and rest.",
        },
        {
          type: "callout",
          variant: "info",
          title: "The division of labour",
          content:
            "The volume is yours. The weight stays with the engine, so your edits cannot accidentally produce a load your history does not support.",
        },
        {
          type: "paragraph",
          content:
            "You can also add your own exercises for the machines your gym actually has. Custom exercises are searchable, swappable, loggable, and charted like anything else. They are deliberately never handed to the AI, because the curated library is the safety boundary for generation.",
        },
      ],
      related: ["exercise-library", "how-progression-works", "running-a-session"],
    },
    {
      id: "exercise-library",
      title: "The exercise library",
      description: "263 curated exercises, tiered so staples lead and oddities stay one swap away.",
      category: "programming",
      keywords: ["library", "exercises", "demos", "form", "cues", "search", "custom", "spotlight"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Mettle ships with 263 curated exercises. Each is tiered as core, common, or novelty, which is why traditional staple lifts lead your program and unusual variations stay available as a swap rather than being prescribed at you.",
        },
        {
          type: "list",
          items: [
            "Instructions and form cues for each movement.",
            "Animated demonstrations for nearly all of them, bundled offline at around eleven megabytes and aware of Reduce Motion.",
            "Full search, and indexing into Spotlight so you can find a lift from the Home Screen.",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Demonstration media credit",
          content:
            "Animated demonstrations are licensed media, credited in the app. They are bundled rather than streamed, so they work in a basement gym with no signal.",
        },
      ],
      related: ["edit-your-program", "running-a-session", "ai-coach-boundaries"],
    },

    /* ── Workouts ─────────────────────────────────────────────────────── */
    {
      id: "running-a-session",
      title: "Running a live workout",
      description: "One big button, automatic warm-ups, plate math, and a rest alert that reaches a locked phone.",
      category: "workouts",
      keywords: ["workout", "log", "set", "rest timer", "warmup", "plate math", "live activity"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "The live workout screen is built for someone with chalk on their hands. The Complete Set action is deliberately large, and the screen stays awake for the whole session.",
        },
        {
          type: "list",
          items: [
            "Automatic warm-up sets, and first-use load calibration for a lift you have never done here.",
            "Plate math, so you know what to put on the bar rather than doing arithmetic between sets.",
            "Smart rest timers, with an alert that reaches you even when the phone is locked.",
            "Timed, AMRAP, drop, and failure sets, unilateral sides, and supersets.",
            "Reorder, skip, or swap an exercise mid-session when the rack is taken.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Minimise, do not quit",
          content:
            "Leaving the session collapses it into a resume bar so you can browse the rest of the app without losing your place. A force-quit is survivable too; Mettle offers to resume.",
        },
      ],
      related: ["mid-session-swap", "apple-watch", "how-progression-works"],
    },
    {
      id: "mid-session-swap",
      title: "When the equipment is taken",
      description: "Swapping an exercise when the rack is taken, without leaving a hole in your training week.",
      category: "workouts",
      keywords: ["swap", "substitute", "busy gym", "equipment", "alternative", "skip"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Someone is camped on the rack. Swap the exercise from within the session and Mettle offers alternatives that train the same thing with the equipment you have.",
        },
        {
          type: "paragraph",
          content:
            "Because the engine tracks volume per muscle across the week rather than per exercise, a substitution keeps your week intact instead of leaving a hole.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Skipping is allowed",
          content:
            "You can skip a set or an exercise. Mettle records what actually happened, which is the only way the next prescription can be right.",
        },
      ],
      related: ["running-a-session", "readiness-check", "edit-your-program"],
    },

    /* ── Coach ────────────────────────────────────────────────────────── */
    {
      id: "ai-coach-boundaries",
      title: "What the AI coach can and cannot decide",
      description: "The line between the model and the engine, and why it is drawn there.",
      category: "coach",
      keywords: ["ai", "coach", "safety", "boundary", "model", "engine", "hallucination"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "This is the most important thing to understand about Mettle. The language model never owns a number.",
        },
        {
          type: "list",
          items: [
            "The deterministic engine owns every set, rep, load, rest interval, progression step, and deload.",
            "The model selects and sequences exercises only from the curated library, and explains the plan.",
            "The reasoning shown in Why this? comes from the engine, so it cannot be fabricated.",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "It is not a medical professional",
          content:
            "Mettle is a training tool. It is not a physiotherapist, doctor, or diagnostic service. Pain that is sharp, persistent, or worsening deserves a qualified human, not an app.",
        },
        {
          type: "paragraph",
          content:
            "The practical consequence is that the model cannot invent an unsafe movement or a nonsensical load, because it was never given the authority to set one.",
        },
      ],
      related: ["coach-memory", "why-this", "injury-restrictions"],
    },
    {
      id: "coach-memory",
      title: "What the coach remembers",
      description: "Structured facts you tell it, proposals you approve, and nothing sent anywhere.",
      category: "coach",
      keywords: ["memory", "remember", "conversation", "proposal", "approve", "facts", "context"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "The Coach tab is a real conversation grounded in your program, history, and prescriptions. Tell it something like \"I hurt my shoulder\" or \"I feel unsteady in squats\" and it keeps that as a structured fact rather than losing it when the chat scrolls.",
        },
        {
          type: "heading",
          level: 2,
          content: "Proposals are previewed, not applied",
        },
        {
          type: "paragraph",
          content:
            "When the coach suggests a concrete change (an exercise swap, a restriction, a schedule edit) it arrives as a card you can read and approve. Nothing changes your program until you say so. If a complaint is too vague to act on, it asks a clarifying question instead of guessing.",
        },
        {
          type: "callout",
          variant: "privacy",
          title: "The conversation stays on the phone",
          content:
            "The coach runs on Apple's on-device model. Your training complaints, injuries, and history are not sent to Obsidian Ridge Labs or to any AI provider.",
        },
        {
          type: "paragraph",
          content:
            "Conversations, athlete memory, and injury restrictions are all free. The line for Pro is drawn at depth, never at the coach's memory.",
        },
      ],
      related: ["ai-coach-boundaries", "injury-restrictions", "compare-free-and-pro"],
    },

    /* ── Recovery ─────────────────────────────────────────────────────── */
    {
      id: "readiness-check",
      title: "The readiness check",
      description: "Three taps that can make today shorter, easier, or bodyweight-only without rewriting the plan.",
      category: "recovery",
      keywords: ["readiness", "energy", "soreness", "sleep", "adjust", "easier", "shorter"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Before a session you can answer three quick questions about energy, soreness, and sleep. Mettle combines them conservatively with any Health signals you have opted into.",
        },
        {
          type: "paragraph",
          content:
            "Then you choose. Start as planned, or instantly make the day shorter, easier, no-barbell, or bodyweight-only. None of those rewrite your program; they adjust today.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "A shorter session beats a skipped one",
          content:
            "The readiness options exist because the alternative to a hard session is usually no session at all. Turning down the dial keeps the week intact.",
        },
      ],
      related: ["rest-days", "injury-restrictions", "running-a-session"],
    },
    {
      id: "rest-days",
      title: "Rest is part of the plan",
      description: "Why Today sometimes shows a recovery card instead of a workout.",
      category: "recovery",
      keywords: ["rest", "recovery", "day off", "commitment", "stretching", "week"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Finish today's session, or meet your weekly commitment, and Today switches to a recovery card rather than pushing another workout at you.",
        },
        {
          type: "paragraph",
          content:
            "Training anyway is always one tap away. The card is a default, not a lock.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Rest days do something",
          content:
            "If you have an active injury restriction, a phase-appropriate stretching routine appears on rest days, so recovery is a small task rather than an absence of one.",
        },
      ],
      related: ["readiness-check", "injury-restrictions", "how-progression-works"],
    },
    {
      id: "injury-restrictions",
      title: "Training around an injury",
      description: "A restriction with a lifecycle: substitutions, load caps, prehab, and a weekly check-in.",
      category: "recovery",
      keywords: ["injury", "pain", "shoulder", "knee", "restriction", "prehab", "check-in", "comeback"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Tell the coach where it hurts and it becomes a restriction rather than a note you have to remember yourself.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Affected movements are substituted out of your program.",
            "Progression caps are applied, landing on real gym increments.",
            "Phase-matched prehab drills join your warm-up.",
            "A stretching routine appears on rest days.",
            "A three-tap weekly check-in tightens, loosens, or resolves the restriction.",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Mettle is not treating you",
          content:
            "This is programming that works around discomfort you report. It is not rehabilitation, diagnosis, or medical advice. See a professional for anything sharp, persistent, or worsening.",
        },
        {
          type: "paragraph",
          content: "Every adjustment made under a restriction says why it was made.",
        },
      ],
      related: ["coach-memory", "readiness-check", "ai-coach-boundaries"],
    },

    /* ── Devices ──────────────────────────────────────────────────────── */
    {
      id: "apple-watch",
      title: "Mettle on Apple Watch",
      description: "Rep tempo, per-rep haptics, live heart rate, and the rest timer on your wrist.",
      category: "devices",
      keywords: ["watch", "apple watch", "haptic", "rep", "tempo", "heart rate", "remote", "log"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "The Watch app is a companion to a session your iPhone owns. It times the lowering and lifting phase of each rep, gives you a short distinct haptic on every completed rep, logs sets, shows live and average heart rate, and runs the rest timer.",
        },
        {
          type: "callout",
          variant: "info",
          title: "It handles a phone in a locker",
          content:
            "Commands queue when the phone is briefly unreachable and deduplicate on delivery, so tapping twice because nothing happened does not log two sets.",
        },
        {
          type: "paragraph",
          content:
            "A real HealthKit workout session runs in the background, which is what records heart rate and active energy properly rather than estimating them.",
        },
      ],
      related: ["health-integration", "running-a-session", "where-training-data-lives"],
    },
    {
      id: "health-integration",
      title: "Apple Health, widgets and reminders",
      description: "Opted-in signals in, rich workouts out, and nudges that learn when you train.",
      category: "devices",
      keywords: ["health", "healthkit", "widget", "notification", "reminder", "siri", "shortcuts", "live activity"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "With your permission, Mettle reads body and recovery signals from Health and writes rich Watch workouts back to it. Heart rate and measured rep tempo can extend recovery and refine the next set or session.",
        },
        {
          type: "callout",
          variant: "privacy",
          title: "Processed locally, never sent to us",
          content:
            "Health data is used on the device. Obsidian Ridge Labs does not receive it, and you can revoke access in the Health app at any time.",
        },
        {
          type: "heading",
          level: 2,
          content: "Reminders that learn you",
        },
        {
          type: "paragraph",
          content:
            "On the device, Mettle learns roughly when you train on each weekday and nudges you then, with supportive notes on rest days. The wording is generated by Apple Intelligence and tuned to your level, with a deterministic fallback, and it never invents a statistic about you.",
        },
        {
          type: "paragraph",
          content:
            "Home Screen and Lock Screen widgets, Live Activities during a session, Siri and Shortcuts, and Spotlight indexing are all included and all free.",
        },
      ],
      related: ["apple-watch", "where-training-data-lives", "compare-free-and-pro"],
    },

    /* ── Privacy ──────────────────────────────────────────────────────── */
    {
      id: "where-training-data-lives",
      title: "Where your training data lives",
      description: "On your device, in your own private iCloud, and nowhere we can read it.",
      category: "privacy",
      keywords: ["privacy", "icloud", "sync", "account", "server", "analytics", "offline"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "Mettle has no account, no analytics, and no tracking. Program generation, coaching, and progression all run on your iPhone, and the app works offline.",
        },
        {
          type: "paragraph",
          content:
            "Training data is stored on the device and can sync through your own private iCloud database when that is available, with a local-only store as the fallback. Private means your Apple account. We cannot read it.",
        },
        {
          type: "callout",
          variant: "info",
          title: "What still uses the network",
          content:
            "App Store purchase verification, iCloud sync if it is available, and any web link you deliberately tap. Nothing else.",
        },
        {
          type: "paragraph",
          content:
            "Mettle is still in development, so exact multi-device sync behaviour will be confirmed and documented before release.",
        },
      ],
      related: ["export-and-import", "health-integration", "coach-memory"],
    },
    {
      id: "export-and-import",
      title: "Exporting, importing, and erasing",
      description: "Bring a training history in, take yours out, or delete it permanently.",
      category: "privacy",
      keywords: ["export", "import", "csv", "backup", "migrate", "delete", "erase", "units"],
      updated: "2026-09-07",
      blocks: [
        {
          type: "paragraph",
          content:
            "You can export your entire history, and import Mettle exports or common workout-log CSVs from other apps. Parsing and saving both happen on the device.",
        },
        {
          type: "heading",
          level: 2,
          content: "Imports show their work",
        },
        {
          type: "list",
          items: [
            "You see what was found and which weight unit was detected before anything is written.",
            "An ambiguous file never silently assumes kilograms.",
            "Duplicates are skipped.",
            "A whole import can be undone in one tap.",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Erase is permanent",
          content:
            "Settings can erase everything. There is no Obsidian Ridge Labs backup to restore from, so export first if you might want the history.",
        },
      ],
      related: ["where-training-data-lives", "edit-your-program", "compare-free-and-pro"],
    },

    /* ── Billing ──────────────────────────────────────────────────────── */
    {
      id: "compare-free-and-pro",
      title: "What is free and what Mettle Pro adds",
      description: "The line is drawn at depth, never at the daily habit, safety, or the coach's memory.",
      category: "billing",
      keywords: ["free", "pro", "price", "subscription", "lifetime", "trial", "compare"],
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
            "AI program generation and weekly regeneration.",
            "Full live-workout logging, rest timer, and Live Activity.",
            "The conversational coach that remembers you.",
            "Injury restrictions, prehab warm-ups, and weekly check-ins.",
            "History, body metrics, and the Today widget.",
            "Custom exercises, and CSV import and export.",
            "The Apple Watch companion and hands-free logging.",
            "Widgets, App Intents, Siri shortcuts, exercise swaps, and contextual lift questions.",
          ],
        },
        {
          type: "heading",
          level: 2,
          content: "Mettle Pro",
        },
        {
          type: "list",
          items: [
            "Multiple saved programs, and switching between them.",
            "The weekly Coach Review, with evidence and next actions.",
            "Personal records and per-exercise strength trends.",
            "Proactive form-tip coaching on every rest.",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Pricing",
          content:
            "Mettle Pro is $4.99 per month, $29.99 per year with a seven-day trial, or $79.99 once for lifetime access. Mettle is still in development, so final pricing is confirmed at release.",
        },
      ],
      related: ["restore-purchase", "coach-memory", "welcome-to-mettle"],
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
            "There is no Mettle account, so purchases live with your Apple Account.",
        },
        {
          type: "steps",
          items: [
            { title: "Check the Apple Account", description: "The device must be signed in with the account used for the purchase." },
            { title: "Open Settings in Mettle", description: "Tap Restore Purchases." },
            { title: "Wait a moment", description: "The App Store confirms the entitlement and Pro features unlock." },
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
      related: ["compare-free-and-pro", "where-training-data-lives"],
    },
  ],
};
