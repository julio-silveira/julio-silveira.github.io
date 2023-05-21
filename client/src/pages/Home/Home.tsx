import React from 'react'
import { Container } from '@mui/material'
import { About, Footer, Header, Intro, Projects, Stacks } from './components'
import { ScrollToTopFab } from '@/components'

export default function Home() {
  return (
    <>
      <Header />
      <Container component="main">
        <Intro />
        <About />
        <Projects />
        <Stacks />
      </Container>
      <Footer />
      <ScrollToTopFab />
    </>
  )
}
