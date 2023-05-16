import React, { forwardRef } from 'react'
import projectList from '../../data/projectList'
import Grid from '@mui/material/Unstable_Grid2'
import { Paper, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import { CardButton, ProjectCard, ProjectsSection } from './styles'

const Projects = forwardRef((_props, ref) => {
  return (
    <ProjectsSection ref={ref} component="section" mb="5vh">
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
              <img
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
                    Repositório
                  </CardButton>
                </Typography>

                <Typography
                  component="a"
                  href={project.urlDeploy}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CardButton variant="contained" size="small">
                    Aplicação
                  </CardButton>
                </Typography>
              </Stack>
            </ProjectCard>
          </Grid>
        ))}
      </Grid>
    </ProjectsSection>
  )
})

Projects.displayName = 'Projects'

export default Projects
