import React, { useState } from "react";

const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  const [day, setDay] = useState(true);

  const toggle = () => {
    setDay(!day);
  };

  const light = {
    backgroundColor: "#FFFFFF",
    color: "#212529",
    borderColor: "#ced4da",
  };

  const dark = {
    backgroundColor: "#212529",
    color: "#FFFFFF",
    borderColor: "#adb5bd",
  };

  return (
    <ThemeContext.Provider value={{ day, toggle, light, dark }}>
      {children}
    </ThemeContext.Provider>
  );
};
export { ThemeContext, ThemeProvider };
