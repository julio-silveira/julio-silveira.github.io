import * as React from 'react'
import { Box, Button, Container, Stack, Typography } from '@mui/material'
import info from '../../../../assets/info.svg'
import { usePageRef } from '../../../../hooks'

export default function Intro() {
  const { handleScrollToProjects } = usePageRef()

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
          flex: '2 1 60%',
          alignItems: 'flex-start'
        }}
      >
        <Box>
          <Typography
            variant="h3"
            sx={{ fontFamily: 'monospace', fontWeight: 'bold' }}
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
          onClick={handleScrollToProjects}
          sx={{
            background: 'linear-gradient(to right,#945DD6,#13ADC7)',
            borderRadius: 5
          }}
        >
          Saiba Mais
        </Button>
      </Stack>

      <Box
        component="img"
        src={info}
        alt="image"
        sx={{ flex: '1 2 40%', maxWidth: '40%' }}
      />
    </Container>
  )
}
