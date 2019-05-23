import axios from "axios";
import { BASE_URL } from "../constants";

export const GET_OFFERS = "GET_OFFERS";
export const GET_OFFERS_SUCCESS = "GET_OFFERS_SUCCESS";
export const GET_OFFERS_FAILURE = "GET_OFFERS_FAILURE";

export const SEARCH_OFFERS = "SEARCH_OFFERS";
export const HANDLE_FILTER_SELECT = "HANDLE_FILTER_SELECT";
export const HANDLE_PAGE_CHANGE = "HANDLE_PAGE_CHANGE";

const getOffersSuccess = (response, params) => ({
  type: GET_OFFERS_SUCCESS,
  payload: response.data,
  params: params
});

const getOffersFailure = error => ({
  type: GET_OFFERS_FAILURE,
  error
});

// TODO: Jaki url?
export const getOffers = params => dispatch => {
  dispatch({ type: GET_OFFERS, params: params });
  console.log(params);
  return axios
    .get("https://jsonplaceholder.typicode.com/posts/" + params.page)
    .then(
      // return axios.get(BASE_URL + "/abc").then(
      response => {
        dispatch(getOffersSuccess(response, params));
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

// export const handlePageChange = pageIndex => dispatch => {
//   dispatch({ type: HANDLE_PAGE_CHANGE, pageIndex: pageIndex });
// };
