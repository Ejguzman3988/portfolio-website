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

  const links = [
    { image: linkedin, url: "https://www.linkedin.com/in/eriberto-guzman" },
    { image: twitch, url: "https://www.twitch.tv/eridotdev" },
    {
      image: youtube,
      url: "https://www.youtube.com/channel/UCg_UvLDQvjd_kEunSlt8NTg/featured",
    },
    { image: github, url: "https://github.com/Ejguzman3988" },
  ];

  return (
    <div className="sidebar" style={{ top: newTop }}>
      <div className="sidebar__logos">
        {links.map((link, idx) => (
          <a href={link.url} key={idx} target="_blank">
            <img src={link.image}></img>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
