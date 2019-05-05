import {
    GET_ALL_CATEGORIES,
GET_ALL_CATEGORIES_SUCCESS,
GET_ALL_CATEGORIES_FAILURE
} from "../actions/addOfferActions";

const initialState = {
    isFetching: false,
    categories: [],
    error: null
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
        default:
        return state;
    }
}