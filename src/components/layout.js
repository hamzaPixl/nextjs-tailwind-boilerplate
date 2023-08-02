import React, { useState } from 'react'
import SEO from './seo'
import Container from './container'
import Footer from './footer'
import Header from './header'
import MenuOverlay from './menu/overlay'

export default function Layout({ children }) {
  const [navbarOpen, setNavbarOpen] = useState(false)
  return (
    <>
      <main>
        <SEO />
        <Header navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
        <MenuOverlay navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
        <Container>{children}</Container>
        <Footer navbarOpen={navbarOpen} />
      </main>
    </>
  )
}
