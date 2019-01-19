import { StyleSheet } from "react-native";
import { fonts, colors, padding } from "../../../styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  containerAnimation: {
    width: 400,
    height: 300,
    marginBottom: 10
  },
  text: {
    alignSelf: "center",
    textAlign: "center",
    padding: padding.lg1,
    color: colors.primaryTextD,
    fontSize: fonts.title
  },
  textError: {
    color: colors.primaryTextD,
    fontSize: fonts.caption,
    alignSelf: "center",
    textAlign: "center"
  }
});

export default styles;
