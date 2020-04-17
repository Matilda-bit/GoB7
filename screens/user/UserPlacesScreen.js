import React from 'react';
import { View, StyleSheet, FlatList, Button, Platform, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../../components/UI/HeaderButton';
import ProductItem from '../../components/ProductItem';
import BodyText from '../../components/text/BodyText';
import Header from '../../components/Header';
import Colors from '../../constants/Colors';
import * as placesActions from '../../store/actions/places';
//import { FlatList } from 'react-native-gesture-handler';
//import Colors from '../../constants/Colors';


const UserPlacesScreen = props => {
          
    //pass data from store/reducer/places
    const userPlaces = useSelector(state => state.places.userPlaces);
    const dispatch = useDispatch();


    if (userPlaces.length === 0 || userPlaces === null){
      return <View style={styles.content}>
          <BodyText>No data found, maybe you want to add your place?</BodyText>
          </View>
    };
   
    
    const editPlaceHandler = id => {
      props.navigation.navigate('EditPlace', { placeId: id});
    };

    const deleteHandler = (id) => {
      Alert.alert('Are you sure?','Do you really want to delete this place?', [
        { text: 'No', style: 'default' },
        {
          text: 'Yes',
          style: 'destructive',
          onPress: () => {
            dispatch(placesActions.deletePlace(id));
          }
        }
      ]);
    };
    
    return (
      <FlatList
          data={userPlaces}
          keyExtractor={item => item.id}
          renderItem={itemData => (
            <ProductItem
              image={itemData.item.imageUrl}
              title={itemData.item.title}
              onSelect={()=> {
                editPlaceHandler(itemData.item.id);
              }}
              >
                <Button
                color={Colors.primary}
                title="Edit"
                onPress={() => {
                  editPlaceHandler(itemData.item.id)
                }}
                />
                <Button
                color={Colors.accentColor}
                title="Delete"
                onPress={deleteHandler.bind(this, itemData.item.id)}
                />
            </ProductItem>
        )} 
        />);
};


UserPlacesScreen.navigationOptions = navData => {
    return {
      headerTitle: 'Your Places',
      headerRight: () => <Header />,
      // headerRight: () => (
      //   <HeaderButtons HeaderButtonComponent={HeaderButton}>
      //     <Item
      //       title="Add"
      //       iconName={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
      //       onPress={() => {
      //         navData.navigation.navigate('EditPlace');
      //       }}
      //     />
      //   </HeaderButtons>
      // ),
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