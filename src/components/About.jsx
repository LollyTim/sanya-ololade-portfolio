import { motion } from "framer-motion";
// import Whatsapp from "./images/whatsapp.png";
import Instagram from "./images/insta.svg";
import Github from "./images/github.svg";
import Linkedin from "./images/linkedin.svg";
import X from "./images/svg1.svg";
import Facebook from "./images/facebook.svg";
import CSS from "./images/css.svg";
import expressjs from "./images/expressjs.svg";
import tailwindCss from "./images/tailwindcss.svg";
import StyledCompo from "./images/styled-components.png";
import feamerMotion from "./images/framer-motion.svg";
import ReactJs from "./images/reactjs.svg";
import Javascript from "./images/javascript.svg";
import Html from "./images/html.svg";
import Mongodb from "./images/mongodb.png";
import NodeJs from "./images/nodejs.svg";
import NextJS from "./images/nextjs.svg";

import React from "react";

const About = () => {
  const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-260%",
      opacity: 1,
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 20,
      },
    },
  };
  const socialIcons = [
    {
      url: Instagram,
      link: "https://www.instagram.com/sanya_ololade/",
    },
    {
      url: Linkedin,
      link: "https://www.linkedin.com/in/ololade-sanya-106990272/",
    },
    {
      url: X,
      link: "https://twitter.com/Sanya_Ololade",
    },
    {
      url: Github,
      link: "https://github.com/LollyTim",
    },
    {
      url: Facebook,
      link: "https://web.facebook.com/profile.php?id=61552501215762",
    },
  ];

  const Stack = [
    {
      logo: Html,
    },
    {
      logo: CSS,
    },
    {
      logo: Javascript,
    },
    {
      logo: NextJS,
    },
    {
      logo: StyledCompo,
    },
    {
      logo: feamerMotion,
    },
    {
      logo: tailwindCss,
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
          <div className=" gap-2 rounded-2xl dark:bg-darkgbg bg-lightgbg md:col-span-2 flex py-2 px-4 justify-center items-center">
            {socialIcons.map((icon, i) => (
              <a href={icon.link} target="_blank" key={i} className=" ">
                <img src={icon.url} alt="" className=" size-12" />
              </a>
            ))}
          </div>
          <div className=" rounded-2xl dark:bg-darkgbg bg-lightgbg md:col-span-2 flex justify-center items-center gap-4 py-2 px-5">
            {Stack.map((each, id) => (
              <div key={id}>
                <img
                  src={each.logo}
                  alt=""
                  className=" size-20 max-h-10 w-14"
                />
              </div>
            ))}
          </div>
          <div className=" rounded-2xl dark:bg-darkgbg bg-lightgbg h-[160px] gap-3 justify-center items-center flex px-2 pt-3">
            <div className=" flex flex-col justify-center items-center">
              <img src={Mongodb} alt="" className="flex size-8" />
              <p>M</p>
            </div>
            <div className=" flex flex-col justify-center items-center">
              <img src={expressjs} alt="" className="flex size-8" />
              <p>E</p>
            </div>
            <div className=" flex flex-col justify-center items-center">
              <img src={ReactJs} alt="" className="flex size-8" />
              <p>R</p>
            </div>
            <div className=" flex flex-col justify-center items-center">
              <img src={NodeJs} alt="" className="flex size-8" />
              <p>N</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
