import {
  LOGIN_REQUESTED,
  FACEBOOK_SUCCESS,
  FACEBOOK_FAILURE
} from "../actions/LoginActions";

const initialState = {
  accessToken: null,
  data_access_expiration_time: 0,
  email: null,
  expiresIn: 0,
  first_name: null,
  id: null,
  last_name: null,
  picture: {
    data: {
      height: 0,
      width: 0,
      is_silhouette: false,
      url: null
    }
  },
  reauthorize_required_in: 0,
  signedRequest: null,
  userID: null,
  isFetching: false,
  isLegit: false,
  error: null
};

const facebookLogin = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUESTED: {
      return {
        ...state,
        isFetching: true,
        error: null
      };
    }
    case FACEBOOK_SUCCESS: {
      return {
        ...state,
        accessToken: action.payload.accessToken,
        data_access_expiration_time: action.payload.data_access_expiration_time,
        email: action.payload.email,
        expiresIn: action.payload.expiresIn,
        first_name: action.payload.first_name,
        id: action.payload.id,
        last_name: action.payload.last_name,
        picture: action.payload.picture,
        reauthorize_required_in: action.payload.reauthorize_required_in,
        signedRequest: action.payload.signedRequest,
        userID: action.payload.userID,
        isFetching: false,
        isLegit: true
      };
    }
    case FACEBOOK_FAILURE: {
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

export default facebookLogin;