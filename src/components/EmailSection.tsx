
"use client"
import React from 'react';
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";
import { MessageCircle } from 'lucide-react'; // WhatsApp no tiene ícono directo, este es un reemplazo visual apropiado

import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';

export const EmailSection = () => {
   return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-1"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2">
      </div>
      <div className="z-10 ">
        <h5 className="text-xl font-bold text-white my-2">
          <TypeAnimation
                      sequence={[
                        'Contactame!',
                        1000,
                        
                      ]}
                      wrapper="span"
                      speed={20}
                      repeat={Infinity}/>
                    
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          Estoy dando mis primeros pasos en el mundo profesional y estoy en búsqueda de oportunidades para crecer y seguir aprendiendo. Si tu empresa está abierta a incorporar talento junior con muchas ganas de aportar, aprender y desarrollarse, estaré encantado de conversar. ¡Estoy listo para asumir nuevos desafíos!
        </p>
        <div className="socials flex flex-row gap-8">
            <Link
            href="https://www.linkedin.com/in/tu-perfil"
            target="_blank"
            rel="noopener noreferrer"
             >
            <button className="flex items-center gap-2 rounded-lg bg-[#0a66c2] px-4 py-2 text-white transition hover:bg-[#084d9c]">
            <Linkedin className="size-5 shrink-0" />
                LinkedIn
            </button>
            </Link>
          <Link
            href="https://github.com/tu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            >
            <button className="flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-white transition hover:bg-gray-800">
            <Github className="size-5 shrink-0" />
            GitHub
            </button>
            </Link>
            <Link
            href="https://wa.me/1234567890" // Reemplaza con tu número de WhatsApp (formato internacional, sin "+")
            target="_blank"
            rel="noopener noreferrer"
            >
            <button className="flex items-center gap-2 rounded-lg bg-[#25D366] px-4 py-2 text-white transition hover:bg-[#1DA851]">
                <MessageCircle className="size-5 shrink-0" />
                WhatsApp
            </button>
            </Link>


        </div>
      </div>
        <div>
          <form className="flex flex-col">
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Tú email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="example@email.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Objetivo
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Mensaje
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button  type="submit" className='py-2 px-2 bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500 text-white hover:scale-105 hover:rotate-1'>
            <span className='block bg-[#121212] hover:bg-slate-800  px-5 py-2 animate'>Enviar mensaje</span>
           </button>
                
    
            
                
                
          </form>
      </div>
    </section>
  );
};