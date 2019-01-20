/**
 * Settings form 
 */
import React from "react";
import {
    View,
    StyleSheet,
    Text
} from "react-native";

// components
import Card from "../../../common/components/Card";
import ItemText from "./ItemText";
import FieldText from "./FieldText";
import Picker from "./Picker";

// styles
import { dimensions, fonts, colors } from "../../../common/styles";

// type
type PropsType = {
    updateNumberPosts: Function,
    numberOfPosts: Number,
    updateMinutesInterval: Function,
    interval: Object,
    updateTheme: Object
};

// constants
const THEMES = ["Select theme", "business(default)", "entertainment", "general", "health", "science", "sports", "technology"]

/* Component ===================================== */
const SettingsForm = ({ updateNumberPosts, numberOfPosts, updateMinutesInterval, interval, updateTheme, feedTheme }): PropsType => {
    return(
        <Card style={styles.cardContainer}>
            <Text style={styles.textTitle}>Configure your feed</Text>
            <View style={styles.containerHorizontal}>
                <ItemText>Number of posts to display:</ItemText>
                <FieldText
                    placeholder={"Number"}
                    onEdit = {updateNumberPosts}
                    text={numberOfPosts}
                />
            </View>
            <View style={styles.containerHorizontal}>
                <ItemText>Update interval (Minutes):</ItemText>
                <FieldText
                    placeholder={"Minutes"}
                    onEdit = {updateMinutesInterval}
                    text={interval}
                />
            </View>
            <View style={styles.containerHorizontal}>
                <ItemText>Feed theme:</ItemText>
                <Picker
                    feedTheme={feedTheme}
                    updateTheme={updateTheme}
                    title={"Select theme"}
                    options={THEMES}/>
            </View>
            <View style = {styles.linkApi}>
                <Text>
                    Powered by NewsAPI.org
                </Text>
            </View>
        </Card>
    );
}

export default SettingsForm;

/* Style ===================================== */

const styles = StyleSheet.create({
    cardContainer:{
        width:dimensions.fullWidth * 0.9,
        height: dimensions.fullHeight * 0.9,
        flex:1,
        paddingTop:30,
        paddingHorizontal:20
    },
    textTitle:{
        fontSize: fonts.title,
        alignSelf:"center",
        marginBottom:30,
        color:colors.primaryTextD
    },
    containerHorizontal:{
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingVertical:20,
    },
    linkApi:{
        position:"absolute",
        bottom:0,
        left:0,
        right:0,
        padding:10,
        justifyContent:"center",
        alignItems:"center"
    }
});