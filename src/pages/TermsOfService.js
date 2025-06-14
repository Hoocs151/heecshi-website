import React from 'react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-radial from-dark-950 via-dark-900 to-dark-950 py-12">
      <div className="container-custom mx-auto max-w-4xl px-4">
        {/* Header */}
        <div className="text-center">
          <h1 className="bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
            Terms of Service
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
                <h2 className="text-2xl font-bold text-indigo-300">1. Acceptance of Terms</h2>
                <p className="mt-4 text-gray-300">
                  By accessing and using our Discord bot (Heecshi) and website, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-indigo-300">2. Use License</h2>
                <p className="mt-4 text-gray-300">
                  We grant you a limited, non-exclusive, non-transferable license to use Heecshi for your Discord servers, subject to these Terms.
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-300">
                  <li>You may not use the bot for any illegal purposes</li>
                  <li>You may not attempt to copy, modify, or reverse engineer the bot</li>
                  <li>You may not use the bot to distribute malicious content</li>
                  <li>You may not sell, lease, or monetize the bot's services</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-indigo-300">3. Service Availability</h2>
                <p className="mt-4 text-gray-300">
                  While we strive to provide uninterrupted service, Heecshi may need to temporarily suspend access for maintenance or updates. We are not liable for any bot downtime or data loss.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-indigo-300">4. User Responsibilities</h2>
                <p className="mt-4 text-gray-300">
                  You are responsible for:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-300">
                  <li>Maintaining the security of your Discord server</li>
                  <li>Using Heecshi's features appropriately and legally</li>
                  <li>Ensuring all server members comply with these terms</li>
                  <li>Reporting any security vulnerabilities or abuse</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-indigo-300">5. Limitations</h2>
                <p className="mt-4 text-gray-300">
                  We reserve the right to:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-300">
                  <li>Modify or discontinue any feature without notice</li>
                  <li>Restrict or terminate access for TOS violations</li>
                  <li>Update these terms at any time</li>
                  <li>Set and modify rate limits and usage quotas</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-indigo-300">6. Contact</h2>
                <p className="mt-4 text-gray-300">
                  If you have any questions about these Terms, please contact us through our support server.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 