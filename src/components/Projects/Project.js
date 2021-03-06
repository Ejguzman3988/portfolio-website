import React from "react";
import Laptop from "../svg/Laptop";
import "./Projects.css";

const Project = ({ project }) => {
  return (
    <div className="projects__single">
      <div className="projects__single--content">
        <Laptop project={project} />
        <div className="projects__single--text">
          <div className="projects__single--title">{project.title}</div>
          <div className="projects__single--description">
            {project.description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
