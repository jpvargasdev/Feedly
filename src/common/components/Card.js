/**
 * Card container
 */

import React from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';

/* Component ======================= */

const Card = props => (
    <View style={[styles.container, props.style]}>
        {props.children}
    </View>
);

export default Card;

/* Style =========================== */

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fafafa',
        shadowOffset:{ width: 3, height: 3 },
        shadowColor: 'gray',
        shadowOpacity: 0.5,
        borderRadius: 3,
    }
});
