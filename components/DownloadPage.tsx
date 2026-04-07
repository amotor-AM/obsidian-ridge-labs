import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Download, ArrowRight, LineChart, Book, Mic, GitMerge, Shield, Cpu, WifiOff } from 'lucide-react';
import SEO, { buildBreadcrumbs, buildFAQSchema, SITE_URL } from './SEO';

const DownloadPage: React.FC = () => {
  const breadcrumbs = buildBreadcrumbs([
    { name: 'Home', url: '/' },
    { name: 'Download', url: '/download' },
  ]);

  const faq = buildFAQSchema([
    {
      question: 'Are Obsidian Ridge Labs apps free to download?',
      answer: 'Echo Chamber offers a free tier with monthly usage limits. A Pro subscription unlocks unlimited transcription and all features. Vault, Mind Palace, and Decision Nexus are coming soon — join the waitlist for early access.',
    },
    {
      question: 'What devices do Obsidian Ridge apps support?',
      answer: 'Our apps are built natively for Apple platforms. Echo Chamber supports iPhone (iOS 17+), iPad, Mac, and Apple Watch. AI summaries require iPhone 16 or later with iOS 26 and Apple Intelligence enabled.',
    },
    {
      question: 'Do these apps require an internet connection?',
      answer: 'No. All Obsidian Ridge apps are designed to work 100% offline. AI processing runs on your device\'s Neural Processing Unit. Internet is never required for core functionality — only optionally for iCloud sync.',
    },
    {
      question: 'How is my data protected?',
      answer: 'All data is encrypted with AES-256 and stored locally on your device. There are no servers, no accounts, and no cloud uploads. Face ID lock prevents unauthorized access. We collect zero telemetry.',
    },
  ]);

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Download Obsidian Ridge Labs Apps',
    description: 'Privacy-first offline AI apps for iPhone, iPad, Mac, and Apple Watch.',
    numberOfItems: 4,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'SoftwareApplication',
          name: 'Echo Chamber',
          description: 'Private offline AI transcription with 25-language support, 6 AI summary formats, and speaker identification.',
          url: `${SITE_URL}/apps/echo`,
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'iOS 17+',
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'SoftwareApplication',
          name: 'Obsidian Ridge Vault',
          description: 'Private AI finance tracker — no bank passwords, no cloud, on-device spending analysis.',
          url: `${SITE_URL}/apps/vault`,
          applicationCategory: 'FinanceApplication',
          operatingSystem: 'iOS',
        },
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          '@type': 'SoftwareApplication',
          name: 'Mind Palace',
          description: 'AI-powered private journal with pattern recognition and semantic search.',
          url: `${SITE_URL}/apps/mind`,
          applicationCategory: 'LifestyleApplication',
          operatingSystem: 'iOS',
        },
      },
      {
        '@type': 'ListItem',
        position: 4,
        item: {
          '@type': 'SoftwareApplication',
          name: 'Decision Nexus',
          description: 'Visual decision mapping with AI adversarial analysis for strategy.',
          url: `${SITE_URL}/apps/nexus`,
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'iOS',
        },
      },
    ],
  };

  const apps = [
    {
      id: 'echo',
      name: 'ECHO CHAMBER',
      tagline: 'Private AI Transcription. On Your Device.',
      category: 'Offline Transcription',
      description: 'Record, transcribe, and summarize meetings entirely on your iPhone. Powered by the Parakeet TDT v3 neural engine with real-time speech-to-text in 25 languages, 6 AI summary formats including Cornell Notes and Meeting Minutes, AI Chat for asking questions about your transcripts, automatic speaker identification, and 7 export formats. No cloud. No accounts. No audio ever leaves your phone.',
      icon: Mic,
      available: true,
      image: '/images/echo/TranscriptionDetailsScreen.png',
      imageAlt: 'Echo Chamber transcription detail screen showing audio playback controls, readable transcript view with speaker labels, and word-level timestamps',
      specs: [
        'Parakeet TDT v3 Engine',
        '25 Languages',
        '6 AI Summary Formats',
        '7 Export Formats',
        'Speaker Identification',
        'Apple Watch',
      ],
      blog: {
        title: 'Otter.ai vs. Echo Chamber: The Real Cost of AI Transcription',
        url: '/blog/otter-vs-echo',
      },
      accentColor: 'neon',
    },
    {
      id: 'vault',
      name: 'OBSIDIAN RIDGE VAULT',
      tagline: 'Total Control Over Your Money.',
      category: 'Smart Finance',
      description: 'Understand your spending and predict your future balance without giving a company your bank password. Vault analyzes your finances using AI that lives entirely on your phone — scan PDF statements, get AI-powered forecasting, and track spending categories. Zero data collection, zero cloud sync.',
      icon: LineChart,
      available: false,
      specs: [
        'On-Device AI Analysis',
        'PDF Statement Scanning',
        'Balance Forecasting',
        'Biometric Lock',
      ],
      blog: {
        title: "The Invisible Cost of 'Free' Finance Apps: 5 Red Flags",
        url: '/blog/finance-app-red-flags',
      },
      accentColor: 'neon',
    },
    {
      id: 'mind',
      name: 'MIND PALACE',
      tagline: 'A Journal That Actually Understands You.',
      category: 'Personal Growth',
      description: 'Write your thoughts and let private AI find patterns in your life. Mind Palace uses on-device intelligence to discover connections between your moods, habits, and behaviors. Search by feeling, not just keywords. Encrypted with FaceID — never connected to the cloud.',
      icon: Book,
      available: false,
      specs: [
        'AI Pattern Recognition',
        'Semantic Search',
        'Biometric Encryption',
        'Unlimited Entries',
      ],
      blog: {
        title: 'Why Notion is a Bad Place for Your Private Thoughts',
        url: '/blog/notion-vs-mindpalace',
      },
      accentColor: 'purple',
    },
    {
      id: 'nexus',
      name: 'DECISION NEXUS',
      tagline: 'Think Clearer. Act Faster.',
      category: 'Strategic Logic',
      description: "Map out complex decisions and let AI play devil's advocate to find holes in your plan. Decision Nexus is a visual sandbox for your most important choices — the built-in Red Team AI challenges your logic and simulates counter-moves. Export strategy documents as private PDFs.",
      icon: GitMerge,
      available: false,
      specs: [
        'AI Adversarial Analysis',
        'Scenario Simulation',
        'Visual Decision Maps',
        'Private PDF Export',
      ],
      blog: {
        title: 'The Speed of Silence: Why Offline AI is Faster than ChatGPT',
        url: '/blog/offline-ai-revolution',
      },
      accentColor: 'amber',
    },
  ];

  const accentMap: Record<string, { text: string; border: string; bg: string; badge: string }> = {
    neon: { text: 'text-neon', border: 'border-neon/30', bg: 'bg-neon/10', badge: 'bg-neon' },
    purple: { text: 'text-purple-400', border: 'border-purple-400/30', bg: 'bg-purple-400/10', badge: 'bg-purple-500' },
    amber: { text: 'text-amber-400', border: 'border-amber-400/30', bg: 'bg-amber-400/10', badge: 'bg-amber-500' },
  };

  return (
    <div className="min-h-screen bg-black pt-32 pb-10 md:pb-20 overflow-hidden relative">
      <SEO
        title="Download Obsidian Ridge Labs Apps — Private Offline AI for iPhone"
        description="Download privacy-first, offline AI apps for iPhone, iPad, Mac, and Apple Watch. Echo Chamber for AI transcription, Vault for finance, Mind Palace for journaling, and Decision Nexus for strategy. No cloud, no accounts, no data collection."
        jsonLd={[breadcrumbs, faq, itemList]}
      />

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-neon opacity-[0.02] blur-[200px] rounded-full pointer-events-none" />
      <div className="absolute bottom-40 left-0 w-[600px] h-[600px] bg-neon opacity-[0.02] blur-[200px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <header className="mb-12 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-3 h-3 bg-neon rounded-full animate-pulse" />
              <span className="text-neon text-sm font-bold tracking-widest uppercase">Download</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight leading-tight mb-8">
              Private AI Apps.<br />
              <span className="text-apple-gray">Zero Cloud.</span>
            </h1>
            <p className="text-xl md:text-2xl text-apple-gray max-w-2xl font-medium leading-relaxed">
              Every app runs entirely on your device. No accounts to create, no data to upload,
              no servers to trust. Just powerful AI intelligence that belongs to you.
            </p>
          </motion.div>

          {/* Trust Signals */}
          <div className="mt-16 flex flex-wrap gap-8 text-sm">
            {[
              { icon: <Shield size={18} />, text: 'Zero Data Collection' },
              { icon: <WifiOff size={18} />, text: '100% Offline' },
              { icon: <Cpu size={18} />, text: 'On-Device AI' },
            ].map((signal, i) => (
              <div key={i} className="flex items-center gap-3 text-apple-gray font-medium">
                <span className="text-neon">{signal.icon}</span>
                {signal.text}
              </div>
            ))}
          </div>
        </header>

        {/* App Cards — Stacked Hero Style */}
        <div className="space-y-12">
          {apps.map((app, idx) => {
            const Icon = app.icon;
            const colors = accentMap[app.accentColor];
            return (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className={`relative border ${app.available ? colors.border : 'border-white/5'} bg-[#0a0a0a] overflow-hidden`}
              >
                <div className={`grid grid-cols-1 ${app.image ? 'lg:grid-cols-5' : 'lg:grid-cols-1'} gap-0`}>

                  {/* Text Content */}
                  <div className={`${app.image ? 'lg:col-span-3' : ''} p-10 md:p-16 flex flex-col justify-between`}>

                    {/* Top: Category + Status */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 ${colors.bg} border ${colors.border} rounded-none`}>
                          <Icon className={`w-6 h-6 ${colors.text}`} />
                        </div>
                        <span className={`text-xs font-bold uppercase tracking-widest ${colors.text}`}>{app.category}</span>
                      </div>
                      {app.available ? (
                        <span className="text-xs font-bold text-neon bg-neon/10 border border-neon/30 px-4 py-1.5 uppercase tracking-widest">
                          Available Now
                        </span>
                      ) : (
                        <span className="text-xs font-bold text-amber-400 bg-amber-400/10 border border-amber-400/30 px-4 py-1.5 uppercase tracking-widest">
                          Coming Soon
                        </span>
                      )}
                    </div>

                    {/* Title & Description */}
                    <div className="mb-10">
                      <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">
                        {app.name}
                      </h2>
                      <p className="text-xl md:text-2xl text-apple-gray font-medium mb-6">
                        {app.tagline}
                      </p>
                      <p className="text-apple-gray text-base leading-relaxed font-medium max-w-2xl">
                        {app.description}
                      </p>
                    </div>

                    {/* Specs Grid */}
                    <div className="flex flex-wrap gap-3 mb-10">
                      {app.specs.map((spec, i) => (
                        <span
                          key={i}
                          className={`px-4 py-2 text-xs font-bold uppercase tracking-wider border ${
                            app.available ? `${colors.border} ${colors.text}` : 'border-white/10 text-apple-gray'
                          }`}
                        >
                          {spec}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row items-start gap-4">
                      {app.available ? (
                        <>
                          <a
                            href="#"
                            className={`${colors.badge} text-black font-bold uppercase tracking-wider px-10 py-4 flex items-center gap-3 hover:opacity-90 transition-opacity text-sm`}
                          >
                            <Download size={18} />
                            Download on the App Store
                          </a>
                          <Link
                            to={`/apps/${app.id}`}
                            className="border border-white/10 text-white font-bold uppercase tracking-wider px-10 py-4 hover:bg-white/5 transition-colors text-sm"
                          >
                            Full Details
                          </Link>
                        </>
                      ) : (
                        <Link
                          to={`/apps/${app.id}`}
                          className="border border-white/10 text-white/60 font-bold uppercase tracking-wider px-10 py-4 hover:bg-white/5 transition-colors text-sm"
                        >
                          Learn More
                        </Link>
                      )}
                    </div>

                    {/* Related Blog Link */}
                    <Link
                      to={app.blog.url}
                      className="group mt-10 pt-8 border-t border-white/5 flex items-center justify-between"
                    >
                      <div>
                        <span className="text-[10px] font-bold text-apple-gray uppercase tracking-widest">Related Article</span>
                        <h4 className="text-lg font-bold text-white group-hover:text-apple-blue transition-colors mt-1 tracking-tight">
                          {app.blog.title}
                        </h4>
                      </div>
                      <ArrowRight size={20} className="text-apple-gray group-hover:text-apple-blue group-hover:translate-x-1 transition-all flex-shrink-0 ml-4" />
                    </Link>
                  </div>

                  {/* Screenshot (Echo Chamber only) */}
                  {app.image && (
                    <div className="lg:col-span-2 relative flex items-center justify-center p-8 md:p-12 bg-black/50">
                      <div className="relative w-[340px] md:w-[440px]">
                        <img
                          src={app.image}
                          alt={app.imageAlt}
                          className="w-full h-auto rounded-[2.2rem] shadow-[0_0_60px_rgba(16,185,129,0.08)]"
                          loading={idx === 0 ? 'eager' : 'lazy'}
                          width={2160}
                          height={3840}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none rounded-[2.2rem]" />
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA — Blog + Philosophy */}
        <section className="mt-16 md:mt-32 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link to="/blog" className="group border border-white/5 bg-white/[0.02] p-10 hover:border-neon/30 transition-colors">
            <span className="text-neon text-xs font-bold uppercase tracking-widest">Journal</span>
            <h3 className="text-2xl font-bold text-white mt-3 group-hover:text-neon transition-colors tracking-tight">
              Read our privacy research
            </h3>
            <p className="text-apple-gray text-sm mt-2 font-medium">
              Deep dives into why cloud apps are dangerous and how offline AI changes the equation.
            </p>
            <div className="flex items-center gap-2 mt-6 text-neon text-xs font-bold uppercase tracking-widest">
              Browse Articles <ArrowRight size={14} />
            </div>
          </Link>
          <Link to="/philosophy" className="group border border-white/5 bg-white/[0.02] p-10 hover:border-alert/30 transition-colors">
            <span className="text-alert text-xs font-bold uppercase tracking-widest">Manifesto</span>
            <h3 className="text-2xl font-bold text-white mt-3 group-hover:text-alert transition-colors tracking-tight">
              Why we reject the cloud
            </h3>
            <p className="text-apple-gray text-sm mt-2 font-medium">
              Our four axioms: Data Gravity, Nullius in Verba, Offline Default, and Ephemerality.
            </p>
            <div className="flex items-center gap-2 mt-6 text-alert text-xs font-bold uppercase tracking-widest">
              Read Philosophy <ArrowRight size={14} />
            </div>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default DownloadPage;
