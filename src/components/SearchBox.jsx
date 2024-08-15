import { useState, useContext } from "react";
import CountriesContext from "../context/countries/CountriesContext";
import { FaSearch } from "react-icons/fa";

function SearchBox() {
  const { fetchCountriesByName } = useContext(CountriesContext);
  const [name, setName] = useState("");

  function handleSearch() {
    if (name.length > 2) {
      fetchCountriesByName(name);
      setName("");
    } else {
      alert("Name must be at least 3 char long");
    }
  }

  return (
    <div className="w-80 md:w-fit h-12 mt-20 relative flex">
      <input
        className="bg-oxford-200 text-oxford-950 shadow-md dark:bg-oxford-900 dark:text-oxford-200 dark:shadow-xl rounded-md w-full md:w-96 h-full pl-16 mr-2 outline-none md:uppercase"
        placeholder="Search for a country"
        type="text"
        value={name}
        name="name"
        onChange={(event) => setName(event.target.value)}
      />
      <button
        onClick={handleSearch}
        className="btn px-5 bg-oxford-200 text-oxford-950 dark:bg-oxford-800 dark:text-oxford-200">
        Search
      </button>
      <FaSearch className="absolute top-[35%] left-6" />
    </div>
  );
}
export default SearchBox;
