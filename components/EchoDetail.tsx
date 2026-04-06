import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { blogPosts } from '../data/blog';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Download, ShieldCheck, Terminal, CheckCircle2, Mic, Wifi, WifiOff, Shield,
  Activity, ArrowRight, FileText, Clock, Globe, Upload, MessageSquare,
  Users, Calendar, Watch, Lock, Search, Languages, Cpu, Zap, BookOpen,
  FileDown, ChevronRight,
} from 'lucide-react';
import SEO, { buildSoftwareApp, buildBreadcrumbs, buildFAQSchema, SITE_URL } from './SEO';

const EchoDetail: React.FC = () => {
  const product = products.find(p => p.id === 'echo')!;
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const otherProducts = products.filter(p => p.id !== 'echo');
  const relatedPost = blogPosts.find(p => p.id === 'otter-vs-echo');
  const Icon = product.icon;

  // ── SEO Data ──────────────────────────────────────────────────────────────

  const seoDescription = 'Echo Chamber is a private offline transcription app for iPhone that records, transcribes, and summarizes meetings entirely on-device. Powered by Parakeet TDT v3 AI with speaker identification, 25-language support, 6 AI summary formats (including Cornell Notes), AI Chat, and 7 export formats. No cloud, no accounts, no data collection. Built for lawyers, doctors, and executives.';

  const softwareApp = {
    ...buildSoftwareApp(product),
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'Productivity',
    operatingSystem: 'iOS 17.0+, macOS, watchOS',
    featureList: 'On-device AI transcription, real-time speech to text, 25-language support, speaker diarization, voice profiles, AI meeting summaries (Cornell Notes, Outline, Meeting Minutes, Bullet Points, Q&A, Executive Summary), AI transcript chat, 7 export formats (PDF, SRT, VTT, Markdown, JSON, timestamped text, plain text), audio/video import (MP3 M4A WAV AAC MP4 MOV AIFF CAF), translation to 15+ languages, Face ID lock, Apple Watch companion, calendar view, iCloud sync, full-text search, Spotlight integration, widgets, Live Activities, recording recovery',
  };

  const breadcrumbs = buildBreadcrumbs([
    { name: 'Home', url: '/' },
    { name: 'Apps', url: '/' },
    { name: 'Echo Chamber', url: '/apps/echo' },
  ]);

  const faqSchema = buildFAQSchema([
    {
      question: 'Does Echo Chamber send my audio to the cloud?',
      answer: 'Never. Echo Chamber transcribes audio entirely on your device using the Parakeet TDT v3 neural engine running on your phone\'s NPU. No audio data is ever transmitted to any server. The app works fully offline — in airplane mode, in secure facilities, or anywhere without internet.',
    },
    {
      question: 'Can Echo Chamber work without internet?',
      answer: 'Yes. Every feature in Echo Chamber works 100% offline — recording, transcription, AI summaries, speaker identification, translation, search, and export. Internet is only needed optionally for iCloud sync between devices.',
    },
    {
      question: 'How many languages does Echo Chamber support?',
      answer: 'Echo Chamber supports real-time transcription in 25 European languages with automatic language detection. It also supports translation of transcripts to 15+ languages including Spanish, French, German, Chinese, Japanese, Korean, Arabic, Hindi, Russian, and more.',
    },
    {
      question: 'What AI summary formats does Echo Chamber offer?',
      answer: 'Echo Chamber generates 6 AI-powered summary formats — all processed on-device: Cornell Notes (two-column study format), Outline (hierarchical), Meeting Minutes (formal with action items), Bullet Summary, Q&A Interview (extracted question-answer pairs), and Executive Summary.',
    },
    {
      question: 'Is Echo Chamber suitable for lawyers and legal professionals?',
      answer: 'Yes. Echo Chamber was designed for professionals who need absolute confidentiality. Since no audio ever leaves your device, attorney-client privilege is preserved. There are no servers to subpoena, no cloud recordings to leak, and Face ID lock prevents unauthorized access.',
    },
    {
      question: 'What audio and video formats can I import into Echo Chamber?',
      answer: 'Echo Chamber supports importing MP3, M4A, WAV, AAC, AIFF, CAF audio files and MP4, MOV video files. Video files have their audio track extracted automatically for transcription.',
    },
    {
      question: 'What export formats does Echo Chamber support?',
      answer: 'Echo Chamber supports 7 export formats: Plain Text, Timestamped Text, SRT Subtitles, VTT Subtitles, Markdown, JSON (with full metadata), and professionally formatted PDF with speaker labels and timestamps.',
    },
    {
      question: 'Is Echo Chamber a good Otter.ai alternative?',
      answer: 'Echo Chamber is the privacy-first alternative to Otter.ai. Unlike Otter, Echo Chamber processes everything on-device with zero cloud dependency. Your audio is never streamed to external servers, never used to train AI models, and never accessible by employees or subpoenas. It also works offline and supports more AI summary formats.',
    },
    {
      question: 'Does Echo Chamber have speaker identification?',
      answer: 'Yes. Echo Chamber includes automatic speaker diarization that identifies and labels different speakers in a recording. It also supports persistent voice profiles — the AI learns to recognize speakers over time using voice embedding technology.',
    },
    {
      question: 'Can I ask questions about my transcript in Echo Chamber?',
      answer: 'Yes. The AI Chat feature lets you ask questions about any transcript using on-device AI. You can ask things like "What were the action items?" or "What did Speaker A say about the budget?" and get instant answers — all processed locally on your phone.',
    },
  ]);

  // ── Render ─────────────────────────────────────────────────────────────────

  return (
    <div ref={containerRef} className="min-h-screen pt-32 pb-20 overflow-x-hidden bg-black">
      <SEO
        title="Echo Chamber — Private Offline AI Transcription App"
        description={seoDescription}
        ogType="product"
        jsonLd={[softwareApp, breadcrumbs, faqSchema]}
      />

      {/* ═══════════════════════════════════════════════════════════════════════
          HERO — Record. Transcribe. Summarize. Privately.
          ═══════════════════════════════════════════════════════════════════════ */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col lg:flex-row gap-20 items-center"
        >
          <div className="flex-1 relative z-10">
            <div className="flex items-center gap-5 mb-10">
              <div className="p-4 bg-white/[0.03] border border-white/5 rounded-2xl">
                <Mic className="w-8 h-8 text-neon" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-apple-gray uppercase tracking-widest">Offline Transcription</span>
                <span className="text-[11px] font-medium text-neon mt-1">{product.version}</span>
              </div>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight tracking-tight">
              ECHO CHAMBER
            </h1>
            <p className="text-2xl md:text-3xl font-medium mb-6 max-w-2xl text-apple-gray">
              Private AI transcription that lives on your device.
            </p>
            <p className="text-apple-gray text-lg leading-relaxed max-w-xl mb-12 font-medium">
              Record meetings, transcribe in real-time, and generate AI summaries — all without
              an internet connection. Powered by on-device neural processing. No cloud. No accounts.
              No audio ever leaves your phone.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <button className="apple-button px-10 py-4 bg-neon text-white font-semibold rounded-full hover:opacity-90 transition-all flex items-center justify-center gap-3">
                <Download size={20} />
                Download App
              </button>
              <Link to="/blog/otter-vs-echo" className="px-10 py-4 border border-white/10 bg-transparent text-white font-semibold rounded-full hover:bg-white/5 transition-all text-center">
                Otter.ai vs Echo Chamber
              </Link>
            </div>
          </div>

          {/* Phone Screenshot — Record Screen */}
          <div className="w-full lg:w-1/2 flex justify-center perspective-1000">
            <motion.div
              style={{ rotateY: -10, rotateX: 5, y }}
              className="relative w-[320px] shadow-[0_0_100px_rgba(0,240,255,0.1)]"
            >
              <img
                src="/images/echo/RecordScreen.png"
                alt="Echo Chamber recording screen — tap to record with live waveform visualization, on-device AI transcription ready"
                className="w-full h-auto rounded-[2.5rem]"
                loading="eager"
                width={2160}
                height={3840}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent pointer-events-none rounded-[2.5rem]" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          TRUST BAR — Key Numbers
          ═══════════════════════════════════════════════════════════════════════ */}
      <section className="border-y border-white/5 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '25', label: 'Languages', sub: 'Auto-detected' },
            { value: '6', label: 'AI Summary Formats', sub: 'On-device' },
            { value: '7', label: 'Export Formats', sub: 'PDF, SRT, VTT...' },
            { value: '0', label: 'Servers', sub: 'Zero cloud' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white tracking-tight">{stat.value}</div>
              <div className="text-sm font-bold text-neon mt-1 uppercase tracking-widest">{stat.label}</div>
              <div className="text-xs text-apple-gray mt-1">{stat.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          THE PROBLEM — Why Cloud Transcription is Dangerous
          ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-32 px-6 md:px-12 bg-[#0a0a0a] border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-bold tracking-widest mb-10 uppercase text-neon">The Problem with Cloud Transcription</h2>
          <h3 className="text-4xl md:text-6xl font-bold text-white mb-10 leading-tight tracking-tight">
            Every cloud recorder is a <span className="text-apple-gray">corporate wiretap.</span>
          </h3>
          <div className="space-y-8 text-apple-gray text-xl leading-relaxed font-medium">
            <p>
              When you use Otter.ai, Fireflies, or any cloud-based meeting assistant, your audio is streamed to
              their servers, stored on their infrastructure, and potentially used to train their AI models. Your confidential
              strategy discussions, legal consultations, and medical conversations become{' '}
              <span className="text-white font-semibold">someone else's data asset</span>.
            </p>
            <p>
              Echo Chamber eliminates this risk entirely. There are no servers to breach, no cloud recordings
              to subpoena, and no third-party employees who can access your audio. The transcription engine runs
              on your phone's Neural Processing Unit — the same chip that powers Face ID.
            </p>
          </div>

          {/* Comparison Strip */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-red-500/20 bg-red-500/5 p-8 rounded-none">
              <div className="text-red-400 text-xs font-bold uppercase tracking-widest mb-4">Cloud Transcription</div>
              <ul className="space-y-3 text-apple-gray text-sm">
                {[
                  'Audio streamed to external servers',
                  'Company employees can access recordings',
                  'Subject to subpoenas and warrants',
                  'May train AI with your data',
                  'Requires constant internet connection',
                  'Monthly subscription per seat',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-red-400 mt-0.5">&#x2717;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-neon/20 bg-neon/5 p-8 rounded-none">
              <div className="text-neon text-xs font-bold uppercase tracking-widest mb-4">Echo Chamber</div>
              <ul className="space-y-3 text-apple-gray text-sm">
                {[
                  'Audio processed on your device\'s NPU',
                  'Zero server-side access — we can\'t hear you',
                  'Nothing to subpoena — no cloud exists',
                  'AI model ships with the app, never phones home',
                  'Works offline, in airplane mode, anywhere',
                  'Your recordings, your device, your control',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={14} className="text-neon mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          HOW IT WORKS — Vertical Flow
          ═══════════════════════════════════════════════════════════════════════ */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto py-32">
        <div className="flex flex-col md:flex-row gap-20">
          <div className="md:w-1/3">
            <h2 className="text-sm font-bold tracking-widest mb-6 uppercase text-neon">How It Works</h2>
            <h3 className="text-5xl font-bold text-white mb-8 tracking-tight">Record. Transcribe. Understand.</h3>
            <p className="text-apple-gray text-lg font-medium">From live audio to AI-powered insights — entirely on your iPhone.</p>
          </div>

          <div className="md:w-2/3 relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-neon/20" />
            <div className="space-y-16">
              {[
                {
                  step: '01',
                  title: 'Record or Import',
                  desc: 'Tap the microphone to record live conversations, meetings, lectures, or interviews. Or import existing audio and video files — MP3, M4A, WAV, AAC, MP4, MOV, AIFF, and CAF are all supported.',
                  icon: <Mic size={20} className="text-neon" />,
                },
                {
                  step: '02',
                  title: 'On-Device Transcription',
                  desc: 'The Parakeet TDT v3 engine — a 0.6 billion parameter neural model — transcribes speech to text in real-time on your phone\'s Neural Processing Unit. 25 languages supported with automatic detection.',
                  icon: <Cpu size={20} className="text-neon" />,
                },
                {
                  step: '03',
                  title: 'AI-Powered Summaries',
                  desc: 'Generate structured summaries in 6 formats: Cornell Notes, Outline, Meeting Minutes, Bullet Points, Q&A, or Executive Summary. All processed by Apple Intelligence on-device.',
                  icon: <BookOpen size={20} className="text-neon" />,
                },
                {
                  step: '04',
                  title: 'Ask, Export, or Translate',
                  desc: 'Chat with your transcript using AI to extract insights. Export as PDF, SRT subtitles, Markdown, JSON, or plain text. Translate to 15+ languages — Spanish, French, German, Chinese, Japanese, Korean, and more.',
                  icon: <FileDown size={20} className="text-neon" />,
                },
              ].map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative pl-20"
                >
                  <div className="absolute left-0 top-0 w-12 h-12 bg-neon/10 border border-neon/30 flex items-center justify-center text-sm font-bold text-neon z-10 rounded-full">
                    {step.icon}
                  </div>
                  <div className="text-[10px] text-neon font-bold tracking-widest uppercase mb-2">Step {step.step}</div>
                  <h4 className="text-2xl font-bold text-white mb-3 tracking-tight">{step.title}</h4>
                  <p className="text-apple-gray text-base leading-relaxed max-w-lg font-medium">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          AI INTELLIGENCE SUITE — 6 Summary Formats
          ═══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#0a0a0a] border-y border-white/5 py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-sm font-bold tracking-widest mb-6 uppercase text-neon">AI Intelligence Suite</h2>
            <h3 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Six ways to understand your meetings.
            </h3>
            <p className="text-apple-gray text-xl max-w-2xl font-medium">
              Echo Chamber generates structured AI summaries in 6 professional formats — all processed on-device by Apple Intelligence.
              No transcript data ever leaves your phone.
            </p>
          </div>

          {/* Summary Format Grid — Staggered 3-column */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'Cornell Notes',
                desc: 'Two-column academic format with cues, detailed notes, and summary. Ideal for studying recordings or reviewing key concepts.',
                badge: 'STUDY',
                color: 'text-purple-400 border-purple-400/20 bg-purple-400/5',
              },
              {
                name: 'Meeting Minutes',
                desc: 'Formal format with attendees, agenda items, key decisions, and action items. Ready to share with stakeholders.',
                badge: 'BUSINESS',
                color: 'text-blue-400 border-blue-400/20 bg-blue-400/5',
              },
              {
                name: 'Outline',
                desc: 'Hierarchical structure with main topics, subtopics, and supporting details. Perfect for long-form content.',
                badge: 'STRUCTURE',
                color: 'text-neon border-neon/20 bg-neon/5',
              },
              {
                name: 'Bullet Summary',
                desc: 'Concise 5-15 bullet points capturing the essential takeaways. Quick reference for busy professionals.',
                badge: 'QUICK',
                color: 'text-amber-400 border-amber-400/20 bg-amber-400/5',
              },
              {
                name: 'Q&A Extract',
                desc: 'Automatically extracts question-answer pairs from interviews, depositions, and consultations.',
                badge: 'LEGAL',
                color: 'text-rose-400 border-rose-400/20 bg-rose-400/5',
              },
              {
                name: 'Executive Summary',
                desc: '250-word high-level overview with context, key findings, and recommendations. C-suite ready.',
                badge: 'EXECUTIVE',
                color: 'text-cyan-400 border-cyan-400/20 bg-cyan-400/5',
              },
            ].map((format, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`border p-8 ${format.color} group hover:scale-[1.02] transition-transform`}
              >
                <div className="text-[10px] font-bold tracking-widest uppercase mb-4 opacity-60">{format.badge}</div>
                <h4 className="text-xl font-bold text-white mb-3 tracking-tight">{format.name}</h4>
                <p className="text-apple-gray text-sm leading-relaxed font-medium">{format.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 flex items-center gap-3 text-neon text-sm font-medium">
            <Lock size={16} />
            <span>All summaries are generated on-device by Apple Intelligence. Requires iPhone 16+ with iOS 26.</span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          AI CHAT — Ask Your Transcript
          ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* AI Chat Screenshot */}
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="relative w-[300px] md:w-[340px]">
              <img
                src="/images/echo/AIChat.png"
                alt="Echo Chamber AI Chat — ask questions about your transcript and get instant on-device AI answers with key points and action items"
                className="w-full h-auto rounded-[2.5rem] shadow-[0_0_80px_rgba(0,240,255,0.08)]"
                loading="lazy"
                width={2160}
                height={3840}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent pointer-events-none rounded-[2.5rem]" />
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <h2 className="text-sm font-bold tracking-widest mb-6 uppercase text-neon">AI Transcript Chat</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
              Ask your recordings anything.
            </h3>
            <p className="text-apple-gray text-xl leading-relaxed font-medium mb-8">
              Don't re-listen to an hour-long recording to find one detail. Ask the AI directly.
              "What did the client say about pricing?" "Summarize the legal risks discussed." "List all dates mentioned."
            </p>
            <ul className="space-y-4">
              {[
                'Instant answers from any transcript',
                'Conversation history — ask follow-up questions',
                'Context-aware across long recordings',
                'Processed entirely on-device',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-apple-gray font-medium">
                  <CheckCircle2 size={16} className="text-neon flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SPEAKER INTELLIGENCE — Voice Profiles
          ═══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#0a0a0a] border-y border-white/5 py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-sm font-bold tracking-widest mb-6 uppercase text-neon">Speaker Intelligence</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
              Knows who's talking. <span className="text-apple-gray">Learns over time.</span>
            </h3>
            <p className="text-apple-gray text-xl leading-relaxed font-medium mb-10">
              Echo Chamber automatically identifies and labels different speakers in every recording using on-device speaker diarization.
              Create persistent voice profiles, and the AI learns to recognize recurring speakers across all your transcripts.
            </p>
            <div className="space-y-6">
              {[
                { title: 'Automatic Diarization', desc: 'AI detects speaker changes and labels segments automatically — no manual tagging needed.' },
                { title: 'Voice Profile Learning', desc: 'Save voice fingerprints using cosine similarity matching. Accuracy improves with every recording.' },
                { title: 'Custom Vocabulary', desc: 'Add domain-specific terms per speaker to improve transcription accuracy for technical language.' },
              ].map((item, i) => (
                <div key={i} className="border-l-2 border-neon/30 pl-6">
                  <h4 className="text-white font-bold text-lg mb-1">{item.title}</h4>
                  <p className="text-apple-gray text-sm font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Speaker Visual */}
          <div className="flex justify-center">
            <div className="border border-white/10 bg-black p-8 w-full max-w-md space-y-4">
              <div className="text-xs text-neon font-bold uppercase tracking-widest mb-6">Transcript Segments</div>
              {[
                { speaker: 'Speaker A', text: 'We need to finalize the acquisition timeline before Q4.', time: '02:34', color: 'text-blue-400 bg-blue-400/10' },
                { speaker: 'Speaker B', text: 'Legal has flagged two compliance issues with the target.', time: '02:48', color: 'text-purple-400 bg-purple-400/10' },
                { speaker: 'Speaker A', text: 'Can we resolve those before the board meeting Friday?', time: '03:12', color: 'text-blue-400 bg-blue-400/10' },
                { speaker: 'Speaker C', text: 'I\'ll have the due diligence report ready by Thursday.', time: '03:24', color: 'text-amber-400 bg-amber-400/10' },
              ].map((seg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex gap-4"
                >
                  <div className="text-[11px] text-apple-gray font-mono w-12 flex-shrink-0 pt-1">{seg.time}</div>
                  <div className="flex-1">
                    <div className={`text-[10px] font-bold tracking-wider uppercase mb-1 px-2 py-0.5 rounded w-fit ${seg.color}`}>{seg.speaker}</div>
                    <p className="text-white/80 text-sm leading-relaxed">{seg.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          IMPORT & EXPORT — File Format Support
          ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Import */}
          <div>
            <h2 className="text-sm font-bold tracking-widest mb-6 uppercase text-neon">Import</h2>
            <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">Transcribe any audio or video file.</h3>
            <p className="text-apple-gray text-lg font-medium mb-8">
              Import recordings from other apps, voice memos, podcast episodes, lecture recordings, or video files.
              Audio tracks are extracted automatically from video.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {['MP3', 'M4A', 'WAV', 'AAC', 'MP4', 'MOV', 'AIFF', 'CAF'].map(fmt => (
                <span key={fmt} className="px-4 py-2 border border-white/10 bg-white/[0.03] text-white text-sm font-bold tracking-wider rounded-none">
                  {fmt}
                </span>
              ))}
            </div>
            <p className="text-apple-gray text-sm font-medium">
              Drag and drop on iPad and Mac. All transcription happens locally — imported files never leave your device.
            </p>
          </div>

          {/* Export */}
          <div>
            <h2 className="text-sm font-bold tracking-widest mb-6 uppercase text-neon">Export</h2>
            <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">Seven professional export formats.</h3>
            <p className="text-apple-gray text-lg font-medium mb-8">
              Share transcripts in the format your workflow demands — from simple text to structured data.
            </p>
            <div className="space-y-3">
              {[
                { name: 'PDF', desc: 'Professional document with timestamps, speaker labels, and formatting' },
                { name: 'SRT', desc: 'Video subtitle format for editors and content creators' },
                { name: 'VTT', desc: 'WebVTT format for web video players and accessibility' },
                { name: 'Markdown', desc: 'Structured export with metadata, segments, and summaries' },
                { name: 'JSON', desc: 'Complete structured data with word-level timestamps and speaker IDs' },
                { name: 'Timestamped Text', desc: '[HH:MM:SS] Speaker: Text format for reference' },
                { name: 'Plain Text', desc: 'Clean transcript text for quick sharing' },
              ].map((fmt, i) => (
                <div key={i} className="flex items-start gap-4 py-3 border-b border-white/5 last:border-0">
                  <span className="text-neon font-bold text-sm w-24 flex-shrink-0 uppercase tracking-wider">{fmt.name}</span>
                  <span className="text-apple-gray text-sm font-medium">{fmt.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          TRANSLATION — 15+ Languages
          ═══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#0a0a0a] border-y border-white/5 py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1">
            <h2 className="text-sm font-bold tracking-widest mb-6 uppercase text-neon">Translation</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
              Translate transcripts to 15+ languages.
            </h3>
            <p className="text-apple-gray text-lg font-medium">
              After transcription, translate the full text into any of 15+ supported languages.
              Useful for multilingual teams, international clients, or studying foreign-language recordings.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 max-w-md">
            {['Spanish', 'French', 'German', 'Italian', 'Portuguese', 'Chinese', 'Japanese', 'Korean', 'Arabic', 'Hindi', 'Russian', 'Dutch', 'Swedish'].map(lang => (
              <span key={lang} className="px-4 py-2 border border-white/10 bg-white/[0.03] text-white/80 text-sm font-medium rounded-none">
                {lang}
              </span>
            ))}
            <span className="px-4 py-2 border border-neon/20 bg-neon/5 text-neon text-sm font-bold rounded-none">
              + more
            </span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          ECOSYSTEM — Apple Watch, Widgets, Calendar, iCloud
          ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-sm font-bold tracking-widest mb-6 uppercase text-neon">Ecosystem</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Everywhere you record.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <Watch size={32} />,
              title: 'Apple Watch',
              desc: 'Start and control recordings from your wrist. View recent transcriptions. Syncs with your iPhone.',
            },
            {
              icon: <Calendar size={32} />,
              title: 'Calendar View',
              desc: 'Browse recordings by date. See which days have recordings at a glance. Navigate your transcript history visually.',
            },
            {
              icon: <Search size={32} />,
              title: 'Full-Text Search',
              desc: 'Search across all transcripts by title, date, or content. Spotlight integration surfaces results in iOS system search.',
            },
            {
              icon: <Globe size={32} />,
              title: 'iCloud Sync',
              desc: 'Optionally sync recordings across iPhone, iPad, and Mac. Files stay encrypted. Disable anytime.',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel group p-8"
            >
              <div className="mb-6 text-apple-gray group-hover:text-neon transition-colors">
                {item.icon}
              </div>
              <h4 className="text-lg font-bold text-white mb-3 tracking-tight">{item.title}</h4>
              <p className="text-apple-gray text-sm font-medium leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: <Lock size={24} />, title: 'Face ID Lock', desc: 'Biometric authentication to access your recordings.' },
            { icon: <Activity size={24} />, title: 'Live Activities', desc: 'See recording progress on your Lock Screen.' },
            { icon: <Zap size={24} />, title: 'Recording Recovery', desc: 'Automatic recovery if the app crashes during recording.' },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 border border-white/5 bg-white/[0.02] p-6">
              <div className="text-neon flex-shrink-0 mt-1">{item.icon}</div>
              <div>
                <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
                <p className="text-apple-gray text-xs font-medium">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          TECHNICAL SPECIFICATIONS
          ═══════════════════════════════════════════════════════════════════════ */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
        <div className="apple-card p-10 md:p-16 relative overflow-hidden">
          <div className="flex flex-col md:flex-row justify-between items-start mb-16">
            <div>
              <h3 className="text-3xl font-bold text-white mb-3 flex items-center gap-4 tracking-tight">
                <Terminal size={32} className="text-neon" />
                Technical Specifications
              </h3>
              <p className="text-apple-gray font-semibold text-xs uppercase tracking-widest">Engine &amp; Performance Details</p>
            </div>
            <div className="mt-6 md:mt-0">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-white/[0.03] border border-white/5 rounded-full text-xs text-green-400 font-bold">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Production Build
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { label: 'AI Engine', value: 'Parakeet TDT v3' },
              { label: 'Parameters', value: '0.6 Billion' },
              { label: 'Processor', value: 'Apple NPU' },
              { label: 'Transcription', value: 'Real-time' },
              { label: 'Languages', value: '25 European' },
              { label: 'Translation', value: '15+ Languages' },
              { label: 'Export Formats', value: '7 Types' },
              { label: 'Import Formats', value: '8 Types' },
              { label: 'AI Summaries', value: '6 Formats' },
              { label: 'Min iOS', value: '17.0+' },
              { label: 'AI Summaries Req.', value: 'iOS 26 + iPhone 16' },
              { label: 'Internet', value: 'Never Required' },
            ].map((spec, i) => (
              <div key={i} className="border-l border-white/5 pl-8">
                <span className="block text-apple-gray text-xs font-bold uppercase mb-3 tracking-wider">{spec.label}</span>
                <span className="block text-white text-lg font-semibold tracking-tight">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          PRIVACY GUARANTEE
          ═══════════════════════════════════════════════════════════════════════ */}
      <section className="border-t border-white/5 bg-[#0a0a0a] pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ShieldCheck className="w-24 h-24 text-neon mx-auto mb-10 opacity-90" />
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-10 tracking-tight">Zero Telemetry Promise.</h2>
          <p className="text-apple-gray text-xl mb-16 leading-relaxed max-w-2xl mx-auto font-medium">
            Echo Chamber contains no analytics SDKs, no crash reporting uplinks, and no user accounts.
            The AI model ships inside the app binary. Network permissions are not required.{' '}
            <Link to="/philosophy" className="text-neon hover:underline">Read our full privacy philosophy</Link>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-left">
            {[
              { title: 'Air-Gapped', desc: 'No internet permission required.' },
              { title: 'Face ID', desc: 'Biometric lock on all recordings.' },
              { title: 'On-Device AI', desc: 'Model embedded in the binary.' },
              { title: 'Auto-Delete', desc: 'Configurable recording expiry.' },
            ].map((item, i) => (
              <div key={i} className="apple-card p-6 flex flex-col items-center text-center">
                <CheckCircle2 className="text-neon mb-4" size={28} />
                <h4 className="text-white text-base font-bold mb-2 tracking-tight">{item.title}</h4>
                <p className="text-apple-gray text-xs font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          WHO IT'S FOR — Professional Use Cases
          ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <h2 className="text-sm font-bold tracking-widest mb-6 uppercase text-neon">Built For</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-white mb-16 tracking-tight">
          Professionals who can't afford a leak.
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Attorneys & Legal Teams',
              desc: 'Record depositions, client consultations, and case strategy sessions. Attorney-client privilege stays intact because no audio ever touches a server. Export to timestamped text or PDF for case files.',
              keywords: 'depositions, attorney-client privilege, legal transcription',
            },
            {
              title: 'Physicians & Therapists',
              desc: 'Document patient consultations and therapy sessions with full confidentiality. No HIPAA risk from cloud storage. Face ID lock prevents unauthorized access to sensitive recordings.',
              keywords: 'HIPAA, patient consultations, therapy sessions',
            },
            {
              title: 'Executives & Board Members',
              desc: 'Capture board meetings, strategy sessions, and M&A discussions. Generate Meeting Minutes with action items. No meeting bot joins your call — just tap record on your phone.',
              keywords: 'board meetings, M&A, executive meeting notes',
            },
          ].map((persona, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border border-white/10 bg-white/[0.02] p-10 hover:border-neon/30 transition-colors group"
            >
              <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-neon transition-colors tracking-tight">{persona.title}</h4>
              <p className="text-apple-gray text-base leading-relaxed font-medium">{persona.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          RELATED BLOG POST
          ═══════════════════════════════════════════════════════════════════════ */}
      {relatedPost && (
        <section className="px-6 md:px-12 max-w-7xl mx-auto pb-20 border-t border-white/5 pt-20">
          <h2 className="text-sm font-bold tracking-widest mb-12 uppercase text-neon">Related Reading</h2>
          <Link to={`/blog/${relatedPost.id}`} className="group block apple-card p-10 hover:scale-[1.01] transition-transform">
            <span className="text-[11px] font-bold text-apple-gray uppercase tracking-widest">{relatedPost.category} &middot; {relatedPost.readTime}</span>
            <h3 className="text-3xl font-bold text-white group-hover:text-neon transition-colors mt-3 tracking-tight">{relatedPost.title}</h3>
            <p className="text-apple-gray text-lg mt-3 font-medium">{relatedPost.excerpt}</p>
          </Link>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════════════════════
          EXPLORE OTHER APPS — Cross-links
          ═══════════════════════════════════════════════════════════════════════ */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto py-20 border-t border-white/5">
        <h2 className="text-sm font-bold tracking-widest mb-12 uppercase text-neon">Explore the Suite</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {otherProducts.map(p => {
            const OtherIcon = p.icon;
            return (
              <Link key={p.id} to={`/apps/${p.id}`} className="group apple-card p-8 hover:scale-[1.02] transition-transform">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-white/[0.03] border border-white/5 rounded-2xl">
                    <OtherIcon className="w-6 h-6 text-apple-blue" />
                  </div>
                  <span className="text-xs font-bold text-apple-gray uppercase tracking-widest">{p.category}</span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-apple-blue transition-colors tracking-tight">{p.name}</h3>
                <p className="text-apple-gray text-sm mt-2 font-medium">{p.tagline}</p>
                <div className="flex items-center gap-2 mt-4 text-apple-blue text-xs font-bold uppercase tracking-widest">
                  Learn More <ArrowRight size={14} />
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default EchoDetail;
