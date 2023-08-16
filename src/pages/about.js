import React from 'react'
import Layout from '../components/layout'
import Newsletter from '../components/newsletter'
import { useTranslate } from '../hooks/useTranslate'
import TeamCard from '../components/cards/team'
import Image from 'next/image'
import AboutHero from '../components/hero/aboutHero'
import QuoteCard from '../components/cards/quote'

export default function About() {
  const { t } = useTranslate()
  return (
    <Layout>
      <AboutHero
        image={'/images/hero/hero-about.png'}
        title={t('about.title')}
        description={t('about.description')}
        mainLink={'/contact'}
        mainLinkText={t('about.hero.primaryAction')}
        secondaryLink={'/contact'}
        secondaryLinkText={t('about.hero.secondaryAction')}
      />

      <QuoteCard
        quote={t('about.quote1.text')}
        source={t('about.quote1.source')}
        image={'/images/quote/jurica-koletic.png'}
      />

      <div className='flex flex-col gap-2 justify-center py-10 items-center w-full'>
        <div className='grid grid-flow-dense grid-cols-1 md:grid-cols-3 gap-6'>
          <TeamCard
            description={t('about.team.member1.description')}
            firstName={'Ricardo'}
            lastName={'Ramirez'}
            link={'https://www.linkedin.com/in/ricardo-ramirez-1a1a1a1a1/'}
            image='/images/teams/ricardo.png'
          />
          <TeamCard
            description={t('about.team.member3.description')}
            firstName={'Ricardo'}
            lastName={'Ramirez'}
            link={'https://www.linkedin.com/in/ricardo-ramirez-1a1a1a1a1/'}
            image='/images/teams/ricardo.png'
          />
          <TeamCard
            description={t('about.team.member2.description')}
            firstName={'Ricardo'}
            lastName={'Ramirez'}
            link={'https://www.linkedin.com/in/ricardo-ramirez-1a1a1a1a1/'}
            image='/images/teams/ricardo.png'
          />
        </div>
      </div>

      <div className='flex flex-col gap-2 justify-center py-10 items-center w-full'>
        <div className='grid grid-flow-dense grid-cols-1 md:grid-cols-2 gap-4'>
          <div className='w-full h-auto'>
            <Image
              loading='lazy'
              sizes='100vw'
              width={500}
              height={500}
              alt='About 1 illustration'
              src={'/images/about/about1.png'}
            />
          </div>
          <div className='w-full h-auto'>
            <Image
              width={500}
              height={500}
              loading='lazy'
              sizes='100vw'
              alt='About 1 illustration'
              src={'/images/about/about1.png'}
            />
          </div>
        </div>
      </div>

      <Newsletter />
    </Layout>
  )
}
