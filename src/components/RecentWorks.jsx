import React from 'react';
import AnimatedSection from './AnimationSection';

const projects = [
  {
    id: 1,
    title: 'E-Rapor School',
    description: 'E-Rapor adalah sistem berbasis web untuk manajemen dan penilaian laporan siswa digital.',
    image: '/images/projects/e-rapor.png',
  },
  {
    id: 2,
    title: 'Survey School',
    description: 'Aplikasi survei sekolah mengumpulkan dan menganalisis umpan balik siswa dan guru tentang pengalaman akademis dan sekolah.',
    image: '/images/projects/survey.png',
  },
  {
    id: 3,
    title: 'Role Classification',
    description: 'Sebuah aplikasi yang menetapkan peran magang berdasarkan nilai rapor siswa.',
    image: '/images/projects/class.png',
  },
];

const RecentWorks = () => {
  return (
    <section id="work" className="py-12 sm:py-16 md:py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <AnimatedSection
          enterAnimation="fade-in-up"
          exitAnimation="fade-out-down"
          threshold={0.2}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 md:mb-12 lg:mb-16 text-pink-200">
            RECENT<br className="md:block hidden" /><span className="md:hidden"> </span>WORKS
          </h2>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {projects.map((project, index) => (
            <AnimatedSection
              key={project.id}
              enterAnimation="fade-in-up"
              exitAnimation="fade-out-down"
              delay={index * 0.2}
              threshold={0.1}
            >
              <div className="group relative overflow-hidden rounded-lg border border-pink-200/20 hover:border-pink-200/50 transition-colors duration-300">
                {/* Fixed aspect ratio container */}
                <div className="relative pt-[56.25%] overflow-hidden"> {/* 16:9 aspect ratio */}
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Caption that slides up on hover */}
                  <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-80 p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 border-t border-pink-200/20">
                    <h3 className="text-lg font-bold text-white">{project.title}</h3>
                    <p className="text-pink-200/90 text-sm mt-1 line-clamp-3">{project.description}</p>
                  </div>
                </div>
                
                {/* Fixed title only (no description) */}
                <div className="p-3 bg-black bg-opacity-90 border-t border-pink-200/20">
                  <h3 className="text-lg font-bold text-white">{project.title}</h3>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentWorks;