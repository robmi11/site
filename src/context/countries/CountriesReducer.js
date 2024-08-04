import { FETCH_COUNTRIES, SET_LOADING } from "../actions.js";

export default (state, action) => {
  switch (action.type) {
    case FETCH_COUNTRIES:
      return { ...state, countries: action.payload, isLoading: false };
    case SET_LOADING:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};
