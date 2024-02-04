"use client";
import _data from "@/data/about";
import { useState } from "react";
import Image from "next/image";
export default function AboutMe() {
  const [active, setActive] = useState(-1);


  const handleClick = (index) => {
    if(active == index)
      setActive(-1)
    else
    setActive(index);
  };
  return (
    <section className="w-full p-2 flex flex-row justify-center object-contain md:my-auto  mb-96 md:mb-auto  ">
    <div
      className="md:w-full h-full   flex md:flex-row gap-4 md:gap-0 flex-col justify-between   "
      id="#about" >
      {
        _data.map((object,index)=>(
          <div key={index} className={`transition ease-in  sm:w-3/4 w-full mx-auto my-12 md:mb-auto  h-32  flex flex-col gap-2 p-2  justify-center  rounded-lg    items-center group hover:backdrop-blur hover:-translate-y-1/4 hover:h-1/2 ${index==active && "backdrop-blur -translate-y-1/4 h-1/2"}`} onClick={()=>handleClick(index)}>
              <Image src={object.url} alt="gif" width={128} height={128}  ></Image>
              <div className="  w-full text-white text-center">{object.title}</div>
              <div className={`md:h-2/3 bg-black w-full text-justify p-2  text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600  group-hover:block ${index == active ? "block":"hidden"}`} >
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