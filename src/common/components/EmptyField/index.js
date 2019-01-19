/**
 * EmptyField view component
 */
import React, { PureComponent } from "react";
import {
  View,
  Text
} from "react-native";
import LottieView from "lottie-react-native";

// style
import styles from "./styles";

// constants
const EMPTY_ANIMATION = require("../../../common/assets/topic_search.json");

/* Component =========================================== */
class EmptyField extends PureComponent {
  componentDidMount() {
    this.animation.play();
  }

  render() {
    return (
      <View style={styles.container}>
        <LottieView
          loop={ true }
          ref={ (animation) => { this.animation = animation; } }
          style={styles.containerAnimation}
          source={ EMPTY_ANIMATION }
        />
        <Text style={styles.text}>Welcome! write a topic to start the search! </Text>
      </View>
    );
  }
}

export default EmptyField;
