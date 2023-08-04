import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout'
import { useTranslate } from '../../hooks/useTranslate'
import { useRouter } from 'next/router'
import { policies } from '../../api/policies'

export default function PolicyDetail() {
  const router = useRouter()
  const { t } = useTranslate()
  const [policy, setPolicy] = useState()

  useEffect(() => {
    if (router.query.slug?.length > 0) {
      setPolicy(policies.find((item) => item.name === router.query.slug))
    }
  }, [router.query])

  return (
    <Layout>
      {policy && (
        <div className='flex flex-wrap mt-20 md:mt-40'>
          <h1 className='text-lg md:text-3xl font-semibold'>{t(`policy.${policy.name}.page`)}</h1>
          <div className='w-full lg:w-8/12 px-4'></div>
        </div>
      )}
    </Layout>
  )
}
