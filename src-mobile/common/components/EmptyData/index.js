/**
 * DontData view component
 */
import React, { PureComponent } from "react";
import {
    View,
    Text
} from "react-native";
import LottieView from "lottie-react-native";

// styles
import styles from "./styles";

// constants
const EMPTY_ANIMATION = require("../../../common/assets/empty_list.json");

/* Component =========================================== */
export default class EmptyData extends PureComponent {

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
                    source={ EMPTY_ANIMATION }
                />          
                <Text style={styles.text}>Oops!</Text>  
                <Text style={styles.text}>Don"t found anithing with this topic, try another</Text>  
            </View>
        );             
    }
}
