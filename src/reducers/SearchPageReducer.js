import {
  GET_OFFERS,
  GET_OFFERS_SUCCESS,
  GET_OFFERS_FAILURE,
} from "../actions/SearchPageActions";

import {
  GET_ALL_TRADES,
  GET_ALL_TRADES_SUCCESS,
  GET_ALL_TRADES_FAILURE
} from "../actions/AddOfferAction";

const initialState = {
  isFetching: false,
  error: {},
  phrase: "",
  category: "",
  page: "",
  filter: "stars",
  trade: "all",
  offers: [],
  trades: []
};

export default function searchPage(state = initialState, action) {
  switch (action.type) {
    case GET_OFFERS:
      return {
        ...state,
        isFetching: true,
        page: action.params.page,
        filter: action.params.filter,
        category: action.params.category,
        phrase: action.params.phrase,
        trade: action.params.trade,
        offers: [],
      };
    case GET_OFFERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        page: action.params.page,
        category: action.params.category,
        filter: action.params.filter,
        offers: action.payload,
        phrase: action.params.phrase,
        trade: action.params.trade
      };
    case GET_OFFERS_FAILURE:
      return {
        ...state,
        page: action.page,
        isFetching: false,
        error: action.error.response.data
      };
      case GET_ALL_TRADES:
        return {
            ...state,
            isFetching: true,
            trades: []
        };
        case GET_ALL_TRADES_SUCCESS:
        return {
            ...state,
            isFetching: false,
            trades: action.payload
        };
        case GET_ALL_TRADES_FAILURE:
        return {
            ...state,
            isFetching: false,
            error: action.error.response.data
        };
    default:
      return state;
  }
}
