import React from 'react'
import injected from '../injected.json'
import Image from 'next/image'
import { useLocale } from '../hooks/useLocale'

export default function Header() {
  const { switchLocale, locale } = useLocale()
  return (
    <nav className='w-full py-20 flex flex-row justify-between items-center text-background text-xs font-bold leading-normal'>
      <a href={injected.manifest.url}>
        <Image width={20} height={12} src='/icons/burger.svg' alt={`Burger icon`} />
      </a>
      <a href={injected.manifest.url}>
        <Image width={216} height={112} src='/logo.svg' alt={`Logo`} />
      </a>
      <div className='uppercase text-background/50'>
        {injected.locales.map((item, index) => (
          <a
            key={index}
            className={`px-2 ${
              locale === item ? 'text-background' : 'text-background/50'
            } hover:cursor-pointer hover:text-background transition-all`}
            onClick={(e) => {
              switchLocale(e.target.text)
            }}
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  )
}
