/**
 * Logo component
 */

import React from "react";
import {
  Text,
  StyleSheet,
  Animated
} from "react-native";

// style
import { colors, fonts, padding } from "../../../common/styles";

// type
type PropsType = {
    fade: Number
};

/* Style =========================== */
const styles = StyleSheet.create({
  logoText: {
    marginTop: padding.lg,
    fontSize: fonts.display3,
    color: colors.activeIconL
  }
});

/* Component =========================== */
const Logo = ({ fade }): PropsType => (
  <Animated.View style={{ opacity: fade }}>
    <Text style={styles.logoText}>Feedly</Text>
  </Animated.View>
);

export default Logo;
