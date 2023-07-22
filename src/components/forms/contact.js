import React from 'react'
import { InvertedButton } from '../button'

export default function ContactForm({
  formSuccess,
  formSuccessMessage,
  handleInput,
  formData,
  submitForm,
}) {
  return (
    <div className='p-10 text-background flex flex-col justify-between items-left font-normal'>
      <h1 className='text-3xl font-bold'>Send us a message</h1>
      <div className='py-10 w-2/3 text-md'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin neque libero, venenatis sed
        ipsum ac, tincidunt mollis erat.
      </div>
      {formSuccess ? (
        <div>{formSuccessMessage}</div>
      ) : (
        <form method='POST' onSubmit={submitForm}>
          <div className='flex flex-row justify-between w-full pb-10'>
            <div className='w-1/2 pr-10'>
              <div className='flex flex-col justify-start pb-5'>
                <label className='font-bold'>Name</label>
                <input
                  type='text'
                  name='name'
                  onChange={handleInput}
                  value={formData.name}
                  className='border focus:border-background focus:ring-background border-background/50 rounded-sm'
                />
              </div>
              <div className='flex flex-col justify-start'>
                <label className='font-bold'>Email</label>
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
              <label className='font-bold'>Message</label>
              <textarea
                name='message'
                onChange={handleInput}
                value={formData.message}
                className='border focus:border-background focus:ring-background border-background rounded-sm h-full'
              ></textarea>
            </div>
          </div>
          <InvertedButton type='submit' message={'Send message'} />
        </form>
      )}
    </div>
  )
}
