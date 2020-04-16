import React from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import Header from '../../components/Header';
import HeaderButton from '../../components/UI/HeaderButton';
import CategoryGridTile from '../../components/CategoryGridTile';
import BodyText from '../../components/text/BodyText';

const CategoryChoiceScreen = props => {
    const Categories = useSelector(state => state.places.category)
    const renderGridItem = itemData => {
        //const isFavorite = favoritePlaces.some(place => place.id === itemData.item.id);
        return (           
            <CategoryGridTile 
                title={itemData.item.title} 
                image={itemData.item.categoryImgUrl}
                onSelect={() => {
                    props.navigation.navigate({ 
                        routeName: 'Admin', 
                        params: {
                            categoryId: itemData.item.id,
                            categoryTitle: itemData.item.title,
                            categoryImg: itemData.item.categoryImgUrl
                        } 
                    });
                }}
            />         
            );
    };
    return (
        <View style={styles.list}>
            <View style={styles.textBox}>
                <BodyText>Your place belongs to ...</BodyText>
            </View>
            <FlatList          
                keyExtractor={(item,index) => item.id}
                data={Categories}
                renderItem={renderGridItem} 
                numColumns = {2} 
                style={{width: '100%'}}
            />  
        </View>  
    );
};
//add some prop(JS obj) for my CategoryChoiceScreen (header)
CategoryChoiceScreen.navigationOptions = (navData) =>{
    return {
        headerTitle: 'Choice category',
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
    list:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    textBox: {
        marginVertical: 5
    }
});
export default CategoryChoiceScreen;