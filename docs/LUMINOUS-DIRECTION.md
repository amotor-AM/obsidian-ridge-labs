# Luminous product direction

The user's supplied references replace the rejected editorial studies: Raycast for crisp Apple software presentation, Family for approachable glass and depth, Chronicle for spatial composition, Linear for precise dark surfaces, and Nothing for visible hardware. The references guide materials and composition; their assets and interfaces are not copied.

## Implementation

- `components/luminous/LuminousHome.tsx` owns the product-first homepage and interactive Echo Chamber screenshot viewer.
- `ProductStage.tsx` places real screenshots in depth with scoped GSAP scroll transforms, a brief floating settle, and pointer response. Copy remains outside the transformed artwork. The product stage pauses while offscreen or in a hidden tab; mobile and reduced-motion devices use static artwork.
- `artworkMotion.ts` choreographs the other screenshot compositions as the user scrolls, keeping captions and controls still. Product and Philosophy reading columns begin at the top of their sections.
- `LocalCore.tsx` uses SVG and CSS layers for an illustrative hardware boundary. Processor, Storage, and Connections controls describe the real privacy model. It is not a representation of a specific Apple chip.
- `styles/luminous-home.css` owns the homepage. `styles/luminous-products.css` owns the collection and product heroes. `styles/luminous-system.css` updates shared chrome and legacy routes while excluding the new components.
- The existing Lenis lifecycle, route-focus handling, unmasked word transitions, and static canvas grain are retained. Reduced motion disables decorative movement and smooth scrolling.
- Actual screenshots remain the source of product UI. Echo Chamber ships; the other nine apps are in development. Memora retains its documented flashcard and FSRS study workflow.

## Original artwork

The Memora artwork was generated with the built-in image generation tool and saved as `public/images/luminous/memora-glass-cards.webp`, 1200 × 800, 17,274 bytes. Real app screenshots and all controls remain separate HTML elements. The original is `/Users/user/.codex/generated_images/01a0d6bc-5399-7790-85dd-d3daa73b3c0e/exec-8aa90b52-15eb-425c-acab-7a69dde49e5c.png`.

Final generation prompt:

> Use case: product-mockup. Asset type: supporting photographic hero artwork for Memora, a private Apple-device flashcard study app on a refined dark software website. Create a single cinematic studio product photograph of a small fan of three translucent lavender glass index cards, gently suspended above a dark matte obsidian surface. Rounded corners, fine ground-glass edges, precise real optical refraction, subtle lavender edge light, soft reflected caustics below. The cards should feel tangible and collectible, elegantly arranged at a three-quarter angle, large in the center of a wide 3:2 image with generous pure near-black (#050507) negative space around every edge. Restrained premium product photography, 85mm lens, editorial simplicity. Centered cluster occupies about half the image width. No text, letters, symbols, UI, phone mockups, logos, particles, neon beams, decorative lines, or additional objects. This photo will sit behind real app screenshots in HTML, so keep the lighting quiet, the edges seamless against black, and the cards distinct.

The homepage no longer uses the earlier `glass-core.webp` backdrop: its prominent diagonal edge was the unwanted line reported by the user. The asset remains archived in the repository. The homepage now uses restrained CSS light behind the actual devices, with no orbit or diagonal rule.

## Preview reliability

`npm run preview:local` serves the production build at `http://127.0.0.1:4174/` with a strict port. Keep that process running, rebuild after source changes, and reload the browser. A stopped process produces connection-refused errors; a stale tab can continue displaying an older page. The preview middleware in `vite.config.ts` resolves existing extensionless route URLs to their prerendered `index.html`. This avoids serving homepage HTML and triggering React hydration recovery on direct subpage visits.

A previous “admin-enforced policy could not be verified” error was a separate Codex policy-verification failure. Browser access worked during this revision after restarting the preview and opening a fresh tab. This does not establish a permanent fix for that historical policy error.

## Verification

Verified in the Codex in-app browser at 1280px desktop, 820px tablet, and 390px/320px mobile widths. Checks covered the homepage, collection, Memora, Echo Chamber, Mettle, and Philosophy where relevant to the changed layout.

- The app dropdown opens on the first mouse click, closes on the next, and supports ArrowDown/Escape. Hover and click no longer cancel one another.
- The main collection link, deep homepage collection link, and mobile collection/menu links navigate correctly and reset scroll to the page top. Route resets explicitly bypass CSS smooth scrolling and update Lenis even while a mobile menu has paused it.
- Memora screenshot selectors, Echo Chamber's screenshot controls, and FAQ controls update correctly.
- No horizontal overflow or clipped headings on the tested narrow homepage/Memora layouts; the Memora background and FAQ icon widths were adjusted after inspecting them.
- Hero lines and the earlier diagonal bitmap edge are gone. Caption clearance was checked with the hero in view. Scroll transforms and pointer response were observed in the browser.
- Memora's desktop headline moved from roughly 367px to 249px from the viewport top. Philosophy, thesis, boundary, and pricing reading columns use top alignment.
- Direct Memora loading and refresh use the correct prerendered HTML, preserve working controls, and report no browser console errors in a fresh tab.
- TypeScript, production build, 266-route SEO validation, 265 sitemap URLs, and 22 worker cases pass. Reduced-motion behavior and lifecycle cleanup were reviewed in code; an OS preference override was not available in the browser tool.
