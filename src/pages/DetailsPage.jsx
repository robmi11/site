import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import CountriesContext from "../context/countries/CountriesContext";
import {
  formatPopulation,
  getCurrencies,
  getLanguages,
} from "../utils/format.js";
import CountryCodeBtn from "../components/CountryCodeBtn.jsx";

function DetailsPage() {
  const { name } = useParams();
  const { allCountries } = useContext(CountriesContext);
  const details = allCountries.find((country) => country.name.common === name);
  if (!allCountries) return <h1>Error...</h1>;
  return (
    <div className="min-h-screen">
      <Link
        to="/"
        className="btn btn-sm btn-theme mb-10">
        Go Back
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* FLAG */}
        <div className="rounded-md">
          {details.flags && (
            <img
              className="rounded-md aspect-auto"
              src={details.flags.svg}
              alt=""
            />
          )}
        </div>
        {/* DETAILS */}
        <div className="grid mt-7 md:mt-0 grid-cols-1 ml-auto mr-auto md:grid-cols-2 md:ml-16 items-center">
          <div className="mb-7 md:col-span-2">
            <p className="text-3xl font-extrabold">{details.name.official}</p>
          </div>

          <div className="mb-7 md:mb-0">
            <p className="font-bold mb-2">
              Name: <span className="font-normal">{details.name.common}</span>
            </p>
            <p className="font-bold mb-2">
              Population:{" "}
              <span className="font-normal">
                {formatPopulation(details.population)}
              </span>
            </p>
            <p className="font-bold mb-2">
              Region: <span className="font-normal">{details.region}</span>
            </p>
            <p className="font-bold mb-2">
              Subregion:{" "}
              <span className="font-normal">
                {details.subregion ? details.subregion : "No data provided"}
              </span>
            </p>
            <p className="font-bold">
              Capital: <span className="font-normal">{details.capital}</span>
            </p>
          </div>

          <div className="md:ml-5">
            <p className="font-bold mb-2">
              Top Level Domain:{" "}
              <span className="font-normal">{details.tld}</span>
            </p>
            <p className="font-bold mb-2">
              Cuurencies:{" "}
              <span className="font-normal">
                {getCurrencies(details.currencies)}
              </span>
            </p>
            <p className="font-bold mb-2">
              Languages:{" "}
              <span className="font-normal">
                {getLanguages(details.languages)}
              </span>
            </p>
          </div>

          <div className="mt-7 md:col-span-2 pb-7 grid grid-cols-1 gap-2 md:grid-cols-4">
            {details.borders.length !== 0 && (
              <p className="row-span-8">Border Countries:</p>
            )}
            {details.borders.map((code, index) => (
              <CountryCodeBtn
                key={index}
                code={code}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default DetailsPage;
