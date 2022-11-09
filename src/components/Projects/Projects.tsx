import * as React from 'react'
import projectList from '../../data/projectList'

export default function Projects() {
  return (
    <section>
      <h2>Projects</h2>
      {projectList.map(({ name, description, image, urlDeploy, urlGithub }) => (
        <article key={name}>
          <img width={100} src={image} alt={`image-${name}`} />
          <h3>{name}</h3>
          <p>{description}</p>
          <a href={urlGithub}>
            <button type="button">Go to Repository</button>
          </a>
          <a href={urlDeploy}>
            <button type="button">Visualizar site </button>
          </a>
        </article>
      ))}
    </section>
  )
}
