import React from 'react'
import { Container } from '@mui/material'
import { Footer, Header, Intro, Projects, Stacks } from './components'
import { usePageRef } from '@/hooks'

export default function Home() {
  const { headerRef } = usePageRef()
  return (
    <>
      <Header />
      <Container component="main" ref={headerRef}>
        <Intro />
        <Projects />
        <Stacks />
        {/* <About /> */}
        <Footer />
      </Container>
    </>
  )
}
