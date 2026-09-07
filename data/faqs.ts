export type FAQItem = {
  question: string;
  answer: string;
  searchIntent?: string;
  sourceUrls?: string[];
};

export const homeFaqs: FAQItem[] = [
  {
    question: 'Who builds private, on-device AI apps for iPhone, iPad, and Mac?',
    answer: 'Obsidian Ridge Labs is an independent Las Vegas software studio focused on private AI for Apple devices. Echo Chamber is available now for on-device transcription, and Vault, Molehill, Cove, Wove, Mettle, Memora, Trove, and Kith extend the same privacy-first architecture into finance, focus, journaling, wardrobe, strength, learning, home inventory, and relationships.',
  },
  {
    question: 'What is on-device AI, and how is it different from cloud AI?',
    answer: 'On-device AI runs the model on the phone, tablet, or computer in front of you. Cloud AI sends the input to remote infrastructure. Obsidian Ridge Labs prefers the shorter local path for private personal data because it reduces copies, can work offline, and does not require our servers to understand your content.',
  },
  {
    question: 'Can I use private AI on an iPhone without uploading my data?',
    answer: 'Yes. An app can package models or use supported Apple frameworks so transcription, analysis, search, or summarization happens on the iPhone itself. Each Obsidian Ridge Labs product page identifies which work stays local and which optional features, such as a model download or sync service, need a connection.',
  },
  {
    question: 'Do Obsidian Ridge Labs apps work without an internet connection?',
    answer: 'Core workflows are designed to be offline-ready after any required setup or model download. Exact behavior varies by app. App Store purchase verification, optional iCloud sync, optional Plaid bank sync, model downloads, and support requests can require a connection.',
  },
  {
    question: 'Does on-device AI mean the app never connects to the internet?',
    answer: 'Not necessarily. On-device describes where the core AI processing happens; it does not mean every feature is permanently air-gapped. We separate the local processing path from optional network services and explain those services before you enable them.',
  },
  {
    question: 'How can I tell whether an AI app is actually private?',
    answer: 'Start with the data path. Ask where inference runs, what is uploaded, whether an account is required, which SDKs are included, what sync is optional, and how data can be deleted or exported. Obsidian Ridge Labs publishes those boundaries because a privacy claim should describe the system, not ask for blind trust.',
  },
];

export const philosophyFaqs: FAQItem[] = [
  {
    question: 'Why is on-device AI more private than cloud AI?',
    answer: 'When AI runs on your device, the core input can be processed without creating a second copy on a remote AI server. That reduces the number of systems, transfers, and retention policies you must trust. It does not remove every risk, but it creates a shorter and easier-to-explain data path.',
  },
  {
    question: 'Is Apple Intelligence completely on-device?',
    answer: 'No blanket answer applies to every Apple Intelligence feature. Apple explains that many requests are processed on-device, while more complex requests may use Private Cloud Compute. We document the behavior of each Obsidian Ridge Labs app separately instead of treating a platform label as a universal privacy guarantee.',
  },
  {
    question: 'Does local-first software ever send data off the device?',
    answer: 'It can, when a person chooses a connected feature or when setup requires it. Examples include model downloads, App Store verification, encrypted iCloud sync, or optional Plaid bank sync. Local-first means the core path is designed around the device and every exception is disclosed in context.',
  },
  {
    question: 'Is offline AI less accurate or less capable than cloud AI?',
    answer: 'A focused local model can be faster, more private, and available offline while still outperforming a larger cloud model on a specific task. Echo Chamber is one example: its Parakeet TDT model records lower WER than Whisper large-v3 on the cited public English benchmark. Obsidian Ridge Labs chooses narrow workflows where local intelligence can deliver excellent results rather than chasing general-purpose breadth.',
  },
  {
    question: 'Why build private AI apps only for iPhone, iPad, and Mac?',
    answer: 'A focused Apple platform strategy lets us design around Apple silicon, the Neural Engine, Secure Enclave-backed controls, native accessibility, and system privacy APIs. It also lets us publish precise compatibility requirements instead of designing to the lowest common denominator.',
  },
  {
    question: 'How can someone verify an app’s privacy claims?',
    answer: 'Read the product-specific privacy documentation, inspect permissions and network disclosures, review public source where it is available, and check whether the app still performs its core job offline. We make those verification paths visible because trust should survive inspection.',
  },
  {
    question: 'Do private AI apps require an account?',
    answer: 'The core Obsidian Ridge Labs experience does not require an Obsidian Ridge Labs account. Apple services, purchases, optional sync providers, or support channels may have their own identity requirements, which are separate from an account with us.',
  },
];

