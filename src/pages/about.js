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
      <div className='w-full mb-20 md:mb-40'>
        <AboutHero
          backgroundImage={'/images/hero/hero-about.png'}
          title={t('about.title')}
          description={t('about.description')}
          mainLink={'/contact'}
          mainLinkText={t('about.hero.primaryAction')}
          secondaryLink={'/contact'}
          secondaryLinkText={t('about.hero.secondaryAction')}
        />
      </div>

      <div className='w-full mt-10 md:mt-20 md:mb-[34rem]'>
        <QuoteCard
          quote={t('about.quote1.text')}
          source={t('about.quote1.source')}
          image={'/images/quote/jurica-koletic.png'}
        />
      </div>

      <div className='w-full my-5'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 my-10 w-full'>
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

      <div className='w-full my-5'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 my-10 w-full'>
          <div className='w-full relative h-[15rem] md:h-[32rem]'>
            <Image
              loading='lazy'
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              fill
              alt='About 1 illustration'
              src={'/images/about/about1.png'}
            />
          </div>
          <div className='w-full relative h-[15rem] md:h-[32rem]'>
            <Image
              loading='lazy'
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              fill
              alt='About 1 illustration'
              src={'/images/about/about1.png'}
            />
          </div>
        </div>
      </div>

      <div className='w-full md:mt-40'>
        <Newsletter />
      </div>
    </Layout>
  )
}
