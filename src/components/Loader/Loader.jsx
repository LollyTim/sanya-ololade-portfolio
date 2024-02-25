import React from "react";

const Loader = () => {
  return (
    <div
      className=" w-[100%] h-[100vh] justify-center items-center "
      style={{}}
    >
      <svg
        viewBox="0 0 400 160"
        className=" w-[80rem] fill-bgClr dark:fill-bgClrDark font-bold mx-auto my-auto h-full justify-center  items-center"
      >
        <text
          x={"50%"}
          y={"50%"}
          dy={".32em"}
          textAnchor="middle"
          className=" stroke-white stroke-2 text-xl lg:text-[50px] text-bgClr dark:text-bgClrDark tracking-[-3.2px] dark:animate-lineUpDark animate-lineUp "
        >
          LOLLYTECH
        </text>
        <text
          x={"50%"}
          y={"50%"}
          dy={".32em"}
          dx={"2.8em"}
          textAnchor="middle"
          className="stroke-white stroke-2 text-5xl dark:animate-lineUpDark animate-lineUp "
        >
          .
        </text>
      </svg>
      ;
    </div>
  );
};

export default Loader;
