"use client";
import Image from "next/image";

export default function Footer (){
  return (
    <footer className="bg-gray-900 text-gray-300 py-4 " >
      <div className="container w-full px-4  flex flex-wrap items-center justify-evenly">
        <nav className="flex flex-wrap justify-center gap-10 md:gap-16 w-full ">
          <a
            href="/#home"
            className="text-sm text-gray-300 hover:text-white mr-4"
          >
            Home
          </a>
          <a
            href="/projects"
            className="text-sm text-gray-300 hover:text-white mr-4"
          >
            Projects
          </a>
          <a
            href="/awards"
            className="text-sm text-gray-300 hover:text-white mr-4"
          >
            Awards
          </a>
          <a
            href="/contact"
            className="text-sm text-gray-300 hover:text-white mr-4"
          >
            Contact
          </a>
          <a href='/Avanish_Shenoy.pdf' target="__blank" className="text-sm text-gray-300 hover:text-white mr-4">
            CV
          </a>
        </nav>
      </div>
      <div className="container flex flex-col  gap-4 mx-auto px-4 text-center ">
        <div className="social-icons flex mb-4 md:mb-0 justify-center gap-12 md:gap-20 items-center my-12">
          <a
            href="https://github.com/Ashenoy64"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-3 md:mr-4"
          >
            <Image src="/icons/github.png" alt="GitHub" className="md:w-6 md:h-6 h-6 w-6" width={12} height={12} />
          </a>

          <a
            href="https://www.instagram.com/avanish_shenoy"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-3 md:mr-4"
          >
            <Image src="/icons/insta.png" alt="Instagram" className="md:w-6 md:h-6 h-6 w-6" width={12} height={12} />
          </a>

          <a
            href="https://www.linkedin.com/in/Ashenoy64/"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-3 md:mr-4"
          >
            <Image src="/icons/linkedin.png" alt="LinkedIn" className="md:w-6 md:h-6 h-6 w-6" width={12} height={12} />
          </a>

          <a href="mailto:ashenoy64@gmail.com">
            <Image src="/icons/gmail.png" alt="Gmail" className="md:w-6 md:h-6 h-6 w-6" width={12} height={12} />
          </a>
        </div>
        <div className="text-xs tracking-widest w-full mt-4">
          © {new Date().getFullYear()} Avanish Shenoy. All rights reserved.
        </div>
      </div>
    </footer>
    );
};

