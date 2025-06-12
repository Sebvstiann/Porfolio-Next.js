"use client"
import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaPython, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiMysql } from 'react-icons/si';

const skills = [
    {
        name: "HTML",
        icon: <FaHtml5 className="h-16 w-16 text-orange-500" />
    },
    {
        name: "CSS",
        icon: <FaCss3Alt className="h-16 w-16 text-blue-500" />
    },
    {
        name: "JavaScript",
        icon: <FaJs className="h-16 w-16 text-yellow-400" />
    },
    {
        name: "TypeScript",
        icon: <SiTypescript className="h-16 w-16 text-blue-600" />
    },
    {
        name: "React",
        icon: <FaReact className="h-16 w-16 text-blue-400" />
    },
    {
        name: "Next.js",
        icon: <SiNextdotjs className="h-16 w-16 text-black dark:text-white" />
    },
    {
        name: "Tailwind",
        icon: <SiTailwindcss className="h-16 w-16 text-cyan-500" />
    },
    {
        name: "Node.js",
        icon: <FaNodeJs className="h-16 w-16 text-green-600" />
    },
    {
        name: "Git",
        icon: <FaGitAlt className="h-16 w-16 text-orange-600" />
    },
    {
        name: "Python",
        icon: <FaPython className="h-16 w-16 text-blue-500" />
    },
    {
        name: "MySQL",
        icon: <SiMysql className="h-16 w-16 text-blue-800" />
    },
    {
        name: "SQL",
        icon: <FaDatabase className="h-16 w-16 text-gray-600" />
    }
];

export const SkillsSection = () => {
  return (
    <section id="skills">
        <p className='text-center text-4xl font-bold text-white mt-10 mb-8 md:mb-12'>
            <TypeAnimation
                sequence={[
                    'Mis Habilidades',
                    1000,
                ]}
                wrapper="span"
                speed={20}
                repeat={Infinity}
            />
        </p>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12'>
            {skills.map((skill, index) => (
                <div 
                    key={index}
                    className='flex flex-col items-center justify-center p-4 rounded-lg bg-[#18191E] hover:bg-[#2A2D3A] transition-colors duration-300'
                >
                    {skill.icon}
                    <p className='text-white mt-2 text-sm'>{skill.name}</p>
                </div>
            ))}
        </div>
    </section>
  )
} 