import React from "react";
import InputField from "./InputField";
import { Constants } from "../constants/constants";
import Heading from "./Heading";
import Button from "./Button";

export default function Step1() {
  const { overall, font_size, font_weight } = Constants;
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

          <form>
            <div className="grid gap-6 mt-6 mb-6 md:grid-cols-1">
              <InputField
                title="Job title"
                isRequired={true}
                placeHolder="UX UI Designer"
              />

              <InputField
                title="Company name"
                isRequired={true}
                placeHolder="Google"
              />

              <InputField
                title="Industry"
                isRequired={true}
                placeHolder="Information Technology"
              />
            </div>

            <div className="grid gap-6 mt-7 mb-6 md:grid-cols-2">
              <InputField
                title="Location"
                isRequired={false}
                placeHolder="Chennai"
              />

              <InputField
                title="Remote type"
                isRequired={false}
                placeHolder="In-office"
              />
            </div>
            <div className="flex justify-end items-end absolute bottom-[32px] right-[32px]">
              <Button fontWeight={font_weight.medium} title="Next" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
