import PropTypes from "prop-types";
import { createContext, useReducer, useEffect } from "react";
import CountriesReducer from "./CountriesReducer.js";
import {
  CLEAR_ERROR,
  FETCH_ALL_COUNTRIES,
  SET_ERROR,
  SET_LOADING,
} from "./CountriesActions.js";

const CountriesContext = createContext();

export const CountriesProvider = ({ children }) => {
  const initialState = {
    allCountries: [],
    isError: false,
    isLoading: false,
    message: null,
  };

  const [state, dispatch] = useReducer(CountriesReducer, initialState);

  function setLoading() {
    dispatch({ type: SET_LOADING });
  }

  useEffect(() => {
    async function fetchAllCountries() {
      setLoading();
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        if (response.status === 200) {
          const data = await response.json();
          dispatch({ type: CLEAR_ERROR });
          dispatch({ type: FETCH_ALL_COUNTRIES, payload: data });
        } else {
          dispatch({ type: SET_ERROR, payload: "Error Fetching Countries" });
        }
      } catch (error) {
        console.log(error?.data?.message || error.message);
      }
    }
    fetchAllCountries();
  }, []);

  return (
    <CountriesContext.Provider
      value={{
        allCountries: state.allCountries,
        isLoading: state.isLoading,
        isError: state.isError,
        message: state.message,
      }}>
      {children}
    </CountriesContext.Provider>
  );
};

CountriesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CountriesContext;
