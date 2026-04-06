import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO, { buildBreadcrumbs } from './SEO';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 md:px-12 max-w-4xl mx-auto">
      <SEO
        title="Terms of Service"
        description="Terms of Service for Obsidian Ridge Labs applications. Covers in-app purchases via Apple StoreKit, intellectual property, privacy commitments, and limitation of liability."
        noindex={false}
        jsonLd={[
          buildBreadcrumbs([
            { name: 'Home', url: '/' },
            { name: 'Terms of Service', url: '/terms' },
          ]),
        ]}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
          Terms of <span className="text-apple-gray">Service.</span>
        </h1>
        
        <div className="text-gray-400 leading-relaxed space-y-8">
          <p className="text-gray-400 text-sm mb-8">Last Updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-400 leading-relaxed">
              By downloading, installing, or using any application ("App") developed by Obsidian Ridge Labs ("we", "us", or "our"), you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use our applications.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">2. Apple Store Kit and Purchases</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Our applications may offer in-app purchases or subscriptions. All such transactions are processed securely through Apple's StoreKit framework.
            </p>
            <ul className="list-disc pl-6 text-gray-400 space-y-2">
              <li>Payment will be charged to your Apple ID account at the confirmation of purchase.</li>
              <li>Subscriptions automatically renew unless canceled at least 24 hours before the end of the current period.</li>
              <li>Your account will be charged for renewal within 24 hours prior to the end of the current period.</li>
              <li>You can manage and cancel your subscriptions by going to your account settings on the App Store after purchase.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">3. Privacy and Data Security</h2>
            <p className="text-gray-400 leading-relaxed">
              Obsidian Ridge Labs is built on a foundation of absolute privacy. We do not track, collect, or store any of your personal data on our servers. All processing, including AI inference, occurs locally on your device. For more details, please refer to our Privacy Policy.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">4. Intellectual Property</h2>
            <p className="text-gray-400 leading-relaxed">
              All content, features, and functionality within our applications, including but not limited to code, design, text, and graphics, are the exclusive property of Obsidian Ridge Labs and are protected by international copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">5. Limitation of Liability</h2>
            <p className="text-gray-400 leading-relaxed">
              To the maximum extent permitted by law, Obsidian Ridge Labs shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of our applications.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">6. Changes to Terms</h2>
            <p className="text-gray-400 leading-relaxed">
              We reserve the right to modify these terms at any time. We will notify users of any material changes by updating the "Last Updated" date at the top of this document. Your continued use of the applications after such modifications constitutes your acceptance of the updated terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">7. Contact Us</h2>
            <p className="text-gray-400 leading-relaxed">
              If you have any questions about these Terms of Service, please contact us at support@obsidianridgelabs.com.
            </p>
          </section>

          <nav className="mt-16 pt-8 border-t border-white/5">
            <h2 className="text-lg font-semibold text-white mb-4">Related Pages</h2>
            <div className="flex flex-wrap gap-6 text-sm">
              <Link to="/privacy" className="text-apple-blue hover:underline">Privacy Policy</Link>
              <Link to="/philosophy" className="text-apple-blue hover:underline">Our Philosophy</Link>
              <Link to="/apps/vault" className="text-apple-blue hover:underline">Vault — Private Finance</Link>
              <Link to="/apps/echo" className="text-apple-blue hover:underline">Echo Chamber — Transcription</Link>
            </div>
          </nav>
        </div>
      </motion.div>
    </div>
  );
};

export default TermsOfService;
