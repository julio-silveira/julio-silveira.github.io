import { Button } from '@mui/material'
import * as React from 'react'
import projectList from '../../data/projectList'

export default function Projects() {
  return (
    <section>
      <h2>Projects</h2>
      {projectList.map(
        ({ projectName, description, image, urlDeploy, urlGithub }, index) => (
          <article key={`projectName${index}`}>
            <img width={100} src={image} alt={`image-card}`} />
            <h3>{projectName}</h3>
            <p>{description}</p>
            <a href={urlGithub} target="_blank" rel="noopener noreferrer">
              <Button type="button">Go to Repository</Button>
            </a>
            <a href={urlDeploy} target="_blank" rel="noopener noreferrer">
              <Button type="button">Visualizar site </Button>
            </a>
          </article>
        )
      )}
    </section>
  )
}
