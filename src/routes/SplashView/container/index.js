/**
 * Container SplashView
 */

import React from 'react';
import {
    View,
    StyleSheet,
    StatusBar,
    Platform
} from 'react-native';
import { colors } from '../../../common/styles';

/* Component ============================== */

const Container = props => (
    <View style = {styles.container}>
        <StatusBar
            barStyle="light-content"
            backgroundColor = 'white'
            animated = {true}
            hidden = {true}
        />
        {props.children}
    </View>
);

export default Container;

/* Style ============================== */

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: colors.colorPrimary
    }
});