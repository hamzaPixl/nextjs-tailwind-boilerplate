import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function TeamCard({ image, description, firstName, lastName, link = '/about' }) {
  return (
    <div className='p-10 text-background flex flex-col justify-between items-left font-normal'>
      <div className='w-full relative h-[13rem] md:h-[24rem] mb-10'>
        <Image sizes='100vw' loading='lazy' fill alt='Team member avatar' src={image} />
      </div>

      <div className='text-lg md:text-3xl font-bold py-2'>
        {firstName} {lastName}
      </div>
      <div className='text-md py-2'>{description}</div>
      <Link
        href={link}
        className='text-md py-2 font-bold hover:font-bold hover:underline-offset-8 hover:underline'
      >
        Follow on Linkedin
      </Link>
    </div>
  )
}
