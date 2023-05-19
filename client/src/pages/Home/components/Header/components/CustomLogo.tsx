import React from 'react'
import CodeIcon from '@mui/icons-material/Code'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

export default function CustomLogo() {
  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <CodeIcon />
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none'
        }}
      >
        PORTFÓLIO
      </Typography>
    </Stack>
  )
}
