import axios from "axios";
import { BASE_URL } from "../constants";
import { handleError } from "./HandleError";

export const GET_OFFER_BY_ID = "GET_OFFER_BY_ID";
export const GET_OFFER_BY_ID_SUCCESS = "GET_OFFER_BY_ID_SUCCESS";
export const GET_OFFER_BY_ID_FAILURE = "GET_OFFER_BY_ID_FAILURE";

const getOfferByIdSuccess = response => ({
  type: GET_OFFER_BY_ID_SUCCESS,
  payload: response.data
});

const getOfferByIdFailure = error => ({
  type: GET_OFFER_BY_ID_FAILURE,
  error
});

export const getOfferById = (props, offerId) => dispatch => {
  dispatch({ type: GET_OFFER_BY_ID });

  return axios.get(BASE_URL + "/offer/getById?id=" + offerId).then(
    response => {
      dispatch(getOfferByIdSuccess(response));
    },
    error => {
      handleError(
        error,
        getOfferByIdFailure,
        `Failed to get offer with id ${offerId}, try again later.`
      );
    }
  );
};
