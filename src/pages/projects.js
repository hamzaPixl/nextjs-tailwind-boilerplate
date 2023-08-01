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
      <div className='self-baseline mb-10 w-full text-background'>
        <div className='text-lg md:text-3xl font-bold mb-10'>{t('projects.title')}</div>
        <div className='text-base font-normal mb-10'>{t('projects.description')}</div>
        <div className='mb-5 md:mb-20 flex flex-col md:flex-row  text-background/50'>
          {filters.map((item, index) => (
            <Link key={index} href={`/projects?filter=${item}`}>
              <div
                className={`transition-all cursor-pointer text-base pr-5 mb-5 md:m-0 ${
                  item === filter && 'font-bold underline underline-offset-8 text-background'
                } hover:font-bold hover:underline-offset-8 hover:underline hover:text-background`}
              >
                {t(`projects.filter.${item}`)}
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className='grid grid-flow-dense grid-cols-2 md:grid-cols-3 gap-4 my-10 w-full'>
        {projects.slice(0, 4).map((item, index) => (
          <div className='grid gap-4' key={index}>
            <ProjectCard project={item} />
          </div>
        ))}
        {projects.slice(4, 8).map((item, index) => (
          <div className='grid gap-4' key={index}>
            <ProjectCard project={item} />
          </div>
        ))}
        {projects.slice(8, 12).map((item, index) => (
          <div className='grid gap-4' key={index}>
            <ProjectCard project={item} />
          </div>
        ))}
        {projects.slice(12, 16).map((item, index) => (
          <div className='grid gap-4' key={index}>
            <ProjectCard project={item} />
          </div>
        ))}
      </div>
      <div className='w-full md:mt-40'>
        <Newsletter />
      </div>
    </Layout>
  )
}
