import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { getProductReleaseLabel, products } from '../data/products';
import { collection as orderedProducts, isReleased } from '../data/collection';
import Brand from './Brand';

const APP_MENU_CLOSE_DELAY_MS = 220;
const productStatus = (product: (typeof products)[number]) => {
  const label = getProductReleaseLabel(product);
  return label === 'Available on the App Store' ? 'Available' : label;
};

const productName = (name: string) => name.toLowerCase().replace(/\b\w/g, letter => letter.toUpperCase());

const Navigation: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [appsOpen, setAppsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const openButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const appsContainerRef = useRef<HTMLDivElement>(null);
  const appsButtonRef = useRef<HTMLButtonElement>(null);
  const appsMenuRef = useRef<HTMLDivElement>(null);
  const appsCloseTimerRef = useRef<number | null>(null);
  const focusFirstAppRef = useRef(false);
  const appsOpenedByHoverRef = useRef(false);
  const appsPointerTypeRef = useRef<string | null>(null);
  const location = useLocation();

  const cancelAppsClose = () => {
    if (appsCloseTimerRef.current === null) return;
    window.clearTimeout(appsCloseTimerRef.current);
    appsCloseTimerRef.current = null;
  };

  const closeApps = (restoreFocus = false) => {
    cancelAppsClose();
    focusFirstAppRef.current = false;
    appsOpenedByHoverRef.current = false;
    appsPointerTypeRef.current = null;
    setAppsOpen(false);

    if (restoreFocus) {
      window.requestAnimationFrame(() => {
        if (appsButtonRef.current?.offsetParent !== null) {
          appsButtonRef.current?.focus({ preventScroll: true });
        }
      });
    }
  };

  const openApps = () => {
    cancelAppsClose();
    if (!appsOpen) appsOpenedByHoverRef.current = true;
    setAppsOpen(true);
  };

  const scheduleAppsClose = () => {
    cancelAppsClose();
    appsCloseTimerRef.current = window.setTimeout(() => {
      appsCloseTimerRef.current = null;
      if (!appsContainerRef.current?.contains(document.activeElement)) {
        appsOpenedByHoverRef.current = false;
        setAppsOpen(false);
      }
    }, APP_MENU_CLOSE_DELAY_MS);
  };

  useEffect(() => {
    let frame = 0;
    let previousY = Math.max(0, window.scrollY);
    let direction = 0;
    let travel = 0;
    const update = () => {
      frame = 0;
      // Clamp Safari's elastic overscroll so a bounce cannot hide the header.
      const y = Math.max(0, Math.min(window.scrollY, document.documentElement.scrollHeight - window.innerHeight));
      const delta = y - previousY;
      const nextDirection = Math.sign(delta);
      if (nextDirection && nextDirection !== direction) travel = 0;
      if (nextDirection) direction = nextDirection;
      travel += Math.abs(delta);
      previousY = y;
      setScrolled(y > 24);
      if (y < 96) setHidden(false);
      else if (travel > 12) setHidden(direction > 0);
    };
    const onScroll = () => { if (!frame) frame = window.requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { window.removeEventListener('scroll', onScroll); window.cancelAnimationFrame(frame); };
  }, []);

  useEffect(() => {
    cancelAppsClose();
    focusFirstAppRef.current = false;
    appsOpenedByHoverRef.current = false;
    appsPointerTypeRef.current = null;
    setMenuOpen(false);
    setAppsOpen(false);
    setHidden(false);
  }, [location.pathname]);

  useEffect(() => () => cancelAppsClose(), []);

  useEffect(() => {
    if (!appsOpen || !focusFirstAppRef.current) return;
    focusFirstAppRef.current = false;
    const frame = window.requestAnimationFrame(() => {
      appsMenuRef.current?.querySelector<HTMLAnchorElement>('a[href]')?.focus();
    });
    return () => window.cancelAnimationFrame(frame);
  }, [appsOpen]);

  useEffect(() => {
    if (!appsOpen) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!appsContainerRef.current?.contains(event.target as Node)) closeApps();
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      event.preventDefault();
      closeApps(true);
    };

    document.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [appsOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.dispatchEvent(new CustomEvent('orl:menu', { detail: { open: true } }));
    closeButtonRef.current?.focus({ preventScroll: true });
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
      window.dispatchEvent(new CustomEvent('orl:menu', { detail: { open: false } }));
      window.removeEventListener('keydown', onKeyDown);
      openButtonRef.current?.focus({ preventScroll: true });
    };
  }, [menuOpen]);

  return (
    <>
      <nav className={`site-nav site-chrome ${scrolled ? 'site-nav--scrolled' : ''} ${hidden && !menuOpen ? 'site-nav--hidden' : ''}`} aria-label="Primary navigation">
        <div className="site-nav__inner">
          <Link to="/" className="site-wordmark" aria-label="Obsidian Ridge Labs home">
            <Brand />
          </Link>

          <div className="site-nav__desktop">
            <div
              ref={appsContainerRef}
              className="site-nav__apps"
              onPointerEnter={(event) => {
                if (event.pointerType === 'mouse') openApps();
              }}
              onPointerLeave={(event) => {
                if (event.pointerType === 'mouse') scheduleAppsClose();
              }}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget as Node | null)) closeApps();
              }}
            >
              <Link to="/download" aria-current={location.pathname === '/download' ? 'page' : undefined}>
                The collection
              </Link>
              <button
                ref={appsButtonRef}
                id="desktop-apps-trigger"
                type="button"
                onPointerDown={(event) => { appsPointerTypeRef.current = event.pointerType; }}
                onClick={(event) => {
                  cancelAppsClose();
                  focusFirstAppRef.current = false;
                  // Entering with a mouse already opens the menu before this click.
                  const confirmHover = event.detail > 0 && appsPointerTypeRef.current === 'mouse' && appsOpenedByHoverRef.current;
                  appsOpenedByHoverRef.current = false;
                  appsPointerTypeRef.current = null;
                  setAppsOpen((open) => confirmHover || !open);
                }}
                onKeyDown={(event) => {
                  if (event.key !== 'ArrowDown') return;
                  event.preventDefault();
                  cancelAppsClose();
                  appsOpenedByHoverRef.current = false;
                  if (appsOpen) {
                    appsMenuRef.current?.querySelector<HTMLAnchorElement>('a[href]')?.focus();
                  } else {
                    focusFirstAppRef.current = true;
                    setAppsOpen(true);
                  }
                }}
                aria-expanded={appsOpen}
                aria-controls="desktop-app-menu"
                aria-label="Browse applications"
                className="site-nav__apps-toggle"
              >
                <ChevronDown size={13} className={appsOpen ? 'rotate-180' : ''} aria-hidden="true" />
              </button>
              {appsOpen && (
                <div
                    ref={appsMenuRef}
                    id="desktop-app-menu"
                    className="app-menu"
                    role="group"
                    aria-labelledby="desktop-apps-trigger"
                    data-lenis-prevent
                    onPointerEnter={(event) => {
                      if (event.pointerType === 'mouse') cancelAppsClose();
                    }}
                  >
                    <div className="app-menu__head"><span>The collection</span><span>Local by design.</span></div>
                    {orderedProducts.map((product, index) => (
                      <React.Fragment key={product.id}>
                      {!isReleased(product) && (index === 0 || isReleased(orderedProducts[index - 1])) && <div className="app-menu__divider">In development</div>}
                      <Link
                        to={`/apps/${product.id}`}
                        onClick={() => closeApps()}
                        aria-current={location.pathname === `/apps/${product.id}` ? 'page' : undefined}
                      >
                        <span className="app-menu__icon" aria-hidden="true"><product.icon size={17} strokeWidth={1.6} /></span>
                        <div><strong>{productName(product.name)}</strong><small>{product.category}</small></div>
                        <i className={product.appStoreUrl ? 'is-live' : ''}>{productStatus(product)}</i>
                      </Link>
                      </React.Fragment>
                    ))}
                </div>
              )}
            </div>
            <Link to="/philosophy" aria-current={location.pathname === '/philosophy' ? 'page' : undefined}>The standard</Link>
            <Link to="/journal" aria-current={location.pathname.startsWith('/journal') ? 'page' : undefined}>Journal</Link>
          </div>

          <div className="site-nav__actions">
              <Link
                to="/download"
                className="site-nav__cta"
              >
                Explore apps <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
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

        {menuOpen && (
          <div
            ref={menuRef}
            id="mobile-menu"
            className="mobile-menu site-chrome"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            data-lenis-prevent
          >
            <div className="mobile-menu__top">
              <Link to="/" className="site-wordmark" onClick={() => setMenuOpen(false)} aria-label="Obsidian Ridge Labs home">
                <Brand />
              </Link>
              <button ref={closeButtonRef} type="button" onClick={() => setMenuOpen(false)} aria-label="Close menu"><X /></button>
            </div>

            <div className="mobile-menu__body">
              <nav aria-label="Mobile navigation">
                <Link to="/download" onClick={() => setMenuOpen(false)}>The collection <ArrowRight aria-hidden="true" /></Link>
                <Link to="/philosophy" onClick={() => setMenuOpen(false)}>The standard <ArrowRight aria-hidden="true" /></Link>
                <Link to="/journal" onClick={() => setMenuOpen(false)}>Journal <ArrowRight aria-hidden="true" /></Link>
                <Link to="/help" onClick={() => setMenuOpen(false)}>Help <ArrowRight aria-hidden="true" /></Link>
              </nav>
              <div className="mobile-menu__apps">
                <p>Our apps</p>
                {orderedProducts.map((product) => (
                  <Link key={product.id} to={`/apps/${product.id}`} onClick={() => setMenuOpen(false)}>
                    <span aria-hidden="true"><product.icon size={16} strokeWidth={1.6} /></span>
                    {productName(product.name)}
                    <small>{productStatus(product)}</small>
                  </Link>
                ))}
              </div>
            </div>

            <div className="mobile-menu__footer">
              <span>Local by design</span>
              <a href="mailto:support@obsidianridgelabs.com">support@obsidianridgelabs.com</a>
            </div>
          </div>
        )}
    </>
  );
};

export default Navigation;
