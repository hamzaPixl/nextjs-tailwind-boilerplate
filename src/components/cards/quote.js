import Image from 'next/image'
import React from 'react'

export default function QuoteCard({ source, quote, image }) {
  return (
    <div className='w-full h-96 my-5 text-globalText font-normal relative'>
      <div className='w-1/3 absolute z-20 left:0'>
        <Image width={450} height={350} className='py-2' alt='Quote illustration' src={image} />
      </div>
      <div className='w-3/4 h-2/3 px-20 py-10 bg-background flex flex-col justify-around font-bold absolute z-10 items-start bottom-0 -right-20 text-lg'>
        <div className='font-bold py-2'>{quote}</div>
        <div className='text-md py-2 font-normal'>{source}</div>
      </div>
    </div>
  )
}
