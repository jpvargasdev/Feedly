/**
 * App Main Mobile
 */
import React from "react";
import ReactDOM from "react-dom";
import "./feedly/index.css";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";

// constants
const store = configureStore();

/* Component Mobile ============================================ */

const App = () => (
    <Provider store = {store}>
        <IndexApp/>
    </Provider>
);

AppRegistry.registerComponent(appName, () => App);
