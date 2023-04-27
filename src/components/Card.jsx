import React, { useState } from "react";
import { Constants } from "../constants/constants";
import Button from "./Button";
import CardText from "./CardText";
import { ReactComponent as Delete } from "../svg/delete.svg";
import { ReactComponent as Edit } from "../svg/edit.svg";
import { deleteDataThroughAPI } from "../utils/apis";

export default function Card({ data, id, showAlert, onDelete }) {
  const { font_weight } = Constants;
  const [showModel, setShowModel] = useState(false);
  const {
    job_title,
    company_name,
    industry,
    location,
    remote_type,
    experience_min,
    experience_max,
    salary_min,
    salary_max,
    total_employee,
    apply_type,
  } = data;

  const capitalize = (text) => {
    if (text === "") return "";
    return text[0].toUpperCase() + text.slice(1);
  };

  const editBtnHandler = (e) => {
    e.preventDefault();
    console.log(id);
  };

  const deleteBtnHandler = (e) => {
    e.preventDefault();
    setShowModel(true);
    deleteDataThroughAPI({ showAlert, id })
      .then(() => {
        onDelete(id);
      })
      .catch((e) => {
        console.log("Unable to delete, please try again");
      });
  };

  return (
    <div className="relative w-[830px] h-[320px] bg-[#FFFFFF] rounded-lg border-2 border-[#DADEDF] p-4 m-8">
      <div className="flex w-full h-full space-x-2">
        <div className="w-12 h-12 ml-2">
          <img src="assets/netflix.png" alt="logo" />
        </div>
        <div className="relative flex flex-col justify-between w-full">
          <div>
            <p className={`text-2xl font-poppins font-normal line-clamp-1`}>
              {capitalize(job_title)}
            </p>
          </div>
          <div className="absolute top-8 flex flex-col justify-around line-clamp-1">
            <CardText
              title={`${capitalize(company_name)} - ${capitalize(industry)}`}
            />
            <div className="font-poppins font-normal text-base text-[#646464]">
              {`${capitalize(location)} (${capitalize(remote_type)})`}
            </div>
            <div className="flex flex-col gap-2.5 justify-around h-full mt-3">
              <CardText title="Part-Time (9.00am - 5.00pm IST)" />
              <CardText
                title={`Experience (${experience_min} - ${experience_max} years)`}
              />
              <CardText
                title={`INR (\u20B9) ${salary_min} - ${salary_max} / Month`}
              />
              <CardText
                title={`${total_employee ? total_employee : 0} employees`}
              />
            </div>
          </div>

          <div className="flex justify-start items-center space-x-6">
            <Button
              fontWeight={font_weight.medium}
              title="Apply Now"
              isDisabled={apply_type === "external"}
            />
            <Button
              fontWeight={font_weight.medium}
              title="External Apply"
              isDisabled={apply_type === "quick"}
            />
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-0 m-5">
        <div className="flex justify-center items-center space-x-4">
          <div onClick={editBtnHandler}>
            <Edit />
          </div>
          <div onClick={deleteBtnHandler}>
            <Delete />
          </div>
        </div>
      </div>
    </div>
  );
}
