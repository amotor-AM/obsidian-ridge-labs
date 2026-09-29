import React from 'react';
import { ArrowRight, ArrowUpRight, Plane } from 'lucide-react';
import { Link } from 'react-router-dom';
import { homeFaqs } from '../data/faqs';
import SiteFaq from './SiteFaq';

const boundaryCheck = [
  ['Where does the processing happen?', 'On supported Apple devices. Our apps use local models and Apple frameworks for their core intelligence. Each product page lists the hardware it needs.'],
  ['Where does the storage live?', 'On your device, with private iCloud storage or sync in apps that offer it. The settings and defaults differ by app. We do not keep a central library of your recordings, journals, or notes.'],
  ['What connects to the network, and when?', 'Model setup and App Store purchases can need a connection. Other services depend on the app: iCloud sync, recipe imports, weather, or optional bank sync through Plaid. Each app’s boundary lists them.'],
];

const Services: React.FC = () => (
  <>
    <section id="architecture" className="home-boundary" aria-labelledby="architecture-title">
      <div className="section-frame">
        <div className="section-index"><span>03 / Before you let it in</span><span>The Boundary Check</span></div>
        <div className="home-boundary__layout">
          <div className="home-boundary__intro">
            <p className="section-kicker">Run the Boundary Check.</p>
            <h2 id="architecture-title">“Private”<br />is the start<br /><em>of a question.</em></h2>
            <p>Before an app gets your recordings, receipts, or journal, make it answer these three.</p>
            <Link to="/privacy" className="text-link">Read our privacy model <ArrowUpRight size={17} aria-hidden="true" /></Link>
          </div>
          <div className="home-boundary__answers">
            {boundaryCheck.map(([question, answer], index) => (
              <div key={question}><span>{String(index + 1).padStart(2, '0')}</span><div><h3>{question}</h3><p>{answer}</p></div></div>
            ))}
            <p className="home-boundary__invitation">Run it on us. Then run it on everything else.</p>
          </div>
        </div>
      </div>
    </section>
    <section className="home-craft" aria-labelledby="apple-craft-title">
      <div className="section-frame home-craft__layout">
        <p className="section-kicker section-kicker--dark">Why Apple</p>
        <div><h2 id="apple-craft-title">You already own<br /><em>the computer.</em></h2></div>
        <div><p>Apple silicon puts the CPU, GPU, and Neural Engine in the device holding your words. We build for that hardware, using native frameworks to do the work there.</p><p>Microphone permissions, local models, the files you keep: we work with the operating system to keep those decisions in your hands.</p><Link to="/journal/apple-ecosystem-privacy" className="text-link text-link--dark">Why we chose one platform <ArrowUpRight size={17} aria-hidden="true" /></Link></div>
      </div>
    </section>
    <section className="home-test" aria-labelledby="verification-title">
      <div className="section-frame home-test__layout">
        <div className="home-test__switch" aria-hidden="true"><Plane size={34} strokeWidth={1.5} /><span>Airplane mode</span><i /></div>
        <div className="home-test__copy"><p className="section-kicker">Try it with Echo Chamber</p><h2 id="verification-title">Turn on airplane mode.<br /><em>Whatever still works is yours.</em></h2><p>Finish model setup on a supported device. Turn off Wi-Fi and cellular data. Record a thought, read the transcript, search for a word. The work still happens in your hand.</p><div className="home-test__links"><Link className="text-link" to="/help/echochamber">Open the Echo Chamber guide <ArrowUpRight size={17} aria-hidden="true" /></Link><a className="text-link" href="https://github.com/amotor-AM/obsidian-ridge-labs" target="_blank" rel="noreferrer">Website source <ArrowUpRight size={17} aria-hidden="true" /></a></div></div>
      </div>
    </section>
    <section className="home-faq home-faq--edited" aria-labelledby="home-faq-title">
      <div className="section-frame home-faq__grid">
        <div><p className="section-kicker section-kicker--dark">Before you download</p><h2 id="home-faq-title">A few practical things.</h2></div>
        <SiteFaq items={homeFaqs} tone="paper" />
      </div>
    </section>
    <section className="home-close" aria-labelledby="final-cta-title">
      <div className="section-frame">
        <span className="home-close__cut" aria-hidden="true">/</span>
        <p className="section-kicker">Local by design.</p>
        <h2 id="final-cta-title">Find the app for<br /><em>what comes next.</em></h2>
        <div><Link to="/apps/echochamber" className="button button--primary">Start with Echo Chamber <ArrowRight size={18} aria-hidden="true" /></Link><Link to="/download" className="text-link">See the collection <ArrowUpRight size={18} aria-hidden="true" /></Link></div>
      </div>
    </section>
  </>
);

export default Services;
