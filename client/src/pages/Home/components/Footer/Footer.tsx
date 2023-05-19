import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import * as React from 'react'
import { SocialBar } from '../SocialBar'
import personalData from '../../../../data/personalData'
import { usePageRef } from '../../../../hooks'

export default function Footer() {
  const { handlescrollToHeader } = usePageRef()
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
      <Button onClick={handlescrollToHeader}>top</Button>
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <Typography sx={{ fontSize: { xs: '14px', md: '20px' } }} variant="h6">
          Me liga
        </Typography>
        <Typography sx={{ fontSize: { xs: '14px', md: '20px' } }} variant="h6">
          {personalData.phone}
        </Typography>
      </Box>
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
