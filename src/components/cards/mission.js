import Image from 'next/image'
import React from 'react'

export default function MissionCard({ title, index, description, image, inverted }) {
  const illustration = (
    <div className='w-full md:w-1/2 relative h-[15rem] md:h-[25rem]'>
      <Image sizes='100vw' loading='lazy' fill alt='Mission illustration' src={image} />
    </div>
  )
  return (
    <div className='text-background flex flex-col md:flex-row flew-wrap justify-between items-left font-normal md:max-w-screen-xl my-5'>
      {inverted ? illustration : null}
      <div className='w-full md:w-1/2 p-5 md:p-10 flex flex-col justify-around font-bold '>
        <div className='py-2 text-lg md:text-3xl'>
          <span className='text-background/50'>{index}.</span> {title}
        </div>
        <div className='text-base py-2 font-normal'>{description}</div>
      </div>
      {!inverted ? illustration : null}
    </div>
  )
}
