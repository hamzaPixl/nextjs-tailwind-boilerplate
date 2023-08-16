import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout'
import { useTranslate } from '../../hooks/useTranslate'
import { useRouter } from 'next/router'
import { allProjects } from '../../api/projects'
import ProjectCard from '../../components/cards/project'
import Link from 'next/link'
import Image from 'next/image'
import ProjectHero from '../../components/hero/projectHero'

export default function ProjectDetail() {
  const router = useRouter()
  const { t } = useTranslate()
  const [project, setProject] = useState()
  const [featuredBefore, setFeaturedBefore] = useState(0)
  const [featuredAfter, setFeaturedAfter] = useState(0)
  const [featuredPlan, setFeaturedPlan] = useState(0)

  useEffect(() => {
    if (router.query.slug?.length > 0) {
      setProject(allProjects.find((item) => item.name === router.query.slug))
    }
  }, [router.query])

  return (
    <Layout>
      {project && <ProjectHero project={project} />}

      {/**
       * Featured image
       */}
      <div className='mt-10 grid grid-flow-dense grid-cols-1 md:grid-cols-3 gap-4 w-full'>
        {project?.images?.map((item, index) => (
          <Image
            loading='lazy'
            className='m-auto'
            width={500}
            height={500}
            key={index}
            sizes='100vw'
            alt='Project illustration'
            src={item}
          />
        ))}
      </div>

      {/**
       * Before & After projects
       */}
      <div className='mt-10 gap-2 flex flex-col md:flex-row justify-between w-full font-bold text-2xl md:text-4xl'>
        <div className='flex flex-col gap-4'>
          <div>{t('projects.before')}</div>
          <div className='grid grid-flow-dense gap-4 w-full'>
            {project?.beforeImages?.[featuredBefore] && (
              <div>
                <Image
                  loading='lazy'
                  width={650}
                  height={350}
                  className='rounded-sm'
                  src={project?.beforeImages?.[featuredBefore]}
                  alt={`Feature before image`}
                />
              </div>
            )}
            {project?.beforeImages?.length > 1 && (
              <div className='grid grid-cols-5 gap-4'>
                {project?.beforeImages.map((item, index) => (
                  <Image
                    key={index}
                    loading='lazy'
                    sizes='100vw'
                    width={650}
                    height={350}
                    className='cursor-pointer rounded-sm filter grayscale hover:grayscale-0 transition-all'
                    onClick={() => {
                      setFeaturedBefore(index)
                      setFeaturedAfter(index)
                    }}
                    src={project?.beforeImages?.[index]}
                    alt={`Feature before image ${index}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <div>{t('projects.after')}</div>
          <div className='grid grid-flow-dense gap-4 w-full'>
            {project?.afterImages?.[featuredAfter] && (
              <div>
                <Image
                  loading='lazy'
                  width={650}
                  height={350}
                  className='rounded-sm'
                  src={project?.afterImages?.[featuredAfter]}
                  alt={`Feature after image`}
                />
              </div>
            )}
            {project?.afterImages?.length > 1 && (
              <div className='grid grid-cols-5 gap-4'>
                {project?.afterImages.map((item, index) => (
                  <Image
                    key={index}
                    loading='lazy'
                    sizes='100vw'
                    width={650}
                    height={350}
                    className='cursor-pointer rounded-sm filter grayscale hover:grayscale-0 transition-all'
                    onClick={() => {
                      setFeaturedAfter(index)
                      setFeaturedAfter(index)
                    }}
                    src={project?.afterImages?.[index]}
                    alt={`Feature after image ${index}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/**
       * Plans
       */}
      <div className='mt-10 w-full items-center text-center gap-4 flex flex-col'>
        <div className='text-2xl md:text-4xl font-bold'>{t('projects.plan')}</div>
        <div className='text-base font-normal leading-normal md:max-w-xl'>
          {t('projects.plan.description')}
        </div>
        <div className='grid grid-flow-dense gap-4 w-full my-10'>
          {project?.plansImages?.[featuredPlan] && (
            <div className='justify-self-center'>
              <Image
                loading='lazy'
                width={650}
                height={350}
                className='rounded-sm'
                src={project?.plansImages?.[featuredPlan]}
                alt={`Feature plan image`}
              />
            </div>
          )}
          {project?.plansImages?.length > 1 && (
            <div className='grid grid-flow-dense grid-cols-5 gap-4'>
              {project?.plansImages.map((item, index) => (
                <div key={index}>
                  <Image
                    loading='lazy'
                    width={650}
                    height={350}
                    className='cursor-pointer rounded-sm filter grayscale hover:grayscale-0 transition-all'
                    onClick={() => setFeaturedPlan(index)}
                    src={project?.plansImages?.[index]}
                    alt={`Feature plan image ${index}`}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/**
       * Other projects
       */}
      <div className='mt-10 w-full flex flex-wrap bg-primary-900 flex-col text-white p-10 justify-between'>
        <div className='flex gap-4 flex-row justify-between items-center w-full font-bold'>
          <div className='text-2xl md:text-4xl'>{t('projects.other')}</div>
          <Link
            className='text-base hover:underline hover:underline-offset-8 transition-all'
            href={'/projects'}
          >
            {t('projects.all')}
          </Link>
        </div>
        <div className='grid grid-flow-dense grid-cols-1 md:grid-cols-3 gap-4 mt-5'>
          {allProjects.slice(0, 3).map((item, index) => (
            <ProjectCard key={index} project={item} />
          ))}
        </div>
      </div>
    </Layout>
  )
}
