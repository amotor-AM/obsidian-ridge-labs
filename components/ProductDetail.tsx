import React, { useRef } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { products } from '../data/products';
import { blogPosts } from '../data/blog';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Download, ShieldCheck, Terminal, CheckCircle2, ChevronDown, Cpu, Activity, List, MessageSquare, Network, ArrowRight } from 'lucide-react';
import SEO, { buildSoftwareApp, buildBreadcrumbs, buildFAQSchema } from './SEO';

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  if (!product) {
    return <Navigate to="/" replace />;
  }

  const accentColorClass = 'text-apple-blue';
  const borderColorClass = 'border-apple-blue';
  const bgColorClass = 'bg-apple-blue';
  const Icon = product.icon;

  // SEO data
  const seoDescriptions: Record<string, string> = {
    vault: 'Obsidian Ridge Vault is a private AI finance app that analyzes your spending entirely on-device. No bank passwords, no cloud sync, no data collection. Scan PDF statements and get AI-powered forecasting offline.',
    mind: 'Mind Palace is a private AI journal that finds patterns in your thoughts using on-device intelligence. Encrypted with FaceID, never connected to the cloud. Your digital therapist with zero internet access.',
    echo: 'Echo Chamber provides offline real-time meeting transcription powered by on-device AI. 45+ languages, speaker identification, and AI summarization — no audio ever leaves your phone.',
    nexus: 'Decision Nexus is an AI decision mapping tool with adversarial analysis. Visualize complex choices, simulate scenarios, and let AI challenge your logic — all offline, all private.',
  };

  const softwareApp = buildSoftwareApp(product);
  const breadcrumbs = buildBreadcrumbs([
    { name: 'Home', url: '/' },
    { name: 'Apps', url: '/' },
    { name: product.name, url: `/apps/${product.id}` },
  ]);

  const productFaqs: Record<string, { question: string; answer: string }[]> = {
    vault: [
      { question: 'Does Vault require my bank password?', answer: 'No. Vault works by scanning PDF bank statements and receipts locally on your phone. You never need to enter bank credentials or connect to any aggregator like Plaid.' },
      { question: 'Can Vault work without internet?', answer: 'Yes. Vault runs entirely offline using on-device AI. All spending analysis, categorization, and forecasting happens on your phone\'s Neural Processing Unit.' },
      { question: 'Is my financial data secure in Vault?', answer: 'Absolutely. Your data is encrypted with AES-256 and stored only on your device. There are no servers, no cloud sync, and no way for anyone — including us — to access your financial information.' },
    ],
    mind: [
      { question: 'Can Mind Palace read my journal entries?', answer: 'No. Mind Palace uses on-device AI that never connects to the internet. Your entries are encrypted with your biometric data (FaceID/TouchID). Not even Obsidian Ridge Labs can read your thoughts.' },
      { question: 'How does Mind Palace find patterns?', answer: 'Mind Palace uses a local AI model and vector database running on your phone. As you journal, it creates semantic embeddings of your entries to detect connections between moods, habits, and behaviors.' },
      { question: 'Is Mind Palace different from Notion or Day One?', answer: 'Yes. Unlike Notion or Day One, Mind Palace stores everything locally with zero cloud sync. The AI runs on your device, not on OpenAI or Google servers. Your notes never leave your phone.' },
    ],
    echo: [
      { question: 'Does Echo Chamber send audio to the cloud?', answer: 'Never. Echo Chamber transcribes audio in real-time using your phone\'s Neural Processing Unit. No audio data is ever transmitted. It works fully offline — in airplanes, bunkers, or secure facilities.' },
      { question: 'How many languages does Echo Chamber support?', answer: 'Echo Chamber supports 45+ languages for real-time transcription, all processed locally on your device without requiring an internet connection.' },
      { question: 'Is Echo Chamber suitable for legal or medical use?', answer: 'Yes. Echo Chamber was designed for professionals who need absolute confidentiality. Since no audio leaves the device, attorney-client privilege and medical privacy are maintained.' },
    ],
    nexus: [
      { question: 'What is the Devil\'s Advocate mode in Decision Nexus?', answer: 'The Devil\'s Advocate mode is an AI feature that challenges your decision logic by identifying weaknesses, suggesting counter-arguments, and simulating adversarial scenarios — all powered by on-device AI.' },
      { question: 'Can I export decisions from Decision Nexus?', answer: 'Yes. Decision Nexus exports your decision maps and strategy documents as private PDFs. The export is local — no data touches any server.' },
      { question: 'Does Decision Nexus require an internet connection?', answer: 'No. All AI processing, scenario simulation, and adversarial analysis runs entirely on your device. Decision Nexus works offline in any environment.' },
    ],
  };

  const faqSchema = buildFAQSchema(productFaqs[product.id] || []);

  // Related blog posts for this product
  const relatedBlogMap: Record<string, string[]> = {
    vault: ['finance-app-red-flags'],
    mind: ['notion-vs-mindpalace'],
    echo: ['otter-vs-echo'],
    nexus: ['offline-ai-revolution'],
  };
  const relatedPosts = blogPosts.filter(p => (relatedBlogMap[product.id] || []).includes(p.id));

  // Other products for cross-linking
  const otherProducts = products.filter(p => p.id !== product.id);

  // Phone Screen Content Generators
  const renderPhoneContent = () => {
    if (product.id === 'vault') return (
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-end border-b border-white/5 pb-6">
          <div>
            <div className="text-[11px] text-apple-gray uppercase font-medium tracking-wider">Current Balance</div>
            <div className="text-3xl font-semibold text-white mt-1">$24,592.00</div>
          </div>
          <div className="text-sm font-medium text-green-400">+12%</div>
        </div>
        <div className="space-y-3">
           <div className="h-32 w-full bg-white/[0.03] rounded-2xl relative overflow-hidden flex items-end gap-1.5 p-3">
              {[40, 60, 35, 70, 50, 80, 65, 90, 45, 60].map((h, i) => (
                <div key={i} style={{height: `${h}%`}} className="flex-1 bg-apple-blue rounded-t-sm opacity-60"></div>
              ))}
           </div>
        </div>
        <div className="space-y-3 pt-4">
           {[1,2,3].map(i => (
             <div key={i} className="flex justify-between items-center p-4 bg-white/[0.03] rounded-2xl">
                <div className="flex gap-4">
                   <div className="w-10 h-10 rounded-full bg-apple-blue/10 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-apple-blue/40"></div>
                   </div>
                   <div className="flex flex-col justify-center">
                      <div className="h-2.5 w-24 bg-white/10 rounded-full mb-2"></div>
                      <div className="h-2 w-16 bg-white/5 rounded-full"></div>
                   </div>
                </div>
                <div className="h-5 w-14 bg-white/10 rounded-full"></div>
             </div>
           ))}
        </div>
      </div>
    );

    if (product.id === 'mind') return (
      <div className="p-6 flex flex-col h-full">
         <div className="flex-1 space-y-5">
            <div className="flex gap-3">
               <div className="p-4 bg-white/[0.05] rounded-2xl rounded-tl-none max-w-[85%] text-[13px] text-apple-gray leading-relaxed">
                  Analyzing previous entries... Pattern detected: High anxiety correlates with Sunday evenings.
               </div>
            </div>
            <div className="flex gap-3 flex-row-reverse">
               <div className="p-4 bg-apple-blue rounded-2xl rounded-tr-none max-w-[85%] text-[13px] text-white leading-relaxed">
                  That makes sense. I usually worry about the upcoming week.
               </div>
            </div>
            <div className="flex gap-3">
               <div className="p-4 bg-white/[0.05] rounded-2xl rounded-tl-none max-w-[85%] text-[13px] text-apple-gray leading-relaxed">
                  Suggestion: Would you like to review your successful strategies from last month?
               </div>
            </div>
         </div>
         <div className="mt-6 border-t border-white/5 pt-6">
            <div className="h-12 w-full bg-white/[0.05] rounded-full flex items-center px-5">
               <div className="h-5 w-5 rounded-full border-2 border-white/10"></div>
               <div className="ml-3 h-1.5 w-24 bg-white/10 rounded-full"></div>
            </div>
         </div>
      </div>
    );

    if (product.id === 'echo') return (
      <div className="p-6 flex flex-col h-full relative">
         <div className="absolute inset-0 top-1/2 -translate-y-1/2 flex items-center justify-center opacity-5 pointer-events-none">
            <Activity size={120} />
         </div>
         <div className="space-y-8 relative z-10">
            {[
              { spk: 'SPEAKER A', text: 'We need to confirm the merger timeline.', color: 'text-apple-gray' },
              { spk: 'SPEAKER B', text: 'The assets are currently frozen.', color: 'text-apple-blue' },
              { spk: 'SPEAKER A', text: 'Is that strictly legal?', color: 'text-apple-gray' },
              { spk: 'SPEAKER B', text: 'It is a grey area.', color: 'text-apple-blue' }
            ].map((msg, i) => (
              <div key={i}>
                <div className={`text-[10px] font-semibold mb-1.5 tracking-wider ${msg.color}`}>{msg.spk}</div>
                <div className="text-[15px] text-white/90 leading-relaxed font-medium">{msg.text}</div>
              </div>
            ))}
         </div>
         <div className="mt-auto">
            <div className="w-full h-16 bg-apple-blue/5 border border-apple-blue/20 rounded-2xl flex items-center justify-center gap-1.5">
               {[...Array(12)].map((_, i) => (
                  <motion.div 
                    key={i}
                    className="w-1.5 bg-apple-blue rounded-full"
                    animate={{ height: [12, 32, 12] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.08 }}
                  />
               ))}
            </div>
         </div>
      </div>
    );

    if (product.id === 'nexus') return (
      <div className="p-6 h-full relative overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-6 opacity-10">
           {[...Array(36)].map((_, i) => <div key={i} className="bg-white/10 rounded-full w-1 h-1 m-auto"></div>)}
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
           <div className="relative w-full h-64">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 border border-apple-blue/30 bg-black/40 backdrop-blur-md flex items-center justify-center rounded-2xl">
                 <Network size={32} className="text-apple-blue" />
              </div>
              <div className="absolute top-1/2 left-4 w-14 h-14 border border-white/10 bg-black/40 backdrop-blur-md flex items-center justify-center rounded-2xl">
              </div>
              <div className="absolute top-1/2 right-4 w-14 h-14 border border-white/10 bg-black/40 backdrop-blur-md flex items-center justify-center rounded-2xl">
              </div>
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                 <line x1="50%" y1="15%" x2="15%" y2="50%" stroke="white" strokeOpacity="0.1" strokeWidth="1.5" />
                 <line x1="50%" y1="15%" x2="85%" y2="50%" stroke="white" strokeOpacity="0.1" strokeWidth="1.5" />
              </svg>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-apple-blue/10 border border-apple-blue/20 px-4 py-1.5 rounded-full text-[11px] font-semibold text-apple-blue">
                 PROBABILITY: 87%
              </div>
           </div>
        </div>
      </div>
    );
  };

  return (
    <div ref={containerRef} className="min-h-screen pt-32 pb-10 md:pb-20 overflow-x-hidden bg-black">
      <SEO
        title={`${product.name} — ${product.tagline}`}
        description={seoDescriptions[product.id] || product.fullDescription}
        ogType="product"
        jsonLd={[softwareApp, breadcrumbs, faqSchema]}
      />

      {/* Hero Section */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-16 md:mb-32 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col lg:flex-row gap-20 items-center"
        >
          {/* Text Content */}
          <div className="flex-1 relative z-10">
             <div className="flex items-center gap-5 mb-10">
                <div className="p-4 bg-white/[0.03] border border-white/5 rounded-2xl">
                  <Icon className="w-8 h-8 text-apple-blue" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-apple-gray uppercase tracking-widest">{product.category}</span>
                  <span className="text-[11px] font-medium text-apple-blue mt-1">{product.version}</span>
                </div>
             </div>

             {/* Coming Soon Badge */}
             <div className="inline-flex items-center gap-2.5 px-5 py-2 bg-amber-400/10 border border-amber-400/30 rounded-full text-sm text-amber-400 font-bold mb-8">
               <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
               Coming Soon
             </div>

             <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight tracking-tight">
               {product.name}
             </h1>
             <p className="text-2xl md:text-3xl font-medium mb-10 max-w-2xl text-apple-gray">
               {product.tagline}
             </p>
             <p className="text-apple-gray text-lg leading-relaxed max-w-xl mb-12 font-medium">
               {product.fullDescription}
             </p>

             <div className="flex flex-col sm:flex-row gap-5">
               <button disabled className="px-10 py-4 bg-white/10 text-white/50 font-semibold rounded-full cursor-not-allowed flex items-center justify-center gap-3 border border-white/5">
                 <Download size={20} />
                 Coming Soon
               </button>
               <Link to="/apps/echo" className="px-10 py-4 border border-white/10 bg-transparent text-white font-semibold rounded-full hover:bg-white/5 transition-all text-center">
                 Try Echo Chamber
               </Link>
             </div>
          </div>

          {/* Holographic Phone Visualizer */}
          <div className="w-full lg:w-1/2 flex justify-center perspective-1000">
             <motion.div 
               style={{ rotateY: -10, rotateX: 5, y }}
               className="relative w-[320px] h-[650px] bg-[#0a0a0a] border-[8px] border-[#1a1a1a] rounded-[3.5rem] shadow-[0_0_100px_rgba(0,113,227,0.1)] overflow-hidden"
             >
                {/* Phone Notch/Island */}
                <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-20"></div>
                
                {/* Screen Content */}
                <div className="absolute inset-0 bg-black rounded-[2.8rem] overflow-hidden z-10 flex flex-col">
                  {/* Status Bar */}
                  <div className="h-12 w-full flex justify-between items-center px-8 pt-4">
                     <div className="text-[12px] text-white font-semibold">{new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
                     <div className="flex gap-1.5 items-center">
                        <div className="w-4 h-2 border border-white/30 rounded-[2px]"></div>
                        <div className="w-1 h-1 bg-white/30 rounded-full"></div>
                     </div>
                  </div>
                  
                  {/* App UI */}
                  <div className="flex-1 relative">
                    {renderPhoneContent()}
                  </div>
                  
                  {/* Bottom Bar */}
                  <div className="h-14 w-full flex justify-center items-center pb-4">
                     <div className="w-36 h-1.5 bg-white/20 rounded-full"></div>
                  </div>
                </div>

                {/* Glare Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent pointer-events-none z-30 rounded-[3.5rem]"></div>
             </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Narrative Section: The Mission */}
      <section className="py-16 md:py-32 px-6 md:px-12 bg-[#0a0a0a] border-y border-white/5 mb-16 md:mb-32">
         <div className="max-w-4xl mx-auto">
            <h2 className="text-sm font-bold tracking-widest mb-10 uppercase text-apple-blue">The Mission</h2>
            <h3 className="text-4xl md:text-6xl font-bold text-white mb-10 leading-tight tracking-tight">
               Privacy by design. <br/><span className="text-apple-gray">Built for the future.</span>
            </h3>
            <div className="space-y-8 text-apple-gray text-xl leading-relaxed font-medium">
               <p>
                  In an age of surveillance capitalism, your most intimate data—your finances, your thoughts, your conversations—is mined, packaged, and sold by the very tools you trust to manage it.
               </p>
               <p>
                  <strong className="text-white">{product.name}</strong> was engineered to reverse this dynamic. By running advanced AI models locally on your device's NPU, we provide the intelligence of the cloud with the privacy of a vault.
               </p>
               <p>
                  No servers. No accounts. No subscriptions. Just a powerful application that belongs to you.
               </p>
            </div>
         </div>
      </section>

      {/* How It Works: Vertical Timeline */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-20 md:mb-40">
         <div className="flex flex-col md:flex-row gap-20">
            <div className="md:w-1/3">
               <h2 className="text-sm font-bold tracking-widest mb-6 uppercase text-apple-blue">Workflow</h2>
               <h3 className="text-5xl font-bold text-white mb-8 tracking-tight">How it works.</h3>
               <p className="text-apple-gray text-lg font-medium">A simplified view of the local-first processing pipeline executing on your device.</p>
            </div>
            
            <div className="md:w-2/3 relative">
               <div className="absolute left-6 top-0 bottom-0 w-px bg-white/5"></div>
               <div className="space-y-16">
                  {product.workflow.map((step, idx) => (
                     <motion.div 
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="relative pl-20"
                     >
                        <div className="absolute left-0 top-0 w-12 h-12 bg-white/[0.03] border border-white/5 flex items-center justify-center text-lg font-bold text-white z-10 rounded-full">
                           {idx + 1}
                        </div>
                        <h4 className="text-2xl font-bold text-white mb-3 tracking-tight">{step.title}</h4>
                        <p className="text-apple-gray text-base leading-relaxed max-w-md font-medium">{step.description}</p>
                     </motion.div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* Technical Deep Dive (Expanded Specs) */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-20 md:mb-40">
         <div className="apple-card p-10 md:p-16 relative overflow-hidden">
             <div className="flex flex-col md:flex-row justify-between items-start mb-16">
               <div>
                  <h3 className="text-3xl font-bold text-white mb-3 flex items-center gap-4 tracking-tight">
                     <Terminal size={32} className="text-apple-blue" />
                     Technical Specifications
                  </h3>
                  <p className="text-apple-gray font-semibold text-xs uppercase tracking-widest">System Requirements & Performance</p>
               </div>
               <div className="mt-6 md:mt-0">
                  <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-white/[0.03] border border-white/5 rounded-full text-xs text-green-400 font-bold">
                     <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                     Stable Build
                  </div>
               </div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                 {product.specs.map((spec, i) => (
                   <div key={i} className="border-l border-white/5 pl-8">
                      <span className="block text-apple-gray text-xs font-bold uppercase mb-3 tracking-wider">{spec.label}</span>
                      <span className="block text-white text-xl font-semibold tracking-tight">{spec.value}</span>
                   </div>
                 ))}
             </div>
         </div>
      </section>

      {/* Feature Grid (Keep Existing) */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-20 md:mb-40">
         <h2 className="text-sm font-bold tracking-widest mb-12 uppercase text-apple-blue">Capabilities</h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {product.features.map((feature, i) => (
               <div key={i} className="apple-card p-10 group">
                  <div className="mb-6 p-4 bg-white/[0.03] border border-white/5 w-fit rounded-2xl group-hover:scale-110 transition-transform duration-500">
                    {React.cloneElement(feature.icon as React.ReactElement, { className: 'text-apple-blue' })}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{feature.title}</h3>
                  <p className="text-apple-gray text-base leading-relaxed font-medium">
                    {feature.description}
                  </p>
               </div>
            ))}
         </div>
      </section>

      {/* Privacy Guarantee (Refined) */}
      <section className="border-t border-white/5 bg-[#0a0a0a] pt-20 md:pt-40 pb-16 md:pb-32 px-6 relative overflow-hidden">
         <div className="max-w-4xl mx-auto text-center relative z-10">
           <ShieldCheck className="w-24 h-24 text-apple-blue mx-auto mb-10 opacity-90" />
           <h2 className="text-5xl md:text-7xl font-bold text-white mb-10 tracking-tight">Zero Telemetry Promise.</h2>
           <p className="text-apple-gray text-xl mb-16 leading-relaxed max-w-2xl mx-auto font-medium">
             This application contains no analytics SDKs, no crash reporting uplinks, and no user accounts.
             Network permissions are stripped from the binary manifest.{' '}
             <Link to="/philosophy" className="text-apple-blue hover:underline">Read our full privacy philosophy</Link>.
           </p>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {[
                { title: "Air-Gapped", desc: "No internet permission in manifest." },
                { title: "Auditable", desc: "Source code available for inspection." },
                { title: "Local DB", desc: "SQLite database stored in app sandbox." }
              ].map((item, i) => (
                <div key={i} className="apple-card p-8 flex flex-col items-center text-center">
                   <CheckCircle2 className="text-apple-blue mb-5" size={32} />
                   <h4 className="text-white text-lg font-bold mb-3 tracking-tight">{item.title}</h4>
                   <p className="text-apple-gray text-sm font-medium">{item.desc}</p>
                </div>
              ))}
           </div>
         </div>
      </section>

      {/* Related Blog Posts — Internal Linking */}
      {relatedPosts.length > 0 && (
        <section className="px-6 md:px-12 max-w-7xl mx-auto py-10 md:py-20 border-t border-white/5">
          <h2 className="text-sm font-bold tracking-widest mb-12 uppercase text-apple-blue">Related Reading</h2>
          {relatedPosts.map(post => (
            <Link key={post.id} to={`/blog/${post.id}`} className="group block apple-card p-10 mb-6 hover:scale-[1.01] transition-transform">
              <span className="text-[11px] font-bold text-apple-gray uppercase tracking-widest">{post.category} &middot; {post.readTime}</span>
              <h3 className="text-3xl font-bold text-white group-hover:text-apple-blue transition-colors mt-3 tracking-tight">{post.title}</h3>
              <p className="text-apple-gray text-lg mt-3 font-medium">{post.excerpt}</p>
            </Link>
          ))}
        </section>
      )}

      {/* Explore Other Apps — Cross-linking */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto py-10 md:py-20 border-t border-white/5">
        <h2 className="text-sm font-bold tracking-widest mb-12 uppercase text-apple-blue">Explore the Suite</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {otherProducts.map(p => {
            const OtherIcon = p.icon;
            return (
              <Link key={p.id} to={`/apps/${p.id}`} className="group apple-card p-8 hover:scale-[1.02] transition-transform">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-white/[0.03] border border-white/5 rounded-2xl">
                    <OtherIcon className="w-6 h-6 text-apple-blue" />
                  </div>
                  <span className="text-xs font-bold text-apple-gray uppercase tracking-widest">{p.category}</span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-apple-blue transition-colors tracking-tight">{p.name}</h3>
                <p className="text-apple-gray text-sm mt-2 font-medium">{p.tagline}</p>
                <div className="flex items-center gap-2 mt-4 text-apple-blue text-xs font-bold uppercase tracking-widest">
                  Learn More <ArrowRight size={14} />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

    </div>
  );
};

export default ProductDetail;