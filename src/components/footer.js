import React from 'react'
import injected from '../injected.json'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='bg-white'>
      <div className='max-w-screen-xl 2xl:max-w-screen-2xl flex gap-4 flex-col md:flex-row flex-wrap items-center justify-between mx-auto py-2 px-5 md:py-8 md:px-16 text-gray-900 text-xs md:text-base leading-normal font-bold'>
        <div className='flex gap-2 flex-col md:flex-row items-center'>
          <div className='flex gap-2 flex-row flex-wrap'>
            {injected.socials.map((item, index) => (
              <Link key={index} className='text-primary-900' href={item.link}>
                <Image
                  loading='lazy'
                  width={20}
                  height={20}
                  src={`/icons/${item.title}.svg`}
                  alt={`Social ${item.title} - ${item.link}`}
                />
              </Link>
            ))}
          </div>
          <div className='flex gap-2 flex-row flex-wrap justify-center'>
            {injected.sla.map((item, index) => (
              <Link
                key={index}
                className='text-primary-900 font-normal hover:font-bold  transition-all ease-in-out duration-300'
                href={item.link}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        <div className='uppercase text-gray-400'>
          Made with love by{' '}
          <Link className='text-primary-900' href={injected.author.url}>
            {injected.author.name}
          </Link>
        </div>
      </div>
    </footer>
  )
}
