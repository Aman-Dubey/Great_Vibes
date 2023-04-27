import React from "react";
import { Constants } from "../constants/constants";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  const { font_weight } = Constants;
  const onClickHandler = (e) => {
    e.preventDefault();
    navigate("/form1");
  };
  return (
    <div className="h-16 w-screen flex justify-start items-center absolute top-0 left-0">
      <div className="px-4 my-auto" onClick={onClickHandler}>
        <Button fontWeight={font_weight.normal} title="Create job" />
      </div>
    </div>
  );
}
