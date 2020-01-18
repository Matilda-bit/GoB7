import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../constants/Colors';
import BodyText from './BodyText';

const Header = () => {
    return (
        <View style={styles.header}>
            <BodyText><Text style={styles.title}>Go B7</Text></BodyText>

        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 85,
        paddingTop: 35,
        backgroundColor: Colors.wisteria,
        alignItems: 'center',
        justifyContent: 'center'       
    },
    title: {
        color: 'white',
        fontSize: 35,
      }
});

export default Header;