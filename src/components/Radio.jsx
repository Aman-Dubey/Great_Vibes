import React from "react";
import FadedText from "./FadedText";

export default function Radio({ value, name, title, onChange, checked }) {
  return (
    <div className="flex items-center">
      <input
        type="radio"
        value={value}
        checked={checked}
        name={name}
        className=" checked:text-[#1597E4] rounded-full border-2 border-[#D8D8D8] w-5 h-5 mr-1"
        onChange={(e) => onChange(e.target.value)}
      />
      <FadedText title={title} />
    </div>
  );
}
