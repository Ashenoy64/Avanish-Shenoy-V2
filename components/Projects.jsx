"use client";
import React, { useState, useEffect } from "react";
import _data from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import { ProjectViewer } from "@/components/Modal";

//660 ->1
//1108 ->2
export default function Projects() {
  const [modelState, changeState] = useState(null);
  const [numProjects, setNumProjects] = useState(3);
  const [projects,setProjects] = useState(null)


  useEffect(() => {
    const handleResize = () => {
      const _numProjects = window.innerWidth < 1000  ? 1 : window.innerWidth < 1300 ? 2 : 3; 
      setNumProjects(_numProjects);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeModal = () => {
    changeState(null);
  };

  const handleButtonClick = (event, project) => {
    changeState(project);
  };

  

  useEffect(()=>{
    const generateProjects = () => {
      let genProjects = [];
    
      for (let i = 0; i < _data.length; i += numProjects) {
        let projects = [];
    
        for (let j = 0; j < numProjects && i + j < _data.length; j++) {
          projects.push(
            <ProjectCard
              key={i + j}
              style={`mx-4 carousel-item ${"slide" + (i + j)}`}
              project={_data[i + j]}
              click={handleButtonClick}
            />
          );
        }
    
        genProjects.push(
          <div className="flex flex-row justify-evenly gap-12 my-4" key={i}>
            {projects}
          </div>
        );
      }
      setProjects(genProjects)
      return genProjects;
    };
    generateProjects()
  },[numProjects])

  return (
    <section id="projects" className="  w-full mb-24">
      <div className="carousel carousel-center carousel-vertical rounded-box md:h-64 h-56  p-2  my-auto w-full  ">
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
    </section>
  );
}
