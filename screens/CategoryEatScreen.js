import React from 'react';

import { CATEGORIES, PLACE } from '../data/dummy-data';
import PlaceList from '../components/PlaceList';

const CategoryEatScreen = props => {
    
    //give a value storing in CategoriesScreen
    const catId = props.navigation.getParam('categoryId');
    //pass data
    //const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    const displayedPlaces = PLACE.filter(
        place => place.categoryId.indexOf(catId) >=0);

    return    <PlaceList listData={displayedPlaces} navigation={props.navigation}/>;
};

//add dinamic configure for headerTitle because we need to use props after fun definition
CategoryEatScreen.navigationOptions = (navigationData) => {
    //console.log(navigationData);
    const catId= navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return {
        headerTitle: selectedCategory.title      
    };
};



export default CategoryEatScreen;