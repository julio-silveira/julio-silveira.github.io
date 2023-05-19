import React from 'react'
import { Container, Fade } from '@mui/material'
import { Footer, Header, Intro, Projects, Stacks } from './components'
import { ScrollToTopFab } from '@/components'

export default function Home() {
  return (
    <>
      <Header />
      <Container component="main">
        <Intro />
        <Projects />
        <Stacks />
        {/* <About /> */}
        <Footer />
      </Container>
      <ScrollToTopFab />
    </>
  )
}
