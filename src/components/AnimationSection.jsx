//AnimationSection.jsx
import React, { useRef, useEffect } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const AnimatedSection = ({ 
  children, 
  className = '', 
  enterAnimation = 'fade-in-up',
  exitAnimation = 'fade-out-up',
  delay = 0,
  threshold = 0.1,
  rootMargin = '0px',
  animateOnce = false,
}) => {
  const [ref, isVisible, shouldAnimate, hasAnimated] = useScrollAnimation({ 
    threshold, 
    rootMargin,
    animateOnce 
  });
  
  const contentRef = useRef(null);
  
  useEffect(() => {
    // Apply animations via direct DOM manipulation to ensure proper timing
    const element = contentRef.current;
    if (!element) return;
    
    if (shouldAnimate) {
      // Remove any existing animation classes
      element.classList.remove(`animate-${enterAnimation}`);
      element.classList.remove(`animate-${exitAnimation}`);
      
      // Force a reflow to ensure animations restart
      void element.offsetWidth;
      
      // Add the appropriate animation class
      element.classList.add(isVisible ? `animate-${enterAnimation}` : `animate-${exitAnimation}`);
      
      // Apply animation delay
      element.style.animationDelay = `${delay}s`;
    }
  }, [isVisible, shouldAnimate, enterAnimation, exitAnimation, delay]);
  
  return (
    <div ref={ref} className={className}>
      <div 
        ref={contentRef}
        className="w-full h-full"
        style={{ 
          opacity: hasAnimated ? null : 0,
          animationFillMode: 'forwards'
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default AnimatedSection;