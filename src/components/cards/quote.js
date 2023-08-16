import Image from 'next/image'
import React from 'react'

export default function QuoteCard({ source, quote, image }) {
  return (
    <div className='flex md:gap-4 flew-wrap flex-col md:flex-row justify-between py-12'>
      <div className='w-full md:w-1/2 h-auto'>
        <Image
          loading='lazy'
          className='m-auto'
          width={500}
          height={500}
          sizes='100vw'
          alt='Quote illustration'
          src={image}
        />
      </div>
      <div className='bg-primary-900 text-white p-10 lg:p-14 xl:p-20 flex flex-col gap-2 items-start justify-center'>
        <div className='text-xl lg:text-2xl xl:text-3xl font-bold'>{quote}</div>
        <div className='text-base font-normal'>{source}</div>
      </div>
    </div>
  )
}
