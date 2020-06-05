import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";

import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";

import { Ionicons } from "@expo/vector-icons";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryPlaceScreen from "../screens/CategoryPlaceScreen";
import PlaceDetailScreen from "../screens/PlaceDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
//filter screen 134
import FiltersScreen from "../screens/FiltersScreen";
import CategoryChoiceScreen from "../screens/user/CategoryChoiceScreen";
import EditPlacesScreen from "../screens/user/EditPlacesScreen";
import UserPlacesScreen from "../screens/user/UserPlacesScreen";
import MapScreen from "../screens/MapScreen";
import BodyText from "../components/text/BodyText";
import Colors from "../constants/Colors";
import AuthScreen from "../screens/user/AuthScreen";

//header style
const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.wisteria : "",
  },
  headerTitleStyle: {
    fontFamily: "open-sans-lato",
  },
  //for ios
  headerBackTitleStyle: {
    fontFamily: "open-sans-regular",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.wisteria,
  headerTitle: "A Screen",
};

//ListNavigator
const PlacesNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
    },
    Category: {
      screen: CategoryPlaceScreen,
    },
    MyDetail: PlaceDetailScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const FavNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MyDetail: PlaceDetailScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const MapNavigator = createStackNavigator(
  {
    Location: MapScreen,
    PlaceDetail: PlaceDetailScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

// configure main tab
const tabScreenConfig = {
  //add iconы in my tab - list/fav/map
  Place: {
    screen: PlacesNavigator,
    navigationOptions: {
      tabBarLabel: "List",
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-list" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.c1,
      //for android style
      tabBarLabel:
        Platform.OS === "android" ? (
          <BodyText style={{ textAlign: "center" }}>List</BodyText>
        ) : (
          "List"
        ),
    },
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarLabel: "favorite places",
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.c1,
      //for android style
      tabBarLabel:
        Platform.OS === "android" ? (
          <BodyText style={{ textAlign: "center" }}>favorite places</BodyText>
        ) : (
          "favorite places"
        ),
    },
  },
  //maps
  Location: {
    screen: MapNavigator,
    navigationOptions: {
      tabBarLabel: "Maps",
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="md-map" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.c1,
      //for android style
      tabBarLabel:
        Platform.OS === "android" ? (
          <BodyText style={{ textAlign: "center" }}>Maps</BodyText>
        ) : (
          "Maps"
        ),
    },
  },
};

const AppMenuNavigator =
  Platform.OS === "android"
    ? createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          //activeTintColor: 'white',
          activeTintColor: Colors.accentColor,
          shifting: true,
          barStyle: {
            backgroundColor: Colors.primaryColor,
          },
        },
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          labelStyle: {
            fontFamily: "open-sans-lato",
          },
          activeTintColor: Colors.accent,
        },
      });

//new addition 09.03.20
const UserPlacesNavigator = createStackNavigator(
  {
    UserPlaces: { screen: UserPlacesScreen },
    EditPlace: {
      screen: EditPlacesScreen,
    },

    AddPlace: { screen: CategoryChoiceScreen },
    Maps: {
      screen: MapNavigator,
      //   navigationOptions: {
      //     tabBarLabel: "Maps",
      //     tabBarIcon: (tabInfo) => {
      //       return <Ionicons name="md-map" size={25} color={tabInfo.tintColor} />;
      //     },
      //     tabBarColor: Colors.c1,
      //     //for android style
      //     tabBarLabel:
      //       Platform.OS === "android" ? (
      //         <BodyText style={{ textAlign: "center" }}>Maps</BodyText>
      //       ) : (
      //         "Maps"
      //       ),
      //   },
      //Location: { screen: MapScreen},
    },
  },
  {
    navigationOptions: {
      drawerLabel: "My Places",
    },
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

// const AdminNavigator = createStackNavigator(
//     {
//         screen: CategoryChoiceScreen,
//         Admin: EditPlacesScreen,
//     },
//     {
//         navigationOptions: {
//             drawerLabel: "Admin"
//         },

//         defaultNavigationOptions: defaultStackNavOptions
//     }
// );
// configure new tab in Admin
// const tabAdminScreenConfig = {
//     //add icons in my tab - list/edit
//     Place: {
//         screen:  UserPlacesNavigator,
//         navigationOptions: {
//             tabBarLabel: 'My Places',
//             tabBarIcon: (tabInfo) => {
//               return <Ionicons name='ios-list' size={25} color={tabInfo.tintColor}/>
//         },
//         tabBarColor: Colors.c1,
//         //for android style
//         tabBarLabel: Platform.OS === 'android' ? <BodyText style={{textAlign: 'center'}}>My Places</BodyText>:'List'

//     }},
//     Admin: {
//         screen: AdminNavigator,
//         navigationOptions: {
//             tabBarLabel: 'add new Place',
//             tabBarIcon: (tabInfo) => {
//                 return <Ionicons
//                             name={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
//                             size={25}
//                             color={tabInfo.tintColor}/>
//         },
//         tabBarColor: Colors.c1,
//         //for android style
//         tabBarLabel: Platform.OS === 'android' ? <BodyText style={{textAlign: 'center'}}>add new Place</BodyText> : 'favorite places'
//     }}
// };

// const AdminTabNavigator = Platform.OS === 'android'
// ? createBottomTabNavigator( tabAdminScreenConfig, {
//     tabBarOptions: {
//         activeTintColor: Colors.accentColor,
//         shifting: true,
//         barStyle: {
//             backgroundColor: Colors.primaryColor
//         }
//     }
// })
// : createBottomTabNavigator( tabAdminScreenConfig, {
//    tabBarComponent: {
//        labelStyle: {
//            fontFamily: 'open-sans-lato'
//        },
//        activeTintColor: Colors.accent
//    }
// });

//134
const FilterNavigator = createStackNavigator(
  {
    Filters: FiltersScreen,
  },
  {
    navigationOptions: {
      drawerLabel: "Filters!",
    },
    defaultNavigationOptions: defaultStackNavOptions,
  }
);
//my nav list in burger menu
const MenuMainNavigator = createDrawerNavigator(
  {
    MyCatalog: {
      screen: AppMenuNavigator,
      navigationOptions: {
        drawerLabel: "Catalog",
      },
    },
    Filters: FilterNavigator,
    Admin: UserPlacesNavigator,
  },
  //my styles for text into burger
  {
    contentOptions: {
      activeTintColor: Colors.accentColor,
      labelStyle: {
        fontFamily: "open-sans-bold",
      },
    },
  }
);

const AuthNavigator = createStackNavigator(
  {
    Auth: AuthScreen,
    // App:
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const MainNavigator = createSwitchNavigator({
  Auth: AuthNavigator,
  Catalog: MenuMainNavigator,
  //defaultNavigationOptions: defaultStackNavOptions
});

export default createAppContainer(MainNavigator);
