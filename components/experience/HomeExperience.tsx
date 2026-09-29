import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowUpRight, ArrowRight } from 'lucide-react';
import ObsidianSculpture from './ObsidianSculpture';
import Trilogy from './Trilogy';
import LocalFlow from './LocalFlow';
import SiteFaq from '../SiteFaq';
import { homeFaqs } from '../../data/faqs';

export default function HomeExperience() {
  return <div className="vx-home">
    <section className="vx-hero" aria-labelledby="vx-hero-title">
      <div className="vx-hero-grid" aria-hidden="true" />
      <ObsidianSculpture />
      <div className="vx-hero-content vx-frame">
        <div className="vx-hero-prelude"><span className="vx-eyebrow">Independent software for Apple</span><span className="vx-eyebrow">Las Vegas, Nevada</span></div>
        <h1 id="vx-hero-title" data-reveal-words>AI that knows you.<br /><span>Not one that</span><br />watches you.</h1>
        <div className="vx-hero-bottom"><div className="vx-hero-intro"><p>Your voice. Your effort. What you’re trying to remember. Intelligence belongs close to the things that make you, you.</p><Link className="vx-cta" to="/apps/echochamber">Meet Echo Chamber<ArrowUpRight size={19} aria-hidden="true" /></Link><span className="vx-hero-availability"><i />On the App Store now</span></div><div className="vx-sculpture-label"><span>FIG. 001 / THE LOCAL CORE</span><p>Three disciplines.<br />One boundary.</p></div></div>
        <div className="vx-hero-baseline"><span>Built around your device.<br />And your right to keep things to yourself.</span><a href="#trilogy" className="vx-scroll-cue">Discover the trilogy<ArrowDown size={17} aria-hidden="true" /></a><span className="vx-coordinate">36°10′ N &nbsp; 115°08′ W</span></div>
      </div>
    </section>
    <section className="vx-trade vx-frame" aria-labelledby="trade-title"><div className="vx-section-top"><span className="vx-eyebrow">The reason we exist</span><span className="vx-cross" aria-hidden="true">+</span></div><div className="vx-trade-content"><h2 id="trade-title" data-reveal-words>Your life is the context.<br /><span>It shouldn’t be<br className="vx-desktop-break" /> the payment.</span></h2><div><p>A meeting you can’t upload. A thought you don’t want stored on a server. The more personal the context, the more useful intelligence could be.</p><p>Giving that context away has become the price of admission. We call it The Trade. We’re building another way.</p><Link className="vx-link" to="/philosophy">Read our standard<ArrowUpRight size={18} aria-hidden="true" /></Link></div></div></section>
    <Trilogy />
    <LocalFlow />
    <section className="vx-airplane vx-frame" aria-labelledby="airplane-title"><div className="vx-airplane-mark" aria-hidden="true"><svg viewBox="0 0 200 200"><path d="M103 28L115 83L173 124V137L113 117L111 157L128 169V177L100 168L72 177V169L89 157L87 117L27 137V124L85 83L97 28Z" /></svg><span>CONNECTION: OFF</span></div><div><span className="vx-eyebrow">An ordinary, useful test</span><h2 id="airplane-title" data-reveal-words>Try airplane mode.</h2><p>Set up Echo Chamber’s models. Turn off Wi-Fi and cellular. Record a thought. Read the transcript. Search for a word.</p><p>The work still happens in your hand.</p><Link className="vx-link" to="/help/echochamber">See what works offline<ArrowUpRight size={18} aria-hidden="true" /></Link></div></section>
    <section className="vx-questions vx-frame" aria-labelledby="practical-title"><div><span className="vx-eyebrow">03 / Before you begin</span><h2 id="practical-title" data-reveal-words>The practical<br />things.</h2><p>Availability, compatibility, and the connections each app still needs.</p></div><SiteFaq items={homeFaqs} /></section>
    <section className="vx-close vx-frame" aria-labelledby="close-title"><span className="vx-eyebrow">An independent studio in Las Vegas, Nevada</span><h2 id="close-title" data-reveal-words>Find your place<br /><span>in the collection.</span></h2><div className="vx-close-actions"><Link to="/apps/echochamber" className="vx-cta">Start with Echo Chamber<ArrowRight size={19} aria-hidden="true" /></Link><Link to="/download" className="vx-link">Explore the collection<ArrowUpRight size={18} aria-hidden="true" /></Link></div><div className="vx-close-wordmark" aria-hidden="true">OBSIDIAN RIDGE LABS</div></section>
  </div>;
}
