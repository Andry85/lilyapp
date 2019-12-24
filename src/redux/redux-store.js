import { createStore, combineReducers } from "redux";

import addLetterReducer from "./add-letter";

let reducers = combineReducers({
    letter: addLetterReducer
});

let store = createStore(reducers);

export default store;