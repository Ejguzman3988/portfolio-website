import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="text-header">About Me</div>
      <div className="about__content">
        <p className="about__first">
          Excited by solving challenging problems. Inspired by how code can
          shape our world.
        </p>
        <p className="about__second">
          I want to continue growing my skills, and some of my interest lie in
          machine learning, AI, and Cloud Computing.
        </p>
        <p className="about__third">
          I am looking for a workplace that values hard work, provides
          competitive benefits, and allows for upward mobility.
        </p>
        <p className="about__fourth">
          I own my mistakes and failures and learn from them. Strive to make
          every project or task my best work — no compromises.
        </p>
      </div>
    </div>
  );
};

export default About;
