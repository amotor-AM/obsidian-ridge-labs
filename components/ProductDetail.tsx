import React from 'react';
import { Navigate, Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Github, ShieldCheck } from 'lucide-react';
import { getProductReleaseLabel, products } from '../data/products';
import { productFaqs } from '../data/faqs';
import SEO, { buildBreadcrumbs, buildFAQSchema, buildSoftwareApp } from './SEO';
import MotionReveal from './home/MotionReveal';
import SiteFaq from './SiteFaq';

const editorialCopy: Record<string, { statement: string; thesis: string; boundary: string }> = {
  vault: {
    statement: 'Your finances should inform you, not a surveillance profile.',
    thesis: 'Vault is built to make your own financial history useful to you. Track manually, import statements and receipts on-device, forecast cash flow, and ask for private coaching. Automatic Plaid updates remain a separate choice.',
    boundary: 'Core budgeting, forecasting, categorization, and coaching are being designed around local processing. The planned Plaid path is optional and routes bank authentication through Plaid; final connection behavior will be documented before release.',
  },
  molehill: {
    statement: 'Momentum without pressure, profiling, or shame.',
    thesis: 'Molehill is for the moment a task feels too large to start. Private intelligence turns a brain dump into editable actions, then brings one manageable next step into focus without a streak to protect.',
    boundary: 'Task breakdown, step splitting, and brain-dump sorting run on-device, and speech is transcribed locally, so the app works in airplane mode. Tasks are stored on the iPhone with no cloud copy and no cross-device sync today; steps you export to Apple Reminders or Calendar travel through your own iCloud. Final release details will be documented before launch.',
  },
  cove: {
    statement: 'Your journal can think with you without leaving your phone.',
    thesis: 'Cove pairs the quiet ritual of journaling with restrained, on-device reflection. Themes, memories, and grounded questions become easier to revisit while the original words and final judgment stay with the writer.',
    boundary: 'Entries are stored on the device and reflection runs on-device, with a NaturalLanguage fallback when Apple Intelligence is unavailable. The store opens through your own private iCloud database when that is available and falls back to local-only when it is not, and Settings names which mode actually opened. Optional Health mood sync requires permission. Cove remains in development, so exact multi-device behavior is confirmed before release.',
  },
  wove: {
    statement: 'A private stylist for the closet you already own.',
    thesis: 'Wove turns a local closet into daily looks, packing plans, capsule ideas, and evidence about what actually gets worn. It is designed to reduce catalog work and bring useful context to the moment of choice.',
    boundary: 'Garment analysis, styling, wear history, and image storage are local in the current build. Optional weather context sends a coarse one-shot location to Apple WeatherKit. Cross-device garment-photo sync is not being promised before release.',
  },
  mettle: {
    statement: 'A strength coach that shows the reason behind every number.',
    thesis: 'Mettle gives deterministic training logic control of every prescription. On-device intelligence selects from curated candidates and explains the plan at the lifter’s level, so adaptation never becomes a black box.',
    boundary: 'Core programming and coaching run on-device and retain a deterministic fallback. Training data is stored on the device and uses the lifter\u2019s own private iCloud database when that is available, with a local store as the fallback, so history moves through an Apple account rather than an Obsidian Ridge Labs server. HealthKit is optional, and the Watch experience controls an active phone workout rather than acting as a standalone trainer.',
  },
  memora: {
    statement: 'AI should help you study, not collect your source material.',
    thesis: 'Memora converts material you provide into editable draft cards, puts every draft through a review gate, and uses FSRS to decide when recall is most useful. The source stays visible, the schedule stays understandable, and every rating can be corrected.',
    boundary: 'Card generation, PDF text extraction, photo OCR, storage, and scheduling happen locally, and imports from Anki, Quizlet, or CSV are always free. PDFs need an embedded text layer, scanned PDFs are not read as documents, and there is no iCloud deck sync today, which makes the library backup file your real backup. Similar-card generation and the deck tutor require Apple Intelligence.',
  },
  trove: {
    statement: 'The record that matters should belong to you.',
    thesis: 'Trove makes a home inventory practical enough to build before a claim, move, warranty issue, or replacement decision. Capture evidence once, review every extracted detail, then search the private catalog when the information matters.',
    boundary: 'The catalog and its core intelligence are local, and a deterministic engine takes over when Apple Intelligence is unavailable. Items, receipts, serials, values, and warranties are user-maintained records, not appraisals or insurance coverage guarantees, and the coverage gap check is arithmetic against a policy limit you enter. The claim report, CSV export, multiple homes, and private iCloud sync are Plus capabilities in an unreleased app.',
  },
  kith: {
    statement: 'Remember people without turning them into a pipeline.',
    thesis: 'Kith uses circles, an adjustable cadence, and a gently cooling Warmth Ring to make staying close feel humane. Optional local helpers can organize a memory or help begin a message without turning private relationships into cloud CRM data.',
    boundary: 'Relationship records and Foundation Models assistance are designed around the device, with no Obsidian Ridge Labs account or AI server. The current build stores people, notes, and dates in a local database with no cloud copy, and the app remains useful when Apple Intelligence is unavailable.',
  },
  mise: {
    statement: 'A recipe box should not become someone else’s dataset.',
    thesis: 'Mise keeps the whole cooking loop on the device: import from anywhere, structure the recipe on-device, plan the week, build the grocery list, and cook with a sous chef that already knows your kitchen. There is no Mise account and no recipe server to lose your collection to.',
    boundary: 'Recipe parsing, the sous chef, pantry generation, and substitutions run on-device and require Apple Intelligence; devices without it are told so at launch instead of silently degrading. The only network requests are fetching a page you asked Mise to import, made directly to that site, and App Store purchase verification. Recipes are stored locally with optional private iCloud sync through your own account.',
  },
};

