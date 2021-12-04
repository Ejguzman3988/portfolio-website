import React, { useState, createContext } from "react";

export const AniContext = createContext();

export const AniProvider = ({ children }) => {
  const [run, setRun] = useState(true);
  const [hoodieColor, setHoodieColor] = useState("#ea4630");
  const [santa, setSanta] = useState(false);

  const SantaState = {
    santa,
    setSanta,
  };

  const AniState = {
    run,
    setRun,
  };

  const HoodieState = {
    hoodieColor,
    setHoodieColor,
  };

  return (
    <AniContext.Provider value={{ AniState, HoodieState, SantaState }}>
      {children}
    </AniContext.Provider>
  );
};
