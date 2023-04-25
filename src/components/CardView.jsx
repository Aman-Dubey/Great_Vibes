import React from "react";
import Card from "./Card";

export default function CardView() {
  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-1 gap-4 2xl:grid-cols-2">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
