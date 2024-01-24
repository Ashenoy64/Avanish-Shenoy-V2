"use client";
import _data from "@/data/about";
import { useState } from "react";

export default function AboutMe() {
  const [active, setActive] = useState(-1);

  const handleButtonClick = (k) => {
    if(active == k)
    {
      setActive(-1)
    }
    else
    setActive(k);
  };
  return (
    <section className="w-full mx-auto flex flex-row justify-center ">
    <div
      className="grid grid-cols-2 md:grid-cols-4 gap-4   w-full backdrop-blur-xl p-4  text-white"
      id="#about"
    >
      {_data.map((object, index) => (
        <div className={`collapse outline-1 outline container ${active==index? "collapse-open absolute bg-black z-10 mx-auto  w-full h-64 ":"collapse-close  "} `} key={index}>
          <input
            type="radio"
            name="my-accordion-1"
            onClick={(e) => {
              e.stopPropagation()
              handleButtonClick(index);
            }}
          />
          <div className={`collapse-title text-md md:text-xl font-bold mb-4 text-blue-400  text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ${active==index? "block":"block"}`}>
            {object.title}
          </div>
          <div className={`collapse-content ${active==index? "block":" hidden"}`}>
            {object.description}
        </div>
        </div>
      ))}
    </div>
    </section>
  );
}

// {_data.map((object, index) => {
//   return (
//     <section
//       key={index}
//       className={`w-full container mx-auto px-4 md:px-8 lg:px-16 py-8 ${
//         index % 2 == 0 ? "md:text-left" : "md:text-right"
//       } text-justify `}
//     >
//       <div
//         className={`md:flex ${
//           index % 2==0 ? "md:justify-start" : "md:justify-end"
//         }`}
//       >
//         <div className="lg:w-1/2 px-4 mb-8">
//           <h1 className="text-4xl font-bold mb-4 text-blue-400 transition duration-300 transform hover:scale-110 text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
//             {object.title}
//           </h1>
//           <p className="text-blue-200 text-lg leading-relaxed transition duration-300 transform hover:scale-105">
//             {object.description}
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// })}
