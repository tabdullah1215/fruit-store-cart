import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";
import itemReducer from "./reducers/itemReducer";

export default createStore(
    combineReducers({
        itemReducer
    }),
    {},
    applyMiddleware(logger())
);