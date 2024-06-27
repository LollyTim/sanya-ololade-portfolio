import React from "react";
import Typical from "react-typical";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="h-[90.6vh] items-center justify-center flex w-[80%] text-textClr mx-auto gap-16 dark:text-textClrDark flex-col lg:flex-row">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.1,
          x: { type: "spring", stiffness: 50 },
          opacity: { duration: 0.8 },
          ease: "easeIn",
          duration: 1,
        }}
        className="lg:w-[50%] w-[90%] justify-center items-start flex flex-col"
      >
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
              "Front-End Developer 💻",
              4000,
              "Mobile Developer 💻",
              4000,
              "Backend Developer 💻",
              4000,
              "Fullstack Developer💻",
              4000,
            ]}
          />
        </h1>
      </motion.div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.1,
          x: { type: "spring", stiffness: 200 },
          opacity: { duration: 0.8 },
          ease: "easeIn",
          duration: 1,
        }}
        className="lg:w-[50%] items-center flex justify-center "
      >
        <div
          className=" lg:w-[440px] lg:h-[440px] w-[280px] h-[280px] border border-accentClr dark:border-accentClrDark bg-center bg-cover rounded-full"
          style={{ backgroundImage: `url("/Sanya Ololade.jpg")` }}
        ></div>
      </motion.div>
      {/**/}
    </div>
  );
};

export default Hero;
