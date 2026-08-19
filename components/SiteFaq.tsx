import React from 'react';
import type { FAQItem } from '../data/faqs';
import { SiteAccordion } from './ui/site-accordion';

interface SiteFaqProps {
  items: FAQItem[];
  tone?: 'dark' | 'paper' | 'moss';
  className?: string;
}

const SiteFaq: React.FC<SiteFaqProps> = ({ items, tone = 'dark', className }) => (
  <SiteAccordion
    className={className}
    tone={tone}
    defaultOpen={items[0] ? ['faq-0'] : []}
    items={items.map((item, index) => ({
      id: `faq-${index}`,
      index: String(index + 1).padStart(2, '0'),
      title: item.question,
      content: <p>{item.answer}</p>,
    }))}
  />
);

export default SiteFaq;
