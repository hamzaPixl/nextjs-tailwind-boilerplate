import React from 'react'
import ProjectDetailCard from '../cards/projectDetail'
import Image from 'next/image'

export default function ProjectHero({ project }) {
  return (
    <div className='flex flex-col w-full'>
      <div className='w-full self-stretch'>
        <Image
          loading='lazy'
          className='m-auto w-full'
          width={500}
          height={500}
          sizes='100vw'
          alt='Project hero illustration'
          src={project.defaultImage}
        />
      </div>
      <ProjectDetailCard project={project} />
    </div>
  )
}
