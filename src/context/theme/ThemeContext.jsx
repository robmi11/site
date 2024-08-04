import { createContext, useState } from "react";
import PropTypes from "prop-types";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  const switchColorMode = () => {
    setDarkMode((prevState) => !prevState);
  };
  return (
    <ThemeContext.Provider value={{ darkMode, switchColorMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeContext;
