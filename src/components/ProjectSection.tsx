import React from 'react'
import {ProjectCard}from './ProjectCard';

const projectsData=[
    {
        id:1,
        title:"Portafolio",
        description:"Para la creacion del portafolio se utilizo next.js",
        image:"/images/projects/1.png",
        gitUrl: "https://github.com/Sebvstiann/Porfolio-Next.js",
        previewUrl:"/"

    },
    {
        id:2,
        title:"2",
        description:"proyecto",
        image:"/images/projects/2.png",
        gitUrl:"/",
        previewUrl:"/"
    },
    {
        id:3,
        title:"Gestion de inventario",
        description:"Para la elavoracion de este proyecto se utilizo como lenguaje de programacion Python(framework tkinder) y para la base de datos MySQL.",
        image:"/images/projects/3.png",
        gitUrl:"https://github.com/Sebvstiann/Tkinter-CRUD-",
        previewUrl:"/"
    }
];

export const ProjectSection = () => {
  return (
    <section id="proyectos">
    <h2 className='text-center text-4xl font-bold text-white mt-30 mb-8 md:mb-12'>
        Mis Proyectos
        </h2>
    <div className='grid md:grid-cols-2 gap-8 md-gap-12'>
        {projectsData.map((project) => 
        <ProjectCard 
        key={project.id}
        title={project.title}
        description={project.description}
        imgUrl={project.image}
        gitUrl={project.gitUrl}
        previewUrl={project.previewUrl}
        />
        )}
        </div>
    </section>
  )
}

