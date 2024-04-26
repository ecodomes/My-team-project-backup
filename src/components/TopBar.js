import React from "react";
import ThemeToggle from "./ThemeToggle";
import { ThemeContext } from "../helper/contexts/themeContext";

const TopBar = () => {
  const { day, light, dark } = React.useContext(ThemeContext);
  return (
    <div className="w-full h-20 shadow-md " style={day ? light : dark}>
      <nav className="flex w-4/5 mx-auto justify-between pt-5">
        <h3 className="sm:text-xl sm:font-bold">Where in the world</h3>
        <ThemeToggle />
      </nav>
    </div>
  );
};

export default TopBar;
