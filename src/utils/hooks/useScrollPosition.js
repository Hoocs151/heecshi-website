import { useState, useEffect } from 'react';

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('up');
  const [prevScroll, setPrevScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollPosition(currentScrollY);
      
      if (currentScrollY > prevScroll) {
        setScrollDirection('down');
      } else if (currentScrollY < prevScroll) {
        setScrollDirection('up');
      }
      
      setPrevScroll(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScroll]);

  return {
    scrollPosition,
    scrollDirection,
    scrollPercentage: Math.min(
      (scrollPosition / (document.documentElement.scrollHeight - window.innerHeight)) * 100,
      100
    ),
  };
};

export default useScrollPosition; 