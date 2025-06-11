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

  // Cerrar el menú si el ancho supera 768px (md)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setNavbarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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
    <nav className='fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md'>
      <div className='max-w-8xl mx-auto px-2 py-6 flex items-center justify-center'>
        {/* Links para escritorio */}
        <div className="hidden md:flex md:justify-center flex-1">
          <ul className="flex space-x-12">
            {Navlinks.map((link, index) => (
              <li key={index}>
                <button
                  onClick={() => handleNavClick(link.path)}
                  className="text-slate-200 hover:text-white transition-colors"
                >
                  {link.title}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Botón menú móvil */}
        <div className='md:hidden'>
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
              <Bars3Icon className='h-5 w-5' />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
              <XMarkIcon className='h-5 w-5' />
            </button>
          )}
        </div>
      </div>

      {/* Overlay menú móvil */}
      {navbarOpen ? <MenuOverlay links={Navlinks} onClick={handleNavClick} /> : null}
    </nav>
  );
};
