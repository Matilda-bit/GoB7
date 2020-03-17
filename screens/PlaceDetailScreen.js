import React from 'react';
import { ScrollView, View, ImageBackground, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { PLACE } from '../data/dummy-data';
import HeaderButton from '../components/HeaderButton';
import BodyText from '../components/BodyText';


const PlaceDetailScreen = props => {
    const myId = props.navigation.getParam('myId');

    const selectedItem = PLACE.find(myItem => myItem.id === myId );
    
    return (
        <ScrollView>
            <View style={styles.myItem}>
            <ImageBackground source={{uri: selectedItem.image}} style={styles.image} />
            </View>
            <View style={styles.myDetail}>          
                <BodyText>{selectedItem.categotyId}</BodyText>
                <BodyText>{selectedItem.location}</BodyText>
                <BodyText>{selectedItem.openingHours.toUpperCase()}</BodyText> 
            </View> 
           
            <View style = {styles.screen}>
                <Text>{selectedItem.title}</Text>
            </View>
        </ScrollView>
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
    myDetail: {
        padding: 15,
        //paddingHorizontal: 7,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row'
        //height: '15%'       
    },
    title:{
        fontFamily: 'open-sans-lato',
        fontSize: 22,
        textAlign: 'center'
    },
    // screen:{
    //     flex: 1,
    //     justifyContent: "center",
    //     alignItems: "center"
    // },
    myItem: {
        height: 200,
        borderRadius: 10,
        //overflow: 'hidden',
        marginVertical: 12 
    },
    image: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    }

});

export default PlaceDetailScreen;