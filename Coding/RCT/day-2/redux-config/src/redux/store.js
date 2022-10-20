import {combineReducers, compose, legacy_createStore} from 'redux';
import { counterReducer, reducer } from './counter/counter.reducer';
import { todoReducer } from './todo/todo.reducer';

const createComposer= window.__REDUX_DEVTOOLS_EXTENSION__||compose;

const rootReducer=combineReducers({
    counter:counterReducer,
    todos:todoReducer
})
export const store = legacy_createStore(rootReducer,createComposer());