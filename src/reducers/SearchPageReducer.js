import {
  GET_OFFERS,
  GET_OFFERS_SUCCESS,
  GET_OFFERS_FAILURE
} from "../actions/SearchPageActions";

const initialState = {
  isFetching: false,
  error: {},
  phrase: "",
  option: "",
  page: "",
  filter: "stars",
  offers: []
};

export default function searchPage(state = initialState, action) {
  switch (action.type) {
    case GET_OFFERS:
      return {
        ...state,
        isFetching: true,
        page: action.params.page,
        filter: action.params.filter,
        option: action.params.option,
        phrase: action.params.phrase,
        offers: []
      };
    case GET_OFFERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        page: action.params.page,
        option: action.params.option,
        filter: action.params.filter,
        offers: action.payload,
        phrase: action.params.phrase
      };
    case GET_OFFERS_FAILURE:
      return {
        ...state,
        page: action.page,
        isFetching: false,
        error: action.error.response.data
      };
    default:
      return state;
  }
}
