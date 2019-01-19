/**
 * Container SettingsView
 */

import React from "react";
import {
  StyleSheet,
  StatusBar
} from "react-native";
import { SafeAreaView } from "react-navigation";

// type
type PropsType = {
    children: Object
};

/* Component ============================== */
const Container = ({ children }): PropsType => (
  <SafeAreaView style = {styles.container}>
    <StatusBar
      barStyle="dark-content"
      backgroundColor = "white"
      animated = {true}
      hidden = {false}
    />
    {children}
  </SafeAreaView>
);

export default Container;

/* Style ============================== */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    marginBottom: 20
  }
});
