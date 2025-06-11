"use client";
import * as React from 'react';
import { useTransition, useState } from 'react';
import Image from 'next/image';
import { TabButton } from './TabButton';
import { TypeAnimation } from 'react-type-animation';

interface TabData {
  title: string;
  id: string;
  content: React.ReactNode;
}

const TAB_DATA: TabData[] = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul>
        <li>• Excel</li>
        <li>• Python(flask and django)</li>
        <li>• MySQL</li>
        <li>• PosgreSQL</li>
        <li>• Html and css</li>
        <li>• Next.js</li>
        <li>• Soporte TI</li>
        <li>• Instalacion de Sistemas</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul>
        <li>• Instituto Profesional Inacap</li>
      </ul>
    )
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul>
        <li>• Soporte y redes, Cisco</li>
      </ul>
    )
  }
];

export const AboutSection: React.FC = () => {
  const [tab, setTab] = useState<string>("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string): void => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className='text-white'>      
      <div className='md:grid md:grid-cols-2 gap-8 items-start mt-15 py-20 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image src="/images/logo.png" width={1000} height={1000} alt="Imagen sobre mí"/>
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <p className='text-4xl font-bold text-white mb-4'>
            <TypeAnimation
              sequence={[
                'Sobre Mí',
                1000,
              ]}
              wrapper="span"
              speed={20}
              repeat={Infinity}
            />
          </p>
          <p className='text-base lg:text-lg text-justify'>
            Soy una persona tranquila, constante y activa físicamente. Me gusta entrenar en el gimnasio, jugar fútbol, hacer trekking y también disfrutar de los videojuegos en mi tiempo libre. Valoro cuando las cosas salen bien, pero si no, no me rindo: lo intento hasta que lo logro. Me gusta aprender, superarme y ver resultados, tanto en lo personal como en lo profesional.
          </p>
          <div className='flex flex-row justify-center gap-4 mt-2'>
            <TabButton 
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
              
            >
              {" "}
              Habilidades{" "}
            </TabButton>
            <TabButton 
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Educacion{" "}
            </TabButton>
            <TabButton 
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certificaciones{" "}
            </TabButton>
          </div>
          <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab)?.content}</div>
        </div>
      </div>
    </section>
  );
}; 