import React from 'react';
import { 
    View, 
    StyleSheet,
    Text, 
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

//import { MapView, Permissions } from 'expo';

import HeaderButton from '../components/HeaderButton';
import Header from '../components/Header';

const MapScreen = props => {
 //   const myMap;
    return (
        <View>
            <Text>Maps</Text>
        
            <View style={styles.screen}>
               
            </View>
        </View>  
    );
};

// MapScreen.navigationOption = (navData) =>{
//     return {
//         headerTitle: 'Maps',
//         headerLeft: 
//             <HeaderButtons HeaderButtonComponent={HeaderButton}>
//                 <Item title="Menu" iconName='ios-menu' onPress={() => {
//                     navData.navigation.toggleDrawer();
//                 }} />
//             </HeaderButtons>
//     };

// };

MapScreen.navigationOptions = (navData) =>{
    return {
    headerTitle: 'Maps',
    headerRight: () => <Header />,
    //134
    //burger menu
    headerLeft:  () =>
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Menu" iconName='ios-menu' onPress={() => {
                navData.navigation.toggleDrawer();
            }} />
        </HeaderButtons>
    };
};

const styles= StyleSheet.create ({
   screen: {
       flex: 1,
       padding: 10,
       alignItems: 'center'
   } 
});

export default MapScreen;