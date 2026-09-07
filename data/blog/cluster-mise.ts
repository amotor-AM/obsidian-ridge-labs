import type { BlogPost } from '../../types';

export const misePosts: BlogPost[] = [
  {
    id: 'mise-vs-paprika-pestle-mela-anylist',
    title: 'Mise vs Paprika, Pestle, Mela, and AnyList: Recipe Managers Compared',
    seoTitle: 'Mise vs Paprika, Pestle, Mela & AnyList (2026)',
    date: '2026.09.07',
    modified: '2026.09.07',
    readTime: '11 MIN READ',
    category: 'RECIPE APP COMPARISON',
    tags: ['#RECIPE-MANAGER', '#ON-DEVICE-AI', '#MEAL-PLANNING', '#GROCERY-LIST'],
    excerpt: 'A source-backed comparison of recipe import, on-device AI, meal planning, grocery lists, cook mode, sync, and pricing model across Mise, Paprika, Pestle, Mela, and AnyList.',
    seoDescription: 'Compare Mise, Paprika, Pestle, Mela, and AnyList for recipe import, on-device AI, meal planning, grocery lists, cook mode, sync, and pricing.',
    contentType: 'comparison',
    appId: 'mise',
    searchIntent: 'Which recipe manager should I use for saving recipes from anywhere, planning a week, and cooking: Mise, Paprika, Pestle, Mela, or AnyList?',
    keyTakeaways: [
      'Mise is the only design in this comparison that requires Apple Intelligence and answers real cooking questions on-device, grounded in your own recipe box, pantry, and dietary profile.',
      'Mise remains pre-release, so it should be read as a product specification rather than as a tested replacement for a shipping app with years of production use.',
      'The right choice depends less on feature counts than on four things: how you get recipes in, whether you need a conversational cooking assistant, how sync and sharing work, and whether you prefer a one-time purchase or a subscription.',
    ],
    relatedIds: ['best-private-recipe-manager-apps', 'apple-ecosystem-privacy', 'offline-ai-revolution'],
    blocks: [
      {
        type: 'answer',
        title: 'The short answer',
        content: 'Mise is the on-device assistant in this comparison: it imports from the share sheet, pasted text, or a photo, parses anything unstructured with Apple Foundation Models on the phone, and then answers real cooking questions grounded in your recipe box, pantry, and dietary profile. It is not yet released. Paprika is the long-established one-time-purchase manager with per-platform licences. Pestle is the on-device-import specialist with a lifetime option. Mela is the elegant one-time-purchase Apple-native manager with RSS and Reminders integration. AnyList is the shared household list app that happens to import recipes.',
      },
      {
        type: 'callout',
        title: 'Pre-release comparison boundary',
        variant: 'warning',
        content: 'Mise is in development, has no settled public price, and has not been through App Store review. Its rows below describe the current implementation and its documented limits, including the fact that it requires Apple Intelligence and will show an explanation screen rather than a degraded app on hardware that cannot run it. Competitor capabilities and prices were read from official and reputable secondary sources in September 2026 and change often, so recheck the linked pages before buying anything.',
      },
      {
        type: 'paragraph',
        content: 'Recipe apps get compared on the wrong axis. Almost every one of them can store a recipe and show it to you in large type, which means the storage layer is not where the difference lives. The difference shows up in three places: the moment you try to save something the app was not designed to read, the moment you are standing at the stove and something has gone wrong, and the moment you realise your entire collection is only as portable as the export button.',
      },
      {
        type: 'comparison',
        caption: 'Capability direction summarised from official product pages and reputable coverage, September 2026',
        columns: ['Best suited to', 'Getting recipes in', 'Sync, sharing, and pricing model'],
        rows: [
          { label: 'Mise · pre-release', cells: ['Cooks who want a conversational sous chef that knows their own kitchen and never uploads it.', 'Share sheet, paste-and-parse, photo OCR for cookbook pages and handwritten cards, and manual entry. Published recipe data is read directly from the page; anything messier is parsed by Apple Foundation Models on the device.', 'Local storage with optional private iCloud sync as a paid feature. No account and no backend. Planned free tier plus subscription with a lifetime option.'] },
          { label: 'Paprika Recipe Manager 3', cells: ['People who want a mature, self-contained manager and dislike subscriptions.', 'A built-in browser that captures recipes from websites, plus manual entry and import.', 'Its own sync service across devices. Sold as a one-time purchase per platform, so iOS, macOS, and Windows are bought separately.'] },
          { label: 'Pestle', cells: ['Apple users who want strong import from awkward sources and a lifetime purchase option.', 'Import from websites and social sources, including on-device processing of captions to build a recipe.', 'Apple-native sync. Pro is sold as a subscription with a lifetime option alongside it.'] },
          { label: 'Mela', cells: ['People who want a beautiful, quiet, Apple-native manager with no subscription.', 'A built-in browser, document import, scanning, manual entry, and recipe RSS feeds.', 'iCloud sync across the developer’s apps. One-time purchase, priced separately for iOS and macOS.'] },
          { label: 'AnyList', cells: ['Households whose real problem is a shared shopping list rather than a recipe archive.', 'Web recipe import, capped on the free tier, with meal planning in the paid tier.', 'Real-time shared lists across household members. Annual subscription, with an individual and a household tier.'] },
        ],
      },
      {
        type: 'h2',
        content: 'Import is now table stakes. What happens after the import is not',
      },
      {
        type: 'paragraph',
        content: 'Every serious recipe manager can pull a recipe off a website, because most recipe sites publish machine-readable recipe data alongside the page you read. Mise reads that data directly when it is present, with no model involved, which is both faster and exact. Paprika and Mela both solve the same problem with an in-app browser. Pestle has gone further than most into the awkward cases, using on-device processing to build a recipe out of a social post caption.',
      },
      {
        type: 'paragraph',
        content: 'Where Mise differs is what it does with the collection afterwards. The sous chef sits at the top of the recipe list rather than being a feature buried in a menu, and it can see your saved recipes, your remembered pantry, and your dietary profile. Asking it what to do about a broken sauce, or what to cook from four leftovers, is a different kind of interaction from searching an archive. That capability is also the reason Mise gates itself on Apple Intelligence at launch instead of shipping a version of itself that cannot do the thing it exists to do.',
      },
      {
        type: 'h2',
        content: 'The pricing question is really a question about who owns the risk',
      },
      {
        type: 'paragraph',
        content: 'Paprika and Mela both use one-time purchases, and this category rewards them for it: a recipe collection is a decade-long archive, and people are reasonably reluctant to rent access to their own grandmother’s handwriting. The cost is per-platform licensing, so a person with an iPhone, an iPad, and a Mac may pay more than once.',
      },
      {
        type: 'paragraph',
        content: 'Pestle answers the same objection differently, by keeping a lifetime tier alongside its subscription. Mise plans the same shape: a free tier with a recipe cap and a daily AI allowance, a subscription, and a lifetime option that removes both. AnyList is the outlier, because it is fundamentally a shared-household service, and continuous real-time sync between several people is the sort of thing a subscription genuinely pays for.',
      },
      {
        type: 'h2',
        content: 'Privacy in this category is quieter than in journaling or finance, and still worth reading',
      },
      {
        type: 'paragraph',
        content: 'A recipe box is not a diary. But it does describe how a household eats, what it can afford, its allergies, and its religious or medical restrictions, and increasingly it is processed by a cloud model in order to be useful. The honest comparison is not privacy scores but data paths.',
      },
      {
        type: 'paragraph',
        content: 'Mise has no backend at all. Its only network requests are fetching a page you asked it to import, made directly to that site, and App Store purchase verification. That is an architectural claim rather than a policy one, which matters because architecture is harder to quietly change than a privacy page. Paprika and Mela both keep collections local with their own or Apple’s sync. Pestle emphasises on-device processing for its import. AnyList, by design, holds shared lists on a service so that two people in different supermarkets can see the same list update. None of these are wrong; they are different trades, and the useful question is which trade you are actually making.',
      },
      {
        type: 'h2',
        content: 'How Mise differs from the available approaches',
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
          { question: 'Can Mise replace Paprika?', answer: 'Not today, because Mise has not shipped. When it does, the honest framing is that they solve overlapping problems differently: Paprika is a mature subscription-free archive with its own sync service, while Mise is built around on-device parsing and a cooking assistant that reads your own collection. Paprika also runs on Windows and Android, which Mise does not.' },
          { question: 'Why does Mise require Apple Intelligence when other recipe apps do not?', answer: 'Because the sous chef, pantry generation, and substitutions are the product rather than an extra. A version of Mise without on-device AI would be a slower recipe list, so it shows a full-screen explanation on unsupported hardware instead of silently degrading. Apps that treat AI as an add-on can reasonably run everywhere.' },
          { question: 'Which of these is best for a shared household grocery list?', answer: 'AnyList, by a clear margin, because real-time shared lists across household members are its central design. Mise generates and consolidates a list from your plan and can share it as plain text, which is a different job from two people editing one list simultaneously in two different shops.' },
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
        content: 'See how Mise imports, plans, and cooks without a recipe server.',
        ctaAppId: 'mise',
      },
    ],
  },
  {
    id: 'best-private-recipe-manager-apps',
    title: '5 Recipe Manager Apps for Importing, Planning, and Cooking in 2026',
    seoTitle: '5 Best Recipe Manager Apps for 2026',
    date: '2026.09.07',
    modified: '2026.09.07',
    readTime: '11 MIN READ',
    category: 'RECIPE APP GUIDE',
    tags: ['#RECIPE-APP', '#MEAL-PLANNING', '#COOK-MODE', '#PRIVATE-AI'],
    excerpt: 'Five recipe managers matched to five real needs, from an on-device sous chef and subscription-free archives to the shared household list that actually gets used.',
    seoDescription: 'Five recipe manager apps compared by import method, meal planning, grocery lists, cook mode, sync, privacy, and pricing model.',
    contentType: 'listicle',
    appId: 'mise',
    searchIntent: 'What is the best recipe app for saving recipes from anywhere, planning meals, and building a grocery list?',
    keyTakeaways: [
      'Choose by the job you actually have: an archive you will keep for a decade, a shared list two people edit, or a cooking assistant for when something goes wrong at the stove.',
      'Mise leads this guide for on-device parsing and a sous chef grounded in your own recipe box, with a clear pre-release and Apple Intelligence boundary.',
      'Check export before you commit. A recipe collection is a long-lived archive, and the export button is the only thing that makes it portable.',
    ],
    relatedIds: ['mise-vs-paprika-pestle-mela-anylist', 'apple-ecosystem-privacy', 'offline-ai-revolution'],
    listItems: [
      { name: 'Mise · pre-release', description: 'The on-device option for parsing anything and asking a sous chef that knows your kitchen.' },
      { name: 'Paprika Recipe Manager 3', description: 'The mature, subscription-free archive with its own cross-platform sync.' },
      { name: 'Pestle', description: 'Strong import from awkward and social sources, with a lifetime purchase option.' },
      { name: 'Mela', description: 'An elegant Apple-native manager with recipe RSS and a one-time purchase.' },
      { name: 'AnyList', description: 'The shared household grocery list that everyone in the house will actually use.' },
    ],
    blocks: [
      {
        type: 'answer',
        title: 'The short answer',
        content: 'If you want a cooking assistant that reads your own collection and never uploads it, Mise is the direction, with the caveat that it is unreleased and requires Apple Intelligence. If you want a subscription-free archive you will still own in ten years, Paprika or Mela. If your imports keep failing on social posts and photographed pages, Pestle. If the real friction in your house is that two people cannot see the same shopping list, AnyList solves your actual problem and none of the others do.',
      },
      {
        type: 'paragraph',
        content: 'Recipe apps are unusually easy to choose badly, because they all look the same in a screenshot. The failure shows up months later: the import that never works on the site you actually read, the meal planner nobody in the household opens, the subscription you resent paying for an archive you already built. So this guide is organised by the job rather than by feature count.',
      },
      {
        type: 'callout',
        title: 'What we can and cannot claim about Mise',
        variant: 'warning',
        content: 'Mise is our own product and it is still in development. It has no settled price and has not been through App Store review. Its description below is the current implementation, including the fact that it requires Apple Intelligence and shows an explanation screen rather than a degraded app on hardware that cannot run it. Everything else here was read from official and reputable secondary sources in September 2026 and changes often.',
      },
      {
        type: 'h2',
        content: '01. Mise, for a sous chef that knows your kitchen',
      },
      {
        type: 'paragraph',
        content: 'Mise imports through the share sheet, pasted text, a photograph of a cookbook page, or manual entry. When a site publishes machine-readable recipe data, Mise reads it directly with no model involved. When it does not, Apple Foundation Models parses it on the phone. The sous chef then sits at the top of the recipe list and can see your saved recipes, your remembered pantry, and your dietary profile, so it can answer what to do about a split sauce or write a recipe out of what is actually in the fridge.',
      },
      {
        type: 'paragraph',
        content: 'The rest is conventional in the good sense: a weekly grid with four slots a day and a button that fills the week, a grocery list that consolidates duplicates and sorts by supermarket aisle, and a cook mode with several concurrent timers running in a Live Activity. The distinguishing constraint is architectural. Mise has no backend, so its only network requests are fetching a page you asked for and verifying a purchase with Apple. The cost of that design is the Apple Intelligence requirement, which is a real exclusion and not a footnote.',
      },
      {
        type: 'h2',
        content: '02. Paprika, for an archive you will still own in ten years',
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
        content: '03. Pestle, for the imports that keep failing',
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
        content: '04. Mela, for people who want the app to be quiet and beautiful',
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
        content: '05. AnyList, when the real problem is the shopping list',
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
        content: 'How to choose without regretting it in six months',
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
          { question: 'Do I need an AI recipe app at all?', answer: 'No. If your imports work and you already know what to cook, a subscription-free archive like Paprika or Mela covers the job completely. On-device AI earns its place in two specific moments: importing something unstructured such as a photographed page, and answering a cooking question while your hands are busy.' },
          { question: 'What happens to my recipes if an app shuts down?', answer: 'That depends entirely on export. This category has seen large services close, so the practical protection is an app that can hand you your collection in a portable format. Check that before you commit, not after.' },
          { question: 'Why do some recipe apps import perfectly and others fail on the same page?', answer: 'Most recipe sites publish machine-readable recipe data alongside the page. An app that reads it gets a perfect import with no AI. When that data is missing or malformed, which is common on blogs and social posts, the app has to interpret the page instead, and that is where results diverge.' },
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
        content: 'See how Mise keeps import, planning, and the sous chef on your device.',
        ctaAppId: 'mise',
      },
    ],
  },
];
