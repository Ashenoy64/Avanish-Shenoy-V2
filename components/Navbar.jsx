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
          <a href="/awards" className="animate-glow">
            Awards
          </a>
          <a href="/contact" className="animate-glow">
            Contacts
          </a>
          <a
            href="/Avanish_Shenoy.pdf"
            target="__blank"
            className="animate-glow"
          >
            CV
          </a>
        </div>

        <div className="md:hidden">
          <details className="dropdown">
            <summary className="bg-black btn" onClick={()=>{toggleMobileMenu()}}>
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
            </summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 relative right-10">
              <li>
                <a href="/#home" className="animate-glow">
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" className="animate-glow">
                  Projects
                </a>
              </li>
              <li>
                <a href="/awards" className="animate-glow">
                  Awards
                </a>
              </li>
              <li>
                <a href="/contact" className="animate-glow">
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/Avanish_Shenoy.pdf"
                  target="__blank"
                  className="animate-glow"
                >
                  CV
                </a>
              </li>
            </ul>
          </details>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
