import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { blogPosts } from '../data/blog';
import type { BlogContentType } from '../types';
import SEO, { buildBreadcrumbs, buildCollectionPage, ORGANIZATION_ID, SITE_URL } from './SEO';

type Filter = 'all' | BlogContentType;
const filters: {id:Filter;label:string}[] = [
  {id:'all',label:'All stories'},
  {id:'comparison',label:'Comparisons'},
  {id:'guide',label:'How-to guides'},
  {id:'analysis',label:'Ideas'},
  {id:'listicle',label:'Roundups'},
];
const BlogList: React.FC = () => {
  const [filter,setFilter]=useState<Filter>('all');
  const filtered = useMemo(()=>filter==='all'?blogPosts:blogPosts.filter(p=>p.contentType===filter),[filter]);
  const featured=blogPosts.find(p=>p.id==='apple-ecosystem-privacy')||blogPosts[0];
  return (
    <div className="kin-page kin-journal">
      <SEO title="Private AI App Comparisons & Guides"
        description="Practical, independent guides to useful software, your digital life, and private AI apps for Apple devices."
        ogImage="https://obsidianridgelabs.com/blog-og.png"
        ogImageAlt="The Obsidian Ridge Labs journal"
        jsonLd={[
          buildBreadcrumbs([{name:'Home',url:'/'},{name:'Journal',url:'/journal'}]),
          buildCollectionPage('The Obsidian Ridge Labs Journal','Guides and perspectives on private software','/journal'),
          {'@context':'https://schema.org','@type':'Blog','@id':SITE_URL+'/journal#blog',
            name:'The Obsidian Ridge Labs Journal',url:SITE_URL+'/journal',publisher:{'@id':ORGANIZATION_ID},
            blogPost:blogPosts.map(p=>({'@type':'BlogPosting',headline:p.title,description:p.excerpt,
              url:SITE_URL+'/journal/'+p.id,datePublished:p.date.replace(/\./g,'-'),
              ...(p.modified?{dateModified:p.modified.replace(/\./g,'-')}: {})}))},
          {'@context':'https://schema.org','@type':'ItemList','@id':SITE_URL+'/journal#article-index',
            name:'Journal articles',numberOfItems:blogPosts.length,
            itemListElement:blogPosts.map((p,i)=>({'@type':'ListItem',position:i+1,name:p.title,url:SITE_URL+'/journal/'+p.id}))},
        ]}/>
      <header className="kin-subhero kin-journal__hero">
        <span className="kin-eyebrow"><span className="kin-eyebrow__asterisk">✳</span>Notes from the studio / The journal</span>
        <span className="kin-subhero__counter">{blogPosts.length} STORIES AND COUNTING</span>
        <h1>GOOD IDEAS<br />ARE WORTH <em>SHARING.</em></h1>
        <div className="kin-subhero__bottom"><p>Field notes, thoughtful comparisons, little discoveries, and bigger questions about technology made for people.</p><span>OUR THOUGHTS / YOUR CURIOSITY</span></div>
      </header>
      <div className="kin-journal__body">
        {featured && <Link to={'/journal/'+featured.id} className="kin-journal__featured">
          <div className="kin-journal__featured-art" aria-hidden="true"><span>✳</span><i>BETTER<br/>QUESTIONS.</i></div>
          <div className="kin-journal__featured-copy"><span>✳ / EDITOR'S PICK</span><h2>{featured.title}</h2><p>{featured.excerpt}</p>
            <div>READ THE STORY <ArrowUpRight size={21} aria-hidden="true" /></div></div>
        </Link>}
        <section className="kin-journal__library" aria-labelledby="journal-library-heading">
          <div className="kin-journal__library-head"><div><span className="kin-eyebrow"><span className="kin-eyebrow__asterisk">✳</span>Browse the archive</span><h2 id="journal-library-heading">GO DOWN<br /><em>A RABBIT HOLE.</em></h2></div><p>Start with a question. Leave with a better one.</p></div>
          <div className="kin-filters" role="group" aria-label="Filter journal stories">
            {filters.map(f=><button type="button" key={f.id} aria-pressed={filter===f.id} className={filter===f.id?'is-active':''} onClick={()=>setFilter(f.id)}>{f.label}</button>)}
          </div>
          <div className="kin-journal__grid">
            {filtered.map((post,i)=><Link to={'/journal/'+post.id} className="kin-journal__card" key={post.id}>
              <span className="kin-journal__card-top"><span>{String(i+1).padStart(2,'0')} / {post.contentType.toUpperCase()}</span><ArrowUpRight size={18} aria-hidden="true" /></span>
              <h3>{post.title}</h3><p>{post.excerpt}</p>
              <span className="kin-journal__card-bottom">{post.readTime} <span>{post.modified||post.date}</span></span>
            </Link>)}
          </div>
        </section>
      </div>
    </div>
  );
};
export default BlogList;
