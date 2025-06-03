import React from 'react'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline';


// Definimos el tipo para las props
interface ProjectCardProps {
  imgUrl: string;
  title: string;
  description: string;
  gitUrl: string;
  previewUrl: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({imgUrl, title, description, gitUrl, previewUrl}) => {
  return (
    <div>
        <div className='h-52 md:h-72 rounded-t-xl relative group' 
        style={{ background:`url(${imgUrl})`, backgroundSize: "cover"}}>
            <div className='overlay items-center justify-center absolute top-0 left-0 w-full h-full 
              hover:bg-[#181818]/60 hidden group-hover:flex group-hover:bg-[#181818]/60
              transition-all duration-500'>
              <a href={gitUrl} target="_blank" rel="noopener noreferrer" className='h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'>
                <CodeBracketIcon className='h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white'/>
              </a>
              <a href={previewUrl} target="_blank" rel="noopener noreferrer" className='h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'>
                <EyeIcon className='h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white'/>
              </a>
            </div>
        </div>
        <div className='text-white rounded-b-xl bg-[#181818] py-6 px-4'>
            <h5 className='font-xl font-semibold mb-2'>{title}</h5>
            <p className='text-[#ADB7BE]'>{description}</p>
        </div>
    </div>
  )
}

