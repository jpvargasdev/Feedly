/**
 * App router
 */
import React from "react";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";

import Ionicons from "react-native-vector-icons/dist/Ionicons";

// components
import { colors } from "../common/styles";

// views
import SplashView from "./SplashView";
import FeedView from "./FeedView";
import SettingsView from "./SettingsView";

/* Navigator ============================== */
const IndexApp = createStackNavigator({
  SplashView,

  MainView: createBottomTabNavigator({
    FeedView: {
      screen: FeedView,
      navigationOptions: {
        tabBarLabel: "Feed",
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? "ios-paper" : "ios-paper-outline"}
            size={24}
            style={{ color: tintColor }}
          />
        )
      }
    },
    SettingsView: {
      screen: SettingsView,
      navigationOptions: {
        tabBarLabel: "Settings",
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? "ios-settings" : "ios-settings-outline"}
            size={24}
            style={{ color: tintColor }}
          />
        )
      }
    }
  }, {
    tabBarOptions: {
      activeTintColor: colors.colorPrimaryDark,
      inactiveTintColor: colors.inactiveIconD,
      showIcon: true,
      upperCaseLabel: false,
      pressColor: colors.activeIconD
    }
  })
}, {
  headerMode: "none",
  navigationOptions: {
    header: null
  }
});

export default createAppContainer(IndexApp);
