"use client";
import React, { useState, useEffect } from "react";

export function Modal({ children }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className=" backdrop-blur-md  absolute inset-0"></div>
      <div className="b  p-6 last:rounded-lg  z-10 relative">
        <div className="flex flex-col text-center ">{children}</div>
      </div>
    </div>
  );
}

export const ProjectViewer = ({ CloseHandler, details }) => {
  useEffect(() => {}, []);
  return (
    <Modal>
      <div className="card w-96 bg-gray-900  flex justify-center">
        <div className="carousel mx-auto rounded-t-md">
          {details.imageUrl.map((src, index) => {
            return (
              <div key={index} className="carousel-item w-full object-contain">
                <img src={src} alt="Project_Image" className="" />
              </div>
            );
          })}
        </div>
        
        <div className="text-justify p-4">{details.description}</div>
        <div className="flex flex-col justify-center">
          <div className="flex flex-wrap mb-4 p-3 ">
            {details.fields.map((field) => (
              <span
                key={field}
                className="bg-blue-500 text-white text-xs rounded-full px-2 py-1 mr-2 mb-2"
              >
                {field}
              </span>
            ))}
          </div>
          <div></div>
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
      </div>
    </Modal>
  );
};
