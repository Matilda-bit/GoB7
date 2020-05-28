import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
  ImageBackgroundBase,
} from "react-native";

const CategoryGridTile = (props) => {
  let TouchableCmp = TouchableOpacity;
  //console.log(props.color);
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <View style={styles.gridItem}>
      <TouchableCmp style={{ flex: 1 }} onPress={props.onSelect}>
        <View>
          <ImageBackground source={{ uri: props.image }} style={styles.bgImage}>
            <Text style={styles.title} numberOfLines={2}>
              {props.title}{" "}
            </Text>
          </ImageBackground>
        </View>
      </TouchableCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 10,
    height: 165,
    borderRadius: 25,
    borderColor: "black",
    borderWidth: 1,
    overflow:
      Platform.OS === "android" && Platform.Version >= 21
        ? "hidden"
        : "visible",
    elevation: 5,
  },
  container: {
    flex: 1,
    shadowColor: "black",
    shadowOpacity: 0.32,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 25,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  title: {
    fontFamily: "open-sans-lato",
    fontSize: 23,
    textAlign: "center",
    color: "white",
    //textDecorationLine: 'underline',
    textShadowOffset: { width: 0, height: 2 },
    textShadowColor: "black",
    textShadowRadius: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    //backgroundColor: 'rgba(0,0,0,0.5)'
  },
});

export default CategoryGridTile;
