// CustomCursor.jsx
import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [imageHovered, setImageHovered] = useState(false); // State baru untuk hover pada gambar

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    const handleLinkHover = () => setLinkHovered(true);
    const handleLinkLeave = () => setLinkHovered(false);
    
    // Tambahkan event listener untuk hover pada gambar
    const handleImageHover = () => setImageHovered(true);
    const handleImageLeave = () => setImageHovered(false);

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    document.querySelectorAll('a, button, .clickable').forEach(el => {
      el.addEventListener('mouseenter', handleLinkHover);
      el.addEventListener('mouseleave', handleLinkLeave);
    });
    
    // Tambahkan event listener untuk semua gambar
    document.querySelectorAll('.icon-wrapper svg, img, .image, [role="img"]').forEach(el => {
      el.addEventListener('mouseenter', handleImageHover);
      el.addEventListener('mouseleave', handleImageLeave);
    });

    document.body.style.cursor = 'none';

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      
      document.querySelectorAll('a, button, .clickable').forEach(el => {
        el.removeEventListener('mouseenter', handleLinkHover);
        el.removeEventListener('mouseleave', handleLinkLeave);
      });
      
      // Hapus event listener untuk gambar saat component unmount
      document.querySelectorAll('.icon-wrapper svg, img, .image, [role="img"]').forEach(el => {
        el.removeEventListener('mouseenter', handleImageHover);
        el.removeEventListener('mouseleave', handleImageLeave);
      });
    };
  }, []);

  return (
    <>
      <div 
        className="custom-cursor-outer fixed pointer-events-none z-[100] transition-transform duration-300 mix-blend-difference"
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          // Ubah scale untuk memberikan efek tambahan saat hover pada gambar
          transform: `translate(-50%, -50%) scale(${
            clicked ? 0.8 : 
            imageHovered ? 2 : // Perbesar cursor saat hover pada gambar
            linkHovered ? 1.5 : 
            1
          })`,
        }}
      >
        <div className={`rounded-full bg-pink-200 w-6 h-6 ${
          clicked ? 'opacity-50' : 
          imageHovered ? 'opacity-70' : // Ubah opacity saat hover pada gambar (opsional)
          'opacity-100'
        } transition-all duration-300`}></div>
      </div>
    </>
  );
};

export default CustomCursor;