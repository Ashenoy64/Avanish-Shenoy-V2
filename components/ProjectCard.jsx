"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

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
      <div className={` flex flex-col bg-gray-800 hover:bg-gray-900 text-white shadow-lg rounded-lg w-full mx-auto md:w-96 md:h-64 h-56  overflow-hidden cursor-pointer ${style}`} onClick={(e)=>click(e,project)}>
        <div className="flex flex-col justify-around h-full p-4">
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          
          <div className="mt-2 mb-4 flex flex-wrap">
            {project.fields.map((field) => (
              <span key={field} className="bg-blue-500 text-white text-xs rounded-full px-2 py-1 mr-2 mb-2">
                {field}
              </span>
            ))}
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
