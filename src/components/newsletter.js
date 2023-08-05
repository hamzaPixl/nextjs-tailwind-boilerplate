import React, { useState } from 'react'
import { useTranslate } from '../hooks/useTranslate'
import Button from './button'

export default function Newsletter() {
  const { t } = useTranslate()
  const [formSuccess, setFormSuccess] = useState()
  const [formError, setFormError] = useState()

  const handleSubmit = (event) => {
    event.preventDefault()

    const myForm = event.target
    const formData = new FormData(myForm)
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        setFormSuccess({ message: t('newsletter.form.success') })
        console.log(t('newsletter.form.success'))
      })
      .catch(() => {
        setFormError({ message: t('newsletter.form.error') })
        console.log(t('newsletter.form.error'))
      })
  }
  return (
    <div className='bg-background p-10'>
      <div className='text-globalText mb-5 flex flex-wrap justify-between items-center'>
        <div className='max-w-lg'>
          <div className='text-xl md:text-3xl font-bold pb-5'>{t('newsletter.title')}</div>
          <div className='text-md md:text-base font-normal leading-normal'>
            {t('newsletter.description')}
          </div>
        </div>
        <form method='POST' onSubmit={handleSubmit} name='newsletter' netlify='true'>
          <div className='w-full mt-10 md:mt-0 flex flex-col md:flex-row justify-between'>
            <input type='hidden' name='form-name' value='newsletter' />
            <input
              type='text'
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
      </div>
    </div>
  )
}
