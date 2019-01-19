/**
 * App Main Mobile
 */
import React from "react";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";
import configureStore from "./src/config/store";
import IndexApp from "./src/routes";
import { name as appName } from "./app.json";

// constants
const store = configureStore();

/* Component Mobile ============================================ */

const App = () => (
  <Provider store = {store}>
    <IndexApp/>
  </Provider>
);

AppRegistry.registerComponent(appName, () => App);
