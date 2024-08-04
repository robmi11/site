import { useReducer } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import CountriesReducer from "./CountriesReducer";
import CountriesContext from "./CountriesContext";
import { FETCH_COUNTRIES, SET_LOADING } from "../actions";

const CountriesState = ({ children }) => {
  const initialState = {
    countries: [],
    country: {},
    isError: false,
    isLoading: true,
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
      }
    } catch (error) {
      console.log(error);
    }
  };

  //Set Loading State => TRUE
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <CountriesContext.Provider
      value={{
        countries: state.countries,
        country: state.country,
        isError: state.isError,
        isLoading: state.isLoding,
        message: state.message,
        fetchAllUsers,
      }}>
      {children}
    </CountriesContext.Provider>
  );
};

CountriesState.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CountriesState;
