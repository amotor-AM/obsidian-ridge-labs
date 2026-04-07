import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO, { buildBreadcrumbs } from './SEO';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-10 md:pb-20 px-6 md:px-12 max-w-4xl mx-auto">
      <SEO
        title="Privacy Policy — Zero Telemetry by Design"
        description="Obsidian Ridge Labs privacy policy. We collect zero data — no analytics, no crash reports, no cloud sync. All AI processing is on-device. Read our full privacy commitments."
        noindex={false}
        jsonLd={[
          buildBreadcrumbs([
            { name: 'Home', url: '/' },
            { name: 'Privacy Policy', url: '/privacy' },
          ]),
        ]}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
          Privacy <span className="text-apple-gray">Policy.</span>
        </h1>
        
        <div className="text-gray-400 leading-relaxed space-y-8">
          <p className="text-gray-400 text-sm mb-8">Last Updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">1. Our Core Philosophy: Zero Telemetry</h2>
            <p className="text-gray-400 leading-relaxed">
              At Obsidian Ridge Labs, privacy is not a feature; it is the foundation of our architecture. We believe that your data belongs to you and should never leave your device. Therefore, we have designed our applications to operate entirely offline, utilizing on-device processing for all AI and data management tasks.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">2. Data Collection and Usage</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              <strong>We do not collect, store, or transmit any personal information, usage data, or analytics.</strong>
            </p>
            <ul className="list-disc pl-6 text-gray-400 space-y-2">
              <li><strong>No Analytics:</strong> We do not use third-party analytics SDKs to track your behavior.</li>
              <li><strong>No Crash Reports:</strong> We do not automatically collect crash logs. If an app crashes, the data stays on your phone.</li>
              <li><strong>No Cloud Sync:</strong> Your data is stored locally on your device using encrypted databases. We do not offer cloud synchronization, meaning we have no servers holding your information.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">3. Apple Store Kit and Purchases</h2>
            <p className="text-gray-400 leading-relaxed">
              While we do not collect personal data, we use Apple's StoreKit framework to process in-app purchases and subscriptions. When you make a purchase, the transaction is handled entirely by Apple. We do not have access to your payment information, credit card details, or billing address. We only receive an anonymous receipt from Apple to verify that a purchase was made and to unlock the corresponding features in the app.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">4. On-Device AI Processing</h2>
            <p className="text-gray-400 leading-relaxed">
              Our applications utilize embedded Large Language Models (LLMs) and local vector databases. When you input data (such as financial statements, journal entries, or audio recordings), the processing happens exclusively on your device's Neural Processing Unit (NPU) or CPU. The data is never sent to an external server for inference.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">5. Data Security</h2>
            <p className="text-gray-400 leading-relaxed">
              All data generated or stored by our applications is kept within the app's secure sandbox on your device. We utilize industry-standard encryption (such as AES-256) for local databases to ensure that even if your device is compromised, your data remains protected.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">6. Children's Privacy</h2>
            <p className="text-gray-400 leading-relaxed">
              Our applications do not collect any information from anyone, including children under the age of 13.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">7. Changes to This Privacy Policy</h2>
            <p className="text-gray-400 leading-relaxed">
              We may update our Privacy Policy from time to time. Any changes will be reflected on this page with an updated "Last Updated" date. Because we do not collect contact information, we cannot notify you directly of changes; we encourage you to review this policy periodically.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">8. Contact Us</h2>
            <p className="text-gray-400 leading-relaxed">
              If you have any questions or concerns about our privacy practices, please contact us at support@obsidianridgelabs.com.
            </p>
          </section>

          <nav className="mt-16 pt-8 border-t border-white/5">
            <h2 className="text-lg font-semibold text-white mb-4">Related Pages</h2>
            <div className="flex flex-wrap gap-6 text-sm">
              <Link to="/philosophy" className="text-apple-blue hover:underline">Our Philosophy</Link>
              <Link to="/terms" className="text-apple-blue hover:underline">Terms of Service</Link>
              <Link to="/blog/finance-app-red-flags" className="text-apple-blue hover:underline">The Cost of Free Finance Apps</Link>
              <Link to="/apps/vault" className="text-apple-blue hover:underline">Vault — Private Finance</Link>
            </div>
          </nav>
        </div>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicy;
