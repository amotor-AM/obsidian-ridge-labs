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
    copy: 'Keep the raw verbatim transcript, then turn it into a cleaner reading copy, useful notes, or a focused summary with Apple Intelligence or the local Bonsai fallback.',
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
      'Apple Intelligence transcript tools on supported devices',
      'Bundled Bonsai 1.7B local fallback when Apple Intelligence is unavailable',
      'Word-level recording search',
      'Recording bookmarks',
      'TXT, Markdown, PDF, and DOCX export',
      'Audio and video file upload with Pro',
      'Parakeet TDT 0.6B v3 speech recognition with approximately 4.5% observed WER for the enhanced Echo Chamber pipeline',
      'Targeted speech enhancement pass before transcription',
      'AES-256-GCM audio encryption at rest',
    ],
    softwareRequirements: 'Apple Intelligence is used for transcript intelligence on compatible devices. A bundled Bonsai 1.7B model provides a local fallback on supported Apple hardware without Apple Intelligence.',
    offers: [
      { '@type': 'Offer', name: 'Echo Chamber Free', price: '0', priceCurrency: 'USD', availability: 'https://schema.org/InStock', url: appStoreUrl },
      { '@type': 'Offer', name: 'Echo Chamber Pro Monthly', price: '2.99', priceCurrency: 'USD', availability: 'https://schema.org/InStock', url: appStoreUrl, priceSpecification: { '@type': 'UnitPriceSpecification', price: '2.99', priceCurrency: 'USD', unitText: 'MONTH' } },
      { '@type': 'Offer', name: 'Echo Chamber Pro Yearly', price: '29.99', priceCurrency: 'USD', availability: 'https://schema.org/InStock', url: appStoreUrl, priceSpecification: { '@type': 'UnitPriceSpecification', price: '29.99', priceCurrency: 'USD', unitText: 'YEAR' } },
      { '@type': 'Offer', name: 'Echo Chamber Pro Lifetime', price: '79.99', priceCurrency: 'USD', availability: 'https://schema.org/InStock', url: appStoreUrl, description: 'One-time lifetime purchase' },
    ],
    citation: [
      'https://huggingface.co/nvidia/parakeet-tdt-0.6b-v3',
      'https://huggingface.co/openai/whisper-large-v3',
      'https://huggingface.co/datasets/hf-audio/open-asr-leaderboard',
      'https://huggingface.co/prism-ml/Bonsai-1.7B-mlx-1bit',
      'https://docs.cloud.google.com/speech-to-text/docs/best-practices',
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
        description="Record live or upload audio and video for private on-device transcription with Parakeet TDT, Apple Intelligence, a Bonsai fallback, and lifetime pricing."
        ogType="product"
        keywords={['private transcription app', 'offline transcription for iPhone', 'upload audio for transcription', 'transcribe video on iPhone', 'Parakeet TDT transcription', 'Whisper alternative', 'local AI meeting notes']}
        jsonLd={[softwareApp, breadcrumbs, buildFAQSchema(echoFaqs, '/apps/echochamber')]}
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
              <p className="section-kicker">Private AI transcription for Apple devices</p>
              <h1>Transcribe meetings, audio, and video.<br /><em>Entirely on-device.</em></h1>
              <p>
                Record live or import an existing audio or video file. Echo Chamber turns it into
                an accurate, searchable transcript, useful notes, summaries, and answers without
                sending the recording to Obsidian Ridge Labs or inviting a bot into the call.
              </p>
              <div className="echo-hero__actions">
                <a href={appStoreUrl} target="_blank" rel="noreferrer" className="button button--primary">
                  <Download size={17} /> Get Echo Chamber
                </a>
                <a href="#accuracy" className="button button--quiet">See how accuracy works <ArrowRight size={17} /></a>
              </div>
            </div>

            <aside className="echo-hero__proof" aria-label="Echo Chamber local AI architecture">
              <p>Two local engines. One private workflow.</p>
              <dl>
                <div><dt>Speech to text</dt><dd>Parakeet TDT v3</dd></div>
                <div><dt>Primary transcript AI</dt><dd>Apple Intelligence</dd></div>
                <div><dt>Local fallback</dt><dd>Bonsai 1.7B</dd></div>
                <div><dt>Observed pipeline WER</dt><dd>About 4.5%</dd></div>
              </dl>
              <span>Apple Intelligence is not required for the complete local workflow.</span>
            </aside>
          </div>

          <dl className="echo-hero__facts">
            <div><dt>Input</dt><dd>Live · audio · video</dd></div>
            <div><dt>Transcription</dt><dd>Parakeet TDT on-device</dd></div>
            <div><dt>Transcript AI</dt><dd>Apple Intelligence + Bonsai</dd></div>
            <div><dt>Purchase</dt><dd>Monthly · yearly · lifetime</dd></div>
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
                <h2 id="echo-thesis-title">A useful transcript should not create a second audience.</h2>
              </MotionReveal>
              <MotionReveal delay={0.08}>
                <p>
                  Cloud recorders become useful only after the conversation leaves the room. Echo Chamber
                  starts on the hardware already in your hand. Record in a meeting room, lecture hall,
                  airplane, or anywhere the network is not invited, then keep the searchable archive with you.
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
            <div className="echo-intelligence" aria-label="Echo Chamber on-device intelligence options">
              <div>
                <span>Primary path</span>
                <h3>Built for Apple Intelligence.</h3>
                <p>On compatible devices, Apple’s on-device Foundation Models power transcript polish, notes, summaries, and questions.</p>
              </div>
              <div>
                <span>Local fallback</span>
                <h3>Bonsai 1.7B keeps the workflow local.</h3>
                <p>When Apple Intelligence is unavailable, Echo Chamber uses a bundled 1-bit Bonsai model for local transcript intelligence on supported Apple hardware.</p>
                <a href="https://huggingface.co/prism-ml/Bonsai-1.7B-mlx-1bit" target="_blank" rel="noreferrer">Bonsai model card <ArrowUpRight size={15} /></a>
              </div>
              <p>Parakeet TDT handles speech recognition on both paths. The original recording never needs a remote AI service.</p>
            </div>
          </div>
        </section>

        <section id="accuracy" className="echo-model" aria-labelledby="echo-model-title">
          <div className="section-frame">
            <div className="section-index section-index--dark"><span>03 / Accuracy</span><span>The complete product pipeline</span></div>
            <div className="echo-model__grid">
              <MotionReveal>
                <p className="section-kicker section-kicker--dark">Observed in Echo Chamber</p>
                <p className="echo-model__stat" aria-hidden="true"><span>4.5</span><small>%</small></p>
                <p className="echo-model__stat-label">Approximate word error rate observed for the enhanced Echo Chamber pipeline</p>
                <h2 id="echo-model-title">Accuracy starts before Parakeet hears a word.</h2>
              </MotionReveal>
              <MotionReveal delay={0.08}>
                <p className="echo-model__answer">
                  Before transcription, Echo Chamber applies a targeted speech enhancement pass built
                  for recognizer input. This is not generic normalization or a cosmetic audio effect. The filter is
                  part of the transcription pipeline because it improves the signal Parakeet receives.
                  Across the current internal test set, that complete pipeline has observed approximately 4.5% WER.
                </p>
                <p className="echo-model__answer echo-model__answer--secondary">
                  For separate model context, the cited Hugging Face Open ASR snapshot reports 6.32%
                  average English WER for Parakeet TDT 0.6B v3 and 7.44% for OpenAI Whisper large-v3. That public
                  benchmark compares models. The 4.5% figure measures Echo Chamber’s enhanced product pipeline.
                </p>
                <dl className="echo-model__comparison">
                  <div><dt>Enhanced Echo Chamber pipeline</dt><dd>About 4.5% observed WER</dd></div>
                  <div><dt>Parakeet · public benchmark</dt><dd>6.32% WER</dd></div>
                  <div><dt>OpenAI Whisper large-v3 · same benchmark</dt><dd>7.44% WER</dd></div>
                </dl>
                <p className="echo-model__caveat">
                  The approximately 4.5% result is an internal product observation, not a guarantee or
                  a model-only leaderboard score. Lower is better. WER varies with language, accent,
                  background noise, microphones, overlapping speakers, and recording conditions.
                </p>
                <div className="echo-model__sources" aria-label="Benchmark sources">
                  <a href="https://huggingface.co/nvidia/parakeet-tdt-0.6b-v3" target="_blank" rel="noreferrer">NVIDIA model card <ArrowUpRight size={15} /></a>
                  <a href="https://huggingface.co/openai/whisper-large-v3" target="_blank" rel="noreferrer">Whisper evaluation <ArrowUpRight size={15} /></a>
                  <a href="https://huggingface.co/datasets/hf-audio/open-asr-leaderboard" target="_blank" rel="noreferrer">Open ASR snapshot <ArrowUpRight size={15} /></a>
                  <a href="https://docs.cloud.google.com/speech-to-text/docs/best-practices#audio_preprocessing" target="_blank" rel="noreferrer">Audio preprocessing context <ArrowUpRight size={15} /></a>
                </div>
              </MotionReveal>
            </div>
          </div>
        </section>

        <section className="echo-boundary" aria-labelledby="echo-boundary-title">
          <div className="section-frame echo-boundary__layout">
            <MotionReveal>
              <p className="section-kicker section-kicker--dark">Privacy, explained plainly</p>
              <h2 id="echo-boundary-title">Core intelligence stays on-device.<br />Every connection is explained.</h2>
            </MotionReveal>
            <div className="echo-boundary__columns">
              <MotionReveal className="echo-boundary__column">
                <span>ON-DEVICE CORE</span>
                <ul>
                  {['Recording and transcription', 'AI notes and transcript polish', 'Search and bookmarks', 'Export generation'].map((item) => <li key={item}><Check size={15} />{item}</li>)}
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
              With iCloud sync off, recordings and transcripts remain on the device that created them.
              Turning sync on creates an encrypted copy in your own iCloud account. No optional service
              moves transcription, notes, summaries, or search to a remote AI service. Read the{' '}
              <Link to="/privacy">full privacy model</Link> for the exact boundary.
            </p>
          </div>
        </section>

        <section className="echo-pricing" aria-labelledby="echo-pricing-title">
          <div className="section-frame">
            <div className="echo-pricing__layout">
              <MotionReveal>
                <p className="section-kicker">Start free</p>
                <h2 id="echo-pricing-title">Great apps should not require another subscription.</h2>
                <p>Choose monthly, yearly, or pay once for Lifetime. Every paid option unlocks the same complete Pro toolkit.</p>
              </MotionReveal>
              <MotionReveal className="echo-pricing__card" delay={0.08}>
                <div><span>Echo Chamber Pro</span><small>Choose how you own it</small></div>
                <div className="echo-pricing__options">
                  <div><span>Monthly</span><strong>$2.99</strong><small>per month</small></div>
                  <div><span>Yearly</span><strong>$29.99</strong><small>per year</small></div>
                  <div className="is-lifetime"><span>Lifetime</span><strong>$79.99</strong><small>one payment</small></div>
                </div>
                <ul>
                  {['Unlimited recording length', 'All AI features', 'Audio and video upload', 'Batch enhancement', 'Priority support'].map((item) => <li key={item}><Check size={15} />{item}</li>)}
                </ul>
                <a href={appStoreUrl} target="_blank" rel="noreferrer" className="button button--primary">View on the App Store <ArrowUpRight size={16} /></a>
              </MotionReveal>
            </div>
          </div>
        </section>

        <section id="faq" className="echo-faq" aria-labelledby="echo-faq-title">
          <div className="section-frame">
            <div className="section-index"><span>04 / Questions</span><span>Product facts</span></div>
            <div className="echo-faq__layout">
              <div>
                <p className="section-kicker">Before you install</p>
                <h2 id="echo-faq-title">Straight answers, before you install.</h2>
              </div>
              <div className="echo-faq__list">
                {echoFaqs.map((faq, index) => (
                  <details id={`faq-${index + 1}`} key={faq.question} open={index === 0}>
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
            <h2 id="echo-reading-title">See why private processing wins.</h2>
            <div className="product-more__grid">
              <Link to="/journal/otter-vs-echo"><span>Comparison</span><strong>Echo Chamber vs Otter.ai: On-Device and Cloud Transcription Compared</strong><ArrowUpRight /></Link>
              <Link to="/journal/best-offline-transcription-apps"><span>Buyer’s guide</span><strong>5 Private Transcription Apps Compared: Offline, On-Device, and Cloud Options</strong><ArrowUpRight /></Link>
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
