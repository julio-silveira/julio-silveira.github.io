import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import * as React from 'react'
import { SocialBar } from '../SocialBar'

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'Center',
        pb: '10px'
      }}
    >
      <SocialBar />
    </Box>
  )
}
