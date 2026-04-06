import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { blogPosts } from '../data/blog';
import { products } from '../data/products';
import { ArrowLeft, Clock, Calendar, Share2, Download, Bookmark, Sparkles } from 'lucide-react';
import SEO, { buildBlogPosting, buildBreadcrumbs } from './SEO';

const BlogPost: React.FC = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === id);
  const { scrollYProgress } = useScroll();
  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
     window.scrollTo(0, 0);
  }, [id]);

  if (!post) return <Navigate to="/blog" replace />;

  const blogPosting = buildBlogPosting(post);
  const breadcrumbs = buildBreadcrumbs([
    { name: 'Home', url: '/' },
    { name: 'Journal', url: '/blog' },
    { name: post.title, url: `/blog/${post.id}` },
  ]);

  const renderBlock = (block: any, idx: number) => {
    switch (block.type) {
      case 'paragraph':
        return <p key={idx} className="mb-10 text-xl text-apple-gray font-medium leading-relaxed">{block.content}</p>;
      case 'h2':
        return (
          <h2 key={idx} className="text-4xl md:text-5xl font-bold text-white mt-20 mb-10 leading-tight tracking-tight">
            {block.content}
          </h2>
        );
      case 'quote':
        return (
          <div key={idx} className="relative my-16 px-12 py-10 border-l-4 border-apple-blue bg-white/[0.02] rounded-r-3xl">
             <blockquote className="text-3xl font-bold text-white italic leading-tight tracking-tight">
               {block.content}
             </blockquote>
          </div>
        );
      case 'code':
        return (
          <div key={idx} className="bg-[#0c0c0c] border border-white/5 p-10 rounded-3xl my-14 font-mono text-sm leading-relaxed text-apple-gray group relative">
            <div className="absolute top-0 right-0 p-3 text-[9px] font-bold uppercase text-apple-gray/40 bg-white/5 rounded-bl-2xl rounded-tr-3xl">Raw Context</div>
            <pre className="whitespace-pre-wrap">{block.content}</pre>
          </div>
        );
      case 'list':
        return (
          <ul key={idx} className="space-y-8 my-14">
            {block.content.map((item: string, i: number) => (
              <li key={i} className="flex gap-5 items-start group">
                 <div className="mt-2.5 w-2 h-2 bg-apple-blue rounded-full group-hover:scale-125 transition-transform flex-shrink-0"></div>
                 <span className="text-xl text-apple-gray font-medium leading-relaxed group-hover:text-white transition-colors">{item}</span>
              </li>
            ))}
          </ul>
        );
      case 'cta':
        const product = products.find(p => p.id === block.ctaAppId);
        if (!product) return null;
        return (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="my-24 relative"
          >
             <div className="apple-card p-10 md:p-16 flex flex-col md:flex-row items-center gap-12">
                <div className="p-10 bg-white/[0.03] border border-white/5 rounded-3xl">
                   {React.createElement(product.icon, { className: `w-16 h-16 text-apple-blue` })}
                </div>
                
                <div className="flex-1 text-center md:text-left">
                   <div className="flex items-center gap-2.5 mb-4 text-[11px] font-bold text-apple-blue tracking-widest uppercase">
                      <Sparkles size={14} />
                      Solution Found
                   </div>
                   <h4 className="text-4xl font-bold text-white mb-6 tracking-tight">{product.name}</h4>
                   <p className="text-apple-gray text-xl mb-10 font-medium max-w-xl leading-relaxed">{block.content}</p>
                   <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
                     <Link to={`/apps/${product.id}`} className="apple-button px-10 py-4 bg-apple-blue text-white font-bold rounded-full hover:opacity-90 transition-all flex items-center justify-center gap-3">
                        <Download size={20} /> Download App
                     </Link>
                     <Link to={`/apps/${product.id}`} className="px-10 py-4 border border-white/10 text-white font-bold rounded-full hover:bg-white/5 transition-all text-center">
                        Details
                     </Link>
                   </div>
                </div>
             </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <SEO
        title={post.title}
        description={post.excerpt}
        ogType="article"
        article={{
          publishedTime: post.date.replace(/\./g, '-'),
          tags: post.tags.map(t => t.replace('#', '')),
          section: post.category,
        }}
        jsonLd={[blogPosting, breadcrumbs]}
      />

      {/* Progress Line */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-apple-blue z-50 origin-left" style={{ scaleX: progressScale }} />

      {/* Article Hero */}
      <header className="relative pt-48 pb-24 px-6 md:px-12 border-b border-white/5 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto relative z-10">
           <Link to="/blog" className="inline-flex items-center gap-3 text-apple-gray hover:text-apple-blue transition-colors font-bold text-[11px] uppercase tracking-widest mb-14">
              <ArrowLeft size={14} /> Back to Journal
           </Link>

           <div className="flex flex-wrap gap-8 mb-12 text-[11px] font-bold text-apple-gray uppercase tracking-widest">
              <span className="flex items-center gap-2.5 bg-white/[0.03] px-4 py-1.5 rounded-full border border-white/5"><Calendar size={14} /> {post.date}</span>
              <span className="flex items-center gap-2.5 bg-white/[0.03] px-4 py-1.5 rounded-full border border-white/5"><Clock size={14} /> {post.readTime}</span>
              <span className="text-apple-blue bg-apple-blue/10 px-4 py-1.5 rounded-full border border-apple-blue/20">{post.category}</span>
           </div>

           <h1 className="text-6xl md:text-8xl font-bold text-white mb-12 leading-tight tracking-tight">
              {post.title}
           </h1>

           <p className="text-2xl md:text-3xl text-apple-gray font-medium leading-relaxed border-l-4 border-apple-blue pl-10 max-w-3xl">
              {post.excerpt}
           </p>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-20 py-32">
         
         {/* Sidebar Left: Share/Save */}
         <aside className="hidden lg:block lg:col-span-1 sticky top-32 h-fit">
            <div className="flex flex-col gap-10">
               <button className="p-5 border border-white/10 rounded-2xl text-apple-gray hover:text-apple-blue hover:border-apple-blue/30 transition-all" title="Bookmark">
                  <Bookmark size={24} />
               </button>
               <button className="p-5 border border-white/10 rounded-2xl text-apple-gray hover:text-apple-blue hover:border-apple-blue/30 transition-all" title="Share">
                  <Share2 size={24} />
               </button>
            </div>
         </aside>

         {/* Content Body */}
         <article className="lg:col-span-8 rich-text">
            {post.blocks.map((block, i) => renderBlock(block, i))}
            
            <footer className="mt-32 pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
               <div className="font-bold text-apple-gray text-xl tracking-tight">
                  End Transmission // Obsidian Ridge Labs
               </div>
               <div className="flex gap-4">
                  {post.tags.map(tag => (
                     <span key={tag} className="text-[10px] font-bold bg-white/[0.03] border border-white/5 px-4 py-1.5 text-apple-gray rounded-full uppercase tracking-widest">
                        {tag}
                     </span>
                  ))}
               </div>
            </footer>
         </article>

         {/* Sidebar Right: Context/Related */}
         <aside className="lg:col-span-3 space-y-16">
            <div>
               <h4 className="text-[11px] font-bold text-apple-blue uppercase tracking-widest mb-8 border-b border-apple-blue/20 pb-3">Related Entries</h4>
               <div className="space-y-10">
                  {blogPosts.filter(p => p.id !== post.id).slice(0, 3).map(p => (
                     <Link key={p.id} to={`/blog/${p.id}`} className="group block">
                        <span className="block text-[10px] font-bold text-apple-gray mb-2 tracking-widest uppercase">{p.date}</span>
                        <h5 className="text-xl font-bold text-white group-hover:text-apple-blue transition-colors leading-tight tracking-tight">
                           {p.title}
                        </h5>
                     </Link>
                  ))}
               </div>
            </div>

            <div className="p-8 apple-card font-medium text-[12px] leading-relaxed text-apple-gray">
               This document is locally generated. No external scripts or tracking metrics were loaded during the rendering of this transmission.
            </div>

            <div>
               <h4 className="text-[11px] font-bold text-apple-blue uppercase tracking-widest mb-8 border-b border-apple-blue/20 pb-3">Explore</h4>
               <div className="space-y-6">
                  <Link to="/philosophy" className="group block">
                     <h5 className="text-lg font-bold text-white group-hover:text-apple-blue transition-colors leading-tight tracking-tight">
                        Our Privacy Philosophy
                     </h5>
                     <p className="text-[12px] text-apple-gray mt-1">Why we reject the cloud-first model.</p>
                  </Link>
                  <Link to="/apps/vault" className="group block">
                     <h5 className="text-lg font-bold text-white group-hover:text-apple-blue transition-colors leading-tight tracking-tight">
                        Vault — AI Finance
                     </h5>
                     <p className="text-[12px] text-apple-gray mt-1">Private spending analysis, zero bank passwords.</p>
                  </Link>
                  <Link to="/apps/echo" className="group block">
                     <h5 className="text-lg font-bold text-white group-hover:text-apple-blue transition-colors leading-tight tracking-tight">
                        Echo Chamber — Transcription
                     </h5>
                     <p className="text-[12px] text-apple-gray mt-1">Offline meeting transcription for professionals.</p>
                  </Link>
               </div>
            </div>
         </aside>
      </div>

    </div>
  );
};

export default BlogPost;
