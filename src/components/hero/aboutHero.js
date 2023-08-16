import React from 'react'
import AboutCard from '../cards/about'
import Image from 'next/image'

export default function AboutHero({
  title,
  description,
  mainLink,
  mainLinkText,
  secondaryLink,
  secondaryLinkText,
  image,
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
          src={image}
        />
      </div>
      <div className='md:absolute py-8 md:px-10 md:-bottom-20'>
        <AboutCard
          title={title}
          description={description}
          mainLink={mainLink}
          mainLinkText={mainLinkText}
          secondaryLink={secondaryLink}
          secondaryLinkText={secondaryLinkText}
        />
      </div>
    </div>
  )
}
