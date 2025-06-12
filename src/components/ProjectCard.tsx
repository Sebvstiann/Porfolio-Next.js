"use client";

import React, { useState, useEffect } from 'react'
import { CodeBracketIcon, EyeIcon, XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';


// Definimos el tipo para las props
interface ProjectCardProps {
  imgUrl: string;
  title: string;
  description: string;
  gitUrl: string;
  previewUrl: string;
  images?: string[]; // Array opcional de imágenes adicionales
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  imgUrl, 
  title, 
  description, 
  gitUrl, 
  previewUrl,
  images = [] // Por defecto es un array vacío
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Combinamos la imagen principal con las imágenes adicionales
  const allImages = [imgUrl, ...images];

  const openModal = () => {
    setIsModalOpen(true);
    setCurrentImageIndex(0);
    // Ocultar el navbar
    document.body.style.overflow = 'hidden';
    const navbar = document.querySelector('nav');
    if (navbar) {
      navbar.style.display = 'none';
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Mostrar el navbar
    document.body.style.overflow = 'auto';
    const navbar = document.querySelector('nav');
    if (navbar) {
      navbar.style.display = 'block';
    }
  };

  // Limpiar cuando el componente se desmonte
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
      const navbar = document.querySelector('nav');
      if (navbar) {
        navbar.style.display = 'block';
      }
    };
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  return (
    <>
      <div>
        <div className='h-52 md:h-72 rounded-t-xl relative group' 
          style={{ background:`url(${imgUrl})`, backgroundSize: "cover"}}>
            <div className='overlay items-center justify-center absolute top-0 left-0 w-full h-full 
              hover:bg-[#181818]/60 hidden group-hover:flex group-hover:bg-[#181818]/60
              transition-all duration-500'>
              <a href={gitUrl} target="_blank" rel="noopener noreferrer" className='h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'>
                <CodeBracketIcon className='h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white'/>
              </a>
              <button 
                onClick={openModal}
                className='h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'
              >
                <EyeIcon className='h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white'/>
              </button>
            </div>
        </div>
        <div className='text-white rounded-b-xl bg-[#181818] py-6 px-4'>
            <h5 className='font-xl font-semibold mb-2'>{title}</h5>
            <p className='text-[#ADB7BE]'>{description}</p>
        </div>
      </div>

      {/* Modal del carrusel */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90">
          <div className="relative w-full max-w-4xl mx-4">
            {/* Botón cerrar */}
            <button 
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <XMarkIcon className="h-8 w-8" />
            </button>

            {/* Imagen actual */}
            <div className="relative aspect-video">
              <img 
                src={allImages[currentImageIndex]} 
                alt={`${title} - Imagen ${currentImageIndex + 1}`}
                className="w-full h-full object-contain rounded-lg"
              />
            </div>

            {/* Controles del carrusel */}
            {allImages.length > 1 && (
              <>
                <button 
                  onClick={prevImage}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-white hover:text-gray-300 transition-colors"
                >
                  <ChevronLeftIcon className="h-8 w-8" />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-white hover:text-gray-300 transition-colors"
                >
                  <ChevronRightIcon className="h-8 w-8" />
                </button>
              </>
            )}

            {/* Indicadores de posición */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {allImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

