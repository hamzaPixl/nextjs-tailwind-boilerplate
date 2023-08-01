import Image from 'next/image'
import React from 'react'

export default function QuoteCard({ source, quote, image }) {
  return (
    <div className='md:relative w-auto'>
      <div className='bg-background text-globalText rounded-sm z-10 px-10 md:px-20 py-10 w-full md:w-2/3 md:absolute md:translate-y-[30rem] md:-translate-x-[12rem] md:left-auto md:right-0 md:bottom-0'>
        <div className='text-lg md:text-2xl font-bold py-2'>{quote}</div>
        <div className='text-md py-2 font-normal'>{source}</div>
      </div>
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
    </div>
  )
}
