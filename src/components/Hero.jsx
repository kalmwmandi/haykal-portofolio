//Hero.jsx
import React, { useEffect, useRef } from 'react';
import AnimatedSection from './AnimationSection';

const Hero = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    // Clear any existing content
    if (headingRef.current) {
      headingRef.current.innerHTML = '';
      
      // Create individual spans for "JANUAR" and "HAYKAL" separately
      const words = ["JANUAR", "HAYKAL"];
      
      words.forEach((word, wordIndex) => {
        // For the space between words
        if (wordIndex > 0) {
          const spaceSpan = document.createElement('span');
          spaceSpan.innerHTML = '&nbsp;';
          spaceSpan.className = 'inline-block opacity-0 animate-fade-in';
          spaceSpan.style.animationDelay = `${5 * 0.05}s`; // Arbitrary delay for space
          headingRef.current.appendChild(spaceSpan);
        }
        
        // For each letter in the word
        const letters = word.split('');
        letters.forEach((letter, letterIndex) => {
          const span = document.createElement('span');
          span.textContent = letter;
          // Calculate total index for the animation delay
          const totalIndex = wordIndex === 0 ? letterIndex : letters.length + 1 + letterIndex;
          span.style.animationDelay = `${totalIndex * 0.05}s`;
          span.className = 'inline-block opacity-0 animate-fade-in';
          headingRef.current.appendChild(span);
        });
      });
    }
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center">
          <AnimatedSection
            enterAnimation="fade-in-right"
            exitAnimation="fade-out-left"
            threshold={0.3}
            className="order-2 lg:order-1 text-center lg:text-left flex flex-col justify-center"
          >
            <h1 
              ref={headingRef}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-none mb-4 sm:mb-6 text-pink-200 overflow-hidden whitespace-nowrap"
            >
              JANUAR HAYKAL
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 md:mb-8 opacity-0 animate-slide-up" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
              WEB DEVELOPER
            </h2>
            <p className="text-base sm:text-lg opacity-0 animate-slide-up" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
              React • DJango • Vue • UI/UX
            </p>
          </AnimatedSection>
          
          <AnimatedSection
            enterAnimation="fade-in-left"
            exitAnimation="fade-out-right"
            delay={0.3}
            threshold={0.3}
            className="order-1 lg:order-2 mb-8 lg:mb-0 flex items-center justify-center"
          >
            <div className="flex justify-center items-center h-full">
            <img 
              src="/images/formal.png" 
              alt="Profile" 
              className="transform transition-all duration-700 hover:scale-105 
                        max-w-[80%] max-h-[50vh] 
                        sm:max-w-[70%] sm:max-h-[60vh] 
                        md:max-w-[60%] md:max-h-[65vh] 
                        lg:max-w-[100%] lg:max-h-[70vh]" 
              style={{
                objectFit: "contain",
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
                maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)'
              }}
            />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Hero;