import { motion } from 'framer-motion';

const features = [
    {
        name: 'Easy Setup',
        description: 'Get started in seconds with simple commands and intuitive interface.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
    },
    {
        name: 'Powerful Commands',
        description: 'Access a wide range of powerful commands to enhance your server.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
        ),
    },
    {
        name: 'Customizable',
        description: 'Customize settings and features to match your server\'s needs.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
        ),
    },
];

const FeatureShowcase = () => {
    return (
        <div className="relative overflow-hidden bg-dark-900 py-24 sm:py-32">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-y-0 left-0 w-[200%] animate-[moveBackground_8s_linear_infinite] bg-gradient-conic from-primary-500/40 via-transparent to-transparent"></div>
            </div>
            
            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto max-w-2xl text-center"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Everything you need</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        Heecshi comes packed with all the features you need to make your Discord server more engaging and fun.
                    </p>
                </motion.div>

                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative backdrop-blur-sm"
                            >
                                <div className="relative rounded-2xl border border-primary-500/10 bg-dark-800/50 p-8 transition-all duration-300 hover:bg-dark-800/70 hover:shadow-lg hover:shadow-primary-500/5">
                                    <dt className="flex items-center gap-4">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-500 text-white ring-1 ring-primary-500/30 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md group-hover:shadow-primary-500/20">
                                            {feature.icon}
                                        </div>
                                        <span className="text-lg font-semibold text-white">{feature.name}</span>
                                    </dt>
                                    <dd className="mt-4 text-base text-gray-400">{feature.description}</dd>
                                </div>
                            </motion.div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
};

export default FeatureShowcase; 