import {createStore,applyMiddleware} from "redux";
import rootReducer from '../reducers'
import {logger} from "redux-logger/src";

const store = createStore(
    rootReducer,
    undefined,
    applyMiddleware(logger)
);

export default store;