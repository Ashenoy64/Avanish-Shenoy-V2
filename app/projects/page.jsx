"use client";
import React, { useState, useEffect } from "react";
import _data from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import { ProjectViewer } from "@/components/Modal";



export default function Projects() {
  const [modelState, changeState] = useState(null);

  const closeModal = () => {
    changeState(null);
  };

  const handleButtonClick = (event, project) => {
    changeState(project);
  };

  const generateProjects = () => {
    let projects = []
    for(let i = 0; i < _data.length; ++i) {
        projects.push(
                <ProjectCard
                  key={i}
                  style={`mx-4 carousel-item ${"slide" + (i)}`}
                  project={_data[i]}
                  click={handleButtonClick}
                />
              );
    }
    return projects;
  };

  let projects = generateProjects()

  return (
    <div id="projects" className="w-full p-4 md:p-16 lg:p-44">
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-8 w-full h-full my-24">
        {projects}
      </div>
      {modelState && (
        <ProjectViewer
          CloseHandler={() => {
            closeModal();
          }}
          details={modelState}
        />
      )}
    </div>
  );
}
