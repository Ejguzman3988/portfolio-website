import React, { useState, useContext, useEffect } from "react";
import { AniContext } from "../Context/AniContext";
import Switch from "react-switch";

const ColorUI = () => {
  const { HoodieState, SantaState } = useContext(AniContext);
  const colors = SantaState.santa
    ? ["#146b3a", "#bb2528", "#165b33"]
    : ["purple", "#19397d", "skyblue", "#9c5ddb"];
  const [toggle, setToggle] = useState(false);
  const santa = SantaState.santa;

  useEffect(() => {
    HoodieState.setHoodieColor(colors[0]);
  }, [SantaState.santa]);

  const showButtons = () => {
    return colors.map((c) => {
      return (
        <button
          style={{
            background: c,
            textDecoration: "none",
            width: "20vw",
            height: "5vh",
          }}
          onClick={() => HoodieState.setHoodieColor(c)}
        ></button>
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
        <>
          <button
            onClick={handleClick}
            style={{
              backgroundColor: "rgba(0,0,0,0)",
              color: "white",
              marginBottom: "10px",
            }}
          >
            Hoodie Color
          </button>
          <label htmlFor="material-switch">
            <Switch
              checked={santa}
              onChange={() => SantaState.setSanta(!santa)}
              onColor="#86d3ff"
              onHandleColor="#2693e6"
              offColor="#363636"
              handleDiameter={30}
              borderRadius={11}
              uncheckedIcon={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    fontSize: 18,
                  }}
                ></div>
              }
              checkedIcon={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    fontSize: 18,
                  }}
                >
                  ☃️
                </div>
              }
              boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
              activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
              height={30}
              width={58}
              className="react-switch"
              id="material-switch"
              checkedHandleIcon={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    fontSize: 18,
                  }}
                >
                  💼
                </div>
              }
              uncheckedHandleIcon={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    fontSize: 18,
                  }}
                >
                  ❄️
                </div>
              }
            />
          </label>
        </>
      )}
    </div>
  );
};

export default ColorUI;
