import Image from 'next/image'
import React from 'react'

export default function ProjectCard({ title, description, image }) {
  return (
    <div className='group w-1/6 h-40 my-5 text-globalText flex flex-col justify-between items-start font-normal hover:cursor-pointer px-2 relative'>
      <Image
        className='z-10 hover:opacity-100 absolute opacity-75'
        alt='Mission illustration'
        src={image}
        width={450}
        height={350}
      />
      <div className='z-20 absolute top-36 left-5 hidden group-hover:block transition-all'>
        <div className='text-md font-bold'>{title}</div>
        <div className='text-xs top-44'>{description}</div>
      </div>
    </div>
  )
}
