import React from 'react';
import { View, Button, Text, Image, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

import * as ImagePicker from 'expo-image-picker'

const ImgPicker = props => {

    const takeImageHandler =() => {
        ImagePicker.launchCameraAsync();
    };
    return (
        <View style={styles.imagePicker}>
        <View style={styles.imagePreview}>
            <Text>No image picked yet.</Text>
            <Image style={styles.image} />
        </View>
        
        <Button title="Take image" color={Colors.primary} onPress={takeImageHandler} />
        </View>

    );
}
const styles = StyleSheet.create({
    screen: {},
    imagePicker: {
        alignItems: 'center'
    },
    imagePreview: {
        width: '100%',
        height: 200,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 1
    },
    image: {
        width: '100%',
        height: '100%'
    }

});


export default ImgPicker;