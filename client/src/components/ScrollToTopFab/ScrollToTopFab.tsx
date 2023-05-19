import React, { useCallback } from 'react'
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp'
import { Box, Fab, Zoom, useScrollTrigger } from '@mui/material'

function ScrollToTopFab() {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100
  })
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])
  return (
    <Zoom in={trigger}>
      <Box
        role="presentation"
        sx={{
          position: 'fixed',
          bottom: 60,
          right: 32,
          zIndex: 1
        }}
      >
        <Fab
          onClick={scrollToTop}
          color="primary"
          aria-label="Scroll back to top"
        >
          <KeyboardArrowUp fontSize="large" />
        </Fab>
      </Box>
    </Zoom>
  )
}
export default ScrollToTopFab
