import React from "react";
import projects from "../../projects.json"

function Project() {
    return (
        <>
        <h2>My Work</h2>
        <ul className="project-list">
            {projects.map((project) => (
                <li className="project-card" key={project.id}>
                    <h3 className="project-title"> {project.name}</h3>
                    <img className="project-image" src={require(`../../assets/images/${project.id}.png`)} alt={`${project.image}`}/>
                    <p className="project-description">{project.description}</p>
                    <div className="project-links">
                        <a className="project-github" href={project.github}>See the repo at {project.github}!</a>
                        {project.deployed && <a className="project-deployed" href={project.deployed}>Check out the depployed app at {project.deployed}</a>}
                    </div>
                </li>
            ))}
        </ul>
      </>  
    )
}

export default Project;