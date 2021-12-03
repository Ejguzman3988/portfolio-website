import "./App.css";
import React from "react";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Sidebar from "./components/Sidebar/Sidebar";
import Snowfall from "react-snowfall";
import ColorUI from "./components/UI/ColorUI";

function App() {
  return (
    <div>
      <Snowfall
        snowflakeCount={50}
        style={{ top: 0, position: "fixed", zIndex: 100 }}
      />
      <div>
        <ColorUI />
        <Header />
        <Sidebar />
        <Intro />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
