import React from 'react'
import Layout from '../components/layout'
import Newsletter from '../components/newsletter'
import { useTranslate } from '../hooks/useTranslate'
import AboutCard from '../components/cards/about'
import QuoteCard from '../components/cards/quote'
import ProjectCard from '../components/cards/project'
import { InvertedButton } from '../components/button'

export default function Home() {
  const { t } = useTranslate()
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
        <AboutCard
          title={t('home.title')}
          description={t('home.description')}
          className='absolute -bottom-20'
          mainLink={'/contact'}
          mainLinkText={t('home.hero.primaryAction')}
        />
      </div>
      <div className='flex flex-row justify-around p-10 w-full my-10'>
        <ProjectCard
          title={t('home.project1.title')}
          description={t('home.project1.description')}
          image='/images/project/project1.png'
          link='/projects/project1'
        />
        <ProjectCard
          title={t('home.project2.title')}
          description={t('home.project2.description')}
          image='/images/project/project2.png'
          link='/projects/project2'
        />
        <ProjectCard
          title={t('home.project3.title')}
          description={t('home.project3.description')}
          image='/images/project/project3.png'
          link='/projects/project3'
        />
      </div>
      <InvertedButton link='/projects' message={t('home.projects')} />
      <div className='flex justify-center p-10 w-full my-10'>
        <QuoteCard
          quote={t('about.quote1.text')}
          source={t('about.quote1.source')}
          image='/images/quote/jurica-koletic.png'
        />
      </div>
      <div
        className='bg-background flex flex-col justify-start items-left w-full relative my-24'
        style={{
          backgroundImage: `url('/images/hero/hero-about.png')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: '32em',
        }}
      >
        <AboutCard
          title={t('home.about.title')}
          description={t('home.about.description')}
          className='absolute -bottom-20 right-20'
          mainLink={'/contact'}
          mainLinkText={t('home.about.primaryAction')}
        />
      </div>
      <Newsletter />
    </Layout>
  )
}
