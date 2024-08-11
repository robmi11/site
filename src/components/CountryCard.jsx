import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { formatPopulation } from "../utils/format.js";

function CountryCard({ country }) {
  return (
    <div className="w-72 bg-oxford-50 text-oxford-800 dark:bg-oxford-800 dark:text-oxford-200 rounded-md pb-5">
      <Link to={`/details/${country.name.common}`}>
        <img
          className="aspect-auto rounded-t-md"
          src={country.flags.svg}
          alt=""
        />
        <div className="ml-8 mt-8">
          <h1 className="text-xl font-extrabold mb-8">{country.name.common}</h1>
          <p className="font-bold leading-8">
            Population:{" "}
            <span className="font-normal">
              {formatPopulation(country.population)}
            </span>
          </p>
          <p className="font-bold leading-8">
            Region: <span className="font-normal">{country.region}</span>
          </p>
          <p className="font-bold leading-8">
            Capital: <span className="font-normal">{country.capital}</span>
          </p>
        </div>
      </Link>
    </div>
  );
}

CountryCard.propTypes = {
  country: PropTypes.object.isRequired,
};

export default CountryCard;
