import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Download, ShieldCheck, WifiOff } from 'lucide-react';
import { products } from '../data/products';
import type { Product } from '../types';
import SEO, { buildBreadcrumbs, buildFAQSchema, SITE_URL } from './SEO';

type ProductPresentation = {
  description: string;
  capabilities: string[];
  image?: string;
  imageAlt?: string;
  relatedArticle?: {
    title: string;
    url: string;
  };
};

const PRODUCT_PRESENTATION: Record<string, ProductPresentation> = {
  echochamber: {
    description:
      'Record, transcribe, summarize, and search conversations with AI that runs on your Apple device. Audio is not sent to Obsidian Ridge Labs; optional encrypted iCloud sync is available and off by default.',
    capabilities: [
      'Live on-device transcription',
      'AI-polished notes and summaries',
      'TXT, Markdown, PDF, and DOCX export',
      'Search across every recording',
    ],
    image: '/images/echochamber/transcription-details-960.webp',
    imageAlt:
      'Echo Chamber transcription detail screen with audio controls, speaker labels, and a searchable transcript',
    relatedArticle: {
      title: 'Otter.ai vs. Echo Chamber: The Real Cost of AI Transcription',
      url: '/blog/otter-vs-echo',
    },
  },
  vault: {
    description:
      'Track spending, categorize transactions, and forecast cash flow with core intelligence on your device. Manual use stays local; optional Plaid bank sync passes selected account data through Plaid and a secure relay when you enable it.',
    capabilities: [
      'On-device financial intelligence',
      'Statement and receipt import',
      'Cash-flow forecasting',
      'Optional Plaid bank sync',
    ],
    relatedArticle: {
      title: "The Invisible Cost of 'Free' Finance Apps: 5 Red Flags",
      url: '/blog/finance-app-red-flags',
    },
  },
  molehill: {
    description:
      'An in-development focus app that turns an overwhelming task into one clear next step. Its task breakdown is designed to run on-device, with a calm experience free from streaks and shame.',
    capabilities: [
      'On-device task breakdown',
      'One-step focus mode',
      'Brain-dump organization',
      'No streak mechanics',
    ],
    relatedArticle: {
      title: 'The Speed of Silence: Why Offline AI Is Faster',
      url: '/blog/offline-ai-revolution',
    },
  },
  mind: {
    description:
      'An in-development journal concept designed to find useful patterns across your writing while keeping its intelligence local to your Apple device.',
    capabilities: [
      'Private journal concept',
      'On-device pattern discovery',
      'Semantic recall',
      'Biometric access controls',
    ],
    relatedArticle: {
      title: 'Why Notion Is a Bad Place for Your Private Thoughts',
      url: '/blog/notion-vs-mindpalace',
    },
  },
  nexus: {
    description:
      'An in-development decision workspace concept for mapping complex choices and using local red-team intelligence to challenge assumptions before the stakes are real.',
    capabilities: [
      'Visual decision mapping',
      'Adversarial analysis concept',
      'Scenario exploration',
      'Local-first direction',
    ],
    relatedArticle: {
      title: 'The Speed of Silence: Why Offline AI Is Faster',
      url: '/blog/offline-ai-revolution',
    },
  },
};

const getStatusLabel = (product: Product) => {
  if (product.status === 'coming-soon') return 'In Development';
  if (product.appStoreUrl) return 'Available on the App Store';
  return 'Available';
};

const getStatusRank = (product: Product) => {
  if (product.appStoreUrl) return 0;
  if (product.status === 'live') return 1;
  return 2;
};

const getApplicationCategory = (category: string) => {
  const normalized = category.toLowerCase();
  if (normalized.includes('finance')) return 'FinanceApplication';
  if (normalized.includes('transcription') || normalized.includes('productivity')) {
    return 'BusinessApplication';
  }
  if (normalized.includes('personal') || normalized.includes('journal')) {
    return 'LifestyleApplication';
  }
  return 'ProductivityApplication';
};

const getProductPresentation = (product: Product): ProductPresentation =>
  PRODUCT_PRESENTATION[product.id] ?? {
    description: product.description,
    capabilities: product.specs.map((spec) => `${spec.label}: ${spec.value}`),
  };

