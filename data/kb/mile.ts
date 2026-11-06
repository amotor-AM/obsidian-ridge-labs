import { KnowledgeBase } from "../../types";

export const mileKb: KnowledgeBase = {
  appId: "mile",
  appName: "Mile",
  accent: "#ffa62e",
  status: "ready",
  intro:
    "Guides for recording drives, sorting them, making a tax log for your accountant, and managing Mile Pro.",
  categories: [
    {
      id: "getting-started",
      title: "Getting started",
      description: "What Mile does and the permissions it needs to record on its own.",
      icon: "book",
    },
    {
      id: "drives",
      title: "Recording drives",
      description: "How a drive starts and ends, stops, splitting, and drives Mile missed.",
      icon: "route",
    },
    {
      id: "reports",
      title: "Reports",
      description: "The Audit check, the PDF tax log, and the reimbursement report.",
      icon: "file-text",
    },
    {
      id: "privacy",
      title: "Privacy and your data",
      description: "Where your log lives, what reaches Apple Maps, and backups.",
      icon: "lock",
    },
    {
      id: "billing",
      title: "Plans and billing",
      description: "The free limit, Mile Pro, cancelling, and restoring a purchase.",
      icon: "star",
    },
  ],
  articles: [
    {
      id: "welcome",
      title: "Welcome to Mile",
      description: "A mileage log that records itself and ends in a report your accountant can use.",
      category: "getting-started",
      keywords: ["welcome", "about", "intro", "tabs", "mileage", "tax"],
      updated: "2026-11-06",
      blocks: [
        {
          type: "paragraph",
          content:
            "Mile records your drives on your iPhone, prices each one at the IRS rate for its date, and turns the year into a PDF your accountant can file from.",
        },
        { type: "heading", level: 2, content: "The four tabs" },
        {
          type: "list",
          items: [
            "Drives: every recorded drive, newest first, with anything waiting for you at the top.",
            "Reports: your deduction, monthly totals, the Audit check, and exports.",
            "Ask: questions about your own log, answered on your iPhone.",
            "Settings: your name on reports, vehicles, saved places, permissions, and backups.",
          ],
        },
        {
          type: "callout",
          variant: "privacy",
          title: "No account, no Mile server",
          content:
            "Your log stays on your iPhone. Settings has a privacy ledger that shows what has left it.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Not tax advice",
          content: "Mile keeps the record. Ask your preparer what you can deduct.",
        },
      ],
      related: ["permissions", "how-recording-works", "tax-log"],
    },
    {
      id: "permissions",
      title: "The permissions Mile needs",
      description: "Why Mile asks for Location Always, Motion & Fitness, and Notifications.",
      category: "getting-started",
      keywords: ["permissions", "location", "always", "motion", "fitness", "notifications", "settings"],
      updated: "2026-11-06",
      blocks: [
        {
          type: "paragraph",
          content:
            "Mile explains each permission on its own page during setup and asks only when you tap Continue.",
        },
        {
          type: "list",
          items: [
            "Location, set to Always: records drives while the app is closed. GPS runs only while you drive.",
            "Motion & Fitness: tells driving from walking without GPS, and finds drives from the last 7 days that Mile did not record.",
            "Notifications: after you park, lets you mark the drive Work or Personal or type its purpose.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Drives not recording?",
          content:
            "Open Settings in Mile. If something is off, Your setup shows a Fix permissions button that takes you to the right place.",
        },
      ],
      related: ["how-recording-works", "missing-drive"],
    },
    {
      id: "how-recording-works",
      title: "How Mile records a drive",
      description: "When a drive starts, when it ends, and what happens at a stop.",
      category: "drives",
      keywords: ["record", "detect", "start", "stop", "automatic", "gps", "join", "stops"],
      updated: "2026-11-06",
      blocks: [
        {
          type: "paragraph",
          content:
            "The motion sensor notices when you start driving, and Mile turns on GPS for the drive. When you park, GPS turns off and Mile saves the drive with its route, miles, and start and end places.",
        },
        { type: "heading", level: 2, content: "Stops" },
        {
          type: "paragraph",
          content:
            "Stop for up to 30 minutes and drive on, and Mile keeps it as one drive with a stop. Reaching Home, Work, or another saved place always ends the drive, so saved places keep your log divided the way you expect.",
        },
        {
          type: "paragraph",
          content:
            "To divide a drive yourself, open it and use Split into two drives at the stop.",
        },
        { type: "heading", level: 2, content: "Recording by hand" },
        {
          type: "paragraph",
          content:
            "Use Start recording now in the menu on Drives, and Stop recording when you arrive. Add a drive manually enters one after the fact.",
        },
      ],
      related: ["missing-drive", "permissions"],
    },
    {
      id: "missing-drive",
      title: "A drive is missing or looks wrong",
      description: "What to check, and how to add a drive Mile did not record.",
      category: "drives",
      keywords: ["missing", "missed", "wrong", "not recording", "add", "split", "troubleshooting"],
      updated: "2026-11-06",
      blocks: [
        {
          type: "steps",
          items: [
            {
              title: "Check your setup",
              description:
                "Open Settings in Mile. Location should be Always, Motion & Fitness should be on, and Detect drives automatically should be on. Low Power Mode and force-quitting the app can both delay detection.",
            },
            {
              title: "Look at the top of Drives",
              description:
                "When Motion & Fitness shows a drive from the last 7 days that Mile did not record, a banner offers it. Add only your own drives, because the phone can't tell whose car you were in.",
            },
            {
              title: "Add it by hand",
              description: "Use Add a drive manually in the menu on Drives for anything older.",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Still wrong?",
          content:
            "Email support@obsidianridgelabs.com with the date and rough time. We can't see your log, so tell us what you expected and what Mile showed.",
        },
      ],
      related: ["how-recording-works", "permissions"],
    },
    {
      id: "audit-check",
      title: "The Audit check",
      description: "Find what your log is missing before tax time, and fix it in one list.",
      category: "reports",
      keywords: ["audit", "missing", "purpose", "irs", "records", "complete"],
      updated: "2026-11-06",
      blocks: [
        {
          type: "paragraph",
          content:
            "The Audit check is on Reports. It goes through your year and lists work, medical, and charity drives without a purpose, drives without a start or end place, and drives you have not sorted. Fix them in one list, with your recent purposes ready to reuse.",
        },
      ],
      related: ["tax-log", "reimbursement"],
    },
    {
      id: "tax-log",
      title: "The PDF tax log",
      description: "What the report holds and how to get it to your accountant.",
      category: "reports",
      keywords: ["tax log", "pdf", "schedule c", "form 4562", "cpa", "accountant", "report", "irs"],
      updated: "2026-11-06",
      blocks: [
        {
          type: "paragraph",
          content:
            "The tax log is a Mile Pro report. It opens with totals by category beside the Schedule C and Form 4562 lines they go on, then lists each deductible drive with its purpose and the IRS rate for its date.",
        },
        {
          type: "list",
          items: [
            "Your name, set under Your name on reports in Settings.",
            "Every drive's date, places, purpose, miles, and amount.",
            "Your odometer readings compared with the miles Mile logged.",
            "Any missing details, marked so your preparer can see them.",
            "The edit history of changed drives.",
          ],
        },
        {
          type: "steps",
          items: [
            { title: "Open Reports", description: "Choose the period you want, usually This year or Last year." },
            { title: "Tap Tax log (PDF)", description: "Mile makes the file on your iPhone." },
            { title: "Send it", description: "Use the share sheet to email it to your accountant or save it to Files." },
          ],
        },
      ],
      related: ["audit-check", "reimbursement", "backups"],
    },
    {
      id: "reimbursement",
      title: "The reimbursement report",
      description: "A PDF and spreadsheet of work drives to hand to your employer.",
      category: "reports",
      keywords: ["reimbursement", "employer", "rate", "commute", "expense", "csv"],
      updated: "2026-11-06",
      blocks: [
        {
          type: "paragraph",
          content:
            "The reimbursement report is a Mile Pro report on Reports. It lists your work drives, with commute drives if your employer pays for them, at the IRS rate or your employer's own rate per mile. Each drive shows its date, places, purpose, miles, and amount, with month subtotals, the rate used, and lines to sign.",
        },
        {
          type: "paragraph",
          content: "Use Create PDF to hand it in, or Spreadsheet (CSV) for the same drives in a spreadsheet.",
        },
      ],
      related: ["tax-log"],
    },
    {
      id: "where-your-log-lives",
      title: "Where your log lives",
      description: "What stays on your iPhone and what reaches Apple Maps.",
      category: "privacy",
      keywords: ["privacy", "data", "server", "account", "apple maps", "ledger", "analytics"],
      updated: "2026-11-06",
      blocks: [
        {
          type: "callout",
          variant: "privacy",
          title: "Nothing is sent to us",
          content:
            "Mile has no account, no server, no analytics, and no ads. Your drives, routes, places, vehicles, and odometer readings stay on your iPhone.",
        },
        {
          type: "paragraph",
          content:
            "Place names come from Apple Maps. Mile sends Apple the points where a drive starts, stops, and ends. Turn off Look up place names in Settings to stop that. Mile also sends the text you type when you search for a saved place's address and, when you add a drive Mile did not record, the points where you parked before and after it so the route can be measured.",
        },
        {
          type: "paragraph",
          content:
            "The privacy ledger in Settings counts those Apple Maps requests and shows what was sent to Obsidian Ridge Labs, which is nothing. Read the full policy at obsidianridgelabs.com/privacy.",
        },
      ],
      related: ["backups", "welcome"],
    },
    {
      id: "backups",
      title: "Backups and moving to a new iPhone",
      description: "Export a full backup, restore it, or delete everything.",
      category: "privacy",
      keywords: ["backup", "restore", "export", "csv", "delete", "new iphone", "transfer"],
      updated: "2026-11-06",
      blocks: [
        {
          type: "paragraph",
          content:
            "Mile has no server, so your log has no copy with us. Keep your own: use Export a full backup in Settings and save the file somewhere safe, then use Restore from a backup on the new iPhone.",
        },
        {
          type: "paragraph",
          content:
            "Delete all data in Settings removes your log from this iPhone, as does deleting the app. Mile's data may also be in your own iCloud device backups, depending on your settings.",
        },
      ],
      related: ["where-your-log-lives"],
    },
    {
      id: "plans",
      title: "Free and Mile Pro",
      description: "What each plan includes, what it costs, and how to cancel or restore.",
      category: "billing",
      keywords: ["free", "pro", "price", "subscription", "cancel", "restore", "monthly", "yearly", "limit", "refund"],
      updated: "2026-11-06",
      blocks: [
        {
          type: "paragraph",
          content:
            "Mile records every drive on every plan. Free lets you sort and export 10 drives a month, and a drive with stops counts once. It includes the Audit check, maps, the missed drive finder, CSV export, full backup, one vehicle, and your home and work places.",
        },
        {
          type: "paragraph",
          content:
            "Mile Pro is $9.99 a month or $99 a year in the US, and the App Store shows the price for your country. It removes the monthly limit and adds the PDF tax log, the reimbursement report, Ask, the odometer ledger, automatic sorting of your regular drives, more than one vehicle, and any number of saved places.",
        },
        {
          type: "faq",
          items: [
            {
              q: "How do I cancel?",
              a: "In Mile, open Settings and tap Manage Subscription. You can also cancel in your Apple Account settings. Cancel at least 24 hours before the current period ends to avoid the next renewal. Pro stays on until the period ends.",
            },
            {
              q: "What happens to my drives if Pro ends?",
              a: "Nothing is deleted. Mile keeps recording, and the free monthly limit applies again to sorting and exporting.",
            },
            {
              q: "How do I restore Pro on a new iPhone?",
              a: "Sign in with the same Apple Account, open Settings, tap Get Mile Pro, then Restore Purchase.",
            },
            {
              q: "How do I get a refund?",
              a: "Apple handles billing and refunds. Request one at reportaproblem.apple.com.",
            },
          ],
        },
      ],
      related: ["tax-log", "backups"],
    },
  ],
};
