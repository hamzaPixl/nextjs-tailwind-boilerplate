import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout'
import { useTranslate } from '../../hooks/useTranslate'
import { useRouter } from 'next/router'
import { allProjects } from '../../api/projects'
import ProjectDetailCard from '../../components/cards/projectDetail'
import ProjectCard from '../../components/cards/project'
import Link from 'next/link'
import Image from 'next/image'

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
          <div
            key={index}
            style={{ '--image-url': `url(${item})` }}
            className='flex justify-start items-end bg-no-repeat bg-cover bg-center rounded-md bg-[image:var(--image-url)] h-96'
          ></div>
        ))}
      </div>

      {/**
       * Before & After projects
       */}
      <div className='flex flex-row text-left justify-between w-full font-bold text-4xl text-background my-10'>
        <div className='w-1/2 mr-20'>
          <div className='mb-10'>{t('projects.before')}</div>
          <div className='grid grid-flow-dense gap-4 w-full'>
            {project?.beforeImages?.[featuredBefore] && (
              <div>
                <Image
                  loading='lazy'
                  width={650}
                  height={350}
                  className='rounded-lg'
                  src={project?.beforeImages?.[featuredBefore]}
                  alt={`Feature before image`}
                />
              </div>
            )}
            {project?.beforeImages?.length > 1 && (
              <div className='grid grid-cols-5 gap-4'>
                {project?.beforeImages.map((item, index) => (
                  <div key={index}>
                    <Image
                      loading='lazy'
                      width={650}
                      height={350}
                      className='cursor-pointer rounded-lg filter grayscale hover:grayscale-0 transition-all'
                      onClick={() => {
                        setFeaturedBefore(index)
                        setFeaturedAfter(index)
                      }}
                      src={project?.beforeImages?.[index]}
                      alt={`Feature before image ${index}`}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className='w-1/2'>
          <div className='mb-10'>{t('projects.after')}</div>
          <div className='grid grid-flow-dense gap-4 w-full'>
            {project?.afterImages?.[featuredAfter] && (
              <div>
                <Image
                  loading='lazy'
                  width={650}
                  height={350}
                  className='rounded-lg'
                  src={project?.afterImages?.[featuredAfter]}
                  alt={`Feature after image`}
                />
              </div>
            )}
            {project?.afterImages?.length > 1 && (
              <div className='grid grid-cols-5 gap-4'>
                {project?.afterImages.map((item, index) => (
                  <div key={index}>
                    <Image
                      loading='lazy'
                      width={650}
                      height={350}
                      className='cursor-pointer rounded-lg filter grayscale hover:grayscale-0 transition-all'
                      onClick={() => {
                        setFeaturedBefore(index)
                        setFeaturedAfter(index)
                      }}
                      src={project?.afterImages?.[index]}
                      alt={`Feature after image ${index}`}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/**
       * Plans
       */}
      <div className='text-background w-full items-center text-center my-40 flex flex-col'>
        <div className='text-3xl font-bold pb-5'>{t('projects.plan')}</div>
        <div className='text-base font-normal leading-normal w-1/3'>
          {t('projects.plan.description')}
        </div>
        <div className='grid grid-flow-dense gap-4 w-full my-10'>
          {project?.plansImages?.[featuredPlan] && (
            <div className='justify-self-center'>
              <Image
                loading='lazy'
                width={650}
                height={350}
                className='rounded-lg'
                src={project?.plansImages?.[featuredPlan]}
                alt={`Feature after image`}
              />
            </div>
          )}
          {project?.plansImages?.length > 1 && (
            <div className='grid grid-cols-5 gap-4'>
              {project?.plansImages.map((item, index) => (
                <div key={index}>
                  <Image
                    loading='lazy'
                    width={650}
                    height={350}
                    className='cursor-pointer rounded-lg filter grayscale hover:grayscale-0 transition-all'
                    onClick={() => setFeaturedPlan(index)}
                    src={project?.plansImages?.[index]}
                    alt={`Feature after image ${index}`}
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
