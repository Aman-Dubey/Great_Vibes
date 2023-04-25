import React from "react";
import { Constants } from "../constants/constants";
import Button from "./Button";
import CardText from "./CardText";
import FadedText from "./FadedText";
import Heading from "./Heading";

export default function Card() {
  const { font_weight, font_size } = Constants;
  return (
    <div className="w-[830px] h-[320px] bg-[#FFFFFF] rounded-lg border-2 border-[#DADEDF] p-4 m-8">
      <div className="flex w-full h-full space-x-2">
        <div className="w-12 h-12 ml-2">
          <img src="assets/netflix.png" />
        </div>
        <div className="relative flex flex-col justify-between">
          <div>
            <p className={`text-2xl font-poppins font-normal`}>
              UX UI Designer
            </p>
          </div>
          <div className="absolute top-8 flex flex-col justify-around">
            <CardText title="Great Vibes - Information Technology" />
            <div className="font-poppins font-normal text-base text-[#646464]">
              Chennai, Tamilnadu, India (In-office)
            </div>
            <div className="flex flex-col gap-2.5 justify-around h-full mt-3">
              <CardText title="Part-Time (9.00am - 5.00pm IST)" />
              <CardText title="Experience (1 - 2 years)" />
              <CardText title={`INR (\u20B9) 30,000 - 50,000 / Month`} />
              <CardText title="51-200 employees" />
            </div>
          </div>

          <div className="flex justify-start items-center space-x-6">
            <Button fontWeight={font_weight.medium} title="Apply Now" />
            <Button fontWeight={font_weight.medium} title="External Apply" />
          </div>
        </div>
      </div>
    </div>
  );
}
