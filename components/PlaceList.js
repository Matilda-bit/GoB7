import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import MyItem from "./MyItem";
import Screenbk from "../constants/default-styles";
import { useSelector } from "react-redux";

const PlaceList = (props) => {
  const favoritePlaces = useSelector((state) => state.places.favoritePlaces);

  //data for my FlatList in renderItem
  const renderMyItem = (itemData) => {
    const isFavorite = favoritePlaces.some(
      (place) => place.id === itemData.item.id
    );

    return (
      <MyItem
        title={itemData.item.title}
        location={itemData.item.location}
        openingHours={itemData.item.openingHours}
        image={itemData.item.imageUrl}
        onSelectedMyItem={() => {
          props.navigation.navigate({
            routeName: "MyDetail",
            params: {
              placeId: itemData.item.id,
              placeTitle: itemData.item.title,
              isFav: isFavorite,
            },
          });
        }}
      />
    );
  };

  return (
    <View style={{ ...styles.list, ...Screenbk.screen }}>
      <FlatList
        data={props.listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMyItem}
        style={{ width: "95%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PlaceList;
