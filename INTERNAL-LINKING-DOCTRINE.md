# Internal Linking Doctrine — Obsidian Ridge Labs

## Purpose

This document defines the internal linking strategy for obsidianridgelabs.com. Following this doctrine ensures maximum crawl efficiency, link equity distribution, topical authority, and visibility in traditional search (Google), AI search (Perplexity, ChatGPT, Gemini), and answer engines.

---

## Core Principles

### 1. Every Page Links Out to at Least 3 Internal Pages

No page should be a dead end. Every page must link to at least 3 other internal pages. This ensures crawlers can discover the full site from any entry point and distributes link equity across the domain.

**Minimum links per page type:**
| Page Type | Min Internal Links | Target Pages |
|---|---|---|
| Homepage | 10+ | All products, philosophy, blog, legal |
| Product page | 6+ | Other products, related blog post, philosophy, blog index |
| Blog post | 5+ | Related product (CTA), other blog posts, philosophy, blog index |
| Blog index | 5+ | All blog posts, product pages via featured post |
| Philosophy | 8+ | All products, blog posts, blog index |
| Legal pages | 4+ | Philosophy, related product, other legal page |

### 2. Use Descriptive Anchor Text (Never "Click Here")

Anchor text tells search engines what the linked page is about. Always use keyword-rich, descriptive anchor text that reflects the target page's content.

**Good:**
- `<Link to="/apps/vault">Obsidian Ridge Vault — private AI finance tracking</Link>`
- `<Link to="/blog/finance-app-red-flags">The hidden cost of free finance apps</Link>`
- `<Link to="/philosophy">Our privacy-first philosophy</Link>`

**Bad:**
- `<Link to="/apps/vault">Click here</Link>`
- `<Link to="/apps/vault">Learn more</Link>` (acceptable in buttons, not in body text)

### 3. Contextual Links > Navigational Links

Links embedded in body text ("contextual links") carry more SEO weight than links in headers, footers, or sidebars. While navigation and footer links are necessary, the highest-value links should appear within content paragraphs.

**Priority hierarchy:**
1. In-content contextual links (highest value)
2. CTA blocks with product links
3. "Related" and "Explore" sections
4. Footer navigation links
5. Header navigation links

### 4. Create Hub-and-Spoke Topology

The site follows a hub-and-spoke model where pillar pages link to cluster pages and vice versa:

```
Homepage (Hub)
├── /apps/vault ←→ /blog/finance-app-red-flags
├── /apps/mind ←→ /blog/notion-vs-mindpalace
├── /apps/echo ←→ /blog/otter-vs-echo
├── /apps/nexus ←→ /blog/offline-ai-revolution
├── /philosophy ←→ All products + All blog posts
└── /blog (Hub) → All blog posts
```

**Rules:**
- Every product page links to its companion blog post
- Every blog post links to its companion product (via CTA block)
- The philosophy page links to all products and key blog posts
- Blog posts always cross-link to related blog posts

### 5. Cross-Link Products (Lateral Linking)

Every product page must link to all other product pages. This creates a mesh network that:
- Distributes link equity evenly across all products
- Signals topical clustering to search engines
- Increases pages-per-session for users

**Implementation:** The "Explore the Suite" section at the bottom of every product page links to all sibling products.

### 6. Blog Posts Are Link Equity Engines

Blog posts attract organic traffic via long-tail keywords and pass link equity to product pages via CTA blocks and contextual links. Every blog post must:
- Include at least 1 CTA block linking to a specific product
- Link to the blog index
- Link to 2-3 other blog posts (via sidebar "Related Entries")
- Include a contextual link to the philosophy page or a product page within the article body

### 7. Footer as Comprehensive Sitemap Alternative

The footer serves as a crawlable site directory. It must contain links to:
- All 4 product pages (with descriptive text, not just names)
- All blog posts (not just the blog index)
- Philosophy page
- Privacy policy and Terms of Service
- Blog index

This ensures every page on the site can reach every other page within 2 clicks maximum.

---

## Link Equity Flow Map

```
                    ┌─────────────┐
                    │  Homepage    │ (Highest authority)
                    └──────┬──────┘
                           │
          ┌────────────────┼────────────────┐
          ▼                ▼                ▼
   ┌──────────┐    ┌──────────┐    ┌──────────────┐
   │ Products │◄──►│   Blog   │◄──►│  Philosophy   │
   │ (×4)     │    │ Posts(×4)│    │              │
   └──────────┘    └──────────┘    └──────────────┘
        │               │                │
        └───────────────┼────────────────┘
                        ▼
                ┌──────────────┐
                │ Legal Pages  │ (Lowest priority)
                └──────────────┘

Arrows (◄──►) indicate bidirectional linking.
```

---

## When Adding New Content

### Adding a New Product

1. Create the product page at `/apps/{id}`
2. Add the product to the homepage Products grid (automatic via data)
3. Add the product to the Navigation dropdown (automatic via data)
4. Add the product to the Footer (manual — update Footer.tsx)
5. Add the product to the Philosophy page "See the Philosophy in Action" section
6. Write a companion blog post comparing it to a competitor
7. Cross-link: new product → all existing products, and all existing products → new product
8. Update `sitemap.xml` with the new URL
9. Update `llms.txt` with the new product description

