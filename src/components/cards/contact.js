import React from 'react'
import Button from '../button'
import { useTranslate } from '../../hooks/useTranslate'
import Link from 'next/link'

export default function ContactCard({ address, addressLink, phone, email, tva, contactLink }) {
  const { t } = useTranslate()
  return (
    <div className='p-10 bg-primary-900 text-white gap-4 flex flex-col justify-around items-left font-normal text-base'>
      <div className='text-xl md:text-3xl font-bold'>{t('contact.card.title')}</div>
      <div className='flex flex-col gap-2'>
        <div>{address}</div>
        <Link href={addressLink || '/'}>{t('contact.card.map')}</Link>
      </div>
      <div className='flex flex-col gap-2'>
        <Link href={`tel:${phone}`}>{phone}</Link>
        <Link href={`mailto:${email}`}>{email}</Link>
      </div>
      <div className='flex flex-col gap-2'>
        <div>TVA {tva}</div>
      </div>
      <Button link={contactLink} message={t('contact.card.action')} />
    </div>
  )
}
