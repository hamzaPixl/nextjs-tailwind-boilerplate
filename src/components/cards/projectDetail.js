import React from 'react'
import { useTranslate } from '../../hooks/useTranslate'

export default function ProjectDetailCard({ project }) {
  const { title, description, location, area, status } = project
  const { t } = useTranslate()
  return (
    <div
      className={`bg-white text-primary-900 gap-5 flex flex-col md:flex-row justify-between items-center md:p-5 mt-10 md:mt-0`}
    >
      <div className='flex flex-col gap-2'>
        <div className='text-2xl md:text-4xl font-bold'>{t(title)}</div>
        <div className='text-base font-normal leading-normal max-w-xl'>{t(description)}</div>
      </div>
      <div className='gap-2 flex flex-col justify-between font-normal text-base w-full md:w-auto'>
        <div className='gap-2 flex flex-row justify-between'>
          <div className='font-bold '>{t('projects.detail.location')}</div>
          <div className=''>{location || '/'}</div>
        </div>
        <div className='gap-2 flex flex-row justify-between'>
          <div className='font-bold'>{t('projects.detail.area')}</div>
          <div className=''>{area || '/'}</div>
        </div>
        <div className='gap-2 flex flex-row justify-between'>
          <div className='font-bold'>{t('projects.detail.status')}</div>
          <div className=''>{status || '/'}</div>
        </div>
      </div>
    </div>
  )
}
