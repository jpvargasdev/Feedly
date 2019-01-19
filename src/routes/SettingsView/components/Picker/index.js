/**
 * Picker
 */
import React, { PureComponent } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/dist/Ionicons";
import ModalPicker from "./components/ModalPicker";

// styles
import { colors, fonts } from "../../../../common/styles";

type PropsType = {
    updateTheme: Function,
    options: Array,
    title: String
};
type StateType = {
    isVisible: Boolean,
    itemValue: Object
};

/* Component ====================================== */
class PickerPlatform extends PureComponent<PropsType, StateType> {
    state={
      isVisible: false,
      itemValue: null
    }

    onDoneButton = () => {
      const { updateTheme } = this.props;
      const { itemValue } = this.state;
      this.setState({
        isVisible: false
      });
      updateTheme(itemValue);
    }

    onCancelButton = () => {
      this.setState({
        isVisible: false
      });
    }

    render() {
      const { options, title } = this.props;
      const { itemValue, isVisible } = this.state;
      return (
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => this.setState({ isVisible: true })}
            style={styles.containerPicker}>
            <Text style={styles.textItem}> {itemValue || title} </Text>
            <Icon
              name={"md-arrow-dropdown"}
              size={20}
              color={"black"}
            />
          </TouchableOpacity>
          <ModalPicker
            title={title}
            options={options}
            selectedValue={itemValue}
            onValueChange={itemValue => this.setState({ itemValue })}
            isVisible={isVisible}
            doneButtonAction={this.onDoneButton}
            cancelButtonAction={this.onCancelButton}
          />
        </View>
      );
    }
}

export default PickerPlatform;

/* Component ====================================== */

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fafafa",
    shadowOffset: { width: 0, height: 2 },
    shadowColor: "#cecece",
    shadowOpacity: 1,
    borderRadius: 2,
    width: 150
  },
  containerPicker: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5
  },
  textItem: {
    fontSize: fonts.body2,
    color: colors.primaryTextD
  }
});
