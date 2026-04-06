import React from 'react';
import Hero from './Hero';
import Philosophy from './Philosophy';
import Products from './Products';
import Services from './Services';
import SEO, { buildBreadcrumbs, buildFAQSchema, SITE_URL } from './SEO';

const Home: React.FC = () => {
  const breadcrumbs = buildBreadcrumbs([
    { name: 'Home', url: '/' },
  ]);

  const faq = buildFAQSchema([
    {
      question: 'What is Obsidian Ridge Labs?',
      answer: 'Obsidian Ridge Labs is a boutique mobile app studio that builds privacy-first, offline AI applications. All AI processing runs entirely on your device — no cloud, no accounts, no data collection.',
    },
    {
      question: 'Do Obsidian Ridge apps require an internet connection?',
      answer: 'No. All Obsidian Ridge apps are designed to work completely offline. They use on-device AI models and Neural Processing Units (NPUs) built into modern smartphones. No internet connection is ever required.',
    },
    {
      question: 'How does on-device AI work without the cloud?',
      answer: 'Modern smartphones contain dedicated Neural Processing Units (NPUs) capable of running AI inference locally. Obsidian Ridge apps ship with embedded language models and vector databases, so all intelligence runs on your phone\'s hardware.',
    },
    {
      question: 'Is my data safe with Obsidian Ridge apps?',
      answer: 'Yes. Obsidian Ridge apps have zero telemetry, no analytics SDKs, no crash reporting, and no user accounts. Your data is encrypted with AES-256 and stored locally. We don\'t have servers, so your data can\'t be hacked from the cloud.',
    },
    {
      question: 'What apps does Obsidian Ridge Labs offer?',
      answer: 'Obsidian Ridge Labs offers four apps: Vault (AI finance tracking), Mind Palace (AI private journal), Echo Chamber (offline meeting transcription), and Decision Nexus (AI decision mapping). All run offline with zero data collection.',
    },
  ]);

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Obsidian Ridge Labs App Suite',
    description: 'Privacy-first offline AI applications',
    numberOfItems: 4,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Obsidian Ridge Vault',
        url: `${SITE_URL}/apps/vault`,
        description: 'Private AI finance tracker with zero cloud dependency.',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Mind Palace',
        url: `${SITE_URL}/apps/mind`,
        description: 'AI-powered private journal with pattern recognition.',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Echo Chamber',
        url: `${SITE_URL}/apps/echo`,
        description: 'Offline real-time meeting transcription for professionals.',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Decision Nexus',
        url: `${SITE_URL}/apps/nexus`,
        description: 'AI decision mapping with adversarial analysis.',
      },
    ],
  };

  return (
    <>
      <SEO
        title="Privacy-First Offline AI Apps"
        description="Obsidian Ridge Labs builds AI apps that run entirely on your device. Finance tracking, journaling, meeting transcription, and decision mapping — no cloud, no accounts, no leaks. Experience private AI intelligence on iPhone and Android."
        canonical="https://obsidianridgelabs.com/"
        jsonLd={[breadcrumbs, faq, itemList]}
      />
      <Hero />
      <Philosophy />
      <Products />
      <Services />
    </>
  );
};

export default Home;
