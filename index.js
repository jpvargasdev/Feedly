/**
 * App
 */
"use-strict";
import React, { Component  } from 'react';
import { AppRegistry } from 'react-native';
import IndexApp from './src/routes';
import { Provider } from 'react-redux';

import { YellowBox } from 'react-native';

//Hide yellow warning unknown issue
// =============================================//
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
YellowBox.ignoreWarnings(['Class RCTCxxModule']);
// =============================================//

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