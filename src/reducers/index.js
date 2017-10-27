import { combineReducers } from 'redux';
import { appReducer } from './appReducer';

export const combinedReducers = combineReducers({
    tasks: appReducer
});