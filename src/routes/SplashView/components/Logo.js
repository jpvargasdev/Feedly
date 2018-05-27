/**
 * Logo component
 */

import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Animated
} from 'react-native';
import { colors, fonts, padding, dimensions } from '../../../common/styles';

/* Component =========================== */

const Logo = props => (
    <Animated.View style={{opacity:props.fade}}>
        <Text style={styles.logoText}>Feedly</Text>
    </Animated.View>
);

export default Logo;

/* Style =========================== */

const styles = StyleSheet.create({
    logoText:{
        marginTop: padding.lg,
        fontSize: fonts.display3,
        color: colors.activeIconL
    }
});