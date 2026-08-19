import React from 'react';
import { KBBlock } from '../../types';
import { Icon } from '../../lib/icons';
import SiteFaq from '../SiteFaq';

const CALLOUT: Record<string, { label: string; icon: string }> = {
  info: { label: 'Note', icon: 'info' },
  tip: { label: 'Tip', icon: 'lightbulb' },
  warning: { label: 'Warning', icon: 'shield-alert' },
  privacy: { label: 'Privacy', icon: 'lock' },
};

const Block: React.FC<{ block: KBBlock }> = ({ block }) => {
  switch (block.type) {
    case 'paragraph':
      return <p>{block.content}</p>;

    case 'heading':
      return block.level === 2 ? <h2>{block.content}</h2> : <h3>{block.content}</h3>;

    case 'list':
      return (
        <ul className={block.ordered ? 'help-prose__steps' : 'help-prose__list'}>
          {block.items.map((item, index) => (
            <li key={index}>
              <Icon name={block.ordered ? 'chevron-right' : 'check'} size={16} aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );

    case 'steps':
      return (
        <ol className="help-prose__numbered">
          {block.items.map((step, index) => (
            <li key={index} id={`step-${index + 1}`}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      );

    case 'callout': {
      const style = CALLOUT[block.variant] || CALLOUT.info;
      return (
        <aside className={`help-callout help-callout--${block.variant}`}>
          <Icon name={style.icon} size={18} aria-hidden="true" />
          <div>
            {block.title ? <strong>{block.title}</strong> : <strong>{style.label}</strong>}
            <p>{block.content}</p>
          </div>
        </aside>
      );
    }

    case 'faq':
      return (
        <SiteFaq
          tone="dark"
          items={block.items.map((item) => ({ question: item.q, answer: item.a }))}
        />
      );

    case 'image':
      return (
        <figure className="help-prose__figure">
          <img src={block.src} alt={block.alt} loading="lazy" />
          {block.caption && <figcaption>{block.caption}</figcaption>}
        </figure>
      );

    default:
      return null;
  }
};

export const KbBlocks: React.FC<{ blocks: KBBlock[] }> = ({ blocks }) => (
  <div className="help-prose">
    {blocks.map((block, index) => (
      <Block key={index} block={block} />
    ))}
  </div>
);

export default KbBlocks;
