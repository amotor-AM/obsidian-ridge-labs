import React, { useState } from 'react';
import { KBBlock } from '../../types';
import { Icon } from '../../lib/icons';

/* Renders the KBBlock union in the Obsidian Ridge "cyberpunk" style.
   KB prose uses the display face (Rajdhani) for readability while small
   labels stay in the mono face, matching the rest of the site. */

const CALLOUT: Record<string, { ring: string; label: string; icon: string }> = {
  info: { ring: 'border-neon/30 bg-neon/[0.05]', label: 'text-neon', icon: 'info' },
  tip: { ring: 'border-emerald-400/30 bg-emerald-400/[0.05]', label: 'text-emerald-400', icon: 'lightbulb' },
  warning: { ring: 'border-amber-400/30 bg-amber-400/[0.06]', label: 'text-amber-400', icon: 'shield-alert' },
  privacy: { ring: 'border-purple-400/30 bg-purple-400/[0.05]', label: 'text-purple-400', icon: 'lock' },
};

const FaqItem: React.FC<{ q: string; a: string }> = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-white/10 bg-white/[0.02]">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="w-full flex justify-between items-center gap-4 p-4 md:p-5 text-left group"
      >
        <span className="text-white font-display font-semibold text-base group-hover:text-neon transition-colors">{q}</span>
        <Icon name="chevron-down" size={18} className={`text-neon flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <div className="px-4 md:px-5 pb-5 -mt-1 text-gray-400 font-display leading-relaxed">{a}</div>}
    </div>
  );
};

const Block: React.FC<{ block: KBBlock }> = ({ block }) => {
  switch (block.type) {
    case 'paragraph':
      return <p className="text-gray-300 font-display text-[15px] md:text-[17px] leading-relaxed">{block.content}</p>;

    case 'heading':
      return block.level === 2 ? (
        <h2 className="text-white font-display font-bold text-2xl md:text-3xl tracking-tight mt-10 mb-1">{block.content}</h2>
      ) : (
        <h3 className="text-white font-display font-bold text-lg md:text-xl tracking-tight mt-6 mb-1">{block.content}</h3>
      );

    case 'list':
      return (
        <ul className="space-y-2.5 my-1">
          {block.items.map((it, i) => (
            <li key={i} className="flex gap-3 text-gray-300 font-display text-[15px] md:text-[17px] leading-relaxed">
              <Icon name={block.ordered ? 'chevron-right' : 'check'} size={16} className="text-neon mt-1.5 flex-shrink-0" />
              <span>{it}</span>
            </li>
          ))}
        </ul>
      );

    case 'steps':
      return (
        <ol className="space-y-5 my-2">
          {block.items.map((s, i) => (
            <li key={i} id={`step-${i + 1}`} className="flex gap-4 md:gap-5 scroll-mt-28">
              <span className="flex-shrink-0 w-9 h-9 rounded-full border border-neon/40 bg-neon/10 text-neon font-display font-bold flex items-center justify-center">
                {i + 1}
              </span>
              <div className="pt-1">
                <h4 className="text-white font-display font-bold text-lg mb-1 tracking-tight">{s.title}</h4>
                <p className="text-gray-400 font-display text-[15px] md:text-base leading-relaxed">{s.description}</p>
              </div>
            </li>
          ))}
        </ol>
      );

    case 'callout': {
      const st = CALLOUT[block.variant] || CALLOUT.info;
      return (
        <div className={`my-2 border ${st.ring} p-5 flex gap-4`}>
          <Icon name={st.icon} size={20} className={`${st.label} flex-shrink-0 mt-0.5`} />
          <div>
            {block.title && <div className={`font-display font-bold mb-1 ${st.label}`}>{block.title}</div>}
            <p className="text-gray-300 font-display text-[15px] leading-relaxed">{block.content}</p>
          </div>
        </div>
      );
    }

    case 'faq':
      return (
        <div className="space-y-3 my-2">
          {block.items.map((f, i) => (
            <FaqItem key={i} q={f.q} a={f.a} />
          ))}
        </div>
      );

    case 'image':
      return (
        <figure className="my-4">
          <img src={block.src} alt={block.alt} loading="lazy" className="w-full rounded-lg border border-white/10" />
          {block.caption && (
            <figcaption className="text-gray-500 text-xs font-mono uppercase tracking-wider mt-2 text-center">{block.caption}</figcaption>
          )}
        </figure>
      );

    default:
      return null;
  }
};

export const KbBlocks: React.FC<{ blocks: KBBlock[] }> = ({ blocks }) => (
  <div className="space-y-4">
    {blocks.map((b, i) => (
      <Block key={i} block={b} />
    ))}
  </div>
);

export default KbBlocks;
