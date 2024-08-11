import { useContext } from "react";
import ColorModeContext from "../context/theme/ColorModeContext";
import { MdDarkMode, MdLightMode } from "react-icons/md";

function ColorModeToggler() {
  const { colorMode, toggleColorMode } = useContext(ColorModeContext);

  return (
    <>
      {colorMode ? (
        <>
          <button
            type="button"
            onClick={toggleColorMode}
            className="flex gap-2">
            Light Mode <MdLightMode size={25} />
          </button>
        </>
      ) : (
        <>
          <button
            type="button"
            onClick={toggleColorMode}
            className="flex gap-2">
            Dark Mode <MdDarkMode size={25} />
          </button>
        </>
      )}
    </>
  );
}
export default ColorModeToggler;
