import React from 'react'
import { Fab, Tooltip, Zoom } from '@mui/material'
import { Link } from 'react-router-dom'

type Props = {
  to: string
  tooltip: string
  icon: React.ReactNode
}

export default function FabLink({ to, tooltip, icon }: Props) {
  return (
    <Zoom in timeout={1000}>
      <Tooltip title={tooltip}>
        <Fab
          size="small"
          color="primary"
          component={Link}
          to={to}
          target="_blank"
          rel="noopener noreferrer"
        >
          {icon}
        </Fab>
      </Tooltip>
    </Zoom>
  )
}
