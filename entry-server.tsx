import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import ServerApp from './ServerApp';
import { setServerSEOContext } from './components/SEO';
import { products } from './data/products';
import { blogPosts } from './data/blog';
import { knowledgeBases } from './data/kb';

// Render function called by prerender.js
export function render(url: string, context: any) {
  setServerSEOContext(context);
  return ReactDOMServer.renderToString(
    <StaticRouter location={url}>
      <ServerApp />
    </StaticRouter>
  );
}

// Export lists of routes, products, and blogs for the prerender script
export const routes = [
  '/',
  '/download',
  '/philosophy',
  '/help',
  '/blog',
  '/terms',
  '/privacy',
  ...products.map(p => `/apps/${p.id}`),
  ...blogPosts.map(post => `/blog/${post.id}`),
  ...knowledgeBases.map(kb => `/help/${kb.appId}`),
  ...knowledgeBases.flatMap(kb => kb.articles.map(a => `/help/${kb.appId}/${a.id}`)),
];

export { products, blogPosts, knowledgeBases };
