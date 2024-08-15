import { useContext, useEffect } from "react";
import CountriesContext from "../context/countries/CountriesContext";
import CountryCard from "../components/CountryCard";

function HomePage() {
  const {
    isLoading,
    isError,
    message,
    countriesToDisplay,
    allCountries,
    setCurrentPage,
    setCountriesToDisplay,
    currentPage,
  } = useContext(CountriesContext);

  useEffect(() => {
    setCountriesToDisplay(currentPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  if (!countriesToDisplay || countriesToDisplay.length === 0)
    return <h1>Error Fetching Data</h1>;
  return (
    <>
      {isError ? (
        <h1>{message}</h1>
      ) : isLoading ? (
        <h1>Loading ...</h1>
      ) : (
        <>
          <div className="flex justify-center gap-5 mb-10">
            <button
              onClick={() => {
                setCurrentPage(currentPage - 10);
              }}
              disabled={currentPage <= 0}
              type="button"
              className="btn btn-sm px-5 bg-oxford-200 text-oxford-950 dark:bg-oxford-800 dark:text-oxford-200">
              Prev
            </button>
            <button
              disabled={currentPage >= allCountries.length - 10}
              onClick={() => {
                setCurrentPage(currentPage + 10);
              }}
              type="button"
              className="btn btn-sm px-5 bg-oxford-200 text-oxford-950 dark:bg-oxford-800 dark:text-oxford-200">
              Next
            </button>
          </div>
          <section className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 justify-items-center pb-10">
            {countriesToDisplay.map((country, index) => (
              <CountryCard
                key={index}
                country={country}
              />
            ))}
          </section>
        </>
      )}
    </>
  );
}
export default HomePage;
