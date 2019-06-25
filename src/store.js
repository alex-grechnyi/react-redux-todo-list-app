import {applyMiddleware, combineReducers, createStore, compose} from "redux";
import thunkMiddleware from "redux-thunk";
import tasksReducer from "./store/reducers/tasksReducer";
import filterReducer from "./store/reducers/filterReducer";

let reducers = combineReducers(
    {
        tasksReducer: tasksReducer,
        filterReducer: filterReducer
    }
);

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;