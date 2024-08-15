import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function CountryCodeBtn({ code }) {
  const [name, setName] = useState(null);
  useEffect(() => {
    async function getCountry() {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/alpha/${code}`,
        );
        const country = await response.json();
        setName(country[0].name.common);
      } catch (error) {
        console.log(error);
      }
    }
    getCountry();
  }, [code]);

  return (
    <div>
      <Link
        to={`/details/${name}`}
        type="button"
        className="btn btn-sm btn-theme w-full">
        {name && name.toUpperCase()}
      </Link>
    </div>
  );
}

CountryCodeBtn.propTypes = {
  code: PropTypes.string.isRequired,
};

export default CountryCodeBtn;
