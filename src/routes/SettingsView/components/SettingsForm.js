/**
 * Settings form 
 */
import React from "react";
import {
    View,
    StyleSheet,
    Text
} from "react-native";
import Card from "../../../common/components/Card";
import { dimensions, fonts, colors } from "../../../common/styles";

import ItemText from "./ItemText";
import FieldText from "./FieldText";
import Picker from "./Picker";

/* Component ===================================== */

const SettingsForm = props => {
    return(
        <Card style={styles.cardContainer}>
            <Text style={styles.textTitle}>Configure your feed</Text>
            <View style={styles.containerHorizontal}>
                <ItemText>Number of posts to display:</ItemText>
                <FieldText
                    placeholder={"Number"}
                    onEdit = {props.updateNumberPosts}
                    text={props.numberOfPosts}
                />
            </View>
            <View style={styles.containerHorizontal}>
                <ItemText>Update interval (Minutes):</ItemText>
                <FieldText
                    placeholder={"Minutes"}
                    onEdit = {props.updateMinutesInterval}
                    text={props.interval}
                />
            </View>
            <View style={styles.containerHorizontal}>
                <ItemText>Feed theme:</ItemText>
                <Picker
                    updateTheme={props.updateTheme}
                    title={"Select theme"}
                    options={["Select theme", "business(default)", "entertainment", "general", "health", "science", "sports", "technology"]}/>
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