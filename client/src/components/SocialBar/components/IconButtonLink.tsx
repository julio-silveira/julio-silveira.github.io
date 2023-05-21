import React from 'react'
import { IconButton } from '@mui/material'
import { Link } from 'react-router-dom'

type Props = {
  to: string
  icon: React.ReactNode
}

export default function IconButtonLink({ to, icon }: Props) {
  return (
    <IconButton
      sx={{
        '& > *': {
          '&:hover': { color: 'secondary.main' },
          '&:active': { color: 'primary.main' }
        }
      }}
      component={Link}
      to={to}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </IconButton>
  )
}