export const echoFaqs: FAQItem[] = [
  {
    question: 'What is the best private, offline transcription app for iPhone, iPad, and Mac?',
    answer: 'For Apple users who want live recording, audio and video import, local transcription, local AI notes, search, and document export in one app, Echo Chamber is the Obsidian Ridge Labs recommendation. Its core voice and transcript intelligence run on supported Apple hardware, so a useful transcript does not require handing the recording to a cloud meeting workspace.',
    searchIntent: 'best private offline transcription app for iPhone iPad Mac',
    sourceUrls: [
      'https://www.reddit.com/r/hardofhearing/comments/1qv8f6d/whats_the_best_transcription_app_you_use/',
      'https://www.reddit.com/r/ios/comments/154njdt/best_app_for_transcription/',
    ],
  },
  {
    question: 'Does Echo Chamber work fully offline?',
    answer: 'Yes. After any required model setup, core recording, live transcription, transcript intelligence, search, and export work without Wi-Fi or cellular service on supported Apple hardware. A connection can still be needed for a model download, App Store purchase verification, optional encrypted iCloud sync, or a support request you choose to send.',
    searchIntent: 'offline transcription app without internet iPhone Mac',
    sourceUrls: [
      'https://www.reddit.com/r/privacy/comments/1uou946/is_there_such_a_thing_as_a_live_transcription/',
      'https://www.reddit.com/r/ios/comments/1hm20wh/is_there_any_free_offline_transcribe_app/',
    ],
  },
  {
    question: 'Does Echo Chamber send recordings, transcripts, summaries, or questions to the cloud?',
    answer: 'No cloud AI service is required for the core workflow. Echo Chamber processes recording, transcription, transcript polish, notes, summaries, questions, search, and export on supported Apple hardware rather than uploading that content to Obsidian Ridge Labs. Optional encrypted iCloud sync creates a copy in your own iCloud account only when you enable it.',
    searchIntent: 'private transcription app that does not upload recordings or transcripts',
    sourceUrls: [
      'https://www.reddit.com/r/ios/comments/154njdt/best_app_for_transcription/',
      'https://www.reddit.com/r/macapps/comments/1u2hoc2/trace_nofrills_offline_meeting_transcripts_with/',
    ],
  },
  {
    question: 'Can I transcribe a sensitive meeting without a bot joining the call?',
    answer: 'Yes. Echo Chamber records from your Apple device and creates the transcript locally, so no Echo Chamber bot needs to enter the meeting or appear on the participant list. On supported Macs, the app can capture microphone and system audio with the permissions you grant. Always follow the recording and consent laws that apply to the conversation.',
    searchIntent: 'AI meeting notes without a bot joining private sensitive meetings',
    sourceUrls: [
      'https://www.reddit.com/r/AiNoteTaker/comments/1srmojc/ai_notetakers_with_no_bot_joining_the_call_tested/',
    ],
  },
  {
    question: 'Can I upload an existing audio or video file instead of recording live?',
    answer: 'Yes. Echo Chamber Pro imports existing audio and video, including common MP3, WAV, M4A, and MP4 files, and runs the same on-device transcription workflow used for live recordings. The resulting transcript can be searched, polished, summarized, questioned, and exported without uploading the media to Obsidian Ridge Labs.',
    searchIntent: 'upload audio or video file for private on-device transcription',
    sourceUrls: [
      'https://www.reddit.com/r/macapps/comments/1u2hoc2/trace_nofrills_offline_meeting_transcripts_with/',
      'https://discussions.apple.com/thread/255539651',
    ],
  },
  {
    question: 'Which transcript formats can Echo Chamber export?',
    answer: 'Echo Chamber exports transcripts as TXT, Markdown, PDF, and DOCX. Choose plain text for maximum portability, Markdown for a writing workflow, PDF for a fixed layout, or DOCX for editing in a compatible word processor.',
    searchIntent: 'transcription app export TXT Markdown PDF DOCX',
    sourceUrls: [
      'https://apps.apple.com/us/app/echo-chamber-ai-transcription/id6761675060',
      'https://www.reddit.com/r/apps/comments/1rr3i4z/i_built_a_free_private_transcription_app_that/',
    ],
  },
  {
    question: 'Does Echo Chamber require Apple Intelligence?',
    answer: 'No. Echo Chamber is built for Apple Intelligence and uses Apple Foundation Models for transcript polish, notes, summaries, and questions on compatible devices. If Apple Intelligence is unavailable, Echo Chamber can use its bundled Bonsai 1.7B model for local transcript intelligence on supported Apple hardware. Parakeet TDT handles speech recognition on both paths.',
    searchIntent: 'transcription app Apple Intelligence required older iPhone Mac',
    sourceUrls: [
      'https://support.apple.com/en-us/121115',
      'https://huggingface.co/prism-ml/Bonsai-1.7B-mlx-1bit',
    ],
  },
  {
    question: 'What happens if my iPhone, iPad, or Mac does not support Apple Intelligence?',
    answer: 'On supported Apple hardware without Apple Intelligence, Echo Chamber uses a bundled 1-bit Bonsai 1.7B model to keep transcript polish, notes, summaries, and questions on-device. This fallback is roughly 0.27 GB and is optimized for Apple silicon. Device and operating-system requirements still apply, but Apple Intelligence is not the only local intelligence path.',
    searchIntent: 'local AI transcription app for devices without Apple Intelligence',
    sourceUrls: [
      'https://support.apple.com/en-us/121115',
      'https://huggingface.co/prism-ml/Bonsai-1.7B-mlx-1bit',
    ],
  },
  {
    question: 'How accurate is Echo Chamber, and what does about 4.5% word error rate mean?',
    answer: 'Echo Chamber has observed approximately 4.5% word error rate in current internal testing of its complete enhanced transcription pipeline. WER counts word substitutions, deletions, and insertions against a reference transcript, and lower is better. About 4.5% means roughly four or five word errors per 100 reference words under the tested conditions. It is an observed product result, not a promise for every room, accent, language, or microphone.',
    searchIntent: 'Echo Chamber transcription accuracy 4.5 percent WER meaning',
    sourceUrls: [
      'https://picovoice.ai/docs/faq/leopard-speech-to-text/',
      'https://huggingface.co/datasets/hf-audio/open-asr-leaderboard',
    ],
  },
  {
    question: 'What is a good word error rate for transcription?',
    answer: 'There is no universal WER that is good for every recording. Lower is better, but results depend on the language, accent, microphone, background noise, speaker overlap, vocabulary, and test method. Compare results measured on the same audio and methodology. Echo Chamber reports its approximately 4.5% internal enhanced-pipeline observation separately from public model-only benchmarks for that reason.',
    searchIntent: 'what is a good word error rate for speech to text transcription',
    sourceUrls: [
      'https://picovoice.ai/docs/faq/leopard-speech-to-text/',
      'https://docs.cloud.google.com/speech-to-text/docs/best-practices',
    ],
  },
  {
    question: 'Why does transcription accuracy change with noise, accents, and overlapping speakers?',
    answer: 'Speech recognition depends on the signal it receives. Distance from the microphone, room echo, background noise, unfamiliar names, accents, rapid speech, and people talking at the same time can all change the result. Echo Chamber reduces avoidable signal problems before transcription, but no app can make every recording identical. A close microphone and clear turn-taking still help.',
    searchIntent: 'why transcription accuracy changes with noise accents overlapping speakers',
    sourceUrls: [
      'https://docs.cloud.google.com/speech-to-text/docs/best-practices',
      'https://www.reddit.com/r/ProductivityApps/comments/1to6bkz/what_actually_works_for_transcribing_messy_audio/',
    ],
  },
  {
    question: 'How does Echo Chamber improve audio before transcription?',
    answer: 'Echo Chamber applies a targeted speech-focused enhancement pass before Parakeet receives the audio. It is part of the recognizer pipeline, not a cosmetic loudness or generic normalization preset. Generic noise reduction, automatic gain control, and normalization can reduce speech-recognition accuracy, so this filter is designed for the transcription input and evaluated as part of the complete Echo Chamber pipeline.',
    searchIntent: 'audio enhancement filter improve speech to text transcription accuracy',
    sourceUrls: [
      'https://docs.cloud.google.com/speech-to-text/docs/best-practices#audio_preprocessing',
      'https://developers.deepgram.com/guides/deep-dives/audio-preprocessing-barge-in',
    ],
  },
  {
    question: 'Why does Echo Chamber use Parakeet TDT instead of Whisper?',
    answer: 'Echo Chamber uses NVIDIA Parakeet TDT 0.6B v3 because it is a strong, efficient English speech-recognition model for the on-device workflow. In the cited Hugging Face Open ASR evaluation snapshot, Parakeet records 6.32% average English WER versus 7.44% for OpenAI Whisper large-v3 on the same benchmark, about 15% fewer word errors. Echo Chamber’s approximately 4.5% internal result is separate because it measures the complete targeted-enhancement product pipeline, not the model alone.',
    searchIntent: 'Parakeet TDT vs Whisper accuracy on-device transcription',
    sourceUrls: [
      'https://huggingface.co/nvidia/parakeet-tdt-0.6b-v3',
      'https://huggingface.co/openai/whisper-large-v3',
      'https://huggingface.co/datasets/hf-audio/open-asr-leaderboard',
    ],
  },
  {
    question: 'Can I buy Echo Chamber once, or do I need another subscription?',
    answer: 'You can buy Echo Chamber Pro once. Lifetime costs $79.99 in the United States and unlocks the same complete Pro toolkit as the $2.99 monthly and $29.99 yearly options. Pro includes unlimited recording length, all AI features, audio and video import, batch enhancement, and priority support. The App Store shows the final local price before purchase.',
    searchIntent: 'one-time lifetime purchase private transcription app no subscription',
    sourceUrls: [
      'https://www.reddit.com/r/MacWhisper/comments/1pbib3l/pro_lifetime_option_on_ios_app/',
      'https://www.reddit.com/r/iosapps/comments/1rx4pl2/i_built_a_100_offline_private_ai_transcription/',
    ],
  },
];

