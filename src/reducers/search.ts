import {
    SearchState,
    SearchActionTypes,
    GITHUB_SEARCH_RESPONSE,
    GITHUB_SET_PAGE,
    GITHUB_SET_ROWS_NUMBER,
    GITHUB_SEARCH_REQUEST,
} from '../types/actions/search';

const initialState: SearchState = {
    searchQuery: '',
    pageNumber: 1,
    rowsNumber: 10,
    items: [],
}

export default function searchReducer(
    state = initialState,
    action: SearchActionTypes): SearchState {
    switch (action.type) {
        case GITHUB_SEARCH_REQUEST:
        return { ...state, searchQuery: action.payload};
        case GITHUB_SEARCH_RESPONSE:
            return { ...state, items: action.payload.items};
        case GITHUB_SET_PAGE:
            return { ...state, pageNumber: action.payload};
        case GITHUB_SET_ROWS_NUMBER:
            return { ...state, rowsNumber: action.payload};
        default:
            return state
    }
}