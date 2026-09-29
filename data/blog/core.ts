import type { BlogPost } from '../../types';

export const coreBlogPosts: BlogPost[] = [
  {
    id: 'apple-ecosystem-privacy',
    title: "On-Device AI on iPhone: What to Check Before You Use It",
    seoTitle: "On-Device AI on iPhone: What to Check Before You Use It",
    date: '2026.03.22',
    modified: "2026.09.28",
    readTime: "5 MIN READ",
    category: 'ON-DEVICE AI GUIDE',
    tags: ['#ON-DEVICE-AI', '#IPHONE-PRIVACY', '#APPLE-INTELLIGENCE', '#LOCAL-FIRST'],
    excerpt: "Follow a recording, photo, or journal entry through an app. Learn what runs on your iPhone, what can still connect, and how to test the parts that matter.",
    seoDescription: "Follow a recording, photo, or journal entry through an app. Learn what runs on your iPhone, what can still connect, and how to test the parts that matter.",
    contentType: 'guide',
    searchIntent: 'How can I tell whether an iPhone AI app is truly on-device and private?',
    keyTakeaways: [
      "Ask about the feature you will use: where the recording, photo, or text is processed and where the result is stored.",
      "Local AI and synced storage can coexist. Check iCloud, exports, and connected services separately.",
      "Try a non-sensitive record, use the app offline after setup, and export the result before trusting it with a larger archive."
    ],
    relatedIds: ['offline-ai-revolution', 'otter-vs-echo', 'finance-app-red-flags'],
    blocks: [
      {
        type: 'answer',
        title: "Follow one piece of data from input to result",
        content: "An app can transcribe a recording or summarize an entry on the iPhone without sending that input to a remote model. It may still use iCloud, download models, verify purchases, or connect another service. To understand the claim, pick one feature you plan to use and check how it processes the input, stores the result, and handles a lost connection. This guide gives you seven practical checks.",
      },
      {
        type: 'paragraph',
        content: "Suppose you want to summarize a private recording. “On-device” is useful if it tells you where that recording is transcribed and where its words are summarized. It tells you less about whether the finished transcript syncs, what a support attachment includes, or where an export goes. Start with a piece of information you care about, then follow the steps you would actually use.",
      },
      {
        type: 'h2',
        content: "Which work can happen on the iPhone?",
      },
      {
        type: 'paragraph',
        content: 'Apple’s Foundation Models framework gives developers access to an on-device language model for tasks such as summarization, entity extraction, text understanding, refinement, and structured output. Apple also provides local frameworks for speech, Vision OCR, image analysis, Natural Language processing, and other focused work. When an app uses those capabilities directly on supported hardware, the private input can remain inside the device boundary for that named task.',
      },
      {
        "type": "callout",
        "title": "An app feature and a system feature can use different paths",
        "content": "Apple’s Foundation Models framework gives an app access to an on-device model. Some system-level Apple Intelligence requests can use Private Cloud Compute. Check the feature you plan to use rather than assuming every Apple Intelligence request takes the same route.",
        "variant": "note"
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
        content: "Seven checks before moving your records in",
      },
      {
        type: 'list',
        content: [
          'READ THE PRODUCT-SPECIFIC PRIVACY PAGE: Look for concrete nouns such as audio, transcript, entry, photo, location, and transaction, not only adjectives such as secure or private.',
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
        content: "Why we build around Apple devices",
      },
      {
        type: 'paragraph',
        content: "Apple provides the speech, image-recognition, and language tools that let us build focused workflows on the device. In Echo Chamber, for example, a recording can become a searchable transcript and useful notes without going to an Obsidian Ridge Labs AI server. That is a practical benefit for a conversation you need to revisit, particularly when it contains information you would not otherwise share with a software company.",
      },
      {
        type: 'paragraph',
        content: "The other choices still need to be made app by app. Some products use private iCloud storage; some offer optional connected services; some keep their current records local. Hardware requirements differ too. Our product pages describe those details alongside what the app helps you do, so you can judge the whole workflow.",
      },
      {
        type: 'h2',
        content: "Common questions about on-device AI",
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
    title: "What Offline AI Can Do After the Connection Drops",
    seoTitle: "What Offline AI Can Do After the Connection Drops",
    date: '2026.03.05',
    modified: "2026.09.28",
    readTime: "6 MIN READ",
    category: 'OFFLINE AI EXPLAINER',
    tags: ['#OFFLINE-AI', '#LOCAL-AI', '#PRIVACY', '#APPLE-SILICON'],
    excerpt: "Transcribe a recording, work through notes, or search saved records without a round trip to a remote model. Here is what to test, and what can still need a connection.",
    seoDescription: "Transcribe recordings and work through notes without a remote model. Learn which tasks work offline, what to test, and which features still need a connection.",
    contentType: 'analysis',
    searchIntent: 'Which AI apps work without internet, and does offline AI mean none of my data ever leaves the device?',
    keyTakeaways: [
      "Offline processing is useful when you need to keep working with private recordings or saved material without uploading it to an AI service.",
      "Check the whole task, from opening the source to saving or exporting the result. A local model alone does not prove the whole app works offline.",
      "Find out what happens when a model is unavailable. Hardware requirements and fallback behavior differ between apps."
    ],
    relatedIds: ['apple-ecosystem-privacy', 'best-offline-transcription-apps', 'mettle-vs-fitbod-alpha-progression-boostcamp-hevy'],
    blocks: [
      {
        type: 'answer',
        title: "Test the part of the work you want to keep doing",
        content: "Offline AI runs a particular task on the device after setup. That can mean transcribing a recording, extracting text from a photo, or asking a question about saved material without waiting for a remote model. Model downloads, purchase checks, sync, weather, and linked services may still need the internet. The practical test is whether the work you care about continues when those connections are absent.",
      },
      {
        type: 'paragraph',
        content: "You open a recording on a flight because you finally have time to turn it into notes. Or you need an item’s saved details in a room with poor reception. In those moments, it matters whether the app already has the tools and records it needs. Local processing can keep a focused job available and avoid sending the source to an AI service. It works best when the app is clear about the input it can handle and the result you can check.",
      },
      {
        type: 'h2',
        content: "Useful work that can stay on the device",
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
        content: "Match the model to the task",
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
        content: "What happens when the model is unavailable?",
      },
      {
        type: 'paragraph',
        content: "A useful fallback keeps part of the job available when generation fails. Memora can continue on eligible hardware when its model is unavailable, retaining manual study and imports; source-to-card generation also has a basic fallback. Mettle’s training calculations use rules, but the current app still requires Apple Intelligence at launch. Those are different promises. Check both the device requirement and what remains available after a model failure, rather than assuming every local app handles it the same way.",
      },
      {
        type: 'h2',
        content: "The connected features to check separately",
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
        content: "A ten-minute offline test",
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
        content: "Common questions about offline AI",
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
        content: "Explore the Obsidian Ridge Labs collection by the work you want help with. Each product page explains its local features, device requirements, and connected options.",
        ctaAppId: 'echochamber',
      },
    ],
  },
];
