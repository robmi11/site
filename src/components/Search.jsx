import { useState, useContext } from "react";
import CountriesContext from "../context/countries/CountriesContext";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Search() {
  const [searchText, setSearchText] = useState("");
  const { getCountriesByRegion } = useContext(CountriesContext);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSelectChange = (event) => {
    getCountriesByRegion(event.target.value);

    navigate(`/region?region=${event.target.value}`);
    event.target.value = "region";
  };

  return (
    <section className="flex flex-col  gap-3 md:flex-row md:justify-between mx-5 mt-10">
      <div className="container w-80  relative">
        <input
          className="input input-bordered w-full bg-verylightgray shadow-md dark:bg-verydarkblue dark:text-verylightgray text-darkblue pl-10"
          type="text"
          name="searchText"
          value={searchText}
          onChange={(event) => handleInputChange(event)}
          placeholder="Search for a country..."
        />
        <FaSearch
          className="absolute top-1/3 left-2 text-darkblue dark:text-verylightgray"
          size={20}
        />
      </div>
      <div>
        <select
          className="select select-bordered bg-verylightgray dark:bg-darkblue dark:text-verylightgray text-darkbluetext"
          name="region"
          id="region"
          defaultValue={"region"}
          onChange={(event) => handleSelectChange(event)}>
          <option
            className="hidden"
            value="region"
            disabled>
            Filter by Region
          </option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
    </section>
  );
}
export default Search;
