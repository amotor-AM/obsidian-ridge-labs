import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

const previews: Record<string, string> = {
  vault: 'Know what you can spend before you spend it.',
  molehill: 'Find a way into the task you keep putting off.',
  cove: 'Write the version you would never send.',
  wove: 'Get dressed from the clothes you already own.',
  mettle: 'Know why that weight is on the bar.',
  memora: 'Remember the notes you took the trouble to make.',
  trove: 'Keep the receipt. Find it when it matters.',
  kith: 'Remember the things they told you.',
  mise: 'Make something out of all those saved recipes.',
};

const Products: React.FC = () => (
  <section id="products" className="home-collection" aria-labelledby="products-title">
    <div className="section-frame">
      <div className="section-index"><span>02 / The collection</span><span>Ten apps, ten boundaries, one standard</span></div>
      <div className="home-collection__intro">
        <h2 id="products-title">For the things<br /><em>you keep to yourself.</em></h2>
        <p>A conversation worth keeping. A month of receipts. A person you meant to call. Each app starts with something that matters to you and keeps its intelligence close to it.</p>
      </div>
      <article className="home-echo">
        <div className="home-echo__copy">
          <p className="home-echo__status"><span className="status-dot" aria-hidden="true" /> On the App Store / Echo Chamber</p>
          <h3>Be in the conversation.<br /><em>Keep the words.</em></h3>
          <p>You were listening, not taking notes. Echo Chamber turns the recording into a transcript you can search, summarize, and return to. The work happens on your iPhone, iPad, or Mac.</p>
          <p className="home-echo__principle">A useful transcript should not create a second audience.</p>
          <div className="home-echo__actions">
            <Link className="text-link" to="/apps/echochamber#boundary">Read Echo Chamber’s boundary <ArrowUpRight size={17} aria-hidden="true" /></Link>
            <Link className="button button--primary" to="/apps/echochamber">Explore Echo Chamber <ArrowRight size={18} aria-hidden="true" /></Link>
          </div>
          <small>Free to download, with optional Pro. See the App Store for the current offer.</small>
        </div>
        <figure className="home-echo__image">
          <picture><source srcSet="/images/echochamber/transcription-details-480.webp 480w, /images/echochamber/transcription-details-960.webp 960w" sizes="(max-width: 700px) 72vw, 340px" type="image/webp" /><img src="/images/echochamber/transcription-details-480.webp" alt="Echo Chamber transcript with playback controls and a transcript search field" loading="lazy" width="480" height="854" /></picture>
          <figcaption>Your words. Back where you can find them.</figcaption>
        </figure>
      </article>
      <div className="home-shelf__heading"><h3>Still on the workbench.</h3><p>Nine apps in development.</p></div>
      <div className="home-shelf">
        {products.filter(product => !product.appStoreUrl).map(product => {
          const AppIcon = product.icon;
          return <Link key={product.id} className="home-shelf__item" to={`/apps/${product.id}`}>
            <div className="home-shelf__name"><AppIcon size={21} aria-hidden="true" /><h4>{product.name}</h4><ArrowUpRight size={18} aria-hidden="true" /></div>
            <p>{previews[product.id]}</p>
            <span>In development</span>
          </Link>;
        })}
      </div>
      <Link className="text-link home-shelf__more" to="/download">Explore the collection <ArrowUpRight size={18} aria-hidden="true" /></Link>
    </div>
  </section>
);

export default Products;
