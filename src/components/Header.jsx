//Header.jsx
import React, { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Menonaktifkan scroll saat menu terbuka
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navItems = ['Work', 'About', 'Experience', 'Skills', 'Services'];

  return (
    <>
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-3 md:py-4 bg-black bg-opacity-80 backdrop-blur-sm' : 'py-4 md:py-6'}`}>
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          <div className="text-pink-200 text-xl md:text-2xl font-bold tracking-wider">
            KAL
          </div>
          
          {/* Mobile menu button dengan animasi - tetap terlihat dan berfungsi */}
          <button 
            className="md:hidden text-pink-200 focus:outline-none relative z-50 w-8 h-8 flex items-center justify-center" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              // Tombol X (close) yang lebih jelas
              <div className="relative w-6 h-6">
                <span className="block absolute h-0.5 w-6 bg-pink-200 transform transition-all duration-300 ease-in-out rotate-45 top-3"></span>
                <span className="block absolute h-0.5 w-6 bg-pink-200 transform transition-all duration-300 ease-in-out -rotate-45 top-3"></span>
              </div>
            ) : (
              // Tombol hamburger
              <div className="relative w-6 h-6">
                <span className="block absolute h-0.5 w-6 bg-pink-200 transform transition-all duration-300 ease-in-out top-1"></span>
                <span className="block absolute h-0.5 w-6 bg-pink-200 transform transition-all duration-300 ease-in-out top-3"></span>
                <span className="block absolute h-0.5 w-6 bg-pink-200 transform transition-all duration-300 ease-in-out top-5"></span>
              </div>
            )}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-4 lg:space-x-8">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-pink-200 hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Mobile menu fullscreen dengan animasi */}
      <div 
        className={`fixed inset-0 bg-black z-40 md:hidden transition-all duration-500 ease-in-out ${
          menuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className={`container mx-auto px-4 h-full flex flex-col justify-center transition-all duration-500 transform ${
          menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'
        }`}>
          <nav>
            <ul className="flex flex-col space-y-6">
              {navItems.map((item, index) => (
                <li 
                  key={index}
                  className="transform transition-all duration-300 ease-in-out"
                  style={{ transitionDelay: `${100 + (index * 50)}ms` }}
                >
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-pink-200 hover:text-white transition-colors duration-300 block py-2 text-3xl font-light tracking-wider"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;