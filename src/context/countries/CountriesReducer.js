import {
  FETCH_COUNTRIES,
  SET_CURRENT_COUNTRIES,
  SET_CURRENT_PAGE,
  NEXT_PAGE,
  PREV_PAGE,
  SET_LOADING,
  SET_COUNTRY_DETAILS,
  SET_REGION_COUNTRIES,
} from "../actions.js";

export default (state, action) => {
  switch (action.type) {
    case FETCH_COUNTRIES:
      return { ...state, countries: action.payload, isLoading: false };
    case SET_LOADING:
      return { ...state, isLoading: true };
    case SET_CURRENT_COUNTRIES:
      return {
        ...state,
        currentCountries: state.countries.slice(
          state.currentPage,
          state.currentPage + state.countriesPerPage,
        ),
        isLoading: false,
      };
    case SET_CURRENT_PAGE:
      if (action.payload === NEXT_PAGE) {
        return {
          ...state,
          currentPage: state.currentPage + state.countriesPerPage,
        };
      } else if (action.payload === PREV_PAGE) {
        return {
          ...state,
          currentPage: state.currentPage - state.countriesPerPage,
        };
      }
      break;
    case SET_REGION_COUNTRIES:
      return { ...state, isLoading: false, countriesByRegion: action.payload };
    case SET_COUNTRY_DETAILS:
      return { ...state, details: action.payload, isLoading: false };
    default:
      return state;
  }
};
