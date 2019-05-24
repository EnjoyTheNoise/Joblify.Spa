import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import facebookLogin from "./reducers/FacebookLoginReducer";
import googleLogin from "./reducers/GoogleLoginReducer";
import login from "./reducers/LoginReducer";
import edit from "./reducers/EditProfileReducer";
import user from "./reducers/UserReducer";

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    user,
    login,
    edit,
    facebookLogin,
    googleLogin
  });

export default createRootReducer;
