import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import facebookLogin from "./reducers/FacebookLoginReducer";
import googleLogin from "./reducers/GoogleLoginReducer";
import searchPage from "./reducers/SearchPageReducer";

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    facebookLogin,
    googleLogin,
    searchPage
  });

export default createRootReducer;
