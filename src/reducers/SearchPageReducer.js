import {
    GET_OFFERS,
    GET_OFFERS_SUCCESS,
    GET_OFFERS_FAILURE
} from "../actions/SearchPageActions";

const initialState = {
    isFetching: false,
    error: null,
    offers: [],
    phrase: '',
    option: '',
    page: 0
}

export default function searchPage(state = initialState, action) {
    switch(action.type){
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
        default:
        return state;
    }
}