"use client";

import Image from 'next/image';

export default function Certificate({ url, title }) {
  return (
    <div className="card card-compact bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-base-300">
      <figure className="px-4 pt-4 relative w-full aspect-[4/3]">
        <Image 
          src={url} 
          alt={title}
          fill
          className="rounded-lg object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-sm justify-center text-center">
          {title}
        </h2>
      </div>
    </div>
  );
}
