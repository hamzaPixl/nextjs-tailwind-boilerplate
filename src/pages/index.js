import React from 'react'
import Layout from '../components/layout'
import Newsletter from '../components/newsletter'
import { useTranslate } from '../hooks/useTranslate'
import ProjectCard from '../components/cards/project'
import { InvertedButton } from '../components/button'
import { allProjects } from '../api/projects'
import AboutHero from '../components/hero/aboutHero'
import MoreAbout from '../components/moreAbout'
import QuoteCard from '../components/cards/quote'

export default function Home() {
  const { t } = useTranslate()
  return (
    <Layout>
      <AboutHero
        image={'/images/hero/hero-about.png'}
        title={t('home.title')}
        description={t('home.description')}
        mainLink={'/contact'}
        mainLinkText={t('home.hero.primaryAction')}
      />

      <div className='flex flex-col gap-2 justify-center py-10 items-center w-full'>
        <div className='grid grid-flow-dense grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-10'>
          {allProjects.slice(0, 3).map((item, index) => (
            <ProjectCard key={index} project={item} />
          ))}
        </div>
        <InvertedButton link='/projects' message={t('home.projects')} />
      </div>

      <QuoteCard
        quote={t('about.quote1.text')}
        source={t('about.quote1.source')}
        image={'/images/quote/jurica-koletic.png'}
      />

      <MoreAbout
        image={'/images/hero/hero-about.png'}
        title={t('home.about.title')}
        description={t('home.about.description')}
        mainLink={'/about'}
        mainLinkText={t('home.about.primaryAction')}
      />

      <Newsletter />
    </Layout>
  )
}
