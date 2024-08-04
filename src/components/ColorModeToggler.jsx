import { useContext, useEffect } from "react";
import ThemeContext from "../context/theme/ThemeContext";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";

function ColorModeToggler() {
  const { darkMode, switchColorMode } = useContext(ThemeContext);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <button onClick={switchColorMode}>
        {" "}
        <div className="flex items-center gap-1">
          <span className="dark:text-verylightgray text-verydarkblue text-sm">
            {darkMode ? "Light" : "Dark"}
          </span>
          {darkMode ? (
            <MdOutlineLightMode size={20} />
          ) : (
            <MdDarkMode
              className="text-verydarkblue"
              size={20}
            />
          )}{" "}
        </div>
      </button>
    </>
  );
}
export default ColorModeToggler;
