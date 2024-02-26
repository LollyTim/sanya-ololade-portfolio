import { motion } from "framer-motion";
import Whatsapp from "./images/whatsapp.png";
import Instagram from "./images/instagram.png";
import Github from "./images/github.png";
import Linkedin from "./images/linkedin.png";
import X from "./images/x.svg";
import Facebook from "./images/facebook.png";

import React from "react";

const About = () => {
  const socialIcons = [
    {
      url: Instagram,
      link: "",
    },
    {
      url: Linkedin,
      link: "",
    },
    {
      url: X,
      link: "",
    },
    {
      url: Facebook,
      link: "",
    },
    {
      url: Github,
      link: "",
    },
  ];
  return (
    <div className=" w-[90%] lg:w-[90%] text-textClr flex mt-12 pb-12 dark:text-textClrDark justify-center items-center mx-auto">
      <div className="  flex flex-col gap-6 lg:w-[80%] w-[90%] mx-auto">
        <div className=" w-full lg:grid lg:grid-cols-5 lg:auto-cols-[300px] gap-6">
          <div className=" dark:bg-darkgbg bg-lightgbg py-5 px-8 lg:col-span-3 w-full  rounded-xl flex flex-col lg:gap-2 gap-4  ">
            <h1 className="text-textClr  dark:text-textClrDark text-xl font-medium">
              About{" "}
              <span className=" text-accentClr dark:text-accentClrDark font-medium">
                Me
              </span>
            </h1>
            <p className="text-textClr dark:text-textClrDark font-normal text-[16px]">
              I'm Sanya Ololade, a full-stack developer with strong
              problem-solving skills and experience in building web applications
              using JavaScript, React, and Node.js and more . I'm passionate
              about creating user-friendly and efficient applications and am
              currently seeking a challenging position where I can contribute to
              exciting projects.
            </p>
          </div>
          <div className="dark:bg-darkgbg bg-lightgbg justify-center lg:col-span-2 items-center flex rounded-xl">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
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
                className=" lg:w-[160px] lg:h-[160px] w-[200px] h-[200px] border border-accentClr dark:border-accentClrDark bg-center bg-cover rounded-full"
                style={{ backgroundImage: `url("/Sanya Ololade.jpg")` }}
              ></div>
            </motion.div>
          </div>
        </div>
        <div className=" w-full lg:grid lg:grid-cols-5 lg:auto-cols-[300px] gap-6 ">
          <div className=" w-full lg:grid lg:grid-cols-2 flex lg:auto-cols-[300px] gap-6 flex-row mb-6 lg:mb-0  lg:col-span-2 lg:gap-6 ">
            <div className=" rounded-2xl dark:bg-darkgbg bg-lightgbg flex flex-col justify-center w-full items-center">
              <h1 className=" text-6xl">
                2
                <span className=" text-accentClr dark:text-accentClrDark">
                  +
                </span>
              </h1>
              <p className=" text-sm font-thin text-center">
                Years of Experience
              </p>
            </div>
            <div className=" rounded-2xl gap-2 dark:bg-darkgbg bg-lightgbg w-full flex flex-col justify-center items-center">
              <h1 className=" text-6xl">
                8
                <span className=" text-accentClr dark:text-accentClrDark">
                  +
                </span>
              </h1>
              <p className=" text-textClr dark:text-textClrDark text-sm font-thin">
                Projects
              </p>
            </div>
          </div>

          <div className=" w-full rounded-2xl dark:bg-darkgbg bg-lightgbg lg:col-span-3 justify-center items-center flex px-6 py-3">
            Full-stack dev bringing magic to the front-end with React, Next.js,
            Tailwind CSS, Framer Motion, and DaisyUI. Powerful back-end with
            Node.js and Express.js. Always up for a learning adventure!
          </div>
        </div>
        <div className=" md:w-full flex flex-col md:grid md:grid-cols-5 md:auto-cols-[200px] gap-6 ">
          <div className=" rounded-2xl dark:bg-darkgbg bg-lightgbg md:col-span-2 flex">
            {socialIcons.map((icon, i) => (
              <a href={icon.link} key={i} className=" w-20 text-[50px]">
                <img src={icon.url} alt="" />
              </a>
            ))}
          </div>
          <div className=" rounded-2xl dark:bg-darkgbg bg-lightgbg md:col-span-2"></div>
          <div className=" rounded-2xl dark:bg-darkgbg bg-lightgbg h-[160px]"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
