import React from "react";

export default function Heading({ title, textSize, fontWeight }) {
  return (
    <div>
      <p className={`text-${textSize} font-poppins font-${fontWeight}`}>
        {title}
      </p>
    </div>
  );
}
