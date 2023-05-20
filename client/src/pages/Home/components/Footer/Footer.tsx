import { Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import * as React from 'react'
import { SocialBar } from '../../../../components/SocialBar'
import personalData from '@/data/personalData'

export default function Footer() {
  return (
    <Paper
      component="footer"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        mt: 2,
        py: 1
      }}
    >
      <Box>
        <Typography
          pl={2}
          variant="body1"
        >{`Email: ${personalData.email}`}</Typography>
      </Box>

      <SocialBar />
    </Paper>
  )
}
