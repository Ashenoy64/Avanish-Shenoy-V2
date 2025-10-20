"use client";
import React, { useState, useEffect } from "react";
import Image from 'next/image';

export function Modal({ children }) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="modal modal-open">
      <div className="modal-box max-w-6xl w-[95vw] sm:w-11/12 max-h-[90vh] p-0 overflow-hidden">
        {children}
      </div>
      <div className="modal-backdrop bg-black/60" />
    </div>
  );
}

export const ProjectViewer = ({ CloseHandler, details }) => {
  const hasImages = details.imageUrl && details.imageUrl.length > 0;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % details.imageUrl.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + details.imageUrl.length) % details.imageUrl.length
    );
  };

  return (
    <Modal>
      <div className="flex flex-col h-full max-h-[90vh]">
        {/* Header - Fixed at top */}
        <div className="flex justify-between items-start p-4 sm:p-6 border-b border-base-300 flex-shrink-0">
          <div className="flex-1 pr-4">
            <h2 className="text-xl sm:text-2xl font-bold mb-2 line-clamp-2">
              {details.title}
            </h2>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {details.fields.slice(0, 6).map((field, idx) => (
                <div key={idx} className="badge badge-primary badge-outline badge-sm">
                  {field}
                </div>
              ))}
              {details.fields.length > 6 && (
                <div className="badge badge-ghost badge-sm">
                  +{details.fields.length - 6}
                </div>
              )}
            </div>
          </div>
          <button
            onClick={CloseHandler}
            className="btn btn-sm btn-circle btn-ghost flex-shrink-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
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
          </div>
        </div>
      </div>
    </Modal>
  );
};
