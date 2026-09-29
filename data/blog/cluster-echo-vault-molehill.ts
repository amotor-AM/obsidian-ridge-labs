import type { BlogPost } from '../../types';

export const echoVaultMolehillPosts: BlogPost[] = [
  {
    id: 'otter-vs-echo',
    title: "Echo Chamber vs Otter: Recording Library or Team Workspace?",
    seoTitle: "Echo Chamber vs Otter: Recording Library or Team Workspace?",
    date: '2026.02.03',
    modified: "2026.09.28",
    readTime: "6 MIN READ",
    category: 'TRANSCRIPTION APP COMPARISON',
    tags: ['#ECHO-CHAMBER', '#OTTER-AI', '#TRANSCRIPTION', '#PARAKEET', '#PRIVACY'],
    excerpt: "Echo Chamber keeps recording, search, notes, and transcript questions on your Apple device. Compare that personal workflow with Otter’s shared meeting workspace.",
    seoDescription: "Echo Chamber keeps recording, search, notes, and transcript questions on your Apple device. Compare that personal workflow with Otter’s shared meeting workspace.",
    contentType: 'comparison',
    appId: 'echochamber',
    searchIntent: 'Is Echo Chamber a private Otter.ai alternative for recording meetings or transcribing an existing audio or video file?',
    keyTakeaways: [
      "Echo Chamber connects live recording and file import to searchable transcripts, bookmarks, local notes, summaries, and questions about what was said.",
      "Otter’s meeting bots, integrations, shared access, and administration suit team workflows; speech processing happens in its cloud service.",
      "Test both with a recording like your own. Names, numbers, background noise, and overlapping voices matter more than a model’s leaderboard position."
    ],
    relatedIds: ['best-offline-transcription-apps', 'apple-ecosystem-privacy', 'offline-ai-revolution'],
    blocks: [
      {
        type: 'answer',
        title: "Choose around what happens after the conversation",
        content: "Echo Chamber is a strong fit when you want to record a conversation, find the exact passage later, and turn it into useful notes without uploading it for AI processing. Otter is built around a shared meeting service, with bots, integrations, and team controls. The decision is whether your recordings belong in a personal library on your Apple devices or a workspace other people need to use with you.",
      },
      {
        type: 'paragraph',
        content: "The meeting ends, but the work usually does not. You may need the decision someone made, the phrase you want to quote, or a short set of notes to send afterward. That is the work to compare. Echo Chamber keeps those follow-up tools with your recording; Otter places them in a collaborative meeting service. This guide compares documented features, not measured transcription accuracy.",
      },
      {
        type: 'comparison',
        caption: 'Echo Chamber and Otter.ai solve different transcription jobs',
        columns: ['Decision', 'Echo Chamber', 'Otter.ai'],
        rows: [
          { label: 'Core processing', cells: ["Speech recognition and transcript intelligence run on supported Apple hardware after required model setup.", 'Otter’s official accuracy FAQ describes the service as entirely cloud-based.'] },
          { label: 'Live capture', cells: ['Records in the app and produces a searchable local transcript.', 'Records in its apps and can join supported online meetings through its cloud workflow.'] },
          { label: 'Existing files', cells: ["Import an existing audio or video file for local processing. Check the current app for supported formats and plan limits.", 'Imports many audio and video formats; the file is uploaded and processed to create transcripts and AI meeting content.'] },
          { label: 'Collaboration', cells: ['Centered on a private personal archive and user-initiated exports.', 'Built around accounts, workspaces, sharing, AI Chat, meeting templates, and team administration.'] },
          { label: 'Accuracy evidence', cells: ["No directly comparable product-level accuracy result is established here. Test a representative recording.", "Otter publishes guidance about factors that affect accuracy. No head-to-head result is established here."] },
          { label: 'Price model', cells: ["Free to download with optional Pro. The App Store and in-app purchase screen show the current offer.", 'Free Basic tier; paid Pro, Business, and Enterprise plans with limits and collaboration features that change by plan.'] },
        ],
      },
      {
        type: 'h2',
        content: "Keep the recording and the follow-up work together",
      },
      {
        type: 'paragraph',
        content: "In Echo Chamber, a live or imported recording becomes a searchable transcript. Bookmarks mark passages you want to return to; local transcript tools help produce notes, summaries, and answers from the conversation. You can then export the result. Recording and AI processing happen on supported Apple hardware, without sending the source audio to Obsidian Ridge Labs. Optional iCloud and exports create separate copies that you control.",
      },
      {
        type: 'paragraph',
        content: 'Otter makes a different trade. Its official documentation says the speech engine is cloud-based, and its terms explain that audio can be ingested by recording or upload, processed in cloud infrastructure, and delivered back through the service. Otter also documents AWS storage, server-side encryption, sharing controls, two-factor authentication, SOC 2 Type 2 controls, and deletion behavior. Those are meaningful cloud security measures; they are not the same claim as local inference. Echo Chamber minimizes remote exposure by keeping its core workflow on the Apple device, while a cloud workspace accepts additional copies in exchange for shared access.',
      },
      {
        type: 'h2',
        content: "Bring the recording you already have",
      },
      {
        type: 'paragraph',
        content: "Echo Chamber can process recordings made elsewhere. Import an audio or video file, then search, review, and use its transcript on your device. Check the current app for supported formats and allowance. Otter also accepts imported files, with its supported formats and plan limits documented in the help center; its speech processing takes place in the cloud.",
      },
      {
        type: 'h2',
        content: "Test the details you cannot afford to misquote",
      },
      {
        type: 'paragraph',
        content: "Word error rate counts substitutions, deletions, and insertions relative to a reference transcript. The result only describes that test: its audio, language, model, preprocessing, and scoring rules. A model leaderboard cannot establish how an app will handle your meeting.",
      },
      {
        type: 'paragraph',
        content: "Use a short recording that resembles your actual work. Check names, numbers, technical terms, and overlapping speech against the audio. A transcript still needs review before you quote it or act on it.",
      },
      {
        type: 'callout',
        title: 'Accuracy is conditional',
        variant: 'note',
        content: 'Model choice matters, but so do distance from the microphone, noise, reverberation, overlapping speakers, specialized names, language, and the reference-transcript rules. Compare products on your own representative, consented test recording before relying on any average.',
      },
      {
        type: 'h2',
        content: "When a shared meeting workspace is the better fit",
      },
      {
        type: 'paragraph',
        content: "Otter’s paid plans add workspace membership, advanced meeting templates, AI chat across meetings, shared vocabulary, integrations, administrative controls, and meeting bots. Those features are useful when colleagues need to share and manage recordings in one service. Echo Chamber suits a different routine: record or import, revisit the words, make your notes, and choose what to share. You do not have to put the source recording in a vendor’s AI workspace to get that help.",
      },
      {
        type: 'list',
        content: [
          'CHOOSE BY DATA PATH: Decide whether the source recording can become a remote service copy before comparing interface polish.',
          'TEST THE REAL INPUT: Use a consented sample with the same room, accents, terminology, and speaker overlap as the work you plan to transcribe.',
          'CHECK IMPORT LIMITS: Confirm supported media, duration, file size, monthly quotas, and whether video means audio extraction or visual analysis.',
          'CHECK THE EXIT: Confirm transcript, timestamp, subtitle, document, and audio exports before building an archive.',
          'PLAN COLLABORATION: A local file is not automatically a shared workspace; a cloud workspace is not automatically the right home for every conversation.',
        ],
      },
      {
        type: 'faq',
        content: [
          { question: 'Is Echo Chamber an offline alternative to Otter.ai?', answer: "Echo Chamber can record, transcribe, search, and use local transcript tools on supported hardware after required setup. Features and allowances depend on the app version and device. It does not require uploading the recording to an external AI service." },
          { question: 'Can Echo Chamber transcribe an MP4 video or an existing audio recording?', answer: "Echo Chamber imports audio and video for local speech processing. Check the current import screen for accepted files and your plan allowance." },
          {
            "question": "How should I compare transcript accuracy?",
            "answer": "Try the same recording in both apps and listen back to the details that matter: names, numbers, technical terms, and overlapping voices. A model benchmark does not establish how the complete app will handle your conversation."
          },
          { question: 'Does Echo Chamber require Apple Intelligence?', answer: "Apple Intelligence is one supported route for transcript tools. Speech recognition and AI availability depend on your hardware, system version, and installed models. Check the requirements and model settings in the current app." },
          { question: 'Can I buy Echo Chamber without another subscription?', answer: "Echo Chamber offers optional Pro purchases. Open the App Store or the in-app purchase screen to compare the current subscription and lifetime options and their local prices." },
          { question: 'Does private transcription remove the need for recording consent?', answer: 'No. A local data path can reduce disclosure to a vendor, but it does not change the laws, workplace rules, professional duties, or human expectations that govern recording. Obtain the permission required for the context.' },
        ],
      },
      {
        type: 'sources',
        content: [
          'Otter: speech and transcription accuracy FAQ|https://help.otter.ai/hc/en-us/articles/360048322533-Speech-transcription-accuracy-FAQ',
          'Otter: import an audio or video file|https://help.otter.ai/hc/en-us/articles/360047733574-Import-an-audio-or-video-file',
          'Otter pricing and plan limits|https://otter.ai/pricing',
          'Otter privacy and security|https://otter.ai/privacy-security',
          'NVIDIA Parakeet TDT 0.6B v3 model card|https://huggingface.co/nvidia/parakeet-tdt-0.6b-v3',
          'Apple Intelligence device requirements|https://support.apple.com/en-us/121115',
          'Google Cloud Speech-to-Text audio preprocessing guidance|https://docs.cloud.google.com/speech-to-text/docs/best-practices',
          'OpenAI Whisper large-v3 model card|https://huggingface.co/openai/whisper-large-v3',
          'Hugging Face Open ASR Leaderboard|https://huggingface.co/spaces/hf-audio/open_asr_leaderboard',
        ],
      },
      {
        type: 'cta',
        content: "Try Echo Chamber with a conversation you need to remember. Record or import it, find a passage, and use the local transcript tools to make something useful from it. Download free; the App Store shows the current Pro options.",
        ctaAppId: 'echochamber',
      },
    ],
  },
  {
    id: 'best-offline-transcription-apps',
    title: "Five Transcription Apps for Private Recordings and Useful Notes",
    seoTitle: "Five Transcription Apps for Private Recordings and Useful Notes",
    date: '2026.07.11',
    modified: "2026.09.28",
    readTime: "7 MIN READ",
    category: 'PRIVATE TRANSCRIPTION GUIDE',
    tags: ['#OFFLINE-TRANSCRIPTION', '#PRIVATE-TRANSCRIPTION', '#VOICE-TO-TEXT', '#APPLE'],
    excerpt: "Compare Echo Chamber, MacWhisper, Aiko, Voice Memos, and Otter by the work you need: live capture, file transcription, local notes, or team meetings.",
    seoDescription: "Compare Echo Chamber, MacWhisper, Aiko, Voice Memos, and Otter by the work you need: live capture, file transcription, local notes, or team meetings.",
    contentType: 'listicle',
    appId: 'echochamber',
    searchIntent: 'What is the best private transcription app that works offline or processes audio on my iPhone, iPad, or Mac?',
    keyTakeaways: [
      "Choose Echo Chamber when you want to keep using a recording after transcription: find a passage, bookmark it, summarize it, ask a question, or export your notes.",
      "MacWhisper, Aiko, and Voice Memos cover different local workflows. Otter belongs on the shortlist when sharing and meeting automation outweigh the need for local processing.",
      "Try one representative file before committing. Check the transcript, export format, supported device, and any optional remote AI settings."
    ],
    relatedIds: ['otter-vs-echo', 'offline-ai-revolution', 'apple-ecosystem-privacy'],
    listItems: [
      { name: 'Echo Chamber', description: "Live and imported recordings become searchable transcripts, bookmarks, local notes, and answers you can use." },
      { name: 'MacWhisper', description: 'A deep Mac transcription workstation with local model choices, broad file support, batch tools, subtitles, automation, and optional cloud services.' },
      { name: 'Aiko', description: 'A focused Apple-platform Whisper app that favors accurate local file transcription and subtitle export over live transcription or speaker detection.' },
      { name: 'Apple Voice Memos', description: 'Built-in live and post-recording transcription on supported iPhones, with copy, search, optional iCloud, and Writing Tools summaries.' },
      { name: 'Otter.ai', description: 'A cloud-first meeting transcription and collaboration service with workspaces, bots, sharing, AI chat, and integrations.' },
    ],
    blocks: [
      {
        type: 'answer',
        title: "Start with the recording you need to use",
        content: "Echo Chamber brings live recording, imported files, searchable transcripts, and local notes into one Apple-device workflow. MacWhisper offers a deeper Mac transcription workbench; Aiko focuses on file transcription; Voice Memos covers built-in recording; Otter adds a shared cloud workspace. Start with the source you have and the result you need, then check where each step is processed.",
      },
      {
        type: 'paragraph',
        content: "A transcript can be the finished result, or the start of another piece of work. An interview may need quotations, a lecture may need study notes, and a team meeting may need shared follow-up. The apps below differ most in how far they take you after the words appear. Local processing matters too, especially when the recording contains something you would not ordinarily hand to another company.",
      },
      {
        type: 'comparison',
        caption: 'Five transcription tools by practical fit and data path',
        columns: ['App', 'Core fit and processing', 'Boundary to verify'],
        rows: [
          { label: 'Echo Chamber', cells: ["Live or imported recordings, searchable transcripts, local notes and answers, and export on supported Apple hardware.", "Check the current device requirements, local model setup, plan allowance, and storage/sync settings. No product-level accuracy ranking is established here."] },
          { label: 'MacWhisper', cells: ['Mac-centered local transcription with Whisper, Parakeet, Apple speech, batch processing, subtitles, speaker tools, dictation, CLI, and automation.', 'Optional cloud transcription, remote AI prompts, translation, and webhooks intentionally send selected data outside the local path.'] },
          { label: 'Aiko', cells: ['Focused local Whisper file transcription across iPhone, iPad, Mac, and Vision, with many languages and subtitle export.', 'The official listing says it favors accuracy over speed, does not transcribe live while recording, and lacks speaker detection.'] },
          { label: 'Voice Memos', cells: ['Built-in recording, live or later transcription, transcript search and copy on supported iPhones.', 'Language, device, and region availability apply; optional iCloud creates synced copies and advanced summaries require supported Apple Intelligence.'] },
          { label: 'Otter.ai', cells: ['Cloud meeting capture, imported files, speaker identification, AI chat, bots, workspaces, sharing, and integrations.', 'Audio is processed through cloud infrastructure; plan quotas and workspace permissions affect the practical boundary.'] },
        ],
      },
      {
        type: 'h2',
        content: "1. Echo Chamber: return to the conversation and work with it",
      },
      {
        type: 'paragraph',
        content: "Echo Chamber is for recordings you expect to revisit. Capture speech live or import audio or video, search the transcript, and bookmark passages worth keeping. Its local tools can turn the conversation into notes, summarize it, or answer questions from the transcript. You can move the result into your next piece of work through export. Available formats and individual features depend on the installed version and platform.",
      },
      {
        type: 'paragraph',
        content: "Accuracy varies with source quality, accent, language, terminology, and overlapping speakers. Listen back to important passages and correct the transcript before using it as a quotation or record. A model benchmark alone does not establish how a complete recording workflow performs.",
      },
      {
        type: 'paragraph',
        content: "Echo Chamber is free to download, with optional Pro. The App Store and in-app purchase screen show current prices and allowances. Its main fit is a personal Apple-device archive; someone who needs a browser workspace or centralized team administration should compare those requirements separately.",
      },
      {
        type: 'h2',
        content: "2. MacWhisper: a transcription workbench for Mac",
      },
      {
        type: 'paragraph',
        content: 'MacWhisper transcribes dragged-in audio and video, microphone recordings, meetings, podcasts, URLs, and watch folders. Its official site documents local models, more than 100 languages, speaker recognition, search, editing, batch work, subtitles, many export formats, dictation, a command-line tool, and integrations. The free Mac tier covers core transcription; the official page showed a €64 pay-once Pro license when checked. Its workstation depth is Mac-centered, while Echo Chamber provides a more unified private workflow across supported iPhone, iPad, and Mac hardware.',
      },
      {
        type: 'paragraph',
        content: 'MacWhisper’s privacy documentation is unusually explicit about optional paths. Default transcription and speaker identification can remain local after a model download. Choosing a cloud transcription provider sends audio to that provider; choosing a remote AI prompt service sends transcript text; DeepL translation sends text for translation; configured webhooks send transcript content to their destination. Local Ollama or LM Studio can keep prompts on the Mac. “MacWhisper is private” is therefore incomplete without naming which switches are enabled.',
      },
      {
        type: 'h2',
        content: "3. Aiko: a focused way to transcribe a file",
      },
      {
        type: 'paragraph',
        content: 'Aiko is a one-time-purchase Apple-platform app built by Sindre Sorhus. Its current US App Store listing describes OpenAI Whisper running locally, no developer data collection, support for many languages, word replacement, and subtitle export. It is intentionally narrower than Echo Chamber or MacWhisper. The same listing says Aiko favors accuracy over speed, does not perform live transcription while recording, and does not currently detect speakers. Echo Chamber extends the private file workflow with live transcription, local notes and summaries, search, and a broader document archive.',
      },
      {
        type: 'h2',
        content: "4. Voice Memos: start with the recorder already on your iPhone",
      },
      {
        type: 'paragraph',
        content: 'Apple Voice Memos can display a transcript while recording or afterward on supported iPhones, copy part or all of the text, search titles and transcripts, and jump from a selected term to its location in the waveform. Apple documents language, region, and hardware limits. Voice Memos can also sync recordings through iCloud when the user enables it, and supported Apple Intelligence devices can summarize with Writing Tools. It covers basic built-in capture, while Echo Chamber adds existing audio and video import, local AI tools, richer export, and dedicated archive controls.',
      },
      {
        type: 'h2',
        content: "5. Otter: shared meetings in a cloud workspace",
      },
      {
        type: 'paragraph',
        content: 'Otter belongs in a private-transcription comparison because privacy decisions are architectural tradeoffs. Its cloud service can import audio and video, join supported meetings, identify speakers, create AI content, share conversations, search across meetings, and give administrators centralized controls. Official security documentation describes encryption, access controls, retention, and compliance options. The source recording still must reach the service. Echo Chamber avoids that required remote copy for its core workflow and is the stronger option when private Apple-device processing is the priority.',
      },
      {
        type: 'list',
        content: [
          'VERIFY EVERY STAGE: recording, speech recognition, speaker labeling, summary, translation, sync, integration, and export can each have a different data path.',
          'CHECK HARDWARE BEFORE BUYING: local models need storage, memory, recent operating systems, and sometimes a specific chip or downloaded asset.',
          'COMPARE LANGUAGES AND SPEAKERS: a multilingual file workflow and a live English meeting workflow are not the same product test.',
          'EXPORT A TEST: confirm that the timestamps, speaker labels, subtitles, and document format remain useful outside the app.',
          'GET CONSENT: local processing changes vendor exposure, not the permission required to record another person.',
        ],
      },
      {
        type: 'faq',
        content: [
          { question: "Which transcription apps work locally on iPhone?", answer: "Echo Chamber processes speech on supported Apple devices after model setup. Aiko offers local file transcription, while Voice Memos provides built-in transcription on supported iPhones. Check language, hardware, model, and plan requirements for the workflow you need." },
          { question: "Which transcription apps can import video?", answer: "Echo Chamber accepts audio and video for local speech processing. MacWhisper also supports video files on Mac. Otter imports them through its cloud service. Check each app for supported formats and current plan limits." },
          { question: "How should I compare transcription accuracy?", answer: "Use the same representative recording in each app, then compare names, numbers, missing words, and overlapping speech against the audio. Confirm the actual model and settings in each test. This guide does not establish a measured accuracy winner." },
          { question: 'Does Echo Chamber work without Apple Intelligence?', answer: "Speech transcription does not depend on Apple Intelligence alone. Transcript-tool availability depends on the hardware, operating system, and local models offered by the installed version. Check Echo Chamber’s current requirements and model settings." },
          { question: 'Can I buy Echo Chamber once instead of subscribing?', answer: "Echo Chamber offers optional Pro purchases, including subscription and lifetime options. Check the current App Store listing or purchase screen for availability, features, and your local price." },
          { question: 'Can a transcription app be private if it offers cloud features?', answer: 'A privacy claim must name the exact boundary. Echo Chamber keeps its core recording, transcription, search, notes, and summaries on supported Apple hardware. Optional cloud paths in other products may be acceptable for a specific workflow, but they create additional recipients and copies that local processing avoids.' },
        ],
      },
      {
        type: 'sources',
        content: [
          'MacWhisper official features and pricing|https://www.macwhisper.com/',
          'MacWhisper: keeping transcriptions private|https://docs.macwhisper.com/article/52-keeping-transcriptions-private',
          'MacWhisper for iOS|https://docs.macwhisper.com/article/33-macwhisper-for-ios',
          'Aiko App Store listing|https://apps.apple.com/us/app/aiko/id1672085276',
          'Apple: view a Voice Memos transcription|https://support.apple.com/en-ca/guide/iphone/iph00953a982/ios',
          'Apple: make a recording and optional iCloud sync|https://support.apple.com/en-gb/guide/iphone/iph4d2a39a3b/ios',
          'Otter pricing|https://otter.ai/pricing',
          'Otter privacy and security|https://otter.ai/privacy-security',
          'NVIDIA Parakeet TDT 0.6B v3 model card|https://huggingface.co/nvidia/parakeet-tdt-0.6b-v3',
          'Apple Intelligence device requirements|https://support.apple.com/en-us/121115',
          'Google Cloud Speech-to-Text audio preprocessing guidance|https://docs.cloud.google.com/speech-to-text/docs/best-practices',
        ],
      },
      {
        type: 'cta',
        content: "Echo Chamber is free to download, with optional Pro. Bring one real recording and try the whole workflow, from capture or import to a passage you can find again and notes you can use.",
        ctaAppId: 'echochamber',
      },
    ],
  },
  {
    id: 'finance-app-red-flags',
    title: "Budgeting Without Linking a Bank: Five Apps Compared",
    seoTitle: "Budgeting Without Linking a Bank: Five Apps Compared",
    date: '2026.01.15',
    modified: "2026.09.28",
    readTime: "7 MIN READ",
    category: 'BUDGET APP PRIVACY GUIDE',
    tags: ['#BUDGETING-APPS', '#FINANCIAL-PRIVACY', '#BANK-SYNC', '#PLAID'],
    excerpt: "Compare manual entry, file imports, forecasts, and optional bank connections in Vault, Actual Budget, YNAB, Copilot, and Monarch.",
    seoDescription: "Compare manual entry, file imports, forecasts, and optional bank connections in Vault, Actual Budget, YNAB, Copilot, and Monarch.",
    contentType: 'listicle',
    appId: 'vault',
    searchIntent: 'Which budgeting app lets me track money without linking a bank, and what financial data is shared if I turn bank sync on?',
    keyTakeaways: [
      "Vault’s local workflow is built around a practical question: what would this purchase leave after your upcoming obligations? Receipt and statement imports help supply the records.",
      "A manual account avoids a continuous bank feed, but does not necessarily keep the budget off a vendor’s servers. Actual, YNAB, and Copilot have different storage models.",
      "Vault’s optional banking uses Plaid and an Obsidian Ridge Labs relay. Its local manual workflow and connected features should be evaluated separately."
    ],
    relatedIds: ['vault-vs-ynab-monarch-copilot-actual', 'apple-ecosystem-privacy', 'offline-ai-revolution'],
    listItems: [
      { name: 'Vault · pre-release', description: "Purchase checks and cash-flow forecasts using reviewed records, with no bank connection required for manual use. In development." },
      { name: 'Actual Budget', description: 'Open-source, local-first envelope budgeting with local accounts, file import, optional self-hosted sync, and optional bank providers.' },
      { name: 'YNAB', description: 'Account-based budgeting with unlinked accounts, manual entry, file import, and optional direct import through supported providers.' },
      { name: 'Copilot Money', description: 'US-focused finance tracking across Apple platforms and web, with connected and manual accounts, export, and an account-based cloud service.' },
      { name: 'Monarch Money', description: 'Subscription financial dashboard for connected accounts, budgeting, goals, investments, reports, and household collaboration.' },
    ],
    blocks: [
      {
        type: 'answer',
        title: "A bank connection should earn its place",
        content: "You can keep a useful budget without giving an app continuous access to your bank. Actual Budget and YNAB support manual and imported records; Copilot also documents manual accounts. Vault, still in development, adds a native Apple workflow for reviewing receipts and statements, forecasting cash flow, and weighing a purchase against upcoming obligations. Compare the work each app saves before deciding whether automatic bank updates are worth connecting.",
      },
      {
        type: 'paragraph',
        content: "The convenience of a linked bank is easy to understand: fewer transactions to type and a balance that updates for you. The alternative should be judged just as practically. Can you import the statements you already download? Correct a category before it affects a budget? See what remains after the bills? These questions make a better shortlist than a security badge alone.",
      },
      {
        type: 'comparison',
        caption: 'Five budgeting products by manual path and connection model',
        columns: ['App', 'Manual or local path', 'Connected path and important limit'],
        rows: [
          { label: 'Vault', cells: [
            "Reviewed manual records and imports, purchase checks, budgets, and cash-flow forecasts on Apple devices.",
            "In development. Optional Plaid banking uses an Obsidian Ridge Labs relay; paid enrichment can send merchant and amount details."
          ] },
          { label: 'Actual Budget', cells: ['Local-first database, local accounts, manual entry, and CSV, QIF, OFX, QFX, or CAMT file import.', 'Optional sync server and bank providers require configuration; bank-sync tokens are not covered by Actual’s budget-data end-to-end encryption.'] },
          { label: 'YNAB', cells: ['Unlinked accounts, manual entry, scheduled transactions, reconciliation, and file import without a bank link.', 'Optional Direct Import uses supported providers such as Plaid or MX; YNAB remains an account-based cloud product.'] },
          { label: 'Copilot Money', cells: ['Manual accounts and transactions are available for several account types, with stated limits on historic balances and imports.', 'Connected accounts use aggregators or direct OAuth; Copilot stores service data in cloud infrastructure and documents export and deletion controls.'] },
          { label: 'Monarch Money', cells: ['Manual records may supplement the dashboard, but the product’s central proposition is an aggregated financial home base.', 'Unlimited connected accounts, integrations, household collaboration, and reporting are included in the subscription service.'] },
        ],
      },
      {
        type: 'h2',
        content: "Vault: review the records, then see what a purchase changes",
      },
      {
        type: 'paragraph',
        content: "Vault’s development build brings manual expenses, receipt capture, and statement imports into a review step before those records affect the budget. Its purchase check and cash-flow forecast use the balances and obligations you supply, helping you see the effect of spending before you spend. Processing runs locally on iPhone and iPad. Bank linking is optional: it uses Plaid and an Obsidian Ridge Labs relay that retains access tokens and handles connected data. Paid enrichment can send merchant and amount information to Plaid; optional diagnostics are off by default.",
      },
      {
        "type": "callout",
        "title": "Vault is in development",
        "content": "Vault is not available to download yet. The workflow described here is implemented in the development build; release timing and the final offer have not been announced.",
        "variant": "note"
      },
      {
        type: 'h2',
        content: '2. Actual Budget: local-first control with self-hosted responsibility',
      },
      {
        type: 'paragraph',
        content: 'Actual Budget is an open-source envelope-budgeting system whose official documentation calls it local-first: the primary database lives on the local device. A user can create a local account, enter transactions, and import financial files without bank sync. Optional sync uses an Actual server, and end-to-end encryption can protect budget data from that server. This architecture offers unusual control, but it also gives the user responsibility for hosting, updates, backups, passwords, and recovery. The official native mobile apps are deprecated; the responsive web app can be installed as a PWA.',
      },
      {
        type: 'paragraph',
        content: 'Actual’s bank-sync documentation makes an important caveat visible: providers such as SimpleFIN, GoCardless, Pluggy, or regional alternatives require an Actual server and user-supplied credentials, and the server stores bank-sync API secrets or tokens outside the budget file’s end-to-end encryption. That does not make the feature inherently unsafe; it means “the budget is encrypted” is not a complete description of the connected path. Self-hosters should understand server access, token storage, provider scopes, and backup before enabling it.',
      },
      {
        type: 'h2',
        content: '3. YNAB: manual budgeting inside an account service',
      },
      {
        type: 'paragraph',
        content: 'YNAB supports unlinked accounts, manual transactions, scheduled entries, reconciliation, and file-based import. Its current help center explicitly describes Direct Import as optional and lets a person create an unlinked account instead. File import can bring QFX, OFX, and other supported bank exports into the web app or iPad without maintaining a bank connection. Those options avoid continuous aggregation, but the budget records still live inside YNAB’s account-based cloud service.',
      },
      {
        type: 'paragraph',
        content: 'YNAB is still an online account service, not a local-only database. Its privacy notices describe account, product, device, support, and financial data practices, along with service providers and user rights. Direct Import can involve providers including Plaid or MX, depending on location and institution. Compare the manual workflow to the convenience of automatic updates, then read the current policy and import documentation rather than assuming that an unlinked bank also means no financial records are stored by YNAB.',
      },
      {
        type: 'h2',
        content: '4. Copilot Money: connected intelligence plus newer manual accounts',
      },
      {
        type: 'paragraph',
        content: 'Copilot Money is available in the United States across iPhone, iPad, Mac, and web. Its help center now documents manual checking, savings, cash, credit card, investment, loan, and real-estate accounts, with manual transactions on selected types. It also explains limitations: historic balances begin when the manual account is created, some account types cannot carry negative balances, and historic balance imports are not supported. That makes manual use possible without pretending it duplicates the history and automation of a connected account.',
      },
      {
        type: 'paragraph',
        content: 'For connections, Copilot names Plaid, Mastercard Data Connect, and direct OAuth integrations. Its privacy-and-security page says Copilot does not see or store bank login credentials, uses encryption at rest and in transit, offers transactional-data export, and removes integrated financial information after account deletion subject to stated legal exceptions. It also explains that the service runs on Google Cloud and that the cloud provider’s certifications are not Copilot certifications. Those details reveal the remote service boundary more clearly than a generic “bank-grade” claim.',
      },
      {
        type: 'h2',
        content: '5. Monarch Money: a paid connected household dashboard',
      },
      {
        type: 'paragraph',
        content: 'Monarch’s value proposition is aggregation: unlimited connected accounts, budgets, cash-flow views, goals, investment performance, reports, integrations, and household collaboration across web, mobile, and iPad. Its official pricing page showed $99.99 billed yearly when checked and states that the subscription is ad-free and the company does not resell financial data. Those claims describe a business model and service commitment; they do not turn a connected dashboard into a local app. A household should still review providers, access scopes, collaboration permissions, retention, export, and deletion.',
      },
      {
        type: 'h2',
        content: "Before connecting a bank, check these details",
      },
      {
        type: 'list',
        content: [
          'CAN I USE IT UNLINKED? Check manual entry, local accounts, file import, budgets, forecasts, and exports before granting ongoing access.',
          'WHO HANDLES AUTHENTICATION? Name the aggregator or OAuth institution and determine whether the app developer ever receives the bank password.',
          'WHAT FIELDS ARE REQUESTED? Balances, transactions, account numbers, identity, investments, loans, and location are different permission scopes.',
          'WHAT DERIVED DATA LEAVES? Merchant categories, notes, goals, budget questions, support logs, and AI prompts can reveal more than the original transaction.',
          'HOW DO I DISCONNECT AND DELETE? Revoking bank access, deleting an app account, deleting local records, and cancelling a subscription are separate actions.',
          'CAN I LEAVE WITH A USEFUL EXPORT? Verify formats, fields, attachments, category history, and whether the export can be restored elsewhere.',
        ],
      },
      {
        type: 'faq',
        content: [
          { question: 'What budgeting app works without linking a bank?', answer: 'Vault is being designed around manual local use without a required bank connection, including budgets, forecasts, and on-device statement or receipt import. It remains pre-release. Actual Budget, YNAB, and Copilot also document unlinked or manual paths, but each uses a different storage, account, and sync model.' },
          { question: 'Does using Plaid mean the budgeting app gets my bank password?', answer: 'Plaid says it does not share the login and password with the connected app. Depending on the institution, authentication may use bank OAuth or Plaid may collect login data needed to connect. Review the live Plaid consent screen and requested fields.' },
          { question: 'Is a local-first budget automatically safer?', answer: 'No. Local-first can reduce vendor data movement, but device compromise, weak backups, misconfigured self-hosting, exports, and optional sync can still create risk. It also does not guarantee correct calculations or financial outcomes.' },
          { question: 'Can an AI budgeting app give financial advice?', answer: 'Treat generated coaching and forecasts as educational estimates based on incomplete inputs, not personalized financial, tax, legal, credit, or investment advice. Verify important decisions with the relevant statements and qualified professionals.' },
        ],
      },
      {
        type: 'sources',
        content: [
          'Actual Budget: local-first FAQ|https://actualbudget.org/docs/faq/',
          'Actual Budget: bank sync and token caveats|https://actualbudget.org/docs/advanced/bank-sync/',
          'Actual Budget: importing transactions|https://actualbudget.org/docs/transactions/importing/',
          'YNAB: add linked or unlinked accounts|https://support.ynab.com/en_us/how-to-add-an-account-ByoxswMJs',
          'YNAB: file-based import without linking a bank|https://support.ynab.com/en_us/file-based-import-a-guide-Bkj4Sszyo',
          'YNAB: how optional Direct Import works|https://support.ynab.com/en_us/how-direct-import-works-H1IGYLgnxl',
          'Copilot Money: manual accounts|https://help.copilot.money/en/articles/10682991-understanding-manual-accounts',
          'Copilot Money: privacy and security|https://www.copilot.money/privacy-and-security',
          'Monarch Money pricing and included features|https://partners.monarchmoney.com/pricing',
          'Plaid: how bank connections work|https://plaid.com/what-is-plaid/',
          'Plaid privacy and security policies|https://plaid.com/legal/',
        ],
      },
      {
        type: 'cta',
        content: "Explore Vault’s purchase check, reviewed imports, and cash-flow forecast. It is being built for the decisions between paydays, with no bank connection required for its manual workflow.",
        ctaAppId: 'vault',
      },
    ],
  },
  {
    id: 'vault-vs-ynab-monarch-copilot-actual',
    title: "Vault vs YNAB, Monarch, Copilot, and Actual",
    seoTitle: "Vault vs YNAB, Monarch, Copilot, and Actual",
    date: '2026.07.11',
    modified: "2026.09.28",
    readTime: "6 MIN READ",
    category: 'PRIVATE BUDGET APP COMPARISON',
    tags: ['#VAULT', '#YNAB', '#MONARCH-MONEY', '#COPILOT-MONEY', '#ACTUAL-BUDGET'],
    excerpt: "Vault focuses on purchase decisions and local financial records. Compare it with envelope budgeting, shared household dashboards, and connected account services.",
    seoDescription: "Vault focuses on purchase decisions and local financial records. Compare it with envelope budgeting, shared household dashboards, and connected account services.",
    contentType: 'comparison',
    appId: 'vault',
    searchIntent: 'How will pre-release Vault compare with YNAB, Monarch Money, Copilot Money, and Actual Budget for private budgeting without a required bank connection?',
    keyTakeaways: [
      "Vault brings purchase checks, cash-flow forecasts, and reviewed receipt or statement imports together on iPhone and iPad.",
      "YNAB suits a category-based budgeting practice; Actual adds local-first control; Copilot and Monarch offer established connected dashboards.",
      "Vault’s manual workflow does not require bank linking. Its optional Plaid features do connect through an Obsidian Ridge Labs relay."
    ],
    relatedIds: ['finance-app-red-flags', 'apple-ecosystem-privacy', 'offline-ai-revolution'],
    blocks: [
      {
        type: 'answer',
        title: "Start with the decision you want help making",
        content: "Vault is being built to help you judge a purchase against the bills and commitments ahead, using records you can enter or import without linking a bank. YNAB centers a budgeting method, Actual offers a local-first envelope budget, and Copilot and Monarch organize connected financial accounts. If your main need is deciding what you can spend next, Vault’s purchase check is the feature to watch. It remains in development.",
      },
      {
        type: 'paragraph',
        content: "A complete view of your accounts is useful, but it may still leave the question you opened the app to answer: can I make this purchase and cover what comes next? Vault starts there. Other apps in this comparison put a budgeting method, a connected transaction inbox, or household collaboration first. The right choice depends on which of those jobs you will actually return to each week.",
      },
      {
        type: 'comparison',
        caption: 'Pre-release Vault against four available budgeting approaches',
        columns: ['Product', 'What it is good at', 'Tradeoff relative to Vault’s direction'],
        rows: [
          { label: 'Vault', cells: [
            "Reviewed manual records and imports, purchase checks, budgets, and cash-flow forecasts on Apple devices.",
            "In development. Optional Plaid banking uses an Obsidian Ridge Labs relay; paid enrichment can send merchant and amount details."
          ] },
          { label: 'Actual Budget', cells: ['Open-source local-first envelope budgets, local accounts, flexible imports, self-hosted sync, and optional encryption.', 'Requires more setup and operational responsibility; bank-sync secrets have a separate server boundary.'] },
          { label: 'YNAB', cells: ['Established budgeting method, education, unlinked accounts, manual or file import, optional direct import, and broad platform access.', 'Account-based cloud service with subscription pricing; the method and workflow are more prescriptive than a lightweight tracker.'] },
          { label: 'Copilot Money', cells: ['Polished transaction review, categories, recurring views, cash flow, investments, manual accounts, and Apple-focused design plus web.', 'Connected financial data and service records live in cloud infrastructure; US availability and manual-history limits apply.'] },
          { label: 'Monarch Money', cells: ['Unlimited connections, household collaboration, budgets, cash flow, goals, investments, reports, and broad integrations.', 'Aggregation-first subscription is a larger remote data footprint than Vault’s planned manual default.'] },
        ],
      },
      {
        type: 'h2',
        content: "Vault: put the purchase beside the obligations",
      },
      {
        type: 'paragraph',
        content: "Vault’s development build lets you enter or import financial records, review them, and use them in a budget and cash-flow forecast. The purchase check places a proposed expense against the money and obligations already recorded. That gives the decision some context beyond the current balance. It also makes the quality of the input important: a missing bill or irregular income can change the result. The forecast is an estimate from your records, not a promise about what the bank will show.",
      },
      {
        type: 'h2',
        content: 'Actual Budget provides an available local-first comparison',
      },
      {
        type: 'paragraph',
        content: "Actual puts the local database at the center. It supports local accounts and common financial-file imports, works offline, and can sync through an Actual server you select. Optional end-to-end encryption protects budget data from that server, while bank integration stores provider secrets separately. Vault’s difference is the native Apple workflow around reviewed document capture and purchase decisions, without server administration as part of manual use.",
      },
      {
        type: 'h2',
        content: 'YNAB emphasizes method, education, and an account service',
      },
      {
        type: 'paragraph',
        content: "YNAB organizes money around assigning available dollars to categories, reconciling accounts, and adjusting the plan as life changes. Unlinked accounts, manual entry, scheduled transactions, and file imports make bank linking optional. Choose it when the budgeting method and established service are what you need. Vault’s narrower focus is helping you use your own records to understand an upcoming spending decision.",
      },
      {
        type: 'h2',
        content: 'Copilot and Monarch center the aggregation experience',
      },
      {
        type: 'paragraph',
        content: "Copilot turns connected accounts into a transaction inbox, recurring analysis, budgets, and cash-flow and investment views; manual accounts are also available for several asset and liability types. Monarch offers a wider household service with goals, budget systems, reports, investment views, and collaborators. Those services make sense when you need shared visibility or less manual upkeep. Vault is being built around a personal workflow that remains useful with manually maintained records.",
      },
      {
        type: 'h2',
        content: 'Optional Plaid must remain visibly optional',
      },
      {
        type: 'paragraph',
        content: "Vault’s optional connected-bank path uses Plaid and an Obsidian Ridge Labs relay. The relay handles access tokens and requests, while paid enrichment can send merchant and amount information for categorization. Manual imports have a local path and do not require linking a bank. The current app is in development; deployed service behavior and the release offer still need verification.",
      },
      {
        "type": "callout",
        "title": "Availability",
        "content": "Vault is still in development. The other apps in this comparison are available now; the linked product pages are the place to check their current prices and supported connections.",
        "variant": "note"
      },
      {
        type: 'h2',
        content: "Choose the job you want to keep doing",
      },
      {
        type: 'list',
        content: [
          'VAULT: Designed for a local manual core, on-device document import, deterministic forecasts, private coaching, and explicitly optional Plaid. It remains pre-release.',
          'ACTUAL BUDGET TRADEOFF: Local-first open source and file imports come with self-hosted setup, maintenance, recovery, and a separate server boundary for bank-sync secrets.',
          'YNAB TRADEOFF: Manual and unlinked use exists inside an established account-based cloud service with a prescriptive budgeting method.',
          'COPILOT TRADEOFF: Automatic financial review and an Apple-centered interface depend on a service account and cloud infrastructure.',
          'MONARCH TRADEOFF: Broad household aggregation, reports, investments, and collaboration create a larger remote financial-data footprint than Vault’s planned manual default.',
        ],
      },
      {
        type: 'faq',
        content: [
          { question: 'Is Vault available as a YNAB or Monarch alternative?', answer: 'Not yet. Vault is in development with no announced release date or final price. Its intended alternative is a local manual core, on-device imports and coaching, deterministic forecasts, and optional Plaid instead of an aggregation-first cloud account.' },
          { question: 'Will Vault require Plaid?', answer: 'The intended design does not. Manual tracking, budgets, imports, forecasts, and local coaching are planned without a linked bank. Plaid is a separate optional path whose final scope must be documented at release.' },
          { question: 'How does Vault’s local-first direction differ from the other options?', answer: 'Vault is designed as a native iPhone and iPad local core with on-device document import and optional Plaid, but it remains unreleased. Actual uses a local database with optional self-hosted sync, YNAB offers unlinked use inside its cloud service, and Copilot and Monarch center service-based financial dashboards.' },
          { question: 'Will Vault forecasts predict my bank balance accurately?', answer: 'They are intended as estimates from the records and assumptions supplied. Missing transactions, irregular income, fees, timing, and changing behavior can make any projection wrong. A forecast is not a guarantee or professional financial advice.' },
        ],
      },
      {
        type: 'sources',
        content: [
          'Actual Budget: accounts and local account option|https://actualbudget.org/docs/accounts/',
          'Actual Budget: syncing and end-to-end encryption|https://actualbudget.org/docs/getting-started/sync/',
          'Actual Budget: bank-sync caveats|https://actualbudget.org/docs/advanced/bank-sync/',
          'YNAB: linked and unlinked accounts|https://support.ynab.com/en_us/how-to-add-an-account-ByoxswMJs',
          'YNAB: optional Direct Import|https://support.ynab.com/en_us/how-direct-import-works-H1IGYLgnxl',
          'Copilot Money: manual account behavior|https://help.copilot.money/en/articles/10682991-understanding-manual-accounts',
          'Copilot Money: privacy and security|https://www.copilot.money/privacy-and-security',
          'Monarch Money: pricing and feature scope|https://partners.monarchmoney.com/pricing',
          'Plaid: connection and data choices|https://plaid.com/what-is-plaid/',
          'Plaid: privacy and security policies|https://plaid.com/legal/',
        ],
      },
      {
        type: 'cta',
        content: "See how Vault reviews imported records and uses them in purchase checks and cash-flow forecasts. Follow its development if that is the gap in your current budget.",
        ctaAppId: 'vault',
      },
    ],
  },
  {
    id: 'molehill-vs-goblin-tools-tiimo-structured-todoist',
    title: "Molehill vs Goblin Tools, Tiimo, Structured, and Todoist",
    seoTitle: "Molehill vs Goblin Tools, Tiimo, Structured, and Todoist",
    date: '2026.07.11',
    modified: "2026.09.28",
    readTime: "7 MIN READ",
    category: 'AI TASK BREAKDOWN COMPARISON',
    tags: ['#MOLEHILL', '#GOBLIN-TOOLS', '#TIIMO', '#STRUCTURED', '#TODOIST'],
    excerpt: "Compare tools for breaking down a task, focusing on one step, planning a day, or managing a project. Molehill starts with the step that still feels too large.",
    seoDescription: "Compare tools for breaking down a task, focusing on one step, planning a day, or managing a project. Molehill starts with the step that still feels too large.",
    contentType: 'comparison',
    appId: 'molehill',
    searchIntent: 'How will Molehill compare with Goblin Tools Magic ToDo, Tiimo, Structured, and Todoist when a task feels too overwhelming to start?',
    keyTakeaways: [
      "Molehill’s distinctive action is splitting the specific step you are stuck on, then returning to one-step focus.",
      "A timer, recurring tasks, and editable brain-dump results support the work; a basic splitter remains available after the free AI allowance is used.",
      "Molehill is in development for iPhone with Apple Intelligence required. The available alternatives offer broader scheduling, integrations, or shared projects."
    ],
    relatedIds: ['best-ai-task-breakdown-apps', 'offline-ai-revolution', 'apple-ecosystem-privacy'],
    blocks: [
      {
        type: 'answer',
        title: "The right tool depends on where you get stuck",
        content: "Molehill is being built for the moment a task is written down but still feels too large to begin. It turns a task or brain dump into editable actions, shows one step, and lets you split that step again. Goblin Tools offers quick breakdown tools; Tiimo and Structured put work into a visual day; Todoist manages longer-lived projects. Choose the level of planning you need, rather than collecting more generated subtasks.",
      },
      {
        type: 'paragraph',
        content: "“Sort out the paperwork” looks manageable on a list until you sit down to do it. Which folder? Which form? What are you looking for? A breakdown tool earns its place by helping you find an action you can start. A calendar or project manager earns its place later, when you need to put that action among appointments, deadlines, and other people’s work.",
      },
      {
        type: 'comparison',
        caption: 'Five approaches to getting from a vague task to a next action',
        columns: ['Product', 'Core approach', 'Boundary or limitation'],
        rows: [
          { label: 'Molehill', cells: [
            "Editable local breakdown, one-step focus, and the option to split a stuck step again.",
            "In development for iPhone on iOS 26 with Apple Intelligence required. Includes streaks and completion history."
          ] },
          { label: 'Goblin Tools', cells: ['Magic ToDo decomposes tasks by “spiciness”; Compiler turns a ramble into tasks; Taskmaster works through one item at a time.', 'Most AI tools use back-end models whose output is explicitly described as guesswork; web sync and many exports add separate paths.'] },
          { label: 'Tiimo', cells: ['AI Co-planner turns typed or spoken thoughts into steps, estimates time, and places work into a visual schedule with focus tools.', 'Account and cross-device service; AI breakdown is a Pro feature, and product wellness language should not be mistaken for treatment evidence.'] },
          { label: 'Structured', cells: ['Tasks, calendar events, and routines share a visual timeline; optional AI can create, edit, or scan tasks.', 'AI sends the query and an anonymous identifier through Structured and OpenAI servers and may retain data for up to 30 days.'] },
          { label: 'Todoist', cells: ['Cloud projects, subtasks, dates, recurring work, filters, collaboration, integrations, and optional Task Assist.', 'Account-based cloud system; AI runs through Doist infrastructure and selected model providers rather than on the user’s device.'] },
        ],
      },
      {
        type: 'h2',
        content: "Molehill: make the stuck step smaller",
      },
      {
        type: 'paragraph',
        content: "Molehill’s current build can turn a task or brain dump into actions you review and edit. Open a task and focus on one step. If it is still too large, ask for a smaller breakdown of that step without replacing the rest of the plan. A timer and recurring tasks help carry the list into a routine. The app also has streaks and completion history; the smaller-step action is the reason to choose it.",
      },
      {
        "type": "callout",
        "title": "In development for iPhone",
        "content": "Molehill is not yet available. The current app requires iOS 26 and Apple Intelligence. A basic, rule-based splitter remains available after the free AI allowance is used; this does not remove the hardware requirement.",
        "variant": "note"
      },
      {
        type: 'h2',
        content: 'Goblin Tools uses server AI for single-purpose decomposition',
      },
      {
        type: 'paragraph',
        content: 'Goblin Tools describes itself as a collection of simple, single-task tools, mostly for everyday difficulties experienced by neurodivergent people. Magic ToDo uses a “spiciness” control as a hint for how much decomposition to generate. Each item can be broken down again, estimated, categorized, edited, reordered, or exported. Compiler turns a free-form ramble into tasks, while Taskmaster presents items one at a time with a timer and an optional next-task suggestion. The website is free without ads or paywalls, and low-cost mobile apps support the project.',
      },
      {
        type: 'paragraph',
        content: "Goblin Tools states that most tools use back-end AI and that results are guesses rather than facts. Magic ToDo can export to files, Markdown, iCalendar, and several task systems, with optional encrypted sync. That is useful for a quick breakdown you want to take elsewhere. Molehill keeps its breakdown on the iPhone and carries the result into its own one-step focus view.",
      },
      {
        type: 'h2',
        content: 'Tiimo turns the breakdown into a visual day',
      },
      {
        type: 'paragraph',
        content: 'Tiimo’s AI Co-planner accepts typed or spoken thoughts, breaks them into structured tasks, estimates time, and can schedule them. The rest of the product provides a visual timeline, to-do inbox, focus timer, routines, widgets, Live Activities, mood check-ins, and cross-device access across iOS, iPad, watchOS, Android, Mac, and web. Official guidance encourages a brain dump first, then adjusting the proposed schedule rather than accepting it blindly. AI task breakdown and advanced planning sit in Tiimo Pro, with regional pricing shown at checkout.',
      },
      {
        type: 'paragraph',
        content: "Tiimo is worth considering when a task list is only part of the problem: you also want time estimates, transitions, and routines visible across a day. Its broader account-based service includes sync and several platforms. Molehill’s narrower job is helping you begin the task in front of you, with local breakdown and one-step focus.",
      },
      {
        type: 'h2',
        content: 'Structured makes the timeline the primary answer',
      },
      {
        type: 'paragraph',
        content: 'Structured combines tasks, to-dos, calendar events, routines, and focus into one visual daily timeline. Optional Structured AI can interpret typed or spoken instructions and scan a physical planner to create, edit, or delete tasks. Its privacy documentation says ordinary entries are stored locally unless iCloud or Structured Cloud sync is enabled, while Structured AI sends the instruction and anonymous identifier through Structured and OpenAI servers and may retain that data for up to 30 days. Molehill is pursuing a narrower local breakdown path rather than making a full daily timeline the organizing surface.',
      },
      {
        type: 'h2',
        content: 'Todoist places decomposition inside a cloud task system',
      },
      {
        type: 'paragraph',
        content: 'Todoist starts with a durable task database: projects, subtasks, priorities, recurring dates, reminders, filters, calendars, file attachments, collaboration, templates, history, and more than 90 integrations. Todoist Assist can suggest steps toward a goal, rewrite a task, generate tips, or break complex work into subtasks. Current official pricing lists a free Beginner tier and a Pro tier that includes Task Assist. That breadth serves a cloud project system, while Molehill is deliberately focused on private local decomposition and one next action.',
      },
      {
        type: 'paragraph',
        content: "Doist documents server-side AI processing through its infrastructure and selected providers, with agreements against training provider models on the processed data. Todoist’s advantage is where the result lands: a mature project system that can be shared and connected to other tools. Molehill keeps a smaller personal workflow on the iPhone. Choose based on whether the task needs that project structure after you begin.",
      },
      {
        type: 'h2',
        content: "Try a task you have already postponed",
      },
      {
        type: 'list',
        content: [
          'START WITH A VERB: “Open the document and write three headings” is more actionable than “make progress on report.”',
          'CHECK DEPENDENCIES: A generated sequence can be wrong when it does not know the people, permissions, tools, or decisions involved.',
          'CHANGE THE GRANULARITY: If a step still creates resistance, split it again; if the list becomes noise, combine obvious actions.',
          'KEEP EDIT CONTROL: The tool should make deletion, reordering, correction, and manual entry easier than regenerating everything.',
          'SEPARATE PLANNING FROM TREATMENT: A productivity interface can support a routine but cannot diagnose ADHD, treat executive dysfunction, or guarantee follow-through.',
        ],
      },
      {
        type: 'faq',
        content: [
          {
            "question": "Is Molehill a private alternative to Goblin Tools?",
            "answer": "Molehill’s development build performs task breakdown locally on iPhone and carries the result into a one-step focus view. Goblin Tools uses back-end AI for most generation and offers a broad set of quick tools and exports. Molehill is not yet available."
          },
          { question: 'What app can turn a brain dump into tasks?', answer: 'Molehill is being designed to turn a brain dump into editable tasks locally on iPhone and then center one next step, but it remains pre-release. Goblin Tools Compiler, Tiimo Co-planner, Structured AI, and Todoist Assist also transform or decompose input through their documented server or account-based workflows.' },
          { question: 'Which task app shows only one step at a time?', answer: 'Molehill is designed around a next-action view with a smaller-step action, but it remains pre-release. Goblin Tools Taskmaster also walks through Magic ToDo items one at a time, while Tiimo and Structured combine focus tools with a broader schedule.' },
          { question: 'Is an AI task breakdown app an ADHD treatment?', answer: 'No product in this comparison should be represented as diagnosis or medical treatment. It can suggest structure, but the output may be wrong and cannot evaluate health, disability accommodations, safety, or personal circumstances.' },
        ],
      },
      {
        type: 'sources',
        content: [
          'Goblin Tools Magic ToDo|https://goblin.tools/ToDo',
          'Goblin Tools About and AI limitations|https://goblin.tools/About',
          'Goblin Tools Compiler|https://goblin.tools/Compiler',
          'Goblin Tools Taskmaster|https://goblin.tools/Taskmaster',
          'Tiimo official features, privacy summary, and plan model|https://www.tiimoapp.com/',
          'Tiimo task and brain-dump workflow|https://www.tiimoapp.com/faq/manage-tasks',
          'Structured official product overview|https://structured.app/',
          'Structured AI creation and data path|https://help.structured.app/en/articles/331074',
          'Structured privacy explanation|https://help.structured.app/en/articles/1747138',
          'Todoist Assist documentation|https://www.todoist.com/help/articles/introduction-to-todoist-assist-KgPP22q5O',
          'Todoist pricing and task feature comparison|https://www.todoist.com/pricing/',
        ],
      },
      {
        type: 'cta',
        content: "Explore Molehill’s task breakdown and one-step focus. Start with the action you keep putting off, and see how the smaller-step workflow is being built to handle it.",
        ctaAppId: 'molehill',
      },
    ],
  },
  {
    id: 'best-ai-task-breakdown-apps',
    title: "Five Task Breakdown Apps for Getting Started and Staying Organized",
    seoTitle: "Five Task Breakdown Apps for Getting Started and Staying Organized",
    date: '2026.07.11',
    modified: "2026.09.28",
    readTime: "7 MIN READ",
    category: 'TASK BREAKDOWN APP GUIDE',
    tags: ['#TASK-BREAKDOWN', '#BRAIN-DUMP', '#FOCUS-APP', '#EXECUTIVE-FUNCTION'],
    excerpt: "Molehill, Goblin Tools, Tiimo, Structured, and Todoist solve different problems. Compare smaller steps, visual schedules, and full project systems.",
    seoDescription: "Molehill, Goblin Tools, Tiimo, Structured, and Todoist solve different problems. Compare smaller steps, visual schedules, and full project systems.",
    contentType: 'listicle',
    appId: 'molehill',
    searchIntent: 'What app can break an overwhelming task or brain dump into small steps and help me focus on what to do next?',
    keyTakeaways: [
      "Molehill lets you split a stuck step again and keep working from a one-step view. It is still in development.",
      "Choose a visual planner when the problem is fitting work around appointments; choose a project manager when tasks need collaborators, history, or integrations.",
      "Review a generated list before using it. Remove steps you do not need, correct dependencies, and make the first action specific enough to begin."
    ],
    relatedIds: ['molehill-vs-goblin-tools-tiimo-structured-todoist', 'offline-ai-revolution', 'apple-ecosystem-privacy'],
    listItems: [
      { name: 'Molehill · pre-release', description: "Editable task breakdown, one-step focus, and a smaller-step action for the point where you are stuck. In development." },
      { name: 'Goblin Tools', description: 'Focused task decomposition, brain-dump compilation, step estimates, one-item Taskmaster, and extensive exports.' },
      { name: 'Tiimo', description: 'Visual cross-device planning with AI brain dumps, estimated steps, schedules, timers, routines, and flexible daily structure.' },
      { name: 'Structured', description: 'One visual timeline for tasks and calendar events, with optional AI task creation, voice input, and planner scanning.' },
      { name: 'Todoist', description: 'Cloud projects, subtasks, recurring work, collaboration, integrations, and optional Task Assist decomposition.' },
    ],
    blocks: [
      {
        type: 'answer',
        title: "Choose what you need after the list is generated",
        content: "For a task that still feels too big after you have planned it, Molehill is being built around repeated breakdown and one-step focus on iPhone. Goblin Tools suits a quick checklist; Tiimo and Structured help fit tasks into the day; Todoist keeps them in a project system. The useful test is what you can do with the first step, and how easily you can change it.",
      },
      {
        type: 'paragraph',
        content: "Sometimes you need a smaller first step. Sometimes you need to see where it fits in the day. Sometimes several people need to agree who owns it. These are different problems, and a long generated checklist will not solve all three. This guide separates breakdown tools from daily planners and project managers so you can choose the amount of structure that helps.",
      },
      {
        type: 'comparison',
        caption: 'Task-breakdown apps by the bottleneck they address',
        columns: ['App', 'Primary workflow', 'Question to ask before committing'],
        rows: [
          { label: 'Molehill', cells: [
            "Editable local breakdown, one-step focus, and the option to split a stuck step again.",
            "In development for iPhone on iOS 26 with Apple Intelligence required. Includes streaks and completion history."
          ] },
          { label: 'Goblin Tools', cells: ['Quick decomposition and brain-dump conversion with minimal setup.', 'Is a back-end AI request acceptable, and which export or optional sync path will preserve the result?'] },
          { label: 'Tiimo', cells: ['Turning a brain dump into estimated steps and a flexible visual schedule across devices.', 'Do the account, sync, subscription, and AI data path fit the sensitivity of your tasks?'] },
          { label: 'Structured', cells: ['Seeing tasks and appointments in one daily timeline and creating them through text, voice, or a scan.', 'Will ordinary local storage, optional sync, and the separate server-based AI path be clear enough for your workflow?'] },
          { label: 'Todoist', cells: ['Maintaining a durable personal or team task system with optional AI decomposition.', 'Do you need the project, collaboration, history, and integration breadth, or only a temporary checklist?'] },
        ],
      },
      {
        type: 'h2',
        content: "1. Molehill: split the step that is still stopping you",
      },
      {
        type: 'paragraph',
        content: "Molehill turns a task or brain dump into actions you can edit, then brings one step into focus. If that step still feels too large, split it again. The current iPhone build also includes a timer, recurrence, streaks, completion history, and Pro export to Reminders or Calendar. Its basic splitter remains available after the free AI allowance is used, so you can keep breaking work down. iOS 26 and Apple Intelligence are required.",
      },
      {
        "type": "callout",
        "title": "Molehill is in development",
        "content": "Molehill is not available to download yet. Its place in this guide is the local breakdown and focus workflow being built; there is no announced release date.",
        "variant": "note"
      },
      {
        type: 'h2',
        content: '2. Goblin Tools: server-backed breakdown without a productivity migration',
      },
      {
        type: 'paragraph',
        content: 'Magic ToDo lets a person enter a large task and choose how “spicy” it feels; that hint changes how aggressively the system decomposes it. Generated items can be expanded again, edited, reordered, estimated, categorized, completed, or hidden. Compiler accepts a free-form ramble and converts it to tasks, and Taskmaster presents the list one item at a time with a timer. These server-backed tools address fast decomposition without building a permanent project database. Molehill is pursuing the same moment through a local and quieter workflow.',
      },
      {
        type: 'paragraph',
        content: 'Goblin Tools says its website will remain free without ads or paywalls and that mobile purchases help fund it. The service uses back-end AI for most tools and explicitly warns that results are variable guesswork. Magic ToDo can save or load files, copy Markdown, print, export iCalendar, and create formats for several task systems. Optional encrypted synchronization exists, but the site warns that its sync system is changing. Back up a real list before treating it as the only copy.',
      },
      {
        type: 'h2',
        content: '3. Tiimo: brain dump, estimate, schedule, and focus',
      },
      {
        type: 'paragraph',
        content: 'Tiimo’s Co-planner turns spoken or typed input into structured tasks with estimated time, icons, tags, and a proposed schedule. A to-do inbox holds unscheduled ideas; Today holds timed or flexible work; Focus mode and a visual timer help during execution. Calendars, widgets, Live Activities, mood check-ins, routines, and broad device support make it a more complete daily system. AI breakdown is part of Pro, while a free version includes selected core planning tools.',
      },
      {
        type: 'paragraph',
        content: 'The official workflow emphasizes adjustment: save the proposed tasks only after reviewing them, move a to-do into the day when it belongs, and avoid scheduling more than is realistic. That review remains necessary because model time estimates do not know the person’s energy, environment, interruptions, or accessibility needs. Tiimo’s privacy summary says it is ad-free, never sells data, and follows GDPR. Read the complete policy for the exact AI, sync, account, analytics, and deletion paths.',
      },
      {
        type: 'h2',
        content: '4. Structured: translate the list into one visible timeline',
      },
      {
        type: 'paragraph',
        content: 'Structured puts tasks and calendar events on one visual line through the day, with weekly and monthly views, inbox capture, routines, widgets, and focus. Structured AI can accept natural-language or spoken instructions and scan a physical planner or task list. It can create, edit, or delete tasks while considering the current day. That timeline addresses scheduling around appointments, while Molehill deliberately stays focused on local decomposition and one next action.',
      },
      {
        type: 'paragraph',
        content: 'Structured distinguishes normal storage from AI processing. Its help center says regular entries remain local unless iCloud or Structured Cloud is enabled. When Structured AI is invoked, the instruction and an anonymous identifier reach Structured and OpenAI servers and may be stored for up to 30 days. AI is otherwise inactive. The disclosure confirms that ordinary storage and AI requests have different boundaries. Molehill’s intended generation path stays on the iPhone instead.',
      },
      {
        type: 'h2',
        content: '5. Todoist: server AI inside a cloud project system',
      },
      {
        type: 'paragraph',
        content: 'Todoist is appropriate when the breakdown needs due dates, recurrence, priorities, projects, filters, reminders, attachments, collaborators, integrations, and history after the moment of overwhelm passes. Subtasks work without AI. Task Assist can suggest tasks toward a goal, generate tips, rewrite an item, and break complex work into subtasks. The official pricing page currently places Task Assist in paid Pro and Business tiers, while the free tier retains core tasks and subtasks.',
      },
      {
        type: 'paragraph',
        content: 'Doist says Assist processing stays within its secure infrastructure, uses providers on AWS Bedrock and Google Cloud Vertex AI, and is governed by commitments not to train provider models on processed customer data. That remains server processing. Molehill’s planned advantage is a narrower local path for sensitive personal context, while Todoist’s result lands inside an established shared system. The privacy decision follows the content and data path, not the popularity of the app.',
      },
      {
        type: 'h2',
        content: "Test the first step before adopting the whole system",
      },
      {
        type: 'list',
        content: [
          'IS THE FIRST STEP PHYSICAL AND SPECIFIC? “Research” is vague; “open the three saved sources and write their titles” can be started.',
          'DOES THE ORDER RESPECT DEPENDENCIES? A model may schedule work before an approval, file, person, or tool is available.',
          'ARE STEPS THE RIGHT SIZE? Split the one that still feels blocked; merge mechanical fragments that make the list harder to scan.',
          'CAN I CHANGE THE PLAN WITHOUT PUNISHMENT? Editing, snoozing, deleting, and pausing should be ordinary states, not failure.',
          'WHERE DID THE BRAIN DUMP GO? Check local storage, AI processors, sync, exports, analytics, deletion, and support before entering sensitive context.',
          'DO I NEED A PERSON INSTEAD? Safety, health, accommodations, relationships, and high-stakes work can require judgment no task model has.',
        ],
      },
      {
        type: 'faq',
        content: [
          {
            "question": "What if a generated step still feels too large?",
            "answer": "Split that specific step again. Molehill is being built around this action, alongside editable brain-dump results and one-step focus. Goblin Tools also supports further breakdown, while Tiimo, Structured, and Todoist add broader planning systems."
          },
          { question: 'Can an app turn a voice brain dump into a schedule?', answer: 'Molehill is being designed to turn a brain dump into local editable actions and one next step, but a full scheduled day is outside its narrow focus. Tiimo and Structured document spoken-input scheduling through their broader account or server workflows. Review every proposed duration and dependency.' },
          {
            "question": "Does Molehill send my task to a remote AI service?",
            "answer": "Its current development workflow performs the breakdown on the iPhone. It requires Apple Intelligence, with a basic splitter available after the free AI allowance is used. Molehill is not yet released."
          },
          { question: 'Do task breakdown apps help with ADHD?', answer: 'Some products are designed with neurodivergent users in mind and may provide useful structure, but a productivity tool is not diagnosis or treatment. Individual needs vary, and generated output should not replace qualified support or accommodations.' },
        ],
      },
      {
        type: 'sources',
        content: [
          'Goblin Tools Magic ToDo|https://goblin.tools/ToDo',
          'Goblin Tools mission, model, and limitations|https://goblin.tools/About',
          'Goblin Tools Compiler|https://goblin.tools/Compiler',
          'Goblin Tools Taskmaster|https://goblin.tools/Taskmaster',
          'Tiimo visual planner and product model|https://www.tiimoapp.com/',
          'Tiimo task, to-do, and Co-planner workflow|https://www.tiimoapp.com/faq/manage-tasks',
          'Tiimo platform and subscription FAQ|https://www.tiimoapp.com/faq',
          'Structured daily planner|https://structured.app/',
          'Structured AI task creation|https://help.structured.app/en/articles/331074',
          'Structured privacy data paths|https://help.structured.app/en/articles/1747138',
          'Todoist Assist and AI processing|https://www.todoist.com/help/articles/introduction-to-todoist-assist-KgPP22q5O',
          'Todoist pricing and task features|https://www.todoist.com/pricing/',
        ],
      },
      {
        type: 'cta',
        content: "Explore Molehill if your current list tells you what to do but still leaves you stuck at the start. Its smaller-step action is built for that moment.",
        ctaAppId: 'molehill',
      },
    ],
  },
];
