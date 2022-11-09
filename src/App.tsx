import React from 'react'
import { About } from './components/About'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Intro } from './components/Intro'
import { Projects } from './components/Projects'
import { Techs } from './components/Techs'

function App() {
  return (
    <div>
      <Header />
      <Intro />
      <Projects />
      <Techs />
      <About />
      <Footer />
    </div>
  )
}

export default App
