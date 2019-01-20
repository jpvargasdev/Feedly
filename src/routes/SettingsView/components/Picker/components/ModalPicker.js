/**
 * Modal picker
 */
import React from "react";
import {
  View,
  StyleSheet,
  Picker,
  Button
} from "react-native";
import Modal from "react-native-modal";

// style
import { colors, fonts } from "../../../../../common/styles";

type PropsType = {
    isVisible: Boolean,
    cancelButtonAction: Function,
    doneButtonAction: Function,
    selectedValue: Object,
    onValueChange: Function,
    options: Array
}

/* Component ====================================== */
const ModalPicker = ({
  isVisible,
  cancelButtonAction,
  doneButtonAction,
  selectedValue,
  onValueChange,
  options
}): PropsType => (
  <Modal
    isVisible={isVisible}
    animationInTiming={500}
    animationOutTiming={500}
    animationIn="fadeIn"
    animationOut="fadeOut">
    <View style={styles.pickerContainerIos}>
      <View style={styles.containerButtons}>
        <Button
          onPress={() => cancelButtonAction()}
          title="Cancel"
          accessibilityLabel="Learn more about this purple button" />
        <Button
          onPress={() => doneButtonAction()}
          title="Done"
          accessibilityLabel="Learn more about this purple button" />
      </View>
      <Picker
        selectedValue={selectedValue}
        onValueChange={onValueChange}>
        {options.map((option, index) => (
          <Picker.Item label={option} value={option} key={index}/>
        ))}
      </Picker>
    </View>
  </Modal>
);

export default ModalPicker;

/* Style=========================================== */

const styles = StyleSheet.create({
  textOptionAndroid: {
    fontSize: fonts.subHeading,
    color: colors.primaryTextD
  },
  containerCardAndroid: {
    padding: 10
  },
  containerButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#efefe9",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.dividersD,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 3
  },
  pickerContainerIos: {
    backgroundColor: "#fafafa",
    borderRadius: 10
  },
  pickerContainerAndroid: {
    backgroundColor: "#fafafa",
    borderRadius: 5
  },
  line: {
    borderTopWidth: StyleSheet.hairlineWidth,
    marginHorizontal: 10,
    borderColor: "gray"
  }
});
