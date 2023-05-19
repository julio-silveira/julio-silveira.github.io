import React from 'react'
import { Box, Typography } from '@mui/material'
import { techBarList, techNamesList } from '../../../../data/techslist'
import { usePageRef } from '../../../../hooks'

export default function Stacks() {
  const { stacksRef } = usePageRef()
  return (
    <Box sx={{ width: '100%', minHeight: '90vh' }} ref={stacksRef}>
      <Typography variant="h3">Tecnologias</Typography>
      {techBarList.map(({ techName, color }, index) => (
        <article key={`techName-${index}`}>
          <Box
            component="img"
            src={`https://img.shields.io/badge/${techName}-${color}.svg?style=for-the-badge&logo=${techName}`}
          />
        </article>
      ))}
      <Typography variant="h4">Outras tecnologias e habilidades</Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          flexDirection: { xs: 'column', md: 'row' }
        }}
      >
        {techNamesList.map((tech, index) => (
          <Box
            key={`tech-${index}`}
            component="img"
            src={`https://img.shields.io/badge/${tech}-black.svg?style=for-the-badge&logo=${tech}&logoColor=white`}
          />
        ))}
      </Box>
    </Box>
  )
}
