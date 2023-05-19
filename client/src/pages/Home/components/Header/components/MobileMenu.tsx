import React from 'react'
import { Box, IconButton, Menu, MenuItem, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import useHeader from '../useHeader'

export default function MobileMenu() {
  const { pages, anchorElNav, handleCloseNavMenu, handleOpenNavMenu } =
    useHeader()

  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: 'block', md: 'none' }
        }}
      >
        {pages.map(({ name, scrollFn }) => (
          <MenuItem key={name} onClick={scrollFn}>
            <Typography
              variant="body2"
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              {name}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  )
}
