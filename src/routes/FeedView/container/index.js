/**
 * Container FeedView
 */

import React from "react";
import {
  StyleSheet,
  StatusBar,
  Platform
} from "react-native";
import { SafeAreaView } from "react-navigation";

/* Component ============================== */

const Container = props => (
  <SafeAreaView style = {styles.container}>
    <StatusBar
      barStyle="dark-content"
      backgroundColor = "white"
      animated = {true}
      hidden = {false}
    />
    {props.children}
  </SafeAreaView>
);

export default Container;

/* Style ============================== */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    ...Platform.select({
      ios: {
        marginTop: 40
      },
      android: {
        marginTop: 60
      }
    })
  }
});
