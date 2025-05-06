"use client";
import React,{useTransition, useState} from 'react'
import Image from 'next/image'
import TabButton from './TabButton';

const TAB_DATA=[
  {
    title:"Skills",
    id:"skills",
    content : (
      <ul>
        <li>Excel</li>
        <li>Python(flask and django)</li>
        <li>MySQL</li>
        <li>Next.js</li>
        <li>Soporte TI</li>
        <li>Instalacion de Sistemas</li>
      </ul>
    )
  },
  {
    title:"Education",
    id:"education",
    content : (
      <ul>
        <li>Instituto Profesional Inacap</li>
      </ul>
    )
  },
  {
    title:"Certifications",
    id:"certifications",
    content : (
      <ul>
        <li>Soporte y redes, Cisco</li>
      </ul>
    )
  }
]

const AboutSection = () => {
  const [tab, setTab] =useState("skills");
  const [  isPending, startTransition] = useTransition();

  const handleTabChange= (id) => {
    startTransition(() =>{
      setTab(id);
    } );
  };
  return (
    <section id="about" className='text-white mt-8'>      
      <div className='md:grid md:grid-cols-2 gap-8 items-start py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image src="/images/about-imagen.png" width={1000} height={1000} alt="Imagen sobre mí"/>
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold text-white mb-4'>Sobre Mí</h2>
          <p className='text-base lg:text-lg text-justify'>
           Me destaco por mi capacidad de adaptación, trabajo en equipo, comunicación 
           efectiva y actitud colaborativa en entornos sociales y profesionales. 
           Disfruto generar un ambiente positivo, lo que me permite integrarme 
           fácilmente a nuevos equipos y construir buenas relaciones laborales. </p>
          <div className='flex flex-row justify-start mt-2'>
            <TabButton 
              selectTab={() => handleTabChange("skills")}
              active={tab=="skills"} className="w-full h-auto object-cover"
              >
                {" "}
                Habilidades{" "}
              </TabButton>
              <TabButton 
              selectTab={() => handleTabChange("education")}
              active={tab=="education"}
              >
                {" "}
                Educacion{" "}
              </TabButton>
              <TabButton 
              selectTab={() => handleTabChange("certifications")}
              active={tab=="certifications"}
              >
                {" "}
                Certificaciones{" "}
              </TabButton>
          </div>
          <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection