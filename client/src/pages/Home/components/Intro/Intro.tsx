import React from 'react'
import { Box, Button, Fade, Stack, Typography } from '@mui/material'
import { usePageRef } from '@/hooks'
import info from '@/assets/info.svg'

export default function Intro() {
  const { handleScrollToProjects } = usePageRef()

  return (
    <Stack
      component="section"
      direction="row"
      alignItems="center"
      sx={{ minHeight: '100vh' }}
    >
      <Fade appear in timeout={1000}>
        <Stack spacing={4} alignItems="flex-start">
          <Box>
            <Typography
              variant="h3"
              sx={{ fontFamily: 'monospace', fontWeight: 'bold' }}
            >
              Oi, eu sou o Júlio
            </Typography>
            <Typography variant="h4">
              Desenvolvedor Fullstack e professor de física.
            </Typography>
          </Box>
          <Button
            variant="contained"
            onClick={handleScrollToProjects}
            sx={{ borderRadius: 5 }}
          >
            Saiba Mais
          </Button>
        </Stack>
      </Fade>

      <Fade appear in timeout={1000}>
        <Box component="img" src={info} alt="image" sx={{ maxWidth: '40%' }} />
      </Fade>
    </Stack>
  )
}
