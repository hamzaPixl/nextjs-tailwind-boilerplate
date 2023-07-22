import React from 'react'
import SEO from './seo'
import Container from './container'
import Footer from './footer'
import Header from './header'

export default function Layout({ children }) {
  return (
    <>
      <main>
        <SEO />
        <Header />
        <Container>{children}</Container>
        <Footer />
      </main>
    </>
  )
}
