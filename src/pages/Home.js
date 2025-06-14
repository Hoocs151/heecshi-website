import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-radial from-dark-950 via-dark-900 to-dark-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 bg-gradient-conic from-primary-500/20 via-accent-500/20 to-primary-500/20 opacity-30" />
        <div className="container-custom relative">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-7xl">
              Your Ultimate Discord Bot
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Enhance your Discord server with powerful moderation tools, engaging features,
              and seamless automation. Built for communities that demand the best.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="https://discord.com/oauth2/authorize?your-bot-id"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center overflow-hidden rounded-lg bg-primary-500 px-8 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-dark-900"
              >
                <span className="absolute -end-full transition-all group-hover:end-4">
                  <svg
                    className="h-5 w-5 rtl:rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
                <span className="text-sm font-medium transition-all group-hover:me-4">
                  Invite Bot
                </span>
              </a>
              <Link
                to="/commands"
                className="text-sm font-semibold leading-6 text-gray-300 hover:text-white"
              >
                View Commands <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { label: 'Active Servers', value: '1,000+' },
              { label: 'Total Users', value: '100,000+' },
              { label: 'Commands', value: '50+' },
              { label: 'Uptime', value: '99.9%' },
            ].map((stat, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg bg-dark-800/50 p-6 backdrop-blur-sm"
              >
                <div className="animate-float text-center">
                  <div className="text-2xl font-bold text-primary-400">{stat.value}</div>
                  <div className="mt-2 text-sm text-gray-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="mb-12 text-center text-3xl font-bold text-white">
            Why Choose Our Bot?
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: 'Advanced Moderation',
                description: 'Keep your server safe with powerful moderation tools',
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
                  </svg>
                ),
              },
              {
                title: 'Custom Commands',
                description: 'Create and customize commands for your server',
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                ),
              },
              {
                title: 'Auto Roles',
                description: 'Automate role management for new members',
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-b from-dark-800 to-dark-900 p-8 shadow-lg transition-all hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-accent-500/10 opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-4 inline-flex rounded-lg bg-primary-500/10 p-3 text-primary-400">
                    {feature.icon}
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-white">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary-500 to-accent-500 px-8 py-16 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-accent-600/20 backdrop-blur-sm" />
            <div className="relative text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to enhance your Discord server?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg text-white/90">
                Join thousands of servers already using our bot to create better communities.
              </p>
              <div className="mt-10 flex justify-center gap-x-6">
                <a
                  href="https://discord.com/oauth2/authorize?your-bot-id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-white px-8 py-3 text-sm font-semibold text-primary-600 shadow-sm hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-500"
                >
                  Get Started Now
                </a>
                <Link
                  to="/features"
                  className="text-sm font-semibold leading-6 text-white hover:text-white/90"
                >
                  Learn More <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 