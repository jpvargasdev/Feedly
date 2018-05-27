/**
 * EmptyField view component
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

export default class EmptyField extends Component {

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
                    source={ require('../../common/assets/topic_search.json') }
                />          
                <Text style={styles.text}>Welcome! write a topic to start the search! </Text>  
            </View>
        );             
    }
}

/* Style =========================================== */

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center'
    },   
    containerAnimation:{
        width:400,
        height:300,
    },
    text:{
        alignSelf:'center',
        textAlign: 'center',
        fontSize:fonts.title,
        padding: padding.lg1,
        color:colors.primaryTextD,
    }
});