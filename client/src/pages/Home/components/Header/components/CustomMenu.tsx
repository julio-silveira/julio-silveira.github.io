import React from 'react'
import { Box, Button } from '@mui/material'
import useHeader from '../useHeader'

export default function CustomMenu() {
  const { pages } = useHeader()

  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      {pages.map(({ name, scrollFn }) => (
        <Button
          key={name}
          onClick={scrollFn}
          sx={{ my: 2, color: 'white', display: 'block' }}
        >
          {name}
        </Button>
      ))}
    </Box>
  )
}
