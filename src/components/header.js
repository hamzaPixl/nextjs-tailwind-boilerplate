import React from 'react'
import injected from '../injected.json'
import Image from 'next/image'
import { useLocale } from '../hooks/useLocale'
import Link from 'next/link'

export default function Header() {
  const { switchLocale, locale } = useLocale()
  return (
    <nav className='sticky top-0 z-50 bg-globalText w-screen'>
      <div className='md:max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4 bg-globalText text-background text-xs md:text-md  font-bold leading-normal'>
        <div className='w-5 h-5 md:w-10 md:h-10 relative'>
          <Image loading='lazy' fill src='/icons/burger.svg' alt={`Burger icon`} />
        </div>
        <Link href={'/'} className='w-36 h-16 md:w-64 md:h-36 relative'>
          <Image loading='lazy' fill src='/logo.svg' alt={`Logo`} />
        </Link>
        <div className='md:hidden'>
          <select
            onChange={(e) => {
              switchLocale(e.target.value)
            }}
            className='[&:not(size)]:bg-none [&:not(size)]:border-none [&:not(size)]:p-0'
          >
            {injected.locales.map((item, index) => (
              <option key={index} className='uppercase text-background' value={item}>
                {item.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
        <div className='hidden md:block uppercase text-background/50'>
          {injected.locales.map((item, index) => (
            <a
              key={index}
              className={`pr-2 ${
                locale === item ? 'text-background' : 'text-background/50'
              } cursor-pointer hover:text-background transition-all`}
              onClick={(e) => {
                switchLocale(e.target.text)
              }}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
