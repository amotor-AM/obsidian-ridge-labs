import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from './SEO';
import '../styles/help-refinement.css';

const NotFound: React.FC = () => (
  <section className="not-found not-found--refined" aria-labelledby="not-found-title">
    <SEO
      title="Page Not Found"
      description="This page is missing. Return to the Obsidian Ridge Labs home page."
      noindex
    />
    <div className="not-found__contours" aria-hidden="true"><span /><span /><span /><span /></div>
    <div className="section-frame">
      <p className="section-kicker">404</p>
      <h1 id="not-found-title">This page <em>is missing.</em></h1>
      <p>The address may have changed.</p>
      <Link to="/" className="button button--primary"><ArrowLeft size={17} /> Return home</Link>
    </div>
  </section>
);

export default NotFound;
