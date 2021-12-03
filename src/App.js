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

function App() {
  return (
    <>
      <Snowfall
        snowflakeCount={50}
        style={{ top: 0, position: "fixed", zIndex: 100 }}
      />
      <div>
        <Header />
        <Sidebar />
        <Intro />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
