import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "../helper/contexts/themeContext";

const ThemeToggle = () => {
  const { toggle, day } = useContext(ThemeContext);

  return (
    <div>
      <button onClick={toggle}>
        {day ? (
          <FontAwesomeIcon icon={faMoon} className="pr-2" />
        ) : (
          <FontAwesomeIcon icon={faSun} className="pr-2" />
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;
