import * as React from 'react'
import { SocialBar } from '../SocialBar'

export default function Header() {
  return (
    <header>
      <p>Portifolio</p>
      <div>
        <p>Projects</p>
        <p>Technologies</p>
        <p>About Me</p>
      </div>
      <SocialBar />
    </header>
  )
}
