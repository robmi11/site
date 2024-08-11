import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const ColorModeContext = createContext();

export function ColorModeProvider({ children }) {
  const [colorModeDark, setColorModeDark] = useState(true);

  function toggleColorMode() {
    setColorModeDark((prevState) => !prevState);

    if (!colorModeDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  return (
    <ColorModeContext.Provider
      value={{ colorMode: colorModeDark, toggleColorMode }}>
      {children}
    </ColorModeContext.Provider>
  );
}

ColorModeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ColorModeContext;
