import React from "react";
import ProjectCard from "../common/ProjectCard";
import { projectData } from "../../data/ProjectData";


const ProjectsSection = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-5">My Projects</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {/* Map through the projectData array to render each project */}
        {projectData.map((project) => (
          <div className="col" key={project.id}>
            <ProjectCard
              icon={project.icon} 
              title={project.title}
              body={project.body} 
              link={project.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
