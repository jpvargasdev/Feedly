/**
 * Modal picker
 */
import React from 'react';
import {
    View,
    StyleSheet,
    Picker,
    Button,
    Text,
    TouchableWithoutFeedback,
    ScrollView,
} from 'react-native';
import Modal from 'react-native-modal';

import { colors, fonts } from '../../../../../common/styles';

/* Component ====================================== */

const ModalPicker = (props) => (
    <Modal
        isVisible={props.isVisible}
        animationInTiming={500}
        animationOutTiming={500}
        animationIn='fadeIn'
        animationOut='fadeOut'>
            <View style={styles.pickerContainerIos}>
                <View style={styles.containerButtons}>
                    <Button
                        onPress={() => props.cancelButtonAction()}
                        title="Cancel"
                        accessibilityLabel="Learn more about this purple button" />
                    <Button
                        onPress={() => props.doneButtonAction()}
                        title="Done"
                        accessibilityLabel="Learn more about this purple button" />
                </View>
                <Picker
                    selectedValue={props.selectedValue}
                    onValueChange={props.onValueChange}>
                    {props.options.map((option, index) => (
                        <Picker.Item label={option} value={option} key={index}/>
                    ))}
                </Picker>
            </View>
        }
    </Modal>
)
    
export default ModalPicker;

/* Style=========================================== */

const styles = StyleSheet.create({
    textOptionAndroid: {
        fontSize: fonts.subHeading,
        color: colors.primaryTextD
    },
    containerCardAndroid: {
        padding: 10,
    },
    containerButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#efefe9',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: colors.dividersD,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        paddingHorizontal: 8,
        paddingVertical: 3
    },
    pickerContainerIos: {
        backgroundColor: '#fafafa',
        borderRadius: 10,
    },
    pickerContainerAndroid: {
        backgroundColor: '#fafafa',
        borderRadius: 5,
    },
    line:{
        borderTopWidth:StyleSheet.hairlineWidth,
        marginHorizontal:10,
        borderColor: 'gray'
    }
});