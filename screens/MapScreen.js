import React from "react";
import { View, StyleSheet, Text } from "react-native";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/UI/HeaderButton";
import Header from "../components/Header";

import MapView from "react-native-maps";

const MapScreen = (props) => {
  const mapRegion = {
    latitude: 31.253,
    longitude: 34.7915,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  return <MapView style={styles.map} region={mapRegion} />;
};

MapScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Maps",
    headerRight: () => <Header />,
    //134
    //burger menu
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

export default MapScreen;
