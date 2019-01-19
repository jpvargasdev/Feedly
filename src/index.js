/**
 * App Main Web
 */
import React from "react";
import ReactDOM from "react-dom";
import "./common/styles/index.css";
import { Provider } from "react-redux";
import configureStore from "./config/store";
import WebApp from "./www/Home/index.js";

// constants
const store = configureStore();

/* Component Mobile ============================================ */

const App = () => (
  <Provider store = {store}>
    <WebApp/>
  </Provider>
);


ReactDOM.render(<App />, document.getElementById("root"));
