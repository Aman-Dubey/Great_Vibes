import React, { useState } from "react";
import { Constants } from "../constants/constants";
import Button from "./Button";
import CardText from "./CardText";
import { ReactComponent as Delete } from "../svg/delete.svg";
import { ReactComponent as Edit } from "../svg/edit.svg";
import { deleteDataThroughAPI } from "../utils/apis";
import { useNavigate } from "react-router-dom";
import Confirmation from "./Confirmation";

export default function Card({ data, id, showAlert, onDelete, setIsLoading }) {
  const { font_weight } = Constants;
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

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
    navigate("/form1", { state: { data, id } });
  };

  const deleteBtnClickHandler = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const deleteData = () => {
    setIsLoading(true);
    deleteDataThroughAPI({ showAlert, id })
      .then(() => {
        onDelete(id);
        setIsLoading(false);
      })
      .catch((e) => {
        showAlert("Unable to delete data. Try again", 1);
        setIsLoading(false);
      });
  };

  const convertNumberToCommaSeperatedRegex = (num) => {
    return num
      .replace(/(\.\d{2})\d*/, "$1")
      .replace(/(\d)(?=(\d{3})+\b)/g, "$1,");
  };

  return (
    <>
      <Confirmation
        showModal={showModal}
        setShowModal={setShowModal}
        deleteData={deleteData}
        title={job_title}
      />
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
                  title={`Experience (${
                    experience_min ? Math.round(experience_min) : "NA"
                  } - ${
                    experience_max ? Math.round(experience_max) : "NA"
                  } years)`}
                />
                <CardText
                  title={`INR (\u20B9) ${
                    salary_min
                      ? convertNumberToCommaSeperatedRegex(salary_min)
                      : "NA"
                  } - ${
                    salary_max
                      ? convertNumberToCommaSeperatedRegex(salary_max)
                      : "NA"
                  } / Month`}
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
                isDisabled={apply_type === "extrenal"}
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
            <div
              onClick={editBtnHandler}
              className="cursor-pointer flex justify-center items-center p-2 bg-[#D8D8D8] rounded-full"
            >
              <Edit />
            </div>
            <div
              onClick={deleteBtnClickHandler}
              className="cursor-pointer flex justify-center items-center p-2 bg-[#D8D8D8] rounded-full"
            >
              <Delete />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
