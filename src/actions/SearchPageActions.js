import axios from "axios";
import { BASE_URL } from "../constants";

export const GET_OFFERS = "GET_OFFERS";
export const GET_OFFERS_SUCCESS = "GET_OFFERS_SUCCESS";
export const GET_OFFERS_FAILURE = "GET_OFFERS_FAILURE";

const getOffersSuccess = response => ({
  type: GET_OFFERS_SUCCESS,
  payload: response.data
});

const getOffersFailure = error => ({
  type: GET_OFFERS_FAILURE,
  error
});

//todo
export const getOffers = props => dispatch => {
  dispatch({ type: GET_OFFERS });

  return axios.get(BASE_URL + "/abc").then(
    response => {
      console.log(response);
      dispatch(getOffersSuccess(response));
    },
    error => {
      if (error.response.status === 400) {
        dispatch(getOffersFailure(error));
      } else {
      }
    }
  );
};
