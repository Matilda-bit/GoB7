import React from 'react';
import { View, StyleSheet } from 'react-native';
import PlaceList from '../../components/PlaceList';
import { useSelector } from 'react-redux';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../../components/HeaderButton';
import BodyText from '../../components/text/BodyText';
import Header from '../../components/Header';
//import Colors from '../../constants/Colors';


const UserPlacesScreen = props => {
          
    //pass data from store/reducer/places
    const displayedPlaces = useSelector(state => state.places.userPlaces);

    if (displayedPlaces.length === 0 || displayedPlaces === null){
        return <View style={styles.content}>
            <BodyText>No data found, maybe you want to add your place?</BodyText>
            </View>

    };
  return (<PlaceList listData={displayedPlaces} navigation={props.navigation}/>);
};


UserPlacesScreen.navigationOptions = navData => {
    return {
      headerTitle: 'Your Places',
      headerRight: () => <Header />,
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Menu"
            iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
            onPress={() => {
              navData.navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
    )};
};

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
export default UserPlacesScreen;