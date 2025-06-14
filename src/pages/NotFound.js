import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gradient-radial from-dark-950 via-dark-900 to-dark-950 py-12">
            <Helmet>
                <title>404 • Heecshi</title>
                <meta property="og:title" content="404 • Heecshi" />
                <meta name="description" content="404 Page Not Found" />
                <meta property="og:description" content="404 Page Not Found" />
            </Helmet>
            
            <div className="container-custom mx-auto max-w-lg px-4">
                <div className="rounded-xl bg-dark-800/30 p-8 shadow-lg backdrop-blur-sm ring-1 ring-white/10">
                    <div className="text-center">
                        <h1 className="bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-clip-text text-6xl font-bold tracking-tight text-transparent">
                            404
                        </h1>
                        <h2 className="mt-4 text-2xl font-semibold text-white">
                            Page Not Found
                        </h2>
                        <p className="mt-2 text-gray-400">
                            The page you're looking for doesn't exist or has been moved.
                        </p>
                        
                        <div className="mt-8">
                            <Link 
                                to="/" 
                                className="inline-flex items-center justify-center rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-dark-900"
                            >
                                Back to Homepage
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 