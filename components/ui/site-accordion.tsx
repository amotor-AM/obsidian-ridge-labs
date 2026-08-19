import React, { useCallback, useId, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { cn } from '../../lib/cn';

export type SiteAccordionItem = {
  id: string;
  index?: string;
  title: React.ReactNode;
  content: React.ReactNode;
};

interface SiteAccordionProps {
  items: readonly SiteAccordionItem[];
  defaultOpen?: readonly string[];
  className?: string;
  tone?: 'dark' | 'paper' | 'moss';
}

/**
 * Accessible spring accordion, adapted from 21st.dev @ddoemonn/accordion
 * and restyled as an Obsidian Ridge ledger instead of a card stack.
 */
export const SiteAccordion: React.FC<SiteAccordionProps> = ({
  items,
  defaultOpen = [],
  className,
  tone = 'dark',
}) => {
  const baseId = useId();
  const reducedMotion = useReducedMotion();
  const [openId, setOpenId] = useState<string | null>(defaultOpen[0] ?? items[0]?.id ?? null);
  const headers = useRef(new Map<string, HTMLButtonElement>());

  const order = useMemo(() => items.map((item) => item.id), [items]);

  const bindHeader = useCallback((id: string) => (node: HTMLButtonElement | null) => {
    if (node) headers.current.set(id, node);
    else headers.current.delete(id);
  }, []);

  const move = useCallback((id: string, delta: number, edge: 'first' | 'last' | null) => {
    if (!order.length) return;
    const at = order.indexOf(id);
    if (at < 0) return;
    const next = edge === 'first'
      ? 0
      : edge === 'last'
        ? order.length - 1
        : (at + delta + order.length) % order.length;
    headers.current.get(order[next])?.focus();
  }, [order]);

  return (
    <div className={cn('site-accordion', `site-accordion--${tone}`, className)}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        const headerId = `${baseId}-header-${item.id}`;
        const panelId = `${baseId}-panel-${item.id}`;

        return (
          <div key={item.id} className="site-accordion__item">
            <h3 className="site-accordion__heading">
              <button
                ref={bindHeader(item.id)}
                id={headerId}
                type="button"
                className="site-accordion__trigger"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenId((current) => (current === item.id ? null : item.id))}
                onKeyDown={(event) => {
                  if (event.key === 'ArrowDown') {
                    event.preventDefault();
                    move(item.id, 1, null);
                  } else if (event.key === 'ArrowUp') {
                    event.preventDefault();
                    move(item.id, -1, null);
                  } else if (event.key === 'Home') {
                    event.preventDefault();
                    move(item.id, 0, 'first');
                  } else if (event.key === 'End') {
                    event.preventDefault();
                    move(item.id, 0, 'last');
                  }
                }}
              >
                {item.index ? <span>{item.index}</span> : null}
                <strong>{item.title}</strong>
                <i aria-hidden="true" className={isOpen ? 'is-open' : ''} />
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={headerId}
                  className="site-accordion__panel"
                  initial={reducedMotion ? false : { height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={reducedMotion ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: reducedMotion ? 0 : 0.34, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="site-accordion__content">{item.content}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
