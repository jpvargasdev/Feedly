/**
 * DontData view component
 */
"use strict";
import React, {Component} from 'react';
import { 
    Animated, 
    View, 
    StyleSheet,
    Text
} from 'react-native';
import LottieView from 'lottie-react-native';
import { fonts, colors , padding} from '../../common/styles';

/* Component =========================================== */

export default class Error extends Component {

    componentDidMount() {
        this.animation.play(); 
    }

    render() {
        return (
            <View style={styles.container}>
                <LottieView
                    loop={ true }
                    ref={ animation => { this.animation = animation; } }
                    style={styles.containerAnimation}
                    source={ require('../../common/assets/error.json') }
                />          
                <Text style={styles.text}>Error!</Text>
                <Text style={styles.text}>Try again</Text>
                <Text style={styles.textError}>{this.props.textError}</Text>    
    
            </View>
        );             
    }
}

/* Style =========================================== */

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },   
    containerAnimation:{
        width:400,
        height:300,
        marginBottom:10
    },
    text:{
        alignSelf:'center',
        textAlign: 'center',
        padding: padding.lg1,
        color:colors.primaryTextD,
        fontSize:fonts.title
    },
    textError:{
        color:colors.primaryTextD,
        fontSize:fonts.caption,
        alignSelf:'center',
        textAlign: 'center',
    }
});