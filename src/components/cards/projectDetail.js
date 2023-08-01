import React from 'react'
import { useTranslate } from '../../hooks/useTranslate'

export default function ProjectDetailCard({ project }) {
  const { title, description, location, area, status } = project
  const { t } = useTranslate()
  return (
    <div
      className={`bg-globalText text-background flex flex-col md:flex-row justify-between items-left p-10 w-full`}
    >
      <div className='flex flex-col py-5 w-2/5'>
        <div className='text-3xl font-bold pb-5'>{t(title)}</div>
        <div className='text-base font-normal leading-normal'>{t(description)}</div>
      </div>
      <div className='flex flex-col justify-center font-normal text-base w-1/5'>
        <div className='pb-5 flex flex-row justify-between'>
          <div className='font-bold '>{t('projects.detail.location')}</div>
          <div className=''>{location || '/'}</div>
        </div>
        <div className='pb-5 flex flex-row justify-between'>
          <div className='font-bold'>{t('projects.detail.area')}</div>
          <div className=''>{area || '/'}</div>
        </div>
        <div className='pb-5 flex flex-row justify-between'>
          <div className='font-bold'>{t('projects.detail.status')}</div>
          <div className=''>{status || '/'}</div>
        </div>
      </div>
    </div>
  )
}
