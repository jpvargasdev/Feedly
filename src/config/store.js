/**
 * Store configuration
 */

import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import rootReducer from "../reducers";

const args = (global.__DEV__) ? [thunk, logger] : [thunk];

const configureStore = () => {
  const store = createStore(rootReducer,
    undefined,
    applyMiddleware(...args));
  return store;
};

export default configureStore;
