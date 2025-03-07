"use client";
import Image from "next/image";

export default function Badge({title,url}) {
  return (
    <div className="p-2 w-40  md:w-40 text-center  h-56 gap-2 outline-2 outline  outline-white  rounded p backdrop-blur-xl flex flex-col justify-center">
      <Image src={url} alt={title} width={144} height={144} className="mx-auto" ></Image>
      <div className=" text-sm font-medium  text-white tracking-wider">
        <h1>{title}</h1>
      </div>
    </div>
  );
}
