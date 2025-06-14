import { motion } from 'framer-motion';

const LoadingSpinner = () => {
    return (
        <div className="flex h-screen items-center justify-center">
            <motion.div
                className="relative h-16 w-16"
                animate={{
                    rotate: 360
                }}
                transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear"
                }}
            >
                <div className="absolute h-full w-full rounded-full border-4 border-primary-500/20"></div>
                <div className="absolute h-full w-full rounded-full border-4 border-transparent border-t-primary-500"></div>
            </motion.div>
        </div>
    );
};

export default LoadingSpinner; 