"use client";
import React, { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { MenuOverlay } from "./MenuOverlay";

const Navlinks = [
  {
    title: "Inicio",
    path: "#inicio",
  },
  {
    title: "Sobre Mí",
    path: "#sobre-mi",
  },
  {
    title: "Proyectos",
    path: "#proyectos",
  },
  {
    title: "Contacto",
    path: "#contacto",
  },
];

export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setNavbarOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNavClick = (path: string) => {
    setNavbarOpen(false);
    if (path === "#inicio") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-black/30 backdrop-blur-md'
    }`}>
      <div className='max-w-8xl mx-auto px-4 py-4 flex items-center justify-between'>
        {/* Logo o título */}
        
        {/* Links para escritorio */}
        <div className="hidden md:flex md:justify-center flex-1">
          <ul className="flex space-x-12">
            {Navlinks.map((link, index) => (
              <li key={index}>
                <button
                  onClick={() => handleNavClick(link.path)}
                  className="text-slate-200 hover:text-white transition-colors text-lg"
                >
                  {link.title}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Botón menú móvil */}
        <div className='md:hidden'>
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className='flex items-center p-2 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 transition-colors'
            aria-label={navbarOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {navbarOpen ? (
              <XMarkIcon className='h-6 w-6' />
            ) : (
              <Bars3Icon className='h-6 w-6' />
            )}
          </button>
        </div>
      </div>

      {/* Overlay menú móvil */}
      {navbarOpen && (
        <div className="md:hidden">
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setNavbarOpen(false)} />
          <div className="fixed top-16 left-0 right-0 bg-black/90 backdrop-blur-md p-4">
            <ul className="flex flex-col space-y-4">
              {Navlinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNavClick(link.path)}
                    className="w-full text-left text-slate-200 hover:text-white transition-colors text-lg py-2 px-4 rounded-lg hover:bg-white/10"
                  >
                    {link.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};
