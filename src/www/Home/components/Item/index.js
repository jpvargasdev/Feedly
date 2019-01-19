/**
 * Item post card
 */
import React from "react";
import {
  Text,
  View
} from "react-native-web";
import IosCalendar from "react-ionicons/lib/IosCalendar";
import IosPerson from "react-ionicons/lib/IosPerson";

// components
import Card from "../../../../common/components/Card";
import Utils from "../../../../utils/Utils";

// style
import styles from "./style/item";
import { colors } from "../../../../common/styles";

// type
type PropsType = {
    item: Object;
};

/* Component ========================= */
const Item = ({ item }): PropsType => (
  <Card style={styles.cardStyle}>
    <View style={styles.header}>
      <View style={styles.containerHorizontal}>
        <IosPerson
          fontSize="30px"
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
        <IosCalendar
          fontSize="30px"
          color={colors.activeIconD}
        />
        <Text style={styles.date}>{Utils.formatDate(item.publishedAt)}</Text>
      </View>
    </View>
  </Card>
);

export default Item;
