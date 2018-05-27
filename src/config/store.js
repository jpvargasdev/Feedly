/**
 * Store configuration
 */

import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk'

import rootReducer from '../reducers';

const args = (global.__DEV__) ? [thunk, logger] : [thunk];

export default configureStore = () => {
    let store = createStore(    rootReducer ,
                                undefined, 
                                applyMiddleware(...args)
                            );
    return store;
}