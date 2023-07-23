import React from 'react'
import injected from '../injected.json'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className='h-20 w-full px-36 my-12 flex flex-row justify-between items-center text-background text-xs font-bold leading-normal'>
      <div className='flex flex-row items-center'>
        {injected.socials.map((item, index) => (
          <a key={index} className='text-background' href={item.link}>
            <Image
              loading='lazy'
              width={20}
              height={20}
              src={`/icons/${item.title}.svg`}
              alt={`Social ${item.title} - ${item.link}`}
            />
          </a>
        ))}
        {injected.sla.map((item, index) => (
          <a
            key={index}
            className='px-2 text-background font-normal hover:font-bold transition-all'
            href={item.link}
          >
            {item.title}
          </a>
        ))}
      </div>
      <div className='uppercase text-background/50'>
        Made with love by{' '}
        <a className='text-background' href={injected.author.url}>
          {injected.author.name}
        </a>
      </div>
    </footer>
  )
}
