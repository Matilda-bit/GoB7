import React from 'react';
import { 
    View,
    Text, 
    StyleSheet 
} from 'react-native';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import Header from '../components/Header';
import { Switch } from 'react-native-paper';

const FiltersScreen = props => {
    return (
        <View style = {styles.screen}>
            <Text style = {styles.title}>Available Filters / Restrictions </Text>
            <View style = {styles.filterContainer}>
                <Text>open now</Text>
                <Switch/>
            </View>
            <View style = {styles.filterContainer}>
                <Text>by closest place</Text>
                <Switch/>
            </View>
        </View>
    );
};

//134

FiltersScreen.navigationOptions = (navData) =>{
    return {
        headerTitle: 'Filter Places',
        headerRight: () => <Header />,
        //burger menu
        headerLeft:  () =>
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title="Menu" iconName='ios-menu' onPress={() => {
                    navData.navigation.toggleDrawer();
                }} />
            </HeaderButtons>
   };
};


const styles = StyleSheet.create({
    screen:{
        flex: 1,
        alignItems: "center"
    },
    title: {
        fontFamily: 'open-sans-lato',
        fontSize: 22,
        margin: 20,
        textAlign: 'center'
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%'
    }

});

export default FiltersScreen;