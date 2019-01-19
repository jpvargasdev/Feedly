/**
 * DontData view component
 */
import React, { PureComponent } from "react";
import {
  View,
  Text
} from "react-native-web";
import Lottie from "react-lottie";

// styles
import styles from "./styles";

// constants
const ERROR_ANIMATION = require("../../../common/assets/error.json");

// type
type PropsType = {
    textError: String
};

/* Component =========================================== */
class Error extends PureComponent<PropsType> {
  render() {
    const { textError } = this.props;
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: ERROR_ANIMATION,
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
        <Text style={styles.text}>Error!</Text>
        <Text style={styles.text}>Try again</Text>
        <Text style={styles.textError}>{textError}</Text>

      </View>
    );
  }
}

export default Error;
