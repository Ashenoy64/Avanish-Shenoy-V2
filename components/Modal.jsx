"use client";
import React, { useState, useEffect } from "react";
import Image from 'next/image';

export function Modal({ children }) {
  return (
    <div className="fixed inset-0 flex flex-col w-screen h-screen items-center justify-center z-50">
      <div className=" backdrop-blur-md  absolute inset-0"></div>
      <div className="p-6 last:rounded-lg  z-10 relative ">
        <div className="flex flex-col text-center h-screen w-screen sm:w-auto sm:h-auto ">{children}</div>
      </div>
    </div>
  );
}

export const ProjectViewer = ({ CloseHandler, details }) => {
  const imageLength = details.imageUrl.length;
  const [curImage, setCurImage] = useState(0);

  const next = () => {
    setCurImage((curImage + 1) % imageLength);
  };

  const prev = () => {
    setCurImage((curImage + imageLength - 1) % imageLength);
  };

  return (
    <Modal>
      <div className="flex flex-col-reverse rounded-md justify-between h-full w-full md:h-full items-center md:card-side bg-base-100 shadow-xl p-2">
        <div className="flex flex-col p-4 justify-evenly my-8 max-w-lg  h-full md:h-full overflow-y-auto no-scrollbar">
          <h2 className="card-title">{details.title}</h2>
          <div className="text-justify  overflow-y-auto no-scrollbar h-full w-full">
            {details.description}
          </div>
          <div className="flex flex-wrap mb-4 p-3 ">
            {details.fields.map((field) => (
              <span
                key={field}
                className="border border-blue-500 text-white text-xs rounded-full px-2 py-1 mr-2 mb-2"
              >
                {field}
              </span>
            ))}
          </div>
          <div className="flex flex-col items-end sm:pb-auto">
            <button
              className="btn  btn-outline btn-warning"
              onClick={() => {
                CloseHandler();
              }}
            >
              Close{" "}
            </button>
          </div>
        </div>

        {/* Content - Scrollable */}
        <div className="flex flex-col lg:flex-row overflow-auto flex-1">
          {/* Image Carousel */}
          {hasImages && (
            <div className="lg:w-1/2 w-full bg-base-200 flex flex-col flex-shrink-0">
              <div className="relative flex items-center justify-center p-4 sm:p-6 min-h-[250px] sm:min-h-[300px] lg:min-h-[400px]">
                <div className="relative w-full h-[300px] sm:h-[400px] lg:h-96">
                  <Image
                    src={details.imageUrl[currentImageIndex]}
                    alt={`Project screenshot ${currentImageIndex + 1}`}
                    fill
                    className="rounded-lg object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={currentImageIndex === 0}
                  />
                </div>

                {details.imageUrl.length > 1 && (
                  <>
                    {/* Navigation Buttons */}
                    <button
                      onClick={prevImage}
                      className="btn btn-circle btn-sm sm:btn-md absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-base-100/80 hover:bg-base-100"
                      aria-label="Previous image"
                    >
                      ❮
                    </button>
                    <button
                      onClick={nextImage}
                      className="btn btn-circle btn-sm sm:btn-md absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-base-100/80 hover:bg-base-100"
                      aria-label="Next image"
                    >
                      ❯
                    </button>

                    {/* Image Counter */}
                    <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-full text-xs sm:text-sm">
                      {currentImageIndex + 1} / {details.imageUrl.length}
                    </div>
                  </>
                )}
              </div>

              {/* Thumbnail Strip - Hidden on mobile */}
              {details.imageUrl.length > 1 && (
                <div className="hidden sm:flex gap-2 p-4 overflow-x-auto">
                  {details.imageUrl.map((url, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 transition-all relative ${
                        idx === currentImageIndex
                          ? "border-primary scale-110"
                          : "border-transparent opacity-60 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={url}
                        alt={`Thumbnail ${idx + 1}`}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Description - Scrollable on mobile */}
          <div
            className={`${
              hasImages ? "lg:w-1/2" : "w-full"
            } p-4 sm:p-6 overflow-y-auto`}
          >
            <div className="prose prose-sm sm:prose max-w-none">
              <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">
                About This Project
              </h3>
              <p className="text-sm sm:text-base leading-relaxed whitespace-pre-line">
                {details.description}
              </p>
            </div>

            {/* Project Stats - Stack on mobile */}
            <div className="stats stats-vertical sm:stats-horizontal shadow mt-4 sm:mt-6 w-full text-center">
              <div className="stat py-3 sm:py-4">
                <div className="stat-title text-xs sm:text-sm">Technologies</div>
                <div className="stat-value text-xl sm:text-2xl">
                  {details.fields.length}
                </div>
                <div className="stat-desc text-xs">Different tools used</div>
              </div>

              <div className="stat py-3 sm:py-4">
                <div className="stat-title text-xs sm:text-sm">Type</div>
                <div className="stat-value text-xl sm:text-2xl">
                  {details.pinned ? "★" : "○"}
                </div>
                <div className="stat-desc text-xs">
                  {details.pinned ? "Featured" : "Standard"}
                </div>
              </div>
            </div>

            {/* Actions - Stack on mobile */}
            <div className="flex flex-col sm:flex-row gap-3 mt-4 sm:mt-6">
              <a
                href={details.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm sm:btn-md flex-1 gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 sm:h-5 sm:w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span className="text-sm sm:text-base">View Code</span>
              </a>
              <button
                onClick={CloseHandler}
                className="btn btn-outline btn-sm sm:btn-md flex-1"
              >
                Close
              </button>
            </div>
          )}
        </figure> }
      </div>
    </Modal>
  );
};

// <div className="card md:w-1/2 w-full mx-auto overflow-auto max-h- no-scrollbar bg-gray-900  flex flex-col justify-center ">
{
  /* <div className="flex lg:flex-row flex-col-reverse  justify-between gap-2 w-full">
<div className="text-justify p-4 lg:w-1/2 w-full my-2 md:h-auto h-44 overflow-y-auto no-scrollbar">{details.description}</div>

<div className="flex flex-col justify-center">

</div>
<div className="flex flex-row justify-center p-2">
  <button
    className="btn btn-md btn-outline btn-warning"
    onClick={() => {
      CloseHandler();
    }}
  >
    {" "}
    Close{" "}
  </button>
</div>
</div> */
}
