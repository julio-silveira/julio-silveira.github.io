import { Stack, Typography, Chip, Grow, Zoom } from '@mui/material'
import React from 'react'
import { TransitionGroup } from 'react-transition-group'

type Project = {
  projectName: string
  description: string
  stacks: string[]
}

type Props = {
  project: Project
}

export default function ProjectDetails({ project }: Props) {
  return (
    <Stack spacing={1} flexGrow={1}>
      <Grow in={true} timeout={1000}>
        <Typography color="primary" variant="h6">
          {project.projectName}
        </Typography>
      </Grow>

      <Grow in={true} timeout={1000}>
        <Typography variant="body2">{project.description}</Typography>
      </Grow>

      <Stack
        component={TransitionGroup}
        mt={1}
        direction="row"
        spacing={1}
        sx={{
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {project.stacks.map((stack) => (
          <Zoom key={`${project.projectName} ${stack}`} enter timeout={1200}>
            <Chip variant="outlined" color="primary" label={stack} />
          </Zoom>
        ))}
      </Stack>
    </Stack>
  )
}
