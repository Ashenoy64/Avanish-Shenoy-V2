"use client";

export default function Certificate({ url, title }) {
  return (
    <div className="card card-compact bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-base-300">
      <figure className="px-4 pt-4">
        <img 
          src={url} 
          alt={title} 
          className="rounded-lg w-full h-auto object-cover"
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
