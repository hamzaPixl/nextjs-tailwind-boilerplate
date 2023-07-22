import React from 'react'
import Button from '../button'
import { useTranslate } from '../../hooks/useTranslate'
import Link from 'next/link'

export default function ContactCard({ address, addressLink, phone, email, tva, contactLink }) {
  const { t } = useTranslate()
  return (
    <div className='p-10 w-80 h-96 bg-background text-globalText flex flex-col justify-between items-left font-normal'>
      <div className='text-3xl font-bold'>{t('contact.card.title')}</div>
      <div>
        <div>{address}</div>
        <Link href={addressLink || '/'}>{t('contact.card.map')}</Link>
      </div>
      <div>
        <Link href={`tel:${phone}`}>{phone}</Link>
        <Link href={`mailto:${phone}`}>{email}</Link>
      </div>
      <div>
        <div>TVA {tva}</div>
      </div>
      <Button link={contactLink} message={t('contact.card.action')} />
    </div>
  )
}
