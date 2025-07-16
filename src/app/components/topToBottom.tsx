'use client';

import { ChevronUp } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const BottomToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed sm:bottom-6 sm:right-6 bottom-6 right-2 z-50 sm:p-3 p-1 rounded-md border border-main bg-white text-main shadow-lg transition-opacity duration-300 hover:scale-110 ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      aria-label="Scroll to top"
    >
      <ChevronUp className='w-5 h-5 sm:w-6 sm:h-6'/>
    </button>
  );
};

export default BottomToTop;