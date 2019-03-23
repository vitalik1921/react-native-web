import { throttle, call, all, put } from 'redux-saga/effects';

  import GitHub from "../services/github";
  import { GITHUB_SEARCH_REQUEST, SearchRequestAction } from "../types/actions/search";
  import { searchResponse, searchFailure } from "../actions/search";


  function* getSearchResults(action: SearchRequestAction) {
    try {
      const res: any = yield call(() => GitHub.search(action.payload));
      yield put(searchResponse(res));
    } catch (error) {
      yield put(searchFailure(error));
    }
  }

function* watchSearch() {
    yield throttle(1200, GITHUB_SEARCH_REQUEST, getSearchResults);
}

export default function* rootSaga() {
    yield all([
        watchSearch(),
    ]);
}
