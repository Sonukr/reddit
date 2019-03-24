import { combineReducers } from 'redux';

import { initialData } from './data'


export const Reducer = combineReducers({
    data: initialData
});