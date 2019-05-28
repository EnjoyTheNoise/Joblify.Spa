import { call, put, takeEvery, all } from "redux-saga/effects";
import axios from "axios";
import { push } from "connected-react-router";
import { FACEBOOK_SUCCESS, GOOGLE_SUCCESS } from "../actions/LoginActions";
import { BASE_URL } from "../constants";
import { providers } from "../enums";

const checkEmail = email => {
  return axios.get(`${BASE_URL}/user/check/${email}`);
};

function* handleLogin(action) {
  let isFacebook = action.type === FACEBOOK_SUCCESS;

  let email = isFacebook
    ? action.payload.email
    : action.payload.profileObj.email;

  let response = yield call(checkEmail, email);
  let userExists = response.data;

  if (!userExists) {
    yield all([
      put({
        type: "FIRST_LOGIN",
        payload: isFacebook ? providers.FACEBOOK : providers.GOOGLE
      }),
      put(push("/edit-profile"))
    ]);
  } else {
    yield all([
      put(push("/")),
      put({
        type: "LOGIN_COMPLETED",
        payload: isFacebook ? providers.FACEBOOK : providers.GOOGLE
      })
    ]);
  }
}

export function* facebookSaga() {
  yield takeEvery(FACEBOOK_SUCCESS, handleLogin);
}

export function* googleSaga() {
  yield takeEvery(GOOGLE_SUCCESS, handleLogin);
}
