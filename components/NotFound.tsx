import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from './SEO';

const NotFound: React.FC = () => (
  <section className="not-found" aria-labelledby="not-found-title">
    <SEO
      title="Page Not Found"
      description="The requested page could not be found. Return to Obsidian Ridge Labs to explore private AI apps for Apple devices."
      noindex
    />
    <div className="not-found__contours" aria-hidden="true"><span /><span /><span /><span /></div>
    <div className="section-frame">
      <p className="section-kicker">Signal lost / 404</p>
      <h1 id="not-found-title">This path ends<br /><em>at the ridge.</em></h1>
      <p>The page may have moved, but your route home is still local.</p>
      <Link to="/" className="button button--primary"><ArrowLeft size={17} /> Return home</Link>
    </div>
  </section>
);

export default NotFound;
