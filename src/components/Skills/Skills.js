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
      { name: "Ruby", image: ruby },
      { name: "Rails", image: rails },
      { name: "PostgreSQL", image: pg },
      { name: "Sqlite", image: sqlite },
    ],
    frontEnd: [
      { name: "HTML", image: html },
      { name: "JavaScript", image: javascript },
      { name: "CSS", image: css },
      { name: "REACT", image: react },
      { name: "Redux", image: redux },
    ],
  };

  const stackMap = (stack) =>
    skills[stack].map((skill, idx) => (
      <div className="skill" key={idx}>
        <img className="skill__image" src={skill.image}></img>
        <div className="skill__name">{skill.name}</div>
      </div>
    ));

  return (
    <div className="skills">
      <h5>FrontEnd</h5>
      <div className="skills__front">{stackMap("backEnd")}</div>
      <h5>BackEnd</h5>
      <div className="skills__back">{stackMap("frontEnd")}</div>
    </div>
  );
};

export default Skills;
