/**
 * App Main
 */
import React from "react";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";

import IndexApp from "./src/routes";
import {name as appName} from "./app.json";

import configureStore from "./src/config/store";

// constants
const store = configureStore();

/* Component ============================================ */

const App = () => (
    <Provider store = {store}>
        <IndexApp/>
    </Provider>
);

AppRegistry.registerComponent(appName, () => App);