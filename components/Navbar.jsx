"use client";
import React, { useState } from "react";
import "@/styles/Navbar.css";
import Drawer from "./Drawer";


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className="bg-dark text-white py-4 ">
      <div className="  flex flex-row justify-between px-12 py-2">
        <div className="">
          <a href="/">
          <div className="text-4xl font-bold logo animate-glow">AS</div>
          </a>
        </div>

        <div className="hidden md:flex space-x-6 text-xl">
          <a href="/#home" className="animate-glow">
            Home
          </a>
          <a href="/projects" className="animate-glow">
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
          <button
            className="btn bg-black"
            onClick={() => {
              toggleMobileMenu();
            }}
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
            <Drawer setIsOpen={toggleMobileMenu} isOpen={isMobileMenuOpen}>
            <ul className="menu p-4 w-44 h-full bg-black ">
              <li>
                <a href="/#home" className="animate-glow">
                  Home
                </a>
              </li>
              <li>
                <a href="/projects" className="animate-glow">
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
            </Drawer>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
