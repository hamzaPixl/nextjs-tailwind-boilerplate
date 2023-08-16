import React, { useEffect, useState } from 'react'
import Layout from '../components/layout'
import Newsletter from '../components/newsletter'
import { useTranslate } from '../hooks/useTranslate'
import ProjectCard from '../components/cards/project'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { allProjects, filters } from '../api/projects'

export default function Projects() {
  const router = useRouter()
  const { t } = useTranslate()
  const [projects, setProjects] = useState(allProjects)
  const [filter, setFilter] = useState(filters[0])

  useEffect(() => {
    if (router.query.filter?.length > 0) {
      setFilter(router.query.filter)
      setProjects(allProjects.filter((item) => item.filter.includes(router.query.filter)))
    }
  }, [router.query])

  return (
    <Layout>
      <div className='flex flex-col flex-wrap gap-4 w-full'>
        <div className='text-2xl xl:text-4xl font-bold'>{t('projects.title')}</div>
        <div className='text-base font-normal max-w-2xl'>{t('projects.description')}</div>
        <div className='flex flex-col md:flex-row text-primary-500'>
          {filters.map((item, index) => (
            <Link key={index} href={`/projects?filter=${item}`}>
              <div
                className={`transition-all cursor-pointer text-base pr-5 mb-5 md:m-0 ${
                  item === filter && 'font-bold underline underline-offset-8 text-primary-900'
                } hover:font-bold hover:underline-offset-8 hover:underline hover:text-primary-900`}
              >
                {t(`projects.filter.${item}`)}
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className='my-10 items-center w-full'>
        <div className='grid grid-flow-dense grid-cols-1 md:grid-cols-3 gap-4'>
          {projects.map((item, index) => (
            <ProjectCard key={index} project={item} />
          ))}
        </div>
      </div>

      <Newsletter />
    </Layout>
  )
}
