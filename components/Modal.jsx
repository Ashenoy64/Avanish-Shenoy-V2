"use client";
import React, { useState } from "react";

export function Modal({ children }) {
  return (
    <div className="fixed inset-0 flex flex-col w-screen h-screen items-center justify-center z-50">
      <div className=" backdrop-blur-md  absolute inset-0"></div>
      <div className="p-6 last:rounded-lg  z-10 relative ">
        <div className="flex flex-col text-center h-screen w-screen sm:w-auto sm:h-auto ">{children}</div>
      </div>
    </div>
  );
}

export const ProjectViewer = ({ CloseHandler, details }) => {
  const imageLength = details.imageUrl.length;
  const [curImage, setCurImage] = useState(0);

  const next = () => {
    setCurImage((curImage + 1) % imageLength);
  };

  const prev = () => {
    setCurImage((curImage + imageLength - 1) % imageLength);
  };

  return (
    <Modal>
      <div className="flex flex-col-reverse rounded-md justify-between h-full w-full md:h-full items-center md:card-side bg-base-100 shadow-xl p-2">
        <div className="flex flex-col p-4 justify-evenly my-8 max-w-lg  h-full md:h-full overflow-y-auto no-scrollbar">
          <h2 className="card-title">{details.title}</h2>
          <div className="text-justify  overflow-y-auto no-scrollbar h-full w-full">
            {details.description}
          </div>
          <div className="flex flex-wrap mb-4 p-3 ">
            {details.fields.map((field) => (
              <span
                key={field}
                className="border border-blue-500 text-white text-xs rounded-full px-2 py-1 mr-2 mb-2"
              >
                {field}
              </span>
            ))}
          </div>
          <div className="flex flex-col items-end sm:pb-auto">
            <button
              className="btn  btn-outline btn-warning"
              onClick={() => {
                CloseHandler();
              }}
            >
              Close{" "}
            </button>
          </div>
        </div>
        {imageLength > 0 && <figure className="w-full flex flex-col h-96 md:h-full justify-center my-auto gap-2 items-center max-h-1/2">
          <div className="w-full h-96 max-w-lg object-contain mx-auto">
            <img
              src={details.imageUrl[curImage]}
              alt="Project_Image"
              className="w-full h-96"
            />
          </div>
          {imageLength > 1 && (
            <div className="flex flex-row  w-full justify-evenly gap-4">
             
              <button className="cursor-pointer p-1 " onClick={prev}>
                {"Prev"}
              </button>
              <button className="cursor-pointer p-1 " onClick={next}>
                {"Next"}
              </button>
            </div>
          )}
        </figure> }
      </div>
    </Modal>
  );
};

// <div className="card md:w-1/2 w-full mx-auto overflow-auto max-h- no-scrollbar bg-gray-900  flex flex-col justify-center ">
{
  /* <div className="flex lg:flex-row flex-col-reverse  justify-between gap-2 w-full">
<div className="text-justify p-4 lg:w-1/2 w-full my-2 md:h-auto h-44 overflow-y-auto no-scrollbar">{details.description}</div>

<div className="flex flex-col justify-center">

</div>
<div className="flex flex-row justify-center p-2">
  <button
    className="btn btn-md btn-outline btn-warning"
    onClick={() => {
      CloseHandler();
    }}
  >
    {" "}
    Close{" "}
  </button>
</div>
</div> */
}
