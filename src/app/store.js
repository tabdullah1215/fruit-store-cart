import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";
import items from "./reducers/itemReducer";

export default createStore(
    combineReducers({
        items
    }),
    {},
    applyMiddleware(logger())
);