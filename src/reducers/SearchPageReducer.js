import {
  GET_OFFERS,
  GET_OFFERS_SUCCESS,
  GET_OFFERS_FAILURE,
  SEARCH_OFFERS,
  HANDLE_FILTER_SELECT,
  HANDLE_PAGE_CHANGE
} from "../actions/SearchPageActions";

const initialState = {
  isFetching: false,
  error: null,
  offers: [],
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
        offers: []
      };
    case GET_OFFERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        offers: action.payload
      };
    case GET_OFFERS_FAILURE:
      return {
        ...state,
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
    case HANDLE_FILTER_SELECT:
      return {
        ...state,
        filter: action.event.target.value
      };
    case HANDLE_PAGE_CHANGE:
      return {
        ...state,
        page: action.pageIndex
      };

    default:
      return state;
  }
}
