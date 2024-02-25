import React from "react";
import Typical from "react-typical";

const Hero = () => {
  return (
    <div className="h-[90.6vh] items-center justify-center flex w-[80%] text-textClr mx-auto gap-16 dark:text-textClrDark flex-col lg:flex-row">
      <div className="lg:w-[50%] w-[90%] justify-center items-start flex flex-col">
        <h1 className=" font-light text-sm lg:text-3xl">
          Hi{" "}
          <span className=" text-accentClr dark:text-accentClrDark">I'm</span>
        </h1>
        <h1 className=" text-textClr dark:text-textClrDark font-semibold text-5xl lg:text-8xl">
          Sanya Ololade
          <span className=" text-accentClr dark:text-accentClrDark text-sm">
            a
          </span>
        </h1>
        <h1
          className={
            " text-accentClr dark:text-accentClrDark text-2xl lg:text-4xl"
          }
        >
          <Typical
            loop={Infinity}
            steps={[
              "Ethusiastic Developer 😎",
              4000,
              "Front-End Developer 💻",
              4000,
              "Backend Developer 💻",
              4000,
              "Fullstack Developer💻",
              4000,
            ]}
          />
        </h1>
      </div>
      <div className="lg:w-[50%] items-center flex justify-center">
        <div
          className=" lg:w-[440px] lg:h-[440px] w-[280px] h-[280px] bg-center bg-cover rounded-full"
          style={{ backgroundImage: `url("/Sanya Ololade.jpg")` }}
        ></div>
      </div>
      {/**/}
    </div>
  );
};

export default Hero;
