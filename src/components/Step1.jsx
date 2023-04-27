import React, { useEffect, useState } from "react";
import InputField from "./InputField";
import { Constants } from "../constants/constants";
import Heading from "./Heading";
import Button from "./Button";
import { useNavigate, useLocation } from "react-router-dom";

export default function Step1({ showAlert }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { overall, font_size, font_weight } = Constants;
  const [step1, setStep1] = useState({
    job_title: "",
    company_name: "",
    industry: "",
    location: "",
    remote_type: "",
  });

  useEffect(() => {
    if (!location.state) return;
    const toUpdateData = location.state.data;
    setStep1({
      job_title: toUpdateData.job_title,
      company_name: toUpdateData.company_name,
      industry: toUpdateData.industry,
      location: toUpdateData.location,
      remote_type: toUpdateData.remote_type,
    });
  }, [location.state]);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    // basic validations
    // job_title
    if (step1.job_title === "") return showAlert("Please enter Job title", 1);
    if (step1.job_title.length <= 3)
      return showAlert(
        "Job title length should be atleast 4 characters long",
        1
      );
    if (step1.job_title.length >= 100)
      return showAlert("Job title length cannot exceeds 100 characters", 1);

    // company name
    if (step1.company_name === "")
      return showAlert("Please enter Company name", 1);
    if (step1.company_name.length <= 2)
      return showAlert(
        "Company name length should be atleast 3 characters long",
        1
      );
    if (step1.company_name.length >= 100)
      return showAlert("Company name length cannot exceeds 100 characters", 1);

    // industry
    if (step1.industry === "")
      return showAlert("Please enter Industry name", 1);
    if (step1.industry.length <= 4)
      return showAlert(
        "Industry name length should be atleast 5 characters long",
        1
      );
    if (step1.industry.length >= 100)
      return showAlert("Industry name length cannot exceeds 100 characters", 1);

    // location
    if (step1.location.length >= 50)
      return showAlert("Industry name length cannot exceeds 50 characters", 1);

    // remote type
    if (step1.remote_type.length >= 20)
      return showAlert(
        "Remote type name length cannot exceeds 20 characters",
        1
      );
    navigate("/form2", {
      state: {
        step1,
        toUpdate: location.state ? location.state.data : null,
        id: location.state ? location.state.id : -1,
      },
    });
  };

  return (
    <div>
      <div
        className={`w-[564px] h-[577px] bg-[#FFFFFF] rounded-xl border border-[#E6E6E6] relative`}
      >
        <div className={`p-${overall.padding}`}>
          <div className={`flex text-[#212121] justify-between`}>
            <Heading
              title="Create a job"
              fontWeight={font_weight.normal}
              textSize={font_size.xtra_large}
            />
            <Heading
              title="Step 1"
              fontWeight={font_weight.base}
              textSize={font_size.large}
            />
          </div>

          <form onSubmit={formSubmitHandler}>
            <div className="grid gap-6 mt-6 mb-6 md:grid-cols-1">
              <InputField
                title="Job title"
                id="job_title"
                value={step1.job_title}
                isRequired={true}
                placeHolder="UX UI Designer"
                setForm={setStep1}
              />

              <InputField
                title="Company name"
                id="company_name"
                value={step1.company_name}
                isRequired={true}
                placeHolder="Google"
                setForm={setStep1}
              />

              <InputField
                title="Industry"
                id="industry"
                value={step1.industry}
                isRequired={true}
                placeHolder="Information Technology"
                setForm={setStep1}
              />
            </div>

            <div className="grid gap-6 mt-7 mb-6 md:grid-cols-2">
              <InputField
                title="Location"
                id="location"
                value={step1.location}
                isRequired={false}
                placeHolder="Chennai"
                setForm={setStep1}
              />

              <InputField
                title="Remote type"
                id="remote_type"
                value={step1.remote_type}
                isRequired={false}
                placeHolder="In-office"
                setForm={setStep1}
              />
            </div>
            <div
              className="flex justify-end items-end absolute bottom-[32px] right-[32px]"
              onClick={formSubmitHandler}
            >
              <Button fontWeight={font_weight.medium} title="Next" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
