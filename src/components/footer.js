import React from 'react'
import injected from '../injected.json'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='bg-globalText w-screen mt-20'>
      <div className='md:max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4 bg-globalText text-background text-xs md:text-md font-bold leading-normal'>
        <div className='flex flex-row items-center'>
          {injected.socials.map((item, index) => (
            <Link key={index} className='text-background' href={item.link}>
              <Image
                loading='lazy'
                width={20}
                height={20}
                src={`/icons/${item.title}.svg`}
                alt={`Social ${item.title} - ${item.link}`}
              />
            </Link>
          ))}
          {injected.sla.map((item, index) => (
            <Link
              key={index}
              className='md:block hidden px-2 text-background font-normal hover:font-bold transition-all'
              href={item.link}
            >
              {item.title}
            </Link>
          ))}
        </div>
        {
          <div className='uppercase text-background/50'>
            Made with love by{' '}
            <Link className='text-background' href={injected.author.url}>
              {injected.author.name}
            </Link>
          </div>
        }
      </div>
    </footer>
  )
}
