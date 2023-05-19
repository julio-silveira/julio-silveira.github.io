import React from 'react'
import projectList from '@/data/projectList'
import { usePageRef } from '@/hooks'
import { Typography, Stack, Paper, Grow } from '@mui/material'

import ProjectDetails from './components/ProjectDetails'
import ProjectLinks from './components/ProjectLinks'
import { TransitionGroup } from 'react-transition-group'

export default function Projects() {
  const { projectsRef } = usePageRef()

  return (
    <Stack
      ref={projectsRef}
      pt={10}
      component="section"
      sx={{ minHeight: '100vh' }}
    >
      <Grow in timeout={1000}>
        <Typography variant="h3">Projetos</Typography>
      </Grow>
      <Stack component={TransitionGroup} spacing={2} sx={{ mt: 5 }}>
        {projectList.map((project) => (
          <Grow in timeout={500} key={project.projectName}>
            <Paper
              p={2}
              component={Stack}
              direction="row"
              justifyContent="space-between"
            >
              <ProjectDetails project={project} />
              <ProjectLinks
                urlDeploy={project.urlDeploy}
                urlGithub={project.urlGithub}
              />
            </Paper>
          </Grow>
        ))}
      </Stack>
    </Stack>
  )
}
