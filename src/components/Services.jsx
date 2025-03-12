//Service.jsx
import React from 'react';
import AnimatedSection from './AnimationSection';

const services = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Membangun aplikasi web khusus, berskala, dan efisien yang disesuaikan dengan kebutuhan Anda.'
  },
  {
    id: 2,
    title: 'Web Design',
    description: 'Membuat desain situs web yang menarik secara visual dan ramah pengguna untuk pengalaman yang optimal.'
  },
  {
    id: 3,
    title: 'Responsive Web Design',
    description: 'Memastikan situs web Anda tampak hebat dan berfungsi lancar di semua perangkat dan ukuran layar.'
  },
  {
    id: 4,
    title: 'SEO (Web Pages)',
    description: 'Mengoptimalkan situs web Anda agar mendapat peringkat lebih tinggi di mesin pencari dan menarik lebih banyak pengunjung.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection
          enterAnimation="fade-in-up"
          exitAnimation="fade-out-down"
          threshold={0.2}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 sm:mb-12 md:mb-16 text-pink-200">
            SERVICES
          </h2>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          {services.map((service, index) => (
            <AnimatedSection
              key={service.id}
              enterAnimation={index % 2 === 0 ? "fade-in-right" : "fade-in-left"}
              exitAnimation={index % 2 === 0 ? "fade-out-left" : "fade-out-right"}
              delay={index * 0.2}
              threshold={0.1}
            >
              <div className="p-4 sm:p-6 md:p-8 border border-pink-200 border-opacity-20 rounded-lg transition-all duration-500 hover:border-opacity-100 hover:transform hover:scale-105 h-full flex flex-col">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4 text-pink-200">{service.title}</h3>
                <p className="text-sm sm:text-base md:text-xl leading-relaxed">{service.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;