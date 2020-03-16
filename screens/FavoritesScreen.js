import React from 'react';

import PlaceList from '../components/PlaceList';
import { PLACE } from '../data/dummy-data';

import Header from '../components/Header';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';


const FavoritesScreen = props => {
    const favPlaces = PLACE.filter(place => place.id === 'p1' || place.id === 'p2');
   return <PlaceList listData={favPlaces} navigation={props.navigation} />;
};

FavoritesScreen.navigationOptions = navData =>{
    return {
        headerTitle: 'Your Favorites',
        headerRight: () => <Header />,
        headerLeft:  () =>
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title="Menu" iconName='ios-menu' onPress={() => {
                    navData.navigation.toggleDrawer();
                }} />
            </HeaderButtons>
    };
};

// const styles= StyleSheet.create ({
//    screen: {
//        flex: 1,
//        justifyContent: 'center',
//        alignItems: 'center'
//    } 
// });

export default FavoritesScreen;