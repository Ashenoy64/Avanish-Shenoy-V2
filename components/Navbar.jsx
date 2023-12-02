"use client";
import React, { useState } from "react";
import "@/styles/Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className="bg-dark text-white py-4 ">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-8">
        <div className="flex items-center">
          <div className="text-4xl font-bold logo animate-glow">AS</div>
        </div>

        <div className="hidden md:flex space-x-6">
          <a href="#projects" className="animate-glow">
            Projects
          </a>
          <a href="#certificates" className="animate-glow">
            Certificates
          </a>
          <a href="#contacts" className="animate-glow">
            Contacts
          </a>
          <a href='/Avanish_Shenoy.pdf' target="__blank" className="animate-glow">
            CV
          </a>
        </div>

        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
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
            ) : (
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
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div
            className="md:hidden absolute top-16 right-0 left-0 z-10"
            style={{ backgroundColor: "black" }}
          >
            <div className="flex flex-col items-center py-4">
              <a href="#home" className="animate-glow">
                Home
              </a>
              <a href="#about" className="animate-glow">
                About Me
              </a>
              <a href="#contacts" className="animate-glow">
                Contacts
              </a>
              <a href="#projects" className="animate-glow">
                Projects
              </a>
              <a href="#certificates" className="animate-glow">
                Certificates
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
