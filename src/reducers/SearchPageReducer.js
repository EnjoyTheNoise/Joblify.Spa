import {
  GET_OFFERS,
  GET_OFFERS_SUCCESS,
  GET_OFFERS_FAILURE,
  SEARCH_OFFERS
} from "../actions/SearchPageActions";

const initialState = {
  isFetching: false,
  error: null,
  phrase: "",
  option: "",
  page: "",
  filter: "stars"
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
        offers: []
      };
    case GET_OFFERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        page: action.params.page,
        option: action.params.option,
        filter: action.params.filter,
        offers: action.payload
      };
    case GET_OFFERS_FAILURE:
      return {
        ...state,
        page: action.page,
        isFetching: false,
        error: action.error.response.data
      };
    case SEARCH_OFFERS:
      return {
        ...state,
        phrase: action.phrase,
        option: action.option,
        page: 1
      };
    default:
      return state;
  }
}
