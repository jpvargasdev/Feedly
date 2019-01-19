/**
 * Item post card
 */
import React from "react";
import {
  Text,
  StyleSheet,
  View
} from "react-native";
import Ionicons from "react-native-vector-icons/dist/Ionicons";

import { colors, fonts } from "../../../common/styles";
import Card from "../../../common/components/Card";
import Utils from "../../../utils/Utils";

/* Component ========================= */
const Item = ({ item }) => (
  <Card style={styles.cardStyle}>
    <View style={styles.header}>
      <View style={styles.containerHorizontal}>
        <Ionicons
          name={"ios-person"}
          size={20}
          color={colors.activeIconD}
        />
        <Text style={styles.author}>{item.author ? item.author : "Anonimous"}</Text>
      </View>
    </View>
    <Text style={styles.title}>{item.title}</Text>
    <View style={styles.containerDescription}>
      <Text style={styles.description}>{item.description ? item.description : "No description available"}</Text>
    </View>
    <View style={styles.footerDate}>
      <View style={styles.containerHorizontal}>
        <Ionicons
          name={"ios-calendar"}
          size={15}
          color={colors.activeIconD}
        />
        <Text style={styles.date}>{Utils.formatDate(item.publishedAt)}</Text>
      </View>
    </View>
  </Card>
);

export default Item;

/* Style ========================= */

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
