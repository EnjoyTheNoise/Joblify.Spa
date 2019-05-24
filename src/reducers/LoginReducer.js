import { FIRST_LOGIN, LOGIN_COMPLETED } from "../actions/LoginActions";

const initialState = {
  provider: null,
  isFirstLogin: false
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case FIRST_LOGIN: {
      return {
        ...state,
        isFirstLogin: true,
        provider: action.payload
      };
    }
    case LOGIN_COMPLETED: {
      return {
        ...state,
        isFirstLogin: false,
        provider: action.payload
      };
    }
    default: {
      return state;
    }
  }
};

export default login;