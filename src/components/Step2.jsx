import React, { useState } from "react";
import InputField from "./InputField";
import { Constants } from "../constants/constants";
import Heading from "./Heading";
import Button from "./Button";
import Radio from "./Radio";

export default function Step2() {
  const { font_size, font_weight } = Constants;
  const [applyType, setApplyType] = useState();
  console.log(applyType);
  return (
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

          <form>
            <div className="grid gap-6 mt-6 mb-6 md:grid-cols-2">
              <InputField
                title="Experience"
                isRequired={false}
                isExAbsent={true}
                placeHolder="Minimum"
              />

              <InputField
                isRequired={false}
                isExAbsent={true}
                placeHolder="Maximum"
              />

              <InputField
                title="Salary"
                isRequired={false}
                isExAbsent={true}
                placeHolder="Minimum"
              />

              <InputField
                isRequired={false}
                isExAbsent={true}
                placeHolder="Maximum"
              />
            </div>

            <div className="grid gap-6 mt-7 mb-6 md:grid-cols-1">
              <InputField
                title="Total employee"
                isRequired={false}
                placeHolder="100"
              />
            </div>

            <div className="block mb-1 text-sm font-poppins font-medium text-[#212121]">
              Apply type
            </div>
            <div className="flex justify-start items-center space-x-3 mt-2">
              <Radio
                value="quick"
                name="apply_type"
                onChange={setApplyType}
                title="Quick apply"
              />
              <Radio
                value="extrenal"
                name="apply_type"
                onChange={setApplyType}
                title="External apply"
              />
            </div>

            <div className="flex justify-end items-end absolute bottom-[32px] right-[32px]">
              <Button fontWeight={font_weight.medium} title="Save" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
