import React from 'react'
// import { About } from './components/About'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Intro } from './components/Intro'
import { Projects } from './components/Projects'
import { Techs } from './components/Techs'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import './App.css'

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
})

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header />
      <Intro />
      <Projects />
      <Techs />
      {/* <About /> */}
      <Footer />
    </ThemeProvider>
  )
}

export default App
