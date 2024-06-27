import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import pops from "./images/popsabay.png";
import fawazImg from "./images/fawalaw.png";
import mentorme from "./images/mentorme.png";
import gadgstore from "./images/gadgstore.png";
import mohammed from "./images/mohammed.png";
import shopifyclone from "./images/shopifyclone.png";

const projects = [
  {
    name: "Popsabey's Portfolio UI/UX Designer",
    description:
      "An impressive portfolio showcasing the exceptional design skills of a top-tier UI/UX designer.",
    image: pops,
    githubLink: "https://github.com/LollyTim/popsabeys-portfolio",
    liveLink: "https://popsabeys.vercel.app/",
  },
  {
    name: "FawazLaw Website",
    description:
      "A modern and professional website developed for a prestigious law firm.",
    image: fawazImg,
    githubLink: "",
    liveLink: "https://fawazlaw.sa/",
  },
  {
    name: "MentorMe Software",
    description:
      "A collaborative project built during an internship program, aimed at connecting mentors with mentees seamlessly.",
    image: mentorme,
    githubLink: "",
    liveLink: "https://mentor-me-lake.vercel.app/",
  },
  {
    name: "E-commerce Web Application",
    description:
      "A comprehensive full-stack e-commerce application, showcasing proficiency in both frontend and backend development.",
    image: gadgstore,
    githubLink: "https://github.com/LollyTim/e-commerce-webapp",
    liveLink: "https://e-commerce-webapp-ten.vercel.app/",
  },
  {
    name: "Client Portfolio Project",
    description:
      "A dynamic full-stack project built using the MERN stack, currently undergoing updates and maintenance.",
    image: mohammed,
    githubLink: "https://github.com/LollyTim/mohammed-frontend",
    liveLink: "https://mohammed-frontend.vercel.app/",
  },
  {
    name: "Shopify Dashboard Clone",
    description:
      "Participated in a 2023 hackathon to replicate the Shopify dashboard using pure HTML, CSS, and JavaScript, showcasing advanced front-end development skills without relying on any frameworks.",
    image: shopifyclone,
    githubLink: "https://github.com/LollyTim/shopify-dashboard-clone",
    liveLink: "https://shopify-dashboard-clone-main.netlify.app/",
  },

  // Add more projects as needed
];

const Projects = () => {
  return (
    <section className="text-textClr flex mt-12 pb-12 w-full dark:text-textClrDark">
      <div className="container lg:w-[80%] w-[90%] mx-auto px-6 justify-center items-center flex flex-col">
        <h2 className="text-3xl font-bold mb-8">
          <span className="text-accentClrDark dark:text-accentClr">My</span>
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-accentClr dark:border-accentClrDark p-4 rounded-lg"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="mb-4">{project.description}</p>
              <div className="flex space-x-4">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <FaGithub size={24} />
                  </a>
                )}
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  <FaExternalLinkAlt size={24} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
