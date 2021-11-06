import React from "react";
import logo from "../../images/logo192.png";
import "./Header.css";

const Header = (props) => {
  return (
    <div className="header">
      <div class="logo">
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default Header;
