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
  orderBy: "price asc",
  trade: "all",
  offersCount: 0,
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
        orderBy: action.params.orderBy,
        category: action.params.category,
        phrase: action.params.phrase,
        trade: action.params.trade,
        offersCount: 0,
        offers: []
      };
    case GET_OFFERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        page: action.params.page,
        category: action.params.category,
        orderBy: action.params.orderBy,
        offers: action.payload.foundOffers,
        phrase: action.params.phrase,
        trade: action.params.trade,
        offersCount: action.payload.offersCount
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
