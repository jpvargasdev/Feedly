/**
 * App
 */
"use-strict";
import React, { Component  } from 'react';
import { AppRegistry } from 'react-native';
import IndexApp from './src/routes';
import { Provider } from 'react-redux';

//Hide yellow warning unknown issue
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

import configureStore from './src/config/store';

let store = configureStore();

/* Component ============================================ */

export default class App extends Component{
    render(){
        return(
            <Provider store = {store}>
                <IndexApp/>
            </Provider>
        );
    }
}

AppRegistry.registerComponent('Feedly', () => App);