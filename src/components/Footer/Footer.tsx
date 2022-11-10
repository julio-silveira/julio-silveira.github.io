import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import * as React from 'react'
import personalData from '../../data/personalData'
import { SocialBar } from '../SocialBar'

export default function Footer() {
  return (
    <footer>
      <Box sx={{ display: 'flex', justifyContent: 'space-around', pb: '10px' }}>
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Typography variant="h6">Me liga</Typography>
          <Typography variant="h6">{personalData.phone}</Typography>
        </Box>
        <Box>
          <Typography
            sx={{ fontSize: { xs: '14px', md: '20px' } }}
            variant="h6"
          >
            Email
          </Typography>
          <Typography
            sx={{ fontSize: { xs: '14px', md: '20px' } }}
            variant="h6"
          >
            {personalData.email}
          </Typography>
        </Box>

        <SocialBar />
      </Box>
    </footer>
  )
}
