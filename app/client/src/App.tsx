import React, { useRef } from 'react'
import { Container } from '@mui/system'
// import { About } from './components/About'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Intro } from './components/Intro'
import { Projects } from './components/Projects'
import { Stacks } from './components/Stacks'
import './App.css'
import { Fab, Tooltip } from '@mui/material'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import personalData from './data/personalData'

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
      <Tooltip title="Falar no whatsapp" arrow placement="top">
        <Fab
          LinkComponent={'a'}
          href={personalData.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          color="secondary"
          sx={{ position: 'fixed', bottom: 10, right: 10 }}
          aria-label="add"
        >
          <WhatsAppIcon sx={{ color: 'white' }} />
        </Fab>
      </Tooltip>
    </>
  )
}

export default App
