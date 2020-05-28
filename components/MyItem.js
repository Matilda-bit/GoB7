import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";

import BodyText from "./text/BodyText";

const MyItem = (props) => {
  return (
    <View style={styles.myItem}>
      <TouchableOpacity onPress={props.onSelectedMyItem}>
        <View>
          <View style={{ ...styles.myRow, ...styles.myHeader }}>
            <ImageBackground
              source={{ uri: props.image }}
              style={styles.bgImage}
            >
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>
                  {props.title}
                </Text>
              </View>
            </ImageBackground>
          </View>

          <View style={{ ...styles.myRow, ...styles.myDetail }}>
            <BodyText>{props.location}</BodyText>
            <BodyText>{props.openingHours.toUpperCase()}</BodyText>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  myRow: {
    flexDirection: "row",
  },
  myItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 10,
    borderColor: "black",
    borderWidth: 0.8,
  },
  myHeader: {
    height: "85%",
  },
  myDetail: {
    paddingHorizontal: 7,
    justifyContent: "space-between",
    alignItems: "center",
    height: "15%",
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  title: {
    fontFamily: "open-sans-lato",
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 5,
    //paddingHorizontal: 10,
  },
});

export default MyItem;
