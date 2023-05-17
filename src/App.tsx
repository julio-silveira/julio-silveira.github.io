import React, { useRef } from 'react'
import { Container } from '@mui/system'
// import { About } from './components/About'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Intro } from './components/Intro'
import { Projects } from './components/Projects'
import { Stacks } from './components/Stacks'
import './App.css'

function App() {
  const techsRef = useRef<HTMLElement>(null)
  const projectsRef = useRef<HTMLElement>(null)

  return (
    <>
      <Header techsRef={techsRef} projectsRef={projectsRef} />
      <Container>
        <Intro projectsRef={projectsRef} />
        <Projects ref={projectsRef} />
        <Stacks ref={techsRef} />
        {/* <About /> */}
      </Container>
      <Footer />
    </>
  )
}

export default App
