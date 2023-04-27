import React, { useState, useEffect } from "react";
import InputField from "./InputField";
import { Constants } from "../constants/constants";
import Heading from "./Heading";
import Button from "./Button";
import Radio from "./Radio";
import { useLocation, useNavigate } from "react-router-dom";
import { uploadDataThroughAPI } from "../utils/apis";
import Loading from "./Loading";

export default function Step2({ showAlert }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { font_size, font_weight } = Constants;
  const [applyType, setApplyType] = useState();
  const step1 = location.state.step1;
  const [isLoading, setIsLoading] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [id, setID] = useState(-1);
  const [step2, setStep2] = useState({
    experience_min: "",
    experience_max: "",
    salary_min: "",
    salary_max: "",
    total_employee: "",
    apply_type: "",
  });

  useEffect(() => {
    if (!location.state || !location.state.toUpdate) return;
    const toUpdateData = location.state.toUpdate;
    setStep2({
      experience_min: toUpdateData.experience_min,
      experience_max: toUpdateData.experience_max,
      salary_min: toUpdateData.salary_min,
      salary_max: toUpdateData.salary_max,
      total_employee: toUpdateData.total_employee,
      apply_type: toUpdateData.apply_type,
    });
    setApplyType(toUpdateData.apply_type);
    setIsUpdate(true);
    setID(location.state.id);
  }, [location.state]);

  const formSubmitHandler = (e) => {
    e.preventDefault();

    //basic validation
    //step1 data

    if (!step1) return showAlert("Please fill page 1 of the form", 1);
    if (step1.job_title === "") return showAlert("Please enter Job title", 1);
    //experience_min && max
    if (step2.experience_min >= 100)
      return showAlert("Experience should be less than 100 years", 1);
    if (step2.experience_min < 0)
      return showAlert("Experience cannot be negative", 1);
    if (step2.experience_max >= 100)
      return showAlert("Experience should be less than 100 years", 1);
    if (step2.experience_max < 0)
      return showAlert("Experience cannot be negative", 1);
    if (step2.experience_max < step2.experience_min)
      return showAlert(
        "Maximum experience should be greater or equal to Minimum experience",
        1
      );

    //salary_min && max
    if (step2.salary_min >= 1000000000)
      return showAlert("Salary cannot exceed \u20B9 1000000000", 1);
    if (step2.salary_min < 0) return showAlert("Salary cannot be negative", 1);
    if (step2.salary_max >= 1000000000)
      return showAlert("Salary cannot exceed \u20B9 1000000000", 1);
    if (step2.salary_max < 0) return showAlert("Salary cannot be negative", 1);
    if (step2.salary_max < step2.salary_min)
      return showAlert(
        "Maximum salary should be greater or equal to Minimum salary",
        1
      );

    //apply_type: No validation required as its value can either be null or "quick" | "external"
    if (applyType) step2.apply_type = applyType;

    setIsLoading(true);

    uploadDataThroughAPI({
      showAlert,
      step1,
      step2,
      update: isUpdate,
      id,
    })
      .then((res) => {
        setIsLoading(false);
        navigate("/");
      })
      .catch((e) => {
        setIsLoading(false);
      });
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <div className="w-[564px] h-[577px] bg-[#FFFFFF] rounded-xl border border-[#E6E6E6] relative">
            <div className="p-9">
              <div className="flex text-[#212121] justify-between">
                <Heading
                  title="Create a job"
                  fontWeight={font_weight.normal}
                  textSize={font_size.xtra_large}
                />
                <Heading
                  title="Step 2"
                  fontWeight={font_weight.base}
                  textSize={font_size.large}
                />
              </div>

              <form onSubmit={formSubmitHandler}>
                <div className="grid gap-6 mt-6 mb-6 md:grid-cols-2">
                  <InputField
                    title="Experience"
                    id="experience_min"
                    value={step2.experience_min}
                    type="number"
                    isRequired={false}
                    isExAbsent={true}
                    placeHolder="Minimum"
                    setForm={setStep2}
                  />

                  <InputField
                    id="experience_max"
                    value={step2.experience_max}
                    type="number"
                    isRequired={false}
                    isExAbsent={true}
                    placeHolder="Maximum"
                    setForm={setStep2}
                  />

                  <InputField
                    title="Salary"
                    id="salary_min"
                    value={step2.salary_min}
                    type="number"
                    isRequired={false}
                    isExAbsent={true}
                    placeHolder="Minimum"
                    setForm={setStep2}
                  />

                  <InputField
                    id="salary_max"
                    value={step2.salary_max}
                    type="number"
                    isRequired={false}
                    isExAbsent={true}
                    placeHolder="Maximum"
                    setForm={setStep2}
                  />
                </div>

                <div className="grid gap-6 mt-7 mb-6 md:grid-cols-1">
                  <InputField
                    id="total_employee"
                    title="Total employee"
                    value={step2.total_employee}
                    type="text"
                    isRequired={false}
                    placeHolder="51 - 200"
                    setForm={setStep2}
                  />
                </div>

                <div className="block mb-1 text-sm font-poppins font-medium text-[#212121]">
                  Apply type
                </div>
                <div className="flex justify-start items-center space-x-3 mt-2">
                  <Radio
                    value="quick"
                    checked={applyType === "quick"}
                    name="apply_type"
                    onChange={setApplyType}
                    title="Quick apply"
                  />
                  <Radio
                    value="extrenal"
                    checked={applyType === "extrenal"}
                    name="apply_type"
                    onChange={setApplyType}
                    title="External apply"
                  />
                </div>

                <div
                  className="flex justify-end items-end absolute bottom-[32px] right-[32px]"
                  onClick={formSubmitHandler}
                >
                  <Button fontWeight={font_weight.medium} title="Save" />
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
