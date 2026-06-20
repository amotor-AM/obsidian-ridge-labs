import { LineChart, Book, Mic, GitMerge, Mountain, Shield, Cpu, Wifi, Eye, ListChecks, Sparkles, Heart } from 'lucide-react';
import { Product } from '../types';

export const products: Product[] = [
  {
    id: "vault",
    name: "VAULT",
    shortName: "VAULT",
    tagline: "Total Control Over Your Money.",
    category: "Smart Finance",
    status: "live",
    accent: "#00f0ff",
    appStoreUrl: "",
    hasKnowledgeBase: true,
    platforms: ["iOS", "iPadOS"],
    minOS: "iOS 17",
    price: "Free · optional bank sync",
    description: "Understand your spending and predict your future balance without giving a company your bank password.",
    fullDescription: "Most finance apps sell your data to banks and advertisers. Vault changes the game. It analyzes your spending with AI that lives entirely on your phone, so no cloud is required to use it. Track everything by hand and it never leaves your device, or link a bank through Plaid when you want automatic updates, where your login happens on Plaid's secure screen and your password never touches Vault. Secure, fast, and yours.",
    icon: LineChart,
    specs: [
      { label: "Processing", value: "On-Device AI" },
      { label: "Sync", value: "No Cloud Required" },
      { label: "Security", value: "Biometric Lock" },
      { label: "Privacy", value: "On-Device First" }
    ],
    version: "v2.1.0",
    releaseDate: "2024.04.12",
    primaryColor: "text-neon",
    workflow: [
        { title: "Import", description: "Upload a PDF statement or scan a receipt. The app reads it locally." },
        { title: "Analyze", description: "Our private AI categorizes your spending automatically." },
        { title: "Forecast", description: "See exactly how much money you'll have in 30 days based on your habits." },
        { title: "Secure", description: "Your data is locked on your phone and disappears if you delete the app." }
    ],
    features: [
      {
        title: "Your Password, Never Ours",
        description: "Track by hand for free, or link a bank through Plaid. Either way, your bank login happens on Plaid's screen, never inside Vault.",
        icon: <Shield className="w-5 h-5 text-neon" />
      },
      {
        title: "Predict the Future",
        description: "Know if you can afford that next big purchase with AI balance forecasting.",
        icon: <LineChart className="w-5 h-5 text-neon" />
      },
      {
        title: "Yours by Default",
        description: "Your spending, budgets, and AI coach live on your iPhone, not on our servers. Link a bank only if you want automatic sync.",
        icon: <Eye className="w-5 h-5 text-neon" />
      }
    ]
  },
  {
    id: "mind",
    name: "MIND PALACE",
    shortName: "MIND",
    tagline: "A Journal That Actually Understands You.",
    category: "Personal Growth",
    status: "coming-soon",
    accent: "#a855f7",
    hasKnowledgeBase: false,
    description: "Write your thoughts and let our AI help you find patterns in your life. Private, secure, and purely yours.",
    fullDescription: "Notion and Evernote keep your notes on their servers. Mind Palace keeps your thoughts where they belong: in your pocket. As you journal, our built-in AI learns your patterns and helps you find connections between your moods and your habits. It's like having a digital therapist that has zero access to the internet.",
    icon: Book,
    specs: [
      { label: "Brain", value: "Private AI Core" },
      { label: "Memory", value: "Unlimited Entries" },
      { label: "Lock", value: "Passcode + FaceID" },
      { label: "Cloud", value: "Never Connected" }
    ],
    version: "v1.4.2",
    releaseDate: "2024.01.20",
    primaryColor: "text-purple-400",
    workflow: [
        { title: "Write", description: "Journal your thoughts as they come. No formatting needed." },
        { title: "Connect", description: "AI finds patterns in your writing you might have missed." },
        { title: "Chat", description: "Ask your journal: 'Why have I been feeling tired lately?' and get real answers." },
        { title: "Own", description: "Every word is encrypted. If you lose your phone, nobody can read your mind." }
    ],
    features: [
      {
        title: "Pattern Recognition",
        description: "The AI notices if you're happier when you exercise or stressed before meetings.",
        icon: <Cpu className="w-5 h-5 text-purple-400" />
      },
      {
        title: "Smart Recall",
        description: "Search by feeling, not just keywords. Find 'that time I was excited about the new job.'",
        icon: <Book className="w-5 h-5 text-purple-400" />
      },
      {
        title: "Ultimate Trust",
        description: "Your journal is encrypted. We don't have the keys. You are the only owner.",
        icon: <Shield className="w-5 h-5 text-purple-400" />
      }
    ]
  },
  {
    id: "echochamber",
    name: "ECHO CHAMBER",
    shortName: "ECHO",
    tagline: "Private AI Transcription. On Your Device.",
    category: "Offline Transcription",
    status: "live",
    accent: "#00f0ff",
    appStoreUrl: "https://apps.apple.com/us/app/echo-chamber-ai-transcription/id6761675060",
    hasKnowledgeBase: true,
    platforms: ["iOS", "iPadOS", "macOS", "watchOS"],
    minOS: "iOS 18",
    price: "Free · Pro from $4.99/mo",
    description: "Record, transcribe, and summarize meetings entirely on your iPhone. No cloud, no internet, no data collection. AI-powered speaker identification, 6 summary formats, and 25-language support.",
    fullDescription: "Echo Chamber is a private, offline transcription app that records and transcribes audio in real-time using on-device AI. Powered by the Parakeet TDT v3 neural engine, it delivers instant speech-to-text in 25 languages without ever connecting to the internet. Generate AI meeting summaries in 6 formats (including Cornell Notes and Meeting Minutes), ask your transcript questions with AI Chat, and export to 7 formats including PDF and SRT subtitles. Built for lawyers, doctors, and executives who need absolute confidentiality.",
    icon: Mic,
    specs: [
      { label: "Engine", value: "Parakeet TDT v3" },
      { label: "Languages", value: "25 Supported" },
      { label: "Internet", value: "Not Required" },
      { label: "Export", value: "7 Formats" }
    ],
    version: "v1.0.0",
    releaseDate: "2024.05.15",
    primaryColor: "text-neon",
    workflow: [
        { title: "Record or Import", description: "Tap to record live audio or import MP3, WAV, M4A, MP4, and more. Works in airplane mode." },
        { title: "Transcribe On-Device", description: "The Parakeet TDT v3 engine transcribes speech to text in real-time on your phone's Neural Processing Unit." },
        { title: "Summarize with AI", description: "Generate Cornell Notes, Meeting Minutes, Bullet Points, Outlines, Q&A, or Executive Summaries, processed on-device." },
        { title: "Export or Ask AI", description: "Export to PDF, SRT, VTT, Markdown, JSON, or plain text. Or ask AI questions about your transcript." }
    ],
    features: [
      {
        title: "Speaker Identification",
        description: "Automatic speaker diarization labels who said what. Voice profiles learn and recognize speakers over time.",
        icon: <Mic className="w-5 h-5 text-neon" />
      },
      {
        title: "100% Offline",
        description: "Every feature works without WiFi or cellular. Transcribe on planes, in secure facilities, or off the grid.",
        icon: <Wifi className="w-5 h-5 text-neon" />
      },
      {
        title: "Zero Cloud Exposure",
        description: "No audio is ever uploaded. No servers, no accounts, no data collection. Face ID lock keeps recordings secure.",
        icon: <Shield className="w-5 h-5 text-neon" />
      }
    ]
  },
  {
    id: "nexus",
    name: "DECISION NEXUS",
    shortName: "NEXUS",
    tagline: "Think Clearer. Act Faster.",
    category: "Strategic Logic",
    status: "coming-soon",
    accent: "#fbbf24",
    hasKnowledgeBase: false,
    description: "Map out complex decisions and let AI play 'devil's advocate' to find holes in your plan.",
    fullDescription: "Decision Nexus is a visual sandbox for your most important choices. Whether you're planning a business move or a legal strategy, Nexus helps you see every possible outcome. Our built-in 'Red Team' AI challenges your logic and suggests counter-moves, helping you prepare for anything.",
    icon: GitMerge,
    specs: [
      { label: "Type", value: "Logic Canvas" },
      { label: "AI Mode", value: "Adversarial Thinking" },
      { label: "Export", value: "Private PDF" },
      { label: "Focus", value: "Deep Strategy" }
    ],
    version: "v1.1.0",
    releaseDate: "2024.03.10",
    primaryColor: "text-amber-400",
    workflow: [
        { title: "Map", description: "Drag and drop your ideas and see how they connect." },
        { title: "Simulate", description: "AI runs hundreds of scenarios to see what's likely to happen." },
        { title: "Challenge", description: "The 'Devil's Advocate' mode finds weaknesses in your plan." },
        { title: "Export", description: "Save your strategy as a secure document for your eyes only." }
    ],
    features: [
      {
        title: "Strategic AI",
        description: "An AI partner that helps you brainstorm and stress-test your big ideas.",
        icon: <Cpu className="w-5 h-5 text-amber-400" />
      },
      {
        title: "Visual Clarity",
        description: "Turn complex problems into easy-to-read flowcharts and maps.",
        icon: <GitMerge className="w-5 h-5 text-amber-400" />
      },
      {
        title: "Enterprise Ready",
        description: "The gold standard for corporate strategy that needs to stay in-house.",
        icon: <Shield className="w-5 h-5 text-amber-400" />
      }
    ]
  },
  {
    id: "molehill",
    name: "MOLEHILL",
    shortName: "MOLEHILL",
    tagline: "Make the Mountain a Molehill.",
    category: "Focus & Tasks",
    status: "coming-soon",
    accent: "#34d399",
    hasKnowledgeBase: true,
    platforms: ["iOS"],
    minOS: "iOS 26",
    price: "Free · Pro from $2.99/mo",
    description: "Overwhelmed by your to-do list? On-device AI breaks any task down into the one small step that comes next. No streaks. No shame.",
    fullDescription: "Big tasks freeze big brains. Molehill turns the mountain into a molehill, one doable step at a time. Built for ADHD and anyone who's ever stared at a to-do list and shut down, it uses on-device AI to do the executive-function heavy lifting: dump your brain, break it down, and see only the next step. Private, encouraging, and always on your side.",
    icon: Mountain,
    specs: [
      { label: "Intelligence", value: "On-Device" },
      { label: "Works Offline", value: "Always" },
      { label: "Tracking", value: "None" },
      { label: "Made For", value: "ADHD & Focus" }
    ],
    primaryColor: "text-emerald-400",
    workflow: [
        { title: "Dump It", description: "Type the thing stressing you out, or pour out everything on your mind at once." },
        { title: "Break It Down", description: "On-device AI turns it into small, concrete steps you can actually start." },
        { title: "Do One Step", description: "Focus mode and the Lock Screen widget show just the next step. Begin there." },
        { title: "Keep Moving", description: "Finish a step, advance to the next. No streaks to break, no guilt if you pause." }
    ],
    features: [
      {
        title: "One Step at a Time",
        description: "See the next step, not the whole intimidating list. Less overwhelm, more momentum.",
        icon: <ListChecks className="w-5 h-5 text-emerald-400" />
      },
      {
        title: "Brain Dump, Sorted",
        description: "Pour everything out of your head; on-device AI organizes it into clear, doable tasks.",
        icon: <Sparkles className="w-5 h-5 text-emerald-400" />
      },
      {
        title: "No Streaks, No Shame",
        description: "A focus app that's gentle by design, built to work with how your brain actually works.",
        icon: <Heart className="w-5 h-5 text-emerald-400" />
      }
    ]
  }
];

export const getProduct = (id: string) => products.find((p) => p.id === id);
export const liveProducts = products.filter((p) => p.status === 'live');
export const comingSoonProducts = products.filter((p) => p.status === 'coming-soon');
