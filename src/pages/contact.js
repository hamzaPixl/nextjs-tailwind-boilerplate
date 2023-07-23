import React, { useState } from 'react'
import Layout from '../components/layout'
import Newsletter from '../components/newsletter'
import ContactCard from '../components/cards/contact'
import injected from '../injected.json'
import ContactForm from '../components/forms/contact'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [formSuccess, setFormSuccess] = useState(false)
  const [formSuccessMessage, setFormSuccessMessage] = useState('')

  const handleInput = (e) => {
    const fieldName = e.target.name
    const fieldValue = e.target.value

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }))
  }

  const submitForm = (e) => {
    e.preventDefault()

    const formURL = e.target.action
    const data = new FormData()

    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value)
    })

    fetch(formURL, {
      method: 'POST',
      body: data,
      headers: {
        accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setFormData({
          name: '',
          email: '',
          message: '',
        })

        setFormSuccess(true)
        setFormSuccessMessage(data.submission_text)
      })
  }

  return (
    <Layout>
      <div
        className='bg-background flex flex-col justify-between items-left p-10 w-full relative mb-40'
        style={{
          backgroundImage: `url('/images/hero/hero-about.png')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: '34em',
        }}
      >
        <div className='absolute -bottom-20 right-20'>
          <ContactCard
            address={injected.address.address}
            addressLink={injected.address.url}
            contactLink={'/contact'}
            phone={injected.tel}
            email={injected.email}
            tva={injected.tva}
          />
        </div>
      </div>
      <div className='flex flex-col justify-between p-20 w-full my-10'>
        <ContactForm
          handleInput={handleInput}
          submitForm={submitForm}
          formData={formData}
          formSuccess={formSuccess}
          formSuccessMessage={formSuccessMessage}
        />
      </div>
      <Newsletter />
    </Layout>
  )
}
