import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

interface ProgressBarProps {
  completed: number
  techName: string
}

const ProgressBar = (props: ProgressBarProps) => {
  const { completed, techName } = props
  const [loadCompleted, setLoadCompleted] = useState(0)

  useEffect(() => {
    setInterval(() => setLoadCompleted(completed), 500)
  }, [completed])

  const getRanking = () => {
    if (completed <= 25) {
      return 'Begineer'
    } else if (completed <= 50) {
      return 'Regular'
    } else if (completed <= 75) {
      return 'Advanced'
    } else if (completed <= 100) {
      return 'Expert'
    }
  }

  return (
    <Box
      sx={{
        height: '20px',
        width: '80%',
        backgroundColor: '#e0e0de',
        borderRadius: '50px',
        margin: '50px'
      }}
    >
      <Box
        sx={{
          backgroundColor: '#0F1624',
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <span> {techName} </span>
        <span>{getRanking()}</span>
      </Box>
      <Box
        sx={{
          height: '100%',
          width: `${loadCompleted}%`,
          background: 'linear-gradient(to right,#945DD6,#6978D1,#13ADC7)',
          borderRadius: 'inherit',
          transition: 'width 1s ease-in-out',
          textAlign: 'right'
        }}
      >
        <Typography
          variant="body1"
          sx={{ paddingRight: '5px', color: 'white', fontWeight: '700' }}
        >{`${loadCompleted}%`}</Typography>
      </Box>
    </Box>
  )
}

export default ProgressBar
