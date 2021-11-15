import React from "react";
import "./Intro.css";

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro__greet">Hi, I'm</div>
      <div className="intro__name">
        Eriberto Guzman <br />
      </div>
      <p style={{ width: "60%", fontSize: "0.4em" }}>
        Bilingual: Fluent in English & Spanish
      </p>
    </div>
  );
};

export default Intro;
