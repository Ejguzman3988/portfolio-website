import React from "react";
import LogoSmile from "../svg/LogoSmile";
import "./Header.css";

const Header = (props) => {
  return (
    <div className="header">
      <div className="logo">
        <LogoSmile />
      </div>
    </div>
  );
};

export default Header;
