/**
 * TextLogo component
 */

import React from "react";
import {
  View,
  StyleSheet,
  Text
} from "react-native";
import { colors, fonts } from "../../../common/styles";

/* Style =========================== */
const styles = StyleSheet.create({
  textLogo: {
    fontSize: fonts.title,
    color: colors.activeIconL
  }
});

/* Component =========================== */
const TextLogo = () => (
  <View style={styles.container}>
    <Text style = {styles.textLogo}> Welcome to </Text>
  </View>
);

export default TextLogo;
