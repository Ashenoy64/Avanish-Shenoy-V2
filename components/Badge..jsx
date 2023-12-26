"use client";
import Image from "next/image";
export default function Badge({title,url}) {
  return (
    <div className="p-2 w-40 text-center  h-56 gap-2 mx-auto outline-2 shadow shadow-white outline-white  rounded p backdrop-blur-xl flex flex-col justify-center">
      <div className="w-24 h-24 mx-auto object-contain">
        <Image src={url} alt={title} width={100} height={100}  />
      </div>
      <div className=" text-sm font-bold">
        <h1>{title}</h1>
      </div>
    </div>
  );
}
