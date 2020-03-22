import React from 'react';
import { Text, StyleSheet } from 'react-native';

const WhiteBodyText = props => <Text style={{ ...styles.body, ...props.style }}>{props.children}</Text>;

const styles = StyleSheet.create({
    body: {
        fontFamily: 'open-sans-bold',
        color: '#ffffff',
        fontSize: 16,
    }
});

export default WhiteBodyText;