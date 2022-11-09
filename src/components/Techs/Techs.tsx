import * as React from 'react'
import { techBarList, techNamesList } from '../../data/techslist'
import ProgressBar from './ProgeressBar'

export default function Techs() {
  return (
    <section>
      {techBarList.map(({ techName, completed }, index) => (
        <article key={`techName-${index}`}>
          <p>{techName}</p>
          <ProgressBar completed={completed} />
        </article>
      ))}
      {techNamesList.map((tech, index) => (
        <p key={`tech-${index}`}>{tech}</p>
      ))}
    </section>
  )
}
