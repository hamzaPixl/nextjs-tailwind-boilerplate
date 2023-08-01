import React, { useState } from 'react'
import Layout from '../components/layout'
import Newsletter from '../components/newsletter'
import injected from '../injected.json'
import ContactForm from '../components/forms/contact'
import ContactHero from '../components/contactHero'

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
      <div className='w-full mb-20'>
        <ContactHero
          backgroundImage={`/images/hero/hero-about.png`}
          address={injected.address.address}
          addressLink={injected.address.url}
          contactLink={'/contact'}
          phone={injected.tel}
          email={injected.email}
          tva={injected.tva}
        />
      </div>
      <div className='w-full my-5'>
        <ContactForm
          handleInput={handleInput}
          submitForm={submitForm}
          formData={formData}
          formSuccess={formSuccess}
          formSuccessMessage={formSuccessMessage}
        />
      </div>
      <div className='w-full md:mt-40'>
        <Newsletter />
      </div>
    </Layout>
  )
}
