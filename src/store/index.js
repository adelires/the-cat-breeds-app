import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import breedsReducer from "./reducers/breedsReducer";

const middleware = applyMiddleware(thunk);
const reducers = combineReducers({
    breedsState: breedsReducer
});

export const Store = createStore(reducers, {}, middleware);
