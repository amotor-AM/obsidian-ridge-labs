import React from 'react';
import SEO, { buildFAQSchema, SITE_URL } from './SEO';
import { collection, collectionDescription } from '../data/collection';
import { homeFaqs } from '../data/faqs';
import { WorldHome } from './kinetic/World';

const Home: React.FC = () => {
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'The complete Obsidian Ridge Labs app collection',
    description: collectionDescription,
    numberOfItems: collection.length,
    itemListElement: collection.map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'SoftwareApplication',
        '@id': SITE_URL + '/apps/' + product.id + '#software',
        name: product.name,
        url: SITE_URL + '/apps/' + product.id,
        description: product.description,
        creativeWorkStatus: product.releaseStatus === 'app-store' ? 'Released' : 'In development',
      }
    }))
  };
  return <>
    <SEO title="Personal AI Apps, Beautifully Private" description={collectionDescription} canonical={SITE_URL + '/'}
      ogImage={SITE_URL + '/og-v2.png'} ogImageAlt="Obsidian Ridge Labs — apps for a life that belongs to you."
      keywords={['private AI apps', 'on-device AI for Apple', 'offline AI apps', 'local-first apps', 'iPhone AI apps']}
      jsonLd={[itemList, buildFAQSchema(homeFaqs, '/')]} />
    <WorldHome />
  </>;
};
export default Home;
