import React from 'react'
import Layout from '../components/layout'
import Newsletter from '../components/newsletter'
import { useTranslate } from '../hooks/useTranslate'
import ProjectCard from '../components/cards/project'
import { InvertedButton } from '../components/button'
import { allProjects } from '../api/projects'
import AboutHero from '../components/aboutHero'
import MoreAbout from '../components/moreAbout'
import QuoteCard from '../components/cards/quote'

export default function Home() {
  const { t } = useTranslate()
  return (
    <Layout>
      <div className='w-full mb-40'>
        <AboutHero
          backgroundImage={'/images/hero/hero-about.png'}
          title={t('home.title')}
          description={t('home.description')}
          mainLink={'/contact'}
          mainLinkText={t('home.hero.primaryAction')}
        />
      </div>

      <div className='w-full my-5'>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4 my-10 w-full'>
          {allProjects.slice(0, 3).map((item, index) => (
            <div key={index}>
              <ProjectCard project={item} />
            </div>
          ))}
        </div>
        <div className='flex justify-center my-10'>
          <InvertedButton link='/projects' message={t('home.projects')} />
        </div>
      </div>

      <div className='w-full mt-10 md:mt-20 md:mb-[34rem]'>
        <QuoteCard
          source={'- John Doe'}
          quote={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.'
          }
          image={'/images/quote/jurica-koletic.png'}
        />
      </div>

      <div className='w-full my-20'>
        <MoreAbout
          backgroundImage={'/images/hero/hero-about.png'}
          title={t('home.about.title')}
          description={t('home.about.description')}
          mainLink={'/about'}
          mainLinkText={t('home.about.primaryAction')}
        />
      </div>

      <div className='w-full md:mt-40'>
        <Newsletter />
      </div>
    </Layout>
  )
}
