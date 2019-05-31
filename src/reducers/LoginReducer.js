import { FIRST_LOGIN, LOGIN_COMPLETED, LOGOUT } from "../actions/LoginActions";
import { REGISTER_COMPLETED } from "../actions/UserActions";

const initialState = {
  provider: null,
  isFirstLogin: false,
  isLoggedIn: false
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case FIRST_LOGIN: {
      return {
        ...state,
        isFirstLogin: true,
        provider: action.payload,
        isLoggedIn: true
      };
    }
    case LOGIN_COMPLETED: {
      return {
        ...state,
        isFirstLogin: false,
        provider: action.payload,
        isLoggedIn: true
      };
    }
    case REGISTER_COMPLETED: {
      return {
        ...state,
        isFirstLogin: false
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

export default login;
