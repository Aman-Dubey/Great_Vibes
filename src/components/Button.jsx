import React from "react";

export default function Button({ fontWeight, title, isDisabled = false }) {
  return (
    <>
      {isDisabled ? (
        <button
          className={`font-poppins font-${fontWeight} text-[#1597E4] px-5 py-2.5 bg-[#FFFFFF] flex justify-center items-center rounded-md border-[1.5px] border-[#1597E4]`}
        >
          {title}
        </button>
      ) : (
        <button
          className={`font-poppins font-${fontWeight} text-[#FFFFFF] px-5 py-2.5 bg-[#1597E4] flex justify-center items-center rounded-md`}
        >
          {title}
        </button>
      )}
    </>
  );
}
