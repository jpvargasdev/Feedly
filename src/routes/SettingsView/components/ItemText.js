/**
 * Item text settings
 */
import React from "react";
import {
    Text,
    StyleSheet
} from "react-native";
import { fonts, colors, padding } from "../../../common/styles";

/* Component ===================================== */

const ItemText = props => (
    <Text style={styles.text}>{props.children}</Text>
);

export default ItemText;

/* Style ===================================== */

const styles = StyleSheet.create({
    text:{
        fontSize: fonts.subHeading,
        color: colors.secondaryTextD,
    }
});