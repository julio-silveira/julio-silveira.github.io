import React from 'react'
import { useMediaQuery } from '@mui/material'
import MobileMenu from './MobileMenu'
import CustomMenu from './CustomMenu'

export default function ResponsiveMenu() {
  const mobile = useMediaQuery('(max-width:600px)')

  return mobile ? <MobileMenu /> : <CustomMenu />
}
