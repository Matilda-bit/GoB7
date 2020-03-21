import React, { useState, useEffect, useCallback } from 'react';
import { 
    View,
    Text, 
    StyleSheet ,
    Platform
} from 'react-native';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import Header from '../components/Header';
import { Switch } from 'react-native-paper';
import Colors from '../constants/Colors'

const FilterSwitch = props => {
    return(
    <View style = {styles.filterContainer}>
        <Text>{props.label}</Text>
        <Switch 
            trackColor={{true: Colors.accent}}
            //thumbColor= {Platform.OS === 'android' ? Colors.accent : ''}
            value={props.state} 
            onValueChange={props.onChange}
        />
    </View>
    );
};

const FiltersScreen = props => {
    const { navigation } = props;

    const [isOpenNow, setIsOpenNow] = useState(false);
    const [isClosesPlace, setIsClosesPlace] = useState(false);

    //use useEffect to give access to this function whivh is part of my component to my navigation options
    const saveFilters = useCallback(() => {
        const appliedFilters = {
            openNow: isOpenNow,
            //need to add closes places
            closesPlace: isClosesPlace
        };

        console.log(appliedFilters);
    }, [isOpenNow, isClosesPlace]);


    useEffect(() => {
        navigation.setParams({save: saveFilters});
    }, [saveFilters]);

    return (
        <View style = {styles.screen}>
            <Text style = {styles.title}>Available Filters / Restrictions </Text>
            <FilterSwitch 
                label='open now' 
                state={isOpenNow} 
                onChange={newValue => setIsOpenNow(newValue)}
            />
            <FilterSwitch 
                label='by closest place' 
                state={isClosesPlace} 
                onChange={newValue => setIsClosesPlace(newValue)}
            />
            
        </View>
    );
};

//134

FiltersScreen.navigationOptions = (navData) =>{
    return {
        headerTitle: 'Filter Places',
        headerRight: () => <Header />,
        headerRight: () => 
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item 
                        title="Save" 
                        iconName='ios-save' 
                        onPress={navData.navigation.getParam('save')} 
                    />
            </HeaderButtons>,

        //burger menu
        headerLeft:  () =>
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item 
                    title="Menu" 
                    iconName='ios-menu' 
                    onPress={() => {
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
        width: '80%',
        marginVertical: 10
    }

});

export default FiltersScreen;