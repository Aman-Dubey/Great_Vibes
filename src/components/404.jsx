import React from "react";

export default function Error({ message }) {
  return (
    <div className="">
      <div className="h-screen w-screen flex flex-col justify-center items-center text-gray-900">
        <p className="uppercase text-5xl  md:text-9xl text-blue-800 font-bold transition-all hover:animate-bounce p-6">
          404
        </p>
        <p className="text-center text-2xl">{message}</p>
      </div>
    </div>
  );
}
