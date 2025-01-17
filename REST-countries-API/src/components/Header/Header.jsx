import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import useTheme from "../../context/theme";
import { DarkModeToggle } from "../DarkModeToggle/DarkModeToggle";

export const Header = () => {
  // const { themeMode, lightTheme, darkTheme } = useTheme();

  // const onChangeButton = (e) => {
  //   const darkModeStatus = e.currentTarget.checked;
  //   if (darkModeStatus) {
  //     darkTheme();
  //   } else {
  //     lightTheme();
  //   }
  // };

  return (
    <header className="header">
      <h1 className="header-title">Where in the world?</h1>
      {/* <div className="darkMode">
        <FontAwesomeIcon icon={faMoon} />
        <input
          type="checkbox"
          value=""
          onChange={onChangeButton}
          checked={themeMode === "dark"}
        />
      </div> */}
      <DarkModeToggle />
    </header>
  );
};
