import { useParams, Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import CountriesContext from "../context/countries/CountriesContext";

function Details() {
  const { country } = useParams();
  const {
    getCountryByName,
    details,
    clearCountryDetails,
    getCountryByCode,
    countriesByCode,
  } = useContext(CountriesContext);
  useEffect(() => {
    getCountryByName(country);
    if (details[0]?.borders) {
      getCountryByCode(details[0]?.borders);
    } else {
      console.log("No borders");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!details[0]) return <h1>Error fetching country details.</h1>;
  const {
    name,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    flags,
  } = details[0];

  let cur = [];
  for (let key in currencies) {
    cur.push(currencies[key].symbol);
  }

  let lang = [];
  for (let key in languages) {
    lang.push(languages[key]);
  }

  return (
    <>
      <Link
        onClick={clearCountryDetails}
        className="btn btn-info btn-sm ml-5 mb-8 px-10 shadow-md shadow-darkblue dark:bg-verydarkblue bg-verylightgray font-bold text-darkbluetext dark:text-verylightgray"
        to="/">
        Back
      </Link>
      <div className="grid grid-col-1 md:grid-cols-2 mx-5">
        <img
          className="w-full h-full px-5"
          src={flags.png}
          alt=""
        />
        <div className="grid grid-cols-1 md:grid-cols-2 px-5">
          <div className="col-span-2 mt-5">
            <h2 className="text-4xl font-extrabold text-verydarkblue dark:text-darkgray">
              {name.common}
            </h2>
          </div>
          <div className="text-verydarkblue dark:text-darkgray">
            <h2 className="py-1 font-bold">
              Population:{" "}
              <span className="font-light">
                {new Intl.NumberFormat("pl-PL").format(population)}
              </span>
            </h2>

            <h2 className="py-1 font-bold">
              Region: <span className="font-light">{region}</span>
            </h2>

            <h2 className="py-1 font-bold">
              Subregion: <span className="font-light">{subregion}</span>
            </h2>

            <h2 className="py-1 font-bold">
              Capital: <span className="font-light">{capital}</span>
            </h2>
          </div>

          <div className="text-verydarkblue dark:text-darkgray">
            <h2 className="py-1 font-bold">
              Top Level Domain: <span className="font-light">{tld}</span>
            </h2>
            <h2 className="py-1 font-bold">
              Currencies:{" "}
              <span className="font-light">{cur.map((x) => x + " ")}</span>
            </h2>
            <h2 className="py-1 font-bold">
              Languages:{" "}
              <span className="font-light">{lang.map((x) => x + " ")}</span>
            </h2>
          </div>
          {details[0].borders && (
            <div className="col-span-2">
              {countriesByCode.map((country, index) => (
                <button
                  className="btn btn-outline btn-sm mr-2"
                  key={index}>
                  {country.name.common}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default Details;
