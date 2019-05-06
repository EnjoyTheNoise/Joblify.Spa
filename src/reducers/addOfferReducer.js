import {
    GET_ALL_CATEGORIES,
GET_ALL_CATEGORIES_SUCCESS,
GET_ALL_CATEGORIES_FAILURE,
GET_ALL_TRADES,
GET_ALL_TRADES_SUCCESS,
GET_ALL_TRADES_FAILURE,
POST_NEW_OFFER,
POST_NEW_OFFER_SUCCESS,
POST_NEW_OFFER_FAILURE
} from "../actions/addOfferAction";

const initialState = {
    isFetching: false,
    categories: [],
    trades: [],
    error: null,
    title: '',
    description: '',
    price: '',
    categoryId: '',
    tradeId: '',
    availableTime: ''
}

export default function categories(state = initialState, action) {
    switch(action.type) {
        case GET_ALL_CATEGORIES:
        return {
            ...state,
            isFetching: true,
            categories: []
        };
        case GET_ALL_CATEGORIES_SUCCESS:
        return {
            ...state,
            isFetching: false,
            categories: action.payload
        };
        case GET_ALL_CATEGORIES_FAILURE:
        return {
            ...state,
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
        case POST_NEW_OFFER:
        return {
            ...state,
            isFetching: true,
            categories: action.payload.categories,
            trades: action.payload.trades,
            title: action.payload.title,
            description: action.payload.description,
            price: action.payload.price,
            categoryId: action.payload.categoryId,
            tradeId: action.payload.tradeId,
            availableTime: action.payload.availableTime
        };
        case POST_NEW_OFFER_SUCCESS:
        return {
            ...state,
            isFetching: false,
            categories: action.payload.categories,
            trades: action.payload.trades,
            title: action.payload.title,
            description: action.payload.description,
            price: action.payload.price,
            categoryId: action.payload.categoryId,
            tradeId: action.payload.tradeId,
            availableTime: action.payload.availableTime
        };
        case POST_NEW_OFFER_FAILURE:
        return {
            ...state,
            isFetching: false,
            error: action.error.response.data
        };
        default:
        return state;
    }
}