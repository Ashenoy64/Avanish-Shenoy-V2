import React, { useState, useEffect } from "react";
import "@/styles/Hero.css";
import _data from "@/data/hero";

const Hero = () => {
  const greetings = _data.intro;

  const [currentGreeting, _] = useState(
    greetings[Math.round(Math.random() * (greetings.length - 1))]
  );
  const [visibleText, setVisibleText] = useState("");

  let charIndex = 0;

  const typeNextChar = () => {
    let text = currentGreeting.slice(0, charIndex);
    setVisibleText(text);
    charIndex++;

    if (charIndex < currentGreeting.length) {

      setTimeout(typeNextChar, 200); 

    } else {

      setVisibleText(currentGreeting);


      setTimeout(() => {
        setVisibleText("");
        charIndex = 0;
        setTimeout(() => {
          setTimeout(typeNextChar, 1000);
        }, 1500);
      }, 3000);
    
    }
  };

  useEffect(() => {
    const typeTimer = setTimeout(typeNextChar, 500); 
    return () => clearTimeout(typeTimer);
  },[]);

  return (
    <section className="hero-container bg-transparent flex-col" id="home">
      <h1 className="text-4xl md:text-7xl font-bold text-blue-500">
        {visibleText}
        <span className="cursor">&#x2588;</span>
      </h1>
      <p className="text-lg text-gray-600 my-8">
        Welcome to my website. Let&apos;s dive into a world of exploration and
        discovery!
      </p>
    </section>
  );
};

export default Hero;
