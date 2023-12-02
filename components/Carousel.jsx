"use client";
import Image from "next/image";
import React, { useState } from "react";
import _data from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import {ProjectViewer} from "@/components/Modal";

export default function Carousel() {
  const [modelState,changeState] =  useState(null)

  const closeModal=()=>{
    changeState(null)
  }

  const handleButtonClick=(event,project)=>{
    changeState(project)
    
  }

  

  return (
    <section id="projects">
      <div className="carousel carousel-center rounded-box">
        {_data.map((object, index) => {
          return (
            <ProjectCard
              key={index}
              style="mx-4 carousel-item"
              project = {object}
              click = {handleButtonClick}
            />
          );
        })}
      </div>
      {modelState && <ProjectViewer
      CloseHandler={()=>{closeModal()}}
      details={modelState}
      />}
    </section>
  );
}
