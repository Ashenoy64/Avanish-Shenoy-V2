"use client";
import Image from "next/image";

export default function Footer() {
  const navLinks = [
    { href: "/#home", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/awards", label: "Awards" },
    { href: "/contact", label: "Contact" },
    { href: "/Avanish_Shenoy.pdf", label: "Resume", target: "_blank" },
  ];

  const socialLinks = [
    {
      href: "https://github.com/Ashenoy64",
      icon: "/icons/github.png",
      label: "GitHub",
    },
    {
      href: "https://www.instagram.com/avanish_shenoy",
      icon: "/icons/insta.png",
      label: "Instagram",
    },
    {
      href: "https://www.linkedin.com/in/Ashenoy64/",
      icon: "/icons/linkedin.png",
      label: "LinkedIn",
    },
    {
      href: "mailto:ashenoy64@gmail.com",
      icon: "/icons/gmail.png",
      label: "Email",
    },
  ];

  return (
    <footer className="bg-base-200 border-t border-base-300 mt-16 sm:mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Brand Section */}
          <div className="space-y-4 text-center sm:text-left">
            <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Avanish Shenoy
            </div>
            <p className="text-base-content/70 text-sm sm:text-base leading-relaxed">
              Recent graduate with Building projects in Web Development, Game
              Development, and AI for fun
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 text-center sm:text-left">
            <h3 className="font-semibold text-lg sm:text-xl">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.target}
                  rel={link.target ? "noopener noreferrer" : undefined}
                  className="text-base-content/70 hover:text-primary transition-colors text-sm sm:text-base hover:translate-x-1 inline-block"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4 text-center sm:text-left">
            <h3 className="font-semibold text-lg sm:text-xl">Connect</h3>
            <div className="flex gap-3 sm:gap-4 justify-center sm:justify-start flex-wrap">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-circle btn-sm sm:btn-md btn-ghost hover:btn-primary transition-all hover:scale-110"
                  aria-label={social.label}
                >
                  <Image
                    src={social.icon}
                    alt={social.label}
                    width={24}
                    height={24}
                    className="w-5 h-5 sm:w-6 sm:h-6"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-base-300 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="text-xs sm:text-sm text-base-content/60">
            © {new Date().getFullYear()} Avanish Shenoy. All rights reserved.
          </p>
          <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm text-base-content/60">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
