import React from 'react'
import { useTranslate } from '../hooks/useTranslate'
import Layout from '../components/layout'
import Link from 'next/link'

export const links = [
  { title: 'link.home', link: '/' },
  { title: 'link.about', link: '/about' },
  { title: 'link.mission', link: '/mission' },
  { title: 'link.projects', link: '/projects' },
  { title: 'link.contact', link: '/contact' },
]

export default function Menu() {
  const { t } = useTranslate()
  return (
    <Layout menu>
      <div className='w-full bg-background/70' id='navbar-hamburger'>
        <div className='text-globalText text-3xl flex flex-col justify-between items-center p-10'>
          {links.map((item, index) => (
            <Link key={index} href={item.link} className='my-10'>
              <span className='hover:underline hover:underline-offset-8 transition-all'>
                {t(item.title)}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}
