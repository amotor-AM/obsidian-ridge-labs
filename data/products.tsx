import React from 'react';
import { LineChart, Book, Mic, GitMerge, Shield, Cpu, Wifi, Eye } from 'lucide-react';
import { Product } from '../types';

export const products: Product[] = [
  {
    id: "vault",
    name: "OBSIDIAN RIDGE VAULT",
    shortName: "VAULT",
    tagline: "Total Control Over Your Money.",
    category: "Smart Finance",
    description: "Understand your spending and predict your future balance without giving a company your bank password.",
    fullDescription: "Most finance apps sell your data to banks and advertisers. Obsidian Ridge Vault changes the game. It analyzes your spending habits using AI that lives entirely on your phone. You don't have to link your bank accounts or share passwords—just scan your statements and let Vault's private AI do the heavy lifting. Secure, fast, and completely anonymous.",
    icon: LineChart,
    specs: [
      { label: "Processing", value: "On-Device AI" },
      { label: "Sync", value: "No Cloud Required" },
      { label: "Security", value: "Biometric Lock" },
      { label: "Privacy", value: "Zero Data Collected" }
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
        title: "No Password Needed",
        description: "Stop giving apps your bank login. Vault works with files you already have.",
        icon: <Shield className="w-5 h-5 text-neon" />
      },
      {
        title: "Predict the Future",
        description: "Know if you can afford that next big purchase with AI balance forecasting.",
        icon: <LineChart className="w-5 h-5 text-neon" />
      },
      {
        title: "100% Private",
        description: "We don't have servers, so we can't see your net worth even if we wanted to.",
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
    id: "echo",
    name: "ECHO CHAMBER",
    shortName: "ECHO",
    tagline: "Private AI Transcription. On Your Device.",
    category: "Offline Transcription",
    description: "Record, transcribe, and summarize meetings entirely on your iPhone — no cloud, no internet, no data collection. AI-powered speaker identification, 6 summary formats, and 25-language support.",
    fullDescription: "Echo Chamber is a private, offline transcription app that records and transcribes audio in real-time using on-device AI. Powered by the Parakeet TDT v3 neural engine, it delivers instant speech-to-text in 25 languages without ever connecting to the internet. Generate AI meeting summaries in 6 formats — including Cornell Notes and Meeting Minutes — ask your transcript questions with AI Chat, and export to 7 formats including PDF and SRT subtitles. Built for lawyers, doctors, and executives who need absolute confidentiality.",
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
        { title: "Summarize with AI", description: "Generate Cornell Notes, Meeting Minutes, Bullet Points, Outlines, Q&A, or Executive Summaries — processed on-device." },
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
  }
];