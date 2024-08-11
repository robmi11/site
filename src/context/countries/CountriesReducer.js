import {
  FETCH_ALL_COUNTRIES,
  SET_ERROR,
  CLEAR_ERROR,
  SET_LOADING,
} from "./CountriesActions.js";

export default (state, action) => {
  switch (action.type) {
    case FETCH_ALL_COUNTRIES:
      return { ...state, allCountries: action.payload, isLoading: false };
    case SET_LOADING:
      return { ...state, isLoding: true };
    case SET_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: action.payload,
      };
    case CLEAR_ERROR:
      return { ...state, isError: false, message: null, isLoading: false };
    default:
      return state;
  }
};
