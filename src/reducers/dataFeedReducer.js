/**
 * Este reducer guarda el usuario en el state global de la app
 */

import { actions } from "../actions/actionsFeed";

const initialState = {
  data: [],
  isFetching: false,
  error: false,
  errorText: ""
};

export default function dataFeed(state = initialState, action) {
  switch (action.type) {
  case actions.FETCHING_DATA: {
    return {
      ...state,
      isFetching: true
    };
  }

  case actions.FETCHING_DATA_ERROR: {
    return {
      ...state,
      isFetching: false,
      error: true
    };
  }

  case actions.FETCHING_DATA_SUCCESS: {
    const { data } = action.payload;
    return {
      ...state,
      isFetching: false,
      data
    };
  }

  default: {
    return state;
  }
  }
}
