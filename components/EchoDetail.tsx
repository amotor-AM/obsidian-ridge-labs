import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, Mic } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { echoFaqs } from '../data/faqs';
import SEO, { buildBreadcrumbs, buildFAQSchema, buildSoftwareApp } from './SEO';
import SiteFaq from './SiteFaq';
import '../styles/echo-chamber.css';

const appStoreUrl = 'https://apps.apple.com/us/app/echo-chamber-ai-transcription/id6761675060';
const screens = [
  { file: 'transcription-details', label: 'Read', caption: 'Playback and the transcript, together. Return to the recording when the wording matters.', alt: 'Echo Chamber app preview showing a recording titled Maximizing Gross Profit in Business, playback controls, and its readable transcript' },
  { file: 'ai-chat', label: 'Ask', caption: 'Ask about this transcript. An answer is generated on your device from the conversation.', alt: 'Echo Chamber app preview showing the question What are the key points and a generated answer about the transcript' },
  { file: 'record-screen', label: 'Record', caption: 'Start with a conversation. Record locally and bookmark moments to revisit.', alt: 'Echo Chamber app preview showing the recording screen and microphone control' },
];

const StoreLink = ({ children = 'Get Echo Chamber', className = '' }: { children?: React.ReactNode; className?: string }) => (
  <a className={`ec-button ${className}`} href={appStoreUrl} target="_blank" rel="noreferrer">
    {children}<ArrowUpRight size={18} aria-hidden="true" />
  </a>
);

