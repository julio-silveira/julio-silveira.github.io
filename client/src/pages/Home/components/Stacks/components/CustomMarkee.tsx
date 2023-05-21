import React from 'react'
import { Box } from '@mui/material'
import Marquee from 'react-fast-marquee'

type Props = {
  children: React.ReactNode
}

export default function CustomMarquee({ children }: Props) {
  return (
    <Box
      component={Marquee}
      gradient={false}
      speed={70}
      pauseOnHover
      pauseOnClick
      play
      direction="left"
      sx={{ minHeight: '170px' }}
    >
      {children}
    </Box>
  )
}
