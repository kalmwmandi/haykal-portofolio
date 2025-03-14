import React from 'react';
import AnimatedSection from './AnimationSection';

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Mobile Layout (reversed order) */}
          <div className="block lg:hidden">
            <AnimatedSection
              enterAnimation="fade-in-right"
              exitAnimation="fade-out-left"
              threshold={0.2}
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 lg:mb-12 text-pink-200">
                ABOUT ME
              </h2>
              
              <div className="overflow-hidden rounded-lg shadow-lg mb-6 flex items-center justify-center">
                <div className="w-full max-h-76 relative">
                  <img 
                    src="/images/profile.png" 
                    alt="Your Formal Portrait" 
                    className="w-full object-cover object-center transform transition-all duration-700 hover:scale-105"
                    style={{
                      maxWidth: "60%",
                    }}
                  />
                </div>
              </div>
              
              <p className="text-lg sm:text-xl leading-relaxed mb-6 sm:mb-8">
              Bersemangat dalam membuat situs web dengan antarmuka yang menarik. Saya memiliki pengalaman bertahun-tahun dalam Pengembangan Web dan telah menyelesaikan beberapa proyek.
              </p>
              <a 
                href="/Januar_Haykal_CV.pdf" 
                download="Januar_Haykal_CV.pdf"
                className="px-8 py-4 bg-pink-200 text-black font-bold rounded-full transition-transform duration-300 transform hover:scale-105 hover:bg-white"
              >
                DOWNLOAD CV
              </a>
            </AnimatedSection>
          </div>
          
          {/* Desktop Layout (original order) */}
          <div className="hidden lg:block">
            <AnimatedSection
              enterAnimation="fade-in-right"
              exitAnimation="fade-out-left"
              threshold={0.2}
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 lg:mb-12 text-pink-200">
                ABOUT ME
              </h2>
              <p className="text-lg sm:text-xl leading-relaxed mb-6 sm:mb-8">
                Passionate about creating websites with beautiful interfaces. I have years of experience in Web Development with several projects completed.
              </p>
              <a 
                href="/Januar_Haykal_CV.pdf" 
                download="Januar_Haykal_CV.pdf"
                className="px-8 py-4 bg-pink-200 text-black font-bold rounded-full transition-transform duration-300 transform hover:scale-105 hover:bg-white"
              >
                DOWNLOAD CV
              </a>
            </AnimatedSection>
          </div>
          
          <div className="hidden lg:block">
            <AnimatedSection
              enterAnimation="fade-in-left"
              exitAnimation="fade-out-right"
              delay={0.3}
              threshold={0.2}
            >
              <div className="overflow-hidden rounded-lg shadow-lg h-full flex items-center justify-center">
                <div className="w-full h-full max-h-76 lg:max-h-full relative">
                  <img 
                    src="/images/prof.png" 
                    alt="Your Formal Portrait" 
                    className="w-full h-full object-cover object-center transform transition-all duration-700 hover:scale-105"
                    style={{
                      maxWidth: "60%",
                    }}
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;