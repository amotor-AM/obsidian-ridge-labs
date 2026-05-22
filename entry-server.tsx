import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import { setServerSEOContext } from './components/SEO';
import { products } from './data/products';
import { blogPosts } from './data/blog';

// Render function called by prerender.js
export function render(url: string, context: any) {
  setServerSEOContext(context);
  return ReactDOMServer.renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );
}

// Export lists of routes, products, and blogs for the prerender script
export const routes = [
  '/',
  '/download',
  '/philosophy',
  '/blog',
  '/terms',
  '/privacy',
  ...products.map(p => `/apps/${p.id}`),
  ...blogPosts.map(post => `/blog/${post.id}`),
];

export { products, blogPosts };
