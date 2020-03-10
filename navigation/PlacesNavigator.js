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
import FiltersScreen from '../screens/FiltersScreen';
import MapScreen from '../screens/MapScreen';

import Colors from '../constants/Colors';

const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.wisteria : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.wisteria,
    headerTitle: 'A Screen'

};


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
    //Favorites: FavoritesScreen,
    Location: MapScreen,
    PlaceDetail: PlaceDetailScreen
    }, 
    {
    defaultNavigationOptions: defaultStackNavOptions
    }

);


const tabScreenConfig = {
    Place: { 
        screen:  PlacesNavigator, 
        navigationOptions: {
            tabBarLabel: 'List',
            tabBarIcon: (tabInfo) => {
              return <Ionicons name='ios-list' size={25} color={tabInfo.tintColor}/>
        },
        tabBarColor: Colors.c1

    }},
    // Favorites: {
    //     screen: FavNavigator, 
    //     navigationOptions: {
    //         tabBarLabel: 'Favorite places!',
    //         tabBarIcon: (tabInfo) => {
    //             return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor}/>
    //     },
    //     tabBarColor: Colors.c1
    // }},
    Location: {
        screen: FavNavigator, 
        navigationOptions: {
            tabBarLabel: 'Maps',
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='md-map' size={25} color={tabInfo.tintColor}/>
        },
        tabBarColor: Colors.c1
    }}

};

const PlaceFavTabNavigator = Platform.OS === 'android' 
? createBottomTabNavigator( tabScreenConfig, {
    tabBarOptions: {
        activeTintColor: Colors.accentColor,
        shifting: true,
        barStyle: {
            backgroundColor: Colors.primaryColor
        }
    }
}) 
: createBottomTabNavigator( tabScreenConfig, {
    tabBarOptions: {
        activeTintColor: Colors.accent
    }
});

const FilterNavigator = createStackNavigator(
    {
        Filters: FiltersScreen
    },{
        // navigationOptions: {
        //     drawerLabel: 'Filters!!!'
        // },
        defaultNavigationOptions: defaultStackNavOptions
        }
);
const PlaceMapTabNavigator = Platform.OS === 'android' 
? createBottomTabNavigator( tabScreenConfig, {
    tabBarOptions: {
        activeTintColor: Colors.accentColor,
        shifting: true,
        barStyle: {
            backgroundColor: Colors.primaryColor
        }
    }
}) 
: createBottomTabNavigator( tabScreenConfig, {
    tabBarOptions: {
        activeTintColor: Colors.accent
    }
});



const MainNavigator = createDrawerNavigator({
    MyFavs: {
        screen: PlaceMapTabNavigator, 
        navigationOptions: {
            drawerLabel: "List"
        }
    },
    Filters: FilterNavigator
    },
    {
        contentOptions: {
            activeTintColor: Colors.accentColor,
            labelStyle: {
                fontFamily: 'open-sans-bold'
            }
        }
    }
    );

export default createAppContainer(MainNavigator);