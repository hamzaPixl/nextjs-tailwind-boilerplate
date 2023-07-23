import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout'
import { useTranslate } from '../../hooks/useTranslate'
import { useRouter } from 'next/router'
import { allProjects } from '../../api/projects'
import ProjectDetailCard from '../../components/cards/projectDetail'
import ProjectCard from '../../components/cards/project'
import Link from 'next/link'

export default function ProjectDetail() {
  const router = useRouter()
  const { t } = useTranslate()
  const [project, setProject] = useState()

  useEffect(() => {
    if (router.query.slug?.length > 0) {
      setProject(allProjects.find((item) => item.name === router.query.slug))
    }
  }, [router.query])

  return (
    <Layout>
      <div
        className='bg-background flex flex-col justify-between items-left p-10 w-full relative mb-40'
        style={{
          backgroundImage: `url('/images/hero/hero-about.png')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: '34em',
        }}
      >
        {project && <ProjectDetailCard project={project} />}
      </div>

      <div className='grid grid-flow-dense grid-cols-2 md:grid-cols-3 gap-4 my-10 w-full'>
        {project?.images?.map((item, index) => (
          <div key={index}>
            <ProjectCard project={{ ...project, defaultImage: item }} />
          </div>
        ))}
      </div>

      <div className='text-background w-full items-center text-center my-40'>
        <div className='text-3xl font-bold pb-5'>{t('projects.plan')}</div>
        <div className='text-base font-normal leading-normal'>{t('projects.plan.description')}</div>
      </div>

      <div className='w-full flex bg-background flex-col text-base text-globalText p-10 justify-between'>
        <div className='flex flex-row text-globalText justify-between w-full font-bold'>
          <div className='text-3xl pb-5'>{t('projects.other')}</div>
          <Link
            className='pb-5 hover:underline hover:underline-offset-8 transition-all'
            href={'/projects'}
          >
            {t('projects.all')}
          </Link>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4 my-10 w-full'>
          {allProjects.slice(0, 3).map((item, index) => (
            <div key={index}>
              <ProjectCard project={item} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}
