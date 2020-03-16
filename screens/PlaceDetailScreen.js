import React from 'react';
import { View,Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { PLACE } from '../data/dummy-data';
import HeaderButton from '../components/HeaderButton';


const PlaceDetailScreen = props => {
    const myId = props.navigation.getParam('myId');

    const selectedItem = PLACE.find(myItem => myItem.id === myId );
    return (
        <View style = {styles.screen}>
            <Text>{selectedItem.title}</Text>
        </View>
    );
};

PlaceDetailScreen.navigationOptions = (navigationData) => {
    const myId = navigationData.navigation.getParam('myId');
    const selectedItem = PLACE.find(myItem => myItem.id === myId );
    return {
        headerTitle: selectedItem.title,
        headerRight: () =>
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                   <Item 
                    title='Favorite' 
                    iconName='ios-star' 
                    onPress={() => {
                       console.log('Mark as favorite!');
                    }}
                    /> 
            </HeaderButtons>
            
    };
};

const styles = StyleSheet.create({
screen:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
}

});

export default PlaceDetailScreen;