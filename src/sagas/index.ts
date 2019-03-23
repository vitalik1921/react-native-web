import { all } from 'redux-saga/effects';

import usersSaga from './search';

export default function* rootSaga() {
  yield all([
    usersSaga(),
  ]);
}
