import React from "react";
import Typical from "react-typical";

const Hero = () => {
  return (
    <div className="h-[90.6vh] items-center justify-center flex w-[80%] text-textClr mx-auto dark:text-textClrDark">
      <div className="w-[50%] items-start flex flex-col">
        <h1 className=" font-light text-3xl">
          Hi{" "}
          <span className=" text-accentClr dark:text-accentClrDark">I'm</span>
        </h1>
        <h1 className=" text-textClr dark:text-textClrDark font-semibold text-8xl">
          Sanya Ololade
          <span className=" text-accentClr dark:text-accentClrDark text-sm">
            a
          </span>
        </h1>
        <h1 className={" text-accentClr dark:text-accentClrDark text-4xl"}>
          <Typical
            loop={Infinity}
            steps={[
              "Ethusiastic Developer 😎",
              5000,
              "Front-End Developer 💻",
              5000,
              "Backend Developer 💻",
              5000,
              "Fullstack Developer💻",
              5000,
            ]}
          />
        </h1>
      </div>
      <div className="w-[50%] items-center flex justify-center">
        <div
          className=" w-[440px] h-[440px] bg-center bg-cover rounded-full"
          style={{ backgroundImage: `url("/Sanya Ololade.jpg")` }}
        ></div>
      </div>
      {/**/}
    </div>
  );
};

export default Hero;
