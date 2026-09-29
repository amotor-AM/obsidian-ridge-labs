import React from 'react';
import LuminousHome from './luminous/LuminousHome';
import SEO, { buildFAQSchema, SITE_URL } from './SEO';
import { collection, collectionDescription } from '../data/collection';
import { homeFaqs } from '../data/faqs';

const Home: React.FC = () => {
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'The Obsidian Ridge Labs collection',
    description: collectionDescription,
    numberOfItems: collection.length,
    itemListElement: collection.map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'SoftwareApplication',
        '@id': `${SITE_URL}/apps/${product.id}#software`,
        name: product.name,
        url: `${SITE_URL}/apps/${product.id}`,
        description: product.description,
        creativeWorkStatus: product.releaseStatus === 'app-store' ? 'Released' : 'In development',
      },
    })),
  };

  return (
    <>
      <SEO
        title="Private AI Apps for Apple"
        description={collectionDescription}
        canonical={`${SITE_URL}/`}
        ogImage={`${SITE_URL}/og-v2.png`}
        ogImageAlt="Obsidian Ridge Labs: AI that knows you. Not one that watches you."
        keywords={[
          'private AI apps',
          'on-device AI for Apple',
          'offline AI apps',
          'private transcription app',
          'local-first iPhone apps',
          'AI apps that work offline',
          'Apple Neural Engine apps',
        ]}
        jsonLd={[itemList, buildFAQSchema(homeFaqs, '/')]}
      />
      <LuminousHome />
    </>
  );
};

export default Home;
