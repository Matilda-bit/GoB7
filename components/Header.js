import React from "react";
import { View, Text, StyleSheet } from "react-native";
//import Colors from '../constants/Colors';
import TitleText from "./text/TitleText";

const Header = () => {
  return (
    <View style={styles.header}>
      <TitleText>
        <Text style={styles.title}>Go B7</Text>
      </TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 60,
    paddingRight: 18,
    paddingBottom: 5,

    //paddingTop: 35,
    //backgroundColor: Colors.wisteria,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontSize: 35,
  },
});

export default Header;
