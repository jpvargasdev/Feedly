/**
 * Settings view
 */
import React, { Component } from "react";
import { connect } from "react-redux";

// components
import Container from "./container";
import SettingsForm from "./components/SettingsForm";
import { updateFeedTheme, updateNumberPosts, updateMinutesInterval } from "../../actions/actionsFilterFeed";
import ParamModel from "../../models/ParamModel";

// type
type PropsType = {
    numberOfPosts: Object,
    feedTheme: Object,
    interval: Object,
    updateFeedTheme: Function,
    updateNumberPosts: Function,
    updateMinutesInterval: Function
};

/* Component ===================================== */
class SettingsView extends Component<PropsType> {
    updateTheme = (theme) => {
      const category = new ParamModel("category", theme);
      this.props.updateFeedTheme(category);
    }

    updateNumberPosts = (number) => {
      const pageSize = new ParamModel("pageSize", number);
      this.props.updateNumberPosts(pageSize);
    }

    updateMinutesInterval = (minutes) => {
      this.props.updateMinutesInterval(minutes);
    }

    render() {
      const { numberOfPosts, feedTheme, interval } = this.props;
      return (
        <Container>
          <SettingsForm
            updateTheme = {this.updateTheme}
            updateNumberPosts = {this.updateNumberPosts}
            updateMinutesInterval = {this.updateMinutesInterval}
            numberOfPosts = { numberOfPosts.value }
            feedTheme = { feedTheme.value }
            interval = { interval }
          />
        </Container>
      );
    }
}

/* Connect to store ===================================== */

function mapStateToProps(state) {
  return {
    numberOfPosts: state.dataFeedFilter.numberOfPosts,
    feedTheme: state.dataFeedFilter.feedTheme,
    interval: state.dataFeedFilter.interval
  };
}

const mapDispatchToProps = dispatch => ({
  updateFeedTheme: theme => dispatch(updateFeedTheme(theme)),
  updateNumberPosts: number => dispatch(updateNumberPosts(number)),
  updateMinutesInterval: minutes => dispatch(updateMinutesInterval(minutes))
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsView);
