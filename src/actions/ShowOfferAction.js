import axios from "axios";
import { BASE_URL } from "../constants";
import { handleHttpError } from "./HttpErrorAction";

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
  console.log("-------------------------------------");
  console.log(BASE_URL + "/offer/getById/?id=" + offerId);

  return axios.get(BASE_URL + "/offer/getById?id=" + offerId).then(
    response => {
      console.log(response);
      dispatch(getOfferByIdSuccess(response));
    },
    error => {
      if (error.response.status === 400) {
        dispatch(getOfferByIdFailure(error));
      } else {
        dispatch(handleHttpError(error, props));
      }
    }
  );
};
