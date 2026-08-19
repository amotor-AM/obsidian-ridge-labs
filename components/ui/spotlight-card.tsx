import React, { useRef, useState } from 'react';
import { cn } from '../../lib/cn';

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}

/**
 * Cursor-following spotlight surface, adapted from 21st.dev
 * @preetsuthar17/spotlight-card for the Obsidian Ridge ledger and cards.
 */
export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = '',
  spotlightColor = 'rgba(244, 241, 232, 0.08)',
}) => {
  const surfaceRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!surfaceRef.current || isFocused) return;
    const rect = surfaceRef.current.getBoundingClientRect();
    setPosition({ x: event.clientX - rect.left, y: event.clientY - rect.top });
  };

  return (
    <div
      ref={surfaceRef}
      className={cn('spotlight-card', className)}
      onMouseMove={handleMouseMove}
      onFocus={() => {
        setIsFocused(true);
        setOpacity(0.72);
      }}
      onBlur={() => {
        setIsFocused(false);
        setOpacity(0);
      }}
      onMouseEnter={() => setOpacity(0.72)}
      onMouseLeave={() => setOpacity(0)}
    >
      <div
        className="spotlight-card__beam"
        aria-hidden="true"
        style={{
          opacity,
          background: `radial-gradient(420px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 70%)`,
        }}
      />
      {children}
    </div>
  );
};
