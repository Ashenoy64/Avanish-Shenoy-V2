"use client";
import Image from "next/image";

export default function Footer (){
  return (
    <footer className="container footer footer-center p-10 bg-gray-900 text-base-content rounded">
    <nav className="grid grid-flow-col gap-4">
      <a
        href="/#home"
        className="text-sm text-gray-300 hover:text-white mr-4"
      >
        Home
      </a>
      <a
        href="/#projects"
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
      <a
        href="/Avanish_Shenoy.pdf"
        target="__blank"
        className="text-sm text-gray-300 hover:text-white mr-4"
      >
        CV
      </a>
    </nav>
    <nav>
      <div className="grid grid-flow-col gap-4">
      <a
          href="https://github.com/Ashenoy64"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-3 md:mr-4"
        >
          <Image src="/icons/github.png" alt="GitHub" className="w-6 h-6" width={24} height={24} />
        </a>

        <a
          href="https://www.instagram.com/avanish_shenoy"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-3 md:mr-4"
        >
          <Image src="/icons/insta.png" alt="Instagram" className="w-6 h-6" width={24} height={24} />
        </a>

        <a
          href="https://www.linkedin.com/in/Ashenoy64/"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-3 md:mr-4"
        >
          <Image src="/icons/linkedin.png" alt="LinkedIn" className="w-6 h-6" width={24} height={24} />
        </a>

        <a href="mailto:ashenoy64@gmail.com">
          <Image src="/icons/gmail.png" alt="Gmail" className="w-6 h-6" width={24} height={24} />
        </a>
      </div>
    </nav>
    <aside>
      <p>© {new Date().getFullYear()} Avanish Shenoy. All rights reserved.</p>
    </aside>
  </footer>
  );
};

<footer className="bg-gray-900 text-gray-300 py-8 " >
      <div className="container mx-auto px-4 flex flex-wrap items-center justify-between">
        <div className="mb-4 text-center w-full md:w-1/2 md:text-left">
          <span className="text-sm block font-bold mb-2">
            Thank you for visiting my website!
          </span>
          <span className="text-sm block">
            This Website is currently under Development.
          </span>
        </div>
        <nav className="flex flex-wrap justify-center w-full md:w-1/2 md:justify-end">
          <a
            href="/#home"
            className="text-sm text-gray-300 hover:text-white mr-4"
          >
            Home
          </a>
          <a
            href="/#projects"
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
      <div className="container mx-auto px-4 text-center mt-8">
        <div className="social-icons flex mb-4 md:mb-0 justify-center">
          <a
            href="https://github.com/Ashenoy64"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-3 md:mr-4"
          >
            <Image src="/icons/github.png" alt="GitHub" className="w-6 h-6" width={24} height={24} />
          </a>

          <a
            href="https://www.instagram.com/avanish_shenoy"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-3 md:mr-4"
          >
            <Image src="/icons/insta.png" alt="Instagram" className="w-6 h-6" width={24} height={24} />
          </a>

          <a
            href="https://www.linkedin.com/in/Ashenoy64/"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-3 md:mr-4"
          >
            <Image src="/icons/linkedin.png" alt="LinkedIn" className="w-6 h-6" width={24} height={24} />
          </a>

          <a href="mailto:ashenoy64@gmail.com">
            <Image src="/icons/gmail.png" alt="Gmail" className="w-6 h-6" width={24} height={24} />
          </a>
        </div>
        <span className="text-sm">
          © {new Date().getFullYear()} Avanish Shenoy. All rights reserved.
        </span>
      </div>
    </footer>