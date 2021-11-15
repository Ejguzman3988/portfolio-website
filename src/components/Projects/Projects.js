import React, { useState, useEffect } from "react";
import { PacmanLoader } from "react-spinners";
import Project from "./Project";
import { projectsJSON } from "./projectsJSON";
import "./Projects.css";

const Projects = (props) => {
  const [projectsData, setProjectsData] = useState({
    projects: projectsJSON,
    loading: false,
    errors: ["Error when getting data from server."],
    requestAgain: false,
  });
  // useEffect(() => {
  //   const fetchProjects = () => {
  //     fetch("http://localhost:4000/projects")
  //       .then((resp) => resp.json())
  //       .then((data) => {
  //         setProjectsData({
  //           ...projectsData,
  //           loading: false,
  //           errors: [],
  //           projects: data,
  //           requestAgain: false,
  //         });
  //       })
  //       .catch((errors) => {
  //         setProjectsData({
  //           ...projectsData,
  //           loading: true,
  //           errors: [errors, ...projectsData.errors],
  //           requestAgain: false,
  //         });
  //         console.log("time");
  //         alert(projectsData.errors.join("\n"));
  //       });
  //   };
  //   if (
  //     projectsData.projects.length === 0 &&
  //     projectsData.requestAgain === true
  //   ) {
  //     fetchProjects();
  //   }
  // }, [projectsData]);

  return (
    <div id="projects">
      <div className="projects">
        {projectsData.loading ? (
          <>
            <PacmanLoader />
            {projectsData.requestAgain ? null : (
              <button
                onClick={() =>
                  setProjectsData({ ...projectsData, requestAgain: true })
                }
                style={{ marginTop: "30%" }}
              >
                Fetch Projects
              </button>
            )}
          </>
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
