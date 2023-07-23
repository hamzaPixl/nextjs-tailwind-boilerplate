import React from 'react'
import Layout from '../components/layout'
import Newsletter from '../components/newsletter'
import { useTranslate } from '../hooks/useTranslate'
import AboutCard from '../components/cards/about'
import TeamCard from '../components/cards/team'
import Image from 'next/image'
import QuoteCard from '../components/cards/quote'

export default function About() {
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
          title={t('about.title')}
          description={t('about.description')}
          className='absolute -bottom-20'
          mainLink={'/contact'}
          mainLinkText={t('about.hero.primaryAction')}
          secondaryLink={'/contact'}
          secondaryLinkText={t('about.hero.secondaryAction')}
        />
      </div>
      <div className='flex justify-center p-10 w-full my-10'>
        <QuoteCard
          quote={t('about.quote1.text')}
          source={t('about.quote1.source')}
          image='/images/quote/jurica-koletic.png'
        />
      </div>
      <div className='flex flex-row justify-between p-10 w-full my-10'>
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
      <div className='flex flex-row justify-around p-10 w-full my-10'>
        <Image
          loading='lazy'
          width={450}
          height={350}
          alt='About 1 illustration'
          src={'/images/about/about1.png'}
        />
        <Image
          loading='lazy'
          width={450}
          height={350}
          alt='About 2 illustration'
          src={'/images/about/about2.png'}
        />
      </div>

      <Newsletter />
    </Layout>
  )
}
