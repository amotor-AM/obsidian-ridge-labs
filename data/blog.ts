import { BlogPost } from '../types';

export const blogPosts: BlogPost[] = [
  {
    id: "apple-ecosystem-privacy",
    title: "Why We Focus on Apple: Fewer Platforms, Clearer Privacy Boundaries",
    date: "2026.03.22",
    modified: "2026.07.10",
    readTime: "7 MIN READ",
    category: "MANIFESTO",
    tags: ["#APPLE", "#PRIVACY", "#PRODUCT-DESIGN"],
    excerpt: "Our Apple-only focus is not a claim that one platform guarantees privacy. It is how a small studio builds a narrower, more testable on-device product boundary.",
    blocks: [
      {
        type: "paragraph",
        content: "Obsidian Ridge Labs builds for Apple platforms because focus makes our privacy claims easier to test. One hardware and software family lets us state minimum requirements, design around a known set of system frameworks, and inspect the same core data path in far more depth than a small team could across every platform."
      },
      {
        type: "h2",
        content: "A platform choice is an engineering constraint"
      },
      {
        type: "paragraph",
        content: "Supporting fewer platforms gives us more time for the parts people cannot see in a screenshot: permission timing, local storage behavior, model packaging, offline failure states, accessibility, export, deletion, and the exact moments when a network connection is needed."
      },
      {
        type: "list",
        content: [
          "KNOWN HARDWARE TARGETS: Local models can be tested against explicit Apple-silicon and operating-system requirements.",
          "CONSISTENT SYSTEM CONTROLS: Biometrics, app sandboxing, file access, accessibility, and purchase flows can follow a smaller set of native patterns.",
          "CLEARER COMPATIBILITY: A product page can say which iPhone, iPad, Mac, or Vision system is supported instead of hiding behind a vague device list.",
          "DEEPER QA: Fewer platform variants leave more room to test offline behavior, imports, exports, and privacy boundaries repeatedly."
        ]
      },
      {
        type: "h2",
        content: "What on-device means—and what it does not"
      },
      {
        type: "paragraph",
        content: "On-device means the named core processing step runs on the hardware in front of you. It does not automatically mean an app is permanently air-gapped. A model may need to be downloaded. The App Store may verify a purchase. A person may enable iCloud or another optional provider. A responsible product explains each exception instead of using the Apple logo as a substitute for a data-flow description."
      },
      {
        type: "h2",
        content: "Apple is not a universal privacy guarantee"
      },
      {
        type: "paragraph",
        content: "A platform can provide useful security and privacy primitives, but the app developer still decides what to collect, which SDKs to include, where processing runs, and how optional services behave. Our responsibility is to make those choices inspectable. The platform focus helps us do that work; it does not do the work for us."
      },
      {
        type: "quote",
        content: "The point of a narrow platform strategy is not exclusivity. It is specificity."
      },
      {
        type: "sources",
        content: [
          "Apple Platform Security|https://support.apple.com/guide/security/welcome/web",
          "Apple Privacy features|https://www.apple.com/privacy/features/"
        ]
      },
      {
        type: "cta",
        content: "Echo Chamber shows the approach in a released product: live transcription, uploaded audio or video, local AI notes, and export on supported Apple devices.",
        ctaAppId: "echochamber"
      }
    ]
  },
  {
    id: "finance-app-red-flags",
    title: "Before You Connect Your Bank: A Privacy Checklist for Finance Apps",
    date: "2026.01.15",
    modified: "2026.07.10",
    readTime: "8 MIN READ",
    category: "GUIDE",
    tags: ["#FINANCE", "#PRIVACY", "#CHECKLIST"],
    excerpt: "Before linking a bank to a budgeting app, ask who handles credentials, what leaves the device, whether manual use works, and how deletion works.",
    blocks: [
      {
        type: "paragraph",
        content: "A finance app can be convenient and still deserve careful questions. The useful issue is not whether the home screen says secure. It is whether you can understand the path from your bank, statement, or receipt to the feature you want to use."
      },
      {
        type: "h2",
        content: "1. Can I use the app without linking an account?"
      },
      {
        type: "paragraph",
        content: "A manual option gives you a meaningful choice. Look for expense entry, statement import, receipt capture, budgets, and forecasts that do not require a continuous bank connection. If linking is mandatory, ask why every core feature needs that data path."
      },
      {
        type: "h2",
        content: "2. Who receives my bank credentials?"
      },
      {
        type: "paragraph",
        content: "The app should name the provider that handles authentication and state whether the app developer ever receives the bank password. A phrase such as bank-level security is not an answer. The provider, permission scope, token flow, refresh behavior, and disconnect process are the answers."
      },
      {
        type: "h2",
        content: "3. What financial data leaves the device?"
      },
      {
        type: "list",
        content: [
          "Does categorization or coaching happen locally or on a remote AI service?",
          "Are merchant names, balances, transaction amounts, notes, or chat questions sent to analytics tools?",
          "Is cloud sync required, optional, or unavailable?",
          "Can diagnostics be disabled, and do they exclude financial content?",
          "Does disconnecting a provider stop future access, and what local data remains?"
        ]
      },
      {
        type: "h2",
        content: "4. Can I export and delete without asking support?"
      },
      {
        type: "paragraph",
        content: "Control should include a practical exit. Check whether you can export useful records, delete local data, disconnect a bank provider, understand what a device backup may retain, and remove any account that exists. A privacy boundary is incomplete when only the company can end it."
      },
      {
        type: "quote",
        content: "The right finance app is not the one with the loudest lock icon. It is the one whose data path you can explain."
      },
      {
        type: "cta",
        content: "Vault is an in-development local-first finance product. Its page explains the intended manual path, optional Plaid connection, and the details that remain provisional before release.",
        ctaAppId: "vault"
      }
    ]
  },
  {
    id: "otter-vs-echo",
    title: "Cloud vs On-Device Transcription: What Should You Compare?",
    date: "2026.02.03",
    modified: "2026.07.10",
    readTime: "8 MIN READ",
    category: "COMPARISON GUIDE",
    tags: ["#TRANSCRIPTION", "#PARAKEET", "#PRIVACY"],
    excerpt: "Compare transcription apps by data path, file upload, offline behavior, model accuracy, export, and collaboration—not by a single privacy adjective.",
    blocks: [
      {
        type: "paragraph",
        content: "People searching for an Otter alternative or a private meeting transcription app are often comparing two different architectures. Cloud-first products can emphasize shared workspaces and server-side collaboration. On-device products can reduce data movement and keep core work available offline. The better fit depends on which boundary matters for the conversation you are recording."
      },
      {
        type: "h2",
        content: "Start with the recording's data path"
      },
      {
        type: "list",
        content: [
          "Where does speech recognition run?",
          "Where do summaries, transcript cleanup, and transcript questions run?",
          "Is audio uploaded automatically, only for an optional feature, or never to the app developer?",
          "Does the core workflow still work in airplane mode after model setup?",
          "Can recordings and transcripts be exported in useful formats?"
        ]
      },
      {
        type: "h2",
        content: "Can I upload an existing audio or video file?"
      },
      {
        type: "paragraph",
        content: "A transcription app should not force every conversation to begin inside its recorder. Echo Chamber Pro accepts existing audio and video files, including common MP3, WAV, M4A, and MP4 inputs. The uploaded file enters the same local transcription, search, note, summary, and export workflow as a live recording."
      },
      {
        type: "h2",
        content: "Ask which speech model is used—and which benchmark supports the claim"
      },
      {
        type: "paragraph",
        content: "Echo Chamber uses NVIDIA Parakeet TDT 0.6B v3 and has observed approximately 3% word error rate in Echo Chamber testing. That product measurement should not be mixed with a different test set. For apples-to-apples public context, the current Hugging Face Open ASR evaluation reports 6.32% average English WER for Parakeet and 7.44% for OpenAI Whisper large-v3—about 15% fewer word errors for Parakeet on that benchmark. Results still vary with language, accent, noise, microphones, overlapping speakers, and recording conditions."
      },
      {
        type: "h2",
        content: "Collaboration and privacy are separate product choices"
      },
      {
        type: "paragraph",
        content: "A cloud workspace may be the right tool when a team needs shared bots, centralized administration, and browser collaboration. A local archive may be the right tool when the recording itself should not become another remote copy. Compare the actual workflow you need, then choose the architecture whose tradeoffs you understand."
      },
      {
        type: "sources",
        content: [
          "NVIDIA Parakeet TDT 0.6B v3 model card and evaluation|https://huggingface.co/nvidia/parakeet-tdt-0.6b-v3",
          "OpenAI Whisper large-v3 model card and evaluation|https://huggingface.co/openai/whisper-large-v3",
          "Hugging Face Open ASR Leaderboard|https://huggingface.co/spaces/hf-audio/open_asr_leaderboard"
        ]
      },
      {
        type: "cta",
        content: "Echo Chamber is available now for supported Apple devices, with live recording, audio and video upload, Parakeet TDT transcription, local AI notes, search, and export.",
        ctaAppId: "echochamber"
      },
      {
        type: "paragraph",
        content: "Whatever tool you choose, obtain the permission required for the conversation and context. A private processing architecture does not replace consent."
      }
    ]
  },
  {
    id: "private-ai-journal-guide",
    title: "Where Should Private Journal Entries Live? A Boundary-First Guide",
    date: "2026.02.18",
    modified: "2026.07.10",
    readTime: "7 MIN READ",
    category: "GUIDE",
    tags: ["#JOURNALING", "#PRIVACY", "#LOCAL-FIRST"],
    excerpt: "Compare accounts, sync, AI processing, export, deletion, and human limits before choosing where private journal entries should live.",
    blocks: [
      {
        type: "paragraph",
        content: "The best place for project notes is not automatically the best place for private reflection. A collaborative workspace is designed to make information available across people and devices. A private journal may need the opposite default: a smaller audience, deliberate sync, local processing, and a simple way to leave."
      },
      {
        type: "h2",
        content: "Start with the audience, not the feature list"
      },
      {
        type: "list",
        content: [
          "Is the writing for collaboration, publication, or only for you?",
          "Does the product require an account before you can write?",
          "Is sync required, optional, end-to-end encrypted, or unavailable?",
          "Where does semantic search or AI reflection run?",
          "Can you export entries in a format another tool can read?",
          "Can you delete local and synced copies without contacting support?"
        ]
      },
      {
        type: "h2",
        content: "AI reflection should show its limits"
      },
      {
        type: "paragraph",
        content: "A journaling model can help retrieve related passages, surface repeated topics, or suggest a prompt. It should not diagnose a condition, declare why someone feels a certain way, or present a pattern as clinical truth. Good reflection software keeps the original writing visible and leaves interpretation with the person."
      },
      {
        type: "h2",
        content: "Local-first is a useful direction, not a finished specification"
      },
      {
        type: "paragraph",
        content: "A product should still state how entries are stored, whether backups include them, what encryption protects, how device loss works, and whether any optional sync or support flow creates another copy. Until those details are published, private is an intention rather than a complete data-flow answer."
      },
      {
        type: "cta",
        content: "Cove is an in-development private journal with on-device reflection, local pattern discovery, journal-grounded recall, and an explicit boundary between reflective prompts and mental-health authority.",
        ctaAppId: "cove"
      },
      {
        type: "quote",
        content: "A journal should help you revisit your own words—not speak with more authority than they contain."
      }
    ]
  },
  {
    id: "offline-ai-revolution",
    title: "What Offline AI Does Well—and Where It Still Connects",
    date: "2026.03.05",
    modified: "2026.07.10",
    readTime: "7 MIN READ",
    category: "EDUCATION",
    tags: ["#OFFLINE-AI", "#ON-DEVICE", "#PRIVACY"],
    excerpt: "Offline AI can reduce data movement and network dependence, but setup, purchases, optional sync, imports, and support may still connect.",
    blocks: [
      {
        type: "paragraph",
        content: "Offline AI runs the named inference task on the phone, tablet, or computer in front of you. That can make a focused workflow faster to start, available without a network, and easier to explain from a privacy perspective. It can also require smaller models, more storage, newer hardware, and an initial download."
      },
      {
        type: "h2",
        content: "Where local inference is genuinely useful"
      },
      {
        type: "list",
        content: [
          "PRIVATE INPUTS: Voice recordings, journal entries, financial records, and strategy notes can avoid a remote inference server.",
          "UNRELIABLE NETWORKS: Core work can continue on a plane, in a tunnel, or anywhere connectivity is poor after setup.",
          "FOCUSED TASKS: A model selected for transcription, categorization, recall, or task breakdown can be useful without solving every general question.",
          "PREDICTABLE COSTS: Local inference does not create a new cloud API request every time the feature runs."
        ]
      },
      {
        type: "h2",
        content: "Where the tradeoffs appear"
      },
      {
        type: "paragraph",
        content: "A local model competes for device memory, battery, storage, and thermal headroom. Compatibility may depend on a specific operating system or chip. A smaller focused model can outperform a larger general model on one benchmark and still perform worse on another language, accent, domain, or recording condition. Product pages should publish the target, requirement, and limitation together."
      },
      {
        type: "h2",
        content: "Offline does not always mean never connected"
      },
      {
        type: "list",
        content: [
          "A model or language pack may need a one-time download.",
          "The App Store may verify a purchase or subscription.",
          "A person may choose optional iCloud or provider sync.",
          "Importing remote data, such as bank transactions, requires that provider connection.",
          "A support request sends the information the person chooses to include."
        ]
      },
      {
        type: "h2",
        content: "How can I test an offline AI claim?"
      },
      {
        type: "paragraph",
        content: "Finish any documented model setup, place the device in airplane mode, and try the core workflow from input to export. Then read the product-specific connection disclosure. A useful claim names what works offline, what does not, and what happens when an optional service is enabled."
      },
      {
        type: "cta",
        content: "Mettle shows how local intelligence can stay responsive without owning high-stakes outputs: its deterministic training engine remains in charge of every prescription while on-device AI selects and explains within strict boundaries.",
        ctaAppId: "mettle"
      },
      {
        type: "quote",
        content: "The strongest offline claim is one a person can test for themselves."
      }
    ]
  }
];