/** Lightweight article index keeps the full editorial corpus out of product-page bundles. */
const productJournalLinks: Record<string, { id: string; title: string }[]> = {
  echochamber: [
    { id: 'otter-vs-echo', title: 'Echo Chamber vs Otter.ai: On-Device and Cloud Transcription Compared' },
    { id: 'best-offline-transcription-apps', title: '5 Private Transcription Apps Compared: Offline, On-Device, and Cloud Options' },
  ],
  vault: [
    { id: 'finance-app-red-flags', title: '5 Budgeting Apps Compared by What Happens When You Connect a Bank' },
    { id: 'vault-vs-ynab-monarch-copilot-actual', title: 'Vault vs YNAB, Monarch, Copilot, and Actual Budget: Privacy and Bank Sync Compared' },
  ],
  molehill: [
    { id: 'molehill-vs-goblin-tools-tiimo-structured-todoist', title: 'Molehill vs Goblin Tools, Tiimo, Structured, and Todoist for Task Breakdown' },
    { id: 'best-ai-task-breakdown-apps', title: '5 Task Breakdown Apps for Overwhelming Projects and Brain Dumps' },
  ],
  cove: [
    { id: 'private-ai-journal-guide', title: '5 Private AI Journal Apps Compared by Where Your Entries and Prompts Go' },
    { id: 'cove-vs-day-one-rosebud-stoic-mindsera', title: 'Cove vs Day One, Rosebud, Stoic, and Mindsera: AI Journal Privacy Compared' },
  ],
  wove: [
    { id: 'wove-vs-stylebook-whering-indyx-acloset', title: 'Wove vs Stylebook, Whering, Indyx, and Acloset: Digital Wardrobe Apps Compared' },
    { id: 'best-digital-wardrobe-apps', title: '5 Digital Wardrobe Apps That Help You Wear More of What You Already Own' },
  ],
  mettle: [
    { id: 'mettle-vs-fitbod-alpha-progression-boostcamp-hevy', title: 'Mettle vs Fitbod, Alpha Progression, Boostcamp, and Hevy: Strength Apps Compared' },
    { id: 'best-progressive-overload-apps', title: '5 Progressive Overload Apps: From Simple Workout Logs to Explainable Adaptive Plans' },
  ],
  memora: [
    { id: 'memora-vs-anki-quizlet-remnote-knowt', title: 'Memora vs Anki, Quizlet, RemNote, and Knowt: Which Flashcard App Fits Your Study Workflow?' },
    { id: 'best-ai-flashcard-apps-pdf-notes-privacy', title: 'Memora guide: 5 AI Flashcard Apps for PDFs, Notes, Privacy, and FSRS' },
  ],
  trove: [
    { id: 'trove-vs-home-inventory-apps', title: 'Trove vs Under My Roof, HomeZada, Itemtopia, NAIC, and Sortly for Home Inventory' },
    { id: 'best-home-inventory-apps-insurance-privacy', title: 'Trove guide: 6 Home Inventory Apps for Insurance, Receipts, Warranties, and Privacy' },
  ],
  kith: [
    { id: 'kith-vs-personal-crm-apps', title: 'Kith vs Hippo, Dex, Monica, and Covve: Which Personal CRM Fits Friends and Family?' },
    { id: 'best-relationship-reminder-apps-friends-family', title: 'Kith guide: 5 Relationship Reminder Apps for Friends and Family' },
  ],
  mise: [
    { id: 'mise-vs-paprika-pestle-mela-anylist', title: 'Mise vs Paprika, Pestle, Mela, and AnyList: Recipe Managers Compared' },
    { id: 'best-private-recipe-manager-apps', title: 'Mise guide: 5 Recipe Manager Apps for Importing, Planning, and Cooking' },
  ],
};

