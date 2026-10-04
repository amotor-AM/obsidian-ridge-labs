import {
  Archive, BookOpen, Boxes, Brain, CalendarClock, Camera, ChefHat,
  CloudSun, Dumbbell, FileCheck2, FileText, Gauge, Heart, LineChart,
  ListChecks, MessageCircle, Mic, Receipt, ScanLine, Search, Shield,
  Shirt, Sparkles, UsersRound, Watch,
} from 'lucide-react';
import type { Product, ProductFeature } from '../types';

const feature = (title: string, description: string, Icon: Product['icon']): ProductFeature => ({
  title, description, icon: <Icon className="w-5 h-5" aria-hidden="true" />,
});

// Public claims follow docs/research-2026-09-26. Development prices are planned
// catalog values; source implementation is not evidence of a public release.
export const products: Product[] = [
  {
    id: 'echochamber', name: 'Echo Chamber', shortName: 'Echo Chamber',
    tagline: "Find the words you came back for.", category: 'Private Transcription',
    releaseStatus: 'app-store', accent: '#c7ff3e',
    appStoreUrl: 'https://apps.apple.com/us/app/echo-chamber-ai-transcription/id6761675060',
    hasKnowledgeBase: true, platforms: ['iOS', 'iPadOS', 'macOS'], minOS: 'iOS 18',
    price: 'Free to download · Optional Pro',
    description: "Turn recordings into transcripts you can search, question, and use in your work. Speech recognition and AI run on your Apple device.",
    fullDescription: "Echo Chamber makes a recording easier to return to. Search the transcript for a passage, listen again, or use local AI to make notes and ask about what was said. Import supported audio or video and export text or documents for your next piece of work. Speech recognition and AI run on your device. Optional iCloud sync is off by default. Echo Chamber is free to download, with optional Pro; check the App Store and in-app offer for current features and pricing.",
    icon: Mic, primaryColor: 'text-neon',
    specs: [
      { label: 'Recording', value: 'Live transcription' },
      { label: 'Find', value: 'Search + bookmarks' },
      { label: 'Make', value: 'Notes + summaries' },
      { label: 'Processing', value: 'On your device' },
    ],
    screenshots: [
      { file: 'transcription-details', title: 'Read', caption: 'Example recording: playback and a readable transcript in the same place.' },
      { file: 'ai-chat', title: 'Ask', caption: 'Example recording: a question about the transcript becomes an on-device answer.' },
      { file: 'record-screen', title: 'Record', caption: 'Start a recording and bookmark a moment you want to return to.' },
    ],
    workflow: [
      { title: 'Keep the conversation', description: 'Record live or bring in a supported audio or video file. Transcription happens on your device.' },
      { title: 'Find the part you need', description: 'Search the transcript, return to a bookmark, and listen again when the exact wording matters.' },
      { title: 'Put the words to work', description: 'Make notes or a summary, or ask a question about the transcript with available local AI tools.' },
      { title: 'Take it from here', description: 'Export text or a document for your notes app, a colleague, or the work that follows.' },
    ],
    features: [
      feature('A way back to the words', 'Searchable transcripts, recording bookmarks, and playback help you return to a useful passage.', Search),
      feature('Notes from the conversation', 'Generate notes, summaries, and answers from a transcript on supported hardware, with the required local models ready.', FileText),
      feature('A recording you can use elsewhere', 'Import supported audio or video and export transcripts as text or documents. The current offer in Echo Chamber explains plan allowances.', Archive),
    ],
  },
  {
    id: 'vault', name: 'Vault', shortName: 'Vault', tagline: "Check the purchase before you make it.",
    category: 'Personal Finance', releaseStatus: 'pre-release', accent: '#c7ff3e',
    appStoreUrl: '', hasKnowledgeBase: true, platforms: ['iOS', 'iPadOS'], minOS: 'iOS 26',
    price: 'Planned: Free · Plus $2.99/mo · Premium $4.99/mo · Premium Plus $9.99/mo',
    description: "See how a purchase affects your budget, bills, and goals. Bring in receipts and statements without having to connect a bank.",
    fullDescription: 'Vault puts a potential purchase beside your bills, goals, and recent spending. Review receipt scans or CSV and PDF statement imports, then use those records to plan ahead. Calculations and core coaching run on your device. You can keep a manual ledger or choose optional bank connections and enrichment through Plaid and a relay. Vault requires Apple Intelligence and is in development.',
    icon: LineChart, primaryColor: 'text-neon',
    specs: [
      { label: 'Product stage', value: 'In development' }, { label: 'Platforms', value: 'iPhone + iPad' },
      { label: 'Import', value: 'Receipts · CSV · PDF' }, { label: 'Requirement', value: 'Apple Intelligence' },
    ],
    screenshots: [
      { file: 'today', title: 'Before you buy', caption: 'A spending estimate and a purchase check against the record you provide.' },
      { file: 'coach', title: 'Work through a decision', caption: 'Planning tools and local coaching use your financial record as context.' },
      { file: 'health', title: 'Review the picture', caption: 'Spending, saving, and goal indicators gathered from your record.' },
    ],
    workflow: [
      { title: 'Bring the record together', description: 'Read a receipt, enter an expense, or import a CSV or PDF statement. Review proposed transactions before accepting them.' },
      { title: 'Account for what is coming', description: 'Add income, bills, budgets, and goals so the forecast has the obligations you know about.' },
      { title: 'Check before committing', description: 'See how a possible purchase changes spending pace and goals. Estimates depend on your records and assumptions.' },
      { title: 'Keep a copy', description: 'Export expense CSV or make a password-encrypted backup. A bank connection remains a separate choice.' },
    ],
    features: [
      feature('A purchase in context', 'Assess a purchase against your budget and obligations rather than treating the account balance as the whole picture.', Gauge),
      feature('Statements without a bank connection', 'Manual CSV and PDF imports and local receipt recognition help build a record you can check and correct.', Receipt),
      feature('Planning you can inspect', 'Cash-flow estimates and planning tools use recorded income, bills, and spending history. They are estimates, not financial guarantees.', LineChart),
      feature('Portable records', 'Expense CSV and a password-encrypted backup give you two ways to take your records out of Vault.', Archive),
    ],
  },
  {
    id: 'molehill', name: 'Molehill', shortName: 'Molehill', tagline: "Start with a smaller step.",
    category: 'Focus & Tasks', releaseStatus: 'pre-release', accent: '#34d399', hasKnowledgeBase: true,
    platforms: ['iOS'], minOS: 'iOS 26', price: 'Planned: Free · Pro $2.99/mo · $19.99/yr · $39.99 lifetime',
    description: "Turn a task into an editable plan. When one step still feels too big, split that part again without starting over.",
    fullDescription: 'Molehill turns a task or brain dump into a plan you can edit. Choose the level of detail, split a step again when you get stuck, and use Focus to work on the action in front of you. A timer, recurring tasks, and next-step widgets help you return to the plan. Task planning and supported speech recognition run on your iPhone. Molehill requires Apple Intelligence and is in development.',
    icon: ListChecks, primaryColor: 'text-emerald-400',
    specs: [
      { label: 'Product stage', value: 'In development' }, { label: 'Platform', value: 'iPhone · iOS 26' },
      { label: 'Requirement', value: 'Apple Intelligence' }, { label: 'Focus', value: 'One step at a time' },
    ],
    screenshots: [
      { file: 'today', title: 'The next step', caption: 'Today brings the next action and its estimated time into view.' },
      { file: 'breakdown', title: 'Make a start', caption: 'A task becomes editable steps at the level of detail you choose.' },
      { file: 'focus', title: 'Stay with it', caption: 'Focus keeps the current step in view, with an optional timer.' },
    ],
    workflow: [
      { title: 'Get it out of your head', description: 'Type or dictate a task or brain dump. Review and edit the proposed list before accepting it.' },
      { title: 'Choose the size of a step', description: 'Break a task down at the level of detail you need, with editable titles and estimated times.' },
      { title: 'Make the stuck part smaller', description: 'Split an eligible step into two to four replacements. A built-in fallback remains available when the free AI allowance is exhausted.' },
      { title: 'Do what is in front of you', description: 'Use Focus, a timer, or the next-step widget. Recurring tasks can return when it is time to do them again.' },
    ],
    features: [
      feature('Help at the point you get stuck', 'Split one step without rebuilding the entire plan. Repeated deferrals can prompt a smaller-step suggestion.', ListChecks),
      feature('A brain dump you can correct', 'Edit, recategorize, or remove proposed tasks before keeping the list. A non-AI sorting option is also available.', Sparkles),
      feature('A plan that reaches your day', 'Pro can export to Reminders or Calendar after permission. These are outgoing exports, not two-way sync.', CalendarClock),
    ],
  },
  {
    id: 'cove', name: 'Cove', shortName: 'Cove', tagline: "Find what you wrote about it.",
    category: 'Private Journaling', releaseStatus: 'pre-release', accent: '#8b9cf6', hasKnowledgeBase: true,
    platforms: ['iOS', 'iPadOS'], minOS: 'iOS 26', price: 'Planned: Free · Plus $5.99/mo · $34.99/yr · $89.99 lifetime',
    description: "Ask about something on your mind and return to relevant journal entries. Cove’s on-device answers link back to the words you wrote.",
    fullDescription: 'Keep journal entries with text, photos, moods, and voice memos, then ask Cove about something you want to revisit. Local search finds relevant passages, and answers link back to your entries so you can read the context yourself. Private iCloud storage is the default when available, with a local fallback. Cove requires Apple Intelligence and is in development.',
    icon: BookOpen, primaryColor: 'text-indigo-300',
    specs: [
      { label: 'Product stage', value: 'In development' }, { label: 'Platforms', value: 'iPhone + iPad' },
      { label: 'Processing', value: 'On-device reflection' }, { label: 'Storage', value: 'Private iCloud + local fallback' },
    ],
    screenshots: [
      { file: 'home', title: 'Begin anywhere', caption: 'A prompt, a mood check-in, and a place to begin an entry.' },
      { file: 'reflection', title: 'Read it another way', caption: 'A generated reflection proposes themes for you to consider.' },
      { file: 'patterns', title: 'Return to the week', caption: 'Mood trends and reflections provide a way back into past writing.' },
    ],
    workflow: [
      { title: 'Keep the moment', description: 'Write, dictate, attach a photo, or keep a voice memo. Capture is included free.' },
      { title: 'Ask about what you wrote', description: 'Start with one entry or a journal-wide question. Retrieved excerpts provide context to the local model.' },
      { title: 'Return to the originals', description: 'Follow the entries linked from a response and read your own words again. Generated interpretations can be wrong.' },
      { title: 'Take the writing with you', description: 'Export Markdown or JSON, or use ZIP to include available photos and audio. Day One import supports selected fields and media.' },
    ],
    features: [
      feature('An answer with a way back', 'Ask Your Journal shows links to the entries used as context, so a reflection does not replace the original writing.', Search),
      feature('A week worth revisiting', 'Plus reflections gather a completed week with enough entries. One eligible reflection preview is available free.', CalendarClock),
      feature('Your words, with controls', 'An optional app lock, a Spotlight setting, and entry exports help you manage access. AI stays local; records may sync through private iCloud.', Shield),
    ],
  },
  {
    id: 'wove', name: 'Wove', shortName: 'Wove', tagline: "Find new outfits in your own closet.",
    category: 'Personal Wardrobe', releaseStatus: 'pre-release', accent: '#f0a97a', hasKnowledgeBase: true,
    platforms: ['iOS', 'iPadOS', 'watchOS'], minOS: 'iOS 26', price: 'Planned: Free · Plus $3.99/mo · $19.99/yr · $24.99 lifetime',
    description: "Tell Wove what you are dressing for and find combinations from clothes you already own, with your notes and preferences in mind.",
    fullDescription: 'Add photos of your clothes and tell Wove what you are dressing for. It suggests outfits from your own garments, using notes for today and preferences you want it to remember. Reject a look to guide later suggestions; Plus also learns from outfits you log wearing. Styling runs on-device. Optional weather and Plus iCloud record sync use their own connections. Wove requires Apple Intelligence and is in development.',
    icon: Shirt, primaryColor: 'text-orange-300',
    specs: [
      { label: 'Product stage', value: 'In development' }, { label: 'Platforms', value: 'iPhone · iPad · Watch' },
      { label: 'Requirement', value: 'Apple Intelligence' }, { label: 'Weather', value: 'Optional WeatherKit' },
    ],
    screenshots: [
      { file: 'today', title: 'A look for today', caption: 'An outfit to consider, with “wear this” and “not this” controls.' },
      { file: 'closet', title: 'See what you own', caption: 'Garment photos and editable category, colour, and season details.' },
      { file: 'capsule', title: 'Build a smaller wardrobe', caption: 'Plus capsules group actual closet pieces into a smaller selection.' },
    ],
    workflow: [
      { title: 'Put your clothes in view', description: 'Photograph a garment or several laid-out pieces. Review the cutouts and suggested tags before keeping them.' },
      { title: 'Tell Wove what today needs', description: 'Use an occasion, a temporary note, or a standing preference to give the stylist context.' },
      { title: 'Try another combination', description: 'Choose from looks made with your own garments. Save, wear, or reject a suggestion.' },
      { title: 'Use the history', description: 'Rejections influence future suggestions for free. Plus adds wear-derived personalization, shopping comparisons, and closet-based capsules.' },
    ],
    features: [
      feature('Less work entering each garment', 'Local subject extraction and suggested tags help catalog clothing. Cutouts and recognition can need correction.', ScanLine),
      feature('A wardrobe with your context', 'Today’s notes and standing preferences inform styling from a ranked shortlist of owned pieces.', Shirt),
      feature('A second look before buying', 'The Plus shopping advisor compares a possible purchase with owned pieces and pairing ideas. It is not a size or fit guarantee.', Sparkles),
      feature('Weather when you want it', 'Wove requests approximate location for a WeatherKit forecast, with cached or seasonal context when weather is unavailable.', CloudSun),
    ],
  },
  {
    id: 'mettle', name: 'Mettle', shortName: 'Mettle', tagline: "Know what to lift next.",
    category: 'Strength Coaching', releaseStatus: 'pre-release', accent: '#c7ff3e', hasKnowledgeBase: true,
    platforms: ['iOS', 'watchOS'], minOS: 'iOS 26.1', price: 'Planned: Free · Pro $4.99/mo · $29.99/yr · $79.99 lifetime',
    description: "Use your logged sets to plan the next workout, see why the reps and weight changed, and ask the coach to adjust the session.",
    fullDescription: "Mettle uses your completed sets to work out the next rep targets and weight. Open “Why this?” to see the training history and rule behind a change. Ask the local coach for a different exercise or a shorter session, then review and apply the change. Coaching runs on your iPhone; records use private iCloud when available. Mettle requires Apple Intelligence and is in development.",
    icon: Dumbbell, primaryColor: 'text-neon',
    specs: [
      { label: 'Product stage', value: 'In development' }, { label: 'Platforms', value: 'iPhone · Apple Watch' },
      { label: 'Requirement', value: 'Apple Intelligence' }, { label: 'Storage', value: 'Private iCloud + local fallback' },
    ],
    screenshots: [
      { file: 'today', title: 'The next session', caption: 'A session, its working sets, and a coach note about the focus.' },
      { file: 'workout', title: 'Log the work', caption: 'Set logging, warm-ups, plate math, and rest controls during the workout.' },
      { file: 'plan', title: 'See the plan', caption: 'A training week you can inspect and adjust to your schedule.' },
    ],
    workflow: [
      { title: 'Start with your circumstances', description: 'Set your goal, experience, equipment, training days, and session length. Baseline information guides the start when there is no history.' },
      { title: "See why the weight changed", description: "Mettle records the training history and rule used to set your next targets. Open “Why this?” to see the reason for a change." },
      { title: 'Log the session', description: 'Record completed sets, use the rest timer, and optionally control the phone-owned workout from Apple Watch.' },
      { title: 'Make the plan fit', description: 'Ask for a substitution, a shorter session, or different training days. Review and apply the proposed plan change.' },
    ],
    features: [
      feature('The reason belongs to the calculation', 'Load and rep rules store the evidence shown in “Why this?”, including prior performance and reasons to progress or back off.', Gauge),
      feature('A coach that can change the plan', 'Local coach requests can lead to exercise substitutions or schedule changes; saved restrictions inform future candidates.', MessageCircle),
      feature('History you can bring and keep', 'Review a CSV import before committing it, and export completed sets. Watch controls and spoken cues support the active session.', Watch),
    ],
  },
  {
    id: 'memora', name: 'Memora', shortName: 'Memora', tagline: "Learn from the notes you already have.",
    category: 'Flashcards & Study', releaseStatus: 'app-store', accent: '#ae9fff', hasKnowledgeBase: true,
    appStoreUrl: 'https://apps.apple.com/us/app/memora-study-flashcards/id6810065777',
    platforms: ['iOS'], minOS: 'iOS 26', price: 'Free to download · Optional Plus',
    description: "Make flashcards from your notes, photos, or PDFs with selectable text. Choose what to keep, then study with a schedule guided by your recall.",
    fullDescription: 'Memora makes a first draft of flashcards from your notes, photos, scanned pages, and PDFs with selectable text. Choose the cards to keep, edit them in the deck, and rate what you remember as you study. FSRS uses those ratings to schedule the next review. Content stays local unless you choose to share or export. Memora is available on the App Store for iPhone with iOS 26 and an A17 Pro chip or later.',
    icon: Brain, primaryColor: 'text-violet-300',
    specs: [
      { label: 'Availability', value: 'On the App Store' }, { label: 'Platform', value: 'iPhone · iOS 26' },
      { label: 'Scheduling', value: 'FSRS' }, { label: 'Storage', value: 'Local decks + history' },
    ],
    screenshots: [
      { file: 'home', title: 'Your study today', caption: 'Due cards, your decks, and a way to bring in more material.' },
      { file: 'review', title: 'Choose what to add', caption: 'Review the proposed cards and select the batch to keep. Saved cards can be edited afterward.' },
      { file: 'study', title: 'Rate your recall', caption: 'Four recall ratings, a next interval, and the option to undo a rating.' },
    ],
    workflow: [
      { title: 'Start with your material', description: 'Paste notes, use a PDF with selectable text, or extract text from a photo or camera-scanned page.' },
      { title: 'Make a first set of cards', description: 'Local generation works from a bounded excerpt. It proposes cards for review rather than claiming to cover an entire book.' },
      { title: 'Choose what belongs in the deck', description: 'Deselect drafts you do not want, add the selected batch, and edit saved cards when needed.' },
      { title: 'Return when it is time', description: 'Rate recall as Again, Hard, Good, or Easy. FSRS calculates the next interval from that response.' },
    ],
    features: [
      feature('From material to practice', 'Notes, selectable PDF text, and local photo OCR can become draft cards, with a fallback when the local model is unavailable.', FileText),
      feature('More than one way to study', 'Scheduled review, Match, Listen, and manual image cards are available free. Plus adds Test, Tutor, and automatic image-label detection.', CalendarClock),
      feature('Bring a deck; keep the content', 'Import compatible Anki text decks, CSV, TSV, or Quizlet text. Own-format exports include content and images, but not review history or schedules.', Archive),
    ],
  },
  {
    id: 'trove', name: 'Trove', shortName: 'Trove', tagline: "Know where the receipt is.",
    category: 'Home Inventory', releaseStatus: 'pre-release', accent: '#d9a441', hasKnowledgeBase: true,
    platforms: ['iOS', 'iPadOS'], minOS: 'iOS 26', price: 'Planned: Free · Plus $2.99/mo · $19.99/yr · $39.99 lifetime',
    description: "Keep photos, receipts, serial numbers, and warranty dates with each item, ready to find for a repair, move, or claim.",
    fullDescription: 'Keep photos, receipts, serial numbers, and warranty dates with the belongings they describe. Trove helps you create the records from room or item photos, with a review step to check the details. Free archives include records and available images; Plus adds reports for a move or claim. Recorded values are not appraisals. Trove requires Apple Intelligence and is in development.',
    icon: Boxes, primaryColor: 'text-amber-300',
    specs: [
      { label: 'Product stage', value: 'In development' }, { label: 'Platforms', value: 'iPhone + iPad' },
      { label: 'Backup', value: 'Records + available photos' }, { label: 'Requirement', value: 'Apple Intelligence' },
    ],
    screenshots: [
      { file: 'home', title: 'The inventory', caption: 'Rooms, recorded values, and documentation progress in one view.' },
      { file: 'review', title: 'Check the details', caption: 'Review proposed fields such as brand, serial number, and recorded value.' },
      { file: 'warranties', title: 'Before expiry', caption: 'A timeline of the warranty dates saved with your belongings.' },
    ],
    workflow: [
      { title: 'Start with a photograph', description: 'A room photo proposes items to review. An item, label, barcode, or receipt can help fill in an individual record.' },
      { title: 'Check what was found', description: 'Select the items to keep and correct their details. Room capture saves object crops, not a guaranteed complete room record.' },
      { title: 'Keep the evidence together', description: 'Attach receipts, photos, serials, and warranty dates, organized by room, category, and home.' },
      { title: 'Take the record with you', description: 'Free archive backup and restore include available images. Plus adds inventory PDF/CSV and selected-item claim reports.' },
    ],
    features: [
      feature('Capture with a review step', 'Local image and text recognition proposes fields you can change before relying on them.', Camera),
      feature('The detail you need later', 'Find the serial number, receipt, and recorded warranty date with the item. Notifications can remind you before expiry.', FileCheck2),
      feature('Backup is separate from reports', 'Keep a portable archive free. Plus reports organize records for a move or claim without promising acceptance or valuation.', Archive),
    ],
  },
  {
    id: 'kith', name: 'Kith', shortName: 'Kith', tagline: "Remember what you meant to ask.",
    category: 'Relationships', releaseStatus: 'pre-release', accent: '#f07f78', hasKnowledgeBase: true,
    platforms: ['iOS'], minOS: 'iOS 26', price: 'Planned: Free · Plus $3.99/mo · $24.99/yr · $49.99 lifetime',
    description: "Keep the details that make a check-in personal, and bring them back when it is time to call or write.",
    fullDescription: 'Kith keeps the details you want to remember about the people in your life. Save notes and important dates, choose when to check in, and get help preparing a message from what you saved. You make the call or send the message yourself; Kith can prompt you to log the conversation when you return. Records and AI assistance stay on your iPhone. Kith requires Apple Intelligence and is in development.',
    icon: UsersRound, primaryColor: 'text-rose-300',
    specs: [
      { label: 'Product stage', value: 'In development' }, { label: 'Platform', value: 'iPhone · iOS 26' },
      { label: 'Storage', value: 'Local relationship records' }, { label: 'Requirement', value: 'Apple Intelligence' },
    ],
    screenshots: [
      { file: 'today', title: 'A place to begin', caption: 'People due for a reach-out and an opener generated on the device.' },
      { file: 'orbit', title: 'Your circles', caption: 'Your chosen circles and the time since the contact you logged.' },
      { file: 'person', title: 'The detail that matters', caption: 'Saved facts, interactions, and ways to start a message or call.' },
    ],
    workflow: [
      { title: 'Choose your people', description: 'Add someone manually or select them with Apple’s contact picker. Set a cadence that fits the relationship.' },
      { title: 'Keep the detail', description: 'Save facts, dates, and interactions. A local helper can turn a brain dump into proposed notes.' },
      { title: 'Start the conversation', description: 'Use a talking point or draft based on your saved context, then choose what to say in Messages or a call.' },
      { title: 'Remember what happened', description: 'When you return, a log prompt can help keep the interaction in the record for next time.' },
    ],
    features: [
      feature('A rhythm you choose', 'Adjust cadences, pin people, or snooze reminders. Important dates appear separately from the cadence-based reach-out list.', Heart),
      feature('Something more personal than hello', 'Local draft and talking-point tools use the details you saved. They do not read your message history or send on your behalf.', MessageCircle),
      feature('A readable copy of your records', 'Export people, facts, dates, and interactions as JSON. Photos are excluded; this is not a complete restore format.', Archive),
    ],
  },
  {
    id: 'mise', name: 'Mise', shortName: 'Mise', tagline: "Cook the recipes you keep saving.",
    category: 'Recipes & Cooking', releaseStatus: 'pre-release', accent: '#e0784f', hasKnowledgeBase: true,
    platforms: ['iOS', 'iPadOS', 'watchOS'], minOS: 'iOS 26', price: 'Planned: Free · Plus $2.99/mo · $19.99/yr · $39.99 lifetime',
    description: "Bring saved recipes into one place, put dinners on the plan, and turn the ingredients into a shopping list.",
    fullDescription: 'Bring recipe links, photos, and pasted text into Mise, then use the recipes to plan dinner and make a shopping list. Edit the ingredients, scale the servings, and follow large instructions with timers while you cook. Recipe parsing and cooking help run on-device. Web imports fetch the selected page and its images; optional Plus iCloud sync is off by default. Mise requires Apple Intelligence and is in development.',
    icon: ChefHat, primaryColor: 'text-orange-300',
    specs: [
      { label: 'Product stage', value: 'In development' }, { label: 'Platforms', value: 'iPhone · iPad · Watch' },
      { label: 'Requirement', value: 'Apple Intelligence' }, { label: 'Storage', value: 'Local · optional Plus iCloud' },
    ],
    screenshots: [
      { file: 'recipes', title: 'Use what you saved', caption: 'A recipe box with a local cooking assistant close at hand.' },
      { file: 'cookmode', title: 'The next step', caption: 'Large-type instructions, several timers, and a screen that stays awake.' },
      { file: 'planner', title: 'Dinner becomes a plan', caption: 'Recipes assigned to meals, ready to turn into a grocery list.' },
    ],
    workflow: [
      { title: 'Save the recipe', description: 'Bring a web page, pasted text, or recipe photos into an editable record, or enter it yourself.' },
      { title: 'Put dinner on the plan', description: 'Choose recipes for dated meal slots. Suggestions can fill empty future dinner slots from recipes you already saved.' },
      { title: 'Make one shopping list', description: 'Generate a scaled list from planned meals, with duplicate ingredients consolidated and grouped by aisle.' },
      { title: 'Cook one step at a time', description: 'Follow large-type steps with the screen awake and several timers available. Watch can show meal, grocery, and timer context.' },
    ],
    features: [
      feature('A usable copy of a saved recipe', 'Web data, local text parsing, and photo OCR help with entry. Review quantities and instructions before cooking.', ScanLine),
      feature('A question about this recipe', 'Local cooking help can use the open recipe’s ingredients and steps. Plus substitutions and suggested recipes still need your judgment.', ChefHat),
      feature('Keep your recipe box portable', 'Recipe JSON includes text and available photos and supports restore. It does not back up the entire pantry, meal plan, or grocery state.', Archive),
    ],
  },
];

export const getProduct = (id: string) => products.find((product) => product.id === id);
export const releasedProducts = products.filter((product) => product.releaseStatus === 'app-store');
export const developmentProducts = products.filter((product) => ['pre-release', 'concept'].includes(product.releaseStatus));
export const getProductReleaseLabel = (product: Product) => {
  switch (product.releaseStatus) {
    case 'app-store': return 'Available on the App Store';
    case 'source-only': return 'Source available';
    case 'pre-release': return 'In development';
    case 'concept': return 'Concept in development';
  }
};
