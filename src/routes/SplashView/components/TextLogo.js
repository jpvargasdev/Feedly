/**
 * TextLogo component
 */

import React from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';
import { colors, fonts, padding, dimensions } from '../../../common/styles';

/* Component =========================== */

const TextLogo = props => (
    <View style={styles.container}>
        <Text style = {styles.textLogo}> Welcome to </Text>
    </View>
);

export default TextLogo;

/* Style =========================== */

const styles = StyleSheet.create({
    textLogo:{
        fontSize: fonts.title,
        color: colors.activeIconL
    }
});