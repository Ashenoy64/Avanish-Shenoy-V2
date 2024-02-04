"use client";
import React, { useState } from "react";
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

  return (
    <section id="projects" className=" ">
      <div className="carousel carousel-center rounded-box">
        {_data.map((object, index) => {
          return (
            <ProjectCard
              key={index}
              style={`mx-4 carousel-item ${"slide" + index}`}
              project={object}
              click={handleButtonClick}
            />
          );
        })}
      </div>
      {modelState && (
        <ProjectViewer
          CloseHandler={() => {
            closeModal();
          }}
          details={modelState}
        />
      )}
    </section>
  );
}
