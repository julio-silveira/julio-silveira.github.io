import React from 'react'
import projectList from '@/data/projectList'
import { usePageRef } from '@/hooks'
import { Typography, Stack, Paper } from '@mui/material'

import ProjectDetails from './components/ProjectDetails'
import ProjectLinks from './components/ProjectLinks'
import { Fade } from 'react-awesome-reveal'

export default function Projects() {
  const { projectsRef } = usePageRef()

  return (
    <Stack
      ref={projectsRef}
      pt={10}
      component="section"
      sx={{ minHeight: '100vh' }}
    >
      <Fade duration={500} triggerOnce>
        <Typography variant="h3">Projetos</Typography>
      </Fade>
      <Stack component={Fade} triggerOnce duration={1000} sx={{ mt: 1 }}>
        {projectList.map((project) => (
          <Paper
            key={project.projectName}
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
        ))}
      </Stack>
    </Stack>
  )
}
