import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import * as Font from "expo-font";
import ReduxThunk from "redux-thunk";

import { AppLoading } from "expo";
import { enableScreens } from "react-native-screens";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import NavigationContainer from "./navigation/NavigationContainer";
import placesReducer from "./store/reducers/places";
import authReducer from "./store/reducers/auth";

enableScreens();

const rootReducer = combineReducers({
  places: placesReducer,
  auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans-title": require("./assets/fonts/Titillium-Bold.otf"),
    "open-sans-amatic": require("./assets/fonts/Amatic-Bold.ttf"),
    "open-sans-lato": require("./assets/fonts/ChunkFive-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    //'open-sans-light' : require('./assets/fonts/OpenSans-Light.ttf'),
    "open-sans-regular": require("./assets/fonts/OpenSans-Regular.ttf"),
  });
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <Provider store={store}>
      <NavigationContainer />
    </Provider>
  );
}
