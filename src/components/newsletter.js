import React, { useState } from 'react'
import { useTranslate } from '../hooks/useTranslate'
import NewsletterForm from './forms/newsletter'

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
        <NewsletterForm
          formSuccess={formSuccess}
          handleSubmit={handleSubmit}
          formError={formError}
        />
      </div>
    </div>
  )
}
