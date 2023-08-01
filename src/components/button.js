import Link from 'next/link'
import React from 'react'

export default function Button({ message, link }) {
  return (
    <button
      className={`p-5 mr-2 transition-all hover:text-globalText hover:bg-background bg-globalText text-background md:font-bold text:xs md:text-base leading-normal rounded-md border-2 hover:border-globalText border-background`}
      type='submit'
    >
      {link ? <Link href={link}>{message}</Link> : <span>{message}</span>}
    </button>
  )
}

export function InvertedButton({ message, link }) {
  return (
    <button
      className={`p-5 mr-2 transition-all hover:text-background hover:bg-globalText bg-background text-globalText md:font-bold text:xs md:text-base leading-normal rounded-md border-2 hover:border-background`}
      type='submit'
    >
      {link ? <Link href={link}>{message}</Link> : <span>{message}</span>}
    </button>
  )
}
