import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import { createBottomTabNavigator } from 'react-navigation-tabs'

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryEatScreen from '../screens/CategoryEatScreen';
import PlaceDetailScreen from '../screens/PlaceDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

import Colors from '../constants/Colors';


const PlacesNavigator = createStackNavigator({

    Categories: {
        screen: CategoriesScreen
    },
    Category: {
        screen: CategoryEatScreen
    },
    MyDetail: PlaceDetailScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.wisteria : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.wisteria
    }
});
const PlaceFavTabNavigator = createBottomTabNavigator({
    Place:  PlacesNavigator,
    Favorites: FavoritesScreen
}
);
export default createAppContainer(PlaceFavTabNavigator);