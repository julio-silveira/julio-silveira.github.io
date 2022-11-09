import React from 'react'
// import { About } from './components/About'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Intro } from './components/Intro'
import { Projects } from './components/Projects'
import { Techs } from './components/Techs'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Intro />
      <Projects />
      <Techs />
      {/* <About /> */}
      <Footer />
    </>
  )
}

export default App
