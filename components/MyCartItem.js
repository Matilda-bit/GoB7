import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
//don't need this anymore
const MyCartItem = (props) => {
  return (
    <View>
      <Text>
        <Text> QTY </Text>
        <Text> TITLE </Text>
      </Text>
      <View>
        <Text>SAMT</Text>

        <TouchableOpacity>
          <Ionicons
            name={Platform.OS === "android" ? "md-trash" : "ios-trash"}
            size={23}
            color="red"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({});

export default MyCartItem;
