import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="text-header">About Me</div>
      <div className="about__content">
        <p className="about__first">
          Excited by solving challenging problems. Passionate about creating new
          ideas. Inspired by tech’s ability to make information easily and
          readily available.
        </p>
        <p className="about__second">
          Passionate about learning, bringing ideas to life, and creating
          anything that comes to mind.
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
