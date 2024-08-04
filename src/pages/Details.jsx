import { useParams, Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import CountriesContext from "../context/countries/CountriesContext";

function Details() {
  const { name } = useParams();
  const { getCountryByName, details } = useContext(CountriesContext);

  useEffect(() => {
    getCountryByName(name);
  }, [name, getCountryByName]);
  console.log(details);
  return (
    <div>
      Details: {name}{" "}
      <Link
        className="btn btn-outline"
        to="/">
        Go Back
      </Link>
    </div>
  );
}
export default Details;
