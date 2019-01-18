/**
 * Container SplashView
 */

import React from "react";
import {
    View,
    StyleSheet,
    StatusBar
} from "react-native";

// styles
import { colors } from "../../../common/styles";

// type
const PropsType = {
    children: Object
};

/* Style ============================== */
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems: "center",
        backgroundColor: colors.colorPrimary
    }
});

/* Component ============================== */
const Container = ({children}): PropsType => (
    <View style = {styles.container}>
        <StatusBar
            barStyle="light-content"
            backgroundColor = "white"
            animated = {true}
            hidden = {true}
        />
        {children}
    </View>
);

export default Container;
