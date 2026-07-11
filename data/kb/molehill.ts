import { KnowledgeBase } from "../../types";

export const molehillKb: KnowledgeBase = {
  appId: "molehill",
  appName: "Molehill",
  accent: "#9be08a",
  status: "ready",
  intro:
    "Learn how Molehill turns an overwhelming task into one manageable next step, with guides for focus, privacy, AI, integrations, and plans.",
  categories: [
    {
      id: "getting-started",
      title: "Getting started",
      description: "Your first task, finding your way around, and how to begin when starting feels hard.",
      icon: "mountain",
    },
    {
      id: "breaking-down",
      title: "Breaking tasks down",
      description: "Turn one overwhelming task into small, concrete steps you can actually start.",
      icon: "list-checks",
    },
    {
      id: "brain-dump",
      title: "Brain dump",
      description: "Empty everything out of your head and let Molehill sort it into tasks.",
      icon: "sparkles",
    },
    {
      id: "focus",
      title: "Focus mode, timers & widgets",
      description: "One step at a time on the full screen, on a timer, and on your Lock Screen.",
      icon: "timer",
    },
    {
      id: "export",
      title: "Reminders & Calendar",
      description: "Send your steps to Apple Reminders or block focus time on your calendar.",
      icon: "calendar",
    },
    {
      id: "ai",
      title: "The on-device AI",
      description: "How Molehill breaks things down on your iPhone, and how it works even without Apple Intelligence.",
      icon: "cpu",
    },
    {
      id: "billing",
      title: "Plans & billing",
      description: "What is free, what Pro adds, the daily AI actions, and restoring purchases.",
      icon: "star",
    },
    {
      id: "privacy",
      title: "Privacy & devices",
      description: "Where your tasks live, what leaves your phone (nothing), and what about your iPad.",
      icon: "lock",
    },
  ],
  articles: [
    /* ── Getting started ──────────────────────────────────────────────── */
    {
      id: "welcome-to-molehill",
      title: "Welcome to Molehill",
      description: "What Molehill is, who it is for, and the gentle idea behind it.",
      category: "getting-started",
      keywords: ["welcome", "about", "adhd", "overwhelm", "executive function", "intro", "screens"],
      updated: "2026-06-14",
      blocks: [
        {
          type: "paragraph",
          content:
            "Some tasks feel like mountains. You know you should start, but your brain just will not pick up the shovel. Molehill is built for exactly that moment.",
        },
        {
          type: "paragraph",
          content:
            "You type the thing you have been avoiding, and Molehill breaks it into small, concrete steps. Then it shows you only the next one, so you are never staring down the whole intimidating list.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "There is nothing to keep up with",
          content:
            "No streaks. No red badges. No guilt if you put it down for a week. Molehill is designed to be kind to ADHD and executive-function brains, which means it works with you, not against you.",
        },
        {
          type: "heading",
          level: 2,
          content: "The four screens",
        },
        {
          type: "list",
          items: [
            "Today: your home base, with a hero card for your single next step.",
            "Brain Dump: a blank page to empty your mind onto, then let it get sorted.",
            "Library: everything you have ever made, searchable, with nothing lost.",
            "Settings: the daily nudge, your AI status, restore purchases, and privacy.",
          ],
        },
        {
          type: "paragraph",
          content:
            "Everything happens on your iPhone. There is no account to make and nothing to sign in to, so you can start in the next thirty seconds.",
        },
      ],
      related: ["your-first-task", "starting-when-its-hard", "do-tasks-leave-my-phone"],
    },
    {
      id: "your-first-task",
      title: "Your first task breakdown",
      description: "From a blank screen to your first small step in under a minute.",
      category: "getting-started",
      keywords: ["first task", "get started", "break it down", "new task", "tutorial"],
      updated: "2026-06-14",
      blocks: [
        {
          type: "paragraph",
          content:
            "Let us turn your first mountain into a molehill. Pick something that has been sitting heavy on you. It does not need to be big or important, just something you have been avoiding.",
        },
        {
          type: "steps",
          items: [
            {
              title: "Type the task",
              description:
                "On the Today screen, tap to add a task and write it the way it lives in your head: \"sort out the kitchen,\" \"reply to that email,\" \"do my taxes.\" Messy is fine.",
            },
            {
              title: "Tap Break It Down",
              description:
                "Molehill thinks for a moment, right on your iPhone, and splits the task into small concrete steps.",
            },
            {
              title: "Glance at the steps",
              description:
                "Read them over. They are suggestions, not orders, so you can edit, reorder, or delete any of them.",
            },
            {
              title: "Do the first one",
              description:
                "Look only at step one. That is the whole job right now. When it is done, mark it complete and Molehill moves you to the next.",
            },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "The first step is small on purpose",
          content:
            "Molehill tries to make step one almost embarrassingly easy, like \"clear the counter\" or \"open the document.\" That is the point. Starting is the hard part, so the first step is built to be startable.",
        },
        {
          type: "paragraph",
          content:
            "That is it. You do not have to finish today. Doing one step and stopping is a real win here.",
        },
      ],
      related: ["choosing-granularity", "editing-steps", "starting-when-its-hard"],
    },
    {
      id: "starting-when-its-hard",
      title: "Gentle ways to actually start",
      description: "ADHD-friendly tricks for getting moving when your brain is stuck.",
      category: "getting-started",
      keywords: ["adhd", "motivation", "stuck", "procrastination", "start", "task paralysis", "tips"],
      updated: "2026-06-14",
      blocks: [
        {
          type: "paragraph",
          content:
            "If you are frozen, you are not lazy and nothing is wrong with you. Task paralysis is real, and it usually means the task feels too big to hold all at once. Here are some things that help.",
        },
        {
          type: "list",
          items: [
            "Shrink the step. If \"do the dishes\" feels heavy, re-break it down until the first step is just \"put one cup in the sink.\" Tiny is allowed.",
            "Use Focus mode for one step. The full-screen view hides everything else, so there is only the one thing to look at.",
            "Set a 5-minute timer and promise to quit when it dings. You almost never will, but knowing you can makes starting safe.",
            "Trust the next step. You do not have to plan the whole task. Molehill is holding the rest for you. Just do the one on screen.",
            "Lower the bar to \"badly.\" A messy, half-done version beats a perfect one that never happens.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Body doubling, on your Lock Screen",
          content:
            "Add the Just One Step widget so your next step is always visible without opening the app. Sometimes just seeing it sitting there is the nudge that gets you moving.",
        },
        {
          type: "paragraph",
          content:
            "And if today is not the day? That is okay. Molehill will be holding everything exactly where you left it, no penalty, whenever you come back.",
        },
      ],
      related: ["focus-mode", "just-one-step-widget", "choosing-granularity"],
    },

    /* ── Breaking tasks down ──────────────────────────────────────────── */
    {
      id: "choosing-granularity",
      title: "Choosing the detail (and re-breaking down)",
      description: "Big Picture, Balanced, or Every Tiny Step, and how to redo a breakdown when the steps are not right.",
      category: "breaking-down",
      keywords: ["granularity", "detail", "big picture", "balanced", "every tiny step", "steps", "re-break", "redo", "again"],
      updated: "2026-06-14",
      blocks: [
        {
          type: "paragraph",
          content:
            "Before Molehill breaks a task down, you get to choose how fine the steps should be. There is no right answer. It depends on how much your brain can hold right now.",
        },
        {
          type: "steps",
          items: [
            {
              title: "Big Picture",
              description:
                "About 3 to 5 broad steps. Good when you basically know how to do the thing and just need a shape to follow.",
            },
            {
              title: "Balanced",
              description:
                "About 5 to 8 steps. A comfortable middle ground, and a great default for most tasks.",
            },
            {
              title: "Every Tiny Step",
              description:
                "About 8 to 14 small steps. Reach for this when a task feels impossible. The smaller the steps, the easier it is to start.",
            },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "When in doubt, go smaller",
          content:
            "If you are staring at the list and still feel stuck, that is a sign the steps are too big. Re-break the task down with Every Tiny Step. You can always combine steps later.",
        },
        {
          type: "heading",
          level: 3,
          content: "When the steps are not right",
        },
        {
          type: "paragraph",
          content:
            "Came out too broad, too detailed, or just not how you would do it? Open the task, tap Break It Down again, and pick a different granularity. When the new steps appear, edit, reorder, or trim them until they feel right.",
        },
        {
          type: "callout",
          variant: "info",
          title: "A note on free AI actions",
          content:
            "On the free plan, each breakdown counts as one of your 3 daily AI actions. If you are out for the day, you can still adjust the steps you already have by hand, and that never costs anything.",
        },
      ],
      related: ["your-first-task", "editing-steps", "free-ai-actions"],
    },
    {
      id: "editing-steps",
      title: "Editing steps and time estimates",
      description: "Reword, reorder, add, remove, and adjust the minutes on any step.",
      category: "breaking-down",
      keywords: ["edit", "steps", "reorder", "time estimate", "minutes", "customize"],
      updated: "2026-06-14",
      blocks: [
        {
          type: "paragraph",
          content:
            "The steps Molehill creates are a starting point, not a contract. You know your task best, so make them yours.",
        },
        {
          type: "list",
          items: [
            "Reword a step by tapping it and editing the text.",
            "Reorder steps by dragging them into the sequence that makes sense to you.",
            "Add a step you know is missing, with its own title and time estimate.",
            "Delete any step that does not apply: swipe it away.",
          ],
        },
        {
          type: "heading",
          level: 3,
          content: "About the time estimates",
        },
        {
          type: "paragraph",
          content:
            "Each step gets a rough estimate in minutes. It is just a friendly guess to help you plan, not a deadline and not a stopwatch.",
        },
        {
          type: "paragraph",
          content:
            "To change one, tap the step and pick a new estimate (anything from a minute to an hour and a half), or clear it entirely if you would rather not think about time.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Estimates add up",
          content:
            "Molehill totals the minutes from your remaining steps, so you can see roughly how long a task has left. Those same estimates are what shape your calendar blocks if you choose to export.",
        },
      ],
      related: ["choosing-granularity", "free-ai-actions", "block-calendar-time"],
    },

    /* ── Brain dump ───────────────────────────────────────────────────── */
    {
      id: "brain-dump-basics",
      title: "Doing a brain dump",
      description: "Pour out everything on your mind and let Molehill organize it into tasks.",
      category: "brain-dump",
      keywords: ["brain dump", "capture", "overwhelm", "organize", "sort", "notes"],
      updated: "2026-06-14",
      blocks: [
        {
          type: "paragraph",
          content:
            "When your head is full of a hundred half-thoughts, a brain dump clears the noise. You write it all out, and Molehill turns the pile into a tidy, prioritized list.",
        },
        {
          type: "steps",
          items: [
            {
              title: "Open Brain Dump",
              description:
                "Go to the Brain Dump screen and just start typing. Lines, sentences, fragments: it all works. Do not worry about order or grammar.",
            },
            {
              title: "Empty your head",
              description:
                "Get it all out: errands, worries, that thing you keep forgetting. The messier the better. Sorting comes after.",
            },
            {
              title: "Let it sort",
              description:
                "Tap to sort, and Molehill reads what you wrote and groups it into clear tasks across categories like home, work, errands, people, and self-care.",
            },
            {
              title: "Review and keep",
              description:
                "Look over the suggested tasks. Change a category, mark something urgent, drop anything you do not want, then add the rest to your list.",
            },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Nothing is committed until you say so",
          content:
            "The sorted list is a draft you review. Anything you do not adopt simply disappears, so you can dump freely without creating a mess of tasks.",
        },
        {
          type: "paragraph",
          content:
            "Once a brain-dump item becomes a task, you can break it down into steps just like anything else. Not sure when to dump versus break down one thing? Dump when your mind is crowded and you are not even sure what the tasks are; break down a single task when you already know the one thing you are avoiding.",
        },
      ],
      related: ["siri-and-shortcuts", "free-ai-actions", "your-first-task"],
    },

    /* ── Focus mode, timers & widgets ─────────────────────────────────── */
    {
      id: "focus-mode",
      title: "Using Focus mode and timers",
      description: "A full-screen view of one step, with an optional timer and a Lock Screen Live Activity.",
      category: "focus",
      keywords: ["focus", "full screen", "timer", "pomodoro", "live activity", "dynamic island", "single step"],
      updated: "2026-06-14",
      blocks: [
        {
          type: "paragraph",
          content:
            "Focus mode strips everything away except the single step you are on. No queue, no other tasks, just one thing, big and clear, with nothing else competing for your attention.",
        },
        {
          type: "steps",
          items: [
            {
              title: "Enter Focus",
              description:
                "From your next step, tap into Focus mode. The step fills the screen.",
            },
            {
              title: "Add a timer if you like",
              description:
                "Optionally pick 5, 10, 15, or 25 minutes. It is there to give you a gentle container for the work, not to pressure you. If you switch apps, a soft chime lets you know the timer is still going.",
            },
            {
              title: "Do the thing",
              description:
                "Work on just this step. Mark it done to move to the next, or step out of Focus whenever you want.",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "A Live Activity keeps you company",
          content:
            "When you start a Focus session, Molehill puts your step and timer on the Lock Screen and in the Dynamic Island. It keeps running even if you leave the app, so your step is right there waiting, and you can mark it done from the Live Activity itself.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Stopping early is allowed",
          content:
            "The timer is a tool, not a test. If you need to stop before it ends, that is completely fine. You still showed up and did some of it. Try the 5-minute length when starting feels impossible.",
        },
      ],
      related: ["just-one-step-widget", "starting-when-its-hard", "editing-steps"],
    },
    {
      id: "just-one-step-widget",
      title: "The Just One Step widget",
      description: "Add your next step to the Lock Screen and Home Screen, and why it shows only one.",
      category: "focus",
      keywords: ["widget", "lock screen", "home screen", "just one step", "next step", "dynamic island"],
      updated: "2026-06-14",
      blocks: [
        {
          type: "paragraph",
          content:
            "Just One Step is a widget that shows you exactly one thing: your next step. No list, no scroll, just the single next move, wherever you put it.",
        },
        {
          type: "heading",
          level: 3,
          content: "Add it to your Lock Screen",
        },
        {
          type: "steps",
          items: [
            {
              title: "Touch and hold the Lock Screen",
              description: "Then tap Customize, and choose the Lock Screen.",
            },
            {
              title: "Add a widget",
              description:
                "Tap a widget slot, find Molehill, and pick the Just One Step widget.",
            },
            {
              title: "Done",
              description:
                "Your next step now lives on your Lock Screen, updating as you complete steps.",
            },
          ],
        },
        {
          type: "list",
          items: [
            "Lock Screen and Dynamic Island sizes show a glanceable line with your next step.",
            "The small Home Screen size shows the step on its own.",
            "The medium Home Screen size adds today’s progress bar and a tappable Done button.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Why only one step?",
          content:
            "This is on purpose. A whole list on your Lock Screen is just one more place to feel overwhelmed. Showing a single step keeps your eyes (and your brain) on the only thing that matters right now.",
        },
        {
          type: "callout",
          variant: "info",
          title: "If the widget looks out of date",
          content:
            "iOS refreshes widgets on its own schedule, so once in a while it may show a step you just finished. Open Molehill, or lock and wake your phone, and it catches up. Your tasks inside the app are always correct. A lagging widget is only a display delay.",
        },
      ],
      related: ["focus-mode", "starting-when-its-hard", "welcome-to-molehill"],
    },

    /* ── Reminders & Calendar ─────────────────────────────────────────── */
    {
      id: "send-to-reminders",
      title: "Sending steps to Apple Reminders",
      description: "Turn a task’s remaining steps into a Reminders list in one tap.",
      category: "export",
      keywords: ["reminders", "export", "apple reminders", "list", "pro", "send"],
      updated: "2026-06-14",
      blocks: [
        {
          type: "paragraph",
          content:
            "If you live in Apple Reminders, Molehill can hand your steps over so they show up alongside the rest of your life.",
        },
        {
          type: "steps",
          items: [
            {
              title: "Open the task",
              description: "Go to the task whose steps you want to export.",
            },
            {
              title: "Choose Send to Reminders",
              description:
                "Molehill creates a new Reminders list named after your task, with one reminder for each remaining step.",
            },
            {
              title: "Grant access the first time",
              description:
                "Reminders will ask permission so Molehill can create the list. You only need to allow it once.",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "This is a Pro feature",
          content:
            "Sending to Reminders is part of Molehill Pro. It is also a great way to move your steps to other devices, since Reminders syncs through your own iCloud.",
        },
        {
          type: "callout",
          variant: "privacy",
          title: "Permission, explained",
          content:
            "Creating a named list requires full Reminders access, which is why iOS asks for it. Molehill uses that access only to add your list and steps. It does not read or send your existing reminders anywhere.",
        },
      ],
      related: ["block-calendar-time", "free-vs-pro", "will-it-sync"],
    },
    {
      id: "block-calendar-time",
      title: "Blocking focus time on your Calendar",
      description: "Turn step estimates into back-to-back calendar blocks to protect your time.",
      category: "export",
      keywords: ["calendar", "export", "time blocking", "focus time", "schedule", "pro"],
      updated: "2026-06-14",
      blocks: [
        {
          type: "paragraph",
          content:
            "Sometimes a task gets done only if you give it a place on the calendar. Molehill can block sequential focus time using your steps and their estimates.",
        },
        {
          type: "steps",
          items: [
            {
              title: "Open the task",
              description: "Pick the task you want to schedule.",
            },
            {
              title: "Choose Send to Calendar",
              description:
                "Molehill lays your remaining steps out one after another, sizing each block from its time estimate.",
            },
            {
              title: "Grant access the first time",
              description:
                "Calendar asks for write permission so Molehill can add the events. Allow it once and you are set.",
            },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          content:
            "Want roomier blocks? Bump up the minutes on your steps before exporting, and the calendar blocks follow your estimates.",
        },
        {
          type: "callout",
          variant: "privacy",
          title: "Write-only access",
          content:
            "Molehill requests write-only Calendar access, meaning it can add your focus blocks but cannot read anything already on your calendar. It is a Pro feature.",
        },
      ],
      related: ["send-to-reminders", "editing-steps", "free-vs-pro"],
    },

    /* ── The on-device AI ─────────────────────────────────────────────── */
    {
      id: "on-device-ai",
      title: "How the on-device AI works",
      description: "Molehill’s breakdowns run on your iPhone’s own chip. Here is what that means.",
      category: "ai",
      keywords: ["ai", "on-device", "apple intelligence", "privacy", "offline", "foundation models"],
      updated: "2026-06-14",
      blocks: [
        {
          type: "paragraph",
          content:
            "When Molehill breaks a task down or sorts a brain dump, that thinking happens right on your iPhone using Apple Intelligence, the device’s own on-device model. Your words never travel to a server.",
        },
        {
          type: "callout",
          variant: "privacy",
          title: "Nothing leaves your phone",
          content:
            "There is no cloud step here. What you type stays on your device, even while the AI is working on it. Molehill makes no network calls at all.",
        },
        {
          type: "heading",
          level: 3,
          content: "It even works offline",
        },
        {
          type: "paragraph",
          content:
            "Because everything runs locally, Molehill keeps working in Airplane Mode, on a plane, in a basement, or anywhere with no signal. There is no connection to wait on.",
        },
        {
          type: "paragraph",
          content:
            "Curious whether Apple Intelligence is active on your device? Open Settings inside Molehill, where the current AI status is shown in plain language.",
        },
      ],
      related: ["working-without-ai", "do-tasks-leave-my-phone", "free-ai-actions"],
    },
    {
      id: "working-without-ai",
      title: "Using Molehill without Apple Intelligence",
      description: "If your device cannot run Apple Intelligence, Molehill still breaks tasks down.",
      category: "ai",
      keywords: ["no apple intelligence", "fallback", "standard steps", "heuristic", "not available", "older iphone"],
      updated: "2026-06-14",
      blocks: [
        {
          type: "paragraph",
          content:
            "Not every iPhone can run Apple Intelligence, and that is completely fine. Molehill is built so it is never a dead end.",
        },
        {
          type: "paragraph",
          content:
            "If Apple Intelligence is not available, Molehill quietly switches to its own built-in engine (a smart set of templates and keyword parsing) to break tasks down and sort your brain dumps. Everything still works today.",
        },
        {
          type: "callout",
          variant: "info",
          title: "An honest little note",
          content:
            "When the standard engine is doing the work, Molehill shows a friendly note like \"Standard steps. Apple Intelligence isn’t available on this device.\" No mystery, no missing features hidden behind a wall.",
        },
        {
          type: "list",
          items: [
            "Task breakdown still works, at every granularity.",
            "Brain-dump sorting still works.",
            "Your Lock Screen widget, Focus mode, and timers are entirely unaffected.",
          ],
        },
        {
          type: "paragraph",
          content:
            "And if Apple Intelligence is simply turned off or still setting up, Molehill uses the standard engine in the meantime, then lights up the smarter version automatically once it is ready.",
        },
      ],
      related: ["on-device-ai", "free-ai-actions", "your-first-task"],
    },

    /* ── Plans & billing ──────────────────────────────────────────────── */
    {
      id: "free-vs-pro",
      title: "What is free and what Pro adds",
      description: "Molehill is genuinely useful for free. Here is exactly where the line is.",
      category: "billing",
      keywords: ["free", "pro", "pricing", "subscription", "lifetime", "upgrade", "cost"],
      updated: "2026-06-14",
      blocks: [
        {
          type: "paragraph",
          content:
            "Molehill is designed to be genuinely helpful without paying a cent. Pro is there if you want to lift the limits and support the app.",
        },
        {
          type: "heading",
          level: 3,
          content: "Free includes",
        },
        {
          type: "list",
          items: [
            "Unlimited manual tasks, steps, and timers.",
            "Focus mode and every Lock Screen and Home Screen widget.",
            "3 AI actions a day: an AI breakdown or a brain-dump sort, your choice.",
            "Everything staying private on your device.",
          ],
        },
        {
          type: "heading",
          level: 3,
          content: "Pro adds",
        },
        {
          type: "list",
          items: [
            "Unlimited AI actions: break down as much as the day throws at you.",
            "Full brain-dump sorting, as often as you like.",
            "Sending steps to Apple Reminders.",
            "Blocking focus time on your Apple Calendar.",
          ],
        },
        {
          type: "heading",
          level: 3,
          content: "Pricing",
        },
        {
          type: "list",
          items: [
            "$2.99 per month.",
            "$19.99 per year.",
            "$39.99 once, for lifetime access, no subscription.",
          ],
        },
        {
          type: "callout",
          variant: "info",
          content:
            "That lifetime option is everything Pro offers, forever, with a single payment. There is nothing else to buy beyond it.",
        },
      ],
      related: ["free-ai-actions", "restore-purchases", "send-to-reminders"],
    },
    {
      id: "free-ai-actions",
      title: "Your 3 free AI actions a day",
      description: "What counts as an AI action, and what stays free no matter what.",
      category: "billing",
      keywords: ["free ai", "3 actions", "daily limit", "ai actions", "reset", "midnight", "quota"],
      updated: "2026-06-14",
      blocks: [
        {
          type: "paragraph",
          content:
            "On the free plan you get 3 AI actions each day. Here is exactly what that means, in plain terms.",
        },
        {
          type: "heading",
          level: 3,
          content: "What counts as one action",
        },
        {
          type: "list",
          items: [
            "An AI breakdown of one task counts as one action.",
            "An AI brain-dump sort counts as one action.",
            "Re-breaking a task down with AI counts again, since it is a fresh breakdown.",
          ],
        },
        {
          type: "heading",
          level: 3,
          content: "What is always free",
        },
        {
          type: "list",
          items: [
            "Creating, editing, reordering, and completing tasks and steps by hand.",
            "Focus mode, all timers, and every widget.",
            "Sorting a brain dump with the standard engine when your AI actions are used up.",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "It resets at midnight",
          content:
            "Your 3 actions refill at local midnight, so tomorrow is a clean slate. If you run out today, Molehill keeps working. You can still arrange steps yourself or use the standard engine.",
        },
        {
          type: "paragraph",
          content:
            "Want to stop counting altogether? Molehill Pro makes AI actions unlimited.",
        },
      ],
      related: ["free-vs-pro", "working-without-ai", "choosing-granularity"],
    },
    {
      id: "restore-purchases",
      title: "Restoring your purchase",
      description: "Get Pro back on a new phone or after reinstalling, at no extra charge.",
      category: "billing",
      keywords: ["restore", "purchases", "pro", "new phone", "reinstall", "missing", "billing"],
      updated: "2026-06-14",
      blocks: [
        {
          type: "paragraph",
          content:
            "Already bought Pro but not seeing it? Restoring brings it right back, and it never costs anything extra.",
        },
        {
          type: "steps",
          items: [
            {
              title: "Open Settings in Molehill",
              description: "Head to the Settings screen inside the app.",
            },
            {
              title: "Tap Restore Purchases",
              description:
                "Molehill checks your Apple Account for any Pro purchase tied to it.",
            },
            {
              title: "You are back",
              description:
                "If a purchase is found, Pro unlocks again immediately.",
            },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "A couple of things to check",
          content:
            "Make sure you are signed in with the same Apple Account you bought Pro on. A lifetime purchase restores the same way a subscription does.",
        },
      ],
      related: ["free-vs-pro", "free-ai-actions"],
    },

    /* ── Privacy & devices ────────────────────────────────────────────── */
    {
      id: "do-tasks-leave-my-phone",
      title: "Do my tasks ever leave my phone?",
      description: "Learn where Molehill stores tasks, how on-device processing works, and which user-chosen actions can create an external copy.",
      category: "privacy",
      keywords: ["privacy", "data", "cloud", "server", "tracking", "offline", "leave phone", "storage"],
      updated: "2026-06-14",
      blocks: [
        {
          type: "paragraph",
          content:
            "This is the question that matters most, so here it is plainly: no. What you write in Molehill stays on your iPhone.",
        },
        {
          type: "callout",
          variant: "privacy",
          title: "Data Not Collected",
          content:
            "Molehill has no account and no cloud. It makes no network calls at all, not for AI, not for analytics, not for anything. Your tasks, steps, and brain dumps are stored locally on your device and never leave it.",
        },
        {
          type: "list",
          items: [
            "No sign-up, no login, no profile.",
            "No tracking and no analytics.",
            "The AI runs on your iPhone, so even your breakdowns stay local.",
            "It works fully in Airplane Mode, because there is nothing to connect to.",
          ],
        },
        {
          type: "paragraph",
          content:
            "The only time anything touches another app is if you choose to export to Reminders or Calendar, and even then it goes only to Apple’s own apps on your device, never to us.",
        },
        {
          type: "paragraph",
          content:
            "Because your data lives on this device, an iPhone backup is how it travels if you switch phones. You can read this same promise in plain language any time, under Settings inside the app.",
        },
      ],
      related: ["on-device-ai", "will-it-sync", "find-old-tasks"],
    },
    {
      id: "will-it-sync",
      title: "Will Molehill sync to my iPad or Mac?",
      description: "Not yet. An honest answer, plus the workaround that helps today.",
      category: "privacy",
      keywords: ["sync", "ipad", "mac", "icloud", "multi-device", "apple watch", "requirements", "ios 26"],
      updated: "2026-06-14",
      blocks: [
        {
          type: "paragraph",
          content:
            "We will be straight with you: Molehill does not sync across devices yet. It is built for iPhone today (iOS 26 or later, designed for portrait), and your tasks stay on that one phone.",
        },
        {
          type: "callout",
          variant: "info",
          title: "The workaround that helps now",
          content:
            "If you need a task somewhere else, export its steps to Apple Reminders or Apple Calendar (both Pro features). Those sync through your own iCloud, so the steps will appear on your iPad and Mac.",
        },
        {
          type: "paragraph",
          content:
            "Cloud sync, an Apple Watch app, and turning a photo into a checklist are all things we would love to add down the road. We are not promising dates, just letting you know they are on our minds.",
        },
        {
          type: "faq",
          items: [
            {
              q: "Do I need Apple Intelligence?",
              a: "No. If your device cannot run it, Molehill automatically uses its own built-in engine so breakdowns and brain-dump sorting still work.",
            },
            {
              q: "Does it work without internet?",
              a: "Yes, completely. Everything runs on your device, so Molehill works in Airplane Mode and anywhere with no signal.",
            },
          ],
        },
      ],
      related: ["do-tasks-leave-my-phone", "send-to-reminders", "block-calendar-time"],
    },
    {
      id: "find-old-tasks",
      title: "Finding old tasks in the Library",
      description: "Search, browse, and bring back anything you have ever made.",
      category: "privacy",
      keywords: ["library", "search", "old tasks", "archive", "find", "history", "done", "delete"],
      updated: "2026-06-14",
      blocks: [
        {
          type: "paragraph",
          content:
            "Nothing in Molehill disappears on you. The Library is the chronological home for everything you have made: active, done, and archived.",
        },
        {
          type: "list",
          items: [
            "Search by name to jump straight to any task, using full-text search.",
            "Browse by state to see what is active, finished, or tucked away.",
            "Unarchive a task to pull it back into your active list any time.",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Archiving keeps things tidy without losing them",
          content:
            "When a task is done or just not for now, archive it. It leaves your Today view but stays safe in the Library, so your daily list feels light while your history stays intact. If you ever truly want a task gone, you can delete it for good from the Library, but the everyday path is simply archiving, so nothing is lost by accident.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Even faster: Siri and Spotlight",
          content:
            "Ask Siri \"What’s Next\" to hear your next step, or \"Quick Dump\" to drop a thought into your inbox. Your tasks are indexed in Spotlight too, so you can swipe down on the Home Screen, type a task name, and tap straight to it.",
        },
      ],
      related: ["siri-and-shortcuts", "do-tasks-leave-my-phone", "the-daily-nudge"],
    },
    {
      id: "siri-and-shortcuts",
      title: "Siri, Shortcuts & sharing into Molehill",
      description: "Add a task, get your next step, start focusing, or send things in, all hands-free.",
      category: "privacy",
      keywords: ["siri", "shortcuts", "voice", "whats next", "hands-free", "automation", "spotlight", "share", "share sheet", "extension", "inbox"],
      updated: "2026-06-14",
      blocks: [
        {
          type: "paragraph",
          content:
            "Molehill works with Siri and Shortcuts, so you can capture and start things without even opening the app, handy when your hands are full or your focus is fragile.",
        },
        {
          type: "heading",
          level: 3,
          content: "Things you can ask Siri",
        },
        {
          type: "list",
          items: [
            "\"What’s Next\": hear your single next step.",
            "\"Break down…\": turn something you say into steps.",
            "\"Quick Dump\": drop a thought straight into your brain-dump inbox.",
            "\"Start Focus\": jump into Focus mode on your current step.",
          ],
        },
        {
          type: "paragraph",
          content:
            "You can also drop these actions into your own Shortcuts and automations, for example, starting Focus automatically when a certain Focus mode turns on.",
        },
        {
          type: "heading",
          level: 3,
          content: "Share things into your inbox",
        },
        {
          type: "paragraph",
          content:
            "When an email, article, or note lands that you will need to handle, you do not have to deal with it right then. In Mail, Safari, Notes, or almost any app, open the Share sheet, choose Molehill, and the item drops into your brain-dump inbox, ready to sort into a real task whenever you are.",
        },
        {
          type: "callout",
          variant: "tip",
          content:
            "Your tasks are indexed in Spotlight too, so you can swipe down on your Home Screen, type a task name, and tap straight to it.",
        },
      ],
      related: ["brain-dump-basics", "find-old-tasks", "focus-mode"],
    },
    {
      id: "the-daily-nudge",
      title: "The gentle daily nudge",
      description: "An optional, soft reminder to check in, off by default, on your terms.",
      category: "privacy",
      keywords: ["nudge", "notification", "reminder", "daily", "alert", "settings"],
      updated: "2026-06-14",
      blocks: [
        {
          type: "paragraph",
          content:
            "If a gentle daily check-in would help, Molehill can send one: a single soft notification at a time you choose. It is off by default, because the last thing your brain needs is another thing pinging at it.",
        },
        {
          type: "steps",
          items: [
            {
              title: "Open Settings",
              description: "Go to the Settings screen in Molehill.",
            },
            {
              title: "Turn on the daily nudge",
              description:
                "Flip the toggle on and pick a time that fits your day. The default is 9:00 AM if you keep it.",
            },
            {
              title: "Allow notifications",
              description:
                "If asked, allow notifications for Molehill so the nudge can reach you. No pressure either way.",
            },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          content:
            "There is just one nudge, and it is kind. No streaks to protect, no escalating reminders. It is a friendly tap on the shoulder, nothing more. Turn it off any time.",
        },
        {
          type: "callout",
          variant: "privacy",
          content:
            "The nudge is a local notification scheduled on your device. Like everything else in Molehill, it involves no server and nothing leaving your phone.",
        },
      ],
      related: ["find-old-tasks", "do-tasks-leave-my-phone"],
    },
  ],
};

export default molehillKb;
