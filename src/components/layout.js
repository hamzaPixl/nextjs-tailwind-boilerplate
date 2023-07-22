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
        <Container>
          <Header />
          {children}
          <Footer />
        </Container>
      </main>
    </>
  )
}
