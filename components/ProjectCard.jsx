"use client";
import { useEffect, useState } from "react";
import Image from 'next/image';

export default function ProjectCard({ project, click }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const hasImages = project.imageUrl && project.imageUrl.length > 0;

  useEffect(() => {
    if (!hasImages || project.imageUrl.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % project.imageUrl.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [hasImages, project.imageUrl]);

  return (
    <div
      onClick={(e) => click(e, project)}
      className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group border border-base-300 h-full"
    >
      {/* Image Section */}
      <figure className="relative h-40 sm:h-48 bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
        {hasImages ? (
          <>
            <Image
              src={project.imageUrl[currentIndex]}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority={currentIndex === 0}
            />
            {project.imageUrl.length > 1 && (
              <div className="absolute bottom-2 right-2 flex gap-1 z-10">
                {project.imageUrl.map((_, idx) => (
                  <div
                    key={idx}
                    className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all ${
                      idx === currentIndex ? "bg-white w-3 sm:w-4" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center justify-center w-full h-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 sm:h-16 sm:w-16 opacity-30"
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
        )}
        {project.pinned && (
          <div className="badge badge-secondary badge-sm absolute top-2 left-2 gap-1 z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
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
            <span className="hidden sm:inline">Featured</span>
          </div>
        )}
      </figure>

      {/* Content Section */}
      <div className="card-body p-3 sm:p-4">
        <h2 className="card-title text-base sm:text-lg">
          <span className="line-clamp-2">{project.title}</span>
          <div className="badge badge-ghost badge-sm ml-auto flex-shrink-0">
            {project.fields.length}
          </div>
        </h2>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2 min-h-[48px] sm:min-h-[60px]">
          {project.fields.slice(0, 4).map((field, idx) => (
            <div key={idx} className="badge badge-outline badge-xs sm:badge-sm">
              {field}
            </div>
          ))}
          {project.fields.length > 4 && (
            <div className="badge badge-outline badge-xs sm:badge-sm">
              +{project.fields.length - 4}
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="card-actions justify-between items-center mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-base-300">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="btn btn-ghost btn-xs sm:btn-sm gap-1 sm:gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 sm:h-4 sm:w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <span className="text-xs sm:text-sm">Code</span>
          </a>
          <button className="btn btn-primary btn-xs sm:btn-sm gap-1">
            <span className="text-xs sm:text-sm">Details</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 sm:h-4 sm:w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
