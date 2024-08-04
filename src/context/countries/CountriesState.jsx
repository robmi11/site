import { useReducer, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import CountriesReducer from "./CountriesReducer";
import CountriesContext from "./CountriesContext";
import {
  FETCH_COUNTRIES,
  SET_CURRENT_COUNTRIES,
  SET_CURRENT_PAGE,
  SET_LOADING,
} from "../actions";

const CountriesState = ({ children }) => {
  const initialState = {
    countries: [],
    currentCountries: [],
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
        currentPage: state.currentPage,
        isError: state.isError,
        isLoading: state.isLoading,
        message: state.message,
        setCurrentCountries,
      }}>
      {children}
    </CountriesContext.Provider>
  );
};

CountriesState.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CountriesState;
