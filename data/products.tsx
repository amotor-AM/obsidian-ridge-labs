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
    accent: "#c7ff3e",
    appStoreUrl: "",
    githubUrl: "https://github.com/obsidian-ridge-labs/Vault",
    hasKnowledgeBase: true,
    platforms: ["iOS", "iPadOS"],
    minOS: "iOS 17",
    price: "Free · optional bank sync",
    description: "Understand your spending and predict your future balance without giving a company your bank password.",
    fullDescription: "Vault analyzes spending with AI that lives on your phone, so its core budgeting, categorization, forecasting, and coaching workflows can stay local. Track manually for the most private setup, import statements and receipts on-device, or enable Plaid bank sync when automatic updates are worth the connection. Bank credentials are entered through Plaid and never handled by Vault.",
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
    fullDescription: "Mind Palace is an in-development journal concept designed to keep reflection private. Its local intelligence will help surface patterns across entries, connect moods with habits, and make past thoughts easier to recall without treating personal writing as cloud training data.",
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
    accent: "#c7ff3e",
    appStoreUrl: "https://apps.apple.com/us/app/echo-chamber-ai-transcription/id6761675060",
    githubUrl: "https://github.com/obsidian-ridge-labs/Echo-Chamber",
    hasKnowledgeBase: true,
    platforms: ["iOS", "iPadOS", "macOS", "visionOS"],
    minOS: "iOS 18",
    price: "Free · Pro from $2.99/mo",
    description: "Record audio, follow a live transcript, polish it with AI, search every word, and export to TXT, Markdown, PDF, or DOCX. Core speech and AI processing happen on your Apple device.",
    fullDescription: "Echo Chamber is an on-device voice transcription app for meetings, lectures, and dictation. Record audio, see a live transcript as you speak, bookmark important moments, create AI-polished notes and summaries, search across recordings, and export to TXT, Markdown, PDF, or DOCX. Audio is processed locally using Apple on-device speech frameworks and packaged models rather than being uploaded to Obsidian Ridge Labs.",
    icon: Mic,
    specs: [
      { label: "Processing", value: "On-Device" },
      { label: "Transcript", value: "Live" },
      { label: "Internet", value: "Not Required" },
      { label: "Export", value: "4 Formats" }
    ],
    primaryColor: "text-neon",
    workflow: [
        { title: "Record or Import", description: "Tap to record live audio or import MP3, WAV, M4A, MP4, and more. Works in airplane mode." },
        { title: "Transcribe On-Device", description: "On-device speech processing turns your recording into a live transcript as you speak." },
        { title: "Polish with AI", description: "Turn the raw verbatim transcript into clear notes and summaries using local intelligence." },
        { title: "Search or Export", description: "Search every word, then export the result to TXT, Markdown, PDF, or DOCX." }
    ],
    features: [
      {
        title: "Speaker Identification",
        description: "Automatic speaker diarization labels who said what. Voice profiles learn and recognize speakers over time.",
        icon: <Mic className="w-5 h-5 text-neon" />
      },
      {
        title: "Offline-Ready",
        description: "After any required model setup, core recording, transcription, notes, and search work without Wi-Fi or cellular service.",
        icon: <Wifi className="w-5 h-5 text-neon" />
      },
      {
        title: "Zero Cloud Exposure",
        description: "Audio is processed on-device rather than uploaded to Obsidian Ridge Labs. Face ID can add another layer of local access control.",
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
    githubUrl: "https://github.com/obsidian-ridge-labs/Molehill",
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
