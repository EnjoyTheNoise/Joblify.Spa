import {
  LOGIN_REQUESTED,
  GOOGLE_SUCCESS,
  GOOGLE_FAILURE
} from "../actions/LoginActions";

const initialState = {
  accessToken: null,
  tokendId: null,
  googleId: null,
  profileObj: {
    email: null,
    familyName: null,
    givenName: null,
    googleId: null,
    imageUrl: null,
    name: null
  },
  isFetching: false,
  isLegit: false,
  error: null
};

const googleLogin = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUESTED: {
      return {
        ...state,
        isFetching: true,
        error: null
      };
    }
    case GOOGLE_SUCCESS: {
      return {
        ...state,
        accessToken: action.payload.accessToken,
        tokendId: action.payload.tokendId,
        googleId: action.payload.googleId,
        profileObj: action.payload.profileObj,
        isFetching: false,
        isLegit: true
      };
    }
    case GOOGLE_FAILURE: {
      return {
        ...state,
        isFetching: false,
        isLegit: false,
        error: action.payload.error
      };
    }
    default: {
      return state;
    }
  }
};

export default googleLogin;
