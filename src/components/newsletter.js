import React from 'react'
import { useTranslate } from '../hooks/useTranslate'
import Button from './button'

export default function Newsletter() {
  const { t } = useTranslate()
  return (
    <div className='bg-background flex flex-row justify-between items-center p-10 my-10 w-full'>
      <div className='text-globalText  max-w-xl'>
        <div className='text-3xl font-bold pb-5'>{t('newsletter.title')}</div>
        <div className='text-base font-normal leading-normal'>{t('newsletter.description')}</div>
      </div>
      <Button message={t('newsletter.button')} />
    </div>
  )
}
