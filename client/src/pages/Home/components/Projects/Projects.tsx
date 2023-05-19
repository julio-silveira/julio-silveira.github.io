import React from 'react'
import projectList from '@/data/projectList'
import { usePageRef } from '@/hooks'
import { Typography, Stack, Chip, Fab, Paper, Tooltip } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import WebIcon from '@mui/icons-material/Web'
import { Link } from 'react-router-dom'

export default function Projects() {
  const { projectsRef } = usePageRef()

  return (
    <Stack
      ref={projectsRef}
      pt={10}
      component="section"
      sx={{ minHeight: '100vh' }}
    >
      <Typography variant="h3">Projetos</Typography>

      <Stack spacing={2} sx={{ mt: 5 }}>
        {projectList.map((project) => (
          <Paper p={2} component={Stack} key={project.projectName}>
            <Stack direction="row" justifyContent="space-between">
              <Stack spacing={1} flexGrow={1}>
                <Typography color="primary" variant="h6">
                  {project.projectName}
                </Typography>

                <Typography variant="body2">{project.description}</Typography>
                <Stack
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
                      variant="outlined"
                      color="primary"
                      key={`${project.projectName} ${stack}`}
                      label={stack}
                    />
                  ))}
                </Stack>
              </Stack>

              <Stack justifyContent="center" spacing={1}>
                <Tooltip title="Repositório">
                  <Fab
                    size="small"
                    color="primary"
                    component={Link}
                    to={project.urlGithub}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHubIcon />
                  </Fab>
                </Tooltip>
                <Tooltip title="Preview">
                  <Fab
                    size="small"
                    color="primary"
                    component={Link}
                    to={project.urlDeploy}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WebIcon />
                  </Fab>
                </Tooltip>
              </Stack>
            </Stack>
          </Paper>
        ))}
      </Stack>
    </Stack>
  )
}
