import React, { useState, useEffect, useCallback } from 'react';
import { 
    View,
    Text, 
    StyleSheet ,
    ScrollView,
    Platform
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Switch } from 'react-native-paper';
import { useDispatch } from 'react-redux';

import HeaderButton from '../components/HeaderButton';
import Header from '../components/Header';
import Colors from '../constants/Colors'
import { setFilters } from '../store/actions/places';
// import { ScrollView } from 'react-native-gesture-handler';

const FilterSwitch = props => {
    return(
    
        <View style={styles.filterContainer}>
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

    const {navigation} = props;
    //const [isClosesPlace, setIsClosesPlace] = useState(false);
    const [isOpenShabbath, setIsOpenShabbath] = useState(false);
    const [isOpenNow, setIsOpenNow] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);
    const [isKosher, setIsKosher] = useState(false);
    const [isNotKosher, setIsNotKosher] = useState(false);
    const [isCafe, setIsCafe] = useState(false);
    const [isRestaurant, setIsRestaurant] = useState(false);
    const [isDelivery, setIsDelivery] = useState(false);
    const [isTakeAway, setIsTakeAway] = useState(false);
    const [isFastFood, setIsFastFood] = useState(false);
    const [isGrill, setIsGrill] = useState(false);
    const [isSushi, setIsSushi] = useState(false);
    const [isItalian, setIsItalian] = useState(false);
    const [isAsian, setIsAsian] = useState(false);
    const [isEuropean, setIsEuropean] = useState(false);
    const [isIndian, setIsIndian] = useState(false);
    

    const dispatch = useDispatch();
    //use useEffect to give access to this function whivh is part of my component to my navigation options
    const saveFilters = useCallback(() => {
        const appliedFilters = {
            openShabbath: isOpenShabbath,
            openNow: isOpenNow,
            vegan: isVegan,
            vegetarian: isVegetarian,
            kosher: isKosher,
            notKosher: isNotKosher,
            cafe: isCafe,
            restaurant: isRestaurant,
            delivery: isDelivery,
            takeAway: isTakeAway,
            fastFood: isFastFood,
            grill: isGrill,
            sushi: isSushi,
            italian: isItalian,
            asian: isAsian,
            european: isEuropean,
            indian: isIndian

            //need to add closes places
            //closesPlace: isClosesPlace

        };
        dispatch(setFilters(appliedFilters));
        //console.log(appliedFilters);
    }, [isOpenShabbath, isOpenNow, isVegan, isVegetarian, isKosher, isNotKosher, isCafe, isRestaurant, isDelivery, isTakeAway, isFastFood, isGrill, isSushi, isItalian, isAsian, isEuropean, isIndian, dispatch]);
    // isOpenNow - must to be the same name from /reducers/places in 'if'

    useEffect(() => {
        navigation.setParams({ save: saveFilters });
    }, [saveFilters]);

        return (
            <ScrollView>
            <View style = {styles.screen}>
            <Text style = {styles.title}>Available Filters / Restrictions </Text>
            
            <FilterSwitch 
                label='open now' 
                state={isOpenNow} 
                onChange={newValue => setIsOpenNow(newValue)}
            />
            <FilterSwitch 
                label='open-Shabbath' 
                state={isOpenShabbath} 
                onChange={newValue => setIsOpenShabbath(newValue)}
            />
            <FilterSwitch 
                label='vegan' 
                state={isVegan} 
                onChange={newValue => setIsVegan(newValue)}
            />
            <FilterSwitch 
                label='vegetarian' 
                state={isVegetarian} 
                onChange={newValue => setIsVegetarian(newValue)}
            />
            <FilterSwitch 
                label='kosher' 
                state={isKosher} 
                onChange={newValue => setIsKosher(newValue)}
            />
            <FilterSwitch 
                label='not-Kosher' 
                state={isNotKosher} 
                onChange={newValue => setIsNotKosher(newValue)}
            />
            <FilterSwitch 
                label='cafe' 
                state={isCafe} 
                onChange={newValue => setIsCafe(newValue)}
            />
            <FilterSwitch 
                label='restaurant' 
                state={isRestaurant} 
                onChange={newValue => setIsRestaurant(newValue)}
            />
            <FilterSwitch 
                label='delivery' 
                state={isDelivery} 
                onChange={newValue => setIsDelivery(newValue)}
            />
            <FilterSwitch 
                label='takeAway' 
                state={isTakeAway} 
                onChange={newValue => setIsTakeAway(newValue)}
            />
            <FilterSwitch 
                label='fastFood' 
                state={isFastFood} 
                onChange={newValue => setIsFastFood(newValue)}
            />
            <FilterSwitch 
                label='grill' 
                state={isGrill} 
                onChange={newValue => setIsGrill(newValue)}
            />
            <FilterSwitch 
                label='sushi' 
                state={isSushi} 
                onChange={newValue => setIsSushi(newValue)}
            />
            <FilterSwitch 
                label='italian' 
                state={isItalian} 
                onChange={newValue => setIsItalian(newValue)}
            />
            <FilterSwitch 
                label='asian' 
                state={isAsian} 
                onChange={newValue => setIsAsian(newValue)}
            />
            <FilterSwitch 
                label='european' 
                state={isEuropean} 
                onChange={newValue => setIsEuropean(newValue)}
            />
            <FilterSwitch 
                label='indian' 
                state={isIndian} 
                onChange={newValue => setIsIndian(newValue)}
            />
            {/* <FilterSwitch 
                label='by closest place' 
                state={isClosesPlace} 
                onChange={newValue => setIsClosesPlace(newValue)}
            /> */}
            
        </View>
        </ScrollView>
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