import React from 'react'
import injected from '../injected.json'
import Image from 'next/image'
import { useLocale } from '../hooks/useLocale'
import Link from 'next/link'

export default function Header({ navbarOpen, setNavbarOpen }) {
  const { switchLocale, locale } = useLocale()
  return (
    <nav
      className={`sticky top-0 z-50 w-screen ${
        navbarOpen ? 'bg-background text-globalText' : 'bg-globalText text-background'
      }`}
    >
      <div
        className={`md:max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4  text-xs md:text-md  font-bold leading-normal`}
      >
        <Link
          href={'/'}
          className='w-5 h-5 md:w-10 md:h-10 relative'
          onClick={(e) => {
            e.preventDefault()
            setNavbarOpen(!navbarOpen)
          }}
        >
          <div className='absolute w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2'>
            <span
              className={`absolute h-0.5 w-5 ${
                !navbarOpen ? 'bg-background' : 'bg-globalText'
              } transform transition duration-300 ease-in-out ${
                navbarOpen ? 'rotate-45 delay-200' : '-translate-y-1.5'
              }`}
            ></span>
            <span
              className={`absolute h-0.5 ${
                !navbarOpen ? 'bg-background' : 'bg-globalText'
              } transform transition-all duration-200 ease-in-out ${
                navbarOpen ? 'w-0 opacity-50' : 'w-5 delay-200 opacity-100'
              }`}
            ></span>
            <span
              className={`absolute h-0.5 w-5 ${
                !navbarOpen ? 'bg-background' : 'bg-globalText'
              } transform transition duration-300 ease-in-out ${
                navbarOpen ? '-rotate-45 delay-200' : 'translate-y-1.5'
              }`}
            ></span>
          </div>
        </Link>
        <Link href={'/'} className='w-36 h-16 md:w-64 md:h-36 relative'>
          <Image
            loading='lazy'
            fill
            src='/logo.svg'
            alt={`Logo`}
            style={{
              filter: navbarOpen ? 'invert(1)' : 'invert(0)',
            }}
          />
        </Link>
        <div className='md:hidden'>
          <select
            onChange={(e) => {
              switchLocale(e.target.value)
            }}
            className={`[&:not(size)]:bg-none [&:not(size)]:border-none [&:not(size)]:p-0 ${
              navbarOpen ? 'bg-background' : 'bg-globalText'
            }`}
          >
            {injected.locales.map((item, index) => (
              <option
                key={index}
                className={`uppercase ${!navbarOpen ? 'text-background' : 'text-globalText'}`}
                value={item}
              >
                {item.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
        <div className='hidden md:block uppercase'>
          {injected.locales.map((item, index) => (
            <a
              key={index}
              className={`pr-2 ${locale === item ? 'text-background' : 'text-background/50'} ${
                navbarOpen && 'text-globalText'
              } cursor-pointer ${navbarOpen && locale !== item && 'text-globalText/70'} ${
                !navbarOpen && 'hover:text-background'
              } transition-all`}
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
