import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import linkedin from "../../images/linkedin.svg";
import twitch from "../../images/twitch.svg";
import youtube from "../../images/youtube.svg";
import github from "../../images/github.svg";

const Sidebar = () => {
  const [newTop, setNewTop] = useState("30%");

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      return window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setNewTop(window.scrollY + Math.abs(window.screenY * 0.5));
  };

  return (
    <div className="sidebar" style={{ top: newTop }}>
      <div className="sidebar__logos">
        <img src={linkedin} />
        <img src={twitch} />
        <img src={youtube} />
        <img src={github} />
      </div>
    </div>
  );
};

export default Sidebar;
