import {
  LOGIN_REQUESTED,
  GOOGLE_SUCCESS,
  GOOGLE_FAILURE,
  LOGOUT
} from "../actions/LoginActions";

const initialState = {
  accessToken: "",
  tokendId: "",
  googleId: "",
  profileObj: {
    email: "",
    familyName: "",
    givenName: "",
    googleId: "",
    imageUrl: "",
    name: ""
  },
  isFetching: false,
  error: {}
};

const googleLogin = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUESTED: {
      return {
        ...state,
        isFetching: true,
        error: {}
      };
    }
    case GOOGLE_SUCCESS: {
      return {
        ...state,
        accessToken: action.payload.accessToken,
        tokendId: action.payload.tokendId,
        googleId: action.payload.googleId,
        profileObj: action.payload.profileObj,
        isFetching: false
      };
    }
    case GOOGLE_FAILURE: {
      return {
        ...state,
        isFetching: false,
        error: action.payload.error
      };
    }
    case LOGOUT: {
      return {};
    }
    default: {
      return state;
    }
  }
};

export default googleLogin;
