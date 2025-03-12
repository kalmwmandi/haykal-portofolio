//Experience.jsx
import React from 'react';
import AnimatedSection from './AnimationSection';

const experiences = [
  {
    id: 1,
    company: 'Adobe',
    position: 'MV Maker',
    period: '5/20 - 2/22',
    description: 'MV Maker adalah alat atau perangkat lunak yang digunakan untuk membuat video musik dengan menggabungkan audio, klip video, gambar, dan efek untuk menghasilkan produk akhir yang menarik secara visual.'
  },
  {
    id: 2,
    company: 'Creative Agency',
    position: 'Web Developer',
    period: '3/22 - Present',
    description: 'Bertanggung jawab untuk membuat situs web khusus untuk klien, menerapkan desain responsif, dan mengoptimalkan kinerja situs web.'
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-12 sm:py-16 md:py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <AnimatedSection
          enterAnimation="fade-in-up"
          exitAnimation="fade-out-up"
          threshold={0.2}
          rootMargin="-50px 0px"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 sm:mb-12 md:mb-16 text-pink-200">
            EXPERIENCE
          </h2>
        </AnimatedSection>
        
        <div className="space-y-8 sm:space-y-12 md:space-y-16">
          {experiences.map((exp, index) => (
            <AnimatedSection
              key={exp.id}
              enterAnimation="fade-in-up"
              exitAnimation="fade-out-up"
              delay={index * 0.2}
              threshold={0.1}
              rootMargin="-50px 0px"
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 pb-6 sm:pb-8 border-b border-pink-200 border-opacity-20">
                <div className="mb-2 md:mb-0">
                  <h3 className="text-xl sm:text-2xl font-bold text-pink-200">{exp.company}</h3>
                  <div className="flex flex-wrap justify-between md:block">
                    <p className="text-base sm:text-lg">{exp.position}</p>
                    <p className="text-base sm:text-lg opacity-75">{exp.period}</p>
                  </div>
                </div>
                <div className="md:col-span-3">
                  <p className="text-base sm:text-lg md:text-xl leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;