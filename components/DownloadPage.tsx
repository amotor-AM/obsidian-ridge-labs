import React from 'react';
import SEO, { buildBreadcrumbs, buildCollectionPage, buildFAQSchema, SITE_URL } from './SEO';
import { collection, collectionDescription } from '../data/collection';
import { collectionFaqs } from '../data/faqs';
import { WorldCollection } from './kinetic/World';

const DownloadPage: React.FC = () => <div>
  <SEO title="Explore All 11 Private AI Apps" description={collectionDescription}
    keywords={['private iPhone apps','offline AI apps','local-first Apple apps','on-device AI app collection']}
    jsonLd={[
      buildBreadcrumbs([{name:'Home',url:'/'},{name:'The collection',url:'/download'}]),
      buildCollectionPage('The Obsidian Ridge Labs collection',collectionDescription,'/download'),
      buildFAQSchema(collectionFaqs,'/download'),
      {'@context':'https://schema.org','@type':'ItemList',name:'All apps',numberOfItems:collection.length,
        itemListElement:collection.map((app,index)=>({'@type':'ListItem',position:index+1,
          item:{'@id':SITE_URL+'/apps/'+app.id+'#software','@type':'SoftwareApplication',
            name:app.name,url:SITE_URL+'/apps/'+app.id,description:app.description,
            creativeWorkStatus:app.releaseStatus==='app-store'?'Released':'In development'}}))}
    ]}
  />
  <WorldCollection faqs={collectionFaqs} />
</div>;
export default DownloadPage;
