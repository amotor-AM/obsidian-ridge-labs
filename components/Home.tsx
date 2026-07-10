import React from 'react';
import Hero from './Hero';
import Philosophy from './Philosophy';
import Products from './Products';
import Services from './Services';
import SEO, { buildBreadcrumbs, SITE_URL } from './SEO';
import { products } from '../data/products';

const Home: React.FC = () => {
  const breadcrumbs = buildBreadcrumbs([{ name: 'Home', url: '/' }]);

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Obsidian Ridge Labs private AI app collection',
    description: 'Private, offline-first AI applications built natively for Apple devices.',
    numberOfItems: products.length,
    itemListElement: products.map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: product.name,
      url: `${SITE_URL}/apps/${product.id}`,
      description: product.description,
    })),
  };

  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'Obsidian Ridge Labs',
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.svg`,
    description: 'Independent Apple software studio building private, offline-first AI apps whose core intelligence runs on-device.',
    slogan: 'AI should come to your data. Not the other way around.',
    knowsAbout: [
      'On-device AI',
      'Offline-first software',
      'Apple Neural Engine',
      'Private AI transcription',
      'Local-first mobile applications',
    ],
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
        jsonLd={[breadcrumbs, organization, itemList]}
      />
      <Hero />
      <Philosophy />
      <Products />
      <Services />
    </>
  );
};

export default Home;
