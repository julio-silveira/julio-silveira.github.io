import React from 'react'
import { Box, Grow, Stack, Typography } from '@mui/material'
import { usePageRef } from '@/hooks'
import { techBarList } from '@/data/techslist'
import fill from '@/assets/fill.svg'
import StackCard from './components/StackCard'
import CustomMarquee from './components/CustomMarkee'
import { Fade } from 'react-awesome-reveal'

export default function Stacks() {
  const { stacksRef } = usePageRef()

  return (
    <Stack
      ref={stacksRef}
      pt={10}
      component="section"
      sx={{ minHeight: '100vh' }}
    >
      <Fade triggerOnce>
        <Typography variant="h3">Tecnologias</Typography>
      </Fade>

      <Box
        alignSelf="flex-end"
        component="img"
        src={fill}
        sx={{ width: '150px', opacity: 0.2 }}
        pt={1}
      />

      <CustomMarquee>
        {techBarList.map(({ techKey, name }) => (
          <StackCard key={techKey} techKey={techKey} name={name} />
        ))}
      </CustomMarquee>
      <Box
        pt={1}
        alignSelf="start"
        component="img"
        src={fill}
        sx={{ width: '150px', opacity: 0.1, transform: 'rotate(180deg)' }}
      />
    </Stack>
  )
}
