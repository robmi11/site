import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CountriesContext from "../context/countries/CountriesContext";

function RegionSelect() {
  const { fetchCountriesByRegion } = useContext(CountriesContext);
  const navigate = useNavigate();

  function handleSelectChange(event) {
    fetchCountriesByRegion(event.target.value);
    navigate("/");

    // event.target.value = "Filter by Region";
  }

  return (
    <section className="mt-20">
      <select
        onChange={(event) => handleSelectChange(event)}
        className="bg-oxford-200 shadow-md dark:bg-oxford-800 dark:text-oxford-400 dark:outline-none p-2 rounded-md"
        name="region"
        id="region">
        <option value="">Filter by Region</option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </section>
  );
}
export default RegionSelect;
