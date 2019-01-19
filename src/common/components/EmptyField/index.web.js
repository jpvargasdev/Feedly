/**
 * EmptyField view component
 */
import React, { PureComponent } from "react";
import {
  View,
  Text
} from "react-native-web";
import Lottie from "react-lottie";

// style
import styles from "./styles";

// constants
const EMPTY_ANIMATION = require("../../../common/assets/topic_search.json");

/* Component =========================================== */
class EmptyField extends PureComponent {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: EMPTY_ANIMATION,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
    return (
      <View style={styles.container}>
        <Lottie
          options={defaultOptions}
          style={styles.containerAnimation}
        />
        <Text style={styles.text}>Welcome! write a topic to start the search! </Text>
      </View>
    );
  }
}

export default EmptyField;
