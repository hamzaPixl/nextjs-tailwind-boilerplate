import React from 'react'
import ContactCard from '../cards/contact'
import Image from 'next/image'

export default function ContactHero({
  address,
  addressLink,
  contactLink = '/contact',
  phone,
  email,
  tva,
  backgroundImage,
}) {
  return (
    <div className='w-full md:relative mb-20'>
      <div className='w-full self-stretch'>
        <Image
          className='w-full'
          width={500}
          height={540}
          sizes='100vw'
          alt='Project hero illustration'
          src={backgroundImage}
        />
      </div>
      <div className='md:absolute md:px-10 bottom-0 md:-bottom-20 md:right-20'>
        <ContactCard
          address={address}
          addressLink={addressLink}
          contactLink={contactLink}
          phone={phone}
          email={email}
          tva={tva}
        />
      </div>
    </div>
  )
}
