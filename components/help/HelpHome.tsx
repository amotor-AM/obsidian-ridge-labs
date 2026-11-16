import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { knowledgeBases } from '../../data/kb';
import { getProduct } from '../../data/products';
import { collectionAvailability } from '../../data/collection';
import SEO, { buildBreadcrumbs, buildCollectionPage } from '../SEO';

const HelpHome: React.FC = () => (
  <div className="kin-page kin-help-home">
    <SEO title="Help Center"
      description={'Set up your app, manage storage and sync, or troubleshoot a problem. '+collectionAvailability+'.'}
      canonical="https://obsidianridgelabs.com/help"
      jsonLd={[
        buildBreadcrumbs([{name:'Home',url:'/'},{name:'Help',url:'/help'}]),
        buildCollectionPage('Help Center','Setup, privacy and troubleshooting guides for Obsidian Ridge Labs apps.','/help')
      ]}/>
    <header className="kin-subhero kin-help-home__hero">
      <span className="kin-eyebrow"><span className="kin-eyebrow__asterisk">✳</span>Help and support / Here for you</span>
      <span className="kin-subhero__counter">ACTUAL ANSWERS. REAL HUMANS.</span>
      <h1>A LITTLE<br /><em>HELP?</em></h1>
      <div className="kin-subhero__bottom"><p>From your first tap to the finer details. Find guides for every app, explore privacy and setup, or get a little human help.</p><Link to="/philosophy#boundary-check">THE BOUNDARY CHECK <ArrowUpRight size={17} /></Link></div>
    </header>
    <section className="kin-help-home__library" aria-labelledby="help-library-heading">
      <div className="kin-journal__library-head"><div><span className="kin-eyebrow"><span className="kin-eyebrow__asterisk">✳</span>Choose your app</span><h2 id="help-library-heading">WHERE SHOULD<br /><em>WE START?</em></h2></div><p>Every world has its own guidebook.</p></div>
      <div className="kin-help-home__grid">
        {knowledgeBases.map((kb,i)=>{const app=getProduct(kb.appId);const Icon=app?.icon;return (
          <Link to={'/help/'+kb.appId} className="kin-help-home__card" key={kb.appId}>
            <span className="kin-help-home__card-head"><span>{String(i+1).padStart(2,'0')} / GUIDEBOOK</span><ArrowUpRight size={20} aria-hidden="true" /></span>
            <div className="kin-help-home__icon">{Icon&&<Icon size={45} strokeWidth={1.25} aria-hidden="true" />}</div>
            <h3>{kb.appName}</h3><p>{kb.intro}</p>
            <span className="kin-help-home__guides">{kb.articles.length} GUIDES <span>{app?.releaseStatus==='app-store'?'AVAILABLE':'IN DEVELOPMENT'}</span></span>
          </Link>
        )})}
      </div>
    </section>
    <section className="kin-help-home__contact"><span>PERSON TO PERSON</span><h2>STILL NEED<br /><em>A HAND?</em></h2>
      <p>Tell us which app and device you're using, and what happened. A real person will reply.</p>
      <a href="mailto:support@obsidianridgelabs.com" className="kin-button kin-button--dark">Email support <ArrowUpRight size={19} aria-hidden="true"/></a>
    </section>
  </div>
);
export default HelpHome;
