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
const EMPTY_ANIMATION = require("../../../common/assets/empty_list.json");

/* Component =========================================== */
export default class EmptyData extends PureComponent {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: EMPTY_ANIMATION,
      rendererSettings: {
        preserveAspectRatio: true
      }
    };
    return (
      <View style={styles.container}>
        <Lottie
          options={defaultOptions}
          height={400}
          width={400}
        />
        <Text style={styles.text}>Oops!</Text>
        <Text style={styles.text}>Don"t found anithing with this topic, try another</Text>
      </View>
    );
  }
}
