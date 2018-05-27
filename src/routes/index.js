/**
 * App router
 */
import React from 'react';
import { 
  createStackNavigator,     
  createBottomTabNavigator
} from 'react-navigation';
import {
  Platform
} from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import { colors } from '../common/styles';

/* Views ================================== */

import SplashView from './SplashView';
import FeedView from './FeedView';
import SettingsView from './SettingsView';

/* Navigator ============================== */

const IndexApp = createStackNavigator({
  SplashView: SplashView,

  MainView: createBottomTabNavigator({
    FeedView: {
      screen:FeedView,
      navigationOptions: {
        tabBarLabel: 'Feed',  
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-paper' : 'ios-paper-outline'}
            size={24}
            style={{ color: tintColor }}
          />
        ),
      },
    },
    SettingsView:{
      screen: SettingsView,
      navigationOptions: {
        tabBarLabel: 'Settings',                 
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-settings' : 'ios-settings-outline'}
            size={24}
            style={{ color: tintColor }}
          />
        ),
      },
    },
  },{
    tabBarOptions: {
      activeTintColor: colors.colorPrimaryDark,
      inactiveTintColor: colors.inactiveIconD,
      showIcon: true,
      upperCaseLabel: false,        
      pressColor: colors.activeIconD,
    },
  })
},{
  headerMode: 'none', 
  navigationOptions: {
    header: null,
  },
});

export default IndexApp;
