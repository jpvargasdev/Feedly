/**
 * Este reducer guarda el usuario en el state global de la app
 */

import { actions } from "../actions/actionsFilterFeed";

const initialState = {
  numberOfPosts: null,
  feedTheme: null,
  interval: null,
  topic: null
};

export default function dataFeed(state = initialState, action) {
  switch (action.type) {
  case actions.UPDATE_TOPIC: {
    const topic = action.payload.topic;
    return {
      ...state,
      topic
    };
  }

  case actions.UPDATE_FEED_THEME: {
    const feedTheme = action.payload.theme;
    return {
      ...state,
      feedTheme
    };
  }

  case actions.UPDATE_INTERVAL: {
    const interval = action.payload.minutes;
    return {
      ...state,
      interval
    };
  }

  case actions.UPDATE_NUMBER_POSTS: {
    const numberOfPosts = action.payload.number;
    return {
      ...state,
      numberOfPosts
    };
  }

  default: {
    return state;
  }
  }
}
