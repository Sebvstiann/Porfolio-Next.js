"use client"
import React from 'react'
import {ProjectCard}from './ProjectCard';
import { TypeAnimation } from 'react-type-animation';

const projectsData=[
    {
        id:1,
        title:"Portafolio",
        description:"Para la creacion del portafolio se utilizo next.js",
        image:"/images/projects/1.png",
        gitUrl: "https://github.com/Sebvstiann/Porfolio-Next.js",
        previewUrl:"/",
        images: [
            "/images/projects/1.png",
            "/images/projects/1-2.png",
            "/images/projects/1-3.png"
        ]
    },
    {
        id:2,
        title:"2",
        description:"proyecto",
        image:"/images/projects/2.png",
        gitUrl:"/",
        previewUrl:"/",
        images: [
            "/images/projects/2-1.png",
            "/images/projects/2-2.png",
            "/images/projects/2-3.png",
        ] 
    },
    {
        id:3,
        title:"Gestion de inventario",
        description:"Para la elavoracion de este proyecto se utilizo como lenguaje de programacion Python(framework tkinder) y para la base de datos MySQL.",
        image:"/images/projects/3.png",
        gitUrl:"https://github.com/Sebvstiann/Tkinter-CRUD-",
        previewUrl:"/",
        images: [
            "/images/projects/3.png",
            "/images/projects/3-2.png",
            "/images/projects/3-3.png"
        ]
    }
];

export const ProjectSection = () => {
  return (
    <section id="proyectos">
    <p className='text-center text-4xl font-bold text-white mt-10 mb-8 md:mb-12'>
        <TypeAnimation
                      sequence={[
                        'Mis Proyectos',
                        1000,
                        
                      ]}
                      wrapper="span"
                      speed={20}
                      repeat={Infinity}
                    
                    />
        </p>
    <div className='grid md:grid-cols-2 gap-8 md-gap-12'>
        {projectsData.map((project) => 
        <ProjectCard 
        key={project.id}
        title={project.title}
        description={project.description}
        imgUrl={project.image}
        gitUrl={project.gitUrl}
        previewUrl={project.previewUrl}
        images={project.images}
        />
        )}
        </div>
    </section>
  )
}

