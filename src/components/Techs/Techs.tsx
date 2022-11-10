import { Box, Typography } from '@mui/material'
import React, { forwardRef } from 'react'
import { techBarList, techNamesList } from '../../data/techslist'
import ProgressBar from './ProgeressBar'

const Techs = forwardRef((_props, ref) => (
  <Box sx={{ width: '100%', minHeight: '90vh' }} ref={ref}>
    <Typography variant="h3">Tecnologias</Typography>
    {techBarList.map(({ techName, completed }, index) => (
      <article key={`techName-${index}`}>
        <ProgressBar completed={completed} techName={techName} />
      </article>
    ))}
    <Typography variant="h4">Outras tecnologias e habilidades</Typography>
    {techNamesList.map((tech, index) => (
      <p key={`tech-${index}`}>{tech}</p>
    ))}
  </Box>
))

Techs.displayName = 'Techs'

export default Techs
