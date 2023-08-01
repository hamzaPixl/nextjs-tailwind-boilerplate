import React from 'react'
import Button from '../button'
import { useTranslate } from '../../hooks/useTranslate'
import Link from 'next/link'

export default function ContactCard({ address, addressLink, phone, email, tva, contactLink }) {
  const { t } = useTranslate()
  return (
    <div className='p-10 bg-background text-globalText flex flex-col justify-around items-left font-normal text-base'>
      <div className='text-lg md:text-3xl font-bold pb-5'>{t('contact.card.title')}</div>
      <div className='pb-5'>
        <div>{address}</div>
        <Link href={addressLink || '/'}>{t('contact.card.map')}</Link>
      </div>
      <div className='pb-5 flex flex-col'>
        <Link href={`tel:${phone}`}>{phone}</Link>
        <Link href={`mailto:${phone}`}>{email}</Link>
      </div>
      <div className='pb-5'>
        <div>TVA {tva}</div>
      </div>
      <Button link={contactLink} message={t('contact.card.action')} />
    </div>
  )
}
