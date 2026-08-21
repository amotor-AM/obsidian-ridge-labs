import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO, { buildBreadcrumbs } from './SEO';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="legal-page">
      <SEO
        title="Privacy Policy: On-Device AI and Optional Connections"
        description="How Obsidian Ridge Labs keeps core AI processing on-device, limits the public website to aggregate traffic measurement, and handles optional Plaid, iCloud, diagnostics, purchases, and support."
        noindex={false}
        jsonLd={[
          buildBreadcrumbs([
            { name: 'Home', url: '/' },
            { name: 'Privacy Policy', url: '/privacy' },
          ]),
        ]}
      />

      <motion.article
        initial={false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <header className="legal-page__header">
          <p className="section-kicker">Privacy Policy</p>
          <h1>
            Clear about what stays local.
            <em>Precise about what connects.</em>
          </h1>
          <p className="text-apple-gray text-lg md:text-xl leading-relaxed max-w-3xl">
            Obsidian Ridge Labs builds its core AI experiences to run on your Apple device. Some
            optional features use services such as Plaid or iCloud. The public website uses Google
            Analytics only to measure aggregate traffic. This policy names those connections instead
            of hiding them behind a blanket claim.
          </p>
          <p className="text-gray-600 text-sm mt-8">Effective August 21, 2026</p>
        </header>

        <section aria-labelledby="privacy-at-a-glance" className="mb-16 md:mb-24">
          <h2 id="privacy-at-a-glance" className="sr-only">Privacy at a glance</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5">
            {[
              {
                label: 'Core AI',
                value: 'On-device',
                detail: 'Product content is processed locally for core AI features.',
              },
              {
                label: 'Default storage',
                value: 'Local-first',
                detail: 'Your content begins in the app sandbox on your device.',
              },
              {
                label: 'Network features',
                value: 'Disclosed',
                detail: 'Optional connections are explained where they are offered.',
              },
            ].map((item) => (
              <div key={item.label} className="bg-[#080808] p-6 md:p-8">
                <p className="text-[10px] text-gray-600 uppercase tracking-widest mb-3">{item.label}</p>
                <p className="text-xl font-bold text-white mb-3">{item.value}</p>
                <p className="text-sm text-apple-gray leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="max-w-3xl text-apple-gray leading-relaxed space-y-16">
          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-5 tracking-tight">
              1. Scope of this policy
            </h2>
            <div className="space-y-4">
              <p>
                This policy covers the Obsidian Ridge Labs website and our published applications.
                Product pages and help guides provide additional detail for individual features.
                Practices for products still in development will be confirmed before those products
                are released.
              </p>
              <p>
                Our approach is local-first, not network-blind: we reduce data movement wherever the
                product can work locally and identify the cases where a feature needs a connection.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-5 tracking-tight">
              2. Core AI processing and local content
            </h2>
            <div className="space-y-4">
              <p>
                Core AI features are designed to process your content on supported Apple hardware
                using Apple on-device frameworks or app-bundled models. We do not send your recordings,
                transcripts, financial history, journal entries, tasks, or decision content to an
                external AI API for inference.
              </p>
              <p>
                App content is stored locally by default inside the operating system's app sandbox.
                Our apps do not require an Obsidian Ridge Labs account, contain advertising, or use
                advertising identifiers. We do not sell your app content or use it to build advertising
                profiles.
              </p>
              <p>
                Some on-device models require a one-time download before they can work offline. A model
                download requests model files; it does not include the private content you created in
                the app.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-5 tracking-tight">
              3. Optional and product-specific connections
            </h2>
            <p className="mb-8">
              The following connections are limited to the feature you choose to use. Disabling an
              optional feature does not move core AI processing to a remote service.
            </p>

            <div className="space-y-5">
              <div className="border border-white/10 bg-white/[0.02] p-6 md:p-8">
                <h3 className="text-lg font-semibold text-white mb-3">Echo Chamber</h3>
                <p>
                  Recording, transcription, summaries, transcript chat, search, and translation run
                  on-device. Audio stored by Echo Chamber is encrypted at rest using AES-256-GCM.
                  Echo Chamber may connect to download a speech model. If you enable iCloud sync,
                  audio is encrypted on your device before it is stored in your iCloud account;
                  iCloud sync is off by default. Obsidian Ridge Labs does not operate a recording
                  server for Echo Chamber.
                </p>
              </div>

              <div className="border border-white/10 bg-white/[0.02] p-6 md:p-8">
                <h3 className="text-lg font-semibold text-white mb-3">Vault</h3>
                <p className="mb-4">
                  Manual tracking, statement and receipt import, financial categorization, forecasting,
                  and AI coaching are designed to run locally. If you enable bank sync, you sign in
                  through Plaid's interface. Vault does not see or store your bank username or password.
                  Plaid receives the information needed to connect your institution, and transaction
                  and balance data passes through Plaid and a secure relay to reach your device.
                </p>
                <p>
                  Vault also offers anonymous diagnostics that are off by default. If you opt in, they
                  contain limited event-name counts and a hashed identifier, not account balances,
                  amounts, merchants, categories, or coach conversations. An optional local AI model
                  download requests model files without including your financial data.
                </p>
              </div>

              <div className="border border-white/10 bg-white/[0.02] p-6 md:p-8">
                <h3 className="text-lg font-semibold text-white mb-3">Apple system services</h3>
                <p>
                  Features you deliberately send to Apple Reminders or Calendar may sync through your
                  iCloud settings. Apple also processes App Store downloads, subscription verification,
                  and purchases. Those services are governed by your Apple account settings and Apple's
                  privacy terms.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-5 tracking-tight">
              4. App diagnostics
            </h2>
            <p>
              Our applications do not include third-party behavioral analytics SDKs. Where an app
              offers first-party diagnostics, as Vault does, the control is off by default and the
              app explains what is included before you enable it. App diagnostics are separate from
              the public website measurement described in section 5.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-5 tracking-tight">
              5. Public website traffic measurement
            </h2>
            <div className="space-y-4">
              <p>
                The public Obsidian Ridge Labs website is not an account product and does not receive
                content stored in our apps. Recordings, transcripts, finances, journals, tasks, and
                similar in-app material are not sent to this website or to Google Analytics.
              </p>
              <p>
                To measure how the website itself is used in the aggregate, we load Google Tag Manager
                (container ID GTM-PGQDN8FM), which loads Google Analytics 4 (measurement ID G-FNL2K6W19T).
                These services are provided by Google LLC. We use them solely to produce aggregated
                website statistics, such as approximate counts of visits and page views, which pages
                are requested, coarse geographic region, referring site or campaign, and general
                device or browser category.
              </p>
              <p>
                We do not use Google Tag Manager or Google Analytics to identify you by name, email
                address, or account; to create a marketing, remarketing, or advertising profile; to
                measure or target ads on other sites or apps; to combine website traffic with app
                content; or to sell personal information. We do not share website analytics for
                cross-context behavioral advertising. We do not assign a Google Analytics user ID,
                do not enable Google Signals or Google&apos;s advertising features for this property,
                and do not authorize Google to use this property&apos;s Analytics data for Google&apos;s
                advertising products.
              </p>
              <p>
                Google may process technical information that is necessary to generate those aggregate
                reports. That information can include the pages requested and related timestamps, a
                cookie or similar client identifier used to distinguish sessions for counting, the
                referring URL, user-agent or device characteristics, and Internet Protocol address
                information that Google uses to estimate approximate location. We review Analytics in
                aggregated form. We do not attempt to re-identify a visitor from those reports, and
                we do not collect additional personal information through the website for analytics
                purposes.
              </p>
              <p>
                Independently of Google Analytics, the service that hosts this website may process
                ordinary request logs required to deliver pages securely and reliably. Hosting logs
                do not include content stored inside our apps.
              </p>
              <p>
                You can limit or delete cookies and similar storage in your browser settings. Google
                also provides a{' '}
                <a href="https://tools.google.com/dlpage/gaoptout" rel="noreferrer" target="_blank">
                  Google Analytics opt-out browser add-on
                </a>
                . Google&apos;s processing of information is further described in the{' '}
                <a href="https://policies.google.com/privacy" rel="noreferrer" target="_blank">
                  Google Privacy Policy
                </a>
                ,{' '}
                <a href="https://policies.google.com/technologies/partner-sites" rel="noreferrer" target="_blank">
                  how Google uses information from sites that use Google services
                </a>
                , and{' '}
                <a href="https://business.safety.google/privacy/" rel="noreferrer" target="_blank">
                  Google&apos;s commitments for Google products
                </a>
                . Questions about our use of these tools can be sent to the contact address in
                section 11.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-5 tracking-tight">
              6. Purchases
            </h2>
            <p>
              Purchases and subscriptions are processed through Apple's StoreKit and the App Store.
              Apple handles your payment credentials and billing relationship. Our apps receive the
              transaction or receipt information needed to verify a purchase and unlock the relevant
              features; Obsidian Ridge Labs does not receive your full payment-card number or billing
              address from Apple.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-5 tracking-tight">
              7. Security
            </h2>
            <div className="space-y-4">
              <p>
                Local content benefits from Apple's app sandbox, device passcode protections, and the
                security controls available on your device. Individual apps may add Face ID access or
                feature-specific encryption. Encryption details are stated per product rather than as
                a blanket claim across every kind of data.
              </p>
              <p>
                No device, network, or storage system is immune to every risk. Keep your operating
                system current, use a strong device passcode, and review optional sync settings in the
                relevant app.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-5 tracking-tight">
              8. Your controls and deletion
            </h2>
            <div className="space-y-4">
              <p>
                You can delete local content from the app or remove the app from your device. Where
                offered, you can turn off diagnostics, disable iCloud sync, or disconnect a Plaid-linked
                bank. Product help guides explain the controls available in each app. Website traffic
                measurement is described in section 5, including browser cookie controls and Google&apos;s
                Analytics opt-out add-on.
              </p>
              <p>
                Removing an app does not automatically delete information already managed by a service
                you enabled, such as iCloud, Plaid, or the App Store. Use the controls
                provided by that service where applicable.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-5 tracking-tight">
              9. Children's privacy
            </h2>
            <p>
              Our products are not directed to children under 13, and we do not knowingly request
              personal information from children through our apps. If you believe a child has provided
              information to us through a support interaction, contact us so we can review the request.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-5 tracking-tight">
              10. Policy changes
            </h2>
            <p>
              We may update this policy as products and optional services change. The effective date
              at the top of this page identifies the current version. Material product-specific changes
              will also be reflected in the relevant product documentation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-5 tracking-tight">
              11. Contact
            </h2>
            <p>
              Questions about this policy or a product's data handling can be sent to{' '}
              <a className="text-neon hover:underline" href="mailto:support@obsidianridgelabs.com">
                support@obsidianridgelabs.com
              </a>
              . Because app content is generally stored on your device rather than in an Obsidian Ridge
              Labs account, we may not possess a copy that we can retrieve for you.
            </p>
          </section>

          <nav className="pt-10 border-t border-white/10">
            <h2 className="text-lg font-semibold text-white mb-5">Related information</h2>
            <div className="flex flex-wrap gap-x-7 gap-y-4 text-sm">
              <Link to="/download" className="text-apple-blue hover:underline">App Collection</Link>
              <Link to="/help" className="text-apple-blue hover:underline">Product Help</Link>
              <Link to="/philosophy" className="text-apple-blue hover:underline">Our Philosophy</Link>
              <Link to="/terms" className="text-apple-blue hover:underline">Terms of Service</Link>
            </div>
          </nav>
        </div>
      </motion.article>
    </div>
  );
};

export default PrivacyPolicy;
