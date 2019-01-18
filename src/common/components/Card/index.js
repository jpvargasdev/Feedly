/**
 * Card container
 */

import React from "react";
import { View } from "react-native";

// style
import styles from "./styles";

/* Component ======================= */

const Card = ({ children, style }) => (
    <View style={[styles.container, style]}>
        {children}
    </View>
);

export default Card;
