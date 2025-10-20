"use client";
import React, { useState, useEffect } from "react";
import Drawer from "./Drawer";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const navLinks = [
    { href: "/#home", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/awards", label: "Awards" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-base-100/90 backdrop-blur-md shadow-lg border-b border-base-300"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo - Enhanced */}
          <a
            href="/"
            className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent hover:scale-110 transition-transform duration-300"
          >
            AS
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="btn btn-ghost btn-sm lg:btn-md hover:bg-primary/20 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/Avanish_Shenoy.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm lg:btn-md gap-2 ml-2 hover:scale-105 transition-transform"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden btn btn-ghost btn-square hover:bg-primary/20"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          {/* Mobile Drawer */}
          <Drawer setIsOpen={setIsMobileMenuOpen} isOpen={isMobileMenuOpen}>
            <div className="p-6 space-y-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-8">
                Menu
              </div>
              <ul className="menu bg-base-200 rounded-box w-full space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-lg hover:bg-primary/20"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="/Avanish_Shenoy.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg bg-primary/10 hover:bg-primary/20"
                  >
                    📄 Resume
                  </a>
                </li>
              </ul>
            </div>
          </Drawer>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