const DownloadPage: React.FC = () => {
  const apps = [...products].sort((a, b) => getStatusRank(a) - getStatusRank(b));

  const breadcrumbs = buildBreadcrumbs([
    { name: 'Home', url: '/' },
    { name: 'Apps', url: '/download' },
  ]);

  const faqItems = [
    {
      question: 'Which Obsidian Ridge Labs apps are available now?',
      answer:
        'Echo Chamber is available directly from the App Store. Vault is listed as live, and its product page has the current access details. Molehill, Mind Palace, and Decision Nexus are in development.',
    },
    {
      question: 'Which Apple devices are supported?',
      answer:
        'Support varies by app. Echo Chamber supports iPhone, iPad, and Apple-silicon Mac and requires iOS 18 or later on iPhone. Vault supports iPhone and iPad and requires iOS 17 or later. Molehill is planned for iPhone with iOS 26. Final requirements for in-development concepts will be published before release.',
    },
    {
      question: 'Do the apps require an internet connection?',
      answer:
        'Core AI processing is designed to happen on-device. A connection may still be needed for initial model downloads, App Store purchase verification, optional encrypted iCloud sync in Echo Chamber, or optional Plaid bank sync in Vault.',
    },
    {
      question: 'Does any app data leave my device?',
      answer:
        'It depends on the features you choose. Echo Chamber keeps recording and AI processing on-device, with optional encrypted iCloud sync. Vault can remain manual and local, or pass bank data through Plaid and a secure relay when you enable bank sync. Vault also offers limited anonymous diagnostics that are off by default. Each product explains its connections before you enable them.',
    },
    {
      question: 'How much do the apps cost?',
      answer:
        'Published pricing appears on each app card. Echo Chamber is free with Pro options from $2.99 per month. Vault is free with optional paid bank sync. Molehill is planned to be free with Pro options from $2.99 per month. Pricing for other in-development concepts has not been announced.',
    },
  ];

  const faq = buildFAQSchema(faqItems);

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Obsidian Ridge Labs Apps',
    description: 'Private, offline-first AI apps built for Apple platforms.',
    numberOfItems: apps.length,
    itemListElement: apps.map((app, index) => {
      const presentation = getProductPresentation(app);
      const isFree = app.price?.toLowerCase().startsWith('free') ?? false;
      const productUrl = `${SITE_URL}/apps/${app.id}`;

      return {
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'SoftwareApplication',
          name: app.name,
          description: presentation.description,
          url: productUrl,
          applicationCategory: getApplicationCategory(app.category),
          operatingSystem: app.minOS
            ? `${app.minOS} or later${app.platforms?.length ? `; ${app.platforms.join(', ')}` : ''}`
            : app.platforms?.join(', ') || 'Apple platforms; requirements to be announced',
          ...(app.version && app.status === 'live'
            ? { softwareVersion: app.version.replace(/^v/, '') }
            : {}),
          ...(app.appStoreUrl
            ? { downloadUrl: app.appStoreUrl, installUrl: app.appStoreUrl }
            : {}),
          ...(app.price ? { isAccessibleForFree: isFree } : {}),
          ...(app.status === 'live' && app.price
            ? {
                offers: {
                  '@type': 'Offer',
                  price: isFree ? '0' : undefined,
                  priceCurrency: 'USD',
                  description: app.price,
                  availability: 'https://schema.org/InStock',
                  url: app.appStoreUrl || productUrl,
                },
              }
            : {}),
          additionalProperty: [
            {
              '@type': 'PropertyValue',
              name: 'Release status',
              value: getStatusLabel(app),
            },
            ...(app.price
              ? [
                  {
                    '@type': 'PropertyValue',
                    name: 'Published pricing',
                    value: app.price,
                  },
                ]
              : []),
          ],
          ...(app.githubUrl ? { sameAs: [app.githubUrl] } : {}),
        },
      };
    }),
  };

  return (
    <div className="min-h-screen bg-black pt-32 pb-10 md:pb-20 overflow-hidden relative">
      <SEO
        title="Private AI Apps for Apple"
        description="Explore private, offline-first AI apps for iPhone, iPad, and Mac, with on-device intelligence and clearly disclosed optional connections."
        jsonLd={[breadcrumbs, faq, itemList]}
      />

      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-neon opacity-[0.025] blur-[200px] rounded-full pointer-events-none" />
      <div className="absolute bottom-40 left-0 w-[600px] h-[600px] bg-purple-500 opacity-[0.015] blur-[200px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <header className="mb-12 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 bg-neon rounded-full" />
              <span className="text-neon text-sm font-bold tracking-widest uppercase">The App Collection</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight leading-[0.95] mb-8">
              Intelligence that stays
              <br />
              <span className="text-apple-gray">close to your data.</span>
            </h1>
            <p className="text-xl md:text-2xl text-apple-gray max-w-3xl font-medium leading-relaxed">
              Obsidian Ridge Labs builds private, offline-first AI apps for Apple devices. Core
              intelligence runs on-device, while every optional connection is explained plainly
              and left under your control.
            </p>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl">
            {[
              {
                icon: <Cpu size={18} />,
                title: 'On-device intelligence',
                text: 'Core AI processing stays on supported Apple hardware.',
              },
              {
                icon: <WifiOff size={18} />,
                title: 'Offline-ready',
                text: 'Core workflows continue without a server round trip.',
              },
              {
                icon: <ShieldCheck size={18} />,
                title: 'Explicit connections',
                text: 'Plaid, iCloud, and diagnostics are disclosed in context.',
              },
            ].map((signal) => (
              <div key={signal.title} className="border border-white/5 bg-white/[0.02] p-5">
                <div className="text-neon mb-4">{signal.icon}</div>
                <h2 className="text-sm font-bold text-white mb-2 tracking-tight">{signal.title}</h2>
                <p className="text-xs leading-relaxed text-apple-gray">{signal.text}</p>
              </div>
            ))}
          </div>
        </header>

        <div className="space-y-12">
          {apps.map((app, idx) => {
            const Icon = app.icon;
            const presentation = getProductPresentation(app);
            const accent = app.accent || '#00f0ff';
            const isLive = app.status === 'live';
            const hasImage = Boolean(presentation.image);

            return (
              <motion.article
                key={app.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ delay: Math.min(idx * 0.08, 0.24), duration: 0.6 }}
                className="relative border bg-[#0a0a0a] overflow-hidden"
                style={{ borderColor: isLive ? `${accent}40` : 'rgba(255,255,255,0.06)' }}
              >
                <div className={`grid grid-cols-1 ${hasImage ? 'lg:grid-cols-5' : ''} gap-0`}>
                  <div className={`${hasImage ? 'lg:col-span-3' : ''} p-8 md:p-12 lg:p-16 flex flex-col`}>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 mb-10">
                      <div className="flex items-center gap-4">
                        <div
                          className="p-3 border"
                          style={{ backgroundColor: `${accent}12`, borderColor: `${accent}36` }}
                        >
                          <Icon className="w-6 h-6" style={{ color: accent }} />
                        </div>
                        <span
                          className="text-xs font-bold uppercase tracking-widest"
                          style={{ color: accent }}
                        >
                          {app.category}
                        </span>
                      </div>
                      <span
                        className="w-fit text-[11px] font-bold border px-4 py-1.5 uppercase tracking-widest"
                        style={{
                          color: isLive ? accent : '#fbbf24',
                          backgroundColor: isLive ? `${accent}10` : 'rgba(251,191,36,0.08)',
                          borderColor: isLive ? `${accent}36` : 'rgba(251,191,36,0.28)',
                        }}
                      >
                        {getStatusLabel(app)}
                      </span>
                    </div>

                    <div className="mb-10">
                      <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">
                        {app.name}
                      </h2>
                      <p className="text-xl md:text-2xl text-apple-gray font-medium mb-6">
                        {app.tagline}
                      </p>
                      <p className="text-apple-gray text-base leading-relaxed font-medium max-w-3xl">
                        {presentation.description}
                      </p>
                    </div>

                    <dl className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/5 border border-white/5 mb-8">
                      <div className="bg-[#0a0a0a] p-4">
                        <dt className="text-[10px] uppercase tracking-widest text-gray-600 mb-2">Platforms</dt>
                        <dd className="text-sm text-white font-medium">
                          {app.platforms?.length ? app.platforms.join(' · ') : 'To be announced'}
                        </dd>
                      </div>
                      <div className="bg-[#0a0a0a] p-4">
                        <dt className="text-[10px] uppercase tracking-widest text-gray-600 mb-2">Minimum OS</dt>
                        <dd className="text-sm text-white font-medium">{app.minOS || 'To be announced'}</dd>
                      </div>
                      <div className="bg-[#0a0a0a] p-4">
                        <dt className="text-[10px] uppercase tracking-widest text-gray-600 mb-2">Pricing</dt>
                        <dd className="text-sm text-white font-medium">{app.price || 'To be announced'}</dd>
                      </div>
                    </dl>

                    <div className="flex flex-wrap gap-3 mb-10">
                      {presentation.capabilities.map((capability) => (
                        <span
                          key={capability}
                          className="px-4 py-2 text-[11px] font-bold uppercase tracking-wider border border-white/10 text-apple-gray"
                        >
                          {capability}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row items-start gap-4">
                      {app.appStoreUrl && (
                        <a
                          href={app.appStoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-black font-bold uppercase tracking-wider px-8 py-4 flex items-center gap-3 hover:brightness-110 transition-all text-sm"
                          style={{ backgroundColor: accent }}
                        >
                          <Download size={18} />
                          Download on the App Store
                        </a>
                      )}
                      <Link
                        to={`/apps/${app.id}`}
                        className="border border-white/10 text-white font-bold uppercase tracking-wider px-8 py-4 hover:bg-white/5 transition-colors text-sm"
                      >
                        {isLive ? 'Full Details' : 'Preview App'}
                      </Link>
                    </div>

                    {presentation.relatedArticle && (
                      <Link
                        to={presentation.relatedArticle.url}
                        className="group mt-10 pt-8 border-t border-white/5 flex items-center justify-between"
                      >
                        <div>
                          <span className="text-[10px] font-bold text-apple-gray uppercase tracking-widest">
                            Related Reading
                          </span>
                          <h3 className="text-lg font-bold text-white group-hover:text-apple-blue transition-colors mt-1 tracking-tight">
                            {presentation.relatedArticle.title}
                          </h3>
                        </div>
                        <ArrowRight
                          size={20}
                          className="text-apple-gray group-hover:text-apple-blue group-hover:translate-x-1 transition-all flex-shrink-0 ml-4"
                        />
                      </Link>
                    )}
                  </div>

                  {presentation.image && presentation.imageAlt && (
                    <div className="lg:col-span-2 relative flex items-center justify-center p-8 md:p-12 bg-black/50 overflow-hidden">
                      <div
                        className="absolute inset-0 opacity-[0.08] blur-[100px]"
                        style={{ backgroundColor: accent }}
                      />
                      <div className="relative w-[340px] md:w-[440px]">
                        <img
                          src={presentation.image}
                          alt={presentation.imageAlt}
                          className="w-full h-auto rounded-[2.2rem] shadow-2xl"
                          loading={idx === 0 ? 'eager' : 'lazy'}
                          width={2160}
                          height={3840}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none rounded-[2.2rem]" />
                      </div>
                    </div>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>

        <section id="faq" className="mt-16 md:mt-32 border-t border-white/5 pt-16 md:pt-24">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
            <div className="lg:col-span-2">
              <span className="text-neon text-xs font-bold uppercase tracking-widest">Before You Download</span>
              <h2 className="text-4xl md:text-5xl text-white font-bold tracking-tight mt-4">
                Questions, answered plainly.
              </h2>
              <p className="text-apple-gray mt-5 leading-relaxed">
                Product pages and help guides provide the most detailed, app-specific privacy and
                compatibility information.
              </p>
            </div>
            <div className="lg:col-span-3 border-t border-white/10">
              {faqItems.map((item, index) => (
                <details key={item.question} className="group border-b border-white/10 py-6">
                  <summary className="list-none cursor-pointer flex items-start justify-between gap-6 text-white font-bold">
                    <span>
                      <span className="text-gray-600 text-xs font-mono mr-4">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      {item.question}
                    </span>
                    <span className="text-neon text-xl leading-none group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="text-apple-gray leading-relaxed pt-5 pl-10 pr-10">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-16 md:mt-32 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link
            to="/blog"
            className="group border border-white/5 bg-white/[0.02] p-10 hover:border-neon/30 transition-colors"
          >
            <span className="text-neon text-xs font-bold uppercase tracking-widest">Journal</span>
            <h2 className="text-2xl font-bold text-white mt-3 group-hover:text-neon transition-colors tracking-tight">
              Read the thinking behind the work
            </h2>
            <p className="text-apple-gray text-sm mt-2 font-medium leading-relaxed">
              Field notes on on-device AI, privacy-conscious product design, and Apple-native software.
            </p>
            <div className="flex items-center gap-2 mt-6 text-neon text-xs font-bold uppercase tracking-widest">
              Browse Articles <ArrowRight size={14} />
            </div>
          </Link>
          <Link
            to="/philosophy"
            className="group border border-white/5 bg-white/[0.02] p-10 hover:border-white/20 transition-colors"
          >
            <span className="text-apple-gray text-xs font-bold uppercase tracking-widest">Principles</span>
            <h2 className="text-2xl font-bold text-white mt-3 group-hover:text-neon transition-colors tracking-tight">
              See why local comes first
            </h2>
            <p className="text-apple-gray text-sm mt-2 font-medium leading-relaxed">
              The architectural principles we use to reduce data movement and keep software useful offline.
            </p>
            <div className="flex items-center gap-2 mt-6 text-white text-xs font-bold uppercase tracking-widest">
              Read Our Philosophy <ArrowRight size={14} />
            </div>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default DownloadPage;
