import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import facebookLogin from "./reducers/FacebookLoginReducer";
import googleLogin from "./reducers/GoogleLoginReducer";
import user from "./reducers/UserReducer";
import edit from "./reducers/EditProfileReducer";
import login from "./reducers/LoginReducer";
import searchPage from "./reducers/SearchPageReducer";

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    user,
    login,
    edit,
    facebookLogin,
    googleLogin,
    searchPage
  });

export default createRootReducer;
