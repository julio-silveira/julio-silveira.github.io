import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import * as React from 'react'
import { SocialBar } from '../SocialBar'
import personalData from '@/data/personalData'

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        pb: '10px'
      }}
    >
      <Box>
        <Typography sx={{ fontSize: { xs: '14px', md: '20px' } }} variant="h6">
          Email
        </Typography>
        <Typography sx={{ fontSize: { xs: '14px', md: '20px' } }} variant="h6">
          {personalData.email}
        </Typography>
      </Box>

      <SocialBar />
    </Box>
  )
}
