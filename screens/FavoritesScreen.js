import React from 'react';
import { useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';
import PlaceList from '../components/PlaceList';
import Header from '../components/Header';

const FavoritesScreen = props => {
    const favPlaces = useSelector(state => state.places.favoritePlaces);
    
    //const favPlaces = availablePlaces.filter(place => place.id === 'p1' || place.id === 'p2');
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

export default FavoritesScreen;