import Image from 'next/image'
import React from 'react'

export default function MissionCard({ title, index, description, image, inverted }) {
  const illustration = (
    <div className='w-1/2'>
      <Image width={450} height={350} className='py-2' alt='Mission illustration' src={image} />
    </div>
  )
  return (
    <div className='w-3/4 text-background flex flex-row justify-between items-left font-normal'>
      {inverted ? illustration : null}
      <div className='w-1/2 p-20 flex flex-col justify-around text-3xl font-bold '>
        <div className='py-2'>
          <span className='text-background/50'>{index}.</span> {title}
        </div>
        <div className='text-xs py-2 font-normal'>{description}</div>
      </div>
      {!inverted ? illustration : null}
    </div>
  )
}
