import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-radial from-dark-950 via-dark-900 to-dark-950 py-12">
      <div className="container-custom mx-auto max-w-4xl px-4">
        {/* Header */}
        <div className="text-center">
          <h1 className="bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Content */}
        <div className="mt-12">
          <div className="rounded-xl bg-dark-800/30 p-8 shadow-lg backdrop-blur-sm ring-1 ring-white/10">
            <div className="prose prose-lg prose-invert mx-auto max-w-none">
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-indigo-300">1. Information We Collect</h2>
                <p className="mt-4 text-gray-300">
                  We collect certain information to provide and improve Heecshi's Discord bot services:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-300">
                  <li>Server IDs and configurations</li>
                  <li>Command usage statistics</li>
                  <li>User IDs for bot functionality</li>
                  <li>Custom settings and preferences</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-indigo-300">2. How We Use Your Information</h2>
                <p className="mt-4 text-gray-300">
                  We use the collected information for:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-300">
                  <li>Providing and maintaining Heecshi's services</li>
                  <li>Improving user experience</li>
                  <li>Analyzing usage patterns</li>
                  <li>Preventing abuse and ensuring security</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-indigo-300">3. Data Storage and Security</h2>
                <p className="mt-4 text-gray-300">
                  We implement industry-standard security measures to protect your data:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-300">
                  <li>Encrypted data transmission</li>
                  <li>Secure server infrastructure</li>
                  <li>Regular security audits</li>
                  <li>Limited staff access to data</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-indigo-300">4. Data Sharing</h2>
                <p className="mt-4 text-gray-300">
                  We do not sell, trade, or transfer your information to third parties. Heecshi may share data:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-300">
                  <li>When required by law</li>
                  <li>To protect our rights and safety</li>
                  <li>With your explicit consent</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-indigo-300">5. Your Rights</h2>
                <p className="mt-4 text-gray-300">
                  As a Heecshi user, you have the right to:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-300">
                  <li>Access your personal data</li>
                  <li>Request data deletion</li>
                  <li>Opt-out of data collection</li>
                  <li>Update your preferences</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-indigo-300">6. Data Retention</h2>
                <p className="mt-4 text-gray-300">
                  We retain data only as long as necessary to provide our services or as required by law. You can request data deletion at any time through our support server.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-indigo-300">7. Changes to Privacy Policy</h2>
                <p className="mt-4 text-gray-300">
                  We may update this policy periodically. We will notify users of any material changes through Heecshi's Discord support server or website.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-indigo-300">8. Contact Us</h2>
                <p className="mt-4 text-gray-300">
                  For privacy-related questions or concerns about Heecshi, please contact us through our support server or email.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 