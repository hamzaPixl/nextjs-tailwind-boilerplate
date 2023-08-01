import React from 'react'

export default function Container({ children }) {
  return (
    <div className='w-screen'>
      <div className='md:max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4 bg-globalText text-background text-xs md:text-md font-bold leading-normal'>
        {children}
      </div>
    </div>
  )
}
