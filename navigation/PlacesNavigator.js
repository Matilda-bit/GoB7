import React from 'react'
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryEatScreen from '../screens/CategoryEatScreen';
import PlaceDetailScreen from '../screens/PlaceDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
//filter screen 134
import FiltersScreen from '../screens/FiltersScreen';
import MapScreen from '../screens/MapScreen';
import BodyText from '../components/BodyText';
import Colors from '../constants/Colors';

//header style
const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.wisteria : ''
    },
    headerTitleStyle: {
        fontFamily: 'open-sans-lato'
    },
    //for ios
    headerBackTitleStyle: {
        fontFamily: 'open-sans-regular'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.wisteria,
    headerTitle: 'A Screen'

};

//ListNavigator
const PlacesNavigator = createStackNavigator({

    Categories: {
        screen: CategoriesScreen
    },
    Category: {
        screen: CategoryEatScreen
    },
    MyDetail: PlaceDetailScreen
}, {
    defaultNavigationOptions: defaultStackNavOptions
       
});

const FavNavigator = createStackNavigator(
    {
    Favorites: FavoritesScreen,
    //Location: MapScreen,
    MyDetail: PlaceDetailScreen
    }, 
    {
    defaultNavigationOptions: defaultStackNavOptions
    }

);

const MapNavigator = createStackNavigator(
    {
    Location: MapScreen,
    PlaceDetail: PlaceDetailScreen
    }, 
    {
    defaultNavigationOptions: defaultStackNavOptions
    }

);


const tabScreenConfig = {
    //add iconы in my tab - list/fav/map
    Place: { 
        screen:  PlacesNavigator, 
        navigationOptions: {
            tabBarLabel: 'List',
            tabBarIcon: (tabInfo) => {
              return <Ionicons name='ios-list' size={25} color={tabInfo.tintColor}/>
        },
        tabBarColor: Colors.c1,
        //for android style
        tabBarLabel: Platform.OS === 'android' ? <BodyText style={{textAlign: 'center'}}>List</BodyText>:'List'

    }},
    Favorites: {
        screen: FavNavigator, 
        navigationOptions: {
            tabBarLabel: 'favorite places',
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor}/>
        },
        tabBarColor: Colors.c1,
        //for android style
        tabBarLabel: Platform.OS === 'android' ? <BodyText style={{textAlign: 'center'}}>favorite places</BodyText> : 'favorite places'
    }},
    //maps
    Location: {
        screen: MapNavigator, 
        navigationOptions: {
            tabBarLabel: 'Maps',
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='md-map' size={25} color={tabInfo.tintColor}/>
        },
        tabBarColor: Colors.c1,
        //for android style
        tabBarLabel: Platform.OS === 'android' ? <BodyText style={{textAlign: 'center'}}>Maps</BodyText>:'Maps'
    }}

};

const PlaceFavTabNavigator = Platform.OS === 'android' 
? createBottomTabNavigator( tabScreenConfig, {
    tabBarOptions: {
        //activeTintColor: 'white',
        activeTintColor: Colors.accentColor,
        shifting: true,
        barStyle: {
            backgroundColor: Colors.primaryColor
        }
    }
}) 
: createBottomTabNavigator( tabScreenConfig, {
    tabBarOptions: {
        labelStyle: {
            fontFamily: 'open-sans-lato'
        },
        activeTintColor: Colors.accent
    }
});

//134
const FilterNavigator = createStackNavigator(
    {
        Filters: FiltersScreen
    },
    {
        navigationOptions: {
            drawerLabel: "Filters!"
        },
        defaultNavigationOptions: defaultStackNavOptions
    }
);
//my nav list in burger menu
const MainNavigator = createDrawerNavigator({
    MyFavs: {
        screen: PlaceFavTabNavigator, 
        navigationOptions: {
            drawerLabel: "Catalog"
        }
    },
    Filters: FilterNavigator
    },
    //my styles for text into burger
    {
        contentOptions: {
            activeTintColor: Colors.accentColor,
            labelStyle: {
                fontFamily: 'open-sans-bold'
            }
        }
    }
    );

    // const styles = StyleSheet.create({
    //     text:{
    //         fontFamily: 'open-sans-bold', 
    //         textAlign: 'center', 
    //         color: 'gray'
    //     }
        
    //     });

export default createAppContainer(MainNavigator);