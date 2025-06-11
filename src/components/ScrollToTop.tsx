"use client";
import { useState, useEffect } from 'react';
import { ChevronUpIcon } from '@heroicons/react/24/solid';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Mostrar el botón cuando el usuario haya scrolleado más de 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 rounded-full bg-[#121212] text-white shadow-lg hover:bg-gray-800 transition-all duration-300 z-50"
          aria-label="Volver arriba"
        >
          <ChevronUpIcon className="h-6 w-6" />
        </button>
      )}
    </>
  );
}; 