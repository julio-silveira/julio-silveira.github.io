import React from 'react'
import { Stack, Typography, Paper, Box } from '@mui/material'
import { Fade } from 'react-awesome-reveal'
import { usePageRef } from '@/hooks'
import fill from '@/assets/fill.svg'

export default function About() {
  const { aboutRef } = usePageRef()
  return (
    <Stack
      ref={aboutRef}
      pt={10}
      component="section"
      sx={{ minHeight: '100vh', display: 'flex' }}
    >
      <Fade duration={500} triggerOnce>
        <Typography sx={{ alignSelf: 'center' }} pb={2} variant="h3">
          Sobre mim
        </Typography>
      </Fade>
      <Box
        display={{ xs: 'none', md: 'block' }}
        alignSelf="flex-end"
        component="img"
        src={fill}
        sx={{ width: '150px', opacity: 0.2 }}
        pt={1}
      />
      <Fade>
        <Paper
          component={Stack}
          direction={{ xs: 'column-reverse', md: 'row' }}
          spacing={2}
          alignItems="center"
          my={2}
          p={4}
        >
          <Typography paragraph sx={{ textAlign: 'justify' }}>
            Olá! Sou Júlio, um desenvolvedor web fullstack e professor de
            física. Formado em Física e com mais de 3 anos de experiência no
            setor da educação, onde desenvolvi habilidades de comunicação e
            liderança que aplico em projetos de tecnologia. Sou especializado em
            linguagens como Javascript, Typescript, Java e tecnologias como
            React.js, HTML5 & CSS3, Docker, MySQL, PostgreSQL, Node.js, Express,
            Nest.JS, Spring Boot. Atualmente, atuo como freelancer,
            desenvolvendo softwares para simplificar processos dentro de escolas
            e outras empresas. Estou em busca de novas oportunidades para
            contribuir em projetos desafiadores e colaborativos.
          </Typography>
          <Box
            sx={{ width: { xs: '150px', md: '250px' } }}
            component="img"
            src="https://i.imgur.com/ispdHqS.png"
          />
        </Paper>
        <Box
          display={{ xs: 'none', md: 'block' }}
          pt={1}
          alignSelf="start"
          component="img"
          src={fill}
          sx={{ width: '150px', opacity: 0.1, transform: 'rotate(180deg)' }}
        />
      </Fade>
    </Stack>
  )
}
