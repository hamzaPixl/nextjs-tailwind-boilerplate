import React from 'react'
import SEO from '../components/seo'
import Layout from '../components/layout'
import { useTranslate } from '../hooks/useTranslate'

export default function IndexPage() {
  const { t } = useTranslate()
  return (
    <Layout>
      <SEO />
      <h1>{t('title')}</h1>
    </Layout>
  )
}
