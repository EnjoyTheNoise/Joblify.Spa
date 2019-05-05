import axios from "axios";
import { BASE_URL } from "../constants";

export const GET_ALL_CATEGORIES = "GET_ALL_CATEGORIES";
export const GET_ALL_CATEGORIES_SUCCESS = "GET_ALL_CATEGORIES_SUCCESS";
export const GET_ALL_CATEGORIES_FAILURE = "GET_ALL_CATEGORIES_FAILURE";

const getAllCategoriesSuccess = response => ({
    type: GET_ALL_CATEGORIES_SUCCESS,
    payload: response.data.result
  });
  
  const getAllCategoriesFailure = error => ({
    type: GET_ALL_CATEGORIES_FAILURE,
    error
  });


export const getAllCategories = props => dispatch => {
    dispatch({type: GET_ALL_CATEGORIES});

    return axios.get(BASE_URL+"/offer/getallcategories")
      .then(response => 
        dispatch(getAllCategoriesSuccess(response)),
        error => {
            if (error.response.status === 400) {
                dispatch(getAllCategoriesFailure(error));
            } else {
                //dispatch(handleHttpError(error, props));
            }
        }
      );
}