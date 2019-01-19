/**
 * Splash View Component
 */

import React, { PureComponent } from "react";
import { Animated } from "react-native";
import { StackActions, NavigationActions } from "react-navigation";
import { connect } from "react-redux";

// components
import Container from "./container";
import Logo from "./components/Logo";
import TextLogo from "./components/TextLogo";
import ParamModel from "../../models/ParamModel";

import { updateFeedTheme, updateMinutesInterval, updateNumberPosts } from "../../actions/actionsFilterFeed";

// Types
type PropsType = {
    updateFeedTheme: Function,
    updateNumberPosts: Function,
    updateMinutesInterval: Function
};
type StateType = {
    fadeAnim: Object
};

// constants
const resetAction = StackActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: "MainView" })
  ]
});

/* Component =========================== */
class SplashView extends PureComponent<PropsType, StateType> {
    state = {
      fadeAnim: new Animated.Value(0)
    }

    componentDidMount() {
      this.updateData();
      const { navigation } = this.props;
      Animated.timing(
        this.state.fadeAnim,
        {
          toValue: 1,
          duration: 1500
        }
      ).start();
      setTimeout(() => {
        navigation.dispatch(resetAction);
      }, 2500);
    }

    updateData() {
      const { updateFeedTheme, updateNumberPosts, updateMinutesInterval } = this.props;
      const category = new ParamModel("category", "business");
      const pageSize = new ParamModel("pageSize", 10);

      updateFeedTheme(category);
      updateNumberPosts(pageSize);
      updateMinutesInterval(5);
    }

    render() {
      return (
        <Container>
          <TextLogo/>
          <Logo fade={this.state.fadeAnim}/>
        </Container>
      );
    }
}

/* Connect to store =========================== */
const mapDispatchToProps = dispatch => ({
  updateFeedTheme: theme => dispatch(updateFeedTheme(theme)),
  updateNumberPosts: number => dispatch(updateNumberPosts(number)),
  updateMinutesInterval: minutes => dispatch(updateMinutesInterval(minutes))
});

export default connect(undefined, mapDispatchToProps)(SplashView);
