
import React, { useEffect, useRef } from 'react';

const StarryBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createStars = () => {
      // Clear existing stars
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }

      const width = window.innerWidth;
      const height = window.innerHeight * 3; // Make it 3x the viewport height
      const starCount = Math.floor((width * height) / 5000); // Adjust density as needed

      for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        const size = Math.random();
        let starClass = 'star star-small';
        
        if (size > 0.9) {
          starClass = 'star star-large';
        } else if (size > 0.7) {
          starClass = 'star star-medium';
        }
        
        star.className = starClass;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 3}s`;
        
        container.appendChild(star);
      }
    };

    createStars();
    window.addEventListener('resize', createStars);

    return () => {
      window.removeEventListener('resize', createStars);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ height: '300vh' }} // Make it 3x the viewport height
    />
  );
};

export default StarryBackground;
