import React, { useState, useEffect } from "react";
import AppLayout from "./AppLayout";
import plus from "../assets/svg/plus.svg";
import minus from "../assets/svg/minus.svg";


const Accordion = ({
  bgtclassName,
  titleclassName,
  bgbclassName,
  disclassName,
}) => {
  const [show, setShow] = useState(true);
  const toggleFunction = () => {
    setShow(!show);
  };


  return (
    <AppLayout>
      <div
        onClick={toggleFunction}
        className={`sm:w-[540px] w-full h-full  py-3  rounded-[5px] bg-gradient-to-r from-primary-black to-black relative sm:px-5 my-3 select-none font-poppins  ${bgtclassName}`}
      >
        <div className="flex justify-between items-center px-[30px] relative cursor-pointer group ">
          <h1
            className={`text-[#FFF]  font-normal leading-5 text-sm  antialiased ${titleclassName} `}
          >
            How promote the product?
          </h1>
          <button onClick={toggleFunction}  >
            <img src={show ? plus : minus} alt="plus" />
          </button>
        </div>
        <div
          className={`  bg-gradient-to-r from-primary-black to-black sm:w-full  flex-col justify-evenly rounded-md flex items-center   ${
            show ? "hidden" : "flex-1"
          } ${bgbclassName}`}
        >
          <span className="border-t border-gray-600 w-[90%]   mt-5   "></span>
          <p
            className={`  sm:text-sm text-xs leading-7  font-normal text-[#9E9E9E] mx-7  py-3 antialiased ${disclassName} `}
          >
            A good design is not only aesthetically pleasing, but also
            functional. It should be able to solve the problem good design is
            not only aesthetically pleasing, but also functional.{" "}
          </p>
        </div>
      </div>
    </AppLayout>
  );
};

export default Accordion;
