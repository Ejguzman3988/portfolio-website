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
    let resp = await fetch("http://localhost:4000/projects");
    const errorMessage = "YOUR JSON-SERVER IS NOT ON BRO. TURN IT ON!";
    if (!resp.ok) {
      setProjectsData({
        ...projectsData,
        loading: true,
        errors: [errorMessage, ...projectsData],
      });
      alert(projectsData.errors.join("\n"));
    }

    let data = await resp.json();
    setTimeout(() => {
      setProjectsData({
        ...projectsData,
        loading: false,
        errors: [],
        projects: data,
      });
    }, 5000);
  };
  return (
    <div>
      <h2 className={"projects__header"}>Projects</h2>
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
