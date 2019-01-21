/**
 * Card container
 */

import React from "react";
import { View, Platform } from "react-native";
import { View as WView } from "react-native-web";

// style
import styles from "./styles";

// type
type PropsType = {
  children: Object,
  style: Object
};

/* Component ======================= */
const Card = ({ children, style }: PropsType) => {
  if (Platform.OS === "web") {
    return (
      <WView style={[styles.container, style]}>
        {children}
      </WView>
    );
  }
  return (
    <View style={[styles.container, style]}>
      {children}
    </View>
  );
};

export default Card;
