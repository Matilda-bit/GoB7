import React from 'react';
import { 
    View, 
    StyleSheet,
    Text, 
} from 'react-native';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

import { MapView, Permissions } from 'expo';


const MapScreen = props => {
 //   const myMap;
    return (
        <View>
            <Text>Maps</Text>
        
            <View style={styles}>
               
            </View>
        </View>  
    );
};

MapScreen.navigationOption = (navData) =>{
    return {
        headerTitle: 'Maps',
        headerLeft: 
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title="Menu" iconName='ios-menu' onPress={() => {
                    navData.navigation.toggleDrawer();
                }} />
            </HeaderButtons>
    };

}

MapScreen.navigationOptions ={
    headerTitle: 'Maps'
};

const styles= StyleSheet.create ({
   screen: {
       flex: 1,
       padding: 10,
       alignItems: 'center'
   } 
});

export default MapScreen;