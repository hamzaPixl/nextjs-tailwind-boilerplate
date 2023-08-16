import Link from 'next/link'
import React from 'react'
import { useTranslate } from '../../hooks/useTranslate'
import Image from 'next/image'

export default function ProjectCard({ project }) {
  const { t } = useTranslate()
  const {
    title,
    shortDescription = 'home.project.shortDescription',
    defaultImage = '/images/project/project1.png',
    link = '/projects',
  } = project
  return (
    <div className='group text-white cursor-pointer'>
      <div className='rounded-sm relative'>
        <Link href={link}>
          <div className='w-full h-auto rounded-sm'>
            <Image
              loading='lazy'
              className='m-auto'
              width={500}
              height={500}
              sizes='100vw'
              alt='Project illustration'
              src={defaultImage}
            />
          </div>
          <div className='group-hover:bg-primary-900/50 w-full h-full opacity-0 group-hover:opacity-100 flex-col gap-2 pb-8 pl-5 md:pl-10 absolute bottom-0  transition-all ease-in-out duration-300'>
            <div className='text-2xl font-bold absolute bottom-20'>{t(title)}</div>
            <div className='text-base absolute bottom-10'>{t(shortDescription)}</div>
          </div>
        </Link>
      </div>
    </div>
  )
}