const productSeo: Record<string, { title: string; description: string; keywords: string[] }> = {
  vault: {
    title: 'Vault: Private AI Budgeting for iPhone',
    description: 'An in-development local-first budgeting app for iPhone, designed for manual tracking, cash-flow forecasting, private AI coaching, and optional Plaid sync.',
    keywords: ['private budgeting app for iPhone', 'on-device AI finance app', 'budget app without bank connection', 'optional Plaid sync'],
  },
  molehill: {
    title: 'Molehill: Private AI Task Breakdown for iPhone',
    description: 'An in-development focus app that turns overwhelming work into one next step with a local-first design and no streaks, shame, or ad tracking.',
    keywords: ['AI task breakdown app', 'ADHD focus app for iPhone', 'private productivity app', 'on-device task planning'],
  },
  cove: {
    title: 'Cove: Private On-Device AI Journal for iPhone',
    description: 'Explore Cove, an in-development private journal with on-device reflection, mood and theme patterns, semantic search, grounded questions, app lock, and export.',
    keywords: ['private AI journal for iPhone', 'on-device journaling app', 'journal app without cloud AI', 'private mood journal'],
  },
  wove: {
    title: 'Wove: Private AI Wardrobe App',
    description: 'Explore Wove, an in-development digital closet with local garment cut-out, weather-aware outfits, wear tracking, capsules, packing, and wardrobe insights.',
    keywords: ['private AI wardrobe app', 'on-device outfit planner', 'digital closet for iPhone', 'weather aware outfit app'],
  },
  mettle: {
    title: 'Mettle: Private Explainable AI Strength Coach',
    description: 'Explore Mettle, an in-development iPhone strength coach with deterministic sets and loads, adaptive programming, explainable progression, and an Apple Watch remote.',
    keywords: ['AI strength training app', 'private workout planner for iPhone', 'adaptive lifting program app', 'explainable AI fitness coach'],
  },
  memora: {
    title: 'Memora: Private AI Flashcards with FSRS',
    description: 'Explore Memora, an in-development private iPhone study app that drafts flashcards from notes, text-layer PDFs, and selected photos, then schedules recall with FSRS.',
    keywords: ['AI flashcard generator on device', 'private study app for iPhone', 'FSRS flashcard app', 'turn PDF into flashcards privately'],
  },
  trove: {
    title: 'Trove: Private AI Home Inventory App',
    description: 'Explore Trove, an in-development home inventory for belongings, receipts, serial numbers, warranties, values, search, and planned insurance-ready exports.',
    keywords: ['private home inventory app', 'home inventory for insurance', 'warranty tracker app', 'on-device AI inventory app'],
  },
  kith: {
    title: 'Kith: Private Relationship Reminder App',
    description: 'Explore Kith, an in-development private relationship manager with gentle reach-out cadences, important dates, saved context, and on-device message helpers.',
    keywords: ['private personal CRM for iPhone', 'relationship reminder app', 'keep in touch app without cloud AI', 'on-device personal relationship manager'],
  },
  mise: {
    title: 'Mise: Private AI Recipe Box and Meal Planner',
    description: 'Explore Mise, an in-development private recipe manager with share-sheet and photo import, an on-device sous chef, weekly meal planning, and hands-free cook mode.',
    keywords: ['private recipe app for iPhone', 'on-device AI recipe manager', 'recipe import without an account', 'meal planner and grocery list app'],
  },
};

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);

  if (!product) return <Navigate to="/" replace />;

  const copy = editorialCopy[product.id] ?? {
    statement: product.tagline,
    thesis: product.fullDescription,
    boundary: 'Product-specific privacy and connection details are published alongside each release.',
  };
  const relatedPosts = productJournalLinks[product.id] || [];
  const otherProducts = products.filter((item) => item.id !== product.id).slice(0, 4);
  const isReleasedToStore = Boolean(product.appStoreUrl);
  const isConcept = product.releaseStatus === 'concept' || product.releaseStatus === 'pre-release';
  const statusLabel = getProductReleaseLabel(product);
  const statusDescription = isReleasedToStore
    ? 'Download details are current on the App Store.'
    : isConcept
      ? 'Private Apple software in active development. Final release details will be published when verified.'
      : 'The public repository is available; current access details are published separately.';

  const faqItems = productFaqs[product.id] ?? [
    {
      question: `What is the current release status of ${product.name}?`,
      answer: statusDescription,
    },
  ];

  const softwareApp = buildSoftwareApp(product);
  const seo = productSeo[product.id] ?? {
    title: `${product.name}: ${product.tagline}`,
    description: product.description,
    keywords: [product.category, 'private AI app', 'on-device AI'],
  };
  const productPlatforms = product.platforms?.join(' · ') || 'Apple platforms';
  const breadcrumbs = buildBreadcrumbs([
    { name: 'Home', url: '/' },
    { name: 'Apps', url: '/download' },
    { name: product.name, url: `/apps/${product.id}` },
  ]);

  return (
    <div className="product-page">
      <SEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        ogType="product"
        jsonLd={[softwareApp, breadcrumbs, buildFAQSchema(faqItems)]}
      />

      <header className="product-page__hero">
        <div className="section-frame">
          <div className="product-page__meta">
            <span>{statusLabel}</span>
            <span>{product.category} · {productPlatforms}</span>
          </div>

          <div className="product-page__hero-grid">
            <motion.div
              className="product-page__hero-copy"
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="section-kicker">{product.category}</p>
              <h1>{product.name}</h1>
              <p className="product-page__tagline">{copy.statement}</p>
              <p className="product-page__description">{product.fullDescription}</p>
              <div className="product-page__actions">
                {product.appStoreUrl ? (
                  <a href={product.appStoreUrl} target="_blank" rel="noreferrer" className="button button--primary">
                    View on the App Store <ArrowUpRight size={18} />
                  </a>
                ) : product.githubUrl ? (
                  <a href={product.githubUrl} target="_blank" rel="noreferrer" className="button button--primary">
                    <Github size={18} /> View the source
                  </a>
                ) : (
                  <span className="product-page__status-chip">In active development</span>
                )}
                <Link to="/download" className="button button--quiet">Compare the collection <ArrowRight size={18} /></Link>
              </div>
            </motion.div>

            <motion.aside
              className="product-profile"
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              aria-label={`${product.name} product profile`}
            >
              <div className="product-profile__top">
                <span>Product profile</span>
                <strong>{String(products.findIndex((item) => item.id === product.id) + 1).padStart(2, '0')}</strong>
              </div>
              <dl>
                {product.specs.map((spec) => (
                  <div key={spec.label}><dt>{spec.label}</dt><dd>{spec.value}</dd></div>
                ))}
              </dl>
              <div className="product-profile__bottom">
                <span>{statusLabel}</span>
                <p>{statusDescription}</p>
              </div>
            </motion.aside>
          </div>
        </div>
      </header>

      <div className="product-page__content">
        <section className="product-thesis" aria-labelledby="product-thesis-title">
          <div className="section-frame product-thesis__grid">
            <MotionReveal>
              <p className="section-kicker section-kicker--dark">Why it exists</p>
              <h2 id="product-thesis-title">{copy.statement}</h2>
            </MotionReveal>
            <MotionReveal delay={0.08}>
              <p>{copy.thesis}</p>
            </MotionReveal>
          </div>
        </section>

        {product.screenshots && product.screenshots.length > 0 && (
          <section className="echo-gallery" aria-label={`${product.name} product screens`}>
            <div className="section-frame">
              <div className="echo-gallery__track">
                {product.screenshots.map((shot, index) => (
                  <MotionReveal key={shot.file} className="echo-gallery__item" amount={0.15}>
                    <figure>
                      <picture>
                        <img
                          src={`/images/${product.id}/${shot.file}-960.webp`}
                          srcSet={`/images/${product.id}/${shot.file}-480.webp 480w, /images/${product.id}/${shot.file}-960.webp 960w`}
                          sizes="(max-width: 900px) 90vw, 30vw"
                          alt={`${product.name} ${shot.title.toLowerCase()} screen`}
                          width="960"
                          height="2087"
                          loading="lazy"
                          decoding="async"
                        />
                      </picture>
                      <figcaption>
                        <span>{String(index + 1).padStart(2, '0')}</span>
                        <div><strong>{shot.title}</strong><p>{shot.caption}</p></div>
                      </figcaption>
                    </figure>
                  </MotionReveal>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="product-workflow" aria-labelledby="product-workflow-title">
          <div className="section-frame">
            <div className="section-index"><span>01 / Private workflow</span><span>From input to useful result</span></div>
            <div className="product-workflow__intro">
              <p className="section-kicker">No hidden data path</p>
              <h2 id="product-workflow-title">Useful from the first input to the final result.</h2>
            </div>
            <ol className="product-workflow__list">
              {product.workflow.map((step, index) => (
                <motion.li
                  key={step.title}
                  initial={false}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </motion.li>
              ))}
            </ol>
          </div>
        </section>

        <section className="product-capabilities" aria-labelledby="product-capabilities-title">
          <div className="section-frame">
            <div className="product-capabilities__intro">
              <p className="section-kicker section-kicker--dark">What it does</p>
              <h2 id="product-capabilities-title">Purpose-built for one private workflow.</h2>
            </div>
            <div className="product-capabilities__grid">
              {product.features.map((feature, index) => (
                <MotionReveal key={feature.title} className="product-capability" delay={index * 0.06}>
                  <div className="product-capability__icon" aria-hidden="true">{feature.icon}</div>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </MotionReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="product-boundary" aria-labelledby="product-boundary-title">
          <div className="section-frame product-boundary__grid">
            <MotionReveal>
              <ShieldCheck size={38} aria-hidden="true" />
              <p className="section-kicker">Privacy is architecture</p>
              <h2 id="product-boundary-title">A shorter data path.<br />A clearer privacy boundary.</h2>
            </MotionReveal>
            <MotionReveal delay={0.08}>
              <p>{copy.boundary}</p>
              <Link to="/privacy" className="text-link">Read the full privacy model <ArrowUpRight size={18} /></Link>
            </MotionReveal>
          </div>
        </section>

        <section className="product-faq" aria-labelledby="product-faq-title">
          <div className="section-frame product-faq__grid">
            <div>
              <p className="section-kicker">Before release or install</p>
              <h2 id="product-faq-title">Questions worth asking.</h2>
            </div>
            <SiteFaq items={faqItems} tone="dark" />
          </div>
        </section>

        {(relatedPosts.length > 0 || otherProducts.length > 0) && (
          <section className="product-more" aria-labelledby="product-more-title">
            <div className="section-frame">
              <div className="section-index section-index--dark"><span>Continue exploring</span><span>Journal and collection</span></div>
              <h2 id="product-more-title">Why Obsidian Ridge is different.</h2>
              <div className="product-more__grid">
                {relatedPosts.map((post) => (
                  <Link key={post.id} to={`/journal/${post.id}`}><span>Journal</span><strong>{post.title}</strong><ArrowUpRight /></Link>
                ))}
                {otherProducts.slice(0, Math.max(1, 3 - relatedPosts.length)).map((item) => (
                  <Link key={item.id} to={`/apps/${item.id}`}><span>App</span><strong>{item.name}</strong><ArrowUpRight /></Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
