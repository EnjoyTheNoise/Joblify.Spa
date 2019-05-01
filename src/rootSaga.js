import { facebookSaga, googleSaga } from "./sagas/LoginSagas";
import { spawn } from "redux-saga/effects";

export default function* rootSaga() {
  yield spawn(facebookSaga);
  yield spawn(googleSaga);
}
