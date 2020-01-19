import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import MyItem from './MyItem';


const PlaceList = props => {
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


    return  (<View style = {styles.list}>
    <FlatList 
        data={props.listData} 
        keyExtractor={(item,idex) => item.id } 
        renderItem={renderMyItem}
        style={{width: '90%'}}
        />
    </View>);
};

const styles = StyleSheet.create({
    list:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default PlaceList;