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
    <section className="w-full p-2 flex flex-row justify-center ">
    <div
      className="md:w-full h-full  flex md:flex-row flex-col justify-between  "
      id="#about" >
      {
        _data.map((object,index)=>(
          <div key={index} className="w-full  h-32 hover:h-1/2 flex flex-col gap-2 p-2 hover:-translate-y-1/4 justify-center  rounded-sm    items-center group">
              <div className="object-contain w-32 h-32 mx-auto "> 
                <img src={object.url}  className=""/>
              </div>
              <div className="  w-full text-white text-center">{object.title}</div>
              <div className=" h-2/3 bg-black w-full text-justify p-2 hidden group-hover:block  text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600" >
                  {object.description}
              </div>
          </div>
        ))
      }
    </div>
    </section>
  );
}



/*
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


*/