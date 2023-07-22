import React from 'react'
import Layout from '../components/layout'
import Newsletter from '../components/newsletter'
import { useTranslate } from '../hooks/useTranslate'
import MissionCard from '../components/cards/mission'
import AboutCard from '../components/cards/about'

const missions = 7

export default function Mission() {
  const { t } = useTranslate()
  return (
    <Layout>
      <div
        className='bg-background flex flex-col justify-between items-left p-10 w-full relative mb-40'
        style={{
          backgroundImage: `url('/images/hero/hero-mission.png')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: '34em',
        }}
      >
        <AboutCard
          title={t('mission.title')}
          description={t('mission.description')}
          className='absolute -bottom-20'
        />
      </div>
      {Array.from({ length: missions }).map((_, i) => (
        <MissionCard
          key={i}
          description={t(`mission.${i + 1}.description`)}
          index={i}
          inverted={(i + 1) % 2 === 1}
          title={t(`mission.${i + 1}.title`)}
          image={`/images/mission/mission${i + 1}.png`}
        />
      ))}
      <Newsletter />
    </Layout>
  )
}
