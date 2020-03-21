import React, { useState }  from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import {  enableScreens } from 'react-native-screens';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';


//import Header from './components/Header';
import PlacesNavigator from './navigation/PlacesNavigator';
import placesReducer from './store/reducers/places'

enableScreens();

const rootReducer = combineReducers({
  places: placesReducer
});

const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans-title': require('./assets/fonts/Titillium-Bold.otf'),
    'open-sans-amatic': require('./assets/fonts/Amatic-Bold.ttf'),
    'open-sans-lato' : require('./assets/fonts/ChunkFive-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    //'open-sans-light' : require('./assets/fonts/OpenSans-Light.ttf'),
    'open-sans-regular' : require('./assets/fonts/OpenSans-Regular.ttf')
    
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
      
  };

  return (
    <Provider store={store}> 
      <PlacesNavigator />
    </Provider>
  );
};

// const styles = StyleSheet.create({
//   screen: {
//     flex: 1
//   }
  
// });

