import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import facebookLogin from "./reducers/FacebookLoginReducer";
import googleLogin from "./reducers/GoogleLoginReducer";

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    facebookLogin,
    googleLogin
  });

export default createRootReducer;
