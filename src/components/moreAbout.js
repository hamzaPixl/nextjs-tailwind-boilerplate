import React from 'react'
import AboutCard from './cards/about'

export default function MoreAbout({
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
      className='bg-background md:p-10 w-full md:w-4/5 bg-[image:var(--image-url)] bg-cover bg-center bg-no-repeat relative md:h-[38em] h-[60em]'
      style={{ '--image-url': `url(${backgroundImage})` }}
    >
      <div className='absolute md:-right-80 md:-bottom-40 bottom-0 mb-10'>
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
