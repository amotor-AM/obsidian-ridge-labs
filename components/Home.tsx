import React from 'react';
import Hero from './Hero';
import Philosophy from './Philosophy';
import Products from './Products';
import Services from './Services';
import SEO, { buildFAQSchema, SITE_URL } from './SEO';
import { products } from '../data/products';
import { homeFaqs } from '../data/faqs';

const Home: React.FC = () => {
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Obsidian Ridge Labs private AI app collection',
    description: 'Private, offline-first AI applications built natively for Apple devices.',
    numberOfItems: products.length,
    itemListElement: products.map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'SoftwareApplication',
        '@id': `${SITE_URL}/apps/${product.id}#software`,
        name: product.name,
        url: `${SITE_URL}/apps/${product.id}`,
        description: product.description,
      },
    })),
  };

  return (
    <>
      <SEO
        title="Private AI Apps for Apple"
        description="Private, offline-first AI apps for iPhone, iPad, and Mac. On-device transcription, finance intelligence, focus tools, and more."
        canonical={`${SITE_URL}/`}
        ogImage={`${SITE_URL}/og.png`}
        ogImageAlt="Obsidian Ridge Labs — private AI apps built for Apple devices"
        keywords={[
          'private AI apps',
          'on-device AI for Apple',
          'offline AI apps',
          'private transcription app',
          'Apple Neural Engine apps',
        ]}
        jsonLd={[itemList, buildFAQSchema(homeFaqs)]}
      />
      <Hero />
      <Philosophy />
      <Products />
      <Services />
    </>
  );
};

export default Home;
