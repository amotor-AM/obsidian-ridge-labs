import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { products } from '../data/products';
import { productFaqs } from '../data/faqs';
import { productStories } from '../data/product-stories';
import SEO, { buildBreadcrumbs, buildFAQSchema, buildSoftwareApp } from './SEO';
import { WorldProduct } from './kinetic/World';

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const app = products.find(p => p.id === id);
  if (!app) return <Navigate to="/download" replace />;
  const story = productStories[app.id];
  const faqs = productFaqs[app.id] || [];
  return <>
    <SEO title={story?.seo.title || app.name + ': Private AI for Apple'}
      description={story?.seo.description || app.description}
      keywords={story?.seo.keywords || [app.name, app.category, 'on-device AI']}
      ogType="product"
      jsonLd={[buildSoftwareApp(app),
        buildBreadcrumbs([{name:'Home',url:'/'},{name:'Apps',url:'/download'},{name:app.name,url:'/apps/'+app.id}]),
        buildFAQSchema(faqs,'/apps/'+app.id)]} />
    <WorldProduct app={app} faqs={faqs} />
  </>;
};
export default ProductDetail;
