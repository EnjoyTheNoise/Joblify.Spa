export const LOGIN_REQUESTED = "LOGIN_REQUESTED";

export const FACEBOOK_SUCCESS = "FACEBOOK_SUCCESS";
export const FACEBOOK_FAILURE = "FACEBOOK_FAILURE";

export const GOOGLE_SUCCESS = "GOOGLE_SUCCESS";
export const GOOGLE_FAILURE = "GOOGLE_FAILURE";

export const FIRST_LOGIN = "FIRST_LOGIN";
export const LOGIN_COMPLETED = "LOGIN_COMPLETED";

export const loginRequest = () => dispatch => {
  dispatch({ type: LOGIN_REQUESTED });
};

export const handleGoogleSuccess = response => dispatch => {
  dispatch(googleSuccess(response));
};

export const handleGoogleFailure = response => dispatch => {
  dispatch(googleFailure(response));
};

const googleFailure = response => ({
  type: GOOGLE_FAILURE,
  payload: response
});

const googleSuccess = response => ({
  type: GOOGLE_SUCCESS,
  payload: response
});

export const handleFacebookResponse = response => dispatch => {
  if (response.hasOwnProperty("status")) {
    dispatch({ type: FACEBOOK_FAILURE });
  } else {
    dispatch(facebookSuccess(response));
  }
};

const facebookSuccess = response => ({
  type: FACEBOOK_SUCCESS,
  payload: response
});
