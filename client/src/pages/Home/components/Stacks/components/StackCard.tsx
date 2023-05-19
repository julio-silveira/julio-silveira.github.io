import React from 'react'
import { Paper, Stack, Box, Typography } from '@mui/material'
import { Key } from '@mui/icons-material'

type Props = {
  techKey: string
  key: string
  name?: string
}

export default function StackCard({ techKey, name, key }: Props) {
  return (
    <Paper
      component={Stack}
      spacing={1}
      key={key}
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
  )
}
