import { Stack } from '@mui/material'
import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import WebIcon from '@mui/icons-material/Web'
import { FabLink } from '@/components'

type Props = {
  urlDeploy: string
  urlGithub: string
}

export default function ProjectLinks({ urlDeploy, urlGithub }: Props) {
  return (
    <Stack justifyContent="center" spacing={1}>
      <FabLink to={urlGithub} tooltip="Repositório" icon={<GitHubIcon />} />
      <FabLink to={urlDeploy} tooltip="Preview" icon={<WebIcon />} />
    </Stack>
  )
}
