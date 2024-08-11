import { useContext } from "react";
import CountriesContext from "../context/countries/CountriesContext";

function HomePage() {
  const { isLoading, isError, message } = useContext(CountriesContext);
  return (
    <>
      {isError ? (
        <h1>{message}</h1>
      ) : isLoading ? (
        <h1>Loading ...</h1>
      ) : (
        <>
          <h1>Countries data fetched</h1>
        </>
      )}
    </>
  );
}
export default HomePage;
