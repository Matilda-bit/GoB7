import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';
import PlaceList from '../components/PlaceList';
import Header from '../components/Header';
import BodyText from '../components/text/BodyText';
const FavoritesScreen = props => {
    const favPlaces = useSelector(state => state.places.favoritePlaces);

    if (favPlaces.length === 0 || !favPlaces){
        return <View style={styles.content}>
            <BodyText>No favorite places found. Start adding some!</BodyText>
        </View>
    }
    
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
const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
export default FavoritesScreen;