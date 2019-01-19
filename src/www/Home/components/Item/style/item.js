
import { StyleSheet } from "react-native-web";
import { colors, fonts } from "../../../../../common/styles";

const styles = StyleSheet.create({
  cardStyle: {
    marginVertical: 5,
    marginHorizontal: 10,
    padding: 10
  },
  containerHorizontal: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  containerDescription: {
    marginVertical: 10,
    marginHorizontal: 5,
    borderWidth: 0.5,
    borderColor: colors.dividersD,
    padding: 10
  },
  footerDate: {
    justifyContent: "center",
    alignItems: "flex-end"
  },
  header: {
    justifyContent: "center",
    alignItems: "flex-start"
  },
  author: {
    fontSize: fonts.body2,
    color: colors.primaryTextD,
    marginBottom: 10,
    marginLeft: 10,
    paddingTop: 10
  },
  date: {
    fontSize: fonts.body2,
    color: colors.secondaryTextD,
    marginLeft: 10
  },
  description: {
    fontSize: fonts.body2,
    color: colors.secondaryTextD
  },
  title: {
    fontSize: fonts.subHeading,
    marginBottom: 10,
    textAlign: "center",
    color: colors.primaryTextD
  }
});

export default styles;
