/**
 * DontData view component
 */
import React, {Component} from "react";
import {
    View,
    Text
} from "react-native";
import LottieView from "lottie-react-native";

// styles
import styles from "./styles";

// constants
const ERROR_ANIMATION = require("../../../common/assets/error.json");

/* Component =========================================== */
class Error extends Component {

    componentDidMount() {
        this.animation.play(); 
    }

    render() {
        const { textError } = this.props;
        return (
            <View style={styles.container}>
                <LottieView
                    loop={ true }
                    ref={ animation => { this.animation = animation; } }
                    style={styles.containerAnimation}
                    source={ ERROR_ANIMATION }
                />          
                <Text style={styles.text}>Error!</Text>
                <Text style={styles.text}>Try again</Text>
                <Text style={styles.textError}>{textError}</Text>    
    
            </View>
        );             
    }
}

export default Error;
