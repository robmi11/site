import { Link } from "react-router-dom";
import { useContext } from "react";
import CountriesContext from "../context/countries/CountriesContext";
import ColorModeToggler from "./ColorModeToggler";

function Navbar() {
  const { ClearCountryDetails } = useContext(CountriesContext);
  return (
    <nav className="flex justify-between px-5 py-10 mb-3 shadow-md bg-verylightgray dark:bg-darkblue">
      <h1 className="text-verydarkblue dark:text-verylightgray text-xl font-extrabold flex items-center">
        <Link
          onClick={ClearCountryDetails}
          to="/">
          Where in the World?
        </Link>
      </h1>

      <ColorModeToggler />
    </nav>
  );
}
export default Navbar;
