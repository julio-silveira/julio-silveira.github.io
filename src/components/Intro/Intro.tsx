import { Container, Typography } from '@mui/material'
import * as React from 'react'

export default function Intro() {
  return (
    <Container sx={{ minHeight: '93vh' }}>
      <Typography variant="h3">Oi, eu sou o Júlio</Typography>
      <Typography variant="body1">
        {'Desenvolvedor Front End, estudante da Trybe e professor de Física'}
      </Typography>
    </Container>
  )
}
