import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import facebookLogin from "./reducers/FacebookLoginReducer";
import googleLogin from "./reducers/GoogleLoginReducer";
import addOffer from "./reducers/AddOfferReducer";
import httpError from "./reducers/HttpErrorReducer";

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    facebookLogin,
    googleLogin,
    addOffer,
    httpError
  });

export default createRootReducer;
