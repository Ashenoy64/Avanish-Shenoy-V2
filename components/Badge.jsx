"use client";
import Image from "next/image";

export default function Badge({ title, url }) {
  return (
    <div className="card card-compact bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-base-300 w-40 h-56">
      <figure className="px-2 pt-4">
        <Image 
          src={url} 
          alt={title} 
          width={120} 
          height={120} 
          className="rounded-lg"
        />
      </figure>
      <div className="card-body items-center text-center p-2">
        <p className="text-xs font-medium line-clamp-2">{title}</p>
      </div>
    </div>
  );
}
