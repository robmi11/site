import PropTypes from "prop-types";
import { createContext, useReducer, useEffect } from "react";
import CountriesReducer from "./CountriesReducer.js";
import {
  CLEAR_ERROR,
  FETCH_ALL_COUNTRIES,
  SET_ERROR,
  SET_LOADING,
  SET_COUNTRIES_TO_DISPLAY,
  SET_CURRENT_PAGE,
} from "./CountriesActions.js";

const CountriesContext = createContext();

export const CountriesProvider = ({ children }) => {
  const initialState = {
    allCountries: [],
    countriesToDisplay: null,
    currentPage: 0,
    countriesPerPage: 10,
    isError: false,
    isLoading: false,
    message: null,
  };

  const [state, dispatch] = useReducer(CountriesReducer, initialState);

  function setCurrentPage(page) {
    dispatch({ type: SET_CURRENT_PAGE, payload: page });
  }

  function setCountriesToDisplay(page) {
    dispatch({
      type: SET_COUNTRIES_TO_DISPLAY,
      payload: state.allCountries.slice(page, page + 10),
    });
  }

  // Set Loading state to TRUE
  function setLoading() {
    dispatch({ type: SET_LOADING });
  }

  // Fetch all countries and set state
  useEffect(() => {
    async function fetchAllCountries() {
      setLoading();
      try {
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,population,flags,capital,region,subregion,tld,languages,borders,currencies",
        );
        if (response.status === 200) {
          const data = await response.json();
          dispatch({ type: CLEAR_ERROR });
          dispatch({ type: FETCH_ALL_COUNTRIES, payload: data });
          dispatch({
            type: SET_COUNTRIES_TO_DISPLAY,
            payload: data.slice(0, state.countriesPerPage),
          });
        } else {
          dispatch({ type: SET_ERROR, payload: "Error Fetching Countries" });
        }
      } catch (error) {
        console.log(error?.data?.message || error.message);
      }
    }
    fetchAllCountries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CountriesContext.Provider
      value={{
        allCountries: state.allCountries,
        countriesToDisplay: state.countriesToDisplay,
        currentPage: state.currentPage,
        isLoading: state.isLoading,
        isError: state.isError,
        message: state.message,
        setCountriesToDisplay,
        setCurrentPage,
      }}>
      {children}
    </CountriesContext.Provider>
  );
};

CountriesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CountriesContext;
