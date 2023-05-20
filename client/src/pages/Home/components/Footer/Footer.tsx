import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import * as React from 'react'
import { SocialBar } from '../../../../components/SocialBar'
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
        <Typography variant="body1">Email</Typography>
        <Typography variant="body1">{personalData.email}</Typography>
      </Box>

      <SocialBar />
    </Box>
  )
}
