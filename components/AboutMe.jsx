"use client";
import _data from "@/data/about";

export default function AboutMe() {
  return (
    <div
      className=" min-h-screen flex flex-col justify-center items-center text-white"
      id="#about"
    >
      {_data.map((object, index) => {
        return (
          <section
            key={index}
            className={`w-full container mx-auto px-4 md:px-8 lg:px-16 py-8 ${
              index % 2 == 0 ? "md:text-left" : "md:text-right"
            } text-justify `}
          >
            <div
              className={`md:flex ${
                index % 2==0 ? "md:justify-start" : "md:justify-end"
              }`}
            >
              <div className="lg:w-1/2 px-4 mb-8">
                <h1 className="text-4xl font-bold mb-4 text-blue-400 transition duration-300 transform hover:scale-110 text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  {object.title}
                </h1>
                <p className="text-blue-200 text-lg leading-relaxed transition duration-300 transform hover:scale-105">
                  {object.description}
                </p>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
