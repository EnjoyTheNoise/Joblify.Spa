import axios from "axios";
import { BASE_URL } from "../constants";
import { notifySuccess } from "../common/Notify";
import { handleError } from "./HandleError";

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

export const getAllCategories = () => dispatch => {
  dispatch({ type: GET_ALL_CATEGORIES });

  return axios.get(BASE_URL + "/offer/getallcategories").then(
    response => {
      dispatch(getAllCategoriesSuccess(response));
    },
    error => {
      handleError(
        dispatch,
        error,
        getAllCategoriesFailure,
        "Failed to fetch categories, try again later."
      );
    }
  );
};

export const getAllTrades = () => dispatch => {
  dispatch({ type: GET_ALL_TRADES });

  return axios.get(BASE_URL + "/offer/getalltrades").then(
    response => {
      dispatch(getAllTradesSuccess(response));
    },
    error => {
      handleError(
        dispatch,
        error,
        getAllTradesFailure,
        "Failed to fetch trades, try again later."
      );
    }
  );
};

export const postNewOffer = offer => dispatch => {
  dispatch({ type: POST_NEW_OFFER });
  return axios.post(BASE_URL + "/offer/", offer).then(
    response => {
      notifySuccess("Successfully added new offer!");
      dispatch(postNewOfferSuccess(response));
    },
    error => {
      handleError(
        dispatch,
        error,
        postNewOfferFailure,
        "Failed to add new offer, try again later."
      );
    }
  );
};
