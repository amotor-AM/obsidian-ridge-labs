import React from 'react';
import { products } from '../data/products';
import { echoFaqs } from '../data/faqs';
import SEO, { buildBreadcrumbs, buildFAQSchema, buildSoftwareApp } from './SEO';
import { WorldProduct } from './kinetic/World';

const EchoDetail: React.FC = () => {
  const app = products.find(item => item.id === 'echochamber')!;
  return <>
    <SEO title="Echo Chamber: Private AI Transcription" description="Record, search and transform conversations into useful notes. AI transcription and answers run on your Apple device." ogType="product"
      keywords={['on-device transcription','private AI meeting notes','offline transcription for iPhone','local AI transcription']}
      jsonLd={[buildSoftwareApp(app),
        buildBreadcrumbs([{name:'Home',url:'/'},{name:'Apps',url:'/download'},{name:'Echo Chamber',url:'/apps/echochamber'}]),
        buildFAQSchema(echoFaqs,'/apps/echochamber')]} />
    <WorldProduct app={app} faqs={echoFaqs} />
  </>;
};
export default EchoDetail;
