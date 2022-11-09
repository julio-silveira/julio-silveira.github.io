import * as React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import personalData from '../../data/personalData'

export default function SocialBar() {
  return (
    <nav>
      <a
        style={{ textDecoration: 'none' }}
        href={personalData.linkedin}
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubIcon sx={{ color: 'white' }} />
      </a>
      <a
        style={{ textDecoration: 'none' }}
        href={personalData.github}
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInIcon sx={{ color: 'white' }} />
      </a>
    </nav>
  )
}
