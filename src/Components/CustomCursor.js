import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
        const checkTouchDevice = () => {
            setIsTouchDevice(('ontouchstart' in window) || (navigator.maxTouchPoints > 0));
        };

        checkTouchDevice();
        window.addEventListener('resize', checkTouchDevice);

        return () => {
            window.removeEventListener('resize', checkTouchDevice);
        };
    }, []);

    useEffect(() => {
        if (isTouchDevice) return;

        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseEnter = (e) => {
            if (e.target.closest('a, button, [role="button"]')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updateMousePosition);
        document.addEventListener('mouseover', handleMouseEnter);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            document.removeEventListener('mouseover', handleMouseEnter);
        };
    }, [isTouchDevice]);

    if (isTouchDevice) return null;

    return (
        <>
            <motion.div
                className="pointer-events-none fixed left-0 top-0 z-50 h-4 w-4 rounded-full bg-primary-400/30 backdrop-blur-sm hidden md:block"
                animate={{
                    x: mousePosition.x - 8,
                    y: mousePosition.y - 8,
                    scale: isHovering ? 2.5 : 1,
                }}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 28,
                    mass: 0.5,
                }}
            />
            <motion.div
                className="pointer-events-none fixed left-0 top-0 z-50 h-2 w-2 rounded-full bg-primary-400 hidden md:block"
                animate={{
                    x: mousePosition.x - 4,
                    y: mousePosition.y - 4,
                    scale: isHovering ? 0 : 1,
                }}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 28,
                    mass: 0.5,
                }}
            />
        </>
    );
};

export default CustomCursor; 