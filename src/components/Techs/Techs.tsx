import * as React from 'react'
import { techBarList, techNamesList } from '../../data/techslist'
import ProgressBar from './ProgeressBar'

export default function Techs() {
  return (
    <section>
      {techBarList.map(({ techName, completed }, index) => (
        <article key={`techName-${index}`}>
          <ProgressBar completed={completed} techName={techName} />
        </article>
      ))}
      {techNamesList.map((tech, index) => (
        <p key={`tech-${index}`}>{tech}</p>
      ))}
    </section>
  )
}
