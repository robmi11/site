import { useContext } from "react";
import { Link } from "react-router-dom";
import CountriesContext from "../context/countries/CountriesContext";
import CountryItem from "../components/CountryItem";
import { NEXT_PAGE, PREV_PAGE } from "../context/actions";

function Home() {
  const { currentCountries, setCurrentCountries, currentPage, isLoading } =
    useContext(CountriesContext);

  const handlePagination = (event) => {
    if (event.target.innerText === "Next") {
      setCurrentCountries(NEXT_PAGE);
    } else {
      setCurrentCountries(PREV_PAGE);
    }
  };

  if (!currentCountries || currentCountries.length === 0)
    return <h1>Error fetching data!</h1>;

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <>
      <div className="flex justify-center gap-5 m-8">
        <button
          disabled={currentPage > 230}
          className="btn btn-primary btn-sm"
          onClick={(event) => handlePagination(event)}>
          Next
        </button>
        <button
          disabled={currentPage <= 0}
          className="btn btn-primary btn-sm"
          onClick={(event) => handlePagination(event)}>
          Prev
        </button>
      </div>
      <div className="min-h-svh grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {currentCountries.map((country, index) => (
          <Link
            to={`/details/${country.name.common}`}
            key={index}>
            <CountryItem country={country} />
          </Link>
        ))}
      </div>
    </>
  );
}
export default Home;
