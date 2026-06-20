import { KnowledgeBase } from "../../types";

export const vaultKb: KnowledgeBase = {
  appId: "vault",
  appName: "Vault",
  accent: "#74e0ae",
  status: "ready",
  intro:
    "Welcome to Vault. Whether you track every coffee by hand or link a bank for automatic updates, these guides help you get set up, understand your numbers, and keep your money private and on your terms.",
  categories: [
    {
      id: "getting-started",
      title: "Getting started",
      description:
        "Set up Vault, log your first expense, and create a budget that fits your real life.",
      icon: "sprout",
    },
    {
      id: "tracking",
      title: "Tracking spending",
      description:
        "Add expenses by hand, scan receipts, import statements, and fix categories so Vault learns your habits.",
      icon: "scan",
    },
    {
      id: "budgets",
      title: "Safe-to-spend & budgets",
      description:
        "Understand your one daily number, set budgets with gentle alerts, and learn why the number changes.",
      icon: "gauge",
    },
    {
      id: "goals",
      title: "Goals, debt & net worth",
      description:
        "Save toward what matters, track debt payoff, read your forecast, and watch your net worth grow.",
      icon: "target",
    },
    {
      id: "coach",
      title: "The AI coach",
      description:
        "Ask money questions in plain language and get answers that never leave your iPhone.",
      icon: "bot",
    },
    {
      id: "bank-sync",
      title: "Connecting a bank (Plaid)",
      description:
        "Optionally link a bank through Plaid for automatic transactions, and learn exactly what Plaid does and does not see.",
      icon: "credit-card",
    },
    {
      id: "privacy",
      title: "Privacy & your data",
      description:
        "The honest story of where your data lives, what can leave your phone, and how to export or move it.",
      icon: "shield-check",
    },
    {
      id: "billing",
      title: "Plans & billing",
      description:
        "Compare Free, Plus, Premium, and Premium Plus, restore purchases, and understand downgrades.",
      icon: "credit-card",
    },
  ],
  articles: [
    /* ─────────────────────────── Getting started ─────────────────────────── */
    {
      id: "set-up-your-first-budget",
      title: "Set up your first budget",
      description:
        "Tell Vault one monthly number and it builds your daily safe-to-spend for you.",
      category: "getting-started",
      keywords: ["budget", "setup", "monthly", "first budget", "limit", "alert", "spending plan"],
      updated: "2026-06-14",
      blocks: [
        {
          type: "paragraph",
          content:
            "A budget in Vault is refreshingly simple. You pick a monthly amount, and Vault spreads it across the days for you so you always know what is safe to spend right now.",
        },
        {
          type: "steps",
          items: [
            {
              title: "Open Budgets",
              description: "Tap the Budgets tab, then tap the plus button to create one.",
            },
            {
              title: "Choose what it covers",
              description:
                "Make an overall monthly budget, or a budget for a single category like Groceries or Dining.",
            },
            {
              title: "Set the amount",
              description:
                "Enter the monthly limit you are comfortable with. You can change it any time, so a rough number is fine to start.",
            },
            {
              title: "Save",
              description:
                "Vault immediately folds your budget into your safe-to-spend number on the Home screen.",
            },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "A gentle heads-up, never a scolding",
          content:
            "As you near about 80 percent of a budget, Vault gives you a quiet nudge so a limit never sneaks up on you. You can turn budget alerts on or off in Settings, along with the weekly digest and goal, paycheck, and coach reminders.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Not sure what to budget?",
          content:
            "Track for a week first, then ask the AI coach \"where did my money go?\" The answer makes a realistic starting budget easy to pick.",
        },
        {
          type: "faq",
          items: [
            {
              q: "Can I have more than one budget?",
              a: "Yes. Keep an overall monthly budget and add category budgets for the areas you want to watch closely.",
            },
            {
              q: "What if I go over?",
              a: "Nothing breaks and nobody is judging you. Your safe-to-spend simply reflects it, and you can adjust the budget or spending from there.",
            },
          ],
        },
      ],
      related: ["what-is-safe-to-spend", "add-an-expense", "compare-plans"],
    },
    {
      id: "set-up-face-id-lock",
      title: "Lock Vault with Face ID",
      description:
        "Keep your finances private with a Face ID lock that only you can open.",
      category: "getting-started",
      keywords: ["face id", "lock", "passcode", "privacy", "security", "biometric"],
      updated: "2026-06-14",
      blocks: [
        {
          type: "paragraph",
          content:
            "Because your money lives on your device, Vault lets you put a lock in front of it. With the app lock on, Vault asks for Face ID (or your passcode) every time you open it.",
        },
        {
          type: "steps",
          items: [
            {
              title: "Open Settings",
              description: "Go to the Settings tab inside Vault.",
            },
            {
              title: "Turn on app lock",
              description: "Find Face ID lock and toggle it on.",
            },
            {
              title: "Confirm with Face ID",
              description:
                "Authenticate once to confirm. From now on Vault will be locked until you do.",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Uses Apple's secure unlock",
          content:
            "The lock uses iOS biometric authentication. Vault never sees or stores your face data or passcode; it only asks iOS whether the unlock succeeded.",
        },
        {
          type: "faq",
          items: [
            {
              q: "What if Face ID fails?",
              a: "You can fall back to your device passcode, just like other apps that use Face ID.",
            },
            {
              q: "Does the lock protect my widgets?",
              a: "Widgets only show your safe-to-spend number, never transaction details, so your sensitive data stays behind the lock.",
            },
          ],
        },
      ],
      related: ["does-my-data-leave-my-phone", "widgets-and-siri"],
    },
    {
      id: "widgets-and-siri",
      title: "Widgets, Live Activities & Siri",
      description:
        "See your daily number at a glance and add expenses hands-free.",
      category: "getting-started",
      keywords: ["widget", "lock screen", "siri", "shortcuts", "live activity", "spotlight", "watch"],
      updated: "2026-06-14",
      blocks: [
        {
          type: "paragraph",
          content:
            "Vault meets you outside the app, too. Put your safe-to-spend number on your Home Screen and Lock Screen, and use your voice to log spending without unlocking your phone.",
        },
        {
          type: "heading",
          level: 2,
          content: "Add a widget",
        },
        {
          type: "steps",
          items: [
            {
              title: "Enter edit mode",
              description:
                "Touch and hold an empty area of your Home Screen or Lock Screen until things jiggle.",
            },
            {
              title: "Add a widget",
              description: "Tap the plus button, then search for Vault.",
            },
            {
              title: "Pick a size",
              description:
                "Choose a Home Screen or Lock Screen widget to show your safe-to-spend number, then place it.",
            },
          ],
        },
        {
          type: "paragraph",
          content:
            "Live Activities can also surface your daily number when it is most useful, so a quick glance is all it takes.",
        },
        {
          type: "heading",
          level: 2,
          content: "Use Siri & Shortcuts",
        },
        {
          type: "list",
          items: [
            "Add an expense",
            "Check your budget",
            "View a spending summary",
            "Log a goal contribution",
            "Ask the coach a question",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Spotlight too",
          content:
            "Swipe down on your Home Screen and search to jump straight to Vault actions from Spotlight.",
        },
      ],
      related: ["add-an-expense", "using-the-ai-coach", "set-up-face-id-lock"],
    },

    /* ─────────────────────────── Tracking spending ───────────────────────── */
    {
      id: "add-an-expense",
      title: "Add an expense",
      description:
        "Log spending by hand in seconds, fully on your device.",
      category: "tracking",
      keywords: ["add", "expense", "manual", "log", "spending", "entry"],
      updated: "2026-06-14",
      blocks: [
        {
          type: "paragraph",
          content:
            "Manual entry is the heart of Vault and it is always free. Every expense you add by hand stays entirely on your iPhone.",
        },
        {
          type: "steps",
          items: [
            {
              title: "Tap the plus button",
              description: "From the Home screen, tap the plus button to start a new expense.",
            },
            {
              title: "Enter the amount",
              description: "Type what you spent. This is the only field you truly need.",
            },
            {
              title: "Add the details",
              description:
                "Optionally add a merchant, date, note, or category. Vault suggests a category for you and learns as you go.",
            },
            {
              title: "Save",
              description:
                "Tap save and your safe-to-spend number updates right away.",
            },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Even faster",
          content:
            "Ask Siri to add an expense, or use a Home Screen widget, when you do not want to open the app.",
        },
        {
          type: "faq",
          items: [
            {
              q: "Do I have to pick a category?",
              a: "No. Vault suggests one automatically. If you skip or change it, the app quietly learns your preference for next time.",
            },
            {
              q: "Can I edit an expense later?",
              a: "Yes. Tap any expense to change the amount, date, category, or note.",
            },
          ],
        },
      ],
      related: ["scan-a-receipt", "fix-a-miscategorized-expense", "widgets-and-siri"],
    },
    {
      id: "scan-a-receipt",
      title: "Scan a receipt",
      description:
        "Point your camera at a receipt and let Vault read the amount, merchant, and date.",
      category: "tracking",
      keywords: ["receipt", "scan", "camera", "ocr", "photo", "vision"],
      updated: "2026-06-14",
      blocks: [
        {
          type: "paragraph",
          content:
            "Receipt scanning saves you typing. Vault uses your iPhone's on-device text recognition to pull the key details, then lets you confirm before saving.",
        },
        {
          type: "steps",
          items: [
            {
              title: "Start a scan",
              description:
                "Tap the plus button, then choose to scan a receipt. Vault asks for camera access the first time.",
            },
            {
              title: "Frame the receipt",
              description:
                "Hold your phone steady over the receipt so the total is clearly visible.",
            },
            {
              title: "Review what Vault found",
              description:
                "Vault fills in the amount, merchant, and date. Check them and fix anything that looks off.",
            },
            {
              title: "Save",
              description: "Tap save to add the expense.",
            },
          ],
        },
        {
          type: "callout",
          variant: "privacy",
          title: "The scan happens on your device",
          content:
            "Vault reads receipts using Apple's on-device Vision text recognition. The image and the text are never uploaded; nothing about the receipt leaves your iPhone.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "For the best read",
          content:
            "Good lighting and a flat receipt help a lot. Faded or crumpled receipts may need a quick manual touch-up.",
        },
      ],
      related: ["add-an-expense", "import-a-statement", "fix-a-miscategorized-expense"],
    },
    {
      id: "import-a-statement",
      title: "Import a PDF or CSV statement",
      description:
        "Bring in a batch of transactions from a bank statement, with duplicates filtered out.",
      category: "tracking",
      keywords: ["import", "statement", "pdf", "csv", "bank statement", "duplicate", "upload"],
      updated: "2026-06-14",
      blocks: [
        {
          type: "paragraph",
          content:
            "If you would rather not link a bank, importing a statement is a great way to catch up on many transactions at once. Vault accepts PDF and CSV files.",
        },
        {
          type: "steps",
          items: [
            {
              title: "Download your statement",
              description:
                "Get a PDF or CSV statement from your bank's website or app, and save it to Files or Photos.",
            },
            {
              title: "Start an import",
              description:
                "In Vault, choose to import a statement and pick your file.",
            },
            {
              title: "Review the transactions",
              description:
                "Vault reads the file and shows what it found so you can confirm before anything is added.",
            },
            {
              title: "Import",
              description:
                "Confirm to add them. Vault categorizes each one and you can adjust as needed.",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Duplicates are handled for you",
          content:
            "Vault de-duplicates as it imports, so transactions you already have (from a previous import or manual entry) will not pile up twice.",
        },
        {
          type: "callout",
          variant: "privacy",
          title: "Importing is on-device",
          content:
            "Reading and matching your statement happens entirely on your iPhone. Importing a file does not send anything to a server.",
        },
        {
          type: "faq",
          items: [
            {
              q: "My PDF did not read perfectly. What now?",
              a: "Statement layouts vary a lot. Review the parsed list before importing and edit any rows that look off, or try the CSV export from your bank instead.",
            },
            {
              q: "Is importing the same as linking a bank?",
              a: "No. Importing is a one-time file you bring in yourself and is fully on-device. Linking a bank via Plaid keeps transactions syncing automatically.",
            },
          ],
        },
      ],
      related: ["scan-a-receipt", "connect-a-bank", "fix-a-miscategorized-expense"],
    },
    {
      id: "fix-a-miscategorized-expense",
      title: "Fix a miscategorized expense (and teach Vault)",
      description:
        "Correct a category once and Vault's on-device model learns it for next time.",
      category: "tracking",
      keywords: ["category", "recategorize", "fix", "wrong category", "learn", "coreml", "miscategorized"],
      updated: "2026-06-14",
      blocks: [
        {
          type: "paragraph",
          content:
            "Vault guesses categories automatically, and it gets smarter the more you use it. When a category is wrong, fixing it takes a tap and quietly trains the app to your habits.",
        },
        {
          type: "steps",
          items: [
            {
              title: "Open the expense",
              description: "Tap the transaction with the wrong category.",
            },
            {
              title: "Change the category",
              description: "Tap the category and choose the right one.",
            },
            {
              title: "Save",
              description: "Your correction is saved and applied right away.",
            },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Your corrections teach Vault",
          content:
            "Vault uses an on-device machine-learning model that learns from your corrections. Fix a merchant once and similar transactions are more likely to land in the right category next time.",
        },
        {
          type: "callout",
          variant: "privacy",
          title: "Learning stays on your phone",
          content:
            "The category model lives and retrains on your device. Your corrections, merchants, and amounts are never sent anywhere to improve it.",
        },
        {
          type: "faq",
          items: [
            {
              q: "Will old transactions get recategorized automatically?",
              a: "Corrections shape future suggestions. Past transactions keep whatever category they have unless you change them.",
            },
            {
              q: "Can I create my own categories?",
              a: "Yes. You can organize spending in the way that makes sense for your life.",
            },
          ],
        },
      ],
      related: ["add-an-expense", "import-a-statement", "using-the-ai-coach"],
    },

    /* ─────────────────────────── Safe-to-spend & budgets ─────────────────── */
    {
      id: "what-is-safe-to-spend",
      title: "What \"safe to spend\" means (and why it changes)",
      description:
        "The one daily number that tells you what you can spend today, and the everyday reasons it moves.",
      category: "budgets",
      keywords: ["safe to spend", "daily number", "today", "available", "changed", "recalculated", "set-aside"],
      updated: "2026-06-14",
      blocks: [
        {
          type: "paragraph",
          content:
            "Safe to spend is the single number at the top of Vault. It answers the question you actually have: can I spend on this right now and still be okay?",
        },
        {
          type: "heading",
          level: 2,
          content: "How it is calculated",
        },
        {
          type: "paragraph",
          content:
            "Vault starts with your monthly budget, subtracts what you have already spent, and sets aside money you have reserved for goals, bills, or upcoming needs. What remains, spread across the days left, is your safe-to-spend.",
        },
        {
          type: "list",
          items: [
            "Your monthly budget sets the ceiling.",
            "Spending you have logged reduces the number.",
            "Set-asides for goals and known bills are protected so you do not accidentally spend them.",
            "The remainder is paced across the rest of the period.",
          ],
        },
        {
          type: "heading",
          level: 2,
          content: "Why your number changed",
        },
        {
          type: "list",
          items: [
            "You logged a new expense, so today's amount went down.",
            "A new day began, which refreshes the number as your budget repaces.",
            "You changed a budget, or added or funded a goal that set money aside.",
            "A bill or known expense came due and was reserved.",
            "New transactions arrived from a linked bank, if you connected one through Plaid.",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "A guide, not a rule",
          content:
            "Some days you spend more, some less. A big purchase lowers today's number, then the remaining budget repaces across the coming days, so tomorrow usually rebounds.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Want the detail?",
          content:
            "Ask the AI coach \"why did my safe-to-spend change?\" for a plain-language explanation based on your own activity.",
        },
      ],
      related: ["set-up-your-first-budget", "read-the-forecast", "using-the-ai-coach"],
    },

    /* ─────────────────────────── Goals, debt & net worth ─────────────────── */
    {
      id: "create-a-goal",
      title: "Create a savings goal",
      description:
        "Set a target, add contributions, and celebrate milestones along the way.",
      category: "goals",
      keywords: ["goal", "savings", "target", "contribution", "milestone", "save"],
      updated: "2026-06-14",
      blocks: [
        {
          type: "paragraph",
          content:
            "Goals turn saving into something you can see. Set a target, chip away at it, and Vault marks the milestones so progress feels good.",
        },
        {
          type: "steps",
          items: [
            {
              title: "Open Goals",
              description: "Go to the Goals area and tap the plus button.",
            },
            {
              title: "Name your goal and target",
              description:
                "Give it a name like Emergency Fund or Trip to Lisbon, and set the amount you are aiming for.",
            },
            {
              title: "Add contributions",
              description:
                "Log money toward the goal whenever you like. You can also do this with Siri or a Shortcut.",
            },
            {
              title: "Watch it grow",
              description:
                "Vault tracks your progress and celebrates milestones as you reach them.",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Goals protect your money",
          content:
            "Money you set aside for a goal is held back from your safe-to-spend, so you are less likely to spend it by accident.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Celebrations are gentle",
          content:
            "Milestone moments are encouraging and low-key, here to cheer you on, never to pressure you.",
        },
      ],
      related: ["track-a-debt", "what-is-safe-to-spend", "read-the-forecast"],
    },
    {
      id: "track-a-debt",
      title: "Track debt and net worth",
      description:
        "Add balances and interest to see your payoff timeline, and watch your net worth grow.",
      category: "goals",
      keywords: ["debt", "loan", "credit card", "interest", "payoff", "net worth", "assets", "liabilities"],
      updated: "2026-06-14",
      blocks: [
        {
          type: "paragraph",
          content:
            "Debt tracking gives you a clear, calm view of what you owe and when you will be free of it. No judgment, just a plan you can see.",
        },
        {
          type: "steps",
          items: [
            {
              title: "Add a debt",
              description:
                "In the Debt area, add a debt with its name, current balance, and interest rate.",
            },
            {
              title: "Review the timeline",
              description:
                "Vault estimates a payoff timeline so you can see the finish line.",
            },
            {
              title: "Update as you pay",
              description:
                "Keep balances current and watch the timeline shorten as you make progress.",
            },
          ],
        },
        {
          type: "heading",
          level: 2,
          content: "Your net worth",
        },
        {
          type: "paragraph",
          content:
            "Net worth is the big-picture view: everything you own minus everything you owe. Add assets like cash, savings, or a car's value, and your debts count as liabilities, so paying them down lifts your net worth automatically.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Update at your own pace",
          content:
            "Net worth does not need to be perfect or daily. Update values when something changes and the upward trend takes care of itself.",
        },
      ],
      related: ["create-a-goal", "read-the-forecast", "using-the-ai-coach"],
    },
    {
      id: "read-the-forecast",
      title: "Read your cash-flow forecast",
      description:
        "See where your money is heading so there are no surprises at month's end.",
      category: "goals",
      keywords: ["forecast", "cash flow", "projection", "future", "month end", "predict"],
      updated: "2026-06-14",
      blocks: [
        {
          type: "paragraph",
          content:
            "The cash-flow forecast looks ahead. Based on your budget, known bills, and recent patterns, it projects where you are likely to land so you can plan with confidence.",
        },
        {
          type: "heading",
          level: 2,
          content: "How to read it",
        },
        {
          type: "list",
          items: [
            "An upward trend means you are on track to have money left over.",
            "A dip toward zero is an early warning to ease up or adjust a budget.",
            "Known bills and set-asides are factored in, so the picture is realistic.",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "A projection, not a promise",
          content:
            "The forecast is an estimate based on your habits. The more consistently you track, the more accurate it becomes.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Ask in plain language",
          content:
            "You can ask the AI coach \"will I make it to payday?\" for a forecast-aware answer in everyday words.",
        },
      ],
      related: ["what-is-safe-to-spend", "track-a-debt", "using-the-ai-coach"],
    },

    /* ─────────────────────────── The AI coach ────────────────────────────── */
    {
      id: "using-the-ai-coach",
      title: "Using the AI coach",
      description:
        "Ask money questions in plain language and get answers that never leave your iPhone.",
      category: "coach",
      keywords: ["coach", "ai", "ask", "questions", "afford", "on-device", "cedar", "offline"],
      updated: "2026-06-14",
      blocks: [
        {
          type: "paragraph",
          content:
            "The AI coach is like having a thoughtful friend who happens to know your budget. Ask it anything about your money in everyday language and it answers using what is already on your device.",
        },
        {
          type: "heading",
          level: 2,
          content: "Things you can ask",
        },
        {
          type: "list",
          items: [
            "\"Can I afford takeout tonight?\"",
            "\"Where did my money go this month?\"",
            "\"Why did my safe-to-spend change?\"",
            "\"How am I doing on groceries?\"",
            "\"Will I make it to payday?\"",
            "\"How is my debt payoff going?\"",
          ],
        },
        {
          type: "callout",
          variant: "privacy",
          title: "Your finances never leave your phone",
          content:
            "The coach runs on-device. It understands you using Apple's on-device Foundation Models on iOS 26 and later, an on-device sentence-embedding router otherwise, and a keyword fallback so it always responds. It never sends your transactions, balances, categories, or chat to a server, so it can even help when you are offline.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Cedar: an optional richer model",
          content:
            "On Premium and higher, you can download an optional on-device model nicknamed Cedar for more detailed answers. Setting it up is a one-time download of model files using plain requests that contain no account details and none of your financial data. After that, Cedar runs entirely on-device.",
        },
        {
          type: "faq",
          items: [
            {
              q: "Does it give financial advice?",
              a: "It helps you understand your own numbers and make everyday decisions. It is a helpful guide, not a licensed financial advisor.",
            },
            {
              q: "Can I ask hands-free?",
              a: "Yes. You can reach the coach with Siri, and it falls back gracefully if it does not understand, so it keeps being useful.",
            },
          ],
        },
      ],
      related: ["what-is-safe-to-spend", "read-the-forecast", "does-my-data-leave-my-phone"],
    },

    /* ─────────────────────────── Connecting a bank (Plaid) ───────────────── */
    {
      id: "connect-a-bank",
      title: "Connect a bank with Plaid",
      description:
        "Link an account so your transactions and balances stay up to date automatically.",
      category: "bank-sync",
      keywords: ["connect", "link bank", "plaid", "account", "sync", "automatic", "setup bank"],
      updated: "2026-06-14",
      blocks: [
        {
          type: "paragraph",
          content:
            "Linking a bank is optional, and it is the easiest way to keep Vault current without typing. Connections are handled by Plaid, a trusted service that securely connects apps to banks.",
        },
        {
          type: "callout",
          variant: "info",
          title: "A paid feature",
          content:
            "Bank linking is part of Plus and higher. On the Free plan, Vault stays fully manual and on-device. See Compare plans for what each tier includes.",
        },
        {
          type: "steps",
          items: [
            {
              title: "Start the connection",
              description:
                "In Settings, choose to manage linked banks, then add a bank.",
            },
            {
              title: "Choose your bank in Plaid",
              description:
                "Plaid's secure Link screen opens. Search for and select your institution.",
            },
            {
              title: "Sign in with Plaid",
              description:
                "Enter your bank username and password on Plaid's screen. You are signing in to your bank through Plaid, not into Vault.",
            },
            {
              title: "Pick accounts and finish",
              description:
                "Choose which accounts to share. Plaid hands a secure token back, and your transactions begin to sync.",
            },
          ],
        },
        {
          type: "callout",
          variant: "privacy",
          title: "Vault never sees your bank password",
          content:
            "You type your bank credentials inside Plaid's own secure screen, not in Vault. Vault never sees or stores your bank username or password. The access token that allows syncing is held on a secure relay server, never on your device.",
        },
        {
          type: "paragraph",
          content:
            "Once linked, transactions and balances keep themselves current. You can also pull the latest any time with Sync Now.",
        },
      ],
      related: ["is-it-safe-to-link-my-bank", "missing-bank-transaction", "compare-plans"],
    },
    {
      id: "is-it-safe-to-link-my-bank",
      title: "Is it safe to link my bank?",
      description:
        "Exactly what Plaid sees, what Vault sees, and why your password is never exposed to us.",
      category: "bank-sync",
      keywords: ["safe", "secure", "plaid security", "bank password", "credentials", "what plaid sees", "trust"],
      updated: "2026-06-14",
      blocks: [
        {
          type: "paragraph",
          content:
            "It is a fair question to ask before connecting anything to your bank. Here is the honest, complete picture of how linking works in Vault.",
        },
        {
          type: "callout",
          variant: "privacy",
          title: "You sign in to your bank inside Plaid, not Vault",
          content:
            "When you link a bank, Plaid's own secure Link screen opens and you enter your bank credentials there. Vault never sees, receives, or stores your bank username or password. That is by design.",
        },
        {
          type: "heading",
          level: 2,
          content: "What each party sees",
        },
        {
          type: "list",
          items: [
            "Plaid sees the bank credentials you enter on its screen, and your transactions, balances, and (for credit cards and loans) liability details.",
            "A lightweight relay server holds the secure access token that lets Plaid fetch your data, and passes transactions through to your device. The token stays on the server, never on your phone.",
            "Vault, on your device, receives the resulting transactions and balances and stores them locally.",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "What the relay server does not receive",
          content:
            "The relay only handles bank tokens and transactions. It never receives your AI-coach chats, your category corrections, your goals, or your behavioral patterns. Those stay on your device.",
        },
        {
          type: "paragraph",
          content:
            "Plaid is widely used by major financial apps to connect to banks securely. When you link an account, Plaid's privacy policy applies to the bank connection it provides.",
        },
        {
          type: "faq",
          items: [
            {
              q: "Can Vault move money or make payments?",
              a: "No. Linking is read-only for transactions and balances. Vault cannot transfer funds, pay bills, or change anything at your bank.",
            },
            {
              q: "What if I do not want any of this?",
              a: "Then do not link a bank. Manual entry, receipt scanning, and statement import are fully on-device and require no connection.",
            },
          ],
        },
      ],
      related: ["connect-a-bank", "does-my-data-leave-my-phone", "missing-bank-transaction"],
    },
    {
      id: "missing-bank-transaction",
      title: "A bank transaction is missing or out of date",
      description:
        "Use Sync Now, understand automatic syncing, and re-connect a bank when needed.",
      category: "bank-sync",
      keywords: ["missing transaction", "sync now", "not updating", "reconnect", "re-consent", "webhook", "out of date"],
      updated: "2026-06-14",
      blocks: [
        {
          type: "paragraph",
          content:
            "Most of the time your linked transactions arrive on their own. If something is missing or looks stale, these steps usually sort it out.",
        },
        {
          type: "steps",
          items: [
            {
              title: "Tap Sync Now",
              description:
                "Open your linked bank and tap Sync Now to fetch the latest right away, rather than waiting for an automatic update.",
            },
            {
              title: "Give it a moment",
              description:
                "Banks sometimes post transactions a day or two late. A pending charge may appear once your bank finalizes it.",
            },
            {
              title: "Re-connect if asked",
              description:
                "Occasionally a bank requires you to confirm access again. If Vault asks you to reconnect, run through Plaid's secure screen once more.",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "How syncing works",
          content:
            "Linked banks update automatically when your bank signals new activity, and you can always pull updates on demand with Sync Now.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Still missing something?",
          content:
            "You can always add a transaction manually. Vault de-duplicates, so if the synced version arrives later it will not double up.",
        },
        {
          type: "faq",
          items: [
            {
              q: "Why do I have to reconnect sometimes?",
              a: "Banks periodically require fresh consent for continued access. Reconnecting through Plaid restores the secure connection.",
            },
            {
              q: "A charge shows the wrong category.",
              a: "Just fix it on the transaction. Your correction also helps Vault categorize similar charges better next time.",
            },
          ],
        },
      ],
      related: ["connect-a-bank", "is-it-safe-to-link-my-bank", "downgrade-plan"],
    },

    /* ─────────────────────────── Privacy & your data ─────────────────────── */
    {
      id: "does-my-data-leave-my-phone",
      title: "Does my data leave my phone?",
      description:
        "The honest answer about what stays on-device and the few things that can leave.",
      category: "privacy",
      keywords: ["privacy", "data", "leave phone", "on-device", "honest", "what leaves", "tracking"],
      updated: "2026-06-14",
      blocks: [
        {
          type: "paragraph",
          content:
            "You deserve a straight answer. Here it is, without spin.",
        },
        {
          type: "callout",
          variant: "privacy",
          title: "Your financial data lives on your device",
          content:
            "Your expenses, budgets, goals, debts, and coach chats are stored locally on your iPhone. The AI coach and category learning run on-device. None of this is sold, brokered, or sent to analytics services.",
        },
        {
          type: "heading",
          level: 2,
          content: "The only things that can leave the device",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Bank sync, if you choose to link a bank. Then your transactions and balances sync through Plaid. This is opt-in and part of a paid plan.",
            "Optional anonymous diagnostics, if you turn them on. These are event-name counts plus a hashed ID only, never your amounts, merchants, categories, chats, or balances. They are off by default.",
            "A one-time AI model download, if you choose to set up the optional Cedar model. The download is plain file requests with no account or financial data.",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "What Vault deliberately does not do",
          content:
            "No third-party analytics SDKs (no Firebase, Amplitude, and the like), no ads, no advertising identifiers, no data brokers, and no selling of your data.",
        },
        {
          type: "paragraph",
          content:
            "In short: stay fully manual and nothing about your finances leaves your iPhone. Opt in to linking a bank and your transactions sync through Plaid. The choice is always yours.",
        },
      ],
      related: ["is-it-safe-to-link-my-bank", "turn-diagnostics-on-or-off", "export-your-data"],
    },
    {
      id: "turn-diagnostics-on-or-off",
      title: "Turn anonymous diagnostics on or off",
      description:
        "An optional, off-by-default way to help improve Vault that never includes your financial details.",
      category: "privacy",
      keywords: ["diagnostics", "anonymous", "telemetry", "usage data", "opt in", "opt out", "analytics"],
      updated: "2026-06-14",
      blocks: [
        {
          type: "paragraph",
          content:
            "Anonymous diagnostics are a small, optional way to help make Vault better. They are off by default, and you are in full control.",
        },
        {
          type: "callout",
          variant: "privacy",
          title: "What diagnostics include, and never include",
          content:
            "If you opt in, Vault sends only counts of which features were used, along with a hashed ID. It never sends your amounts, merchants, categories, chat content, balances, incomes, or debt details.",
        },
        {
          type: "steps",
          items: [
            {
              title: "Open Settings",
              description: "Go to the Settings tab, then the privacy section.",
            },
            {
              title: "Find Anonymous Usage Data",
              description:
                "This toggle ships turned off. Vault never collects diagnostics unless you turn it on.",
            },
            {
              title: "Choose your preference",
              description:
                "Flip it on to help, or leave it off. Turning it off afterward stops collection and clears anything queued.",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Truly anonymous",
          content:
            "The hashed ID cannot be tied back to your name, email, or phone, and is kept separate from any bank connection so the two cannot be cross-referenced.",
        },
      ],
      related: ["does-my-data-leave-my-phone", "set-up-face-id-lock", "export-your-data"],
    },
    {
      id: "export-your-data",
      title: "Export your data (CSV)",
      description:
        "Your data is yours. Export it to CSV any time.",
      category: "privacy",
      keywords: ["export", "csv", "backup", "download data", "spreadsheet", "reports", "pdf"],
      updated: "2026-06-14",
      blocks: [
        {
          type: "paragraph",
          content:
            "Vault believes your data belongs to you. You can export it to a CSV file whenever you like, to keep a backup or open it in a spreadsheet.",
        },
        {
          type: "steps",
          items: [
            {
              title: "Open Settings",
              description: "Go to the Settings tab and find data export.",
            },
            {
              title: "Export to CSV",
              description: "Choose to export. Vault creates a CSV file of your data.",
            },
            {
              title: "Save or share it",
              description:
                "Use the share sheet to save the file to Files, email it to yourself, or move it wherever you keep backups.",
            },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Great before switching phones",
          content:
            "Since Vault data is local to each device, exporting a CSV is a handy way to keep a copy when you move to a new iPhone.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Reports export too",
          content:
            "Beyond a full data export, you can export reports and charts as PDF or CSV for sharing or record-keeping.",
        },
      ],
      related: ["move-to-a-new-phone", "does-my-data-leave-my-phone", "what-is-safe-to-spend"],
    },
    {
      id: "move-to-a-new-phone",
      title: "Moving to a new iPhone",
      description:
        "How to bring your money into a new device, and the honest truth about syncing.",
      category: "privacy",
      keywords: ["new phone", "transfer", "migrate", "switch devices", "icloud", "sync", "move"],
      updated: "2026-06-14",
      blocks: [
        {
          type: "paragraph",
          content:
            "Because Vault keeps your data on your device for privacy, moving to a new iPhone works a little differently than apps that sync to the cloud. Here is the honest picture and your best options.",
        },
        {
          type: "callout",
          variant: "info",
          title: "There is no iCloud sync in this version",
          content:
            "Vault stores your data locally on each device and does not sync your financial data between devices through iCloud. This is a deliberate privacy choice for this version, so your data is not the same across your iPhone and iPad.",
        },
        {
          type: "heading",
          level: 2,
          content: "Your options for a new device",
        },
        {
          type: "list",
          items: [
            "Re-link your bank through Plaid on the new phone to pull your transactions back in.",
            "Re-import statements you have saved as PDF or CSV.",
            "Export a CSV from your old phone first, so you keep a personal copy of your records.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Before you switch",
          content:
            "Export a CSV from your current iPhone while you still have it set up. It is the simplest way to carry your history forward.",
        },
        {
          type: "faq",
          items: [
            {
              q: "Will my data appear automatically on my iPad?",
              a: "No. Data is local to each device. To populate another device, re-link a bank or re-import there.",
            },
            {
              q: "Is cloud sync coming?",
              a: "This version is intentionally local-only. We will always be upfront about what changes if that ever does.",
            },
          ],
        },
      ],
      related: ["export-your-data", "does-my-data-leave-my-phone", "connect-a-bank"],
    },

    /* ───────────────────────────── Plans & billing ───────────────────────── */
    {
      id: "compare-plans",
      title: "Compare Free, Plus, Premium & Premium Plus",
      description:
        "See what each plan includes so you can pick the right fit.",
      category: "billing",
      keywords: ["plans", "pricing", "free", "plus", "premium", "premium plus", "compare", "tiers", "subscription"],
      updated: "2026-06-14",
      blocks: [
        {
          type: "paragraph",
          content:
            "Vault is genuinely useful for free, and paid plans simply add automatic bank syncing and a few extras. Here is how the tiers compare.",
        },
        {
          type: "list",
          items: [
            "Free: manual entry, receipt scanning, statement import, budgets, goals, debt, net worth, forecast, and the on-device AI coach. No linked banks; everything stays on-device.",
            "Plus, $2.99 per month: everything in Free, plus connect 1 bank through Plaid for automatic transactions.",
            "Premium, $4.99 per month: everything in Plus, up to 3 linked banks, advanced insights, and the option to download the on-device Cedar AI model for richer coaching.",
            "Premium Plus, $9.99 per month: everything in Premium, up to 10 linked banks, unlimited syncs, and Family Sharing.",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Manual is always free and on-device",
          content:
            "You never need to pay to track money in Vault. Paid plans are only about optional bank syncing and the extras above.",
        },
      ],
      related: ["connect-a-bank", "downgrade-plan", "restore-purchases"],
    },
    {
      id: "downgrade-plan",
      title: "What happens if I downgrade or cancel",
      description:
        "Bank sync stops, but everything already imported stays with you.",
      category: "billing",
      keywords: ["downgrade", "cancel", "subscription", "stop sync", "lose data", "expire"],
      updated: "2026-06-14",
      blocks: [
        {
          type: "paragraph",
          content:
            "Plans change, and that is okay. Vault is designed so you never lose your history when your plan does.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Your data stays",
          content:
            "If you downgrade or cancel, automatic bank syncing stops, but every transaction already imported stays right where it is. You keep your expenses, budgets, goals, debts, and history.",
        },
        {
          type: "list",
          items: [
            "Bank syncing pauses, so new transactions stop arriving automatically.",
            "Already-synced and manually entered data remains fully available.",
            "You can keep tracking by hand, scanning receipts, and importing statements, all free and on-device.",
            "Re-subscribe any time to resume syncing.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Keep a copy",
          content:
            "Want a personal backup either way? Export your data to CSV from Settings at any time.",
        },
        {
          type: "faq",
          items: [
            {
              q: "How do I cancel?",
              a: "Subscriptions are managed through your Apple Account in iOS Settings, the same place you manage other App Store subscriptions.",
            },
            {
              q: "Will I lose my linked-bank transactions?",
              a: "No. The transactions already imported from a linked bank stay. Only future automatic syncing pauses.",
            },
          ],
        },
      ],
      related: ["compare-plans", "restore-purchases", "export-your-data"],
    },
    {
      id: "restore-purchases",
      title: "Restore purchases",
      description:
        "Get your subscription back after reinstalling or on another device.",
      category: "billing",
      keywords: ["restore", "purchases", "subscription", "reinstall", "missing", "apple account"],
      updated: "2026-06-14",
      blocks: [
        {
          type: "paragraph",
          content:
            "If you reinstalled Vault or set it up on another device and your plan is not showing, restoring purchases reconnects your subscription.",
        },
        {
          type: "steps",
          items: [
            {
              title: "Check your Apple Account",
              description:
                "Make sure you are signed in with the same Apple Account you used to subscribe.",
            },
            {
              title: "Open Settings in Vault",
              description: "Go to the Settings tab and find restore purchases.",
            },
            {
              title: "Restore",
              description:
                "Tap restore. Vault checks with the App Store and re-enables your plan.",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Subscriptions live with Apple",
          content:
            "Your subscription is tied to your Apple Account, not to your local data. Restoring brings back access to paid features like bank syncing.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Remember: data is local",
          content:
            "Restoring purchases restores your plan, not your transactions. Since data is local to each device, re-link a bank or re-import to repopulate a fresh install.",
        },
      ],
      related: ["downgrade-plan", "compare-plans", "move-to-a-new-phone"],
    },
  ],
};

export default vaultKb;
