import React from "react";
import Typical from "react-typical";

const Hero = () => {
  return (
    <div className="h-[90.6vh]">
      <h1>Hero</h1>

      <Typical
        loop={Infinity}
        steps={[
          "Ethusiastic Developer 😎",
          5000,
          "Front-End Developer 💻",
          5000,
          "Reactjs Developer 💻",
          5000,
          "Web Developer 💻",
          5000,
        ]}
      />
    </div>
  );
};

export default Hero;
