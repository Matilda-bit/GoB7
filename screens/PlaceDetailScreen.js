import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ScrollView, View, ImageBackground, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';
import WhiteBodyText from '../components/WhiteBodyText';
import Screenbk from '../constants/default-styles';
import { toggleFavorite } from '../store/actions/places'

// const ListItem = props => {
//     return (
//       <View style={styles.listItem}>
//         <DefaultText>{props.children}</DefaultText>
//       </View>
//     );
//   };

const PlaceDetailScreen = props => {
    const availablePlaces = useSelector(state => state.places.places);
    const placeId = props.navigation.getParam('placeId');

    const selectedItem = availablePlaces.find(place => place.id === placeId );

    const dispatch = useDispatch();

    const toogleFavoriteHandler = useCallback(() =>{
        dispatch(toggleFavorite(placeId));
    }, [dispatch, placeId]);

    useEffect(() => {
        //props.navigation.setParams({placeTitle: selectedItem.title });
        props.navigation.setParams({toggleFav: toogleFavoriteHandler});
    }, [toogleFavoriteHandler]);

    

    //138 - ingredients & steps
    return (
        <ScrollView style={Screenbk.screen2}>
            <View style={styles.myItem}>
            <ImageBackground 
                source={{uri: selectedItem.imageUrl}} 
                style={styles.imageDet} 
            />      
            </View>
      
            <View style={styles.myDetail}>          
                <WhiteBodyText>category:  {selectedItem.categoryId.map(categoryId => <WhiteBodyText key={categoryId}>{categoryId} </WhiteBodyText>)}</WhiteBodyText>
               
                <WhiteBodyText>address: {selectedItem.location}, Be'er sheva</WhiteBodyText>
                <WhiteBodyText>opening hours: {selectedItem.openingHours.toUpperCase()}</WhiteBodyText> 
            </View> 
        </ScrollView>
    );
};

PlaceDetailScreen.navigationOptions = (navigationData) => {
    //const myId = navigationData.navigation.getParam('myId');
    const placeTitle =navigationData.navigation.getParam('placeTitle');
    //const selectedItem = PLACE.find(myItem => myItem.id === myId );
    const toggleFavorite = navigationData.navigation.getParam('toggleFav');
    return {
        headerTitle: placeTitle,
        headerRight: () =>
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                   <Item 
                    title='Favorite' 
                    iconName='ios-star' 
                    onPress={toggleFavorite}
                    /> 
            </HeaderButtons>    
    };
};

const styles = StyleSheet.create({
    myDetail: {
        paddingTop:5,
        //padding: 5,
        paddingHorizontal: 7,
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        flexDirection: 'column'       
    },
    title:{
        fontFamily: 'open-sans-lato',
        fontSize: 22,
        textAlign: 'center'
    },
    myItem: {
        height: 200,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        overflow: 'hidden'
        //marginVertical: 12 
    },
    imageDet: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    }

});

export default PlaceDetailScreen;