import React, { ReactNode } from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from '../themes/theme'
import { RefProvider } from './RefProvider'

interface ProviderProps {
  children: ReactNode
}

export function Providers({ children }: ProviderProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RefProvider>{children}</RefProvider>
    </ThemeProvider>
  )
}

export default Providers
