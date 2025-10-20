"use client";
import React, { useState } from "react";
import _data from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import { ProjectViewer } from "@/components/Modal";

export default function Projects() {
  const [modalProject, setModalProject] = useState(null);
  const [filter, setFilter] = useState("all");

  const closeModal = () => {
    setModalProject(null);
  };

  const handleProjectClick = (event, project) => {
    setModalProject(project);
  };

  // Get unique technologies for filter
  const allTechnologies = [...new Set(_data.flatMap((p) => p.fields))].sort();

  // Filter projects based on selected technology
  const filteredProjects =
    filter === "all"
      ? _data
      : _data.filter((project) => project.fields.includes(filter));

  const featuredProjects = filteredProjects.filter((p) => p.pinned);
  const otherProjects = filteredProjects.filter((p) => !p.pinned);

  return (
    <div className="container mx-auto my-16 px-4 py-12 min-h-screen">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 text-primary">Projects</h1>
        <p className="text-lg text-white max-w-2xl mx-auto">
          A showcase of my work spanning web development, game development, AI,
          and systems programming
        </p>
      </div>

      {/* Stats */}
      <div className="stats stats-vertical lg:stats-horizontal shadow w-full mb-8">
        <div className="stat">
          <div className="stat-figure text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
          </div>
          <div className="stat-title">Total Projects</div>
          <div className="stat-value text-primary">{_data.length}</div>
          <div className="stat-desc">Completed and ongoing</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              />
            </svg>
          </div>
          <div className="stat-title">Featured</div>
          <div className="stat-value text-secondary">
            {featuredProjects.length}
          </div>
          <div className="stat-desc">Highlighted projects</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-accent">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
          </div>
          <div className="stat-title">Technologies</div>
          <div className="stat-value text-accent">{allTechnologies.length}</div>
          <div className="stat-desc">Different tools used</div>
        </div>
      </div>

      {/* Filter Dropdown */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">
          {filter === "all" ? "All Projects" : `${filter} Projects`}
        </h2>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-outline gap-2">
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
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              />
            </svg>
            Filter by Tech
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 max-h-96 overflow-y-auto"
          >
            <li>
              <a
                onClick={() => setFilter("all")}
                className={filter === "all" ? "active" : ""}
              >
                All Technologies
              </a>
            </li>
            <li className="menu-title">
              <span>Filter by</span>
            </li>
            {allTechnologies.map((tech) => (
              <li key={tech}>
                <a
                  onClick={() => setFilter(tech)}
                  className={filter === tech ? "active" : ""}
                >
                  {tech}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && filter === "all" && (
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-secondary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              />
            </svg>
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, idx) => (
              <ProjectCard
                key={idx}
                project={project}
                click={handleProjectClick}
              />
            ))}
          </div>
        </div>
      )}

      {/* Other Projects */}
      {otherProjects.length > 0 && filter === "all" && (
        <div>
          <h2 className="text-3xl font-bold mb-6">Other Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, idx) => (
              <ProjectCard
                key={idx}
                project={project}
                click={handleProjectClick}
              />
            ))}
          </div>
        </div>
      )}

      {/* Filtered Projects (when filter is active) */}
      {filter !== "all" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <ProjectCard
              key={idx}
              project={project}
              click={handleProjectClick}
            />
          ))}
        </div>
      )}

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-24 w-24 mx-auto text-base-content/20 mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h3 className="text-xl font-semibold mb-2">No projects found</h3>
          <p className="text-base-content/70">
            Try selecting a different technology filter
          </p>
        </div>
      )}

      {/* Modal */}
      {modalProject && (
        <ProjectViewer CloseHandler={closeModal} details={modalProject} />
      )}
    </div>
  );
}
