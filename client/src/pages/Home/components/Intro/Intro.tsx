import React from 'react'
import { Box, Button, Stack, Typography } from '@mui/material'
import { usePageRef } from '@/hooks'
import info from '@/assets/info.svg'
import { AttentionSeeker, Fade } from 'react-awesome-reveal'

export default function Intro() {
  const { handleScrollToProjects } = usePageRef()

  return (
    <Stack
      component="section"
      direction="row"
      alignItems="center"
      sx={{ minHeight: '100vh' }}
    >
      <Fade>
        <Stack spacing={4} alignItems="flex-start">
          <Box>
            <AttentionSeeker triggerOnce>
              <Typography
                variant="h3"
                sx={{ fontFamily: 'monospace', fontWeight: 'bold' }}
              >
                Oi, eu sou o Júlio
              </Typography>
              <Typography variant="h4">
                Desenvolvedor Fullstack e professor de física.
              </Typography>
            </AttentionSeeker>
          </Box>

          <AttentionSeeker effect="pulse" delay={1000} duration={1000}>
            <Button
              size="large"
              variant="contained"
              onClick={handleScrollToProjects}
              sx={{ borderRadius: 5 }}
            >
              Saiba Mais
            </Button>
          </AttentionSeeker>
        </Stack>
      </Fade>

      <Box component="img" src={info} alt="image" sx={{ maxWidth: '40%' }} />
    </Stack>
  )
}
