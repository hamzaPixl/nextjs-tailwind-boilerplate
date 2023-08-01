import React from 'react'
import AboutCard from './cards/about'

export default function AboutHero({
  title,
  description,
  mainLink,
  mainLinkText,
  secondaryLink,
  secondaryLinkText,
  backgroundImage,
}) {
  return (
    <div
      className='bg-background md:p-10 w-full bg-[image:var(--image-url)] bg-cover bg-center bg-no-repeat relative h-[38em]'
      style={{ '--image-url': `url(${backgroundImage})` }}
    >
      <div className='absolute -bottom-20'>
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
