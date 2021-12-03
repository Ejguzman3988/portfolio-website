import React, { useState, useContext } from "react";
import { AniContext } from "../Context/AniContext";

const ColorUI = () => {
  const colors = ["#146b3a", "#bb2528", "#165b33"];
  const { HoodieState } = useContext(AniContext);
  const [toggle, setToggle] = useState(false);

  const showButtons = () => {
    return colors.map((c) => {
      return (
        <button
          style={{ background: c, textDecoration: "none" }}
          onClick={() => HoodieState.setHoodieColor(c)}
        >
          {c}
        </button>
      );
    });
  };

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div className="color-buttons">
      {toggle ? (
        <div className="color-buttons">
          <button
            onClick={() => setToggle(!toggle)}
            style={{ textDecoration: "none" }}
          >
            x
          </button>
          {showButtons()}
        </div>
      ) : (
        <button
          onClick={handleClick}
          style={{
            backgroundColor: "rgba(0,0,0,0)",
            color: "white",
          }}
        >
          Hoodie Color
        </button>
      )}
    </div>
  );
};

export default ColorUI;
