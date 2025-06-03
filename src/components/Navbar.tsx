"use client";
import React, { useState, useEffect } from 'react';
import { NavLink } from "./NavLink";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { MenuOverlay } from "./MenuOverlay";
import SpotifyEmbed from './SpotifyEmbed';


const Navlinks = [
  { title: "Inicio", path: "/" },
  { title: "Sobre mí", path: "/about" },
  { title: "Proyectos", path: "/projects" },
  { title: "Contacto", path: "/contact" }
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

  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] opacity-90'>
      <div className='max-w-8xl mx-auto px-2 py-1 flex items-center justify-between'>
        <nav className="flex items-center justify-between  text-white p-1">
          <div className="text-xl font-bold"></div>
            <SpotifyEmbed />
           </nav>

        {/* Links para escritorio */}
        <div className="hidden md:flex md:justify-end flex-1 pr-8">
          <ul className="flex space-x-12">
            {Navlinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
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
      {navbarOpen ? <MenuOverlay links={Navlinks} /> : null}
    </nav>
  );
};
