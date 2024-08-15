import { useContext } from "react";
import { Link } from "react-router-dom";
import CountriesContext from "../context/countries/CountriesContext";
import ColorModeToggler from "./ColorModeToggler";
import Logo from "./Logo";

function Navbar() {
  const { fetchAllCountries } = useContext(CountriesContext);
  return (
    <nav className="bg-oxford-200 text-oxford-950 shadow-md dark:bg-oxford-900 dark:text-oxford-200 dark:shadow-xl">
      <div className="container flex min-h-24 w-11/12 items-center justify-between">
        <Link
          onClick={fetchAllCountries}
          to="/"
          className="underline">
          <Logo title="Where in the World?" />
        </Link>
        <ColorModeToggler />
      </div>
    </nav>
  );
}
export default Navbar;
