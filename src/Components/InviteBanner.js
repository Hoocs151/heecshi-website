import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const InviteBanner = () => {
    return ( 
        <div className="relative overflow-hidden bg-gradient-to-r from-primary-600 to-accent-600 py-16">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -left-4 top-1/2 h-56 w-56 -translate-y-1/2 transform rounded-full bg-white/10 blur-3xl"></div>
                <div className="absolute -right-4 top-1/2 h-56 w-56 -translate-y-1/2 transform rounded-full bg-white/10 blur-3xl"></div>
            </div>
            
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
                    <div className="flex-1 space-y-4">
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
                        >
                            Ready to enhance your Discord server?
                        </motion.h2>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-lg text-white/90"
                        >
                            Add Heecshi to your server and unlock powerful features for free.
                        </motion.p>
                    </div>
                    
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex-shrink-0"
                    >
                        <Link 
                            to='/invite' 
                            className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-white px-8 py-3 text-lg font-medium text-primary-600 shadow-xl transition-all duration-300 hover:bg-primary-50 hover:text-primary-700 hover:shadow-primary-500/25"
                        >
                            <span className="relative flex items-center gap-2">
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" 
                                    fill="currentColor" 
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
                                </svg>
                                Invite Bot
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </span>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
 
export default InviteBanner;