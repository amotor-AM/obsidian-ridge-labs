import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useScroll } from 'framer-motion';
import { ArrowRight, ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { products } from '../data/products';

const Navigation: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [appsOpen, setAppsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const openButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setAppsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
      if (event.key === 'Tab' && menuRef.current) {
        const candidates = Array.from(
          menuRef.current.querySelectorAll('a[href], button:not([disabled])'),
        ) as HTMLElement[];
        const focusable = candidates.filter((element) => element.offsetParent !== null);
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
      openButtonRef.current?.focus({ preventScroll: true });
    };
  }, [menuOpen]);

  const goToSection = (sectionId: string) => {
    setMenuOpen(false);
    setAppsOpen(false);
    if (location.pathname === '/') {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    navigate(`/#${sectionId}`);
    window.setTimeout(() => document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' }), 100);
  };

  return (
    <>
      <motion.div className="site-progress" style={{ scaleX: scrollYProgress }} aria-hidden="true" />
      <nav className={`site-nav site-chrome ${scrolled ? 'site-nav--scrolled' : ''}`} aria-label="Primary navigation">
        <div className="site-nav__inner">
          <Link to="/" className="site-wordmark" aria-label="Obsidian Ridge Labs home">
            <span className="site-wordmark__mark" aria-hidden="true"><i /><i /><i /></span>
            <span>Obsidian Ridge <b>Labs</b></span>
          </Link>

          <div className="site-nav__desktop">
            <div className="site-nav__apps" onMouseLeave={() => setAppsOpen(false)}>
              <button
                type="button"
                onClick={() => setAppsOpen((open) => !open)}
                onMouseEnter={() => setAppsOpen(true)}
                aria-expanded={appsOpen}
                aria-controls="desktop-app-menu"
              >
                Apps <ChevronDown size={13} className={appsOpen ? 'rotate-180' : ''} />
              </button>
              <AnimatePresence>
                {appsOpen && (
                  <motion.div
                    id="desktop-app-menu"
                    className="app-menu"
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="app-menu__head"><span>The collection</span><span>Apple platforms</span></div>
                    {products.map((product, index) => (
                      <Link key={product.id} to={`/apps/${product.id}`}>
                        <span>0{index + 1}</span>
                        <div><strong>{product.name}</strong><small>{product.category}</small></div>
                        <i className={product.status === 'live' ? 'is-live' : ''}>{product.status === 'live' ? 'Available' : 'In the lab'}</i>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <button type="button" onClick={() => goToSection('architecture')}>Why local</button>
            <Link to="/blog" aria-current={location.pathname.startsWith('/blog') ? 'page' : undefined}>Journal</Link>
            <Link to="/help" aria-current={location.pathname.startsWith('/help') ? 'page' : undefined}>Help</Link>
          </div>

          <div className="site-nav__actions">
            <a
              href="https://apps.apple.com/us/app/echo-chamber-ai-transcription/id6761675060"
              target="_blank"
              rel="noreferrer"
              className="site-nav__cta"
            >
              Get Echo Chamber <ArrowUpRight size={14} aria-hidden="true" />
            </a>
            <button
              ref={openButtonRef}
              type="button"
              className="site-nav__menu-button"
              onClick={() => setMenuOpen(true)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label="Open menu"
            >
              <Menu size={21} />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={menuRef}
            id="mobile-menu"
            className="mobile-menu site-chrome"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
          >
            <div className="mobile-menu__top">
              <Link to="/" className="site-wordmark" onClick={() => setMenuOpen(false)}>
                <span className="site-wordmark__mark" aria-hidden="true"><i /><i /><i /></span>
                <span>Obsidian Ridge <b>Labs</b></span>
              </Link>
              <button ref={closeButtonRef} type="button" onClick={() => setMenuOpen(false)} aria-label="Close menu"><X /></button>
            </div>

            <div className="mobile-menu__body">
              <nav aria-label="Mobile navigation">
                <button type="button" onClick={() => goToSection('products')}><span>01</span>Apps <ArrowRight /></button>
                <button type="button" onClick={() => goToSection('architecture')}><span>02</span>Why local <ArrowRight /></button>
                <Link to="/blog"><span>03</span>Journal <ArrowRight /></Link>
                <Link to="/help"><span>04</span>Help <ArrowRight /></Link>
                <Link to="/philosophy"><span>05</span>Philosophy <ArrowRight /></Link>
              </nav>
              <div className="mobile-menu__apps">
                <p>Explore the apps</p>
                {products.map((product) => (
                  <Link key={product.id} to={`/apps/${product.id}`}>
                    <span style={{ background: product.accent }} />
                    {product.name}
                    <small>{product.status === 'live' ? 'Available' : 'In the lab'}</small>
                  </Link>
                ))}
              </div>
            </div>

            <div className="mobile-menu__footer">
              <span>Private AI for Apple devices</span>
              <a href="mailto:support@obsidianridgelabs.com">support@obsidianridgelabs.com</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
