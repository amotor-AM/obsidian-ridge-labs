import React from 'react';
import { ArrowRight, ArrowUpRight, Check, Download, FileUp, Lock, Mic, Search, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { echoFaqs } from '../data/faqs';
import SEO, { buildBreadcrumbs, buildFAQSchema, buildSoftwareApp } from './SEO';
import MotionReveal from './home/MotionReveal';

const appStoreUrl = 'https://apps.apple.com/us/app/echo-chamber-ai-transcription/id6761675060';

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
    icon: FileUp,
    number: '04',
    title: 'Audio and video upload',
    copy: 'Already have the recording? Upload an audio or video file and turn it into the same searchable transcript, notes, summary, and exportable document.',
  },
  {
    icon: Lock,
    number: '05',
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
      'Audio and video file upload with Pro',
      'Parakeet TDT 0.6B v3 speech recognition with approximately 3% observed WER in Echo Chamber testing',
      'AES-256-GCM audio encryption at rest',
    ],
    citation: [
      'https://huggingface.co/nvidia/parakeet-tdt-0.6b-v3',
      'https://huggingface.co/openai/whisper-large-v3',
      'https://huggingface.co/spaces/hf-audio/open_asr_leaderboard',
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
        description="Record live or upload audio and video for private on-device transcription with Parakeet TDT, searchable notes, summaries, and flexible export."
        ogType="product"
        keywords={['private transcription app', 'offline transcription for iPhone', 'upload audio for transcription', 'transcribe video on iPhone', 'Parakeet TDT transcription', 'Whisper alternative', 'local AI meeting notes']}
        jsonLd={[softwareApp, breadcrumbs, buildFAQSchema(echoFaqs)]}
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
                Record live—or upload an existing audio or video file—then transcribe, polish,
                search, summarize, and export without sending your voice to Obsidian Ridge Labs.
              </p>
              <div className="echo-hero__actions">
                <a href={appStoreUrl} target="_blank" rel="noreferrer" className="button button--primary">
                  <Download size={17} /> Download Echo Chamber
                </a>
                <Link to="/help/echochamber" className="button button--quiet">Read the guides <ArrowRight size={17} /></Link>
              </div>
            </div>

            <div className="echo-hero__visual">
              <picture>
                <source srcSet="/images/echochamber/record-screen-480.webp 480w, /images/echochamber/record-screen-960.webp 960w" type="image/webp" />
                <img
                  src="/images/echochamber/RecordScreen.png"
                  alt="Echo Chamber recording screen with live waveform and on-device transcription controls"
                  width="960"
                  height="1707"
                />
              </picture>
              <p>Authentic interface · Live recording</p>
            </div>
          </div>

          <dl className="echo-hero__facts">
            <div><dt>Input</dt><dd>Live · audio · video</dd></div>
            <div><dt>Transcript</dt><dd>Live as you speak</dd></div>
            <div><dt>Export</dt><dd>TXT · MD · PDF · DOCX</dd></div>
            <div><dt>Account</dt><dd>Not required</dd></div>
          </dl>
        </div>
      </header>

      <div className="echo-content">
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
            <div className="section-index"><span>02 / The instrument</span><span>Five core capabilities</span></div>
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

        <section className="echo-model" aria-labelledby="echo-model-title">
          <div className="section-frame">
            <div className="section-index section-index--dark"><span>03 / The model</span><span>Accuracy, with the benchmark attached</span></div>
            <div className="echo-model__grid">
              <MotionReveal>
                <p className="section-kicker section-kicker--dark">Why Parakeet TDT</p>
                <p className="echo-model__stat" aria-label="Approximately 3 percent observed word error rate">≈3<small>%</small></p>
                <h2 id="echo-model-title">Observed in Echo Chamber. Benchmarked in public.</h2>
              </MotionReveal>
              <MotionReveal delay={0.08}>
                <p className="echo-model__answer">
                  Echo Chamber uses NVIDIA Parakeet TDT 0.6B v3 and has observed approximately 3% WER
                  in Echo Chamber testing. For separate, apples-to-apples public context, the current
                  Hugging Face Open ASR evaluation reports 6.32% average English WER for Parakeet and
                  7.44% for OpenAI Whisper large-v3—about 15% fewer word errors for Parakeet on that benchmark.
                </p>
                <dl className="echo-model__comparison">
                  <div><dt>Echo Chamber testing</dt><dd>≈3% observed WER</dd></div>
                  <div><dt>Parakeet · public benchmark</dt><dd>6.32% WER</dd></div>
                  <div><dt>Whisper large-v3 · same benchmark</dt><dd>7.44% WER</dd></div>
                </dl>
                <p className="echo-model__caveat">
                  The ≈3% figure is an internal product observation, not the public benchmark above or a guarantee.
                  Lower is better. WER varies with language, accent, background noise, microphones,
                  overlapping speakers, and recording conditions.
                </p>
                <div className="echo-model__sources" aria-label="Benchmark sources">
                  <a href="https://huggingface.co/nvidia/parakeet-tdt-0.6b-v3" target="_blank" rel="noreferrer">NVIDIA model card <ArrowUpRight size={15} /></a>
                  <a href="https://huggingface.co/openai/whisper-large-v3" target="_blank" rel="noreferrer">Whisper evaluation <ArrowUpRight size={15} /></a>
                </div>
              </MotionReveal>
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
            <div className="section-index"><span>04 / Questions</span><span>Product facts</span></div>
            <div className="echo-faq__layout">
              <div>
                <p className="section-kicker">Before you install</p>
                <h2 id="echo-faq-title">Straight answers, before you install.</h2>
              </div>
              <div className="echo-faq__list">
                {echoFaqs.map((faq, index) => (
                  <details key={faq.question} open={index === 0}>
                    <summary><span>{String(index + 1).padStart(2, '0')}</span>{faq.question}<i /></summary>
                    <p>{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="product-more" aria-labelledby="echo-reading-title">
          <div className="section-frame">
            <div className="section-index section-index--dark"><span>05 / Research</span><span>Compare the boundary</span></div>
            <h2 id="echo-reading-title">Choose with the data path visible.</h2>
            <div className="product-more__grid">
              <Link to="/blog/otter-vs-echo"><span>Comparison</span><strong>Echo Chamber vs Otter.ai: On-Device and Cloud Transcription Compared</strong><ArrowUpRight /></Link>
              <Link to="/blog/best-offline-transcription-apps"><span>Buyer’s guide</span><strong>5 Private Transcription Apps Compared: Offline, On-Device, and Cloud Options</strong><ArrowUpRight /></Link>
            </div>
          </div>
        </section>

        <section className="echo-close" aria-labelledby="echo-close-title">
          <div className="section-frame">
            <p className="section-kicker section-kicker--dark">Available now</p>
            <h2 id="echo-close-title">Keep the conversation.<br /><em>Lose the cloud dependency.</em></h2>
            <div className="echo-close__actions">
              <a href={appStoreUrl} target="_blank" rel="noreferrer" className="button button--dark">Download Echo Chamber <ArrowUpRight size={17} /></a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EchoDetail;
