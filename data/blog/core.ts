import type { BlogPost } from '../../types';

export const coreBlogPosts: BlogPost[] = [
  {
    id: 'apple-ecosystem-privacy',
    title: 'On-Device AI on iPhone: What Stays Local, What Still Connects, and How to Verify It',
    seoTitle: 'On-Device AI on iPhone: A Privacy Verification Guide',
    date: '2026.03.22',
    modified: '2026.07.11',
    readTime: '11 MIN READ',
    category: 'ON-DEVICE AI GUIDE',
    tags: ['#ON-DEVICE-AI', '#IPHONE-PRIVACY', '#APPLE-INTELLIGENCE', '#LOCAL-FIRST'],
    excerpt: 'A practical way to verify whether an iPhone AI app processes your data locally, which features still use a network, and what privacy questions to ask before installing it.',
    seoDescription: 'Learn what on-device AI means on iPhone, which features may still connect, and seven practical checks for verifying an app’s privacy claims.',
    contentType: 'guide',
    searchIntent: 'How can I tell whether an iPhone AI app is truly on-device and private?',
    keyTakeaways: [
      '“On-device” should name a specific processing step, not imply that the entire app is permanently offline.',
      'Local inference, local storage, optional iCloud, App Store verification, and user-initiated sharing are separate data paths.',
      'The most credible privacy claim is one you can test through permissions, offline behavior, exports, and product-specific disclosures.',
    ],
    relatedIds: ['offline-ai-revolution', 'otter-vs-echo', 'finance-app-red-flags'],
    blocks: [
      {
        type: 'answer',
        title: 'The short answer',
        content: 'An iPhone AI app is meaningfully on-device when it identifies the exact task that runs locally—such as transcription, summarization, OCR, search, or classification—and that task still works without sending the input to the developer’s server. That does not prove every feature is offline. You still need separate answers about storage, model downloads, purchases, iCloud, third-party services, exports, diagnostics, and support.',
      },
      {
        type: 'paragraph',
        content: '“Private AI” and “on-device AI” are useful terms only when they describe an inspectable data path. A logo, lock icon, or broad promise cannot tell you whether a recording is uploaded for speech recognition, whether a journal entry is sent elsewhere for a summary, or whether an optional sync service creates another copy. The right comparison begins with what the app does to one real piece of data from input to result.',
      },
      {
        type: 'h2',
        content: 'What on-device AI actually means',
      },
      {
        type: 'paragraph',
        content: 'Apple’s Foundation Models framework gives developers access to an on-device language model for tasks such as summarization, entity extraction, text understanding, refinement, and structured output. Apple also provides local frameworks for speech, Vision OCR, image analysis, Natural Language processing, and other focused work. When an app uses those capabilities directly on supported hardware, the private input can remain inside the device boundary for that named task.',
      },
      {
        type: 'callout',
        title: 'Important distinction',
        variant: 'privacy',
        content: 'An app using Apple’s on-device Foundation Models framework is not the same thing as every Apple Intelligence request on the system. Apple explains that some system-level Apple Intelligence requests may use Private Cloud Compute. A developer should document the behavior of the app feature itself instead of borrowing a platform-wide privacy claim.',
      },
      {
        type: 'h2',
        content: 'Local inference and local storage are different questions',
      },
      {
        type: 'paragraph',
        content: 'An app can process a prompt locally and still store the result in a synced database. It can also store everything locally while sending one optional request to a remote service. Ask where the original input lives, where derived data lives, whether a device backup contains it, whether iCloud is optional, and whether deleting the app removes every copy. “The AI runs locally” answers only the inference question.',
      },
      {
        type: 'comparison',
        caption: 'Common data paths in an iPhone AI app',
        columns: ['Data path', 'What it can mean', 'What to verify'],
        rows: [
          { label: 'Local inference', cells: ['The model processes the input on the iPhone, iPad, or Mac.', 'Which exact features use it, supported hardware, fallback behavior, and whether the input is ever uploaded.'] },
          { label: 'Local storage', cells: ['Records remain in the app sandbox or an App Group container.', 'Encryption, device backups, deletion, export, and whether extensions can read the same store.'] },
          { label: 'Optional iCloud', cells: ['Selected records may sync through the user’s Apple account.', 'Whether it is opt-in, which data types sync, whether media files are included, and what happens after disabling it.'] },
          { label: 'Apple services', cells: ['WeatherKit, HealthKit, StoreKit, or another system service may be used.', 'Permission scope, data sent to Apple, local caching, and whether the feature works when permission is denied.'] },
          { label: 'Third-party service', cells: ['A connected provider may supply bank data, collaboration, or another optional capability.', 'Provider name, authentication flow, fields shared, retention, disconnect behavior, and a non-connected alternative.'] },
          { label: 'User-initiated export', cells: ['You create a portable copy and choose a destination.', 'Format, included fields, excluded private history, and the security of the destination after export.'] },
        ],
      },
      {
        type: 'h2',
        content: 'Seven checks you can perform before trusting the claim',
      },
      {
        type: 'list',
        content: [
          'READ THE PRODUCT-SPECIFIC PRIVACY PAGE: Look for concrete nouns—audio, transcript, entry, photo, location, transaction—not only adjectives such as secure or private.',
          'CHECK THE APP STORE PRIVACY LABEL: Apple requires developers to disclose data collected by them and their partners, while noting that data processed only on the device is not considered collected.',
          'REVIEW PERMISSIONS IN CONTEXT: A microphone, photo, contacts, location, or Health permission should appear when its feature is used and explain why it is needed.',
          'TEST AIRPLANE MODE AFTER SETUP: Try the core workflow from input through result and export. Record which steps work and which clearly request a connection.',
          'LOOK FOR A FALLBACK: A responsible local-AI product explains what happens on unsupported hardware, when the model is unavailable, or when a permission is declined.',
          'EXPORT AND DELETE A TEST RECORD: Confirm that a useful format is available and that deletion behavior is understandable without contacting support.',
          'IDENTIFY EVERY OPTIONAL CONNECTION: Model downloads, StoreKit, WeatherKit, iCloud, Plaid, web links, and support can be legitimate while still needing disclosure.',
        ],
      },
      {
        type: 'h2',
        content: 'Why Obsidian Ridge Labs focuses on Apple platforms',
      },
      {
        type: 'paragraph',
        content: 'A narrow platform strategy is an engineering constraint, not a claim that Apple makes every app private. Supporting one hardware and software family gives a small studio more time to test permission timing, local model availability, offline failure states, accessibility, exports, and optional connections. It also lets each product publish specific operating-system and hardware requirements rather than hiding behind a vague compatibility promise.',
      },
      {
        type: 'paragraph',
        content: 'The platform still does not choose the app’s business model, third-party SDKs, storage design, or support workflow. Those remain developer decisions. Our standard is therefore product-specific: name what stays local, name what connects, label unreleased behavior as provisional, and correct a claim when the implementation does not support it.',
      },
      {
        type: 'h2',
        content: 'Questions people ask about private iPhone AI apps',
      },
      {
        type: 'faq',
        content: [
          {
            question: 'Does on-device AI mean an app never uses the internet?',
            answer: 'No. It means the named AI processing task runs locally. Downloads, purchase verification, optional iCloud, WeatherKit, connected providers, web links, and support can still use a network. Each connection should be documented separately.',
          },
          {
            question: 'Is Apple Intelligence always processed only on my iPhone?',
            answer: 'No blanket answer applies to every system feature. Apple says many requests run on-device and more complex requests may use Private Cloud Compute. An app using the on-device Foundation Models framework should describe its own feature path precisely.',
          },
          {
            question: 'Can an App Store privacy label prove that an AI app is private?',
            answer: 'It is one useful signal, not complete proof. Compare the label with the product privacy page, permissions, included SDKs, offline behavior, optional services, export, and deletion controls.',
          },
          {
            question: 'How can I test whether a feature really works offline?',
            answer: 'Complete any documented model setup, create non-sensitive test data, enable airplane mode, and attempt the core workflow from input to result and export. Record which steps still work and which explain that a connection is required.',
          },
        ],
      },
      {
        type: 'sources',
        content: [
          'Apple Foundation Models framework|https://developer.apple.com/documentation/FoundationModels',
          'Apple: Generating content and performing tasks with Foundation Models|https://developer.apple.com/documentation/FoundationModels/generating-content-and-performing-tasks-with-foundation-models',
          'Apple Intelligence and privacy on iPhone|https://support.apple.com/guide/iphone/apple-intelligence-and-privacy-iphe3f499e0e/ios',
          'Apple App Privacy Details guidance|https://developer.apple.com/app-store/app-privacy-details/',
          'Apple Platform Security|https://support.apple.com/guide/security/welcome/web',
        ],
      },
    ],
  },
  {
    id: 'offline-ai-revolution',
    title: 'Offline AI Apps in 2026: What Works Without Internet—and What Still Connects',
    seoTitle: 'Offline AI Apps in 2026: What Works Without Internet',
    date: '2026.03.05',
    modified: '2026.07.11',
    readTime: '10 MIN READ',
    category: 'OFFLINE AI EXPLAINER',
    tags: ['#OFFLINE-AI', '#LOCAL-AI', '#PRIVACY', '#APPLE-SILICON'],
    excerpt: 'Offline AI can keep focused work available and reduce data movement, but model setup, purchases, optional sync, connected providers, and exports still require separate answers.',
    seoDescription: 'See which AI workflows can run offline, what may still connect, and how local and cloud-first apps differ on privacy, reliability, and scale.',
    contentType: 'analysis',
    searchIntent: 'Which AI apps work without internet, and does offline AI mean none of my data ever leaves the device?',
    keyTakeaways: [
      'Offline AI is strongest in focused workflows with bounded inputs and clear output checks.',
      'A deterministic fallback can matter more than a larger model when reliability is the product requirement.',
      '“Works offline” should be tested after setup and separated from optional services that legitimately connect.',
    ],
    relatedIds: ['apple-ecosystem-privacy', 'best-offline-transcription-apps', 'mettle-vs-fitbod-alpha-progression-boostcamp-hevy'],
    blocks: [
      {
        type: 'answer',
        title: 'What offline AI means in practice',
        content: 'An offline AI app runs its core inference on the device after any required setup, so the main workflow can continue without Wi-Fi or cellular service. It may still connect for an initial model download, App Store purchase verification, optional iCloud, WeatherKit, bank data, links, or support. The useful question is not “Does the app ever connect?” but “Which exact step connects, why, and what remains usable when it cannot?”',
      },
      {
        type: 'paragraph',
        content: 'Local models have moved from novelty to a practical product architecture. Modern Apple hardware can transcribe speech, extract text from images, classify records, retrieve related writing, generate structured drafts, and summarize bounded context without a round trip to a general cloud model. The best offline products do not try to recreate every capability of a frontier chatbot. They choose a focused job where privacy, latency, and availability materially improve the experience.',
      },
      {
        type: 'h2',
        content: 'Where offline AI is genuinely useful',
      },
      {
        type: 'list',
        content: [
          'TRANSCRIPTION: Convert a live recording or imported file into searchable text without uploading the source audio to the app developer.',
          'PERSONAL WRITING: Retrieve themes or generate a restrained reflection over journal entries that remain in a local archive.',
          'DOCUMENT CAPTURE: Use Vision OCR and barcode recognition to propose fields for a receipt, garment, study source, or household item.',
          'FOCUSED PLANNING: Turn a bounded task, workout context, closet, or relationship record into suggestions constrained by local rules and user edits.',
          'UNRELIABLE CONNECTIVITY: Continue core work on a plane, in a tunnel, or wherever network quality is poor after the model is ready.',
          'PREDICTABLE OPERATING COST: Avoid a new remote inference request every time the core feature runs.',
        ],
      },
      {
        type: 'h2',
        content: 'Where local models trade breadth for a clearer boundary',
      },
      {
        type: 'paragraph',
        content: 'A local model competes for device memory, storage, battery, and thermal headroom. Compatibility can depend on a newer chip, operating system, language, or downloaded asset. Smaller models also have tighter context windows and less world knowledge. Those limits are not automatically defects: a source-grounded flashcard generator or curated exercise selector can be safer and more useful precisely because it is not answering every open-domain question.',
      },
      {
        type: 'comparison',
        caption: 'Offline-first and cloud-first AI solve different product problems',
        columns: ['Question', 'Offline-first approach', 'Cloud-first approach'],
        rows: [
          { label: 'Core inference', cells: ['Runs on supported local hardware.', 'Runs on remote infrastructure.'] },
          { label: 'Network dependency', cells: ['Core work can continue after setup.', 'Usually requires a connection for each request.'] },
          { label: 'Model scale', cells: ['Smaller and optimized for a focused device workflow.', 'Can use larger models and more compute.'] },
          { label: 'Private-input movement', cells: ['Can avoid a remote inference copy.', 'Input must reach the service that performs inference.'] },
          { label: 'Collaboration', cells: ['Often centered on a personal local archive.', 'Often stronger for shared workspaces and centralized administration.'] },
          { label: 'Failure mode', cells: ['Hardware or model availability may trigger a deterministic fallback.', 'Connectivity, account, rate limit, or service availability can interrupt the request.'] },
        ],
      },
      {
        type: 'h2',
        content: 'Why a deterministic fallback matters',
      },
      {
        type: 'paragraph',
        content: 'An app should not become useless because Apple Intelligence is unavailable, a generation is refused, or an older supported device lacks the preferred model. A deterministic fallback can use rules, calculations, Natural Language analysis, or manual controls to preserve the core outcome. In Mettle, for example, the deterministic engine owns every set, rep, load, and deload while the language model is limited to curated exercise selection and explanation. In Memora, a NaturalLanguage extractor can still produce definition and cloze drafts when the richer generator is unavailable.',
      },
      {
        type: 'h2',
        content: 'Connections that can still be honest in an offline-first app',
      },
      {
        type: 'list',
        content: [
          'MODEL SETUP: A speech or language model may need an initial download before offline use begins.',
          'STOREKIT: Apple may verify a purchase, subscription, trial, or entitlement.',
          'PRIVATE ICLOUD: A person may choose to sync supported records through their Apple account.',
          'APPLE SERVICES: WeatherKit, HealthKit permissions, and other system integrations have their own documented boundaries.',
          'CONNECTED DATA: A bank refresh or another provider-backed import needs that provider connection.',
          'USER-INITIATED SHARING: Exporting a deck, transcript, CSV, or PDF creates a copy at the destination the person selects.',
          'SUPPORT AND LINKS: Sending a support message or opening the web transmits what the person chooses to send or request.',
        ],
      },
      {
        type: 'h2',
        content: 'How to test an offline AI app in ten minutes',
      },
      {
        type: 'list',
        content: [
          'Use non-sensitive sample data and finish every documented setup or model download.',
          'Complete the main workflow once while connected so you understand the normal result.',
          'Enable airplane mode and repeat the same input, processing, search, edit, and export steps.',
          'Try the same flow with Apple Intelligence unavailable if the app offers a documented fallback.',
          'Open any optional sync, purchase, or connected-provider control and confirm that the app explains the boundary before activation.',
          'Delete the test record and inspect any export or shared copy you created separately.',
        ],
      },
      {
        type: 'callout',
        title: 'What this test cannot prove',
        variant: 'warning',
        content: 'Airplane mode demonstrates that a workflow can function without a connection; it does not audit every code path, backup, SDK, or future version. Pair the test with the App Store privacy label, product disclosures, permissions, and public source where available.',
      },
      {
        type: 'h2',
        content: 'Frequently asked questions about offline AI apps',
      },
      {
        type: 'faq',
        content: [
          {
            question: 'Are offline AI apps always more private than cloud AI?',
            answer: 'They can reduce data movement by avoiding a remote inference server for the core task. Privacy still depends on storage, backups, optional sync, SDKs, exports, permissions, and every other connection the app makes.',
          },
          {
            question: 'Can offline AI be as accurate as cloud AI?',
            answer: 'Sometimes a focused local model can be highly competitive on a specific task, while a larger cloud model may be broader or stronger elsewhere. Compare the same benchmark or source material and account for language, domain, noise, and hardware.',
          },
          {
            question: 'Why do some offline AI apps require a newer iPhone?',
            answer: 'Local inference uses the memory, neural processing, storage, and operating-system frameworks on the device. A developer should state the minimum OS and hardware instead of implying universal compatibility.',
          },
          {
            question: 'Does optional iCloud sync make an app cloud-first?',
            answer: 'Not necessarily. A local-first app can keep the core workflow on-device while offering an optional private sync path. The important details are whether sync is opt-in, which records and media are included, and what happens when it is disabled.',
          },
        ],
      },
      {
        type: 'sources',
        content: [
          'Apple Foundation Models framework|https://developer.apple.com/documentation/FoundationModels',
          'Apple: Meet the Foundation Models framework|https://developer.apple.com/videos/play/wwdc2025/286/',
          'Apple: Prompting an on-device foundation model|https://developer.apple.com/documentation/foundationmodels/prompting-an-on-device-foundation-model',
          'Apple: Improving the safety of generative model output|https://developer.apple.com/documentation/FoundationModels/improving-the-safety-of-generative-model-output',
          'Apple App Privacy Details guidance|https://developer.apple.com/app-store/app-privacy-details/',
        ],
      },
      {
        type: 'cta',
        content: 'Explore how each Obsidian Ridge Labs product separates its local core from optional connections, provisional capabilities, and user-initiated exports.',
        ctaAppId: 'echochamber',
      },
    ],
  },
];
