import React from 'react'
import AboutCard from './cards/about'
import Image from 'next/image'

export default function MoreAbout({
  title,
  description,
  mainLink,
  mainLinkText,
  secondaryLink,
  secondaryLinkText,
  image,
}) {
  return (
    <div className='w-full md:relative my-20 flew flex-col'>
      <div className='w-full xl:w-2/3 self-stretch'>
        <Image
          className='w-full'
          width={500}
          height={540}
          sizes='100vw'
          alt='Project hero illustration'
          src={image}
        />
      </div>
      <div className='xl:absolute py-8 xl:px-10 xl:-bottom-20 xl:right-1'>
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
