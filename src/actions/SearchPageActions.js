import axios from "axios";
import { BASE_URL } from "../constants";

export const GET_OFFERS = "GET_OFFERS";
export const GET_OFFERS_SUCCESS = "GET_OFFERS_SUCCESS";
export const GET_OFFERS_FAILURE = "GET_OFFERS_FAILURE";

export const SEARCH_OFFERS = "SEARCH_OFFERS";
export const HANDLE_FILTER_SELECT = "HANDLE_FILTER_SELECT";
export const HANDLE_PAGE_CHANGE = "HANDLE_PAGE_CHANGE";

const getOffersSuccess = (response, page) => ({
  type: GET_OFFERS_SUCCESS,
  payload: response.data,
  page: page
});

const getOffersFailure = error => ({
  type: GET_OFFERS_FAILURE,
  error
});

//todo
export const getOffers = page => dispatch => {
  dispatch({ type: GET_OFFERS, page: page });
  console.log(page);
  return axios.get("https://jsonplaceholder.typicode.com/posts/" + page).then(
  // return axios.get(BASE_URL + "/abc").then(
    response => {
      // console.log(response);
      dispatch(getOffersSuccess(response, page));
    },
    error => {
      if (error.response.status === 400) {
        dispatch(getOffersFailure(error));
      } else {
      }
    }
  );
};

export const searchOffers = (phrase, option) => dispatch => {
  dispatch({ type: SEARCH_OFFERS, phrase: phrase, option: option });
};

export const handleFilterSelect = event => dispatch => {
  dispatch({ type: HANDLE_FILTER_SELECT, event: event });
};

export const handlePageChange = pageIndex => dispatch => {
  dispatch({ type: HANDLE_PAGE_CHANGE, pageIndex: pageIndex });
};
