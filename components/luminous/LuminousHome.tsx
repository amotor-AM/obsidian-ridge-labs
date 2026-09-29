import React, { useId, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, AudioLines, BookOpen, Cpu, Dumbbell, Fingerprint, Plane, WifiOff } from 'lucide-react';
import SiteFaq from '../SiteFaq';
import CollectionDirectory from '../CollectionDirectory';
import { collectionAvailability } from '../../data/collection';
import { products, getProductReleaseLabel } from '../../data/products';
import { homeFaqs } from '../../data/faqs';
import ProductStage from './ProductStage';
import LocalCore from './LocalCore';
import '../../styles/luminous-home.css';

const echoViews = [
  { title: 'Record', file: 'record-screen', heading: 'Give the conversation your attention.', description: 'Record a meeting, a lecture, or a thought. Bookmark a moment you want to return to.', alt: 'Echo Chamber recording screen with the microphone control' },
  { title: 'Read', file: 'transcription-details', heading: 'Find the part you came back for.', description: 'Search the transcript, play the recording, and turn what was said into useful notes.', alt: 'Echo Chamber showing an example recording, playback controls, and the original transcript' },
  { title: 'Ask', file: 'ai-chat', heading: 'Ask a question of the recording.', description: 'Work through the transcript with on-device chat. Keep the original words close enough to check the answer.', alt: 'Echo Chamber answering a question about an example transcript' },
];

function EchoWorkbench() {
  const [active, setActive] = useState(1);
  const identity = useId();
  const view = echoViews[active];
  return <section className="ls-echo ls-shell" aria-labelledby="ls-echo-title">
    <div className="ls-workbench">
      <div className="ls-workbench-copy">
        <div className="ls-app-heading"><span className="ls-app-icon"><AudioLines size={24} strokeWidth={1.6} aria-hidden="true" /></span><span>Echo Chamber<small>Private transcription</small></span></div>
        <span className="ls-release"><span className="ls-dot" /> Available now</span>
        <h2 id="ls-echo-title">Come back to the conversation.</h2>
        <p className="ls-workbench-intro">When you need to revisit a conversation, search the transcript, play it back, or ask a question. Echo Chamber does the processing on your device.</p>
        <div className="ls-view-switcher" role="group" aria-label="Choose an Echo Chamber screenshot">
          {echoViews.map((item, index) => <button key={item.title} type="button" aria-pressed={index === active} aria-controls={`${identity}-view`} onClick={() => setActive(index)}><span>0{index + 1}</span>{item.title}</button>)}
        </div>
        <div className="ls-view-copy" id={`${identity}-view`} aria-live="polite" aria-atomic="true"><h3>{view.heading}</h3><p>{view.description}</p></div>
        <Link className="ls-text-link" to="/apps/echochamber">Explore Echo Chamber <ArrowUpRight size={17} aria-hidden="true" /></Link>
      </div>
      <figure className="ls-workbench-visual">
        <div className="ls-recording-orbit" aria-hidden="true"><i /><span /></div>
        <div className="ls-echo-screen-stack">{echoViews.map((item, index) => <img key={item.file} className={active === index ? 'is-active' : ''} src={`/images/echochamber/${item.file}-960.webp`} width="960" height="1707" alt={active === index ? item.alt : ''} aria-hidden={active !== index} loading="lazy" decoding="async" />)}</div>
        <figcaption className="ls-screen-caption"><span>Echo Chamber</span><span>App preview · example recording</span></figcaption>
      </figure>
    </div>
  </section>;
}

function FeaturedApps() {
  const mettle = products.find(app => app.id === 'mettle')!;
  const memora = products.find(app => app.id === 'memora')!;
  return <div className="ls-featured ls-shell">
    <section className="ls-feature ls-feature--mettle" aria-labelledby="ls-mettle-title">
      <div className="ls-feature-copy">
        <div className="ls-app-heading"><span className="ls-app-icon"><Dumbbell size={24} strokeWidth={1.6} aria-hidden="true" /></span><span>Mettle<small>Strength training</small></span></div>
        <span className="ls-release ls-release--development">{getProductReleaseLabel(mettle)}</span>
        <h2 id="ls-mettle-title">Build on your last session.</h2>
        <p>Mettle uses your recent sets to work out the next reps and weight. Open “Why this?” to see which progression rule it used and the training behind that choice.</p>
        <div className="ls-feature-detail"><span className="ls-detail-number">YOUR TRAINING HISTORY</span><h3>A plan that can change with your week.</h3><p>Ask the on-device coach to adjust your plan, then review the proposed changes before applying them.</p></div>
        <Link className="ls-text-link" to="/apps/mettle">Explore Mettle <ArrowUpRight size={17} aria-hidden="true" /></Link>
      </div>
      <figure className="ls-feature-art">
        <img className="ls-feature-artwork" src="/images/luminous/mettle-machined-plates.webp" width="1200" height="800" alt="" aria-hidden="true" loading="lazy" decoding="async" />
        <div className="ls-feature-phone"><img src="/images/mettle/plan-960.webp" width="441" height="960" alt="Mettle’s current Plan screen, showing a training week and the Why this control" loading="lazy" decoding="async" /></div>
        <figcaption className="ls-screen-caption"><span>A week with a plan.</span><span>{mettle.releaseStatus === 'app-store' ? 'App preview' : 'Development preview'}</span></figcaption>
      </figure>
    </section>
    <section className="ls-feature ls-feature--memora" aria-labelledby="ls-memora-title">
      <div className="ls-feature-copy">
        <div className="ls-app-heading"><span className="ls-app-icon"><BookOpen size={24} strokeWidth={1.6} aria-hidden="true" /></span><span>Memora<small>Flashcards &amp; recall</small></span></div>
        <span className="ls-release ls-release--development">{getProductReleaseLabel(memora)}</span>
        <h2 id="ls-memora-title">Turn your notes into flashcards.</h2>
        <p>Memora turns notes, photos, and PDFs with selectable text into draft flashcards. Keep the cards you want, and start studying the material you came to learn.</p>
        <div className="ls-feature-detail"><span className="ls-detail-number">REVIEWS THAT FOLLOW YOUR RECALL</span><h3>Let your recall guide the next review.</h3><p>Rate how well you remember each answer. Memora uses those ratings to schedule the card’s next review.</p></div>
        <Link className="ls-text-link" to="/apps/memora">Explore Memora <ArrowUpRight size={17} aria-hidden="true" /></Link>
      </div>
      <figure className="ls-feature-art">
        <img className="ls-feature-artwork" src="/images/luminous/memora-glass-cards.webp" width="1200" height="800" alt="" aria-hidden="true" loading="lazy" decoding="async" />
        <div className="ls-feature-phone"><img src="/images/memora/review-960.webp" width="441" height="960" alt="Memora’s Review drafts screen, with four selectable flashcards generated from study material" loading="lazy" decoding="async" /></div>
        <figcaption className="ls-screen-caption"><span>The cards are yours to choose.</span><span>{memora.releaseStatus === 'app-store' ? 'App preview' : 'Development preview'}</span></figcaption>
      </figure>
    </section>
    <div className="ls-collection-note"><p>{collectionAvailability}</p><Link className="ls-text-link" to="/download">Explore all apps <ArrowRight size={17} aria-hidden="true" /></Link></div>
  </div>;
}

