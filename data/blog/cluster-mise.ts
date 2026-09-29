import type { BlogPost } from '../../types';

export const misePosts: BlogPost[] = [
  {
    id: 'mise-vs-paprika-pestle-mela-anylist',
    title: "Mise vs Paprika, Pestle, Mela, and AnyList",
    seoTitle: "Mise vs Paprika, Pestle, Mela, and AnyList",
    date: '2026.09.07',
    modified: "2026.09.28",
    readTime: "6 MIN READ",
    category: 'RECIPE APP COMPARISON',
    tags: ['#RECIPE-MANAGER', '#ON-DEVICE-AI', '#MEAL-PLANNING', '#GROCERY-LIST'],
    excerpt: "Compare recipe apps from saved recipe to cooked dinner: import, choosing what to make, grocery lists, cooking steps, and help with a question at the stove.",
    seoDescription: "Compare recipe apps from saved recipe to cooked dinner: import, choosing what to make, grocery lists, cooking steps, and help with a question at the stove.",
    contentType: 'comparison',
    appId: 'mise',
    searchIntent: 'Which recipe manager should I use for saving recipes from anywhere, planning a week, and cooking: Mise, Paprika, Pestle, Mela, or AnyList?',
    keyTakeaways: [
      "Mise connects import, dinner selection, groceries, and cooking steps, with local assistance using selected recipe and pantry context.",
      "Choose around the work you need: a lasting recipe archive, difficult imports, cooking help, or a list the household edits together.",
      "Mise fetches recipe pages and images from their hosts. Parsing and cooking assistance run locally; optional Plus iCloud sync is off by default."
    ],
    relatedIds: ['best-private-recipe-manager-apps', 'apple-ecosystem-privacy', 'offline-ai-revolution'],
    blocks: [
      {
        type: 'answer',
        title: "Choose what you need after saving the recipe",
        content: "Mise is being built to help you use the recipes you save: choose dinner from the collection, combine ingredients into a grocery list, follow readable steps with timers, and ask a cooking question using selected recipe and pantry context. Paprika and Mela offer established archives, Pestle emphasizes flexible importing, and AnyList centers shared household lists. Mise remains in development and requires Apple Intelligence.",
      },
      {
        "type": "callout",
        "title": "Mise is in development",
        "content": "Mise is not yet available and has no announced release date or final public price. It requires supported Apple Intelligence hardware. Competitor details below come from the linked sources checked in September 2026.",
        "variant": "note"
      },
      {
        type: 'paragraph',
        content: "The recipe is saved. Now you need to decide whether it works for tonight, buy what is missing, and keep track of the cooking. That sequence is where recipe apps start to feel different. An excellent archive may be enough; a shared grocery list or a little help with the method may matter more. Mise is being built to keep those decisions connected.",
      },
      {
        type: 'comparison',
        caption: 'Capability direction summarised from official product pages and reputable coverage, September 2026',
        columns: [
          "App",
          "Best suited to",
          "Getting recipes in",
          "Sync, sharing, and pricing model"
        ],
        rows: [
          { label: 'Mise · pre-release', cells: ['Cooks who want local cooking assistance using saved recipe and pantry context.', 'Share sheet, paste-and-parse, photo OCR for cookbook pages and handwritten cards, and manual entry. Published recipe data is read directly from the page; anything messier is parsed by Apple Foundation Models on the device.', 'Local storage with optional private iCloud sync as a paid feature. No account and no backend. Planned free tier plus subscription with a lifetime option.'] },
          { label: 'Paprika Recipe Manager 3', cells: ['People who want a mature, self-contained manager and dislike subscriptions.', 'A built-in browser that captures recipes from websites, plus manual entry and import.', 'Its own sync service across devices. Sold as a one-time purchase per platform, so iOS, macOS, and Windows are bought separately.'] },
          { label: 'Pestle', cells: ['Apple users who want strong import from awkward sources and a lifetime purchase option.', 'Import from websites and social sources, including on-device processing of captions to build a recipe.', 'Apple-native sync. Pro is sold as a subscription with a lifetime option alongside it.'] },
          { label: 'Mela', cells: ['People who want a beautiful, quiet, Apple-native manager with no subscription.', 'A built-in browser, document import, scanning, manual entry, and recipe RSS feeds.', 'iCloud sync across the developer’s apps. One-time purchase, priced separately for iOS and macOS.'] },
          { label: 'AnyList', cells: ['Households whose real problem is a shared shopping list rather than a recipe archive.', 'Web recipe import, capped on the free tier, with meal planning in the paid tier.', 'Real-time shared lists across household members. Annual subscription, with an individual and a household tier.'] },
        ],
      },
      {
        type: 'h2',
        content: "From importing a recipe to making dinner",
      },
      {
        type: 'paragraph',
        content: "Many recipe sites publish structured ingredients and steps alongside the page. Mise reads that data directly where available, with no model involved; you still need to check the quantities and method. Paprika and Mela offer in-app browsers for saving web recipes. Pestle also handles sources such as social captions with on-device processing. Try the recipe sites you actually use before judging an importer.",
      },
      {
        type: 'paragraph',
        content: "Mise’s dinner picker ranks saved recipes, while the local cooking assistant answers questions using bounded context: saved recipe titles, pantry items, dietary notes, or part of the recipe you have open. You might ask about a substitution or a step you do not understand. The weekly plan can feed a consolidated grocery list, and cooking mode keeps steps readable with concurrent timers. Check ingredients and dietary suitability yourself; a model answer is not an allergy check.",
      },
      {
        type: 'h2',
        content: "Match the payment model to the job",
      },
      {
        type: 'paragraph',
        content: "Paprika and Mela use one-time purchases, which can suit a recipe collection you expect to keep for years. Licensing is per platform, so check the total for the devices you use. Also test export: the ability to take your collection elsewhere matters under either a purchase or subscription model.",
      },
      {
        type: 'paragraph',
        content: "Pestle offers a lifetime tier alongside its subscription. Mise’s development build has free recipe and daily AI allowances, with paid options being prepared; the final public offer is not yet announced. AnyList centers a shared household service. Compare the recurring features you need, the export you can keep, and the current store offer rather than choosing by price structure alone.",
      },
      {
        type: 'h2',
        content: "Separate local cooking help from connected import and sync",
      },
      {
        type: 'paragraph',
        content: 'A recipe box is not a diary. But it does describe how a household eats, what it can afford, its allergies, and its religious or medical restrictions, and increasingly it is processed by a cloud model in order to be useful. The honest comparison is not privacy scores but data paths.',
      },
      {
        type: 'paragraph',
        content: "Mise parses recipes and runs cooking assistance on-device. It fetches recipe pages and recipe images directly from their hosts, and optional Plus iCloud sync uses a private Apple database. Model setup and StoreKit can also need a connection. Paprika and Mela have their own storage and sync arrangements, while AnyList uses a service for shared lists. Compare the specific connections alongside the workflow you need.",
      },
      {
        type: 'h2',
        content: "Choose the workflow you will use during the week",
      },
      {
        type: 'list',
        content: [
          'MISE: On-device parsing and a conversational sous chef grounded in your own recipes, pantry, and dietary profile, with no backend. It requires Apple Intelligence and remains pre-release.',
          'PAPRIKA TRADEOFF: A mature, stable, subscription-free manager with its own sync, at the cost of per-platform purchases and a more traditional feature set.',
          'PESTLE TRADEOFF: Excellent import from awkward sources and a lifetime option, inside a more conventional manager-plus-planner shape.',
          'MELA TRADEOFF: Elegant, Apple-native, and subscription-free, with recipe RSS and Reminders integration, but no conversational cooking assistant.',
          'ANYLIST TRADEOFF: The best answer if the real problem is a shared household list, with recipe management as a supporting feature and a service-based sync model.',
        ],
      },
      {
        type: 'faq',
        content: [
          {
            "question": "Can Mise replace Paprika?",
            "answer": "Mise is not available yet. Its development focus is connecting import, dinner planning, groceries, cooking steps, and local assistance. Paprika is an established recipe archive with its own sync service and support for Windows and Android as well as Apple platforms."
          },
          {
            "question": "Why does Mise require Apple Intelligence when other recipe apps do not?",
            "answer": "The current app is built around local recipe processing and cooking assistance, so it requires supported Apple Intelligence hardware at launch. Other recipe managers can offer a useful archive without that requirement."
          },
          {
            "question": "Which of these is best for a shared household grocery list?",
            "answer": "AnyList makes shared household lists a central part of its service. Mise’s current build consolidates ingredients into a grocery list and can share it as text; that is a different workflow from several people editing the same list in real time."
          },
          { question: 'Will my recipes be stuck in Mise?', answer: 'No. Every recipe can be exported as JSON from Settings, and individual recipes can be shared as image cards. Portability is worth checking in any recipe app you commit to, because a collection built over a decade is the thing you would actually miss.' },
        ],
      },
      {
        type: 'sources',
        content: [
          'Apple Foundation Models framework|https://developer.apple.com/documentation/FoundationModels',
          'Paprika Recipe Manager official site|https://www.paprikaapp.com/',
          'Pestle: Recipe Manager on the App Store|https://apps.apple.com/us/app/pestle-recipe-manager/id1574776971',
          'Pestle official site|https://pestlechef.app/',
          'Mela: Recipe Manager on the App Store|https://apps.apple.com/us/app/mela-recipe-manager/id1548466041',
          'AnyList Complete|https://www.anylist.com/complete',
          'Schema.org Recipe vocabulary|https://schema.org/Recipe',
        ],
      },
      {
        type: 'cta',
        content: "Explore Mise’s route from a saved recipe to dinner: choose from your collection, build the grocery list, cook with steps and timers, and ask for help using local recipe context.",
        ctaAppId: 'mise',
      },
    ],
  },
  {
    id: 'best-private-recipe-manager-apps',
    title: "Five Recipe Apps for Saving, Planning, and Cooking",
    seoTitle: "Five Recipe Apps for Saving, Planning, and Cooking",
    date: '2026.09.07',
    modified: "2026.09.28",
    readTime: "6 MIN READ",
    category: 'RECIPE APP GUIDE',
    tags: ['#RECIPE-APP', '#MEAL-PLANNING', '#COOK-MODE', '#PRIVATE-AI'],
    excerpt: "Compare Mise, Paprika, Pestle, Mela, and AnyList by what gets in the way of dinner: scattered recipes, awkward imports, unanswered cooking questions, or shared shopping.",
    seoDescription: "Compare Mise, Paprika, Pestle, Mela, and AnyList for recipe imports, meal planning, cooking help, grocery lists, and privacy.",
    contentType: 'listicle',
    appId: 'mise',
    searchIntent: 'What is the best recipe app for saving recipes from anywhere, planning meals, and building a grocery list?',
    keyTakeaways: [
      "Mise connects saved recipes with dinner selection, a consolidated grocery list, cooking steps, and local assistance.",
      "Choose a shared-list service if coordinating shopping is the main problem; choose an archive if saving and finding recipes already covers your needs.",
      "Test an import and an export with a recipe you actually use. Check quantities, photos, steps, and what is included in the file."
    ],
    relatedIds: ['mise-vs-paprika-pestle-mela-anylist', 'apple-ecosystem-privacy', 'offline-ai-revolution'],
    listItems: [
      { name: 'Mise · pre-release', description: "Recipe import, dinner selection, groceries, and cooking help using local recipe context. In development." },
      { name: 'Paprika Recipe Manager 3', description: 'The mature, subscription-free archive with its own cross-platform sync.' },
      { name: 'Pestle', description: 'Strong import from awkward and social sources, with a lifetime purchase option.' },
      { name: 'Mela', description: 'An elegant Apple-native manager with recipe RSS and a one-time purchase.' },
      { name: 'AnyList', description: 'The shared household grocery list that everyone in the house will actually use.' },
    ],
    blocks: [
      {
        type: 'answer',
        title: "Find the gap between the recipe and dinner",
        content: "Mise is being built for the work after import: pick from saved recipes, plan groceries, follow cooking steps, and ask a question using recipe or pantry context on the device. Paprika and Mela suit people seeking an established recipe archive; Pestle focuses on more kinds of import; AnyList is built around shared lists. Mise is not available yet, so the released options are the place to start if you need a recipe manager today.",
      },
      {
        type: 'paragraph',
        content: "A good recipe app should fit the moment you reach for it. That may be saving a recipe from a browser, finding something to make with what you have, or checking the shopping list in a store. Use those moments to choose. A long feature list is less helpful than one workflow that fits how your household cooks.",
      },
      {
        "type": "callout",
        "title": "Mise is in development",
        "content": "Mise is our app and is not yet available. The current build requires Apple Intelligence. The other products are described from the linked sources checked in September 2026; their current prices are on their product and store pages.",
        "variant": "note"
      },
      {
        type: 'h2',
        content: "1. Mise: connect the saved recipe to tonight’s dinner",
      },
      {
        type: 'paragraph',
        content: "Mise accepts recipe links, pasted text, a photo, or manual entry. It reads structured recipe data directly where available and uses local processing for unstructured material. Review the result, then use the saved collection to choose dinner. The cooking assistant can use recipe titles, pantry items, dietary notes, or a bounded portion of the open recipe when answering a question. It does not read an unlimited recipe archive or guarantee that a substitution is suitable for every diet.",
      },
      {
        type: 'paragraph',
        content: "Mise’s weekly plan feeds a consolidated grocery list. Cooking mode keeps the screen awake, shows readable steps, and supports concurrent timers. Recipe import fetches pages and images from their hosts; optional Plus iCloud sync is off by default. The current development targets iPhone and iPad on iOS 26, with a Watch companion and Apple Intelligence required.",
      },
      {
        type: 'h2',
        content: "2. Paprika: an established recipe archive",
      },
      {
        type: 'paragraph',
        content: 'Paprika Recipe Manager has been the default answer in this category for years, and the reason is unglamorous: it is stable, it is thorough, and it is a one-time purchase rather than a subscription. It captures recipes with a built-in browser, plans meals, builds grocery lists, and syncs through its own service across platforms.',
      },
      {
        type: 'paragraph',
        content: 'The trade is per-platform licensing, so a household with iPhones, an iPad, and a Mac may buy it more than once, and the interface is functional rather than delightful. If what you want is a filing cabinet that will not start charging you rent, this is still the safest choice on the list.',
      },
      {
        type: 'h2',
        content: "3. Pestle: more ways to bring a recipe in",
      },
      {
        type: 'paragraph',
        content: 'Most people discover the limits of their recipe app when they try to save something from a social post rather than a recipe site. Pestle has invested specifically here, including on-device processing to build a recipe from a caption, and it pairs that with a well-regarded cook mode and planner.',
      },
      {
        type: 'paragraph',
        content: 'It is sold as a subscription with a lifetime option alongside it, which is the pattern this category responds best to. If your saved-recipe pipeline is mostly screenshots and social links, start here.',
      },
      {
        type: 'h2',
        content: "4. Mela: a focused Apple recipe manager",
      },
      {
        type: 'paragraph',
        content: 'Mela is an elegant Apple-native manager from the developer behind Reeder, and it shows. It stores recipes for offline reading, syncs over iCloud, and includes an unusual feature for this category: recipe RSS feeds, so the sites you actually cook from arrive in the app.',
      },
      {
        type: 'paragraph',
        content: 'It scans, imports documents, has a built-in browser, and plans meals, with grocery handling that leans on Apple Reminders. It is a one-time purchase, priced separately on iOS and macOS. What it does not have is a conversational assistant, which for many people is precisely the appeal.',
      },
      {
        type: 'h2',
        content: "5. AnyList: coordinate the household shopping",
      },
      {
        type: 'paragraph',
        content: 'It is worth being honest about which problem you have. For a lot of households, the recipe archive is a nice-to-have and the actual daily friction is that two people cannot see the same shopping list. AnyList is built around exactly that: real-time shared lists across household members, with recipe import and meal planning in the paid tier.',
      },
      {
        type: 'paragraph',
        content: 'The free tier caps web recipe imports, and the paid tier is an annual subscription with individual and household pricing. If everyone in the house needs to edit one list from two different shops, no amount of on-device intelligence in a single-user app substitutes for that.',
      },
      {
        type: 'h2',
        content: "Try the whole route with one familiar recipe",
      },
      {
        type: 'list',
        content: [
          'TEST THE IMPORT FIRST: Try to save three recipes from the sites and apps you genuinely use. This eliminates more candidates than any feature list.',
          'FIND THE EXPORT BUTTON: Before you add fifty recipes, confirm you can get them out. A collection you cannot export is a collection you cannot leave.',
          'DECIDE WHO ELSE NEEDS ACCESS: A single-user app and a shared household service are different products, and no feature list resolves that for you.',
          'PICK YOUR PRICING SHAPE: One-time purchase suits a long-lived archive. A subscription is easier to justify for continuous shared sync or continuous AI use.',
          'READ THE AI DATA PATH: If an app processes your recipes with a model, find out where that model runs before it becomes the app you keep your household’s dietary restrictions in.',
        ],
      },
      {
        type: 'faq',
        content: [
          {
            "question": "Do I need an AI recipe app at all?",
            "answer": "If saving, finding, and following recipes already covers your needs, an established archive may be enough. Mise’s local assistance is for questions that arise around the recipe, using selected recipe or pantry context. The app remains in development."
          },
          { question: 'What happens to my recipes if an app shuts down?', answer: 'That depends entirely on export. This category has seen large services close, so the practical protection is an app that can hand you your collection in a portable format. Check that before you commit, not after.' },
          {
            "question": "Why do some recipe apps import perfectly and others fail on the same page?",
            "answer": "Many sites include structured recipe data, which an app can read directly. That data can still be incomplete or wrong. When it is missing or malformed, the app needs to interpret the page, and results vary. Check quantities and steps whichever import path is used."
          },
          { question: 'Is a photographed cookbook page reliable?', answer: 'Reasonably, with care. Flatten the page, get even light, and fill the frame. Always check quantities before saving, because fractions and handwriting are exactly where text recognition struggles, and a misread measurement is the error that actually ruins dinner.' },
        ],
      },
      {
        type: 'sources',
        content: [
          'Apple Foundation Models framework|https://developer.apple.com/documentation/FoundationModels',
          'Paprika Recipe Manager official site|https://www.paprikaapp.com/',
          'Pestle official site|https://pestlechef.app/',
          'Mela: Recipe Manager on the App Store|https://apps.apple.com/us/app/mela-recipe-manager/id1548466041',
          'AnyList Complete|https://www.anylist.com/complete',
          'Schema.org Recipe vocabulary|https://schema.org/Recipe',
        ],
      },
      {
        type: 'cta',
        content: "See how Mise connects recipes, dinner planning, groceries, and cooking help. Follow its development if saving the recipe is already easy but deciding and cooking still take the work.",
        ctaAppId: 'mise',
      },
    ],
  },
];
