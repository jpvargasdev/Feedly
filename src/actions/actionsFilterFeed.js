/**
 * Feed filter actions
 */

export const actions = {
  UPDATE_NUMBER_POSTS: "UPDATE_NUMBER_POSTS",
  UPDATE_INTERVAL: "UPDATE_INTERVAL",
  UPDATE_FEED_THEME: "UPDATE_FEED_THEME",
  UPDATE_TOPIC: "UPDATE_TOPIC"
};

/* ============================================== */

export const updateNumberPosts = number => ({
  type: actions.UPDATE_NUMBER_POSTS,
  payload: {
    number
  }
});
export const updateMinutesInterval = minutes => ({
  type: actions.UPDATE_INTERVAL,
  payload: {
    minutes
  }
});
export const updateFeedTheme = theme => ({
  type: actions.UPDATE_FEED_THEME,
  payload: {
    theme
  }
});
export const updateTopic = topic => ({
  type: actions.UPDATE_TOPIC,
  payload: {
    topic
  }
});
