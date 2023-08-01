import Image from 'next/image'
import React from 'react'

export default function QuoteCard({ source, quote, image }) {
  return (
    <div className='md:relative w-auto'>
      <div className='md:absolute z-20'>
        <Image
          loading='lazy'
          className='rounded-sm md:max-auto md:max-w-full max-w-min m-auto py-5'
          width={350}
          height={350}
          alt='Quote illustration'
          src={image}
        />
      </div>
      <div className='bg-background text-globalText rounded-sm z-10 px-10 md:px-20 py-10 w-full md:w-3/4 md:absolute md:translate-y-[30rem] md:-translate-x-[4rem] md:left-auto md:right-0 md:bottom-0'>
        <div className='text-sm md:text-2xl font-semibold md:font-bold py-2'>{quote}</div>
        <div className='text-xs md:text-md py-2 font-light'>{source}</div>
      </div>
    </div>
  )
}
