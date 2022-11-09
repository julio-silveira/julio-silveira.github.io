import { Typography } from '@mui/material'
import * as React from 'react'
import { techBarList, techNamesList } from '../../data/techslist'
import ProgressBar from './ProgeressBar'

export default function Techs() {
  return (
    <section>
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
    </section>
  )
}
