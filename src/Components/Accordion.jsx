import React, { useState, useEffect } from "react";
import AppLayout from "./AppLayout";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";


const Accordion = ({
  dis,
  title,
}) => {
  const [show, setShow] = useState(true);
  const toggleFunction = () => {
    setShow(!show);
  };


  return (
    <AppLayout>
      <div
        onClick={toggleFunction}
        className='sm:w-[540px] w-full h-full  py-3  rounded-[5px] dark:bg-gradient-to-r from-primary-black to-black relative sm:px-5 my-3 select-none font-poppins bg-gray-50 shadow-xl dark:shadow-none  border border-gray-200 dark:border-none '
      >
        <div className="flex justify-between items-center px-[30px] relative cursor-pointer group ">
          <h1
            className='dark:text-[#FFF] text-black font-normal leading-5 text-sm  antialiased '
          >
            {title}
          </h1>
          <button onClick={toggleFunction}  >
            {show ? <FaPlus className="text-black dark:text-white" /> : <FiMinus className="text-black dark:text-white" />} 
          </button>
          
          
        </div>
        <div
          className={`  dark:bg-gradient-to-r from-primary-black to-black sm:w-full  flex-col justify-evenly rounded-md flex items-center bg-gray-50   ${
            show ? "hidden" : "flex-1"
          } `}
        >
          <span className="border-t dark:border-gray-600 border-gray-300 w-[90%]   mt-5 "></span>
          <p
            className='sm:text-sm text-xs leading-7  font-normal dark:text-[#9E9E9E] text-gray-500 mx-7  py-3 antialiased'
          >
            {dis}{" "}
          </p>
        </div>
      </div>
    </AppLayout>
  );
};

export default Accordion;
