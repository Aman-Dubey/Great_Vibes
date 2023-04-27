import React from "react";

export default function CardText({ title }) {
  return (
    <div className="font-poppins font-normal text-base line-clamp-1">
      {title}
    </div>
  );
}
