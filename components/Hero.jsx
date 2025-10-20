"use client";
import React, { useState, useEffect } from "react";
import _data from "@/data/hero";
import { randInt } from "three/src/math/MathUtils";

const Hero = () => {
  const greetings = _data.intro;
  const [greetingIndex, setGreetingIndex] = useState(randInt(0,_data.intro.length-1));
  const [visibleText, setVisibleText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentGreeting = greetings[greetingIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (visibleText.length < currentGreeting.length) {
          setVisibleText(currentGreeting.slice(0, visibleText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (visibleText.length > 0) {
          setVisibleText(currentGreeting.slice(0, visibleText.length - 1));
        } else {
          setIsDeleting(false);
          // setGreetingIndex((prev) => (prev + 1) % greetings.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [visibleText, isDeleting, greetingIndex, greetings]);

  return (
    <section
      className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-20 sm:py-32 min-h-screen"
      id="home"
    >
      <div className="text-center max-w-5xl w-full">
        {/* Typewriter Text - Fixed height to prevent layout shift */}
        <div className="min-h-[120px] sm:min-h-[160px] lg:min-h-[200px] flex items-center justify-center mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
            {visibleText}
            <span className="animate-pulse text-primary">|</span>
          </h1>
        </div>
        
        {/* Subtitle - Updated with better styling */}
        <p className="text-white sm:text-lg md:text-xl text-base-content/70 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-4">
          Recent graduate with{" "}
          <span className="text-primary font-semibold">Systems and Core Computing</span> specialization.
          Building projects in{" "}
          <span className="text-secondary font-semibold">Web Development</span>,{" "}
          <span className="text-accent font-semibold">Game Development</span>, and{" "}
          <span className="text-primary font-semibold">AI</span> for fun
        </p>

        {/* CTA Buttons - Improved spacing */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <a 
            href="/projects" 
            className="btn btn-primary btn-md sm:btn-lg w-full sm:w-auto sm:min-w-[180px] group"
          >
            View Projects
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a 
            href="/contact" 
            className="btn btn-outline btn-md sm:btn-lg w-full sm:w-auto sm:min-w-[180px]"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
