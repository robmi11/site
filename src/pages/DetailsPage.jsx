import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import CountriesContext from "../context/countries/CountriesContext";

function DetailsPage() {
  const { name } = useParams();
  const { allCountries } = useContext(CountriesContext);
  const details = allCountries.find((country) => country.name.common === name);
  console.log(details);
  return (
    <div className="min-h-screen">
      <Link
        to="/"
        className="btn btn-sm bg-oxford-200 text-oxford-950 dark:bg-oxford-800 dark:text-oxford-200">
        Go Back
      </Link>
      DetailsPage: {name}
    </div>
  );
}
export default DetailsPage;
