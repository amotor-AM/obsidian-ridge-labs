import React from 'react';
import { cn } from '../../lib/cn';

interface TextMarqueeProps {
  items: string[];
  label?: string;
  className?: string;
  durationSeconds?: number;
}

/**
 * Infinite editorial ticker, adapted from 21st.dev @7ovr/logo-cloud-3.
 * Duplicates the list for a seamless loop and pauses on hover.
 */
export const TextMarquee: React.FC<TextMarqueeProps> = ({
  items,
  label,
  className,
  durationSeconds = 42,
}) => {
  const sequence = [...items, ...items];

  return (
    <div className={cn('text-marquee', className)} aria-label={label}>
      <div
        className="text-marquee__track"
        style={{ animationDuration: `${durationSeconds}s` }}
      >
        {sequence.map((item, index) => (
          <span key={`${item}-${index}`} className="text-marquee__item">
            {item}
            <i aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  );
};
