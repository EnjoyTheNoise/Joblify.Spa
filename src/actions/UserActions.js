import axios from "axios";
import { BASE_URL } from "../constants";

export const GET_USER_REQUESTED = "GET_USER_REQUESTED";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILURE = "GET_USER_FAILURE";

export const ADD_USER_REQUESTED = "ADD_USER_REQUESTED";
export const ADD_USER_SUCCESS = "ADD_USER_SUCCESS";
export const ADD_USER_FAILURE = "ADD_USER_FAILURE";

export const REGISTER_COMPLETED = "REGISTER_COMPLETED";

const getUserSuccess = response => ({
  type: GET_USER_SUCCESS,
  payload: response.data
});

const getUserFailure = error => ({
  type: GET_USER_FAILURE,
  error
});

export const getUser = email => dispatch => {
  dispatch({ type: GET_USER_REQUESTED });

  return axios.get(BASE_URL + `/user/${email}`).then(
    response => {
      dispatch(getUserSuccess(response));
    },
    error => {
      dispatch(getUserFailure(error));
    }
  );
};

const addUserSuccess = response => ({
  type: ADD_USER_SUCCESS,
  payload: response.data
});

const addUserFailure = error => ({
  type: ADD_USER_FAILURE,
  error
});

const registerCompleted = data => ({
  type: REGISTER_COMPLETED,
  payload: data
});

export const addUser = data => dispatch => {
  dispatch({ type: ADD_USER_REQUESTED });

  return axios.post(BASE_URL + `/user/`, data).then(
    response => {
      dispatch(addUserSuccess(response));
      dispatch(registerCompleted(data));
    },
    error => {
      dispatch(addUserFailure(error));
    }
  );
};
