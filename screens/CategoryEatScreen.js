import React from 'react';

import { CATEGORIES, PLACE } from '../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import PlaceList from '../components/PlaceList';
import HeaderButton from '../components/HeaderButton';
import Header from '../components/Header';

const CategoryEatScreen = props => {
    
    //give a value storing in CategoriesScreen
    const catId = props.navigation.getParam('categoryId');
    //pass data
    //const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    const displayedPlaces = PLACE.filter(
        place => place.categoryId.indexOf(catId) >=0);

    return    <PlaceList 
                listData={displayedPlaces} 
                navigation={props.navigation}
                />;
};

//add dinamic configure for headerTitle because we need to use props after fun definition
CategoryEatScreen.navigationOptions = (navigationData) => {
    //console.log(navigationData);
    const catId= navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return {
        headerTitle: selectedCategory.title ,
        headerRight: () => <Header />,
        //burger menu
        headerLeft:  () =>
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title="Menu" iconName='ios-menu' onPress={() => {
                    navigationData.navigation.toggleDrawer();
                }} />
            </HeaderButtons>     
    };
};



export default CategoryEatScreen;