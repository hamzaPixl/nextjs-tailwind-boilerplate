import React from 'react'
import SEO from './seo'
import Container from './container'
import Footer from './footer'
import Header from './header'
import CookieBanner from './banners/cookie'

export default function Layout({ children }) {
  return (
    <>
      <main>
        <SEO />
        <Header />
        <Container>{children}</Container>
        <Footer />
        <CookieBanner />
      </main>
    </>
  )
}
