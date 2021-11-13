import "./App.css";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div>
      <Header />
      <Sidebar />

      <Intro />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
