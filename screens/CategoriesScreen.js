import React, { useState, useEffect, useCallback } from 'react';
import {  
    FlatList, 
    ActivityIndicator, 
    View, 
    StyleSheet, 
    Text, 
    Button
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { CATEGORIES } from '../data/dummy-data';
import Header from '../components/Header';
import HeaderButton from '../components/UI/HeaderButton';
import CategoryGridTile from '../components/CategoryGridTile';
//import * as placesActions from '../store/actions/places';
//import { Colors } from 'react-native/Libraries/NewAppScreen';
import Colors  from '../constants/Colors';
const CategoriesScreen = props => {
    // const [isLoading, setIsLoading] = useState(false);
    // const [error, setError] = useState();
    // const userPlaces = useSelector(state => state.places.userPlaces);
    // // console.log('userPlaces: ');
    // // console.log(userPlaces);
    // //send an action to router
    // const dispatch = useDispatch();
    

    // const loadPlaces = useCallback(async () => {
    //     //console.log('LOAD PLACES');
    //     //to reset
    //     setError(null);
    //     setIsLoading(true);
    //     try {
    //         await dispatch(placesActions.fetchPlaces());
    //     } catch (err) {
    //         setError(err.message);
    //     }         
    //     setIsLoading(false);
    // }, [ dispatch, setIsLoading, setError]);

    // useEffect(() => {
    //     const willFocusSub = props.navigation.addListener(
    //       'willFocus',
    //       loadPlaces
    //     );
    
    //     return () => {
    //       willFocusSub.remove();
    //     };
    //   }, [loadPlaces]);

    // useEffect(() => {      
    //     loadPlaces();
    // }, [ dispatch, loadPlaces ]);

    //console.log(props);
    //renderGridItem must be here for access to my props
    const renderGridItem = itemData => {
        return (           
            <CategoryGridTile 
                title={itemData.item.title} 
                image={itemData.item.categoryImgUrl}
                onSelect={() => {
                    props.navigation.navigate({ 
                        routeName: 'Category', 
                        params: {
                            categoryId: itemData.item.id
                        } 
                    });
                }}
            />         
            );
    };
    // if ( error ) {
    //     return <View style={styles.centered}>
    //         <Text>An error ocurred!!!</Text>
    //         <Button title='Try again' onPress={loadPlaces} color={Colors.accentColor}/>
    //     </View>
    // }

    // if (isLoading) { 
    //     return <View style={styles.centered}>
    //         <ActivityIndicator size='large' color={Colors.accent}/>
    //     </View>

    // };
    //no places found. Maybe start adding some!
    // if (!isLoading && userPlaces.length === 0) { 
    //     return <View style={styles.centered}>
    //         <Text>No products found. Maybe start </Text>
            
    //     </View>

    // };
    return (
        <FlatList          
          keyExtractor={(item,index) => item.id}
          data={CATEGORIES}
          renderItem={renderGridItem} 
          numColumns = {2} 
        />    
    );
};



//add some prop(JS obj) for my CategoriesScreen (header)
CategoriesScreen.navigationOptions = (navData) =>{
        return {
            headerTitle: 'Categories',
            headerRight: () => <Header />,
            //134
            //burger menu
            headerLeft: () =>
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item title="Menu" iconName='ios-menu' onPress={() => {
                        navData.navigation.toggleDrawer();
                    }} />
                </HeaderButtons>
        };
};

const styles = StyleSheet.create({
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoriesScreen;