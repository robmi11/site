import { useReducer, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import CountriesReducer from "./CountriesReducer";
import CountriesContext from "./CountriesContext";
import {
  FETCH_COUNTRIES,
  SET_CURRENT_COUNTRIES,
  SET_CURRENT_PAGE,
  SET_COUNTRY_DETAILS,
  SET_LOADING,
  SET_REGION_COUNTRIES,
} from "../actions";

const CountriesState = ({ children }) => {
  const initialState = {
    countries: [],
    currentCountries: [],
    countriesByRegion: [],
    details: [],
    currentPage: 0,
    countriesPerPage: 10,
    isError: false,
    isLoading: false,
    message: null,
  };

  const [state, dispatch] = useReducer(CountriesReducer, initialState);

  //Fetch All Countries
  const fetchAllUsers = async () => {
    setLoading();

    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      if (response.status === 200) {
        dispatch({ type: FETCH_COUNTRIES, payload: response.data });
        dispatch({ type: SET_CURRENT_COUNTRIES });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const setCurrentCountries = (direction) => {
    setLoading();

    dispatch({ type: SET_CURRENT_PAGE, payload: direction });
    dispatch({ type: SET_CURRENT_COUNTRIES });
  };

  const getCountryByName = async (name) => {
    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/name/${name}?fullText=true`,
      );
      if (response.status === 200) {
        dispatch({ type: SET_COUNTRY_DETAILS, payload: response.data });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getCountriesByRegion = async (region) => {
    setLoading();
    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/region/${region}`,
      );

      if (response.status === 200) {
        dispatch({ type: SET_REGION_COUNTRIES, payload: response.data });
      }
    } catch (error) {
      console.log(error);
    }
  };

  //Set Loading State => TRUE
  const setLoading = () => dispatch({ type: SET_LOADING });

  useEffect(() => {
    fetchAllUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CountriesContext.Provider
      value={{
        countries: state.countries,
        currentCountries: state.currentCountries,
        countriesByRegion: state.countriesByRegion,
        details: state.details,
        currentPage: state.currentPage,
        isError: state.isError,
        isLoading: state.isLoading,
        message: state.message,
        setCurrentCountries,
        getCountryByName,
        getCountriesByRegion,
      }}>
      {children}
    </CountriesContext.Provider>
  );
};

CountriesState.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CountriesState;
