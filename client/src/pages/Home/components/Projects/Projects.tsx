import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import { Box, Paper, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import { CardButton, ProjectCard, ProjectsSection } from './styles'
import projectList from '../../../../data/projectList'
import { usePageRef } from '../../../../hooks'

export default function Projects() {
  const { projectsRef } = usePageRef()

  return (
    <ProjectsSection ref={projectsRef} component="section" mb="5vh">
      <Typography variant="h3">Projetos</Typography>

      <Grid container spacing={4} sx={{ mt: '5vh' }}>
        {projectList.map((project, index) => (
          <Grid
            component="article"
            xs={12}
            md={6}
            lg={4}
            sx={{ display: 'flex', justifyContent: 'center' }}
            key={`projectName${index}`}
          >
            <ProjectCard
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                maxWidth: { xs: '300px', md: '400px' }
              }}
            >
              <Box
                component="img"
                sx={{ maxWidth: '200px' }}
                className="card-picture"
                src={project.image}
                alt={`image-card}`}
              />
              <Typography py={1} variant="h6">
                {project.projectName}
              </Typography>
              <Typography variant="body2">{project.description}</Typography>
              <Stack
                direction="row"
                spacing={2}
                mb="10px"
                sx={{
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                {project.stacks.map((stack) => (
                  <Paper
                    sx={{
                      padding: '3px',
                      bgcolor: '#0F1624',
                      color: 'white'
                    }}
                    key={`${project.projectName} ${stack}`}
                  >
                    {stack}
                  </Paper>
                ))}
              </Stack>
              <Stack
                direction="row"
                spacing={1}
                sx={{
                  width: '100%',
                  justifyContent: 'center'
                }}
              >
                <Typography
                  component="a"
                  href={project.urlGithub}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CardButton variant="contained" size="small">
                    Acessar o Repositório
                  </CardButton>
                </Typography>

                <Typography
                  component="a"
                  href={project.urlDeploy}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CardButton variant="contained" size="small">
                    Visualizar o site
                  </CardButton>
                </Typography>
              </Stack>
            </ProjectCard>
          </Grid>
        ))}
      </Grid>
    </ProjectsSection>
  )
}
