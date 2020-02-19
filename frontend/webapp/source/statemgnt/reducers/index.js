import { entryReducer } from './entrymgnt.reducer';
import { userReducer } from './usermgnt.reducer';
import { getInitialState } from './initialstate';
import { combineReducers } from 'redux';

const masterReducer = combineReducers({ userReducer, entryReducer });

export { masterReducer, getInitialState };