export default function LuminousHome() {
  return <div className="ls-home">
    <section className="ls-hero" aria-labelledby="ls-hero-title">
      <div className="ls-hero-halo" aria-hidden="true" />
      <div className="ls-hero-copy ls-shell" data-no-split>
        <Link className="ls-announcement" to="/apps/echochamber"><span className="ls-dot" /> Echo Chamber is here <ArrowRight size={13} aria-hidden="true" /></Link>
        <h1 id="ls-hero-title">AI that knows you.<br /><span>Not one that watches you.</span></h1>
        <p>Apps for your conversations, plans, and everyday life. Built around the intelligence in your Apple devices.</p>
        <div className="ls-actions"><Link className="ls-button ls-button--primary" to="/apps/echochamber">Explore Echo Chamber <ArrowUpRight size={16} aria-hidden="true" /></Link><Link className="ls-button ls-button--glass" to="/download">Explore all apps <ArrowRight size={16} aria-hidden="true" /></Link></div>
      </div>
      <div className="ls-shell"><ProductStage /></div>
    </section>
    <div className="ls-foundation ls-shell" aria-label="Our approach"><span><Cpu size={17} aria-hidden="true" /> Core AI on your device</span><span><Fingerprint size={17} aria-hidden="true" /> Built for Apple hardware</span><span><WifiOff size={17} aria-hidden="true" /> Each app names its connections</span></div>
    <EchoWorkbench />
    <FeaturedApps />
    <section className="ls-hardware ls-shell" id="local-first" aria-labelledby="ls-hardware-title">
      <div className="ls-hardware-copy"><span className="ls-eyebrow"><span className="ls-dot" /> Local by design</span><h2 id="ls-hardware-title">Keep the personal part personal.</h2><p className="ls-lead">The more useful an app becomes, the more you trust it with.</p><p>We don’t think that should mean sending your recordings, journal entries, or training history to an external AI service. That exchange is The Trade. Our core AI runs on your device.</p><p>Each app tells you where it stores your records and which features make a connection, so you know what you’re choosing.</p><Link className="ls-text-link" to="/philosophy">The Obsidian Ridge Labs standard <ArrowUpRight size={17} aria-hidden="true" /></Link></div>
      <LocalCore />
    </section>
    <section className="ls-offline ls-shell" aria-labelledby="ls-offline-title"><div className="ls-offline-symbol" aria-hidden="true"><Plane size={31} strokeWidth={1.4} /></div><div><span className="ls-eyebrow">Try it in Echo Chamber</span><h2 id="ls-offline-title">Transcribe without a connection.</h2><p>Finish model setup while connected. Then switch to airplane mode, record a thought, and read the transcript. Model downloads, purchases, and optional sync need a connection.</p></div><Link className="ls-text-link" to="/help/echochamber">Open the guide <ArrowUpRight size={17} aria-hidden="true" /></Link></section>
    <section className="ls-faq ls-shell" aria-labelledby="ls-faq-title"><div><span className="ls-eyebrow">Frequently asked questions</span><h2 id="ls-faq-title">Questions about private AI apps</h2><p>Which apps are available, what hardware they need, and what works offline.</p></div><SiteFaq items={homeFaqs} className="ls-questions" /></section>
    <section className="ls-close ls-shell" aria-labelledby="ls-close-title"><div><span className="ls-eyebrow">The whole collection</span><h2 id="ls-close-title">There’s more to explore.</h2><p>From the recipes you save to the people you mean to call, every app has a particular job. Find yours.</p></div><CollectionDirectory /><Link className="ls-text-link" to="/download">See the collection <ArrowRight size={16} aria-hidden="true" /></Link></section>
  </div>;
}
