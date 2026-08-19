import React, { useEffect, useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '../../lib/cn';

interface VerticalCutRevealProps {
  children: string;
  as?: 'span' | 'em' | 'h1' | 'h2' | 'p';
  splitBy?: 'words' | 'characters';
  staggerDuration?: number;
  delay?: number;
  className?: string;
}

/**
 * Line-cut text reveal, adapted from 21st.dev @danielpetho/vertical-cut-reveal.
 * Renders static text for SSR and reduced motion, then cuts in after hydration.
 */
export const VerticalCutReveal: React.FC<VerticalCutRevealProps> = ({
  children,
  as: Tag = 'span',
  splitBy = 'words',
  staggerDuration = 0.045,
  delay = 0,
  className,
}) => {
  const reducedMotion = useReducedMotion();
  const [ready, setReady] = useState(false);
  const pieces = useMemo(
    () => (splitBy === 'characters' ? Array.from(children) : children.split(' ')),
    [children, splitBy],
  );

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setReady(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  if (reducedMotion || !ready) {
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Tag className={cn('cut-reveal', className)} aria-label={children}>
      {pieces.map((piece, index) => (
        <span key={`${piece}-${index}`} className="cut-reveal__word" aria-hidden="true">
          <motion.span
            className="cut-reveal__inner"
            initial={{ y: '110%' }}
            animate={{ y: '0%' }}
            transition={{
              duration: 0.72,
              delay: delay + index * staggerDuration,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {piece}
            {splitBy === 'words' && index < pieces.length - 1 ? '\u00A0' : ''}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
};
