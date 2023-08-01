import Link from 'next/link'
import React from 'react'
import { useTranslate } from '../../hooks/useTranslate'

export default function ProjectCard({ project }) {
  const { t } = useTranslate()
  const {
    title,
    shortDescription = 'home.project.shortDescription',
    defaultImage = '/images/project/project1.png',
    link = '/projects',
  } = project
  return (
    <div className='group h-44 md:h-[32rem] max-w-full text-globalText font-normal hover:cursor-pointer'>
      <Link href={link}>
        <div
          style={{ '--image-url': `url(${defaultImage})` }}
          className='flex justify-start items-end bg-no-repeat bg-cover bg-center rounded-md bg-[image:var(--image-url)]'
        >
          <div className='h-44 md:h-[32rem] w-full flex justify-start items-end bg-background/50 hover:bg-background/0 rounded-md transition-all'>
            <div className='hidden group-hover:block px-5 py-10'>
              <div className='text-lg md:text-3xl font-bold pb-5'>{t(title)}</div>
              <div className='text-md'>{t(shortDescription)}</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
