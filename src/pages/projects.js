import React, { useEffect, useState } from 'react'
import Layout from '../components/layout'
import Newsletter from '../components/newsletter'
import { useTranslate } from '../hooks/useTranslate'
import ProjectCard from '../components/cards/project'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { allProjects, filters } from '../api/projects'

const getBatchedProjects = (filterdProjects, grid = 3) => {
  const bP = []
  let batches = 0
  let batch = grid

  if (filterdProjects.length <= grid) {
    batches = filterdProjects.length
    batch = 1
  } else {
    if (!(filterdProjects.length % grid)) {
      // adaptable to grid
      batches = filterdProjects.length / grid
    } else {
      batches = Math.floor(filterdProjects.length / grid) + 1
    }
  }
  for (let i = 0; i < batches; i++) {
    bP.push(filterdProjects.slice(i * batch, (i + 1) * batch))
  }
  console.log(bP)
  return bP
}

export default function Projects() {
  const router = useRouter()
  const { t } = useTranslate()
  const [projects, setProjects] = useState(getBatchedProjects(allProjects))
  const [filter, setFilter] = useState(filters[0])

  useEffect(() => {
    if (router.query.filter?.length > 0) {
      setFilter(router.query.filter)
      setProjects(
        getBatchedProjects(allProjects.filter((item) => item.filter.includes(router.query.filter))),
      )
    }
  }, [router.query])

  return (
    <Layout>
      <div className='self-baseline my-10 w-2/3 text-background'>
        <div className='text-3xl font-bold mb-10'>{t('projects.title')}</div>
        <div className='text-md font-normal mb-10'>{t('projects.description')}</div>
        <div className='mb-20 flex flex-row '>
          {filters.map((item, index) => (
            <Link key={index} href={`/projects?filter=${item}`}>
              <div
                className={`text-md pr-5 ${
                  item === filter && 'font-bold underline underline-offset-8'
                } hover:font-bold transition-all hover:cursor-pointer hover:underline-offset-8 hover:underline`}
              >
                {t(`projects.filter.${item}`)}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className='grid grid-flow-dense grid-cols-2 md:grid-cols-4 gap-4 my-10 w-full'>
        {projects.map((batch, index) => (
          <div key={index} className='grid gap-4'>
            {batch.map((item, index) => (
              <div key={index}>
                <ProjectCard project={item} />
              </div>
            ))}
          </div>
        ))}
      </div>
      <Newsletter />
    </Layout>
  )
}
