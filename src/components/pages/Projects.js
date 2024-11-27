import React from 'react';
import ProjectCard from '../common/ProjectCard2';
import { projectData } from "../../data/ProjectData";

function Projects() {


  return (
    <div className="projects-page py-5">
      <div className="container">
        <h2 className="section-title text-center mb-5">My Projects</h2>

        <div className="row">
          {projectData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.body}
              image={project.image}
              demoLink={project.link}
              icon={project.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
