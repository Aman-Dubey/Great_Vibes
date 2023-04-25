import React from "react";

export default function Button({ fontWeight, title }) {
  return (
    <button
      className={`font-poppins font-${fontWeight} text-[#FFFFFF] px-5 py-2.5 bg-[#1597E4] flex justify-center items-center rounded-md`}
    >
      {title}
    </button>
  );
}
