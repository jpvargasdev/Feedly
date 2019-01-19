import { StyleSheet } from "react-native";
import { fonts, colors, padding } from "../../../styles";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center"
  },
  containerAnimation: {
    width: 400,
    height: 300
  },
  text: {
    alignSelf: "center",
    textAlign: "center",
    fontSize: fonts.title,
    padding: padding.lg1,
    color: colors.primaryTextD
  }
});

export default styles;
