import { Stack, Typography, Chip } from '@mui/material'
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
      <Typography color="primary" variant="h6">
        {project.projectName}
      </Typography>

      <Typography variant="body2">{project.description}</Typography>

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
          <Chip
            key={`${project.projectName} ${stack}`}
            variant="outlined"
            color="primary"
            label={stack}
          />
        ))}
      </Stack>
    </Stack>
  )
}
