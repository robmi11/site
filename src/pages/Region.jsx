import { useContext } from "react";
import { Link } from "react-router-dom";
import CountriesContext from "../context/countries/CountriesContext";
import CountryItem from "../components/CountryItem";

function Region() {
  const { countriesByRegion } = useContext(CountriesContext);
  return (
    <div>
      <Link
        className="btn btn-outline btn-primary btn-sm mb-10 ml-5"
        to="/">
        Go Back
      </Link>
      <div className="min-h-svh grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {countriesByRegion.map((country, index) => (
          <Link
            to={`/details/${country.name.common}`}
            key={index}>
            <CountryItem country={country} />
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Region;
