import React, { useState } from 'react';

const commandCategories = {
  General: [
    { name: '/help', description: 'Shows all available commands and their usage', syntax: '/help [command]' },
    { name: '/ping', description: 'Check bot latency and response time', syntax: '/ping' },
    { name: '/info', description: 'Get detailed bot information and statistics', syntax: '/info' },
    { name: '/invite', description: 'Get bot invite link and support server', syntax: '/invite' },
  ],
  Moderation: [
    { name: '/kick', description: 'Kick a member from the server', syntax: '/kick @user [reason]' },
    { name: '/ban', description: 'Ban a member from the server', syntax: '/ban @user [reason] [days]' },
    { name: '/mute', description: 'Mute a member temporarily', syntax: '/mute @user [duration] [reason]' },
    { name: '/clear', description: 'Clear messages in a channel', syntax: '/clear [amount]' },
  ],
  Fun: [
    { name: '/8ball', description: 'Ask the magic 8-ball a question', syntax: '/8ball <question>' },
    { name: '/joke', description: 'Get a random joke from various categories', syntax: '/joke [category]' },
    { name: '/meme', description: 'Get a random meme from popular subreddits', syntax: '/meme [subreddit]' },
    { name: '/poll', description: 'Create an interactive poll', syntax: '/poll <question> [options]' },
  ],
  Music: [
    { name: '/play', description: 'Play a song or playlist', syntax: '/play <song/url>' },
    { name: '/skip', description: 'Skip the current song', syntax: '/skip' },
    { name: '/queue', description: 'View the current music queue', syntax: '/queue [page]' },
    { name: '/nowplaying', description: 'Show currently playing song', syntax: '/nowplaying' },
  ],
};

export default function Commands() {
  const [activeCategory, setActiveCategory] = useState('General');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCommands = searchTerm
    ? Object.values(commandCategories)
        .flat()
        .filter(
          (cmd) =>
            cmd.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            cmd.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
    : commandCategories[activeCategory];

  return (
    <div className="min-h-screen bg-gradient-radial from-dark-950 via-dark-900 to-dark-950 py-12">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center">
          <h1 className="bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
            Bot Commands
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            Explore all available commands and their usage
          </p>
        </div>

        {/* Search Bar */}
        <div className="mt-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search commands..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-lg bg-dark-800 px-4 py-2 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <svg
              className="absolute right-3 top-2.5 h-5 w-5 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Category Navigation */}
        {!searchTerm && (
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {Object.keys(commandCategories).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative overflow-hidden rounded-lg px-4 py-2 font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-primary-500 text-white'
                    : 'bg-dark-800 text-gray-400 hover:bg-dark-700 hover:text-white'
                }`}
              >
                {activeCategory === category && (
                  <span className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 animate-pulse-slow" />
                )}
                <span className="relative">{category}</span>
              </button>
            ))}
          </div>
        )}

        {/* Commands Grid */}
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {filteredCommands.map((command, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-gradient-to-b from-dark-800 to-dark-900 p-6 transition-all hover:shadow-lg hover:shadow-primary-500/10"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-accent-500/5 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <h3 className="font-mono text-xl font-semibold text-primary-400">
                  {command.name}
                </h3>
                <p className="mt-2 text-gray-300">{command.description}</p>
                <div className="mt-3 rounded-md bg-dark-950/50 p-2">
                  <code className="text-sm text-accent-400">{command.syntax}</code>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {searchTerm && filteredCommands.length === 0 && (
          <div className="mt-8 text-center text-gray-400">
            No commands found matching "{searchTerm}"
          </div>
        )}
      </div>
    </div>
  );
} 