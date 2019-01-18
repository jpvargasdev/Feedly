/**
 * App Main Web
 */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import configureStore from "../src-mobile/config/store";
import WebApp from "./App";

// constants
const store = configureStore();

/* Component Mobile ============================================ */

const App = () => (
    <Provider store = {store}>
        <WebApp/>
    </Provider>
);


ReactDOM.render(<WebApp />, document.getElementById("root"));
