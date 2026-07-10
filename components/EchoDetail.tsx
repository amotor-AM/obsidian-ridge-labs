import React from 'react';
import { ArrowRight, ArrowUpRight, Check, Download, Github, Lock, Mic, Search, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import SEO, { buildBreadcrumbs, buildFAQSchema, buildSoftwareApp } from './SEO';
import MotionReveal from './home/MotionReveal';

const appStoreUrl = 'https://apps.apple.com/us/app/echo-chamber-ai-transcription/id6761675060';

const faqs = [
  {
    question: 'Does Echo Chamber upload my audio for transcription?',
    answer: 'No. Echo Chamber processes recording and transcription on your supported Apple device. Audio is not uploaded to Obsidian Ridge Labs for speech recognition or AI processing.',
  },
  {
    question: 'Can Echo Chamber work without an internet connection?',
    answer: 'Yes. After any required model setup, core recording, live transcription, AI notes, search, and export workflows are designed to work offline. App Store purchases, model downloads, and optional iCloud sync require a connection.',
  },
  {
    question: 'Which formats can I export?',
    answer: 'The current App Store release exports TXT, Markdown, PDF, and DOCX, so transcripts can move into simple notes, publishing workflows, or polished documents.',
  },
  {
    question: 'Which devices are supported?',
    answer: 'Echo Chamber requires iOS 18 or later on iPhone, iPadOS 18 or later on iPad, or macOS 15 or later on an Apple-silicon Mac. The App Store also lists Apple Vision compatibility.',
  },
  {
    question: 'What does Echo Chamber Pro include?',
    answer: 'Pro unlocks unlimited recording length, the complete set of AI features, audio and video upload, batch enhancement, and priority support. Current US pricing is shown on the App Store before purchase.',
  },
];

const capabilities = [
  {
    icon: Mic,
    number: '01',
    title: 'Live transcription',
    copy: 'See the transcript form as you speak. Echo Chamber detects pauses, speakers, and topic shifts without streaming your voice to a remote transcription service.',
  },
  {
    icon: Sparkles,
    number: '02',
    title: 'AI polish and notes',
    copy: 'Keep the raw verbatim transcript, then turn it into a cleaner reading copy, useful notes, or a focused summary with local intelligence.',
  },
  {
    icon: Search,
    number: '03',
    title: 'Searchable memory',
    copy: 'Tag recordings, bookmark important moments, and search every word across your library without giving a cloud workspace your archive.',
  },
  {
    icon: Lock,
    number: '04',
    title: 'Private by default',
    copy: 'Audio is encrypted at rest, core processing happens locally, and the app contains no third-party SDKs that profile what you record.',
  },
];

const EchoDetail: React.FC = () => {
  const product = products.find((item) => item.id === 'echochamber')!;
  const softwareApp = {
    ...buildSoftwareApp(product),
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'Productivity',
    operatingSystem: 'iOS 18+, iPadOS 18+, macOS 15+ on Apple silicon, visionOS 2+',
    featureList: [
      'On-device live transcription',
      'AI-polished readable transcript',
      'On-device notes and summaries',
      'Word-level recording search',
      'Recording bookmarks',
      'TXT, Markdown, PDF, and DOCX export',
      'Audio and video import with Pro',
      'AES-256-GCM audio encryption at rest',
    ],
  };
  const breadcrumbs = buildBreadcrumbs([
    { name: 'Home', url: '/' },
    { name: 'Apps', url: '/download' },
    { name: 'Echo Chamber', url: '/apps/echochamber' },
  ]);

  return (
    <div className="echo-page">
      <SEO
        title="Echo Chamber: Private On-Device Transcription"
        description="Record, transcribe, polish, search, and export conversations with AI that runs on your Apple device. Your voice is not uploaded to Obsidian Ridge Labs."
        ogType="product"
        keywords={['private transcription app', 'offline transcription for iPhone', 'on-device voice transcription', 'local AI meeting notes']}
        jsonLd={[softwareApp, breadcrumbs, buildFAQSchema(faqs)]}
      />

      <header className="echo-hero">
        <div className="echo-hero__grid" aria-hidden="true" />
        <div className="section-frame echo-hero__frame">
          <div className="echo-hero__meta">
            <span><i /> Available on the App Store</span>
            <span>iOS 18+ · iPad · Apple-silicon Mac</span>
          </div>

          <div className="echo-hero__layout">
            <div className="echo-hero__copy">
              <p className="section-kicker">Echo Chamber / Private transcription</p>
              <h1>Your voice.<br /><em>Still yours.</em></h1>
              <p>
                Record audio, follow a live transcript, polish it with AI, search every word,
                and export the result—all without sending your voice to Obsidian Ridge Labs.
              </p>
              <div className="echo-hero__actions">
                <a href={appStoreUrl} target="_blank" rel="noreferrer" className="button button--primary">
                  <Download size={17} /> Download Echo Chamber
                </a>
                <Link to="/help/echochamber" className="button button--quiet">Read the guides <ArrowRight size={17} /></Link>
              </div>
            </div>

            <div className="echo-hero__visual">
              <div className="echo-hero__halo" aria-hidden="true" />
              <picture>
                <source srcSet="/images/echochamber/record-screen-480.webp 480w, /images/echochamber/record-screen-960.webp 960w" type="image/webp" />
                <img
                  src="/images/echochamber/RecordScreen.png"
                  alt="Echo Chamber recording screen with live waveform and on-device transcription controls"
                  width="960"
                  height="1707"
                />
              </picture>
              <div className="echo-hero__status"><i /> ON-DEVICE PROCESSING</div>
              <div className="echo-hero__note"><span>00:38:12</span><strong>Live transcript active</strong></div>
            </div>
          </div>

          <dl className="echo-hero__facts">
            <div><dt>Processing</dt><dd>On-device</dd></div>
            <div><dt>Transcript</dt><dd>Live as you speak</dd></div>
            <div><dt>Export</dt><dd>TXT · MD · PDF · DOCX</dd></div>
            <div><dt>Account</dt><dd>Not required</dd></div>
          </dl>
        </div>
      </header>

      <main>
        <section className="echo-thesis" aria-labelledby="echo-thesis-title">
          <div className="section-frame">
            <div className="section-index section-index--dark"><span>01 / The difference</span><span>Voice data stays close</span></div>
            <div className="echo-thesis__layout">
              <MotionReveal>
                <p className="section-kicker section-kicker--dark">The recorder, reconsidered</p>
                <h2 id="echo-thesis-title">A useful transcript should not require a second audience.</h2>
              </MotionReveal>
              <MotionReveal delay={0.08}>
                <p>
                  Most AI recorders begin by moving the conversation somewhere else. Echo Chamber
                  begins on the hardware already in your hand. That shorter path makes private
                  transcription possible in a meeting room, lecture hall, airplane, or anywhere the
                  network is not invited.
                </p>
              </MotionReveal>
            </div>
          </div>
        </section>

        <section className="echo-gallery" aria-label="Echo Chamber product screens">
          <div className="section-frame">
            <div className="echo-gallery__track">
              {[
                ['record-screen', '01', 'Capture', 'Record with a live transcript and bookmark the moments that matter.'],
                ['transcription-details', '02', 'Understand', 'Read the raw transcript beside a cleaner, AI-polished version.'],
                ['ai-chat', '03', 'Explore', 'Ask focused questions and turn a long conversation into useful next steps.'],
              ].map(([file, number, title, copy]) => (
                <MotionReveal key={file} className="echo-gallery__item" amount={0.15}>
                  <figure>
                    <picture>
                      <source srcSet={`/images/echochamber/${file}-480.webp 480w, /images/echochamber/${file}-960.webp 960w`} type="image/webp" />
                      <img src={`/images/echochamber/${file === 'record-screen' ? 'RecordScreen' : file === 'ai-chat' ? 'AIChat' : 'TranscriptionDetailsScreen'}.png`} alt={`Echo Chamber ${title.toLowerCase()} screen`} width="960" height="1707" loading="lazy" />
                    </picture>
                    <figcaption><span>{number}</span><div><strong>{title}</strong><p>{copy}</p></div></figcaption>
                  </figure>
                </MotionReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="echo-capabilities" aria-labelledby="echo-capabilities-title">
          <div className="section-frame">
            <div className="section-index"><span>02 / The instrument</span><span>Four core capabilities</span></div>
            <div className="echo-capabilities__intro">
              <p className="section-kicker">Built for real conversations</p>
              <h2 id="echo-capabilities-title">Everything needed to turn speech into something useful.</h2>
            </div>
            <div className="echo-capabilities__list">
              {capabilities.map(({ icon: Icon, number, title, copy }) => (
                <MotionReveal key={title} className="echo-capability" amount={0.3}>
                  <span>{number}</span>
                  <Icon aria-hidden="true" />
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </MotionReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="echo-boundary" aria-labelledby="echo-boundary-title">
          <div className="section-frame echo-boundary__layout">
            <MotionReveal>
              <p className="section-kicker section-kicker--dark">Privacy, explained plainly</p>
              <h2 id="echo-boundary-title">What stays local. What may connect.</h2>
            </MotionReveal>
            <div className="echo-boundary__columns">
              <MotionReveal className="echo-boundary__column">
                <span>STAYS ON YOUR DEVICE</span>
                <ul>
                  {['Your recordings and transcripts', 'Live speech recognition', 'AI notes and transcript polish', 'Search, bookmarks, and exports'].map((item) => <li key={item}><Check size={15} />{item}</li>)}
                </ul>
              </MotionReveal>
              <MotionReveal className="echo-boundary__column" delay={0.08}>
                <span>CONNECTS ONLY WHEN NEEDED</span>
                <ul>
                  {['App Store purchase verification', 'Any required model download', 'Optional encrypted iCloud sync', 'A support request you choose to send'].map((item) => <li key={item}><ArrowUpRight size={15} />{item}</li>)}
                </ul>
              </MotionReveal>
            </div>
            <p className="echo-boundary__note">
              Core AI processing does not move to a remote service when optional connections are enabled.
              Read the <Link to="/privacy">full privacy model</Link> for product-specific detail.
            </p>
          </div>
        </section>

        <section className="echo-pricing" aria-labelledby="echo-pricing-title">
          <div className="section-frame">
            <div className="echo-pricing__layout">
              <MotionReveal>
                <p className="section-kicker">Start free</p>
                <h2 id="echo-pricing-title">Private transcription without an enterprise contract.</h2>
                <p>Use the free app, then unlock longer recordings and the complete AI toolkit when you need it.</p>
              </MotionReveal>
              <MotionReveal className="echo-pricing__card" delay={0.08}>
                <div><span>Echo Chamber Pro</span><small>Current US App Store pricing</small></div>
                <p><strong>$2.99</strong><span>/ month</span></p>
                <p className="echo-pricing__annual">or $29.99 / year</p>
                <ul>
                  {['Unlimited recording length', 'All AI features', 'Audio and video upload', 'Batch enhancement', 'Priority support'].map((item) => <li key={item}><Check size={15} />{item}</li>)}
                </ul>
                <a href={appStoreUrl} target="_blank" rel="noreferrer" className="button button--primary">View on the App Store <ArrowUpRight size={16} /></a>
              </MotionReveal>
            </div>
          </div>
        </section>

        <section className="echo-faq" aria-labelledby="echo-faq-title">
          <div className="section-frame">
            <div className="section-index"><span>03 / Questions</span><span>Product facts</span></div>
            <div className="echo-faq__layout">
              <div>
                <p className="section-kicker">Before you install</p>
                <h2 id="echo-faq-title">A few straight answers.</h2>
              </div>
              <div className="echo-faq__list">
                {faqs.map((faq, index) => (
                  <details key={faq.question} open={index === 0}>
                    <summary><span>0{index + 1}</span>{faq.question}<i /></summary>
                    <p>{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="echo-close" aria-labelledby="echo-close-title">
          <div className="section-frame">
            <p className="section-kicker section-kicker--dark">Available now</p>
            <h2 id="echo-close-title">Keep the conversation.<br /><em>Lose the cloud dependency.</em></h2>
            <div className="echo-close__actions">
              <a href={appStoreUrl} target="_blank" rel="noreferrer" className="button button--dark">Download Echo Chamber <ArrowUpRight size={17} /></a>
              {product.githubUrl && <a href={product.githubUrl} target="_blank" rel="noreferrer" className="text-link text-link--dark"><Github size={16} /> Review the source</a>}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default EchoDetail;
