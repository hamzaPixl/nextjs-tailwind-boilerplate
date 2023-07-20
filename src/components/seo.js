import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import manifest from '../../public/manifest.json'
import injected from '../injected.json'

const defaultMeta = {
  type: 'website',
  robots: 'follow, index',
}

export default function SEO({ image, twitter }) {
  const themeColor = injected.manifest.themeColor
  const description = injected.description
  const author = injected.author.name
  const meta = [{ keywords: injected.keywords }]
  const title = injected.title
  const name = injected.manifest.projectShortName
  const url = injected.manifest.url

  const router = useRouter()
  const metaData = [
    {
      name: 'robots',
      content: defaultMeta.robots,
    },
    {
      name: `description`,
      content: description,
    },
    {
      property: `og:url`,
      content: `${url}${router.asPath}`,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      property: `og:site_name`,
      content: name,
    },
    {
      property: `og:image`,
      name: 'image',
      content: image,
    },
    {
      name: `twitter:card`,
      content: `summary_large_image`,
    },
    {
      name: `twitter:image`,
      content: image,
    },
    {
      name: `twitter:site`,
      content: twitter,
    },
    {
      name: `twitter:creator`,
      content: author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: description,
    },
    {
      name: `theme-color`,
      content: themeColor,
    },
  ].concat(meta)

  const favicons = manifest.icons.concat([
    {
      rel: 'icon',
      src: '/favicon/favicon.ico',
    },
    {
      rel: 'manifest',
      src: '/manifest.json',
    },
  ])

  return (
    <Head>
      <title>{title}</title>
      {metaData.map(({ name, content, property }, i) => (
        <meta key={i} property={property} name={name} content={content} />
      ))}
      {favicons.map((linkProps) => (
        <link
          key={linkProps.src}
          rel={linkProps.rel}
          sizes={linkProps.sizes}
          href={linkProps.src}
        />
      ))}
      <link rel='canonical' href={`${url}${router.asPath}`} />
      <link rel='alternate' href={`${url}${router.asPath}`} hrefLang='x-default' />
      <link rel='alternate' href={`${url}${router.asPath}`} hrefLang='en' />
      <link rel='alternate' href={`${url}${router.asPath}/en`} hrefLang='en' />
      <link rel='alternate' href={`${url}${router.asPath}/fr`} hrefLang='fr' />
      <link rel='alternate' href={`${url}${router.asPath}/nl`} hrefLang='nl' />
    </Head>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}
