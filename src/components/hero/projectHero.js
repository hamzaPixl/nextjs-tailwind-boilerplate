import React from 'react'
import ProjectDetailCard from '../cards/projectDetail'

export default function ProjectHero({ project }) {
  return (
    <div
      className='bg-background md:p-10 w-full bg-[image:var(--image-url)] bg-cover bg-center bg-no-repeat relative h-[38em]'
      style={{ '--image-url': `url(${project.defaultImage})` }}
    >
      <ProjectDetailCard project={project} />
    </div>
  )
}
