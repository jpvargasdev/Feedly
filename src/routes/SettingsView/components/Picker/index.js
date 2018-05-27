/**
 * Picker
 */
import React, {PureComponent} from 'react';
import {
    View,
    Picker,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import ModalPicker from './components/ModalPicker';
import { colors, fonts } from '../../../../common/styles';

/* Component ====================================== */

class PickerPlatform extends PureComponent {
    state={
        isVisible:false,
        itemValue:null
    }

    _doneButtonAction = () => {
        this.setState({
            isVisible:false,
        });
        this.props.updateTheme(this.state.itemValue);
    }

    _cancelButtonAction = () => {
        this.setState({
            isVisible:false,
        });
    }

    _changeValue = (itemValue) => {
        this.setState({itemValue: itemValue});
    }

    render(){
        let options = this.props.options;
        const title = this.props.title;    
        return(
            <View style={styles.container}>
                <TouchableOpacity 
                    onPress={()=>this.setState({isVisible:true})}
                    style={styles.containerPicker}>
                    <Text style={styles.textItem}> {this.state.itemValue ? this.state.itemValue:this.props.title} </Text>
                    <Icon
                        name={'md-arrow-dropdown'}
                        size={20}
                        color={'black'}
                    />
                </TouchableOpacity>
                <ModalPicker
                    title={title}
                    options={this.props.options}
                    selectedValue={this.state.itemValue}
                    onValueChange={(itemValue, itemIndex) => this.setState({itemValue})}
                    isVisible={this.state.isVisible}
                    doneButtonAction={this._doneButtonAction}
                    cancelButtonAction={this._cancelButtonAction}
                />
            </View>
        );      
    }
}

export default PickerPlatform;

/* Component ====================================== */

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fafafa',
        shadowOffset:{ width: 0,  height: 2 },
        shadowColor: '#cecece',
        shadowOpacity: 1,
        borderRadius:2,
        width:150
    },
    containerPicker:{
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:5
    },
    textItem:{
        fontSize: fonts.body2,
        color: colors.primaryTextD
    },
});