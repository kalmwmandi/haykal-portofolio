//hooks/useScrollAnimation
import { useState, useEffect, useRef } from 'react';

const useScrollAnimation = (options = {}) => {
  const { 
    threshold = 0.1, 
    rootMargin = '0px',
    animateOnce = false 
  } = options;
  
  const [state, setState] = useState({
    isVisible: false,
    hasAnimated: false,
    shouldAnimate: false
  });
  
  const ref = useRef(null);

  useEffect(() => {
    const currentElement = ref.current;
    if (!currentElement || typeof window === 'undefined') return;

    // Start with element invisible via direct style manipulation
    // This prevents any flash of content before JS loads
    currentElement.style.opacity = '0';
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // When element enters viewport
          if (!state.hasAnimated || !animateOnce) {
            // Small delay to ensure opacity:0 is applied first
            setTimeout(() => {
              setState({
                isVisible: true,
                hasAnimated: true,
                shouldAnimate: true
              });
              
              // Remove the inline opacity so CSS animations can take effect
              currentElement.style.removeProperty('opacity');
            }, 50);
          }
          
          if (animateOnce) {
            observer.unobserve(currentElement);
          }
        } else {
          // When element exits viewport
          if (state.hasAnimated && !animateOnce) {
            setState(prev => ({
              ...prev,
              isVisible: false,
              shouldAnimate: true
            }));
          }
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(currentElement);

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, rootMargin, animateOnce, state.hasAnimated]);

  return [ref, state.isVisible, state.shouldAnimate, state.hasAnimated];
};

export default useScrollAnimation;