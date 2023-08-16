import Image from 'next/image'
import React from 'react'

export default function MissionCard({ title, index, description, image, inverted }) {
  return (
    <div
      className={`text-primary-900 flex flex-col flew-wrap justify-between items-left font-normal md:max-w-screen-xl my-5 gap-2 ${
        inverted ? 'md:flex-row-reverse' : 'md:flex-row'
      }`}
    >
      <div className='w-full md:w-1/2 relative h-[15rem] md:h-[25rem]'>
        <Image sizes='100vw' loading='lazy' fill alt='Mission illustration' src={image} />
      </div>
      <div
        className={`w-full md:w-1/2 p-5 md:p-10 flex flex-col justify-around font-bold ${
          inverted ? 'order-2 md:order-1' : 'order-1 md:order-2'
        }`}
      >
        <div className='text-xl md:text-3xl'>
          <span className='text-primary-400'>{index}.</span> {title}
        </div>
        <div className='text-base font-normal'>{description}</div>
      </div>
    </div>
  )
}
