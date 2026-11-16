import React from 'react';
import SEO, { buildBreadcrumbs, buildFAQSchema, SITE_URL } from './SEO';
import { WorldPhilosophy } from './kinetic/World';

export const BOUNDARY_CHECK = [
  {
    question: 'Where does the processing happen?',
    answer: 'On supported Apple hardware. Echo Chamber runs recording, transcription, and transcript intelligence on the device. Recordings and transcripts are not sent to an external AI service. The local core is also the standard for our other apps in development.'
  },
  {
    question: 'Where does the storage live?',
    answer: 'Each product is explicit about storage. Echo Chamber stores recordings on your device, with optional iCloud sync. Other apps have different defaults: Mettle and Cove use private iCloud storage when available and fall back to local storage. Each app page explains the boundary.'
  },
  {
    question: 'What connects to the network, and when?',
    answer: 'Model setup, App Store purchases and cloud sync can require connections. Certain apps also use optional services for specific features such as weather, banking or importing recipes. Each app page names its own connections.'
  }
];

const PhilosophyPage: React.FC = () => (
  <>
    <SEO title="The Philosophy: Your Digital Life Is Yours"
      description="An independent software studio with a radically ordinary idea: personal AI should be personal. See the principles behind Obsidian Ridge Labs."
      keywords={['local-first software','on-device AI privacy','offline AI apps','private Apple apps']}
      jsonLd={[
        buildBreadcrumbs([{ name: 'Home', url: '/' },{name:'The philosophy',url:'/philosophy'}]),
        {
          '@context':'https://schema.org','@type':'AboutPage',
          '@id':SITE_URL+'/philosophy#webpage',
          name:'The Obsidian Ridge Labs philosophy',
          url:SITE_URL+'/philosophy',
          description:'The principles behind the local-first app collection.',
          mainEntity:{'@id':SITE_URL+'/#organization'},
        },
        buildFAQSchema(BOUNDARY_CHECK,'/philosophy'),
      ]} />
    <WorldPhilosophy questions={BOUNDARY_CHECK} />
  </>
);
export default PhilosophyPage;
