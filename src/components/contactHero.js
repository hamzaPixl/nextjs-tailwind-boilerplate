import React from 'react'
import ContactCard from './cards/contact'

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
    <div
      className='bg-background md:p-10 w-full bg-[image:var(--image-url)] bg-cover bg-center bg-no-repeat relative h-[52em] md:h-[38em]'
      style={{ '--image-url': `url(${backgroundImage})` }}
    >
      <div className='absolute md:-bottom-20 md:right-20 bottom-0'>
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
