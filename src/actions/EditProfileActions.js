import axios from "axios";
import { BASE_URL } from "../constants";
import { notifySuccess } from "../common/Notify";
import { handleError } from "./HandleError";

export const EDIT_PROFILE_REQUESTED = "EDIT_PROFILE_REQUESTED";

export const EDIT_PROFILE_SUCCESS = "EDIT_PROFILE_SUCCESS";
export const EDIT_PROFILE_FAILURE = "EDIT_PROFILE_FAILURE";

const editSuccess = response => ({
  type: EDIT_PROFILE_SUCCESS,
  payload: response.data
});

const editFailure = error => ({
  type: EDIT_PROFILE_FAILURE,
  error
});

export const editProfile = data => dispatch => {
  dispatch({ type: EDIT_PROFILE_REQUESTED });

  return axios.put(BASE_URL + "/user", data).then(
    response => {
      notifySuccess("Profile saved!");
      dispatch(editSuccess(response));
    },
    error => {
      handleError(
        error,
        editFailure,
        "Failed to edit profile, try again later."
      );
      dispatch(editFailure(error));
    }
  );
};
