import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="text-header">About Me</div>
      <div className="about__content">
        <p className="about__first">
          Excited by solving challenging problems, passionate about creating new
          ideas, inspired by tech’s ability to make information easily and
          readily available.
        </p>
        <p className="about__second">
          I strive to bring my creations to life. I want to always be learning
          and be able to create anything that comes to mind.
        </p>
        <p className="about__third">
          Worked in the diverse New York City area using my bi-lingual skills on
          a daily basis. I am looking for a workplace where I can nurture my
          Software Engineering skills.
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
