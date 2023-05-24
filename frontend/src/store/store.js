import { createStore, combineReducers } from "redux";
import { galleyReducer } from "./gallery.reducer";

const rootReducer = combineReducers({
  gallery: galleyReducer,
});

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
  : undefined;

export const store = createStore(rootReducer, reduxDevtools);
