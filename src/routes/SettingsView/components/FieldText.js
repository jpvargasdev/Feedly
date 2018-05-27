/**
 * Field text input
 */
import React, { PureComponent } from 'react';
import {
    View,
    StyleSheet,
    TextInput
} from 'react-native';

/* Component ============================ */

class FieldText extends PureComponent{

    state={
        text:''
    }

    componentDidMount(){
        let text = String(this.props.text)
        if ( text ){
            this.setState({
                text
            })
        }
    }

    _editEnd = () =>{
        this.props.onEdit(Number(this.state.text));
    }

    render(){
        return(
            <View style={styles.container}>
                <TextInput
                    placeholder={this.props.placeholder}
                    onEndEditing={this._editEnd}
                    onChangeText={ (text) => this.setState({text})}
                    onSubmitEditing={this._editEnd}
                    value={this.state.text}
                />
            </View>
        );
    }  
}

export default FieldText;

/* Style ============================ */

const styles = StyleSheet.create({
    container:{
        borderWidth:1,
        borderColor:'gray',
        justifyContent:'center',
        padding:10,
        width: 80
    }
});