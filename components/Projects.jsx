"use client";
import React, { useState } from "react";
import _data from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import { ProjectViewer } from "@/components/Modal";
import Link from "next/link";

export default function Projects() {
  const [modalProject, setModalProject] = useState(null);

  const closeModal = () => {
    setModalProject(null);
  };

  const handleProjectClick = (event, project) => {
    setModalProject(project);
  };

  const featuredProjects = _data.filter((p) => p.pinned);

  return (
    <div id="projects" className="container mx-auto px-4 py-16 lg:py-24">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
        <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
          Highlighting my best work in web development, AI, game development,
          and systems programming
        </p>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {featuredProjects.map((project, idx) => (
          <ProjectCard
            key={idx}
            project={project}
            click={handleProjectClick}
          />
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center">
        <Link href="/projects" className="btn btn-primary btn-wide gap-2">
          View All Projects
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>

      {/* Modal */}
      {modalProject && (
        <ProjectViewer CloseHandler={closeModal} details={modalProject} />
      )}
    </div>
  );
}
