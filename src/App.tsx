import React, { useRef } from 'react'
import { Container } from '@mui/system'
// import { About } from './components/About'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Intro } from './components/Intro'
import { Projects } from './components/Projects'
import { Techs } from './components/Techs'
import './App.css'

function App() {
  const techsRef = useRef(null)
  const projectsRef = useRef(null)

  return (
    <>
      <Header techsRef={techsRef} projectsRef={projectsRef} />
      <Container>
        <Intro />
        <Projects ref={projectsRef} />
        <Techs ref={techsRef} />
        {/* <About /> */}
      </Container>
      <Footer />
    </>
  )
}

export default App
