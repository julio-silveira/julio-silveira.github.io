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
              <button type="button">Go to Repository</button>
            </a>
            <a href={urlDeploy} target="_blank" rel="noopener noreferrer">
              <button type="button">Visualizar site </button>
            </a>
          </article>
        )
      )}
    </section>
  )
}
