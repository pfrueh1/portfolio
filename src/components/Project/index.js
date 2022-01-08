import React from "react";
import projects from "../../projects.json"

function Project() {
    return (
        <ul className="project-list">
            {projects.map((project) => (
                <li className="project-card">
                    <h3 className="project-title"> {project.name}</h3>
                    <p className="project-description">{project.description}</p>
                    <a className="project-github" href={project.github}>See the repo at {project.github}!</a>
                </li>
            ))}
        </ul>
    )
}

export default Project;