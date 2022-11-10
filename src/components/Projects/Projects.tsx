import * as React from 'react'
import projectList from '../../data/projectList'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Unstable_Grid2'
import theme from '../../themes/theme'
import { Typography } from '@mui/material'
import { Stack } from '@mui/system'

export default function Projects() {
  return (
    <Box component="section" sx={{ flexGrow: 1, minHeight: '100vh' }}>
      <h2>Projects</h2>
      <Grid container spacing={2}>
        {projectList.map(
          (
            { projectName, description, image, urlDeploy, urlGithub },
            index
          ) => (
            <Grid
              component="article"
              xs={12}
              md={6}
              sx={{ display: 'flex', justifyContent: 'center' }}
              key={`projectName${index}`}
            >
              <Paper
                elevation={24}
                sx={{
                  maxWidth: { xs: 300, md: 400 },
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  bgcolor: theme.palette.primary.main,
                  color: 'white',
                  border: '2px solid red',
                  borderRadius: '25px 0',
                  padding: '20px'
                }}
              >
                <img width={100} src={image} alt={`image-card}`} />
                <h3>{projectName}</h3>
                <p>{description}</p>
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
                    variant="button"
                    href={urlGithub}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      textAlign: 'center',
                      background:
                        'linear-gradient(to right,#945DD6,#6978D1,#13ADC7)',
                      padding: '10px',
                      borderRadius: '30px'
                    }}
                  >
                    Acessar o Repositório
                  </Typography>

                  <Typography
                    component="a"
                    variant="button"
                    href={urlDeploy}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      textAlign: 'center',
                      background:
                        'linear-gradient(to right,#945DD6,#6978D1,#13ADC7)',
                      padding: '10px',
                      borderRadius: '30px'
                    }}
                  >
                    Visualizar o site
                  </Typography>
                </Stack>
              </Paper>
            </Grid>
          )
        )}
      </Grid>
    </Box>
  )
}
