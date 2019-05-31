import {
  GET_USER_REQUESTED,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  ADD_USER_REQUESTED,
  ADD_USER_SUCCESS,
  ADD_USER_FAILURE,
  GET_USER_OFFERS_REQUESTED,
  GET_USER_OFFERS_FAILURE,
  GET_USER_OFFERS_SUCCESS
} from "../actions/UserActions";

const initialState = {
  id: 0,
  externalProvider: "",
  roleName: "",
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  birthdate: "",
  description: "",
  experience: "",
  fieldOfInterest: "",
  photoUrl: "",
  isFetching: false,
  offers: [],
  error: {}
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER_REQUESTED:    
    case GET_USER_REQUESTED:
    case GET_USER_OFFERS_REQUESTED: {
      return {
        ...state,
        isFetching: true
      };
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        id: action.payload.id,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        phoneNumber: action.payload.phoneNumber,
        birthdate: action.payload.birthdate,
        description: action.payload.description,
        experience: action.payload.experience,
        fieldOfInterest: action.payload.fieldOfInterest,
        photoUrl: action.payload.photoUrl
      };
    }
    case ADD_USER_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        externalProvider: action.payload.externalProvider,
        roleName: action.payload.roleName,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        phoneNumber: action.payload.phoneNumber,
        birthdate: action.payload.birthdate,
        description: action.payload.description,
        experience: action.payload.experience,
        fieldOfInterest: action.payload.fieldOfInterest,
        photoUrl: action.payload.photoUrl
      };
    }
    case GET_USER_OFFERS_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        offers: action.payload,
      };
    }

    case ADD_USER_FAILURE:
    case GET_USER_FAILURE:
    case GET_USER_OFFERS_FAILURE: {
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

export default user;