const EchoDetail: React.FC = () => {
  const product = products.find((item) => item.id === 'echochamber')!;
  const [activeScreen, setActiveScreen] = useState(0);
  const screen = screens[activeScreen];
  const softwareApp = {
    ...buildSoftwareApp(product),
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'Productivity',
    operatingSystem: 'iOS 18 or later; iPadOS 18 or later; macOS 15.1 or later on Apple silicon',
    softwareRequirements: 'Supported Apple hardware and required local model setup. Available transcript tools vary by device and plan.',
  };

  return (
    <div className="ec-page">
      <SEO
        title="Echo Chamber: Find the Words You Came Back For"
        description="Search a recording, make notes, and export the transcript with Echo Chamber. Speech recognition and AI run on your Apple device."
        ogType="product"
        keywords={['private transcription app', 'offline transcription for iPhone', 'local AI meeting notes', 'audio transcription for Mac']}
        jsonLd={[
          softwareApp,
          buildBreadcrumbs([{ name: 'Home', url: '/' }, { name: 'Apps', url: '/download' }, { name: 'Echo Chamber', url: '/apps/echochamber' }]),
          buildFAQSchema(echoFaqs, '/apps/echochamber'),
        ]}
      />

      <header className="ec-hero">
        <div className="ec-frame">
          <div className="ec-page-nav">
            <Link to="/download">The collection <span aria-hidden="true">/</span> Echo Chamber</Link>
            <span className="ec-availability"><i aria-hidden="true" />On the App Store</span>
          </div>
          <div className="ec-hero-grid">
            <div className="ec-hero-copy">
              <p className="ec-identity"><span><Mic size={22} strokeWidth={1.5} aria-hidden="true" /></span>Echo Chamber</p>
              <p className="ec-eyebrow">Private transcription for Apple devices</p>
              <h1>Find the words you came back for.</h1>
              <p className="ec-lead">Echo Chamber turns recordings into searchable transcripts, notes, and answers on your Apple device. Find a passage, check it against the audio, and take the words into your work.</p>
              <div className="ec-actions">
                <StoreLink />
                <a className="ec-text-link" href="#workflow">See the workflow <ArrowRight size={17} aria-hidden="true" /></a>
              </div>
              <p className="ec-offer-note">Free to download · Optional Pro</p>
              <div className="ec-hero-boundary">
                <p>Processing stays on your device. Optional iCloud sync is off by default. Models may need a download before offline use.</p>
                <a href="#boundary">Setup, storage & connections <ArrowRight size={14} aria-hidden="true" /></a>
              </div>
            </div>

            <figure className="ec-preview" aria-label="Explore Echo Chamber app screens">
              <div className="ec-preview-art">
                <div className="ec-glass-plane" aria-hidden="true" />
                <img
                  key={screen.file}
                  className="ec-preview-image"
                  src={`/images/echochamber/${screen.file}-960.webp`}
                  srcSet={`/images/echochamber/${screen.file}-480.webp 480w, /images/echochamber/${screen.file}-960.webp 960w`}
                  sizes="(max-width: 700px) 92vw, (max-width: 1000px) 460px, 42vw"
                  alt={screen.alt}
                  width="960" height="1707" decoding="async"
                  {...{ fetchpriority: activeScreen === 0 ? 'high' : 'auto' }}
                />
                <span className="ec-preview-label">App preview · Example recording</span>
              </div>
              <div className="ec-screen-choices" role="group" aria-label="Choose an Echo Chamber preview">
                {screens.map((item, index) => (
                  <button key={item.file} type="button" aria-pressed={activeScreen === index} onClick={() => setActiveScreen(index)}>
                    <span aria-hidden="true">0{index + 1}</span>{item.label}
                  </button>
                ))}
              </div>
              <figcaption aria-live="polite">{screen.caption}</figcaption>
            </figure>
          </div>
        </div>
      </header>

      <section id="workflow" className="ec-section ec-return" aria-labelledby="ec-return-title">
        <div className="ec-frame">
          <div className="ec-section-label"><span>01 / Return to the words</span><span>Record → Find → Use</span></div>
          <div className="ec-section-intro">
            <h2 id="ec-return-title">Find a passage without starting over.</h2>
            <p>You do not have to replay the whole recording to find one point. Search for a word you remember or return to a moment you bookmarked, then listen with the transcript in front of you.</p>
          </div>
          <ol className="ec-return-steps">
            <li><span>During the conversation</span><h3>Bookmark a moment.</h3><p>Follow the live transcript and mark a point you want to revisit while you keep listening.</p></li>
            <li><span>When you return</span><h3>Search the transcript.</h3><p>Use a word you remember to find the relevant passage instead of listening from the beginning.</p></li>
            <li><span>When the wording matters</span><h3>Check against the audio.</h3><p>Listen again to confirm a name, number, or quotation before you use it.</p></li>
          </ol>
        </div>
      </section>

      <section className="ec-section ec-results" aria-labelledby="ec-results-title">
        <div className="ec-frame ec-results-grid">
          <div className="ec-result-copy">
            <p className="ec-eyebrow">02 / Put the conversation to work</p>
            <h2 id="ec-results-title">Get a working note from the transcript.</h2>
            <p className="ec-lead">When the conversation is over, use the transcript to make a summary, prepare notes, or answer a question before you write the follow-up.</p>
            <p>Echo Chamber’s AI tools run locally. Ask for the key points or make a cleaner reading copy, then return to the recording whenever you need to check the result.</p>
            <div className="ec-result-detail"><span>Shown in the app</span><p>A question about a recorded conversation becomes a readable answer. Return to the transcript when you need the surrounding context.</p></div>
          </div>
          <figure className="ec-answer-preview">
            <div className="ec-answer-surface">
              <img src="/images/echochamber/ai-chat-960.webp" srcSet="/images/echochamber/ai-chat-480.webp 480w, /images/echochamber/ai-chat-960.webp 960w" sizes="(max-width: 700px) 90vw, 440px" width="960" height="1707" loading="lazy" decoding="async" alt="Echo Chamber app preview with a question about key points and a generated answer from the example transcript" />
            </div>
            <figcaption>Example recording · Transcript question and answer</figcaption>
          </figure>
        </div>
      </section>

      <section className="ec-section ec-export" aria-labelledby="ec-export-title">
        <div className="ec-frame">
          <div className="ec-section-label"><span>03 / Import and export</span><span>Audio, video, and documents</span></div>
          <div className="ec-section-intro">
            <h2 id="ec-export-title">Take the transcript into your work.</h2>
            <div><p>Import audio or video you already have and transcribe it on your device. Export the words to your notes app, a document you can edit, or a file you can share.</p><p className="ec-detail">The in-app offer shows import allowances. Export options can differ by platform.</p></div>
          </div>
          <dl className="ec-format-list">
            <div><dt>TXT & Markdown</dt><dd>Bring the words into your notes, draft, or research.</dd></div>
            <div><dt>PDF</dt><dd>Send a readable document with a fixed layout.</dd></div>
            <div><dt>DOCX</dt><dd>Continue editing in a compatible word processor.</dd></div>
          </dl>
          <div className="ec-mac-note"><span>On Mac</span><p>Capture microphone and system audio with permission, without sending a bot into the meeting. The native Mac app has its own recording workflow.</p></div>
        </div>
      </section>

      <section id="boundary" className="ec-section ec-boundary" aria-labelledby="ec-boundary-title">
        <div className="ec-frame">
          <div className="ec-section-intro">
            <div><p className="ec-eyebrow">04 / The boundary</p><h2 id="ec-boundary-title">Your device does the processing.</h2></div>
            <p>Echo Chamber processes the conversation without sending it to an external AI service. Setup, storage, and sharing have their own connections.</p>
          </div>
          <dl className="ec-boundary-grid">
            <div><dt>Processing</dt><dd>Speech recognition and transcript intelligence run on supported Apple hardware. Required models must be ready before offline use. Available AI tools depend on the device and setup.</dd></div>
            <div><dt>Storage</dt><dd>Recordings and transcripts are stored locally. Optional iCloud sync is off by default and uses your Apple account. Files you export follow the destination you choose.</dd></div>
            <div><dt>Connections</dt><dd>Model setup, purchases, and usage checks can connect to online services. Optional iCloud sync and sharing have their own destinations. Core processing does not send the conversation to a remote AI service.</dd></div>
          </dl>
          <div className="ec-requirements" id="requirements">
            <h3>Before you download</h3>
            <p>iPhone and iPad: iOS or iPadOS 18 or later. Mac: macOS 15.1 or later on Apple silicon. Hardware and model availability affect features; check your device in the App Store.</p>
            <Link to="/privacy">Read the privacy model <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section id="pricing" className="ec-section ec-download" aria-labelledby="ec-download-title">
        <div className="ec-frame ec-download-grid">
          <div><p className="ec-eyebrow">Free to download · Optional Pro</p><h2 id="ec-download-title">Record your next conversation.</h2><p>Download Echo Chamber from the App Store. Check the offer in the app for current plans, allowances, and your local price.</p></div>
          <div className="ec-download-actions"><StoreLink /><Link className="ec-text-link" to="/help/echochamber">Echo Chamber help <ArrowRight size={16} aria-hidden="true" /></Link></div>
        </div>
      </section>

      <section className="ec-section ec-faq" aria-labelledby="ec-faq-title">
        <div className="ec-frame ec-faq-grid">
          <div><p className="ec-eyebrow">A few practical questions</p><h2 id="ec-faq-title">Before your first recording.</h2></div>
          <SiteFaq items={echoFaqs} tone="dark" />
        </div>
      </section>
    </div>
  );
};

export default EchoDetail;
