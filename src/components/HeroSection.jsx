"use client"
import React from 'react'
{/* para poder cargar una imagen hay que llamar a esta libreria  */}
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

export const HeroSection = () => {
  return (
    <section className='mt-30'>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <div className='col-span-7 place-self-center text-center sm:text-left' >
          <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-700'> 
              Hola, Soy{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                'Sebastian',
                1000,
                'Ingeniero Software',
                1000,
                'Soporte Ti y Redes',
                1000

              ]}
              wrapper="span"
              speed={20}
              repeat={Infinity}
            />
          </h1>
          <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
            Ingeniero en informatica egresado del instituto tecnologico INACAP Puerto Montt.

          </p>
          <div>
            {/* Botones con tamaños de x de 6 px e y de 3px, el bg es para el color de fondo y el hover es para que resalte cuando paso el cursor por encima
            <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500 hover:bg-slate-200 text-white'>Hiren Me</button>
            Botones con tamaños de x de 6 px e y de 3px, Este boton es transparente con bordes blanco y texto blanco
            <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-transparent  hover:bg-slate-500 text-white border border-white mt-3'>Download CV</button>*/}
          
          <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500 text-white hover:scale-105 hover:rotate-1'>
            <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 animate'>Contratame</span>
          </button>
          <a
            href="/cv_sebastian.pdf"
            download
            className="relative inline-flex w-full sm:w-fit items-center justify-center px-6 py-3 overflow-hidden font-bold text-white transition-all duration-300 ease-out rounded-full shadow-lg bg-gradient-to-br from-pink-500 via-yellow-400 to-pink-500 hover:scale-105 hover:rotate-1"
          >
            <span className="absolute w-40 h-40 -top-1 -left-1 bg-white opacity-10 rounded-full"></span>
            Download CV
          </a>


          </div>
        </div>
        {/* Cargo la imagen de perfil utilizando la funcion Image*/}
        <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
          <div className='rounded-full bg-[#181818] w-[400px] h-[400px] relative overflow-hidden'>
            <Image
              src="/images/hero.png"
              alt="imagen perfil"
              className="object-cover w-full h-full"
              width={350}
              height={350}
            />
          </div>
        </div>
      </div>
    </section>
  )
}


