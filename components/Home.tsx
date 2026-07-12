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
        creativeWorkStatus: product.appStoreUrl ? 'Released' : 'In development',
      },
    })),
  };

  return (
    <>
      <SEO
        title="Private AI Apps for Apple"
        description="Obsidian Ridge Labs builds private, on-device AI apps for iPhone, iPad, and Mac, including Echo Chamber transcription and a growing collection of local-first tools."
        canonical={`${SITE_URL}/`}
        ogImage={`${SITE_URL}/og-v2.png`}
        ogImageAlt="Obsidian Ridge Labs: Pure privacy. Intelligence on your terms."
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
