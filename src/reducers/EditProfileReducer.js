import {
  EDIT_PROFILE_REQUESTED,
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_FAILURE
} from "../actions/EditProfileActions";

const initialState = {
  isFetching: false,
  error: null
};

const edit = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_PROFILE_REQUESTED: {
      return {
        ...state,
        isFetching: true
      };
    }
    case EDIT_PROFILE_SUCCESS: {
      return {
        ...state,
        isFetching: false
      };
    }
    case EDIT_PROFILE_FAILURE: {
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    }
    default: {
      return state;
    }
  }
};

export default edit;
