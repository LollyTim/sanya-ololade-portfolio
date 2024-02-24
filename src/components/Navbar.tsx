import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <>
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                    delay: 0.1,
                    x: { type: "spring", stiffness: 50 },
                    opacity: { duration: 0.8 },
                    ease: "easeIn",
                    duration: 1,
                }}
                className=" flex justify-between items-center w-[80%] mx-auto h-16 relative"
            >
                <div className="">
                    <a href="/">
                        <motion.h1
                            className=" text-accentClr text-[outfit] text-[25px] dark:text-accentClrDark "
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{
                                delay: 0.1,
                                x: { type: "spring", stiffness: 50 },
                                opacity: { duration: 0.8 },
                                ease: "easeIn",
                                duration: 1,
                            }}
                        >
                            <span className=" text-textClr dark:text-textClrDark">
                                {" "}
                                &lt; L
                            </span>
                            T /&gt;
                        </motion.h1>
                    </a>
                </div>
                <motion.div
                    className=" flex text-textClr dark:text-textClrDark items-center space-x-8 text-sm font-normal max-[640px]:hidden font-SatoshiLight "
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                        delay: 0.1,
                        x: { type: "spring", stiffness: 50 },
                        opacity: { duration: 0.8 },
                        ease: "easeIn",
                        duration: 1,
                    }}
                >
                    <a href="/uishowcase">Me</a>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="5"
                        height="6"
                        viewBox="0 0 5 6"
                        fill="none"
                    >
                        <circle
                            cx="2.5"
                            cy="3"
                            r="2.25"
                            stroke="white"
                            stroke-width="0.5"
                        />
                    </svg>
                    <a
                        className=" cursor-pointer"
                    >
                        Projects
                    </a>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="5"
                        height="6"
                        viewBox="0 0 5 6"
                        fill="none"
                    >
                        <circle
                            cx="2.5"
                            cy="3"
                            r="2.25"
                            stroke="white"
                            stroke-width="0.5"
                        />
                    </svg>
                    <a href="/business" className=" cursor-pointer">
                        Service
                    </a>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="5"
                        height="6"
                        viewBox="0 0 5 6"
                        fill="none"
                    >
                        <circle
                            cx="2.5"
                            cy="3"
                            r="2.25"
                            stroke="white"
                            stroke-width="0.5"
                        />
                    </svg>
                    <p
                        className=" cursor-pointer"
                    >
                        Contact
                    </p>
                </motion.div>
                <motion.a
                    href="mailto: popsabey.ux@gmail.com"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                        delay: 0.1,
                        x: { type: "spring", stiffness: 50 },
                        opacity: { duration: 0.8 },
                        ease: "easeIn",
                        duration: 1,
                    }}
                    className=" text-textClr dark:text-textClrDark max-[640px]:hidden items-center flex gap-1 border border-[#282B46] rounded-full py-2 px-3 font-SatoshiLight font-medium"
                >
                    {" "}
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className=" rotate-[-90deg]"
                    >
                        <g id="Frame" clip-path="url(#clip0_1010_33)">
                            <path
                                id="Vector"
                                d="M21.5833 10.8131C20.6626 10.4058 19.3473 10.9518 18.4166 12.2718C17.8053 13.1385 17.6253 14.3725 16.8226 14.5011C16.516 14.5505 16.3493 14.3638 16.2626 14.0951C16.1713 13.6418 16.1913 12.9411 16.3606 11.9611L18.1873 3.75112C18.3326 3.12379 17.992 2.51646 17.172 2.31846C16.352 2.12046 15.7353 2.52246 15.5893 3.14979L13.9586 10.5938C13.63 12.2378 13.0206 11.9391 13.168 10.0771V10.0765L13.6353 1.34846C13.6733 0.67379 13.1546 0.122457 12.388 0.0931232C11.6213 0.0637899 11.0686 0.52379 11.0293 1.19779L10.584 10.1371C10.4886 11.9418 9.84262 11.2618 9.70262 9.95446L8.66662 2.72246C8.56062 2.04046 7.92129 1.56912 7.15462 1.69179C6.38796 1.81512 5.92462 2.44912 6.03062 3.13112L7.02729 9.74046C7.42262 12.2638 6.90595 12.9625 6.05529 10.2225L4.99262 6.20579C4.81929 5.56112 4.18396 5.16112 3.38596 5.38512C2.58796 5.60912 2.24396 6.25112 2.41662 6.89579L3.45529 10.6711C3.88929 13.3891 3.88929 14.4618 3.88929 16.3331C3.88929 18.2045 4.74996 24.0005 11.3333 24.0005C17.9166 24.0005 19.2706 17.3131 19.3333 16.8898C19.3333 16.8898 19.4153 15.9031 20.104 14.9798C21.0833 13.6671 21.7706 12.8758 22.1873 12.4025C22.3986 12.1631 22.604 11.2645 21.5833 10.8131Z"
                                fill="#FFDC5D"
                            />
                            <path
                                id="Vector_2"
                                d="M16.6073 14.494C16.4073 14.4127 16.2379 14.2034 16.2179 13.748C14.9566 13.9207 13.2506 14.274 11.9379 15.558C10.2339 17.224 9.94326 19.0247 9.95726 20.2294C9.96859 21.2007 10.4986 21.6607 10.6539 20.2214C10.8493 18.4034 12.1753 14.7927 16.6073 14.494Z"
                                fill="#EF9645"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_1010_33">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <p>Let's Talk</p>
                </motion.a>
                <button
                    onClick={handleNav}
                    className="hidden text-[#fff] max-[640px]:flex text-lg w-[25px]"
                >
                    <BiMenu size={25} />
                </button>
            </motion.div>

            {/* mobile navigation from here  */}

            <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                    delay: 0.1,
                    x: { type: "spring", stiffness: 50 },
                    opacity: { duration: 0.8 },
                    ease: "easeIn",
                    duration: 1,
                }}
                className={
                    nav
                        ? "flex flex-col w-full gap-5 items-center h-96 absolute top-0 px-4 py-4 pb-8 text-[24px] font-medium text-[#B5C8F0] bg-bgClr dark:bg-bgClrDark"
                        : "hidden"
                }
            >
                <div className="flex w-full justify-between h-18 py-3 px-5 items-center">
                    <motion.h1
                        className=" text-accentClr text-[outfit] dark:text-accentClrDark "
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            delay: 0.1,
                            x: { type: "spring", stiffness: 50 },
                            opacity: { duration: 0.8 },
                            ease: "easeIn",
                            duration: 1,
                        }}
                    >
                        LollyTech
                    </motion.h1>
                    <AiOutlineClose
                        className="cursor-pointer"
                        size={25}
                        onClick={handleNav}
                    />
                </div>
                <div className="w-[90%] justify-center mx-auto flex flex-col items-center gap-5">
                    <a
                        href="/"
                        className="p-2 w-fit hover:bg-[#010314] justify-center items-center mx-auto rounded-lg transition-colors"
                    >
                        Me
                    </a>
                    <a
                        onClick={() => {

                            setNav(false);
                        }}
                        className="p-2 w-fit justify-center items-center hover:bg-[#010314] rounded-lg transition-colors"
                    >
                        Projects
                    </a>
                    <a
                        onClick={() => {
                            setNav(false);
                        }}
                        className="p-2 text-nowrap w-fit justify-center items-center hover:bg-[#010314] rounded-lg transition-colors"
                    >
                        Services
                    </a>
                    <motion.a
                        href="mailto: popsabey.ux@gmail.com"
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            delay: 0.1,
                            x: { type: "spring", stiffness: 50 },
                            opacity: { duration: 0.8 },
                            ease: "easeIn",
                            duration: 1,
                        }}
                        className="text-[#fff] items-center flex gap-1 border border-[#282B46] rounded-full py-2 px-3 font-SatoshiLight font-medium"
                    >
                        {" "}
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className=" rotate-[-90deg]"
                        >
                            <g id="Frame" clip-path="url(#clip0_1010_33)">
                                <path
                                    id="Vector"
                                    d="M21.5833 10.8131C20.6626 10.4058 19.3473 10.9518 18.4166 12.2718C17.8053 13.1385 17.6253 14.3725 16.8226 14.5011C16.516 14.5505 16.3493 14.3638 16.2626 14.0951C16.1713 13.6418 16.1913 12.9411 16.3606 11.9611L18.1873 3.75112C18.3326 3.12379 17.992 2.51646 17.172 2.31846C16.352 2.12046 15.7353 2.52246 15.5893 3.14979L13.9586 10.5938C13.63 12.2378 13.0206 11.9391 13.168 10.0771V10.0765L13.6353 1.34846C13.6733 0.67379 13.1546 0.122457 12.388 0.0931232C11.6213 0.0637899 11.0686 0.52379 11.0293 1.19779L10.584 10.1371C10.4886 11.9418 9.84262 11.2618 9.70262 9.95446L8.66662 2.72246C8.56062 2.04046 7.92129 1.56912 7.15462 1.69179C6.38796 1.81512 5.92462 2.44912 6.03062 3.13112L7.02729 9.74046C7.42262 12.2638 6.90595 12.9625 6.05529 10.2225L4.99262 6.20579C4.81929 5.56112 4.18396 5.16112 3.38596 5.38512C2.58796 5.60912 2.24396 6.25112 2.41662 6.89579L3.45529 10.6711C3.88929 13.3891 3.88929 14.4618 3.88929 16.3331C3.88929 18.2045 4.74996 24.0005 11.3333 24.0005C17.9166 24.0005 19.2706 17.3131 19.3333 16.8898C19.3333 16.8898 19.4153 15.9031 20.104 14.9798C21.0833 13.6671 21.7706 12.8758 22.1873 12.4025C22.3986 12.1631 22.604 11.2645 21.5833 10.8131Z"
                                    fill="#FFDC5D"
                                />
                                <path
                                    id="Vector_2"
                                    d="M16.6073 14.494C16.4073 14.4127 16.2379 14.2034 16.2179 13.748C14.9566 13.9207 13.2506 14.274 11.9379 15.558C10.2339 17.224 9.94326 19.0247 9.95726 20.2294C9.96859 21.2007 10.4986 21.6607 10.6539 20.2214C10.8493 18.4034 12.1753 14.7927 16.6073 14.494Z"
                                    fill="#EF9645"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_1010_33">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <p>Let's Talk</p>
                    </motion.a>
                </div>
            </motion.div>
        </>
    );
};

export default NavBar;
