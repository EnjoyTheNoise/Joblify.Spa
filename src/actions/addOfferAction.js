import axios from "axios";
import { BASE_URL } from "../constants";
import { handleHttpError } from "./HttpErrorAction";

export const GET_ALL_CATEGORIES = "GET_ALL_CATEGORIES";
export const GET_ALL_CATEGORIES_SUCCESS = "GET_ALL_CATEGORIES_SUCCESS";
export const GET_ALL_CATEGORIES_FAILURE = "GET_ALL_CATEGORIES_FAILURE";

export const GET_ALL_TRADES = "GET_ALL_TRADES";
export const GET_ALL_TRADES_SUCCESS = "GET_ALL_TRADES_SUCCESS";
export const GET_ALL_TRADES_FAILURE = "GET_ALL_TRADES_FAILURE";

export const POST_NEW_OFFER = "POST_NEW_OFFER";
export const POST_NEW_OFFER_SUCCESS = "POST_NEW_OFFER_SUCCESS";
export const POST_NEW_OFFER_FAILURE = "POST_NEW_OFFER_FAILURE";

const getAllCategoriesSuccess = response => ({
  type: GET_ALL_CATEGORIES_SUCCESS,
  payload: response.data
});

const getAllCategoriesFailure = error => ({
  type: GET_ALL_CATEGORIES_FAILURE,
  error
});

const getAllTradesSuccess = response => ({
  type: GET_ALL_TRADES_SUCCESS,
  payload: response.data
});

const getAllTradesFailure = error => ({
  type: GET_ALL_TRADES_FAILURE,
  error
});

const postNewOfferSuccess = response => ({
  type: POST_NEW_OFFER_SUCCESS,
  payload: response.data
});

const postNewOfferFailure = error => ({
  type: POST_NEW_OFFER_FAILURE,
  error
});
export const getAllCategories = props => dispatch => {
  dispatch({ type: GET_ALL_CATEGORIES });

  return axios.get(BASE_URL + "/offer/getallcategories").then(
    response => {
      console.log(response);
      dispatch(getAllCategoriesSuccess(response));
    },
    error => {
      if (error.response.status === 400) {
        dispatch(getAllCategoriesFailure(error));
      } else {
        dispatch(handleHttpError(error, props));
      }
    }
  );
};

export const getAllTrades = props => dispatch => {
  dispatch({ type: GET_ALL_TRADES });

  return axios.get(BASE_URL + "/offer/getalltrades").then(
    response => {
      console.log(response);
      dispatch(getAllTradesSuccess(response));
    },
    error => {
      if (error.response.status === 400) {
        dispatch(getAllTradesFailure(error));
      } else {
        dispatch(handleHttpError(error, props));
      }
    }
  );
};

export const postNewOffer = (offer, props) => dispatch => {
  dispatch({ type: POST_NEW_OFFER });
  console.log(offer);
  return axios.post(BASE_URL + "/offer/", offer).then(
    response => {
      console.log(response);
      dispatch(postNewOfferSuccess(response));
    },
    error => {
      if (error.response.status === 400) {
        dispatch(postNewOfferFailure(error));
      } else {
        dispatch(handleHttpError(error, props));
      }
    }
  );
};
