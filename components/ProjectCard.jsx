"use client";
import { useEffect, useState } from "react";
import Image from 'next/image';

export default function ProjectCard({ project,style,click }) {
  const [imgSrc,setSrc]=useState(project.imageUrl[0])
  const [index,setIndex] = useState(0)

  useEffect(() => {
    let changeSource;
    if (project.imageUrl.length > 1) {
      changeSource = setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % project.imageUrl.length);
      }, 3000);
    }

    return () => {
      if (changeSource) clearTimeout(changeSource);
    };
  }, [index, project.imageUrl]);

  useEffect(() => {
    setSrc(project.imageUrl[index]);
  }, [index, project.imageUrl]);

  

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

          <div>
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
            GitHub
          </a>

          </div>
        </div>
      </div>
  );
};
