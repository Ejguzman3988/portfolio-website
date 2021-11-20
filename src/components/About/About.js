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
          I am looking for a workplace where I can nurture my Software
          Engineering skills.
        </p>
        <p className="about__fourth">
          I want to continue to be inspired by how code can help shape our
          world.
        </p>
      </div>
    </div>
  );
};

export default About;