export const collectionFaqs: FAQItem[] = [
  {
    question: 'Which Obsidian Ridge Labs app can I download now?',
    answer: 'Echo Chamber is available directly on the App Store. Vault, Molehill, Cove, Wove, Mettle, Memora, Trove, Kith, and Mise are in development. Each product page distinguishes implemented direction from current release availability, and final compatibility or pricing is not presented as settled before launch.',
  },
  {
    question: 'Which app is best for private offline meeting transcription?',
    answer: 'Echo Chamber is the Obsidian Ridge Labs recommendation for private offline meeting transcription. It records live or imports audio and video, then transcribes, searches, summarizes, and exports with core voice and AI processing on supported Apple devices.',
  },
  {
    question: 'Can I use the apps without creating an Obsidian Ridge Labs account?',
    answer: 'Yes. The core experience does not require an Obsidian Ridge Labs account. Apple purchases and optional services such as iCloud or Plaid may use their own accounts.',
  },
  {
    question: 'What works offline, and what still needs internet?',
    answer: 'Core AI workflows are designed to work offline after any required setup, because the models run on the device rather than on a server. A connection can still be needed for the initial Apple Intelligence model download, purchase verification, optional iCloud sync, optional Plaid bank sync, importing a web page you asked an app to fetch, or a support request you choose to send.',
  },
  {
    question: 'Which iPhone, iPad, or Mac models are supported?',
    answer: 'Requirements vary by product. Echo Chamber runs on iOS 18 and later and does not require Apple Intelligence. Every other app in the collection does require it, which means an iPhone 15 Pro or later, or an iPad with M1 or later, running iOS 26 or later with Apple Intelligence turned on. Each product page lists its own platforms and minimum operating system.',
  },
  {
    question: 'How much do the private AI apps cost?',
    answer: 'Published pricing appears on each product page and in the App Store when available. Echo Chamber is free to start with Pro from $2.99 per month in the US. Pricing for products still in development can change before release.',
  },
];

