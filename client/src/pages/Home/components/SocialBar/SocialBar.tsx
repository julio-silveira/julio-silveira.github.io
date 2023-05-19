import * as React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import personalData from '../../../../data/personalData'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import { Stack } from '@mui/material'

export default function SocialBar() {
  return (
    <Stack component="nav" spacing={{ xs: 1, sm: 2 }} direction="row">
      <a
        style={{ textDecoration: 'none' }}
        href={personalData.github}
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubIcon sx={{ color: 'white' }} />
      </a>
      <a
        style={{ textDecoration: 'none' }}
        href={personalData.linkedin}
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInIcon sx={{ color: 'white' }} />
      </a>
      <a
        style={{ textDecoration: 'none' }}
        href={personalData.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsAppIcon sx={{ color: 'white' }} />
      </a>
    </Stack>
  )
}
