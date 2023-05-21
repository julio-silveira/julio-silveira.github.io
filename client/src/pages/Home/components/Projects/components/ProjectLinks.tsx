import { Stack } from '@mui/material'
import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import PreviewIcon from '@mui/icons-material/Preview'
import { FabLink } from '@/components'

type Props = {
  urlDeploy?: string
  urlGithub: string
}

export default function ProjectLinks({ urlDeploy, urlGithub }: Props) {
  return (
    <Stack justifyContent="center" spacing={1}>
      <FabLink to={urlGithub} tooltip="Repositório" icon={<GitHubIcon />} />
      {urlDeploy ? (
        <FabLink to={urlDeploy} tooltip="Preview" icon={<PreviewIcon />} />
      ) : null}
    </Stack>
  )
}
