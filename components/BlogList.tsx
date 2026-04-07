import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blog';
import { ArrowRight, Sparkles, BookOpen } from 'lucide-react';
import SEO, { buildBreadcrumbs, buildCollectionPage, SITE_URL } from './SEO';

const BlogList: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const breadcrumbs = buildBreadcrumbs([
    { name: 'Home', url: '/' },
    { name: 'Journal', url: '/blog' },
  ]);

  const collectionPage = buildCollectionPage(
    'The Obsidian Ridge Journal',
    'Insights on privacy, offline AI architecture, and digital sovereignty from the team building the future of private intelligence.',
    '/blog'
  );

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'The Obsidian Ridge Journal',
    description: 'Insights on privacy, offline AI, and digital sovereignty.',
    url: `${SITE_URL}/blog`,
    publisher: {
      '@type': 'Organization',
      name: 'Obsidian Ridge Labs',
      url: SITE_URL,
    },
    blogPost: blogPosts.map(post => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      url: `${SITE_URL}/blog/${post.id}`,
      datePublished: post.date.replace(/\./g, '-'),
    })),
  };

  return (
    <div className="min-h-screen bg-black pt-32 pb-10 md:pb-20 px-6 md:px-12 relative overflow-hidden">
      <SEO
        title="Journal — Privacy, AI & Digital Sovereignty"
        description="Explore insights on privacy-first technology, offline AI architecture, and digital sovereignty. Comparisons, guides, and deep analysis from Obsidian Ridge Labs."
        jsonLd={[breadcrumbs, collectionPage, blogSchema]}
      />

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-apple-blue opacity-[0.03] blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <header className="mb-12 md:mb-24 flex flex-col md:flex-row md:items-end justify-between border-b border-white/5 pb-8 md:pb-16">
           <div className="max-w-3xl">
             <div className="flex items-center gap-3 text-apple-blue mb-8">
                <Sparkles size={20} />
                <span className="font-bold text-xs tracking-widest uppercase">The Obsidian Ridge Journal</span>
             </div>
             <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight leading-tight">
               Insights & <br/> <span className="text-apple-gray">Ideology.</span>
             </h1>
             <p className="mt-10 text-2xl text-apple-gray font-medium max-w-2xl leading-relaxed">
                Exploring the intersection of advanced intelligence and personal sovereignty. No tracking. No noise. Just the future.
             </p>
           </div>
           <div className="mt-12 md:mt-0 flex flex-col items-end text-right font-semibold text-[11px] text-apple-gray space-y-2 tracking-wider">
              <span>ESTABLISHED 2024</span>
              <span>VERSION: PUBLIC FEED V2</span>
              <span>LATENCY: 0MS LOCAL</span>
           </div>
        </header>

        {/* Featured Post */}
        {blogPosts.length > 0 && (
          <Link to={`/blog/${blogPosts[0].id}`} className="block mb-12 md:mb-24 group relative overflow-hidden apple-card p-10 md:p-20">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                   <span className="inline-block px-4 py-1.5 bg-apple-blue text-white font-bold text-[11px] uppercase rounded-full mb-8 tracking-wider">Featured</span>
                   <h2 className="text-4xl md:text-6xl font-bold text-white group-hover:text-apple-blue transition-colors duration-500 mb-8 leading-tight tracking-tight">
                      {blogPosts[0].title}
                   </h2>
                   <p className="text-apple-gray text-xl font-medium leading-relaxed mb-10">
                      {blogPosts[0].excerpt}
                   </p>
                   <div className="flex items-center gap-6">
                      <div className="flex items-center gap-2.5 text-white font-bold text-xs uppercase tracking-widest">
                         <BookOpen size={16} />
                         <span>{blogPosts[0].readTime}</span>
                      </div>
                      <div className="h-px w-16 bg-white/10"></div>
                      <span className="text-apple-gray font-bold text-xs tracking-widest">{blogPosts[0].date}</span>
                   </div>
                </div>
                <div className="hidden lg:flex justify-end">
                   <div className="w-72 h-72 border border-white/5 bg-white/[0.02] rounded-3xl flex items-center justify-center group-hover:border-apple-blue/30 transition-all duration-500">
                      <div className="text-apple-blue opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                         <ArrowRight size={100} className="group-hover:translate-x-6 transition-transform duration-500" />
                      </div>
                   </div>
                </div>
             </div>
          </Link>
        )}

        {/* Regular Feed */}
        <div className="grid grid-cols-1 gap-4">
          {blogPosts.slice(1).map((post, idx) => (
            <Link key={post.id} to={`/blog/${post.id}`}>
              <motion.div 
                onMouseEnter={() => setHoveredId(post.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative py-14 px-8 transition-all duration-500 apple-card hover:scale-[1.01]"
              >
                 <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
                    <div className="md:col-span-2 font-bold text-[11px] text-apple-gray uppercase tracking-widest">
                       {post.date}
                    </div>
                    <div className="md:col-span-7">
                       <h3 className={`text-3xl md:text-4xl font-bold mb-4 transition-colors duration-500 tracking-tight ${hoveredId === post.id ? 'text-apple-blue' : 'text-white'}`}>
                          {post.title}
                       </h3>
                       <p className="text-apple-gray text-lg font-medium max-w-2xl line-clamp-2 leading-relaxed">
                          {post.excerpt}
                       </p>
                    </div>
                    <div className="md:col-span-3 flex justify-end">
                       <div className="flex gap-3">
                          {post.tags.slice(0, 2).map(tag => (
                             <span key={tag} className="text-[10px] font-bold bg-white/[0.03] border border-white/5 px-3 py-1.5 text-apple-gray rounded-full uppercase tracking-widest">
                                {tag}
                             </span>
                          ))}
                       </div>
                    </div>
                 </div>
              </motion.div>
            </Link>
          ))}
        </div>


      </div>
    </div>
  );
};

export default BlogList;
