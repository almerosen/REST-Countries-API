// DarkModeToggle.js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import "./DarkModeToggle.css";
import useTheme from "../../context/theme";

export const DarkModeToggle = () => {
  const { themeMode, lightTheme, darkTheme } = useTheme();

  const onChange = () => {
    if (themeMode === "light") {
      darkTheme();
    } else {
      lightTheme();
    }
  };

  return (
    <div className="dark-mode-toggle">
      <FontAwesomeIcon icon={faSun} className="icon sun" />
      <label className="toggle-switch">
        <input
          type="checkbox"
          onChange={onChange}
          checked={themeMode === "dark"}
        />
        <span className="slider"></span>
      </label>
      <FontAwesomeIcon icon={faMoon} className="icon moon" />
    </div>
  );
};
