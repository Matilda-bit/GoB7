import React from 'react';
import { View,Text, FlatList, StyleSheet } from 'react-native';

import { CATEGORIES, PLACE } from '../data/dummy-data';
import MyItem from '../components/MyItem';

const CategoryEatScreen = props => {
    //data for my FlatList in renderItem
    const renderMyItem = itemData => {
        return (
            <MyItem 
                title={itemData.item.title} 
                location={itemData.item.location} 
                openingHours={itemData.item.openingHours}
                image={itemData.item.imageUrl}
                onSelectedMyItem={() => {
                    props.navigation.navigate({ 
                        routeName: 'MyDetail', 
                        params: {
                            myId: itemData.item.id
                        } 
                    });
                }}

            />
        );
    };

    //give a value storing in CategoriesScreen
    const catId = props.navigation.getParam('categoryId');
    //pass data
    //const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    const displayedPlaces = PLACE.filter(place => place.categoryId.indexOf(catId) >=0);

    return (
        <View style = {styles.screen}>
            <FlatList 
                data={displayedPlaces} 
                keyExtractor={(item,idex) => item.id } 
                renderItem={renderMyItem}
                style={{width: '90%'}}
                />
        </View>
    );
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


const styles = StyleSheet.create({
screen:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
}

});

export default CategoryEatScreen;