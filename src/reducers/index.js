/**
 * Reducer
 */

import { combineReducers } from "redux";
import dataFeed from "./dataFeedReducer";
import dataFeedFilter from "./filterFeedReducer";

export default combineReducers({ 
    dataFeed,
    dataFeedFilter,
});