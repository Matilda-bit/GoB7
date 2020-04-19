import React, { useEffect } from 'react';
import {  
    FlatList
} from 'react-native';
import { useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { CATEGORIES } from '../data/dummy-data';
import Header from '../components/Header';
import HeaderButton from '../components/UI/HeaderButton';
import CategoryGridTile from '../components/CategoryGridTile';
import * as placesActions from '../store/actions/places';

const CategoriesScreen = props => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(placesActions.fetchPlaces());
    }, [ dispatch ]);

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
export default CategoriesScreen;