import React from 'react'
import injected from '../injected.json'
import Image from 'next/image'
import { useLocale } from '../hooks/useLocale'
import Link from 'next/link'
import Burger from './svg/burger'
import { useScrollPosition } from '../hooks/useScrollPostition'

export default function Header({ navbarOpen, setNavbarOpen }) {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const scrollPosition = useScrollPosition()
  const { switchLocale, locale } = useLocale()
  return (
    <nav
      className={classNames(
        scrollPosition > 0 ? 'sm:py-10 py-[20px]' : 'sm:py-20 py-[20px]',
        navbarOpen ? 'bg-primary-900 text-white' : 'bg-white text-primary-900',
        'z-50 sticky top-0 mx-auto overflow-auto transition-all duration-300 ease-in-out',
      )}
    >
      <div
        className={`max-w-screen-xl 2xl:max-w-screen-2xl px-6 md:px-16 flex gap-2 flex-wrap items-center justify-between mx-auto text-sm font-bold leading-normal`}
      >
        <Link
          href={'/'}
          className='relative'
          onClick={(e) => {
            e.preventDefault()
            setNavbarOpen(!navbarOpen)
          }}
        >
          <Burger navbarOpen={navbarOpen} />
        </Link>
        <Link href={'/'} className='w-[138px] h-[72px] sm:w-[216px] sm:h-[112px] relative'>
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
        <div className='sm:hidden'>
          <select
            onChange={(e) => {
              switchLocale(e.target.value)
            }}
            className={`[&:not(size)]:bg-none [&:not(size)]:border-none [&:not(size)]:p-0 ${
              !navbarOpen ? 'text-primary-900 bg-white' : 'text-white bg-primary-900'
            }`}
          >
            {injected.locales.map((item, index) => (
              <option
                key={index}
                className={`uppercase ${!navbarOpen ? 'text-primary-900' : 'text-white'}`}
                value={item}
              >
                {item.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
        <div className='hidden sm:flex sm:flex-row sm:flex-wrap sm:gap-2'>
          {injected.locales.map((item, index) => (
            <a
              key={index}
              className={`${locale === item ? 'text-primary-900' : 'text-gray-400'} ${
                navbarOpen && 'text-white'
              } cursor-pointer ${navbarOpen && locale !== item && 'text-gray-400'} ${
                !navbarOpen && 'hover:text-primary-900'
              } transition-all uppercase`}
              href='#'
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
