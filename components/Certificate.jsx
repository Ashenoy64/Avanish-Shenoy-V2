"use client";


export default function Certificate({url,title}) {
  return (
    <div className="w-full  md:w-64 lg:w-96 text-center  gap-2 mx-auto outline-2 outline outline-white  rounded p backdrop-blur-xl flex flex-col justify-center">
      <div className="w-full p-2 mx-auto object-contain">
        <img src={url} alt={title}   />
      </div>
      <div className=" text-md font-medium p-2 my-2 text-white tracking-wider">
        <h1>{title}</h1>
      </div>
    </div>
  );
}
