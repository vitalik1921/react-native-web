import { combineReducers } from 'redux';
import search from './search';

const reducers = { search };

export default combineReducers({ ...reducers })
