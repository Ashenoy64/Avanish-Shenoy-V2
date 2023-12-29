"use client";
import Image from "next/image";
export default function Badge({title,url}) {
  return (
    <div className="p-2 w-full md:w-40 text-center  h-56 gap-2 mx-auto outline-2 shadow shadow-white outline-white  rounded p backdrop-blur-xl flex flex-col justify-center">
      <div className="w-36 h-36 md:w-24 md:h-24 mx-auto object-contain">
        <img src={url} alt={title}  />
      </div>
      <div className=" text-sm font-bold">
        <h1>{title}</h1>
      </div>
    </div>
  );
}