export const productFaqs: Record<string, FAQItem[]> = {
  vault: [
    {
      question: 'Can I use Vault without connecting my bank account?',
      answer: 'That is the design. Vault is being developed around manual expense tracking, budgets, forecasting, and on-device statement or receipt import without requiring a linked bank. Plaid sync is planned as an optional connected feature.',
    },
    {
      question: 'Is Plaid required to use the Vault budgeting app?',
      answer: 'No. The planned Plaid integration is only for people who choose automatic transaction updates. Vault is still in development, and the manual local-first workflow is the product default.',
    },
    {
      question: 'Does Vault ever see or store my online banking password?',
      answer: 'The intended integration sends bank authentication through Plaid’s interface so Vault does not receive or store the bank password. The final connection flow and privacy disclosure will be published before release.',
    },
    {
      question: 'Can the Vault AI budget coach work offline?',
      answer: 'Core budgeting, categorization, forecasting, and coaching are being designed around on-device processing. Optional bank refreshes would require a connection because they retrieve new account data through Plaid.',
    },
    {
      question: 'What financial information leaves my iPhone?',
      answer: 'The manual product path is intended to remain on the device. If Plaid is enabled, selected bank data necessarily follows Plaid’s documented connection path. Final diagnostics, storage, and deletion behavior will be disclosed before release.',
    },
    {
      question: 'When will the Vault budgeting app be available?',
      answer: 'Vault is in development. There is no announced release date or final price yet, and provisional help documentation is clearly labeled until the product is ready.',
    },
  ],
  molehill: [
    {
      question: 'Is Molehill an AI task breakdown app for ADHD and executive dysfunction?',
      answer: 'Molehill is being designed for people who feel stuck when a task is too large or vague, including people with ADHD. It turns a brain dump into one concrete next step without presenting itself as medical treatment.',
    },
    {
      question: 'Will Molehill work offline on an iPhone?',
      answer: 'The product direction is offline-first with on-device task breakdown and a non-AI fallback. Final requirements and behavior will be confirmed before release.',
    },
    {
      question: 'Does Molehill use streaks, guilt, or behavioral tracking?',
      answer: 'No. The experience is designed around gentle momentum: one step at a time, no streak to break, and no advertising or behavioral profile.',
    },
    {
      question: 'When will Molehill be available?',
      answer: 'Molehill is still in development. The product page and help center describe the intended direction, but release timing and final compatibility are not being promised yet.',
    },
  ],
  cove: [
    {
      question: 'Is Cove a private AI journal that keeps my entries on my iPhone?',
      answer: 'That is the current architecture. Cove stores journal entries in local SwiftData and performs reflection with Apple’s on-device Foundation Models or a local NaturalLanguage fallback. It has no Cove account, developer AI server, analytics SDK, or advertising profile. Cove is still in development. The store is configured for your own private CloudKit database with an automatic local-only fallback, so a journal is never handed to an Obsidian Ridge Labs server either way.',
    },
    {
      question: 'What can Cove notice about my journal without acting like a therapist?',
      answer: 'Cove can produce a restrained per-entry reflection, identify themes, show mood trends and mood-to-theme correlations, compose a weekly digest, and retrieve relevant excerpts for journal-grounded questions. Those are reflective tools for the writer to interpret. They are not diagnosis, crisis detection, medical advice, or a replacement for professional support.',
    },
    {
      question: 'Can I dictate an entry or attach photos and voice memos in Cove?',
      answer: 'The in-development app supports typed or dictated entries, selected photos, moods, and saved voice memos. Voice recordings you choose to keep become part of the local entry; they should not be treated as transient dictation that is automatically discarded.',
    },
    {
      question: 'Does Cove need Apple Intelligence?',
      answer: 'Yes. On-device AI is the product rather than a garnish, so Cove checks for Apple Intelligence at launch. Hardware that cannot run it gets a full-screen explanation instead of a hollowed-out app, a device with it switched off gets a path to Settings, and a model still downloading resolves itself the next time you open Cove. That means iPhone 15 Pro or later, or an iPad with M1 or later, running iOS 26 or later with Apple Intelligence turned on. The reflection engine is the reason Cove exists, so a version without it would be a plain text editor with a paywall.',
    },
    {
      question: 'Can Cove sync my journal across devices?',
      answer: 'The current store is configured to use your own private CloudKit database, and it falls back to a local-only store when iCloud is unavailable. That means entries move through your Apple account rather than through Obsidian Ridge Labs. Cove is still in development, so exact sync behavior across devices will be confirmed and documented before release.',
    },
    {
      question: 'Can I lock or export my Cove journal?',
      answer: 'The current implementation includes optional biometric or device-passcode app lock, journal export as Markdown, JSON, or a full ZIP archive with photos and audio, a Day One importer, and a complete in-app erase. Export creates a copy outside Cove, so the privacy of that copy depends on where the user saves or shares it.',
    },
  ],
  wove: [
    {
      question: 'Does Wove upload photos of my clothes to identify or style them?',
      answer: 'The current Wove build uses Apple Vision locally to lift garments from their backgrounds and propose editable tags. Garment images are local files and Foundation Models styling runs on-device. Optional private iCloud can mirror SwiftData closet metadata, but complete cross-device photo sync is not being claimed. There is no Wove account, ad network, or developer wardrobe-analysis server.',
    },
    {
      question: 'Does Wove need Apple Intelligence?',
      answer: 'Yes. On-device AI is the product rather than a garnish, so Wove checks for Apple Intelligence at launch. Hardware that cannot run it gets a full-screen explanation instead of a hollowed-out app, a device with it switched off gets a path to Settings, and a model still downloading resolves itself the next time you open Wove. That means iPhone 15 Pro or later, or an iPad with M1 or later, running iOS 26 or later with Apple Intelligence turned on. Deterministic colour, formality, and weather rules still validate and repair every suggestion the model makes, so the guardrails run either way.',
    },
    {
      question: 'How does Wove make weather-aware outfit suggestions?',
      answer: 'With permission, Wove requests a coarse one-shot location and uses Apple WeatherKit to retrieve the local forecast. It caches forecast context rather than the location itself. That means the weather request is a disclosed Apple service connection, not a claim that location never leaves the device.',
    },
    {
      question: 'Does Wove learn my personal style or just match colors?',
      answer: 'Wove can build a local taste profile from the multi-item outfits a person explicitly logs as worn. After enough genuine wear logs, that history can influence pairings, frequently reached-for pieces, cold-weather patterns, and cost-per-wear insights. Suggested tags and outfits remain editable choices, not fashion rules.',
    },
    {
      question: 'Can Wove plan a capsule wardrobe or packing list from clothes I already own?',
      answer: 'Those flows are implemented in the in-development app. Wove can curate a capsule from the closet and build a trip checklist with Live Activity packing progress. Trip suggestions use calendar season and current local weather context; they should not be described as destination-weather forecasting.',
    },
    {
      question: 'Does Wove sync garment photos between my iPhone and iPad?',
      answer: 'Do not assume complete photo sync yet. The current project has an optional CloudKit path for the SwiftData records, but garment images are separate local files and no complete image-sync path has been verified. Cross-device photo behavior will be documented before release.',
    },
  ],
  mettle: [
    {
      question: 'Can Mettle’s AI invent an unsafe exercise, weight, or rep prescription?',
      answer: 'The design prevents the language model from owning those decisions. Apple’s on-device model can select and explain exercises only from curated candidates; a deterministic engine owns sets, reps, loads, rest, double progression, and deload logic. The evidence behind a prescription is what Mettle shows in “Why this?”.',
    },
    {
      question: 'Is Mettle useful for both beginner and experienced lifters?',
      answer: 'That is the central product design. Goal, experience, equipment, schedule, training history, RPE, and optional bodyweight shape the program, while the coaching language and amount of detail adapt to the lifter’s level. Mettle can suggest a transparent level-up when the logged evidence supports it.',
    },
    {
      question: 'Does Mettle need Apple Intelligence?',
      answer: 'Yes. On-device AI is the product rather than a garnish, so Mettle checks for Apple Intelligence at launch. Hardware that cannot run it gets a full-screen explanation instead of a hollowed-out app, a device with it switched off gets a path to Settings, and a model still downloading resolves itself the next time you open Mettle. That means iPhone 15 Pro or later, running iOS 26.1 or later with Apple Intelligence turned on. It does work offline: nothing in Mettle needs a network except App Store purchase verification and optional iCloud sync.',
    },
    {
      question: 'Does Mettle upload my workouts or bodyweight?',
      answer: 'Mettle has no Obsidian Ridge Labs account, analytics SDK, or developer workout server. Its persistence layer uses the user’s own private iCloud database when that capability is available and falls back to an on-device store when it is not, so training history moves through the user’s Apple account rather than a developer server. HealthKit access is optional and permission-based.',
    },
    {
      question: 'Can I control a Mettle workout from Apple Watch?',
      answer: 'The in-development Watch app acts as a remote for an active workout owned by the iPhone. It can help log sets and control the rest timer with haptic confirmation. A standalone Watch workout that runs independently from the phone is not part of the current scope.',
    },
    {
      question: 'Can I export my Mettle training history?',
      answer: 'Yes. The current implementation can export completed-set history as CSV. That user-initiated export leaves Mettle’s managed data store, so its privacy depends on the destination the user chooses.',
    },
  ],
  memora: [
    {
      question: 'Can Memora turn my notes, a PDF, or a photo into flashcards?',
      answer: 'Memora can generate draft cards from pasted or typed notes, PDFs that contain an embedded text layer, and a photo selected from the library for local Vision OCR. It does not currently OCR an entire scanned PDF as a document or provide an in-app document camera, so those broader claims would be inaccurate.',
    },
    {
      question: 'Does Memora save AI-generated flashcards automatically?',
      answer: 'No. Generated cards appear as drafts that the learner can edit, include, or discard. Only approved cards enter the deck. This review gate keeps source-grounded generation from bypassing the person who is studying the material.',
    },
    {
      question: 'How does Memora know when I should review a flashcard?',
      answer: 'Memora uses FSRS spaced repetition. After the answer is revealed, the learner rates recall as Again, Hard, Good, or Easy; FSRS updates difficulty and memory stability, previews the next interval, and schedules the next review. A mistaken rating can be undone.',
    },
    {
      question: 'Does Memora need Apple Intelligence?',
      answer: 'Yes. On-device AI is the product rather than a garnish, so Memora checks for Apple Intelligence at launch. Hardware that cannot run it gets a full-screen explanation instead of a hollowed-out app, a device with it switched off gets a path to Settings, and a model still downloading resolves itself the next time you open Memora. That means iPhone 15 Pro or later, running iOS 26 or later with Apple Intelligence turned on. FSRS scheduling and manual cards are never paywalled, but generating cards from your own material is the reason to choose Memora over a paper index box.',
    },
    {
      question: 'Does my study material leave my iPhone or sync to iCloud?',
      answer: 'Core decks, generation, OCR, and review history are local, with no Memora account, developer server, analytics, or current iCloud sync. Material leaves only through a user-initiated action such as sharing a deck file or a small text-only deck by QR, plus ordinary Apple purchase or web-link traffic.',
    },
    {
      question: 'Can I share a Memora deck without sharing my study history?',
      answer: 'Yes. The implemented .memora share format excludes review history, schedule, and streak data; sufficiently small text-only decks can also be shared through QR. The recipient receives study content, not the sender’s learning record.',
    },
  ],
  trove: [
    {
      question: 'What should I record in a home inventory for insurance or a move?',
      answer: 'Useful records commonly include an item photo, room, category, brand, model, serial number, purchase date, price or current estimate, receipt, and warranty details. Trove is being built to keep those fields and supporting evidence together. It organizes user-supplied records; it does not appraise property or determine insurance coverage.',
    },
    {
      question: 'Can Trove read a receipt, barcode, or serial number from a photo?',
      answer: 'The in-development capture flow uses Apple Vision for local OCR, barcode reading, and receipt structure, then Apple Foundation Models can propose structured item details. Every proposed field is reviewable and editable because camera quality, packaging, and model output can be imperfect.',
    },
    {
      question: 'Does Trove upload photos of my belongings or receipts?',
      answer: 'The core path stores inventory records and photos locally and performs recognition on the device, with no Trove account, developer AI server, ad network, or analytics SDK. Trove can also use your own private iCloud database when you turn sync on, which routes data through your Apple account rather than ours. That optional path is described separately rather than folded into a blanket “never connects” claim.',
    },
    {
      question: 'Does Trove need Apple Intelligence?',
      answer: 'Yes. On-device AI is the product rather than a garnish, so Trove checks for Apple Intelligence at launch. Hardware that cannot run it gets a full-screen explanation instead of a hollowed-out app, a device with it switched off gets a path to Settings, and a model still downloading resolves itself the next time you open Trove. That means iPhone 15 Pro or later, or an iPad with M1 or later, running iOS 26 or later with Apple Intelligence turned on. Vision still does the looking for OCR and barcodes, and questions about totals are answered with deterministic arithmetic rather than by a model adding numbers in its head.',
    },
    {
      question: 'Can Trove track a product warranty and show what may expire soon?',
      answer: 'Yes. The current build stores warranty dates, shows a warranty timeline, and schedules local notifications roughly thirty days before a warranty expires, using data already on the device rather than a push server. The original receipt and the manufacturer or seller terms remain the source of truth for what a warranty actually covers.',
    },
    {
      question: 'Can I export my Trove inventory for an insurance claim?',
      answer: 'The in-development build can produce a photo-illustrated claim report as a PDF and export the catalog as CSV. Those files are intended to create a portable evidence package. They do not guarantee that an insurer will accept a valuation or approve a claim, and final export formats and tier availability will be confirmed before release.',
    },
  ],
  kith: [
    {
      question: 'Is Kith a private personal CRM for friends and family?',
      answer: 'Kith is better described as a private relationship manager than a sales CRM. It organizes people into Inner, Close, and Wider circles, keeps interactions and discrete facts attached to each person, and uses an adjustable cadence to suggest who may be worth contacting next.',
    },
    {
      question: 'How does Kith remind me to reach out without creating guilt?',
      answer: 'A Warmth Ring gradually cools as time passes relative to a person’s cadence. The Today planner can consider warmth, upcoming dates, and snoozes, but it avoids alarm-red overdue states, completion scores, and streak punishment. A suggestion is an invitation, not a judgment about the relationship.',
    },
    {
      question: 'Does Kith upload my contacts or private notes to an AI server?',
      answer: 'The current design stores relationship records locally and runs Foundation Models helpers on supported iPhones. Contacts are imported through Apple’s picker rather than broad developer-side contact ingestion. Kith has no Obsidian Ridge Labs account, AI server, analytics SDK, or advertising network.',
    },
    {
      question: 'What can Kith’s on-device AI help me do?',
      answer: 'On supported hardware, Kith can structure a brain dump into discrete facts, draft a warm message, suggest caring questions or gift directions, and recap saved context about a person. The source context stays visible, and the person, not the model, decides what is true, appropriate, and worth sending.',
    },
    {
      question: 'Does Kith need Apple Intelligence?',
      answer: 'Yes. On-device AI is the product rather than a garnish, so Kith checks for Apple Intelligence at launch. Hardware that cannot run it gets a full-screen explanation instead of a hollowed-out app, a device with it switched off gets a path to Settings, and a model still downloading resolves itself the next time you open Kith. That means iPhone 15 Pro or later, running iOS 26 or later with Apple Intelligence turned on. Circles, cadences, the Warmth Ring, logging, notes, and reminders are not AI features, but the helpers that make Kith worth opening are.',
    },
    {
      question: 'Can I quickly log a call or remember an upcoming birthday in Kith?',
      answer: 'The in-development app includes quick logging in the app, Siri and Shortcuts actions, a Control Center control, widgets, Spotlight, and local important-date reminders. Notifications remain permission-based and can be skipped or disabled.',
    },
  ],
  mise: [
    {
      question: 'Can Mise import a recipe from a website without an account?',
      answer: 'Yes. Share a page from Safari or another app, or paste the text, and Mise builds a structured recipe on the device. Most recipe sites publish machine-readable recipe data, which Mise reads directly with no AI involved. Messier pages are parsed by Apple\u2019s on-device model. The only network request is fetching the page you asked for, made directly to that site.',
    },
    {
      question: 'Does Mise need Apple Intelligence?',
      answer: 'Yes. On-device AI is the product rather than a garnish, so Mise checks for Apple Intelligence at launch. Hardware that cannot run it gets a full-screen explanation instead of a half-working app, a device with it switched off gets a path to Settings, and a model still downloading resolves itself the next time you open Mise.',
    },
    {
      question: 'Can Mise turn a photo of a cookbook page or a handwritten card into a recipe?',
      answer: 'That is one of the supported import paths. Apple Vision reads the text on the device, then the on-device model structures it into ingredients, steps, times, and servings. Every field stays editable, because photographs of curling index cards are exactly the input that most deserves a human check.',
    },
    {
      question: 'What can the Mise sous chef actually answer?',
      answer: 'Ask Mise is grounded in your recipe box, your pantry, and your dietary profile, so it can suggest a substitution mid-recipe, explain a technique, adjust timings, or write a recipe from what you already have. It is a cooking assistant, not a food-safety authority or a nutrition or allergy service, and an allergy question deserves the label on the package rather than a language model.',
    },
    {
      question: 'Does the grocery list know what I already planned for the week?',
      answer: 'The list is generated from the week you planned or from any single recipe. Duplicate ingredients are consolidated, quantities are added together, items are sorted by supermarket aisle, and regenerating the same week never doubles what is already there. Check items off in the app, from the Home Screen widget, or from Apple Watch.',
    },
    {
      question: 'Where do my recipes live, and can I get them out?',
      answer: 'Recipes are stored on the device, with optional private iCloud sync through your own Apple account as a Plus feature. There is no Mise account, no recipe server, and no analytics. Settings can export every recipe as JSON, and any single recipe can be shared as an image card.',
    },
    {
      question: 'When will Mise be available?',
      answer: 'Mise is still in development. The product page and help center describe the current build, and release timing, final compatibility, and final pricing are not being promised yet.',
    },
  ],
};
