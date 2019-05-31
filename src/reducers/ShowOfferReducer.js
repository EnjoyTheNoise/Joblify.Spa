import {
  GET_OFFER_BY_ID,
  GET_OFFER_BY_ID_FAILURE,
  GET_OFFER_BY_ID_SUCCESS
} from "../actions/ShowOfferAction";

const initialState = {
  isFetching: false,
  error: {},
  title: "",
  description: "",
  price: "",
  availableTime: "",
  userId: "",
  firstName: "",
  lastName: "",
  offerId: 0
};

export default function getOffer(state = initialState, action) {
  switch (action.type) {
    case GET_OFFER_BY_ID:
      return {
        ...state,
        isFetching: true
      };
    case GET_OFFER_BY_ID_SUCCESS:
      return {
        ...state,
        isFetching: false,
        title: action.payload.title,
        description: action.payload.description,
        price: action.payload.price,
        availableTime: action.payload.availableTime,
        userId: action.payload.user.userId,
        firstName: action.payload.user.firstName,
        lastName: action.payload.user.lastName
      };
    case GET_OFFER_BY_ID_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error.response.data
      };
    default:
      return state;
  }
}
