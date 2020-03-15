import React from 'react';
import {  
    FlatList,
    StyleSheet
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { CATEGORIES } from '../data/dummy-data';

import HeaderButton from '../components/HeaderButton';
import CategoryGridTile from '../components/CategoryGridTile';


const CategoriesScreen = props => {
    //console.log(props);
    //renderGridItem must be here for access to my props
    const renderGridItem = (itemData) => {
        return (
            <CategoryGridTile 
                title={itemData.item.title} 
                color={itemData.item.color}
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
            //134
            //burger menu
            headerLeft: 
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item title="Menu" iconName='ios-menu' onPress={() => {
                        navData.navigation.toggleDrawer();
                    }} />
                </HeaderButtons>
        };
};

const styles = StyleSheet.create({
screen:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
},

});

export default CategoriesScreen;