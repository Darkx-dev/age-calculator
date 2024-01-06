"use client";

import { useState } from "react";
import Image from "next/image";

/* eslint-disable @next/next/no-img-element */
export default function CalculatorInterface() {
  const [day, setDay] = useState(null);
  const [month, setMonth] = useState(null);
  const [year, setYear] = useState(null);

  const triggerWarn = (parentNode: any, childNode: any) => {
    parentNode.querySelector("#warn-text").hidden = false;
    childNode.color = "red";
    childNode.fontWeight = "bolder";
  };
  const removeWarn = (parentNode: any, childNode: any) => {
    childNode.color = null;
    childNode.fontWeight = null;
    parentNode.querySelector("#warn-text").hidden = true;
  };

  const handleDay = (e: any) => {
    let parentNode = e.target.parentNode.parentNode;
    let childNode = parentNode.querySelector("#d-label").style;

    if (e.target.value > 31) {
      triggerWarn(parentNode, childNode);
    } else {
      removeWarn(parentNode, childNode);
    }
  };
  const handleMonth = (e: any) => {
    let parentNode = e.target.parentNode.parentNode;
    let childNode = parentNode.querySelector("#m-label").style;

    if (e.target.value > 12) {
      triggerWarn(parentNode, childNode);
    } else {
      removeWarn(parentNode, childNode);
    }
  };
  const handleYear = (e: any) => {
    let parentNode = e.target.parentNode.parentNode;
    let childNode = parentNode.querySelector("#y-label").style;

    if (e.target.value > 2024) {
      triggerWarn(parentNode, childNode);
    } else {
      removeWarn(parentNode, childNode);
    }
  };

  return (
    <div className="shadow-2xl max-md:space-y-5 bg-white shadow-neutral-400 w-fit p-14 max-md:px-5 rounded-xl rounded-br-[200px] max-md:rounded-br-[125px]">
      <div className="flex max-md:justify-center justify-between gap-5 w-[500px] max-md:w-[85vw] text-[#716F6F] font-semibold text-xs max-md:text-md">
        <div className="space-y-1">
          <div id="d-label">D A Y</div>
          <div>
            <input
              className="text-black font-bold border-2 border-[#DBDBDB] p-4  rounded-md w-full text-[32px] max-md:text-xl"
              type="text"
              placeholder="DD"
              onChange={handleDay}
            />
          </div>
          <span
            hidden
            className="italic text-xs font-light text-red-600"
            id="warn-text"
          >
            Must be a valid day
          </span>
        </div>
        <div className="space-y-1">
          <div id="m-label">M O N T H</div>
          <div>
            <input
              className="text-black font-bold border-2 border-[#DBDBDB] p-4 rounded-md w-full text-[32px]  max-md:text-xl"
              type="text"
              placeholder="MM"
              onChange={handleMonth}
            />
          </div>
          <span
            hidden
            className="italic text-xs font-light text-red-600"
            id="warn-text"
          >
            Must be a valid month
          </span>
        </div>
        <div className="space-y-1">
          <div id="y-label">Y E A R</div>
          <div>
            <input
              className=" text-black font-bold border-2 border-[#DBDBDB] p-4 rounded-md w-full text-[32px]  max-md:text-xl"
              type="text"
              placeholder="YYYY"
              onChange={handleYear}
            />
          </div>
          <span
            hidden
            className="italic text-xs font-light text-red-600"
            id="warn-text"
          >
            Must be a valid past
          </span>
        </div>
      </div>
      <div className="flex relative items-center justify-end  max-md:justify-center w-[700px] h-32 max-md:h-20 max-md:w-[85vw]">
        <hr className="border w-full" />
        <Image
          className="bg-[#854DFF] rounded-full p-5 absolute max-md:scale-[0.8]"
          src="/icon-arrow.svg"
          width={100}
          height={100}
          alt="Not Loaded Image"
        />
      </div>
      <div
        className="text-8xl max-md:text-4xl italic space-y-4 max-md:space-y-3"
        id="bottom"
      >
        <div className="space-x-5 max-md:space-x-3">
          <span className="text-[#854DFF] align-top">- -</span>
          <span>years</span>
        </div>
        <div className="space-x-5 max-md:space-x-3">
          <span className="text-[#854DFF] align-top">- -</span>
          <span>months</span>
        </div>
        <div className="space-x-5 max-md:space-x-3">
          <span className="text-[#854DFF] align-top  ">- -</span>
          <span>days</span>
        </div>
      </div>
    </div>
  );
}
