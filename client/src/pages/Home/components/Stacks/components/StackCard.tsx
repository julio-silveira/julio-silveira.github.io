import React from 'react'
import { Paper, Stack, Box, Typography } from '@mui/material'
import { Fade } from 'react-awesome-reveal'

type Props = {
  techKey: string
  key: string
  name?: string
}

export default function StackCard({ techKey, name }: Props) {
  return (
    <Fade cascade delay={100} duration={2000} triggerOnce>
      <Paper
        component={Stack}
        spacing={1}
        sx={{
          p: 2,
          mx: 1,
          width: '150px',
          transition: 'transform 0.6s, background-color 0.6s',
          alignItems: 'center',
          '&:hover': {
            backgroundColor: 'secondary.main',
            transform: 'scale(1.1)'
          }
        }}
      >
        <Box
          sx={{ width: '75px' }}
          component="img"
          src={`https://cdn.simpleicons.org/${techKey}/FFA500`}
        />
        <Typography variant="h6">
          {name ? name.toUpperCase() : techKey.toUpperCase()}
        </Typography>
      </Paper>
    </Fade>
  )
}
