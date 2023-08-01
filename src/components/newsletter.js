import React from 'react'
import { useTranslate } from '../hooks/useTranslate'
import Button from './button'

export default function Newsletter() {
  const { t } = useTranslate()
  return (
    <div className='bg-background flex flex-wrap justify-between items-center p-10'>
      <div className='text-globalText  max-w-xl mb-5'>
        <div className='text-xl md:text-3xl font-bold pb-5'>{t('newsletter.title')}</div>
        <div className='text-md md:text-base font-normal leading-normal'>
          {t('newsletter.description')}
        </div>
      </div>
      <Button message={t('newsletter.button')} link={'/contact'} />
    </div>
  )
}
