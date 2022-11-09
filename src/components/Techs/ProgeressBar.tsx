import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

interface ProgressBarProps {
  completed: number
}

const ProgressBar = (props: ProgressBarProps) => {
  const { completed } = props
  const [loadCompleted, setLoadCompleted] = useState(0)

  useEffect(() => {
    setInterval(() => setLoadCompleted(completed), 500)
  }, [completed])

  return (
    <Box
      sx={{
        height: '20px',
        width: '100%',
        backgroundColor: '#e0e0de',
        borderRadius: '50px',
        margin: '50px'
      }}
    >
      <Box
        sx={{
          height: '100%',
          width: `${loadCompleted}%`,
          backgroundColor: 'black',
          borderRadius: 'inherit',
          transition: 'width 1s ease-in-out',
          textAlign: 'right'
        }}
      >
        <Typography
          variant="body1"
          sx={{ color: 'white', fontWeight: '700' }}
        >{`${completed}%`}</Typography>
      </Box>
    </Box>
  )
}

export default ProgressBar
