import React from "react";
import html from "../../images/html.svg";
import javascript from "../../images/javascript.svg";
import css from "../../images/css.svg";
import react from "../../images/react.svg";
import redux from "../../images/redux.svg";
import ruby from "../../images/ruby.svg";
import rails from "../../images/rails.svg";
import pg from "../../images/pg.svg";
import sqlite from "../../images/sqlite.svg";
import "./Skills.css";

const Skills = () => {
  const skills = {
    backEnd: [
      { name: "Ruby", image: ruby, description: "Logo" },
      { name: "Rails", image: rails, description: "Logo" },
      { name: "PostgreSQL", image: pg, description: "Logo" },
      { name: "Sqlite", image: sqlite, description: "Logo" },
    ],
    frontEnd: [
      { name: "HTML", image: html, description: "Logo" },
      { name: "JavaScript", image: javascript, description: "Logo" },
      { name: "CSS", image: css, description: "Logo" },
      { name: "REACT", image: react, description: "Logo" },
      { name: "Redux", image: redux, description: "Logo" },
    ],
  };

  const stackMap = (stack) =>
    skills[stack].map((skill, idx) => (
      <div className="skill" key={idx}>
        <img
          className="skill__image"
          src={skill.image}
          alt={`${skill.name.toUpperCase()} ${skill.description}`}
        ></img>
        <div className="skill__name">{skill.name}</div>
      </div>
    ));

  return (
    <div className="skills">
      <h5>BackEnd</h5>
      <div className="skills__front">{stackMap("backEnd")}</div>
      <h5>FrontEnd</h5>
      <div className="skills__back">{stackMap("frontEnd")}</div>
    </div>
  );
};

export default Skills;
