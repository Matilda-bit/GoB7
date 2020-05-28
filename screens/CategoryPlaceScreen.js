import React from "react";
import { View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import { CATEGORIES } from "../data/dummy-data";
import PlaceList from "../components/PlaceList";
import Header from "../components/Header";
import BodyText from "../components/text/BodyText";

const CategoryPlaceScreen = (props) => {
  //give a value storing in CategoriesScreen
  const catId = props.navigation.getParam("categoryId");
  //pass data
  const availablePlaces = useSelector((state) => state.places.filteredPlaces);

  const displayedPlaces = availablePlaces.filter(
    (place) => place.categoryId.indexOf(catId) >= 0
  );
  if (displayedPlaces.length === 0 || displayedPlaces === null) {
    return (
      <View style={styles.content}>
        <BodyText>No data found, maybe check your filters?</BodyText>
      </View>
    );
  }
  return <PlaceList listData={displayedPlaces} navigation={props.navigation} />;
};

//add dinamic configure for headerTitle because we need to use props after fun definition
CategoryPlaceScreen.navigationOptions = (navigationData) => {
  //console.log(navigationData);
  const catId = navigationData.navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  return {
    headerTitle: selectedCategory.title,
    headerRight: () => <Header />,
  };
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryPlaceScreen;
