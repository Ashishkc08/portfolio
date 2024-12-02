import React from "react";
import ProjectCard from "../common/ProjectCard2"; // Import the updated ProjectCard
import { projectData } from "../../data/ProjectData";

const ProjectsSection = () => {
  return (
    <div className="projects-page py-5">
      <div className="container">
        <h2 className="section-title text-center mb-5">My Projects</h2>

        <div className="row">
          {projectData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.body} // Adjusted to match `ProjectCard2`'s props
              demoLink={project.link}   // Pass the link for the button
              icon={project.icon}       // Include the icon if available
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
