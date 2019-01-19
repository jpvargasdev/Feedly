/**
 * Item text settings
 */
import React from "react";
import {
  Text,
  StyleSheet
} from "react-native";

// styles
import { fonts, colors } from "../../../common/styles";

type PropsType = {
    children: Object
};

/* Component ===================================== */
const ItemText = ({ children }): PropsType => (
  <Text style={styles.text}>{children}</Text>
);

export default ItemText;

/* Style ===================================== */

const styles = StyleSheet.create({
  text: {
    fontSize: fonts.subHeading,
    color: colors.secondaryTextD
  }
});
