import { notifyError } from "../common/Notify";
import { push } from "connected-react-router";

export const handleError = (dispatch, error, action, message = null) => {
  if (error.hasOwnProperty("response")) {
    if (error.response.status === 401) {
      dispatch(push("/401"));
    } else {
      dispatch(action(error));
      notifyError(message);
    }
  } else {
    dispatch(action(error));
    notifyError(message);
  }
};
