import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'

import { SocialBar } from '../../../../components/SocialBar'
import CustomLogo from './components/CustomLogo'
import ResponsiveMenu from './components/ResponsiveMenu'

function Header() {
  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar
          sx={{ flexDirection: { xs: 'row-reverse', md: 'row' } }}
          disableGutters
        >
          <CustomLogo />

          <ResponsiveMenu />

          <Box
            sx={{
              display: { xs: 'hidden', md: 'visible' },
              order: { xs: -1, md: 2 }
            }}
          >
            <SocialBar />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
