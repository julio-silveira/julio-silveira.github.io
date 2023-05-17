import * as React from 'react'
import { Box, Button, Container, Stack, Typography } from '@mui/material'
import info from '../../assets/info.svg'

interface InfoProps {
  projectsRef: React.RefObject<HTMLElement>
}
const Intro: React.FC<InfoProps> = ({ projectsRef }) => {
  const handleScroll = () => {
    projectsRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })
  }

  return (
    <Container
      component="section"
      sx={{
        minHeight: '93vh',
        display: `flex`,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
      }}
    >
      <Stack
        spacing={4}
        sx={{
          width: '60%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'flex-start'
        }}
      >
        <Box>
          <Typography
            variant="h3"
            sx={{ fontFamily: 'monospace', fontWeight: 700 }}
          >
            Oi, eu sou o Júlio
          </Typography>
          <Typography variant="h4">
            {
              'Desenvolvedor Front End, estudante da Trybe e professor de Física'
            }
          </Typography>
        </Box>
        <Button
          variant="contained"
          onClick={handleScroll}
          sx={{
            background: 'linear-gradient(to right,#945DD6,#6978D1,#13ADC7)',
            borderRadius: '25px'
          }}
        >
          Saiba Mais
        </Button>
      </Stack>

      <Box sx={{ width: '40%' }}>
        <img style={{ maxWidth: '100%' }} src={info} alt="image" />
      </Box>
    </Container>
  )
}

export default Intro
