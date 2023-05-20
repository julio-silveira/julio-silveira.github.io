import * as React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import personalData from '../../data/personalData'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import { Stack } from '@mui/material'
import IconButtonLink from './components/IconButtonLink'

export default function SocialBar() {
  return (
    <Stack component="nav" spacing={{ xs: 0, sm: 2 }} direction="row">
      <IconButtonLink to={personalData.github} icon={<GitHubIcon />} />
      <IconButtonLink to={personalData.linkedin} icon={<LinkedInIcon />} />
      <IconButtonLink to={personalData.whatsapp} icon={<WhatsAppIcon />} />
    </Stack>
  )
}
