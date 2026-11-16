import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { collection } from '../../data/collection';
import './chrome.css';

const Mark: React.FC = () => (
  <span className="kin-mark"><span className="kin-mark__glyph" aria-hidden="true">✳</span><span>OBSIDIAN<br/>RIDGE <i>LABS</i></span></span>
);

export const KineticNav: React.FC = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  React.useEffect(() => setOpen(false), [location.pathname]);
  React.useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);
  return (
    <header className="kin-chrome kin-header">
      <nav className="kin-nav" aria-label="Primary navigation">
        <Link to="/" aria-label="Obsidian Ridge Labs home" className="kin-nav__brand"><Mark /></Link>
        <div className="kin-nav__links">
          <Link to="/download" aria-current={location.pathname === '/download' ? 'page' : undefined}>The apps <span>11</span></Link>
          <Link to="/philosophy" aria-current={location.pathname === '/philosophy' ? 'page' : undefined}>Our philosophy</Link>
          <Link to="/journal" aria-current={location.pathname.startsWith('/journal') ? 'page' : undefined}>Journal</Link>
        </div>
        <Link className="kin-nav__explore" to="/download">Explore our world <ArrowUpRight size={17} aria-hidden="true" /></Link>
        <button type="button" className="kin-nav__toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="kin-mobile-nav" onClick={() => setOpen(v => !v)}>
          {open ? <X size={25} /> : <Menu size={25} />}
        </button>
      </nav>
      {open && <nav id="kin-mobile-nav" className="kin-mobile-nav" aria-label="Mobile navigation">
        <Link to="/download">The entire collection <ArrowUpRight /></Link>
        <Link to="/philosophy">Our philosophy <ArrowUpRight /></Link>
        <Link to="/journal">Journal <ArrowUpRight /></Link>
        <Link to="/help">Help & support <ArrowUpRight /></Link>
      </nav>}
    </header>
  );
};

export const KineticFooter: React.FC = () => (
  <footer className="kin-chrome kin-footer">
    <div className="kin-footer__main">
      <div><Link to="/" className="kin-footer__mark"><Mark /></Link><p>Small apps for a much bigger life.</p><a href="mailto:support@obsidianridgelabs.com">Say hello <ArrowUpRight size={16} aria-hidden="true" /></a></div>
      <nav aria-label="Apps"><h2>THE LITTLE WORLDS</h2>{collection.map(app => <Link to={'/apps/' + app.id} key={app.id}>{app.name}</Link>)}</nav>
      <nav aria-label="Studio"><h2>THE STUDIO</h2><Link to="/philosophy">What we believe</Link><Link to="/journal">Journal</Link><Link to="/help">Help center</Link><Link to="/privacy">Privacy</Link><Link to="/terms">Terms</Link><a href="mailto:support@obsidianridgelabs.com">Contact</a></nav>
    </div>
    <div className="kin-footer__bottom"><span>© {new Date().getFullYear()} OBSIDIAN RIDGE LABS</span><span>MADE WITH INTENTION IN Las Vegas, Nevada</span><span>INDEPENDENT BY DESIGN ✳</span></div>
  </footer>
);
