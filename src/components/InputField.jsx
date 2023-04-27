import React from "react";
import { Constants } from "../constants/constants";

export default function InputField({
  title = "",
  type = "text",
  id,
  value,
  isRequired,
  placeHolder,
  isExAbsent = false,
  setForm,
}) {
  const { colors } = Constants;

  const changeHandler = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div>
      <label
        htmlFor={title}
        className={`block mb-1 text-sm font-poppins font-medium text-[#212121]`}
      >
        <div>
          <span>{title === "" ? "\u0000" : title}</span>
          {isRequired && <span className={`text-[#D86161]`}>*</span>}
        </div>
      </label>
      <input
        type={type}
        id={id}
        className={`bg-[${colors.text_field_bg}] border border-[#E6E6E6] text-[#7A7A7A] text-sm font-normal font-poppins rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full px-2 py-2 placeholder:font-poppins placeholder:font-normal placeholder:text-[#7A7A7A]`}
        placeholder={`${isExAbsent ? "" : "ex. "}${placeHolder}`}
        required={isRequired}
        name={id}
        value={value}
        onChange={changeHandler}
      />
    </div>
  );
}
