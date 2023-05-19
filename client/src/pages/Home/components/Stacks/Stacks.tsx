import React from 'react'
import { Stack, Typography } from '@mui/material'
import { usePageRef } from '@/hooks'
import { techBarList } from '@/data/techslist'
import StackCard from './components/StackCard'
import CustomMarquee from './components/CustomMarkee'

export default function Stacks() {
  const { stacksRef } = usePageRef()

  return (
    <Stack
      ref={stacksRef}
      pt={10}
      component="section"
      sx={{ minHeight: '100vh' }}
    >
      <Typography mb={5} variant="h3">
        Tecnologias
      </Typography>

      <CustomMarquee>
        {techBarList.map(({ techKey, name }, i) => (
          <StackCard key={`${techKey}-${i}`} techKey={techKey} name={name} />
        ))}
      </CustomMarquee>
    </Stack>
  )
}
