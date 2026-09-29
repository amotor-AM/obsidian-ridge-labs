/** Product narratives grounded in the source audits in docs/research-2026-09-26. */
export interface ProductStory {
  title: string;
  intro: string;
  category: string;
  local: string;
  defaultScreen: string;
  screens: Record<string, { label: string; caption: string }>;
  mechanism: {
    eyebrow: string;
    title: string;
    intro: string;
    steps: { title: string; body: string }[];
    note?: string;
  };
  benefits: { title: string; body: string; detail?: string; badge?: string }[];
  offer: {
    title: string;
    free: string[];
    paidName: string;
    paid: string[];
    note?: string;
  };
  requirements: string;
  boundary: { processing: string; storage: string; connections: string };
  portability: { title: string; body: string; note?: string };
  seo: { title: string; description: string; keywords: string[] };
}

export const productStories: Record<string, ProductStory> = {
  mettle: {
    title: "Know what to lift next.",
    intro: "Mettle uses your logged sets to plan the next workout and shows why it chose each rep target and weight. Ask the coach to change an exercise or fit the session into the time you have.",
    category: 'Strength training for iPhone',
    local: 'Programming and coaching run on your iPhone. Training records use private iCloud storage by default when available.',
    defaultScreen: 'plan',
    screens: {
      plan: { label: 'The plan', caption: 'Inspect the training week, session details, and the plan’s “Why this?” control.' },
      workout: { label: 'In the session', caption: 'Follow the warm-up and record the work. This capture shows a session in progress.' },
      today: { label: 'Up next', caption: 'Return to the next session from Today.' },
    },
    mechanism: {
      eyebrow: "Your next sets and reps",
      title: "See what changed since last time.",
      intro: "You hit the top of the rep range, missed a target, or came back after a break. Mettle uses that history to work out the next weight and tells you why.",
      steps: [
        { title: "Log the work.", body: "Record the reps and weight you completed. Mettle looks at up to three recent sessions for each exercise when planning the next one." },
        { title: "Get your next targets.", body: "Training rules decide when to add weight, aim for more reps, or back off. Those same rules record the reason for the change." },
        { title: "See the reason.", body: "Open “Why this?” to see the training history and rule behind your targets. Ask the coach if you want to discuss a change." },
      ],
      note: "Without previous sets to work from, Mettle starts with your goals, experience, equipment, and baseline information.",
    },
    benefits: [
      { title: "Make the session fit your day.", body: "Tell the coach when you have less time or need a different exercise. Review the suggested changes to your exercises, session length, or training days before applying them.", detail: "Saved restrictions help later plans account for the same constraints." },
      { title: "Leave your phone between sets.", body: "Use spoken cues and rest timers to follow the workout. The Apple Watch companion lets you log sets and control the active session on your iPhone from your wrist.", detail: "Rep detection supports selected movements. The Watch companion needs the active phone session." },
    ],
    offer: {
      title: "Start with a complete training plan.",
      free: ['One active program, with past plans kept read-only', 'Coach conversations, athlete memory, and constraints', 'Watch logging and training-history import and export'],
      paidName: 'Pro',
      paid: ['Switch between saved programs', 'Weekly reviews, deeper trends, and block comparisons', 'Proactive form cues and expanded records'],
    },
    requirements: 'The current build targets iPhone on iOS 26.1 or later with Apple Intelligence available. The workout remote requires watchOS 26. Training screens currently use pounds.',
    boundary: {
      processing: 'Workout programming runs in local code. Apple Foundation Models provides on-device coaching and exercise selection from a curated shortlist.',
      storage: 'Training records use private iCloud storage by default when available, with a local fallback. This is the default storage choice, rather than an optional sync setting.',
      connections: 'Private iCloud, optional Health access, and the Watch companion use Apple services. Model setup and App Store purchases can also require a connection.',
    },
    portability: { title: "Bring your previous workouts.", body: 'Import set history from CSV, review the detected records, and choose the weight unit before saving. Undo an import if it is wrong. Export your history again without a paid plan.', note: 'CSV compatibility depends on the file’s columns. Check the preview to see which records Mettle can read.' },
    seo: { title: "Mettle: Know What to Lift Next", description: "Mettle is in development for iPhone. Get next-workout targets from your logged sets, see the reason for each change, and adjust the plan.", keywords: ['Mettle strength training', 'workout progression explanation', 'on-device strength coach', 'training history CSV import'] },
  },
  memora: {
    title: "Learn from the notes you already have.",
    intro: "Turn your notes, photos, and PDFs with selectable text into flashcards on your iPhone. Choose the cards worth keeping, then let your recall guide the review schedule.",
    category: 'Flashcards and spaced repetition',
    local: 'Card generation, text recognition, and review scheduling run on your iPhone. Decks stay in the app’s local store.',
    defaultScreen: 'review',
    screens: {
      review: { label: 'Choose drafts', caption: 'Select the drafts to add. This capture shows cards produced by on-device text analysis.' },
      study: { label: 'Review a card', caption: 'Recall the answer, reveal it, and rate how it went so the next review can be scheduled.' },
      home: { label: 'Your decks', caption: 'Find your decks and the cards ready for another review.' },
    },
    mechanism: {
      eyebrow: "Making your first cards",
      title: "Choose the cards you want to study.",
      intro: "Memora makes a first draft from your material. You decide which cards belong in the deck, and you can edit them after saving.",
      steps: [
        { title: "Add your material.", body: "Paste notes, select a PDF with embedded text, or capture text from a photo or camera scan. Start with a passage you want to learn." },
        { title: "Review the drafts.", body: "Read the proposed questions and answers, deselect the ones you do not want, and add the rest together. Saved cards can be edited in the deck." },
        { title: "Rate what you remember.", body: "After each review, choose Again, Hard, Good, or Easy. FSRS uses that response and your review history to decide when the card should return." },
      ],
      note: "AI generation reads up to 4,000 characters and proposes up to 12 cards per run. For pages without selectable PDF text, use photo or camera text capture.",
    },
    benefits: [
      { title: "Practise in a different way.", body: "Match questions with answers, listen to text cards, or cover labels on a diagram. You can use these modes with the material already in your decks.", detail: "Match needs at least two eligible text cards. Listen is for text cards; image cards can be made manually." },
      { title: "Work through what you missed.", body: "Use Test mode to check your knowledge, then ask the on-device tutor about your deck. Plus also adds automatic label detection for image cards and more detailed study statistics.", badge: 'Plus', detail: "The tutor uses a limited selection of cards as context. Check its answers against your study material." },
    ],
    offer: {
      title: "Keep reviewing for free.",
      free: ['Three created decks, FSRS reviews, Match, and Listen', '50 accepted AI cards and 10 OCR pages per month', 'Manual image cards and supported deck imports'],
      paidName: 'Plus',
      paid: ['Unlimited created decks, AI cards, and OCR pages', 'Test mode, deck tutor, and automatic image occlusion', 'Deeper statistics and an adjustable retention target'],
      note: 'Imported decks do not consume the three-created-deck allowance. Fallback text-analysis cards do not use the AI-card meter.',
    },
    requirements: 'The current build targets iPhone on iOS 26 with Apple Intelligence-capable hardware. When Apple Intelligence is switched off or still downloading on a capable device, manual study and fallback text analysis remain available.',
    boundary: {
      processing: 'Apple Foundation Models generates cards on-device. Vision reads photos; PDF text extraction and FSRS scheduling also run locally. A text-analysis fallback is available.',
      storage: 'Decks are stored in a local database. The current build has no iCloud deck sync. Library backup files contain cards and available images, not the study schedule or review history.',
      connections: 'Required model setup and App Store purchases can use a connection. Import and export use the files and destinations you select; no Memora account is required.',
    },
    portability: { title: "Keep using the cards you have.", body: "Import compatible Anki text decks, Quizlet text exports, or CSV. Share a Memora deck or export the content of your library with its available images. Import and export do not require Plus.", note: 'Anki import supports legacy anki2/anki21 databases, not anki21b or Anki media. Restored decks start a fresh review schedule. CSV export is text-only.' },
    seo: { title: "Memora: Flashcards from Your Own Notes", description: 'Memora is an iPhone study app in development. Select drafts from notes, photos, or text PDFs, then review your cards with FSRS.', keywords: ['Memora flashcards', 'FSRS study app', 'notes to flashcards', 'on-device flashcard generation'] },
  },
  molehill: {
    title: "Start with a smaller step.",
    intro: "Tell Molehill what you need to do and turn it into an editable plan. When a step still feels too big, split that part again without starting over.",
    category: 'Task breakdown and focus',
    local: 'Task planning, brain-dump sorting, and speech transcription run on your iPhone. Tasks do not sync to a cloud service.',
    defaultScreen: 'breakdown',
    screens: {
      breakdown: { label: 'Break it down', caption: 'Choose the level of detail, inspect a proposed breakdown, then replace the task’s steps.' },
      today: { label: 'Today', caption: 'Bring the next step back into view instead of reopening the whole project.' },
      focus: { label: 'Focus', caption: 'Work on the selected step with an optional focus timer.' },
    },
    mechanism: {
      eyebrow: "When a task is not getting started",
      title: "Split the step that stops you.",
      intro: "“Clean the kitchen” can become “put away the cups.” Molehill keeps the task in view while helping you find a smaller action you can take now.",
      steps: [
        { title: "Choose the detail.", body: "Ask for a broad outline, a balanced plan, or smaller steps. Review the result before replacing your existing list." },
        { title: "Shrink a stuck step.", body: "Split one step into two to four smaller actions. Molehill uses the parent task and its time estimate to keep the suggestions relevant." },
        { title: "Start in Focus.", body: "Keep the current step on screen, use a timer if it helps, and mark it done when you finish. You can snooze it or split it again." },
      ],
      note: 'A simpler step-splitting tool remains available when the daily AI allowance is used up.',
    },
    benefits: [
      { title: "Sort out what is on your mind.", body: "Type or dictate a brain dump before trying to organize it. Edit the proposed task names, change their categories or urgency, and remove anything you do not want to keep.", detail: 'Speech transcription runs on-device after the required language assets are available.' },
      { title: "Plan for the tasks that return.", body: "Set a task to recur, move it to another day, or send its remaining steps to Apple Reminders or Calendar with Pro.", badge: 'Export with Pro', detail: 'Those exports are one-way. Changes in Reminders or Calendar do not sync back into Molehill.' },
    ],
    offer: {
      title: "Keep making progress on the free plan.",
      free: ['Manual tasks, step management, and Focus', 'Three AI actions per local day', 'Fallback step splitting and basic brain-dump parsing'],
      paidName: 'Pro',
      paid: ['Unlimited AI actions', 'Reminders and Calendar export', 'Deeper statistics and additional themes'],
    },
    requirements: 'The current build requires iPhone on iOS 26 with Apple Intelligence available. Microphone and speech permissions are needed for dictation.',
    boundary: {
      processing: 'AI breakdowns and brain-dump sorting run through Apple Foundation Models on-device. SpeechAnalyzer transcribes locally. Simpler fallback paths handle supported tasks without a model response.',
      storage: 'Tasks live in a local database on the iPhone. Widgets and Spotlight can surface task information on the device. There is no cross-device task sync in the current build.',
      connections: 'Language or model setup and purchases can require a connection. Tasks you export to Reminders or Calendar may sync through your Apple account.',
    },
    portability: { title: "Put the steps on your calendar.", body: "Pro can send a task’s unfinished steps to Reminders or make sequential Calendar blocks from their time estimates. The task stays in Molehill, with the exported copy in the tool you choose.", note: 'The current build does not provide a general task-library backup and restore flow.' },
    seo: { title: 'Molehill: Break a Task into a Step You Can Start', description: 'Molehill is an iPhone task app in development. Break tasks down, split stuck steps again, and focus on one action with on-device processing.', keywords: ['Molehill task breakdown', 'split tasks into steps', 'brain dump task planner', 'iPhone focus timer'] },
  },
  cove: {
    title: "Find what you wrote about it.",
    intro: "Ask Cove about something on your mind and return to relevant journal entries. Its on-device answers link back to your writing, so you can read the context for yourself.",
    category: 'Journaling and reflection',
    local: 'AI reflection runs on-device. Entries use private iCloud storage by default when available, with a local fallback.',
    defaultScreen: 'reflection',
    screens: {
      reflection: { label: 'An entry', caption: 'Return to an entry, its reflection, and the option to ask about what you wrote.' },
      patterns: { label: 'Patterns', caption: 'Explore the mood and theme views in the current development build.' },
      home: { label: 'Your journal', caption: 'Keep writing alongside past entries and the journal’s reflection tools.' },
    },
    mechanism: {
      eyebrow: "Returning to your journal",
      title: "Read the entry behind the answer.",
      intro: "You do not have to remember when you wrote it or the exact words you used. Cove searches for relevant passages and brings them into the conversation.",
      steps: [
        { title: "Keep an entry.", body: "Write or dictate, add a photo, or save a voice memo. An entry can also include your mood and a generated reflection." },
        { title: "Ask a question.", body: "Start with one entry or ask across the journal. Local search finds passages to use as context for the answer." },
        { title: "Read the source.", body: "Open the linked entries to see what you actually wrote. Keep your own interpretation alongside the generated reflection." },
      ],
      note: 'Answers use bounded excerpts, not the entire journal at once. Source links do not guarantee that every interpretation is right.',
    },
    benefits: [
      { title: "Look back over the week.", body: "Cove can prepare a reflection on the last completed week, drawing out recurring themes from at least two entries. One eligible preview is free; recurring weekly reflections are part of Plus.", badge: 'Plus · one free preview', detail: "Reflections are prepared when you open or return to Cove." },
      { title: "See more than today’s mood.", body: "Follow two weeks of mood trends on the free plan. Plus gives you the longer view, with all-time trends, more detail on themes and emotions, and additional writing prompts.", detail: "These views describe your entries and generated interpretations; they are not a mental-health assessment." },
    ],
    offer: {
      title: 'Writing stays free.',
      free: ['Journal entries and basic per-entry reflection', '14-day mood trends', 'One conversation per week, with three reply turns'],
      paidName: 'Plus',
      paid: ['Unlimited journal conversations', 'Weekly reflections and longer-range pattern views', 'Prompt packs, programs, and a year recap'],
    },
    requirements: 'The current build targets iPhone and iPad on iOS or iPadOS 26 with Apple Intelligence available. Voice capture needs microphone and speech permission.',
    boundary: {
      processing: 'Entry reflection and journal conversations use Apple Foundation Models on-device. Semantic search runs locally through Apple NaturalLanguage.',
      storage: 'Private iCloud storage is the production default when available, with a local fallback. Entries can include photos and saved voice recordings. App lock is optional and off by default.',
      connections: 'Private iCloud uses your Apple account. Optional Health access can write your logged state of mind. Model setup, purchases, and chosen export destinations can also connect.',
    },
    portability: { title: "Keep a readable copy of your journal.", body: 'Export Markdown, JSON, or an archive with available photos and audio. Restore Cove archives, or bring in supported Day One entries.', note: 'Day One import covers a subset of text, dates, starred state, and photos. It does not migrate every attachment or setting.' },
    seo: { title: 'Cove: Return to the Words in Your Journal', description: 'Cove is a journal in development. Ask about past entries with on-device reflection and source links; private iCloud storage is the default.', keywords: ['Cove journal', 'journal questions with source links', 'on-device journal reflection', 'private iCloud journal'] },
  },
  vault: {
    title: "Check the purchase before you make it.",
    intro: "See how a purchase would affect the bills, goals, and spending in your plan. Vault works from the records you provide, with manual tracking and statement imports that do not require a bank connection.",
    category: 'Budgeting and purchase planning',
    local: 'Budget calculations and coaching run on your device. Optional bank connections and transaction enrichment use Plaid through a relay.',
    defaultScreen: 'coach',
    screens: {
      coach: { label: 'Ask Vault', caption: 'Inspect the purchase-check entry point and coaching view with example financial records.' },
      today: { label: 'Today', caption: 'See the current plan and spending context in one place.' },
      health: { label: 'The picture', caption: 'Review the financial overview generated from the records in the current build.' },
    },
    mechanism: {
      eyebrow: "Before spending",
      title: "A balance does not tell the whole story.",
      intro: "Rent may be due next week, or part of that money may be going toward a goal. Put those commitments into Vault so the purchase check can account for them.",
      steps: [
        { title: "Bring in your records.", body: "Enter expenses, scan receipts, or import PDF and CSV statements. Check the proposed transactions and mappings before saving them." },
        { title: "Add what is coming.", body: "Record income, bills, and goals. The cash-flow view uses those records to estimate the days ahead." },
        { title: "Try the purchase.", body: "Enter the amount to see its effect on spending pace and goals. If the record is incomplete, Vault can ask for the missing information." },
      ],
      note: 'Forecasts are estimates from the records and assumptions you provide. They are not a guarantee that money is available to spend.',
    },
    benefits: [
      { title: "Start from your statements.", body: "Import a PDF statement or map the columns in a CSV, then review the transactions. Receipt photos can help with individual purchases. Manual imports are included free." },
      { title: "Work through a spending question.", body: "Use the planning tools to examine a budget or proposed change. Paid conversational coaching can help you discuss the record using a model running on your device.", detail: "Changes use explicit commands or confirmation. Connecting a bank is a separate choice." },
    ],
    offer: {
      title: "You do not need to link a bank.",
      free: ['Manual records and supported receipt, PDF, and CSV imports', 'Budget calculations and purchase planning', 'Local backup and expense CSV export'],
      paidName: 'Paid plans',
      paid: ['Paid conversational coaching after onboarding', 'Plus: up to one connected bank; Premium: five; Premium Plus: ten', 'Premium tiers add supported liability and enrichment features'],
      note: 'Bank connectivity uses Plaid. Connected-bank and liability limits depend on the selected plan.',
    },
    requirements: 'The current build targets iPhone and iPad on iOS or iPadOS 26 with Apple Intelligence available. Optional bank features depend on supported Plaid connections.',
    boundary: {
      processing: 'The ledger, forecasts, local coaching, and receipt reading run on-device. Optional premium transaction enrichment can send merchant and amount information through a relay to Plaid.',
      storage: 'Vault uses a local database with no app-level iCloud ledger sync. A passphrase-encrypted backup can be exported to a destination you choose.',
      connections: 'Optional bank sync uses Plaid through a relay. Optional diagnostics are off by default and can send aggregate usage counts. Model setup and purchases can also connect.',
    },
    portability: { title: "Save a copy you can restore.", body: 'Export expenses as CSV or save a passphrase-encrypted Vault backup for restore. Your manual ledger does not depend on keeping a bank connection active.', note: 'The backup is a ledger snapshot; complete parity for every source attachment is not promised.' },
    seo: { title: 'Vault: Budgeting with the Purchase in Context', description: 'Vault is a budgeting app in development. Review imports, plan cash flow, and check purchases on-device, with optional Plaid bank connections.', keywords: ['Vault budgeting', 'purchase affordability planning', 'statement import budget', 'optional Plaid bank sync'] },
  },
  kith: {
    title: "Remember what you meant to ask.",
    intro: "Keep the details that make a check-in personal, whether it is a new job, a move, or an interview you meant to ask about. Kith brings those notes back when it is time to call or write.",
    category: 'People, notes, and staying in touch',
    local: 'Relationship notes and AI assistance stay on your iPhone. Kith has no app-managed cloud sync or app account in the current build.',
    defaultScreen: 'person',
    screens: {
      person: { label: 'A person', caption: 'Keep remembered details, conversation tools, and call or text actions with the person they belong to.' },
      today: { label: 'Today', caption: 'See who is coming up for a check-in, alongside important dates.' },
      orbit: { label: 'Your people', caption: 'Browse the people you have chosen to keep in Kith.' },
    },
    mechanism: {
      eyebrow: "The next conversation",
      title: "Have something to say when you reach out.",
      intro: "Look back at your notes, get help with an opener, and choose how to say it. Kith works with what you saved rather than reading your messages.",
      steps: [
        { title: "Add your people.", body: "Use Apple’s contact picker or enter someone yourself. Keep dates, facts, and interactions with the person they belong to." },
        { title: "Find a way to begin.", body: "Review what you saved or ask for a talking point, recap, or message draft. Edit it to say what you mean." },
        { title: "Make the contact.", body: "Open a call or message yourself. When you return, Kith can prompt you to log what happened for the next time you talk." },
      ],
    },
    benefits: [
      { title: "Choose when to check in.", body: "Set a different rhythm for each person, pin someone, or snooze a reminder. Birthdays and other important dates have their own place beside the reach-out list." },
      { title: "Save the detail before you forget.", body: "Type or dictate a note while the conversation is fresh. A local helper can organize it into facts to keep with the person.", detail: "Only the people and information you choose to add become part of Kith." },
    ],
    offer: {
      title: 'Start with the people closest to you.',
      free: ['Up to ten people', 'Three standard AI assists per week', 'The first daily Spark suggestion'],
      paidName: 'Plus',
      paid: ['Unlimited people', 'Unlimited AI assists', 'More room for recaps, message help, and gift ideas'],
    },
    requirements: 'The current build requires iPhone on iOS 26 with Apple Intelligence available. Dictation needs microphone and speech permission. Optional app lock supports the device’s available authentication method.',
    boundary: {
      processing: 'Recaps, message help, talking points, and note organization use Apple Foundation Models on-device. Supported speech transcription runs locally.',
      storage: 'People, dates, and interaction notes live in a local database. There is no cloud sync in the current build. Optional app lock is off by default.',
      connections: 'A call or message you choose to make leaves through its normal app. Model setup and purchases can connect. Widgets and Spotlight may surface selected information on your device.',
    },
    portability: { title: "Take your notes out of Kith.", body: 'Export people, remembered facts, dates, and interactions as JSON. Contact import lets you select who to bring in; it does not require copying the entire address book.', note: 'JSON export does not contain contact photos. A full export-restore flow is not implemented in the current build.' },
    seo: { title: 'Kith: Remember the Detail Before You Reach Out', description: 'Kith is an iPhone app in development. Keep notes about your people, choose a check-in rhythm, and prepare for the next conversation on-device.', keywords: ['Kith relationship reminders', 'personal contact notes', 'keep in touch iPhone', 'on-device conversation help'] },
  },
  mise: {
    title: "Cook the recipes you keep saving.",
    intro: "Bring recipe links, cookbook photos, and pasted text into one place. Mise connects the recipe to your dinner plan, shopping list, and the steps you follow at the stove.",
    category: 'Recipes, meal planning, and cooking',
    local: 'Recipe parsing and cooking help run on-device. Importing a web recipe fetches the page and its images from their hosts.',
    defaultScreen: 'cookmode',
    screens: {
      cookmode: { label: 'Cook', caption: 'Follow one recipe step at a time in the dedicated cooking view.' },
      recipes: { label: 'Save', caption: 'Find the recipes you have brought into your recipe box.' },
      planner: { label: 'Plan', caption: 'Assign recipes to meal slots and ask for suggestions for empty dinner slots.' },
    },
    mechanism: {
      eyebrow: "From recipe to dinner",
      title: "Plan the meal, then shop for it.",
      intro: "Choose from the recipes you saved, put them into dated meal slots, and make one grocery list for the servings you need.",
      steps: [
        { title: "Save a recipe.", body: "Import a web page, photograph the recipe, or type it in. Check and edit the ingredients and instructions before using them." },
        { title: "Choose a dinner.", body: "Place a recipe in the meal plan or get suggestions for empty future dinner slots from your saved recipes." },
        { title: "Make the shopping list.", body: "Mise scales quantities for the planned meals, combines matching ingredients, and groups the list by aisle." },
      ],
      note: 'Dinner suggestions rank saved recipes using tags, favorites, recency, and variety. They are not an allergy check or a complete nutrition plan.',
    },
    benefits: [
      { title: "Keep the next step in view.", body: "Cook Mode keeps the screen awake with large instructions and several timers. Check timer activity on the Lock Screen or the Watch companion while you cook.", detail: 'Leaving Cook Mode cancels its timers. The Watch’s grocery check-off needs the phone to be reachable.' },
      { title: "Ask about the recipe you opened.", body: "Get local cooking help with the ingredients and steps as context. Plus includes a dedicated ingredient-substitution tool.", badge: 'Substitutions with Plus', detail: 'Check suggestions against dietary needs and cooking safety; recipe tags are not an allergen guarantee.' },
    ],
    offer: {
      title: 'Build a recipe box you will use.',
      free: ['Up to 25 recipes', 'Three AI assists per day', 'Meal planning, groceries, and Cook Mode'],
      paidName: 'Plus',
      paid: ['Unlimited recipe and AI allowances', 'Ingredient substitutions', 'Optional private iCloud sync'],
    },
    requirements: 'The current build targets iPhone and iPad on iOS or iPadOS 26 with Apple Intelligence available. The companion requires watchOS 26.',
    boundary: {
      processing: 'Recipe parsing, cooking questions, and substitutions run through local Apple frameworks. Structured web recipes can be read directly before an AI parsing step is needed.',
      storage: 'Recipes are stored locally. Plus offers private iCloud sync, which is off by default and takes effect after restarting the app.',
      connections: 'Web imports fetch the chosen page and recipe images, which may use a separate image host. Optional iCloud, model setup, and purchases also connect.',
    },
    portability: { title: "Take your recipes with you.", body: 'Export recipes as JSON with available photos, then import a recipe or recipe collection later. Duplicate recipe IDs are skipped on import.', note: 'The recipe export is not a backup of every meal plan, pantry item, or preference. Free recipe limits apply to imports.' },
    seo: { title: 'Mise: Put Your Saved Recipes on the Dinner Plan', description: 'Mise is a recipe app in development. Import recipes, plan meals, build a grocery list, and cook with on-device help.', keywords: ['Mise recipe manager', 'recipe import meal planning', 'recipe grocery list', 'on-device cooking help'] },
  },
  trove: {
    title: "Know where the receipt is.",
    intro: "Keep photos, receipts, serial numbers, and warranty dates with the belongings they describe. Trove helps you build that record now, so you can find it when a repair, move, or claim makes it useful.",
    category: 'Home inventory and warranties',
    local: 'Item recognition, receipt reading, and inventory questions run on-device. Photos are stored locally.',
    defaultScreen: 'review',
    screens: {
      review: { label: 'Review an item', caption: 'Check suggested item fields, correct them, and decide whether to add the record.' },
      home: { label: 'Inventory', caption: 'Return to the belongings recorded in your home inventory.' },
      warranties: { label: 'Warranties', caption: 'Keep recorded warranty dates available before you need to look them up.' },
    },
    mechanism: {
      eyebrow: "Building the inventory",
      title: "Let a photo do some of the typing.",
      intro: "Start with a room photo, an item, or a receipt. Trove proposes the details, and you check what belongs in the record.",
      steps: [
        { title: "Capture what is there.", body: "Photograph an item or start a room scan to get a list of possible items. The scan helps with entry; it can miss things." },
        { title: "Check the details.", body: "Correct names, quantities, serials, and suggested values. Add the receipt and photos you want to keep with each item." },
        { title: "Find it later.", body: "Look up an item or ask a question about the inventory. Open its record to find the photos, receipt, and serial number you saved." },
      ],
    },
    benefits: [
      { title: "Prepare the records for a claim.", body: "Choose the affected items and their photos for a Claim Kit. Plus also creates PDF and CSV reports for the wider inventory.", badge: 'Plus', detail: 'A report documents your records. It does not establish an appraisal, insurance coverage, or claim acceptance.' },
      { title: "See which warranties end next.", body: "Review saved warranty dates in one place and open an item when you need its receipt or serial number. With notification permission, Trove can remind you before a recorded expiry." },
    ],
    offer: {
      title: "Start with the belongings you want on record.",
      free: ['25 items in one home', 'Ten AI scans per calendar month', 'Portable archive backup and restore'],
      paidName: 'Plus',
      paid: ['Unlimited items and scans, with multiple homes', 'Inventory PDF, CSV, and Claim Kit reports', 'Optional private iCloud record sync'],
      note: 'Inventory questions are separate from the scan allowance.',
    },
    requirements: 'The current build targets iPhone and iPad on iOS or iPadOS 26 with Apple Intelligence available. Camera and notification features need their respective permissions.',
    boundary: {
      processing: 'Apple Vision recognizes items and reads receipts locally. Inventory questions use on-device models; totals and rankings are calculated in code.',
      storage: 'Inventory records and image files are local by default. Plus can opt into private iCloud record sync. That sync does not currently replicate the local photo and receipt image files.',
      connections: 'Optional private iCloud, model setup, and App Store purchases can connect. Exported archives and reports go to the destinations you select.',
    },
    portability: { title: "Back up the photos with the records.", body: 'A free Trove archive includes your inventory and available local images, including receipts. Restore it by merging with the inventory or replacing it.', note: 'The archive includes image files that are still available on the device. Private iCloud record sync does not replace this photo-inclusive backup.' },
    seo: { title: 'Trove: Keep the Receipt with the Thing It Belongs To', description: 'Trove is a home inventory app in development. Review scanned items, keep receipts and warranties, and export a backup with available photos.', keywords: ['Trove home inventory', 'receipt warranty inventory', 'home inventory backup', 'on-device room inventory'] },
  },
  wove: {
    title: "Find new outfits in your own closet.",
    intro: "Photograph your clothes and tell Wove what you are dressing for. It suggests combinations from pieces you own, with your notes and preferences in mind.",
    category: 'A wardrobe and outfit planner',
    local: 'Garment recognition and outfit suggestions run on-device. Optional weather context uses Apple WeatherKit.',
    defaultScreen: 'today',
    screens: {
      today: { label: 'A look for today', caption: 'Inspect a suggested combination of saved garments, then choose Wear this or Not this.' },
      closet: { label: 'Your closet', caption: 'Keep photos and editable details for the garments you own.' },
      capsule: { label: 'A capsule', caption: 'Plus can assemble a smaller wardrobe from pieces in your closet.' },
    },
    mechanism: {
      eyebrow: "Choosing an outfit",
      title: "Choose a look from what you own.",
      intro: "Wove starts with the garments in your closet. Add an occasion or a note about today, then decide which suggested look you want to wear.",
      steps: [
        { title: "Add your clothes.", body: "Photograph individual garments or several laid-out pieces. Review the cutouts and suggested colours, categories, and seasons." },
        { title: "Say what today needs.", body: "Choose an occasion, add a note for today, or save a standing preference. Wove uses that context when selecting from your garments." },
        { title: "Choose what to wear.", body: "Log an outfit or tap “Not this.” Rejections help guide later suggestions; Plus also learns from combinations you have worn." },
      ],
      note: 'A suggested look is yours to judge. Model instructions do not guarantee every preference, weather condition, or dress code will be satisfied.',
    },
    benefits: [
      { title: "See what a new piece would go with.", body: "Use a shopping photo to look for pairings with clothes you own and similar pieces already in the closet before deciding to buy.", badge: 'Plus', detail: 'This is wardrobe context, not a fit or sizing prediction.' },
      { title: "Choose a smaller set of clothes.", body: "Plus capsules select pieces from your closet for a smaller wardrobe. Planning an outfit on the calendar and logging what you wore remain free.", badge: 'Capsules with Plus' },
    ],
    offer: {
      title: "Keep your whole closet on the free plan.",
      free: ['Unlimited closet items', 'Three AI outfit batches per day', 'Outfit planning, wear logs, notes, and rejection feedback'],
      paidName: 'Plus',
      paid: ['Unlimited AI outfit batches and wear-based personalization', 'Styling chat, shopping help, and capsules', 'Deeper insights and optional private iCloud record sync'],
      note: 'Previously generated suggestions and outfits made without AI do not use another AI batch.',
    },
    requirements: 'The current build targets iPhone and iPad on iOS or iPadOS 26 with Apple Intelligence available. The watchOS 26 companion shows a look summary and sends actions back to the phone.',
    boundary: {
      processing: 'Garment image analysis and styling run through local Apple frameworks. Outfit selection is checked against recorded garment IDs and required coverage.',
      storage: 'Closet records and images are local by default. Plus can opt into private iCloud record sync after relaunch. Garment photo files do not currently sync through that path.',
      connections: 'Optional weather context requests location and sends it to Apple WeatherKit; it may refresh. Optional iCloud, model setup, and purchases can also connect.',
    },
    portability: { title: "Keep a copy of your wardrobe.", body: 'Export a folder with garment records and available images. The export is free, including when you have chosen optional record sync.', note: 'There is no restore importer in the current build. The export does not include every styling note, preference, or feedback record.' },
    seo: { title: 'Wove: Find Outfits in the Clothes You Already Own', description: 'Wove is a wardrobe app in development. Record your clothes, inspect on-device outfit suggestions, and plan what to wear from your own closet.', keywords: ['Wove wardrobe app', 'outfits from owned clothes', 'digital closet iPhone', 'on-device outfit suggestions'] },
  },
};
