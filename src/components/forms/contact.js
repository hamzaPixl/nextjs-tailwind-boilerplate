import React from 'react'
import { InvertedButton } from '../button'
import { useTranslate } from '../../hooks/useTranslate'

export default function ContactForm({ formSuccess, handleInput, formData, submitForm }) {
  const { t } = useTranslate()
  return (
    <div className='p-10 text-background flex flex-col justify-between items-left font-normal'>
      <h1 className='text-3xl font-bold'>{t('contact.form.title')}</h1>
      <div className='py-10 w-2/3 text-md'>{t('contact.form.description')}</div>
      {formSuccess ? (
        <div>{t('contact.form.success')}</div>
      ) : (
        <form method='POST' onSubmit={submitForm}>
          <div className='flex flex-row justify-between w-full pb-10'>
            <div className='w-1/2 pr-10'>
              <div className='flex flex-col justify-start pb-5'>
                <label className='font-bold'>{t('contact.form.name')}</label>
                <input
                  type='text'
                  name='name'
                  onChange={handleInput}
                  value={formData.name}
                  className='border focus:border-background focus:ring-background border-background/50 rounded-sm'
                />
              </div>
              <div className='flex flex-col justify-start'>
                <label className='font-bold'>{t('contact.form.email')}</label>
                <input
                  type='text'
                  name='email'
                  onChange={handleInput}
                  value={formData.email}
                  className='border focus:border-background focus:ring-background border-background/50 rounded-sm'
                />
              </div>
            </div>
            <div className='w-1/2 pl-10 flex flex-col justify-start'>
              <label className='font-bold'>{t('contact.form.message')}</label>
              <textarea
                name='message'
                onChange={handleInput}
                value={formData.message}
                className='border focus:border-background focus:ring-background border-background rounded-sm h-full'
              ></textarea>
            </div>
          </div>
          <InvertedButton type='submit' message={t('contact.form.send')} />
        </form>
      )}
    </div>
  )
}
