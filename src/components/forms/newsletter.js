import React from 'react'
import { useTranslate } from '../../hooks/useTranslate'
import Button from '../button'

export default function NewsletterForm({ formSuccess, handleSubmit, formError }) {
  const { t } = useTranslate()
  return (
    <form method='POST' onSubmit={handleSubmit} name='newsletter' netlify='true'>
      <div className='w-full mt-10 md:mt-0 flex flex-col md:flex-row justify-between'>
        <input type='hidden' name='form-name' value='newsletter' />
        <input
          type='email'
          name='email'
          placeholder={t('newsletter.email.placeholder')}
          className='mb-5 md:mb-0 md:mr-10 border-2 bg-background text-globalText focus:border-globalText focus:ring-globalText border-globalText rounded-md'
        />
        <Button message={t('newsletter.button')} type='submit' />
      </div>
      {formSuccess && (
        <div className='mt-10 md:mt-5 text-md md:text-lg text-green-500 transition-all'>
          {formSuccess.message}
        </div>
      )}
      {formError && (
        <div className='mt-10 md:mt-5 text-md md:text-lg text-red-500 transition-all'>
          {formError.message}
        </div>
      )}
    </form>
  )
}
