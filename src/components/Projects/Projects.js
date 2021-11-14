import React, { useState, useEffect } from "react";
import { PacmanLoader } from "react-spinners";
import Project from "./Project";
import "./Projects.css";

const Projects = (props) => {
  const [projectsData, setProjectsData] = useState({
    projects: [],
    loading: true,
    errors: [],
  });
  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const errorMessage = "YOUR JSON-SERVER IS NOT ON BRO. TURN IT ON!";
    fetch("http://localhost:4000/projects")
      .then((resp) => resp.json)
      .then((data) => {
        setProjectsData({
          ...projectsData,
          loading: false,
          errors: [],
          projects: data,
        });
      })
      .catch((errors) => {
        setProjectsData({
          ...projectsData,
          loading: true,
          errors: [errors, ...projectsData.errors],
        });
        alert(projectsData.errors.join("\n"));
      });
  };
  return (
    <div id="projects">
      <div className="projects">
        {projectsData.loading ? (
          <PacmanLoader />
        ) : (
          projectsData.projects.map((project, idx) => (
            <Project key={idx} project={project} />
          ))
        )}
      </div>
    </div>
  );
};

export default Projects;
