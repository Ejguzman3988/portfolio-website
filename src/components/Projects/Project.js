import React from "react";
import "./Projects.css";

const Project = ({ project }) => {
  return (
    <div className="projects__single">
      <div className="projects__single--content">
        <img
          src={project.imageUrl}
          alt={`project gif #${project.id}`}
          className="projects__single--image"
        />
        <div className="projects__single--title">{project.title}</div>
        <div className="projects__single--description">
          {project.description}
        </div>
      </div>
    </div>
  );
};

export default Project;