### Adding a New Blog Post

1. Create the blog post in `data/blog.ts`
2. Include at least 1 CTA block linking to a relevant product
3. The BlogPost component automatically renders "Related Entries" in the sidebar
4. Add a link to the new post in the Footer journal section
5. If the post is a product comparison, add it to the relevant product page's "Related Reading" section (update `relatedBlogMap` in ProductDetail.tsx)
6. Consider adding a contextual link from the Philosophy page's "Further Reading" section
7. Update `sitemap.xml` with the new URL
8. Update `llms.txt` with the new post title and URL

### Adding a New Static Page

1. Create the component
2. Add the route to App.tsx
3. Add SEO component with title, description, breadcrumbs, and relevant JSON-LD
4. Add at least 3 internal links from the new page
5. Add the page to the Footer navigation
6. Add at least 2 internal links TO the new page from existing pages
7. Update `sitemap.xml`

---

## Technical Implementation

### SEO Component Usage

Every page must include the `<SEO>` component as its first child:

```tsx
<SEO
  title="Page Title (50-60 chars)"
  description="Meta description with keywords (150-160 chars)"
  ogType="website|article|product"
  jsonLd={[breadcrumbs, pageSpecificSchema]}
/>
```

### Structured Data Per Page Type

| Page Type | Required Schema Types |
|---|---|
| Homepage | BreadcrumbList, FAQPage, ItemList |
| Product | SoftwareApplication, BreadcrumbList, FAQPage |
| Blog post | BlogPosting, BreadcrumbList |
| Blog index | CollectionPage, Blog, BreadcrumbList |
| Philosophy | AboutPage, BreadcrumbList |
| Legal | BreadcrumbList |

### Breadcrumb Rules

Every page must include BreadcrumbList structured data:
- Homepage: `Home`
- Product: `Home > Apps > {Product Name}`
- Blog index: `Home > Journal`
- Blog post: `Home > Journal > {Post Title}`
- Philosophy: `Home > Philosophy`
- Legal: `Home > {Page Name}`

---

## SEO Checklist for Every Page

- [ ] `<SEO>` component with unique title (50-60 chars)
- [ ] `<SEO>` component with unique description (150-160 chars)
- [ ] BreadcrumbList JSON-LD
- [ ] Page-specific JSON-LD (SoftwareApplication, BlogPosting, etc.)
- [ ] At least 3 internal links out
- [ ] At least 1 contextual (in-content) internal link
- [ ] Descriptive anchor text on all links
- [ ] Proper heading hierarchy (h1 > h2 > h3)
- [ ] Page listed in sitemap.xml
- [ ] Page described in llms.txt
- [ ] Page linked from footer

---

## AI Search Optimization (AEO/GEO)

### llms.txt
The `llms.txt` file at the site root provides AI crawlers with a structured, plain-text summary of the entire site. Update it whenever content changes. It should:
- Describe the company and mission
- List all products with key differentiators
- List all blog posts with URLs
- Include contact information
- Use clear, factual language (no marketing fluff)

### FAQPage Schema
FAQ structured data is critical for AI answer engines. Every product page and the homepage include FAQPage schema with questions users actually search for:
- "Does [product] require internet?"
- "Is [product] safe for [use case]?"
- "How does [product] compare to [competitor]?"

### robots.txt AI Crawler Rules
All major AI crawlers (GPTBot, ClaudeBot, PerplexityBot, etc.) are explicitly allowed. This maximizes the chance of being included in AI-generated answers.

---

## Metrics to Monitor

1. **Crawl depth**: No page should be more than 2 clicks from the homepage
2. **Internal links per page**: Minimum 3, target 5-8
3. **Orphan pages**: Zero — every page must be linked from at least 2 other pages
4. **Link equity distribution**: Product pages should each receive roughly equal internal links
5. **Rich results**: Monitor Google Search Console for FAQ, SoftwareApplication, and BlogPosting rich results

---

## Current Link Map (as implemented)

| Source Page | Links To |
|---|---|
| **Homepage** | All 4 products, philosophy, blog (via nav), privacy, terms (via footer), all blog posts (via footer) |
| **Vault** | Mind, Echo, Nexus (cross-link), finance blog post, philosophy, blog index (via footer) |
| **Mind Palace** | Vault, Echo, Nexus (cross-link), notion blog post, philosophy, blog index (via footer) |
| **Echo Chamber** | Vault, Mind, Nexus (cross-link), otter blog post, philosophy, blog index (via footer) |
| **Decision Nexus** | Vault, Mind, Echo (cross-link), offline AI blog post, philosophy, blog index (via footer) |
| **Philosophy** | All 4 products, 2 blog posts, blog index, all via footer |
| **Blog Index** | All 4 blog posts, featured post product |
| **Blog Posts** | Related product (CTA), 3 related posts (sidebar), philosophy, vault, echo (sidebar explore) |
| **Privacy Policy** | Philosophy, terms, finance blog post, vault |
| **Terms of Service** | Privacy, philosophy, vault, echo |
| **Footer (all pages)** | All 4 products, all 4 blog posts, blog index, philosophy, privacy, terms |
