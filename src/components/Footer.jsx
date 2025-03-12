import React from 'react';
import AnimatedSection from './AnimationSection';

const Footer = () => {
  return (
    <footer className="py-12 sm:py-16 md:py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between gap-8 md:gap-4 lg:gap-8">
          <AnimatedSection
            enterAnimation="fade-in-right"
            exitAnimation="fade-out-left"
            threshold={0.2}
          >
            <div className="mb-8 sm:mb-0">
              <h3 className="text-xl sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-pink-200">Contact</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <a href="mailto:januarhaykal7@gmail.com" className="text-base sm:text-lg hover:text-white transition-colors duration-300">
                    januarhaykal7@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+6282118025523" className="text-base sm:text-lg hover:text-white transition-colors duration-300">
                    +62 821-1802-5523
                  </a>
                </li>
              </ul>
            </div>
          </AnimatedSection>
          
          <AnimatedSection
            enterAnimation="fade-in-left"
            exitAnimation="fade-out-right"
            delay={0.2}
            threshold={0.2}
          >
            <div className="mb-8 sm:mb-0">
              <h3 className="text-xl sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-pink-200">Social</h3>
              <ul className="flex space-x-6">
                <li>
                  <a href="#" className="hover:text-white transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span className="sr-only">GitHub</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.628 0-12 5.373-12 12s5.372 12 12 12 12-5.373 12-12-5.372-12-12-12zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073-.244-.563-.497-1.125-.767-1.68 2.31-1 4.165-2.358 5.548-4.082 1.35 1.594 2.197 3.619 2.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68-1.016-1.861-2.178-3.676-3.488-5.438.779-.197 1.591-.314 2.431-.314 2.275 0 4.368.779 6.043 2.072zm-10.516-.993c1.331 1.742 2.511 3.538 3.537 5.381-2.43.715-5.331 1.082-8.684 1.105.692-2.835 2.601-5.193 5.147-6.486zm-5.44 8.834l.013-.256c3.849-.005 7.169-.448 9.95-1.322.233.475.456.952.67 1.432-3.38 1.057-6.165 3.222-8.337 6.48-1.432-1.719-2.296-3.927-2.296-6.334zm3.829 7.81c1.969-3.088 4.482-5.098 7.598-6.027.928 2.42 1.609 4.91 2.043 7.46-3.349 1.291-6.953.666-9.641-1.433zm11.586.43c-.438-2.353-1.08-4.653-1.92-6.897 1.876-.265 3.94-.196 6.199.196-.437 2.786-2.028 5.192-4.279 6.701z" />
                    </svg>
                    <span className="sr-only">Dribbble</span>
                  </a>
                </li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
        
        <AnimatedSection
          enterAnimation="fade-in-up"
          exitAnimation="fade-out-down"
          delay={0.4}
          threshold={0.1}
        >
          <div className="mt-8 sm:mt-12 md:mt-16 pt-6 sm:pt-8 border-t border-pink-200 border-opacity-20 text-center">
            <p className="text-sm sm:text-base md:text-lg">&copy; {new Date().getFullYear()} Urkal. All rights reserved.</p>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  );
};

export default Footer;