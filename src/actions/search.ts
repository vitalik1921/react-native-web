import {
    GITHUB_SEARCH_REQUEST,
    GITHUB_SEARCH_RESPONSE,
    GITHUB_SEARCH_FAILURE,
    GITHUB_SET_PAGE,
    GITHUB_SET_ROWS_NUMBER,
    SearchResponse,
} from '../types/actions/search';

export function searchRequest(text: string) {
    return {
        type: GITHUB_SEARCH_REQUEST,
        payload: text
    }
}

export function searchResponse(payload: SearchResponse) {
    return {
        type: GITHUB_SEARCH_RESPONSE,
        payload: payload
    }
}

export function searchFailure(error: any) {
    return {
        type: GITHUB_SEARCH_FAILURE,
        payload: { error: error, message: error.message }
    }
}

export function setPage(pageNumber: number) {
    return {
        type: GITHUB_SET_PAGE,
        payload: pageNumber
    }
}

export function setRowsNumber(pageNumber: number) {
    return {
        type: GITHUB_SET_ROWS_NUMBER,
        payload: pageNumber
    }
}