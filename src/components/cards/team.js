import Image from 'next/image'
import React from 'react'

export default function TeamCard({ image, description, firstName, lastName, link }) {
  return (
    <div className='w-96 p-10 text-background flex flex-col justify-between items-left font-normal'>
      <Image className='py-2' width={270} height={404} alt='Team member avatar' src={image} />
      <div className='text-3xl font-bold py-2'>
        {firstName} {lastName}
      </div>
      <div className='text-md py-2'>{description}</div>
      <a href={link} className='text-md py-2 font-bold'>
        Follow on Linkedin
      </a>
    </div>
  )
}
