import axios from "axios";
import { BASE_URL } from "../constants";

export const GET_OFFERS = "GET_OFFERS";
export const GET_OFFERS_SUCCESS = "GET_OFFERS_SUCCESS";
export const GET_OFFERS_FAILURE = "GET_OFFERS_FAILURE";

const getOffersSuccess = (response, params) => ({
  type: GET_OFFERS_SUCCESS,
  payload: response.data,
  params: params
});

const getOffersFailure = error => ({
  type: GET_OFFERS_FAILURE,
  error
});

export const getOffers = params => dispatch => {
  dispatch({ type: GET_OFFERS, params: params });
  console.log(params);
  return (
    axios
    //.get(BASE_URL + "/offer/search/employee/" + params.phrase)
       .get(BASE_URL + "/offer/search/page/"+ params.page +"/?phrase="+params.phrase+"&category="+params.category+"&trade="+params.trade+"&orderBy="+params.orderBy)
      .then(
        response => {
          console.log(response);
          dispatch(getOffersSuccess(response, params));
        },
        error => {
          dispatch(getOffersFailure(error));
        }
      )
  );
};