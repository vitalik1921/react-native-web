export const GITHUB_SEARCH_REQUEST = 'GITHUB_SEARCH_REQUEST';
export const GITHUB_SEARCH_RESPONSE = 'GITHUB_SEARCH_RESPONSE';
export const GITHUB_SEARCH_FAILURE = 'GITHUB_SEARCH_FAILURE';
export const GITHUB_SET_PAGE = 'GITHUB_SET_PAGE';
export const GITHUB_SET_ROWS_NUMBER = 'GITHUB_SET_ROWS_NUMBER';
    
export type SearchResponse = {
    totalCount: number
    incompleteResults: boolean
    items: any[]
}

export type SearchState = {
    searchQuery: string
    pageNumber: number
    rowsNumber: number
    items: any[]
}

export type SearchRequestAction = {
  type: typeof GITHUB_SEARCH_REQUEST
  payload: string
}

export type SearchResponseAction = {
  type: typeof GITHUB_SEARCH_RESPONSE
  payload: SearchResponse
}

export type SearchFailureAction = {
  type: typeof GITHUB_SEARCH_FAILURE
  payload: { error: any, message: string }
}

export type SearchSetPageAction = {
  type: typeof GITHUB_SET_PAGE
  payload: number
}

export type SearchSetRowsNumberAction = {
  type: typeof GITHUB_SET_ROWS_NUMBER
  payload: number
}

export type SearchActionTypes = SearchRequestAction
    | SearchResponseAction
    | SearchFailureAction
    | SearchSetPageAction
    | SearchSetRowsNumberAction;